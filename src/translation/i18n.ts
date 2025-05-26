import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptTranslation from "../translation/language/pt";
import enTranslation from "../translation/language/en";


i18n

.use(initReactI18next)
.init({
    lng: 'pt', // definição da linguagem inicial
    fallbackLng: "pt", // definição de um idioma de fallback, quando ele não encontra o patrão.

    resources: {
        pt: {
            translation: ptTranslation,
        },
        en: {
            translation: enTranslation,
        },
    },
    interpolation : {
        escapeValue: false
    }
})


export default i18n;