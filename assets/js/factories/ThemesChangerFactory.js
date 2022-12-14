import { FuturisticWriter } from '../text-writer-strategy/futuristicWriter.js';
import { ManualWriter } from '../text-writer-strategy/ManualWriter.js';
import { TypeWriter } from '../text-writer-strategy/TypeWriter.js';
import { ThemesChanger } from '../ThemesChanger.js';
var ThemeChangerFactory = /** @class */ (function () {
    function ThemeChangerFactory() {
    }
    ThemeChangerFactory.prototype.make = function (quotesMachine) {
        this.selectElements();
        this.makesAudios();
        this.makeWriters();
        this.makeThemes();
        quotesMachine.quotesWriter = this.themes[1].writer;
        return new ThemesChanger(this.themes, this.themeEl, this.transitionEl, this.audioTransition, quotesMachine);
    };
    ThemeChangerFactory.prototype.selectElements = function () {
        this.themeEl = document.querySelector("#theme");
        this.transitionEl = document.querySelector('.transition-img');
        this.themeButton1 = document.querySelector('#theme-1');
        this.themeButton2 = document.querySelector('#theme-2');
        this.themeButton3 = document.querySelector('#theme-3');
        this.quoteElement = document.querySelector('.quote');
        this.quoteTextEl = document.querySelector('.quote__text');
        this.authorEl = document.querySelector('.quote__author');
        this.buttonNewEl = document.querySelector('#new-quote');
    };
    ThemeChangerFactory.prototype.makesAudios = function () {
        this.audioFuturistic = this.makeAudio('futuristic.wav', 0.7, true);
        this.audioManualWriter = this.makeAudio('black-board.wav', 0.6, true);
        this.audioTypeWriter = this.makeAudio('typewriter.wav', 0.6, true);
        this.audioTypeWriterEnd = this.makeAudio('typewriter-end.wav', 0.3, false);
        this.audioTransition = this.makeAudio('transition-3.wav', 0.3, false);
    };
    ThemeChangerFactory.prototype.makeAudio = function (name, volume, isLoop) {
        var audio = new Audio("assets/sounds/".concat(name));
        audio.volume = volume;
        audio.loop = isLoop;
        return audio;
    };
    ThemeChangerFactory.prototype.makeWriters = function () {
        this.futuristicWriter = new FuturisticWriter(this.audioFuturistic, undefined, this.quoteElement, this.quoteTextEl, this.authorEl, this.buttonNewEl, 0.02);
        this.manualWriter = new ManualWriter(this.audioManualWriter, undefined, this.quoteElement, this.quoteTextEl, this.authorEl, this.buttonNewEl, 0.1);
        this.typeWriter = new TypeWriter(this.audioTypeWriter, this.audioTypeWriterEnd, this.quoteElement, this.quoteTextEl, this.authorEl, this.buttonNewEl, 0);
    };
    ThemeChangerFactory.prototype.makeThemes = function () {
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
    };
    return ThemeChangerFactory;
}());
export { ThemeChangerFactory };
//# sourceMappingURL=ThemesChangerFactory.js.map