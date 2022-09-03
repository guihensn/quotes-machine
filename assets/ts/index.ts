import { QuotesMachineFactory } from './factories/QuotesMachineFactory.js';
import { ThemeChangerFactory } from './factories/ThemesChangerFactory.js';

let quotesMachineFactory = new QuotesMachineFactory();
let quotesMachine = quotesMachineFactory.make();

let themesChangerFactory = new ThemeChangerFactory();
let themesChanger = themesChangerFactory.make(quotesMachine);

(window as any).quotesMachine = quotesMachine;
(window as any).themesChanger =themesChanger;
