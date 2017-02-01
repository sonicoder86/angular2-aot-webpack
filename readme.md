# Angular 2 AOT (Ahead Of Time) offline compilation example with Webpack
[![Dependency Status](https://david-dm.org/blacksonic/angular2-aot-webpack.svg)](https://david-dm.org/blacksonic/angular2-aot-webpack)
[![devDependency Status](https://david-dm.org/blacksonic/angular2-aot-webpack/dev-status.svg)](https://david-dm.org/blacksonic/angular2-aot-webpack?type=dev)

This repository shows how to use the Angular command line offline compiler ```ngc``` with Webpack.

> If you prefer the Webpack plugin provided by the Angular CLI, 
it can be found in a [separate repository](https://github.com/blacksonic/angular2-aot-cli-webpack-plugin).

> Example for version 4 of Angular can be found in a [separate branch](https://github.com/blacksonic/angular2-aot-webpack/tree/v4) until it gets stable

The application consists of 
a module (```src/app/modules/main.module.ts```)
and a basic component (```src/app/components/hello-world.component.ts```) 
with template (```src/app/components/hello-world.template.html```) 
and component specific style (```src/app/components/hello-world.style.css```).

When the application starts (```npm start```) 
it generates the compiled files next to the modules and the components(```*.ngfactory.ts```).

There is a different entry point for the JIT compiled(```src/app/bootstrap.ts```)
and AOT compiled application(```src/app/bootstrap.aot.ts```).

The application is bundled with Webpack from the bootstrap files and is available on ```http://localhost:9000```.

### Advantages

- Can always be used with the newest version of Angular
- Can output separate compiled files for AOT compatible package publishing

### Disadvantages

- Works only with HTML and CSS, other file types need a previous build step
- [No watch mode yet](https://github.com/angular/angular/issues/12867), must be done manually (```bin/ngc-watch.js```) and compiles all the files
- Need to maintain AOT version of bootstrap file
- Needs cleanup step before compiling

### Known issues

- [AOT related issues](https://github.com/angular/angular/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20aot)

### Further reading

- [Ahead-of-Time Compilation - official](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)
- [Multiple solutions for Angular Ahead of Time (AOT) Compilation](https://blog.craftlab.hu/multiple-solutions-for-angular-ahead-of-time-aot-compilation-c474d9a0d508)
- [Ahead-of-Time Compilation in Angular 2](http://blog.mgechev.com/2016/08/14/ahead-of-time-compilation-angular-offline-precompilation/)
- [Building an Angular 2 Application for Production](http://blog.mgechev.com/2016/06/26/tree-shaking-angular2-production-build-rollup-javascript/)
- [Demystifying Ahead-Of-Time Compilation In Angular 2](http://slides.com/wassimchegham/demystifying-ahead-of-time-compilation-in-angular-2-aot-jit)

### Starters with AOT compilation available

- [Angular CLI](https://github.com/angular/angular-cli)
- [Angular 2 Seed](https://github.com/mgechev/angular-seed)
- [Angular 2 Universal Starter](https://github.com/angular/universal-starter)
