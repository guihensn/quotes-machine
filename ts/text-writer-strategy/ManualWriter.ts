import { TemplateWordWriter } from "./TemplateWordWriter.js";

export class ManualWriter extends TemplateWordWriter {
    protected addStyle(word: HTMLElement, duration: number) {
        word.classList.add("writed-text");
        word.setAttribute('style', `--write-duration: ${duration}s`);
    }
}
