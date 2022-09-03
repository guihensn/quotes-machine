import { TemplateWriter } from "./TemplateWriter.js";

export class TypeWriter extends TemplateWriter{
    protected startWriting(textArray, i){
        if(i > textArray.length){
            this.resolveWriting();
            return;
        } 

        this.quoteTextEl.innerHTML += textArray.charAt(i);

        i++;
        this.timeOut = setTimeout(()=>{this.startWriting(textArray,i)},100);
    }
}
