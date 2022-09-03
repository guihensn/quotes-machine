export class TemplateWriter {
    timeOut;
    isWriting = false;

    audio: HTMLAudioElement;
    audioEnd: HTMLAudioElement;

    quoteEl: HTMLElement;
    quoteTextEl: HTMLElement;
    authorEl: HTMLElement;
    buttonNewEl: HTMLElement;
    typeVelocity: number;

    constructor(audio: HTMLAudioElement,
        audioEnd: HTMLAudioElement,
        quoteEl: HTMLElement,
        quoteTextEl: HTMLElement,
        authorEl: HTMLElement,
        buttonNewEl: HTMLElement,
        typeVelocity: number) {
        this.audio = audio;
        this.audioEnd = audioEnd;
        this.quoteEl = quoteEl;
        this.quoteTextEl = quoteTextEl;
        this.authorEl = authorEl
        this.buttonNewEl = buttonNewEl;
        this.typeVelocity = typeVelocity;
    }

    write(quote: string, author: string) {
        this.isWriting = true;

        this.audio.play();
        this.setAuthorText(author);

        this.startWriting(quote, 0);
    }

    stopWriting() {
        this.isWriting = false;
        this.audio.pause();

        if (this.audioEnd) {
            this.audioEnd.pause();
        }

        clearInterval(this.timeOut);
    }

    private setAuthorText(author: string) {
        this.authorEl.innerHTML = author;
    }

    protected startWriting(text: string, i: number) { }

    protected resolveWriting() {
        this.isWriting = false;
        this.audio.pause();

        if (this.audioEnd) {
            this.audioEnd.play();
        }

        this.buttonNewEl.classList.remove('invisible');
    }
}