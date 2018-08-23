import ReactNative from 'react-native';
import I18n from 'react-native-i18n';
import moment from 'moment';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

const currentLocale = I18n.currentLocale();
console.log('currentLocale', currentLocale)

// RTL Support
const rtlDetect = require('rtl-detect');
export const isRTL = rtlDetect.isRtlLang(currentLocale);
ReactNative.I18nManager.allowRTL(isRTL);

// MomentJS
export function loadMomentLocale(locale) {
    try {
        moment.locale(locale);
    } catch (e) {
        moment.locale('en');
    }
}

export function applyTranslations(translations) {
    I18n.translations = translations;
    //console.log('translations', translations)
}

// Primary translation function
export function t(name, params = {}) {
    return I18n.t(name, params);
};

export function l(key, value) {
    return I18n.l(key, value)
}

export function splitNumber(num, decimalPlaces = 2) {
    return {
        integer: ((num > 0) ? Math.floor(num) : Math.ceil(num)),
        fraction: (num % 1 * Math.pow(10, decimalPlaces))
    }
}

export const i18n = I18n;