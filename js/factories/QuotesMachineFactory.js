import { QuotesMachine } from "../QuotesMachine.js";
var QuotesMachineFactory = /** @class */ (function () {
    function QuotesMachineFactory() {
    }
    QuotesMachineFactory.prototype.make = function () {
        this.selectElements();
        return new QuotesMachine(this.buttonNewEl, this.quoteElement, this.quoteTextEl, this.authorEl);
    };
    QuotesMachineFactory.prototype.selectElements = function () {
        this.quoteElement = document.querySelector('.quote');
        this.quoteTextEl = document.querySelector('.quote__text');
        this.authorEl = document.querySelector('.quote__author');
        this.buttonNewEl = document.querySelector('#new-quote');
    };
    return QuotesMachineFactory;
}());
export { QuotesMachineFactory };
//# sourceMappingURL=QuotesMachineFactory.js.map