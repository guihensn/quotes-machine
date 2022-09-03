"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuturisticWriter = void 0;
var TemplateWordWriter_1 = require("./TemplateWordWriter");
var FuturisticWriter = /** @class */ (function (_super) {
    __extends(FuturisticWriter, _super);
    function FuturisticWriter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = [
            { x: '100px', y: '0px' },
            { x: '-100px', y: '0px' },
            { x: '0px', y: '100px' },
            { x: '0px', y: '-100px' }
        ];
        return _this;
    }
    FuturisticWriter.prototype.addStyle = function (word, duration) {
        var translation = this.generateRandomTranslation();
        word.classList.add("futuristic-text");
        word.setAttribute('style', "--x:".concat(translation.x, "; --y:").concat(translation.y));
    };
    FuturisticWriter.prototype.generateRandomTranslation = function () {
        return this.options[Math.round(Math.random() * 3)];
    };
    return FuturisticWriter;
}(TemplateWordWriter_1.TemplateWordWriter));
exports.FuturisticWriter = FuturisticWriter;
