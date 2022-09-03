import { TemplateWordWriter } from "./TemplateWordWriter.js";

interface Option {
    x: string,
    y: string
}

export class FuturisticWriter extends TemplateWordWriter {
    options: Option[] = [
        { x: '100px', y: '0px' },
        { x: '-100px', y: '0px' },
        { x: '0px', y: '100px' },
        { x: '0px', y: '-100px' }
    ];

    protected addStyle(word: HTMLElement, duration: number) {
        let translation = this.generateRandomTranslation();

        word.classList.add("futuristic-text");
        word.setAttribute('style', `--x:${translation.x}; --y:${translation.y}`);
    }

    private generateRandomTranslation(): Option {
        return this.options[Math.round(Math.random() * 3)];
    }
}
