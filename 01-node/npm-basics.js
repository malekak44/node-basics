// npm update <package-name>
// npm root -g command will tell you where that exact location is on your machine.

// To see the version of all installed npm packages, including their dependencies:
// BASH
// npm list
// npm list -g is the same, but for globally installed packages.
// npm list cowsay
// npm view cowsay version
// npm view cowsay versions

// You probably have some packages installed globally already on your system. You can see them by running
// BASH
// npm list -g --depth 0

// To update all packages to a new major version, install the npm-check-updates package globally:
// BASH
// npm install -g npm-check-updates

// then run it:
// BASH
// ncu -u
// npm update

// You need to set the --production flag (npm install --production) to avoid installing those development dependencies.

// npx cowsay "Hello"