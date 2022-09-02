class TemplateWriter{
    timeOut;

    isWriting = false;

    constructor(audio, audioEnd, quoteEl, quoteTextEl, authorEl, buttonNewEl, typeVelocity){
        this.audio = audio;
        this.audioEnd = audioEnd;
        this.quoteEl = quoteEl;
        this.quoteTextEl = quoteTextEl;
        this.authorEl = authorEl
        this.buttonNewEl = buttonNewEl;
        this.typeVelocity = typeVelocity;
    }

    write(quote, author){
        this.isWriting = true;

        this.audio.play();
        this.setAuthorText(author);

        this.startWriting(quote, 0);
    }

    setAuthorText(author) {
        this.authorEl.innerHTML = author;
    }

    startWriting(){}

    stopWriting(){
        this.isWriting = false;
        this.audio.pause();
        
        if(this.audioEnd){
            this.audioEnd.pause();
        }

        clearInterval(this.timeOut);
    }

    resolveWriting(){
        this.isWriting = false;
        this.audio.pause();

        if(this.audioEnd){
            this.audioEnd.play();
        }

        this.buttonNewEl.classList.remove('invisible');
    } 
}