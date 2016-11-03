# Angular 2 AOT (Ahead Of Time) offline compilation example with Webpack
[![Dependency Status](https://david-dm.org/blacksonic/angular2-aot-webpack.svg)](https://david-dm.org/blacksonic/angular2-aot-webpack)
[![devDependency Status](https://david-dm.org/blacksonic/angular2-aot-webpack/dev-status.svg)](https://david-dm.org/blacksonic/angular2-aot-webpack?type=dev)

This repository shows how to use the Angular 2 (final - 2.1.2) command line offline compiler (ngc) with Webpack.

The application consists of a simple component(```src/app/hello-world.component.ts```) 
and a module(```src/app/main.ts```) which is bootstrapped.

When the application starts(```npm start``` or ```npm run start-prod``` for production) 
it generates the compiled files next to the module and the component(```*.ngfactory.ts```),

There is a different entry point for the non compiled(```src/app/bootstrap.ts```)
and AOT compiled application(```bootstrap.aot.ts```).

The difference between the development and production version is minification with UglifyJS.
Both development and production builds create the AOT compiled files.

The application is bundled with Webpack from the bootstrap files and is available on ```http://localhost:9000```.
You can change between the different builds with commenting/uncommenting entry files from ```index.html```.

### Starting the application

There are two modes for the application.

Using the command line tool ```ngc``` for compilation is the default one 
and can be started with ```npm start```. It bundles once and doesn't refresh on changes.

The second one is using the ```@ngtools/webpack``` loader plugin for compilation
and can be started with ```npm run start-plugin```. It uses ```webpack-dev-server``` and 
live reloads on every file change.

### Known issues

If you get unmet dependencies for the ```npm install``` command when updating,
just delete the ```node_modules``` directory and do a clean install.

### Further reading

If you wanna see Typescript tree-shaking in details
[check out this repository](https://github.com/blacksonic/typescript-webpack-tree-shaking).
