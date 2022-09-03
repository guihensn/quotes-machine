import { QuotesMachine } from "../QuotesMachine.js";

export class QuotesMachineFactory {
    buttonNewEl: HTMLElement;
    quoteElement: HTMLElement;
    quoteTextEl: HTMLElement;
    authorEl: HTMLElement;

    make(): QuotesMachine {
        this.selectElements();

        return new QuotesMachine(
            this.buttonNewEl,
            this.quoteElement,
            this.quoteTextEl,
            this.authorEl);
    }

    selectElements() {
        this.quoteElement = document.querySelector('.quote');
        this.quoteTextEl = document.querySelector('.quote__text');
        this.authorEl = document.querySelector('.quote__author');
        this.buttonNewEl = document.querySelector('#new-quote');
    }
}

