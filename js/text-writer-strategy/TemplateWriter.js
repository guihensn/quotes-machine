var TemplateWriter = /** @class */ (function () {
    function TemplateWriter(audio, audioEnd, quoteEl, quoteTextEl, authorEl, buttonNewEl, typeVelocity) {
        this.isWriting = false;
        this.audio = audio;
        this.audioEnd = audioEnd;
        this.quoteEl = quoteEl;
        this.quoteTextEl = quoteTextEl;
        this.authorEl = authorEl;
        this.buttonNewEl = buttonNewEl;
        this.typeVelocity = typeVelocity;
    }
    TemplateWriter.prototype.write = function (quote, author) {
        this.isWriting = true;
        this.audio.play();
        this.setAuthorText(author);
        this.startWriting(quote, 0);
    };
    TemplateWriter.prototype.stopWriting = function () {
        this.isWriting = false;
        this.audio.pause();
        if (this.audioEnd) {
            this.audioEnd.pause();
        }
        clearInterval(this.timeOut);
    };
    TemplateWriter.prototype.setAuthorText = function (author) {
        this.authorEl.innerHTML = author;
    };
    TemplateWriter.prototype.startWriting = function (text, i) { };
    TemplateWriter.prototype.resolveWriting = function () {
        this.isWriting = false;
        this.audio.pause();
        if (this.audioEnd) {
            this.audioEnd.play();
        }
        this.buttonNewEl.classList.remove('invisible');
    };
    return TemplateWriter;
}());
export { TemplateWriter };
//# sourceMappingURL=TemplateWriter.js.map