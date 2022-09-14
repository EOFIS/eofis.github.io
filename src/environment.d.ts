declare global {
    namespace NodeJS {
        interface ProcessEnv {
            ENV: 'local' | 'remote-dev' | 'remote-prod';
            REACT_APP_API_URL: string;
            NODE_ENV: 'development' | 'production';
            PUBLIC_URL: string;
        }
    }
}
export {}