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
import { TemplateWordWriter } from "./TemplateWordWriter.js";
var ManualWriter = /** @class */ (function (_super) {
    __extends(ManualWriter, _super);
    function ManualWriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManualWriter.prototype.addStyle = function (word, duration) {
        word.classList.add("writed-text");
        word.setAttribute('style', "--write-duration: ".concat(duration, "s"));
    };
    return ManualWriter;
}(TemplateWordWriter));
export { ManualWriter };
//# sourceMappingURL=ManualWriter.js.map