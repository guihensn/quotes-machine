import { TemplateWriter } from './text-writer-strategy/TemplateWriter.js';

export class QuotesMachine {
    quotesWriter: TemplateWriter;

    buttonNewEl:HTMLElement;
    quoteEl:HTMLElement;
    quoteTextEl:HTMLElement;
    authorEl:HTMLElement;

    currentThemeNumber: number;
    currentQuote:string;
    currentAuthor:string;

    constructor(buttonNewEl:HTMLElement, quoteElement:HTMLElement, quoteTextEl:HTMLElement, authorEl:HTMLElement) {
        this.buttonNewEl = buttonNewEl;
        this.quoteEl = quoteElement;
        this.quoteTextEl = quoteTextEl;
        this.authorEl = authorEl;
    }

    changeWriter(newWriter: TemplateWriter) { 
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

    private startWrite(){
        this.resetText();
        this.showQuote();
        this.hideButton();
        this.quotesWriter.stopWriting();
        this.quotesWriter.write(this.currentQuote, this.currentAuthor);
    }

    private resetText() {
        this.quoteTextEl.innerHTML = '';
        this.authorEl.innerHTML = '';
    }

    private showQuote() {
        this.quoteEl.classList.remove('invisible');
    }

    private hideButton() {
        this.buttonNewEl.classList.add('invisible');
    }
}