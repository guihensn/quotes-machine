var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { TemplateWriter } from "./TemplateWriter.js";
var TemplateWordWriter = /** @class */ (function (_super) {
    __extends(TemplateWordWriter, _super);
    function TemplateWordWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TemplateWordWriter.prototype.startWriting = function (quote, i) {
        var words = quote.split(" ");
        this.typeWord(words, 0);
    };
    TemplateWordWriter.prototype.typeWord = function (words, i) {
        var _this = this;
        if (i >= words.length) {
            this.resolveWriting();
            return;
        }
        var wordEl = document.createElement('span');
        wordEl.innerHTML = words[i] + " ";
        this.quoteTextEl.appendChild(wordEl);
        var duration = this.typeVelocity * (words[i].length + 1);
        this.addStyle(wordEl, duration);
        i++;
        this.timeOut = setTimeout(function () { _this.typeWord(words, i); }, 1000 * duration);
    };
    return TemplateWordWriter;
}(TemplateWriter));
export { TemplateWordWriter };
//# sourceMappingURL=TemplateWordWriter.js.map