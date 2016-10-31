import 'core-js/client/shim';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './main';

platformBrowserDynamic().bootstrapModule(MainModule);
