"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commomErrors = exports.defaultErrors = void 0;
const requiredInputMessage = `O {{field}} é obrigatório`;
const emptyRegisterMessage = `Não é possível inserir um registro vazio`;
exports.defaultErrors = {
    required: {
        name: requiredInputMessage.replace('{{field}}', 'nome'),
        phone: requiredInputMessage.replace('{{field}}', 'telefone'),
        email: requiredInputMessage.replace('{{field}}', 'email'),
        invoiceNumber: requiredInputMessage.replace('{{field}}', 'número da nota fiscal'),
        serialNumber: requiredInputMessage.replace('{{field}}', 'número de série'),
    },
};
exports.commomErrors = {
    EMPTY_REGISTER: emptyRegisterMessage,
    requiredField: (target, message) => {
        return {
            error: true,
            field: target,
            message: message || exports.defaultErrors.required[target],
        };
    },
};
//# sourceMappingURL=commom-errors.js.map