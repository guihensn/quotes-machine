class ThemesChanger{
    forwardTransiteClass = 'transite-img--forward';
    backwardTransiteClass = 'transite-img--backward';

    activeButtonClass = 'nav-button--active';

    constructor(themes, themeEl, transitionEl, audioTransition, quotesMachine) {
        this.themes = themes;
        this.themeEl = themeEl;
        this.currentThemeNumber = 0;
        this.transitionEl = transitionEl;
        this.audioTransition = audioTransition;
        this.quotesMachine = quotesMachine;
    }


    changeTheme(themeNumber){
        if(this.currentThemeNumber - themeNumber == 0){
            return;
        }
        
        if(this.currentThemeNumber - themeNumber < 0){
            return this.transite(themeNumber, this.forwardTransiteClass);
        }
    
        this.transite(themeNumber, this.backwardTransiteClass);
    }
    
    transite(themeNumber, animationClass) {
        let previusTheme = this.themes[this.currentThemeNumber];
        let nextTheme =  this.themes[themeNumber];

        this.audioTransition.play();
        this.transitionEl.classList.add(animationClass);
    
        setTimeout(() => {
            previusTheme.button.classList.remove(this.activeButtonClass)
            nextTheme.button.classList.add(this.activeButtonClass);
    
            this.themeEl.setAttribute('href', `assets/css/themes/${nextTheme.name}.css`);
            this.quotesMachine.changeWriter(nextTheme.writer);
        }, 500);
    
        setTimeout(() => {
            this.transitionEl.classList.remove(animationClass);
        }, 1000);

        this.currentThemeNumber = themeNumber;
    }
}

