declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            REACT_APP_HOST: string;
            REACT_APP_PORT?: 3000
        }
    }
}

export {}
/// <reference types="react-scripts" />
