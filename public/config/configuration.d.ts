declare const _default: (() => {
    port: number;
    database: {
        host: string;
        user: string;
        password: string;
        port: number;
        name: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: number;
    database: {
        host: string;
        user: string;
        password: string;
        port: number;
        name: string;
    };
}>;
export default _default;
