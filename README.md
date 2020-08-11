# graphql-express-boilerplate

[![file structure: destiny](https://img.shields.io/badge/CLI-graphql--express--boilerplate-blue)](https://github.com/yashgkar/graphql-express-boilerplate)

## About
A command line tool to generate a GraphQL-Express boilerplate project. 
It uses npm for installation and can be installed on macOs, Linux and Windows machines.

## What does this do?
This CLI tool will generate a GraphQL-Express Boilerplate to help you start implementing your backend using GraphQL.

## Why use this CLI?
Starting a new project requires almost same file structure and configuration everytime. This led me to start this project; to make it easy to initialize any new project that needs GraphQL and Express middleware. 

### Libraries: 
This CLI tool uses following libraries to generate and run project files:

`graphql
express
express-graphql
dotenv
graphql-type-long
mongoose` 

## Requirements
- [`Node.js`](https://nodejs.org/en/)
- npm
- Make sure to have a MongoDB Database installed on your local system or an online instance.

## Installation
Install this on your machine as a global dependency using following command:
```bash
npm i -g graphql-express-boilerplate
```

## Usage
To generate a graphql-express-boilerplate use following command in your project folder.

```bash
graphql-express-boilerplate
```
### Flags:
- `--yes` | `-y`: Skip Prompts and initialize default project
- `--git` | `-g`: Initialize with Git in the project folder
- `--install` | `-i`: Install dependencies in the project folder. (You can also do this later using `npm install` or `yarn install`).

## TypeScript
I have not yet configured TypeScript but will work on it soon and hopefully include it in the next release.
