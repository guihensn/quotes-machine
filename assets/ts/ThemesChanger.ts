import { TemplateWriter } from './text-writer-strategy/TemplateWriter.js';
import { QuotesMachine } from "./QuotesMachine.js";

const FORWARD_TRANSITE_CLASS = 'transite-img--forward.js';
const BACKWARD_TRANSITE_CLASS = 'transite-img--backward.js';
const ACTIVE_BUTTON_CLASS = 'nav-button--active.js';

export interface Theme{
    button: HTMLElement,
    name: string,
    writer: TemplateWriter
}

export class ThemesChanger{
    quotesMachine: QuotesMachine;
    
    themeEl: HTMLElement;
    currentThemeNumber: number;
    transitionEl: HTMLElement;
    audioTransition: HTMLAudioElement;
    themes: Theme[];

    constructor(themes: Theme[], themeEl: HTMLElement, transitionEl: HTMLElement, audioTransition: HTMLAudioElement, quotesMachine: QuotesMachine) {
        this.themes = themes;
        this.themeEl = themeEl;
        this.currentThemeNumber = 0;
        this.transitionEl = transitionEl;
        this.audioTransition = audioTransition;
        this.quotesMachine = quotesMachine;
    }


    changeTheme(themeNumber:number){
        if(this.currentThemeNumber - themeNumber == 0){
            return;
        }
        
        if(this.currentThemeNumber - themeNumber < 0){
            return this.transite(themeNumber, FORWARD_TRANSITE_CLASS);
        }
    
        this.transite(themeNumber, BACKWARD_TRANSITE_CLASS);
    }
    
    private transite(themeNumber:number, animationClass:string) {
        let previusTheme = this.themes[this.currentThemeNumber];
        let nextTheme =  this.themes[themeNumber];

        this.audioTransition.play();
        this.transitionEl.classList.add(animationClass);
    
        setTimeout(() => {
            previusTheme.button.classList.remove(ACTIVE_BUTTON_CLASS)
            nextTheme.button.classList.add(ACTIVE_BUTTON_CLASS);
    
            this.themeEl.setAttribute('href', `assets/css/themes/${nextTheme.name}.css`);
            this.quotesMachine.changeWriter(nextTheme.writer);
        }, 500);
    
        setTimeout(() => {
            this.transitionEl.classList.remove(animationClass);
        }, 1000);

        this.currentThemeNumber = themeNumber;
    }
}

