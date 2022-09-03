var QuotesMachine = /** @class */ (function () {
    function QuotesMachine(buttonNewEl, quoteElement, quoteTextEl, authorEl) {
        this.buttonNewEl = buttonNewEl;
        this.quoteEl = quoteElement;
        this.quoteTextEl = quoteTextEl;
        this.authorEl = authorEl;
    }
    QuotesMachine.prototype.changeWriter = function (newWriter) {
        if (this.quotesWriter.isWriting) {
            this.quotesWriter.stopWriting();
            this.quotesWriter = newWriter;
            this.startWrite();
        }
        this.quotesWriter = newWriter;
    };
    QuotesMachine.prototype.newQuote = function () {
        var _this = this;
        fetch("https://api.quotable.io/random")
            .then(function (result) { return result.json(); })
            .then(function (data) {
            _this.currentQuote = data.content;
            _this.currentAuthor = data.author;
            _this.startWrite();
        });
    };
    QuotesMachine.prototype.startWrite = function () {
        this.resetText();
        this.showQuote();
        this.hideButton();
        this.quotesWriter.stopWriting();
        this.quotesWriter.write(this.currentQuote, this.currentAuthor);
    };
    QuotesMachine.prototype.resetText = function () {
        this.quoteTextEl.innerHTML = '';
        this.authorEl.innerHTML = '';
    };
    QuotesMachine.prototype.showQuote = function () {
        this.quoteEl.classList.remove('invisible');
    };
    QuotesMachine.prototype.hideButton = function () {
        this.buttonNewEl.classList.add('invisible');
    };
    return QuotesMachine;
}());
export { QuotesMachine };
//# sourceMappingURL=QuotesMachine.js.map