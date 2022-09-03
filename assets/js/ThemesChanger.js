var FORWARD_TRANSITE_CLASS = 'transite-img--forward';
var BACKWARD_TRANSITE_CLASS = 'transite-img--backward';
var ACTIVE_BUTTON_CLASS = 'nav-button--active';
var ThemesChanger = /** @class */ (function () {
    function ThemesChanger(themes, themeEl, transitionEl, audioTransition, quotesMachine) {
        this.themes = themes;
        this.themeEl = themeEl;
        this.currentThemeNumber = 1;
        this.transitionEl = transitionEl;
        this.audioTransition = audioTransition;
        this.quotesMachine = quotesMachine;
    }
    ThemesChanger.prototype.changeTheme = function (themeNumber) {
        if (this.currentThemeNumber - themeNumber == 0) {
            return;
        }
        if (this.currentThemeNumber - themeNumber < 0) {
            return this.transite(themeNumber, FORWARD_TRANSITE_CLASS);
        }
        this.transite(themeNumber, BACKWARD_TRANSITE_CLASS);
    };
    ThemesChanger.prototype.transite = function (themeNumber, animationClass) {
        var _this = this;
        var previusTheme = this.themes[this.currentThemeNumber];
        var nextTheme = this.themes[themeNumber];
        this.audioTransition.play();
        this.transitionEl.classList.add(animationClass);
        setTimeout(function () {
            previusTheme.button.classList.remove(ACTIVE_BUTTON_CLASS);
            nextTheme.button.classList.add(ACTIVE_BUTTON_CLASS);
            _this.themeEl.setAttribute('href', "assets/css/themes/".concat(nextTheme.name, ".css"));
            _this.quotesMachine.changeWriter(nextTheme.writer);
        }, 500);
        setTimeout(function () {
            _this.transitionEl.classList.remove(animationClass);
        }, 1000);
        this.currentThemeNumber = themeNumber;
    };
    return ThemesChanger;
}());
export { ThemesChanger };
//# sourceMappingURL=ThemesChanger.js.map