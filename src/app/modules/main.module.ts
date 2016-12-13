import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from '../components/hello-world.component';

export { HelloWorldComponent };

@NgModule({
  bootstrap: [HelloWorldComponent],
  declarations: [HelloWorldComponent],
  imports: [BrowserModule],
  providers: []
})
export class MainModule {}
