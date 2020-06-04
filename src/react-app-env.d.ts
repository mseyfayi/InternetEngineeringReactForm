declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            REACT_APP_HOST?: string;
        }
    }
}

export {}
/// <reference types="react-scripts" />
