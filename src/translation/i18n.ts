import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {data} from "../translation/language"


i18n.use(initReactI18next)
.init({
    lng: 'pt', // definição da linguagem inicial
    fallbackLng: "pt", // definição de um idioma de fallback, quando ele não encontra o patrão.

    resources: data,
    interpolation : {
        escapeValue: false //evitar de escapar essa sequência de traduções
    },
});


export { i18n };