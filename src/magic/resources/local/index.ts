import { default as zh_CN } from './zh-CN';
import { default as en_US } from './en-US';

export const LANG = 'zh_CN';

export const LANG_DATA = {
    zh_CN,
    en_US,
}

export function i18n(key: string) {
    return LANG_DATA[LANG][key];
}