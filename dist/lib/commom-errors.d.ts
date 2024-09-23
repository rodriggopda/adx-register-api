export declare const defaultErrors: {
    required: {
        name: string;
        phone: string;
        email: string;
        invoiceNumber: string;
        serialNumber: string;
    };
};
export declare const commomErrors: {
    EMPTY_REGISTER: string;
    requiredField: (target: string, message?: string) => {
        error: boolean;
        field: string;
        message: any;
    };
};
