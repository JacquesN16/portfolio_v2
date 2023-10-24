import i18n from 'i18next'
import en from './translations/en.json'
import fr from './translations/fr.json'
import LanguageDetector from 'i18next-browser-languagedetector'
import Translations from "@/app/utils/i18n/translations/Translation";

const resources = {
    fr: { translation: fr },
    en: { translation: en },
}

i18n.use(LanguageDetector).init({
    detection: {
        order: [
            'navigator',
            'cookie',
            'localStorage',
            'sessionStorage',
            'htmlTag',
            'querystring',
        ],
    },
    debug: false,
    resources,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})
export type TranslationKeys = keyof Translations
export function tt(key: TranslationKeys, vars?: any) {
    return i18n.t<string>(key, vars)
}

export function ttPluralSlice(
    count: number = 2,
    key: TranslationKeys,
    vars?: any
) {
    const translation = tt(key, vars)
    return count < 2 ? translation.slice(0, translation.length - 1) : translation
}

export const LANGUAGE = i18n.language.substr(0, 2)

export default i18n