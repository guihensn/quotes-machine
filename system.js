let quotesMachineFactory = new QuotesMachineFactory();
let quotesMachine = quotesMachineFactory.make();

let themesChangerFactory = new ThemeChangerFactory();
let themesChanger = themesChangerFactory.make(quotesMachine);

