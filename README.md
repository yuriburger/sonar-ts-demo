# sonar-ts-demo
SonarSource recently released an official first version of a static code analyzer for TypeScript. So if you want to get up and running with SonarQube and Typescript: now you have an easy way to do this.

The supported scenarios are:
* Run SonarTS as a TSLint extensionRun 
* SonarTS as a SonarQube plugin. 

More info: [Getting started with SonarQube and TypeScript](https://yuriburger.net/2017/09/27/getting-started-with-sonarqube-and-typescript/)

To setup the demo:

`npm install`

To run the TSLint demo:

`npm run lint`

To run the SonarQube demo:

Edit the gulpfile.js to point to the correct SonarQube instance

`npm run sonar` 


