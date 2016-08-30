# Angular 2 AOT (Ahead Of Time) offline compilation example with Webpack
[![devDependency Status](https://david-dm.org/blacksonic/angular2-aot-webpack/dev-status.svg)](https://david-dm.org/blacksonic/angular2-aot-webpack#info=devDependencies)

This repository shows how to use the Angular 2 (RC5) command line offline compiler (ngc) with Webpack.

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

### Requirements

- Typescript >= 1.9-dev

### Known issues

Templates must be inlined to the components. 
If not, a preprocessor is needed for inlining them, because 
otherwise the compiler can not determine what is needed in the templates.

Tree-shaking not included in this example, because tree-shaking only works with Typescript 2.0-dev+ 
and the packages needed for offline compilation have a strict dependency on 1.9-dev.
Tried it with Typescript 2.0-dev, it works, but ```npm install``` complains about unmet dependencies
and quits with error code.

If you wanna see Typescript tree-shaking 
[check out this repository](https://github.com/blacksonic/typescript-webpack-tree-shaking).
