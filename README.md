# Graphql Express App

<h2 align="center">CLI to Generate GraphQL-Express Boilerplate Application</h2>

<p align="center">
<a href="https://github.com/QuBytes-OSS/graphql-express-app">
<img alt="CLI" src="https://img.shields.io/badge/CLI-graphql--express--app-blue">
</a>
<a href="https://github.com/yashgkar">
<img alt="CLI" src="https://img.shields.io/badge/Author-yashgkar-orange">
</a>
<a href="https://www.npmjs.com/package/graphql-express-app">
<img alt="CLI" src="https://img.shields.io/badge/npm%20package-0.0.1-brightgreen">
</a>
<img align="center" alt="example transformation" src="demo/demo.gif" />
</p>




## About
A command line tool to generate a GraphQL-Express app. 
It uses npm for installation and can be installed on macOs, Linux and Windows machines.

## What does this do?
This CLI tool will generate a GraphQL-Express App to help you start implementing your backend using GraphQL.

## Why use this CLI?
Starting a new project requires almost same file structure and configuration everytime. This led me to start this project; making it easy to initialize any new project that needs GraphQL and Express middleware. 

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

### Mongoose Config:
- Make sure to update the MongoDB URI in the .env file depending on your needs.


## Disclaimer
- This is a work in progress and 100% has bugs in it.
- Currently only configured for JavaScript, TypeScript coming soon <3.
- Note: Nothing will be added if you choose TypeScript in the CLI. 

## Installation
Install this on your machine as a global dependency using following command:
```bash
npm i -g graphql-express-app
```

## How to use it?

```bash
$ graphql-express-app
```
### Flags:
- `--yes` | `-y`: Skip Prompts and initialize default project
- `--git` | `-g`: Initialize with Git in the project folder
- `--install` | `-i`: Install dependencies in the project folder. (You can also do this later using `npm install` or `yarn install`) By default `npm install` will be used.

## TypeScript
I have not yet configured TypeScript but will work on it soon and hopefully include it in the next release.


## Contributing
Pull requests are welcomed. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)