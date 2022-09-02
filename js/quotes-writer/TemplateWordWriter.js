class TemplateWordWriter extends TemplateWriter{
    startWriting(quote){
        let words = quote.split(" ");

        this.typeWord(words, 0);
    }

    typeWord(words,i){
        if(i >= words.length){
            this.resolveWriting();
            return;
        } 

        let wordEl = document.createElement('span');
        wordEl.innerHTML = words[i] + " ";
        this.quoteTextEl.appendChild(wordEl);

        let duration = this.typeVelocity*(words[i].length+1);
        this.addStyle(wordEl, duration);

        i++;
        this.timeOut = setTimeout(()=>{this.typeWord(words,i)},1000*duration);
    }

    addStyle(wordEl, duration){}
}