import chalk from 'chalk'
import fs from 'fs'
import ncp from 'ncp'
import path from 'path'
import { promisify } from 'util'
import execa from 'execa'
import Listr from 'listr'
import { projectInstall } from 'pkg-install'

const access = promisify(fs.access)
const copy = promisify(ncp)

async function copyProjectFiles(options) {
    return copy(options.templateDirectory, options.targetDirectory, {
        clobber: false
    })
}

async function initGit(options) {
    const result = await execa('git', ['init'], {
        cwd: options.targetDirectory,
    })
    if (result.failed) {
        return Promise.reject(new Error('Failed to initialize Git'))
    }
    return;
}

export async function createProject(options) {
    options = {
        ...options,
        targetDirectory: options.targetDirectory || process.cwd(),
    }

    const currentFileUrl = import.meta.url
    const templateDir = path.resolve(
        new URL(currentFileUrl).pathname,
        '../../templates',
        options.template.toLowerCase()
    )
    options.templateDirectory = templateDir

    try {
        await access(templateDir, fs.constants.R_OK)
    } catch (err) {
        console.error('%s Invaid Template Name', chalk.red.bold('ERROR'))
        process.exit(1)
    }

    const tasks = new Listr([
        {
            title: 'Copy project files',
            task: () => copyProjectFiles(options)
        },
        {
            title: 'Initialize git',
            task: () => initGit(options),
            enable: () => options.git
        },
        {
            title: 'Install dependencies',
            task: () => projectInstall({
                cwd: options.targetDirectory,
            }),
            skip: () => !options.runInstall
                ? 'Next time, pass --install to automatically install project dependencies'
                : undefined,
        }
    ])

    await tasks.run()

    console.log('%s Project ready', chalk.green.bold('DONE'))
    return true
}