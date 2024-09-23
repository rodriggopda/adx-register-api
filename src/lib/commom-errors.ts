const requiredInputMessage = `O {{field}} é obrigatório`;
const emptyRegisterMessage = `Não é possível inserir um registro vazio`;

export const defaultErrors = {
  required: {
    name: requiredInputMessage.replace('{{field}}', 'nome'),
    phone: requiredInputMessage.replace('{{field}}', 'telefone'),
    email: requiredInputMessage.replace('{{field}}', 'email'),
    invoiceNumber: requiredInputMessage.replace(
      '{{field}}',
      'número da nota fiscal',
    ),
    serialNumber: requiredInputMessage.replace('{{field}}', 'número de série'),
  },
};

export const commomErrors = {
  EMPTY_REGISTER: emptyRegisterMessage,
  requiredField: (target: string, message?: string) => {
    return {
      error: true,
      field: target,
      message: message || defaultErrors.required[target],
    };
  },
};
