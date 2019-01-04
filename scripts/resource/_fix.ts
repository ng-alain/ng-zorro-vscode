const BASE_GUTTER = ['0', '8', '16', '24', '32', '40', '48', '56', '64'];

export const FIX = {
    typeDefinition: {
        'nz-row': {
            'nzGutter': BASE_GUTTER
        },
        'nz-col': {
            'nzOffset': BASE_GUTTER,
            'nzOrder': BASE_GUTTER,
            'nzPull': BASE_GUTTER,
            'nzPush': BASE_GUTTER,
            'nzSpan': BASE_GUTTER,
            'nzXs': BASE_GUTTER,
            'nzSm': BASE_GUTTER,
            'nzMd': BASE_GUTTER,
            'nzLg': BASE_GUTTER,
            'nzXl': BASE_GUTTER,
            'nzXXl': BASE_GUTTER,
        },
        'se-container': {
            'gutter': BASE_GUTTER,
        },
        'sg-container': {
            'gutter': BASE_GUTTER,
        },
    },
    snippet: {
        'nz-form': '<form __ (ngSubmit)="${1:save}()"$2>$0</form>',
        'nz-input': '<input __$1>',
        'nz-button': {
            zh: '<button __$1>${2|保存,提交,取消,新建,删除,搜索|}</button>',
            en: '<button __$1>${2|Save,Submit,Cancel,Create,Delete,Search|}</button>'
        },
        'nz-checkbox': '<label __$1>$2</label>',
        'nz-radio': '<label __$1>$2</label>',
    }
}