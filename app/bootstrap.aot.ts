import { platformBrowser } from '@angular/platform-browser';
import { MainModuleNgFactory } from './main.ngfactory';

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
