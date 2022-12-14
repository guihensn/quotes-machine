import { FuturisticWriter } from '../text-writer-strategy/futuristicWriter.js';
import { ManualWriter } from '../text-writer-strategy/ManualWriter.js';
import { TemplateWriter } from '../text-writer-strategy/TemplateWriter.js';
import { TypeWriter } from '../text-writer-strategy/TypeWriter.js';
import { Theme, ThemesChanger } from '../ThemesChanger.js';

export class ThemeChangerFactory {
    themes: Theme[];

    themeEl: HTMLElement;
    transitionEl: HTMLElement;
    audioTransition: HTMLAudioElement;

    themeButton1: HTMLElement;
    themeButton2: HTMLElement;
    themeButton3: HTMLElement;

    quoteElement: HTMLElement;
    quoteTextEl: HTMLElement;
    authorEl: HTMLElement;
    buttonNewEl: HTMLElement;

    audioFuturistic: HTMLAudioElement;
    audioManualWriter: HTMLAudioElement;
    audioTypeWriter: HTMLAudioElement;
    audioTypeWriterEnd: HTMLAudioElement;

    futuristicWriter: TemplateWriter;
    manualWriter: TemplateWriter;
    typeWriter: TemplateWriter;

    make(quotesMachine): ThemesChanger {
        this.selectElements();
        this.makesAudios();
        this.makeWriters();
        this.makeThemes();

        quotesMachine.quotesWriter = this.themes[1].writer;

        return new ThemesChanger(
            this.themes,
            this.themeEl,
            this.transitionEl,
            this.audioTransition,
            quotesMachine);
    }

    selectElements() {
        this.themeEl = document.querySelector("#theme");
        this.transitionEl = document.querySelector('.transition-img');
        this.themeButton1 = document.querySelector('#theme-1');
        this.themeButton2 = document.querySelector('#theme-2');
        this.themeButton3 = document.querySelector('#theme-3');

        this.quoteElement = document.querySelector('.quote');
        this.quoteTextEl = document.querySelector('.quote__text');
        this.authorEl = document.querySelector('.quote__author');
        this.buttonNewEl = document.querySelector('#new-quote');
    }

    makesAudios() {
        this.audioFuturistic = this.makeAudio('futuristic.wav', 0.7, true);
        this.audioManualWriter = this.makeAudio('black-board.wav', 0.6, true);
        this.audioTypeWriter = this.makeAudio('typewriter.wav', 0.6, true);
        this.audioTypeWriterEnd = this.makeAudio('typewriter-end.wav', 0.3, false);
        this.audioTransition = this.makeAudio('transition-3.wav', 0.3, false);
    }

    makeAudio(name: string, volume: number, isLoop: boolean): HTMLAudioElement {
        let audio = new Audio(`assets/sounds/${name}`);
        audio.volume = volume;
        audio.loop = isLoop;

        return audio
    }

    makeWriters() {
        this.futuristicWriter = new FuturisticWriter(this.audioFuturistic, undefined, this.quoteElement, this.quoteTextEl, this.authorEl, this.buttonNewEl, 0.02);
        this.manualWriter = new ManualWriter(this.audioManualWriter, undefined, this.quoteElement, this.quoteTextEl, this.authorEl, this.buttonNewEl, 0.1);
        this.typeWriter = new TypeWriter(this.audioTypeWriter, this.audioTypeWriterEnd, this.quoteElement, this.quoteTextEl, this.authorEl, this.buttonNewEl, 0);
    }

    makeThemes() {
        this.themes = [
            {
                button: this.themeButton2,
                name: 'friendship',
                writer: this.manualWriter
            },
            {
                button: this.themeButton3,
                name: 'technology',
                writer: this.futuristicWriter
            }, 
            {
                button: this.themeButton1,
                name: 'typewriter',
                writer: this.typeWriter
            },
        ];
    }
}

