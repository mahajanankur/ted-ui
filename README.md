# react-template
A basic react boilerplate to start.

# Quick Start
1. Get the latest version by cloning this repository.

2. Run yarn install
This will install both run-time project dependencies and developer tools listed in package.json file.

3. If you running this on Windows run "npm install --global --production windows-build-tools".

4. Run yarn start
This command will build the app from the source files (/src) into the output /build folder. As soon as the initial build completes, it will start the Node.js server (node build/server.js) and Browsersync with HMR on top of it.

> [http://localhost:3000/](http://localhost:3000/) — Node.js server (`build/server.js`)<br>
> [http://localhost:3000/graphql](http://localhost:3000/graphql) — GraphQL server and IDE<br>
> [http://localhost:3001/](http://localhost:3001/) — BrowserSync proxy with HMR, React Hot Transform<br>
> [http://localhost:3002/](http://localhost:3002/) — BrowserSync control panel (UI)

Now you can open your web app in a browser, on mobile devices and start hacking. Whenever you modify any of the source files inside the /src folder, the module bundler (Webpack) will recompile the app on the fly and refresh all the connected browsers.

For more info please refer to getting started guide to download and run the project (Node.js >= 6.5)
