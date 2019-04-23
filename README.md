# TypeScript skeleton

Uses Webpack for the development server and to create the final distributable.

## Setup:

1. Open folder in command prompt
2. `npm i`
3. Install the "Debugger for Chrome" extension from Microsoft in VS Code

## Develop:

1. `npm run dev`
2. Open the folder in VS Code
3. Launch debugger with F5
4. localhost:8080 will open with the application and will auto-refresh when code changes are made, and breakpoints will be hit. To disable auto-refresh, add the `--no-inline` flag to `webpack-dev-server` in `package.json`.

## Distribute:

1. `npm run dist`
2. A compressed bundle.js is generated in the /dist folder to distribute along with the HTML and CSS files.
