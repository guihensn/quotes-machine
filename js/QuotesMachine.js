class QuotesMachine {
    quotesWriter;

    buttonNewEl;
    quoteEl;
    quoteTextEl;
    authorEl;

    currentThemeNumber;
    currentQuote;
    currentAuthor;

    constructor(buttonNewEl, quoteElement, quoteTextEl, authorEl) {
        this.buttonNewEl = buttonNewEl;
        this.quoteEl = quoteElement;
        this.quoteTextEl = quoteTextEl;
        this.authorEl = authorEl;
    }

    changeWriter(newWriter) { 
        if (this.quotesWriter.isWriting) {  
           this.quotesWriter.stopWriting();
           this.quotesWriter = newWriter;
           this.startWrite();
        }

        this.quotesWriter = newWriter;
    }

    newQuote() {
        fetch(`https://api.quotable.io/random`)
            .then((result) => result.json())
            .then((data) => {
                this.currentQuote = data.content;
                this.currentAuthor = data.author;
                this.startWrite();
            })
    }

    startWrite(){
        this.resetText();
        this.showQuote();
        this.hideButton();
        this.quotesWriter.stopWriting();
        this.quotesWriter.write(this.currentQuote, this.currentAuthor);
    }

    resetText() {
        this.quoteTextEl.innerHTML = '';
        this.authorEl.innerHTML = '';
    }

    showQuote() {
        this.quoteEl.classList.remove('invisible');
    }

    hideQuote() {
        this.quoteEl.classList.add('invisible');
    }

    hideButton() {
        this.buttonNewEl.classList.add('invisible');
    }

    showButton() {
        this.buttonNewEl.classList.remove('invisible');
    }
}