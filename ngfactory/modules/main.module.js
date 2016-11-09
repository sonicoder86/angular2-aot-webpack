import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from '../components/hello-world.component';
export var MainModule = (function () {
    function MainModule() {
    }
    MainModule.decorators = [
        { type: NgModule, args: [{
                    bootstrap: [HelloWorldComponent],
                    declarations: [HelloWorldComponent],
                    imports: [BrowserModule],
                    providers: []
                },] },
    ];
    MainModule.ctorParameters = [];
    return MainModule;
}());
//# sourceMappingURL=main.module.js.map