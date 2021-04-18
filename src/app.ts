import express from 'express'
import { router } from './routes'
import i18next from 'i18next';
import Backend from 'i18next-node-fs-backend';
import i18nextMiddleware from 'i18next-express-middleware';

i18next
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
        backend: {
            loadPath: __dirname + '/../resources/locales/{{lng}}/{{ns}}.json'
        },
        fallbackLng: 'en',
        preload: ['en', 'es']
    });


const app = express();

app.use(i18nextMiddleware.handle(i18next));
app.use(express.json())
app.use(router)

export { app }
