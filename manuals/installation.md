# Installation/first build

This build uses Expo Cli to run.
Expo Cli requires [Node.js](https://nodejs.org/) v12+ to function properly.

## Install the dependencies. 

In this configuration we're going to install Expo Cli globally .

```sh
npm i -g expo-cli
```

## Initialize your project with Expo Cli. 

This will create a new directory where the project will be built.
First go to the location where you want your project folder to be created, then initialize.
Choose the blank template

```sh
cd myProjectsFolder
expo init myNewProject
```

Start the Expo server.

```sh
cd myNewProject
npm start
```

You can now run the app in simulators or on the expo app on the device of your choice.
