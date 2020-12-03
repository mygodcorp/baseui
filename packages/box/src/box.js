"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = __importDefault(require("@emotion/styled"));
var styled_system_1 = require("styled-system");
var Box = styled_1.default.div({
    boxSizing: 'border-box',
    minWidth: 0
}, styled_system_1.compose(styled_system_1.space, styled_system_1.color, styled_system_1.layout, styled_system_1.flexbox, styled_system_1.border, styled_system_1.position, styled_system_1.border));
exports.default = Box;
