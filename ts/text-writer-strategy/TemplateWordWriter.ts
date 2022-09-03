import { TemplateWriter } from "./TemplateWriter.js";

export abstract class TemplateWordWriter extends TemplateWriter {
    protected startWriting(quote: string, i: number) {
        let words = quote.split(" ");

        this.typeWord(words, 0);
    }

    protected typeWord(words: string[], i: number) {
        if (i >= words.length) {
            this.resolveWriting();
            return;
        }

        let wordEl = document.createElement('span');
        wordEl.innerHTML = words[i] + " ";
        this.quoteTextEl.appendChild(wordEl);

        let duration = this.typeVelocity * (words[i].length + 1);
        this.addStyle(wordEl, duration);

        i++;
        this.timeOut = setTimeout(() => { this.typeWord(words, i) }, 1000 * duration);
    }

    protected abstract addStyle(wordEl, duration);
}