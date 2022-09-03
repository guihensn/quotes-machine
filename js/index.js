import { QuotesMachineFactory } from './factories/QuotesMachineFactory.js';
import { ThemeChangerFactory } from './factories/ThemesChangerFactory.js';
var quotesMachineFactory = new QuotesMachineFactory();
var quotesMachine = quotesMachineFactory.make();
var themesChangerFactory = new ThemeChangerFactory();
var themesChanger = themesChangerFactory.make(quotesMachine);
window.quotesMachine = quotesMachine;
window.themesChanger = themesChanger;
//# sourceMappingURL=index.js.map