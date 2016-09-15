# Angular 2 AOT (Ahead Of Time) offline compilation example with Webpack
[![devDependency Status](https://david-dm.org/blacksonic/angular2-aot-webpack/dev-status.svg)](https://david-dm.org/blacksonic/angular2-aot-webpack?type=dev)

This repository shows how to use the Angular 2 (final) command line offline compiler (ngc) with Webpack.

The application consists of a simple component(```app/hello-world.component.ts```) 
and a module(```app/main.ts```) which is bootstrapped.

When the application starts(```npm start``` or ```npm run start-prod``` for production) 
it generates the compiled files next to the module and the component(```*.ngfactory.ts```),

There is a different entry point for the non compiled(```app/bootstrap.ts```)
and AOT compiled application(```bootstrap.aot.ts```).

The difference between the development and production version is minification with UglifyJS.
Both development and production builds create the AOT compiled files.

The application is bundled with Webpack from the bootstrap files and is available on ```http://localhost:9000```.
You can change between the different builds with commenting/uncommenting entry files from ```index.html```.

### Known issues

Tree-shaking not included in this example.

If you wanna see Typescript tree-shaking 
[check out this repository](https://github.com/blacksonic/typescript-webpack-tree-shaking).
