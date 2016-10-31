import 'core-js/client/shim';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import { platformBrowser } from '@angular/platform-browser';
import { MainModuleNgFactory } from './main.ngfactory';

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
