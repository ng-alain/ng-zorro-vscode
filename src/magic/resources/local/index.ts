import { default as zh_CN } from './zh-CN';
import { default as en_US } from './en-US';
import { CONFIG } from '../index';

export const LANG_DATA = {
    "zh-CN": zh_CN,
    "en-US": en_US,
}

export function i18n(key: string) {
    return LANG_DATA[CONFIG.language][key];
}