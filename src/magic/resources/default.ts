import * as nls from 'vscode-nls';
const localize = nls.config({ messageFormat: nls.MessageFormat.both })();

export const LANG = { 'nz-row.title': localize('nz-row.title', 'Grid'),
'nz-row.whenToUse': localize('nz-row.whenToUse', ' '),
'nz-row.description': localize('nz-row.description', '24 Grids System。'),
'nz-row.nzAlign.description': localize('nz-row.nzAlign.description', 'the vertical alignment'),
'nz-row.nzGutter.description': localize('nz-row.nzGutter.description', 'spacing between grids, could be a number or a object like `{ xs: 8, sm: 16, md: 24}`. or you can use array to make horizontal and vertical spacing work at the same time `[horizontal, vertical]`'),
'nz-row.nzJustify.description': localize('nz-row.nzJustify.description', 'horizontal arrangement'),
'nz-col.title': localize('nz-col.title', 'Grid'),
'nz-col.whenToUse': localize('nz-col.whenToUse', ' '),
'nz-col.description': localize('nz-col.description', '24 Grids System。'),
'nz-col.nzFlex.description': localize('nz-col.nzFlex.description', 'flex layout style'),
'nz-col.nzOffset.description': localize('nz-col.nzOffset.description', 'the number of cells to offset Col from the left'),
'nz-col.nzOrder.description': localize('nz-col.nzOrder.description', 'raster order'),
'nz-col.nzPull.description': localize('nz-col.nzPull.description', 'the number of cells that raster is moved to the left'),
'nz-col.nzPush.description': localize('nz-col.nzPush.description', 'the number of cells that raster is moved to the right'),
'nz-col.nzSpan.description': localize('nz-col.nzSpan.description', 'raster number of cells to occupy, 0 corresponds to `display: none`'),
'nz-col.nzXs.description': localize('nz-col.nzXs.description', '`<576px` and also default setting, could be a `span` value or an object containing above props'),
'nz-col.nzSm.description': localize('nz-col.nzSm.description', '`≥576px`, could be a `span` value or an object containing above props'),
'nz-col.nzMd.description': localize('nz-col.nzMd.description', '`≥768px`, could be a `span` value or an object containing above props'),
'nz-col.nzLg.description': localize('nz-col.nzLg.description', '`≥992px`, could be a `span` value or an object containing above props'),
'nz-col.nzXl.description': localize('nz-col.nzXl.description', '`≥1200px`, could be a `span` value or an object containing above props'),
'nz-col.nzXXl.description': localize('nz-col.nzXXl.description', '`≥1600px`, could be a `span` value or an object containing above props'),
'nz-tooltip.title': localize('nz-tooltip.title', 'Tooltip'),
'nz-tooltip.whenToUse': localize('nz-tooltip.whenToUse', '- The Tooltip doesn\'t support complex text or operations. The tip is shown on mouse enter and is hidden on mouse leave.\n- It\'s often used instead of the HTML `title` attribute to explain `button/text/operation`.'),
'nz-tooltip.description': localize('nz-tooltip.description', 'A simple text popup tip.'),
'nz-tooltip.nzTooltipArrowPointAtCenter.description': localize('nz-tooltip.nzTooltipArrowPointAtCenter.description', 'Arrow point at center of the origin'),
'nz-tooltip.nzTooltipTitle.description': localize('nz-tooltip.nzTooltipTitle.description', 'The text shown in the tooltip'),
'nz-tooltip.nzTooltipTitleContext.description': localize('nz-tooltip.nzTooltipTitleContext.description', 'The context of tooltip title'),
'nz-tooltip.nzTooltipTrigger.description': localize('nz-tooltip.nzTooltipTrigger.description', 'Tooltip trigger mode. If set to `null` it would not be triggered'),
'nz-tooltip.nzTooltipPlacement.description': localize('nz-tooltip.nzTooltipPlacement.description', 'The position of the tooltip relative to the target'),
'nz-tooltip.nzTooltipColor.description': localize('nz-tooltip.nzTooltipColor.description', 'The background color'),
'nz-tooltip.nzTooltipOrigin.description': localize('nz-tooltip.nzTooltipOrigin.description', 'Origin of the tooltip'),
'nz-tooltip.nzTooltipVisible.description': localize('nz-tooltip.nzTooltipVisible.description', 'Show or hide tooltip'),
'nz-tooltip.nzTooltipVisibleChange.description': localize('nz-tooltip.nzTooltipVisibleChange.description', 'Callback of hide or show'),
'nz-tooltip.nzTooltipMouseEnterDelay.description': localize('nz-tooltip.nzTooltipMouseEnterDelay.description', 'Delay in seconds, before tooltip is shown on mouse enter'),
'nz-tooltip.nzTooltipMouseLeaveDelay.description': localize('nz-tooltip.nzTooltipMouseLeaveDelay.description', 'Delay in seconds, before tooltip is hidden on mouse leave'),
'nz-tooltip.nzTooltipOverlayClassName.description': localize('nz-tooltip.nzTooltipOverlayClassName.description', 'Class name of the tooltip card'),
'nz-tooltip.nzTooltipOverlayStyle.description': localize('nz-tooltip.nzTooltipOverlayStyle.description', 'Style of the tooltip card'),
'nz-affix.title': localize('nz-affix.title', 'Affix'),
'nz-affix.whenToUse': localize('nz-affix.whenToUse', 'When user browses a long web page, some content need to stick to the viewport. This is common for menus and actions.'),
'nz-affix.description': localize('nz-affix.description', 'Make an element stick to viewport.'),
'nz-affix.nzOffsetBottom.description': localize('nz-affix.nzOffsetBottom.description', 'Pixels to offset from bottom when calculating position of scroll'),
'nz-affix.nzOffsetTop.description': localize('nz-affix.nzOffsetTop.description', 'Pixels to offset from top when calculating position of scroll'),
'nz-affix.nzTarget.description': localize('nz-affix.nzTarget.description', 'specifies the scrollable area dom node'),
'nz-affix.nzChange.description': localize('nz-affix.nzChange.description', 'Callback for when affix state is changed'),
'nz-alert.title': localize('nz-alert.title', 'Alert'),
'nz-alert.whenToUse': localize('nz-alert.whenToUse', '- When you need to show alert messages to users.\n- When you need a persistent static container which is closable by user actions.'),
'nz-alert.description': localize('nz-alert.description', 'Alert component for feedback.'),
'nz-alert.nzBanner.description': localize('nz-alert.nzBanner.description', 'Whether to show as banner'),
'nz-alert.nzAction.description': localize('nz-alert.nzAction.description', 'Customized alert\'s action'),
'nz-alert.nzCloseable.description': localize('nz-alert.nzCloseable.description', 'Whether Alert can be closed'),
'nz-alert.nzCloseText.description': localize('nz-alert.nzCloseText.description', 'Close text to show'),
'nz-alert.nzDescription.description': localize('nz-alert.nzDescription.description', 'Additional content of Alert'),
'nz-alert.nzMessage.description': localize('nz-alert.nzMessage.description', 'Content of Alert'),
'nz-alert.nzShowIcon.description': localize('nz-alert.nzShowIcon.description', 'Whether to show icon, in `nzBanner` mode default is `true`'),
'nz-alert.nzIconType.description': localize('nz-alert.nzIconType.description', 'Icon type, effective when `nzShowIcon` is `true`'),
'nz-alert.nzType.description': localize('nz-alert.nzType.description', 'Type of Alert styles, in `nzBanner` mode default is `\'warning\'`'),
'nz-alert.nzIcon.description': localize('nz-alert.nzIcon.description', 'Custom icon, effective when showIcon is true'),
'nz-alert.nzOnClose.description': localize('nz-alert.nzOnClose.description', 'Callback when Alert is closed'),
'nz-anchor.title': localize('nz-anchor.title', 'Anchor'),
'nz-anchor.whenToUse': localize('nz-anchor.whenToUse', 'For displaying anchor hyperlinks on page and jumping between them.'),
'nz-anchor.description': localize('nz-anchor.description', 'Hyperlinks to scroll on one page.'),
'nz-anchor.nzAffix.description': localize('nz-anchor.nzAffix.description', 'Fixed mode of Anchor'),
'nz-anchor.nzBounds.description': localize('nz-anchor.nzBounds.description', 'Bounding distance of anchor area, unit: px'),
'nz-anchor.nzOffsetTop.description': localize('nz-anchor.nzOffsetTop.description', 'Pixels to offset from top when calculating position of scroll'),
'nz-anchor.nzShowInkInFixed.description': localize('nz-anchor.nzShowInkInFixed.description', 'Whether show ink-balls in Fixed mode'),
'nz-anchor.nzTargetOffset.description': localize('nz-anchor.nzTargetOffset.description', 'Anchor scroll offset, default as `offsetTop`, [example](#components-anchor-demo-targetOffset)'),
'nz-anchor.nzContainer.description': localize('nz-anchor.nzContainer.description', 'Scrolling container'),
'nz-anchor.nzCurrentAnchor.description': localize('nz-anchor.nzCurrentAnchor.description', 'Customize the anchor highlight'),
'nz-anchor.nzClick.description': localize('nz-anchor.nzClick.description', 'Click of Anchor item'),
'nz-anchor.nzChange.description': localize('nz-anchor.nzChange.description', 'Listening for anchor link change'),
'nz-anchor.nzScroll.description': localize('nz-anchor.nzScroll.description', 'The scroll function that is triggered when scrolling to an anchor.'),
'nz-link.title': localize('nz-link.title', 'Anchor'),
'nz-link.whenToUse': localize('nz-link.whenToUse', 'For displaying anchor hyperlinks on page and jumping between them.'),
'nz-link.description': localize('nz-link.description', 'Hyperlinks to scroll on one page.'),
'nz-link.nzHref.description': localize('nz-link.nzHref.description', 'target of hyperlink'),
'nz-link.nzTarget.description': localize('nz-link.nzTarget.description', 'Specifies where to display the linked URL'),
'nz-link.nzTitle.description': localize('nz-link.nzTitle.description', 'content of  hyperlink'),
'nzAutocomplete.title': localize('nzAutocomplete.title', 'Autocomplete'),
'nzAutocomplete.whenToUse': localize('nzAutocomplete.whenToUse', 'When there is a need for autocomplete functionality.'),
'nzAutocomplete.description': localize('nzAutocomplete.description', 'Autocomplete function of input field.'),
'nzAutocomplete.nzAutocomplete.description': localize('nzAutocomplete.nzAutocomplete.description', 'used to bind `nzAutocomplete` components'),
'nz-autocomplete.title': localize('nz-autocomplete.title', 'Autocomplete'),
'nz-autocomplete.whenToUse': localize('nz-autocomplete.whenToUse', 'When there is a need for autocomplete functionality.'),
'nz-autocomplete.description': localize('nz-autocomplete.description', 'Autocomplete function of input field.'),
'nz-autocomplete.nzBackfill.description': localize('nz-autocomplete.nzBackfill.description', 'backfill selected item the input when using keyboard'),
'nz-autocomplete.nzDataSource.description': localize('nz-autocomplete.nzDataSource.description', 'Data source for autocomplete'),
'nz-autocomplete.nzDefaultActiveFirstOption.description': localize('nz-autocomplete.nzDefaultActiveFirstOption.description', 'Whether active first option by default'),
'nz-autocomplete.nzWidth.description': localize('nz-autocomplete.nzWidth.description', 'Custom width, unit px'),
'nz-autocomplete.nzOverlayClassName.description': localize('nz-autocomplete.nzOverlayClassName.description', 'Class name of the dropdown root element'),
'nz-autocomplete.nzOverlayStyle.description': localize('nz-autocomplete.nzOverlayStyle.description', 'Style of the dropdown root element'),
'nz-autocomplete.compareWith.description': localize('nz-autocomplete.compareWith.description', 'Same as [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection)'),
'nz-auto-option.title': localize('nz-auto-option.title', 'Autocomplete'),
'nz-auto-option.whenToUse': localize('nz-auto-option.whenToUse', 'When there is a need for autocomplete functionality.'),
'nz-auto-option.description': localize('nz-auto-option.description', 'Autocomplete function of input field.'),
'nz-auto-option.nzValue.description': localize('nz-auto-option.nzValue.description', 'bind ngModel of the trigger element'),
'nz-auto-option.nzLabel.description': localize('nz-auto-option.nzLabel.description', 'display value of the trigger element'),
'nz-auto-option.nzDisabled.description': localize('nz-auto-option.nzDisabled.description', 'disabled option'),
'nz-avatar.title': localize('nz-avatar.title', 'Avatar'),
'nz-avatar.whenToUse': localize('nz-avatar.whenToUse', ' '),
'nz-avatar.description': localize('nz-avatar.description', 'Avatars can be used to represent people or objects. It supports images, `Icon`s, or letters.'),
'nz-avatar.nzIcon.description': localize('nz-avatar.nzIcon.description', 'The `Icon` type for an icon avatar, see `Icon`'),
'nz-avatar.nzShape.description': localize('nz-avatar.nzShape.description', 'The shape of avatar'),
'nz-avatar.nzSize.description': localize('nz-avatar.nzSize.description', 'The size of the avatar'),
'nz-avatar.nzGap.description': localize('nz-avatar.nzGap.description', 'Letter type unit distance between left and right sides'),
'nz-avatar.nzSrc.description': localize('nz-avatar.nzSrc.description', 'The address of the image for an image avatar'),
'nz-avatar.nzSrcSet.description': localize('nz-avatar.nzSrcSet.description', 'a list of sources to use for different screen resolutions'),
'nz-avatar.nzAlt.description': localize('nz-avatar.nzAlt.description', 'This attribute defines the alternative text describing the image'),
'nz-avatar.nzText.description': localize('nz-avatar.nzText.description', 'Letter type avatar'),
'nz-avatar.nzError.description': localize('nz-avatar.nzError.description', 'Handler when img load error, call the `preventDefault` method to prevent default fallback behavior'),
'nz-avatar-group.title': localize('nz-avatar-group.title', 'Avatar'),
'nz-avatar-group.whenToUse': localize('nz-avatar-group.whenToUse', ' '),
'nz-avatar-group.description': localize('nz-avatar-group.description', 'Avatars can be used to represent people or objects. It supports images, `Icon`s, or letters.'),
'nz-back-top.title': localize('nz-back-top.title', 'BackTop'),
'nz-back-top.whenToUse': localize('nz-back-top.whenToUse', '- When the page content is very long.\n- When you need to go back to the top very frequently in order to view the contents.'),
'nz-back-top.description': localize('nz-back-top.description', 'The distance to the bottom is set to `50px` by default, which is overridable.\nIf you decide to use custom styles, please note the size limit: no more than `40px * 40px`.'),
'nz-back-top.nzTemplate.description': localize('nz-back-top.nzTemplate.description', 'custom content'),
'nz-back-top.nzVisibilityHeight.description': localize('nz-back-top.nzVisibilityHeight.description', 'the `nz-back-top` button will not show until the scroll height reaches this value'),
'nz-back-top.nzTarget.description': localize('nz-back-top.nzTarget.description', 'specifies the scrollable area dom node'),
'nz-back-top.nzDuration.description': localize('nz-back-top.nzDuration.description', 'Time to return to top (ms)'),
'nz-back-top.nzClick.description': localize('nz-back-top.nzClick.description', 'a callback function, which can be executed when you click the button'),
'nz-badge.title': localize('nz-badge.title', 'Badge'),
'nz-badge.whenToUse': localize('nz-badge.whenToUse', 'Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.'),
'nz-badge.description': localize('nz-badge.description', 'Small numerical value or status descriptor for UI elements.'),
'nz-badge.nzStandalone.description': localize('nz-badge.nzStandalone.description', 'Whether standalone mode'),
'nz-badge.nzColor.description': localize('nz-badge.nzColor.description', 'Customize Badge dot color'),
'nz-badge.nzCount.description': localize('nz-badge.nzCount.description', 'Number to show in badge'),
'nz-badge.nzDot.description': localize('nz-badge.nzDot.description', 'Whether to display a red dot instead of `count`'),
'nz-badge.nzShowDot.description': localize('nz-badge.nzShowDot.description', 'Whether to display the red dot'),
'nz-badge.nzOverflowCount.description': localize('nz-badge.nzOverflowCount.description', 'Max count to show'),
'nz-badge.nzShowZero.description': localize('nz-badge.nzShowZero.description', 'Whether to show badge when `count` is zero'),
'nz-badge.nzSize.description': localize('nz-badge.nzSize.description', 'If `nzCount` is set, `size` sets the size of badge'),
'nz-badge.nzStatus.description': localize('nz-badge.nzStatus.description', 'Set `nz-badge` as a status dot'),
'nz-badge.nzText.description': localize('nz-badge.nzText.description', 'If `nzStatus` is set, `text` sets the display text of the status `dot`'),
'nz-badge.nzTitle.description': localize('nz-badge.nzTitle.description', 'Text to show when hovering over the badge（Only Non-standalone), hide when value is `null`'),
'nz-badge.nzOffset.description': localize('nz-badge.nzOffset.description', 'set offset of the badge dot, like[x, y] (Only Non-standalone)'),
'nz-ribbon.title': localize('nz-ribbon.title', 'Badge'),
'nz-ribbon.whenToUse': localize('nz-ribbon.whenToUse', 'Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.'),
'nz-ribbon.description': localize('nz-ribbon.description', 'Small numerical value or status descriptor for UI elements.'),
'nz-ribbon.nzColor.description': localize('nz-ribbon.nzColor.description', 'Customize Ribbon color'),
'nz-ribbon.nzPlacement.description': localize('nz-ribbon.nzPlacement.description', 'The placement of the Ribbon'),
'nz-ribbon.nzText.description': localize('nz-ribbon.nzText.description', 'Content inside the Ribbon'),
'nz-breadcrumb.title': localize('nz-breadcrumb.title', 'Breadcrumb'),
'nz-breadcrumb.whenToUse': localize('nz-breadcrumb.whenToUse', '- When the system has more than two layers in a hierarchy.\n- When you need to inform the user of where they are.\n- When the user may need to navigate back to a higher level.\n- When the application has multi-layer architecture.'),
'nz-breadcrumb.description': localize('nz-breadcrumb.description', 'A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.'),
'nz-breadcrumb.nzSeparator.description': localize('nz-breadcrumb.nzSeparator.description', 'Custom separator'),
'nz-breadcrumb.nzAutoGenerate.description': localize('nz-breadcrumb.nzAutoGenerate.description', 'Auto generate breadcrumb'),
'nz-breadcrumb.nzRouteLabel.description': localize('nz-breadcrumb.nzRouteLabel.description', 'Name of property that determines displayed text in routing config. It should be used when `nzAutoGenerate` is `true`'),
'nz-breadcrumb.nzRouteLabelFn.description': localize('nz-breadcrumb.nzRouteLabelFn.description', 'Format breadcrumb item label text，normally used in international app to translate i18n key. It should be used when `nzAutoGenerate` is `true`'),
'nz-button.title': localize('nz-button.title', 'Button'),
'nz-button.whenToUse': localize('nz-button.whenToUse', 'A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.'),
'nz-button.description': localize('nz-button.description', 'Note：nz-button is a Directive, it accepts all props which are supported by [native button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).'),
'nz-button.disabled.description': localize('nz-button.disabled.description', 'prevents a user from interacting with the button'),
'nz-button.nzGhost.description': localize('nz-button.nzGhost.description', 'make background transparent and invert text and border colors'),
'nz-button.nzLoading.description': localize('nz-button.nzLoading.description', 'set the loading status of button'),
'nz-button.nzShape.description': localize('nz-button.nzShape.description', 'can be set to `circle` `round` or omitted'),
'nz-button.nzSize.description': localize('nz-button.nzSize.description', 'can be set to `small` `large` or omitted'),
'nz-button.nzType.description': localize('nz-button.nzType.description', 'can be set to `primary` `dashed` `text` `link` or omitted (meaning `default`)'),
'nz-button.nzBlock.description': localize('nz-button.nzBlock.description', 'option to fit button width to its parent width'),
'nz-button.nzDanger.description': localize('nz-button.nzDanger.description', 'set the danger status of button'),
'nz-button.click.description': localize('nz-button.click.description', ' '),
'nz-button-group.title': localize('nz-button-group.title', 'Button'),
'nz-button-group.whenToUse': localize('nz-button-group.whenToUse', 'A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.'),
'nz-button-group.description': localize('nz-button-group.description', 'To trigger an operation.'),
'nz-button-group.nzSize.description': localize('nz-button-group.nzSize.description', 'can be set to `small` `large` or omitted'),
'nz-calendar.title': localize('nz-calendar.title', 'Calendar'),
'nz-calendar.whenToUse': localize('nz-calendar.whenToUse', 'When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch.'),
'nz-calendar.description': localize('nz-calendar.description', 'Container for displaying data in calendar form.'),
'nz-calendar.ngModel.description': localize('nz-calendar.ngModel.description', '(Two-way bindable) The current selected date'),
'nz-calendar.nzMode.description': localize('nz-calendar.nzMode.description', 'The display mode of the calendar (two-way bindable)'),
'nz-calendar.nzFullscreen.description': localize('nz-calendar.nzFullscreen.description', 'Whether to display in full-screen'),
'nz-calendar.nzDateCell.description': localize('nz-calendar.nzDateCell.description', '(Contentable) Customize the display of the date cell, the template content will be appended to the cell'),
'nz-calendar.nzDateFullCell.description': localize('nz-calendar.nzDateFullCell.description', '(Contentable) Customize the display of the date cell, the template content will override the cell'),
'nz-calendar.nzMonthCell.description': localize('nz-calendar.nzMonthCell.description', '(Contentable) Customize the display of the month cell, the template content will be appended to the cell'),
'nz-calendar.nzMonthFullCell.description': localize('nz-calendar.nzMonthFullCell.description', '(Contentable) Customize the display of the month cell, the template content will override the cell'),
'nz-calendar.nzDisabledDate.description': localize('nz-calendar.nzDisabledDate.description', 'specify the date that cannot be selected'),
'nz-calendar.nzPanelChange.description': localize('nz-calendar.nzPanelChange.description', 'Callback for when panel changes'),
'nz-calendar.nzSelectChange.description': localize('nz-calendar.nzSelectChange.description', 'A callback function of selected item'),
'nz-card.title': localize('nz-card.title', 'Card'),
'nz-card.whenToUse': localize('nz-card.whenToUse', 'A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.'),
'nz-card.description': localize('nz-card.description', 'Simple rectangular container.'),
'nz-card.nzActions.description': localize('nz-card.nzActions.description', 'The action list, shows at the bottom of the Card.'),
'nz-card.nzBodyStyle.description': localize('nz-card.nzBodyStyle.description', 'Inline style to apply to the card content'),
'nz-card.nzBorderless.description': localize('nz-card.nzBorderless.description', 'Remove border around the card'),
'nz-card.nzCover.description': localize('nz-card.nzCover.description', 'Card cover'),
'nz-card.nzExtra.description': localize('nz-card.nzExtra.description', 'Content to render in the top-right corner of the card'),
'nz-card.nzHoverable.description': localize('nz-card.nzHoverable.description', 'Lift up when hovering card'),
'nz-card.nzLoading.description': localize('nz-card.nzLoading.description', 'Shows a loading indicator while the contents of the card are being fetched'),
'nz-card.nzTitle.description': localize('nz-card.nzTitle.description', 'Card title'),
'nz-card.nzType.description': localize('nz-card.nzType.description', 'Card style type, can be set to `inner` or not set'),
'nz-card.nzSize.description': localize('nz-card.nzSize.description', 'Size of card'),
'nz-card-meta.title': localize('nz-card-meta.title', 'Card'),
'nz-card-meta.whenToUse': localize('nz-card-meta.whenToUse', 'A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.'),
'nz-card-meta.description': localize('nz-card-meta.description', 'Simple rectangular container.'),
'nz-card-meta.nzAvatar.description': localize('nz-card-meta.nzAvatar.description', 'avatar or icon'),
'nz-card-meta.nzDescription.description': localize('nz-card-meta.nzDescription.description', 'description content'),
'nz-card-meta.nzTitle.description': localize('nz-card-meta.nzTitle.description', 'title content'),
'nz-card-grid.title': localize('nz-card-grid.title', 'Card'),
'nz-card-grid.whenToUse': localize('nz-card-grid.whenToUse', 'A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.'),
'nz-card-grid.description': localize('nz-card-grid.description', 'Simple rectangular container.'),
'nz-card-grid.nzHoverable.description': localize('nz-card-grid.nzHoverable.description', 'Lift up when hovering card'),
'nz-card-tab.title': localize('nz-card-tab.title', 'Card'),
'nz-card-tab.whenToUse': localize('nz-card-tab.whenToUse', 'A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.'),
'nz-card-tab.description': localize('nz-card-tab.description', 'Area for tab card'),
'nz-carousel.title': localize('nz-carousel.title', 'Carousel'),
'nz-carousel.whenToUse': localize('nz-carousel.whenToUse', '- When there is a group of content on the same level.\n- When there is insufficient content space, it can be used to save space in the form of a revolving door.\n- Commonly used for a group of pictures/cards.'),
'nz-carousel.description': localize('nz-carousel.description', 'A carousel component. Scales with its container.'),
'nz-carousel.nzAutoPlay.description': localize('nz-carousel.nzAutoPlay.description', 'Whether to scroll automatically'),
'nz-carousel.nzAutoPlaySpeed.description': localize('nz-carousel.nzAutoPlaySpeed.description', 'Duration (milliseconds), does not scroll when set to 0'),
'nz-carousel.nzDotRender.description': localize('nz-carousel.nzDotRender.description', 'Dot render template'),
'nz-carousel.nzDotPosition.description': localize('nz-carousel.nzDotPosition.description', 'The position of the dots, which can be one of `top` `bottom` `left` `right`'),
'nz-carousel.nzDots.description': localize('nz-carousel.nzDots.description', 'Whether to show the dots at the bottom of the gallery'),
'nz-carousel.nzEffect.description': localize('nz-carousel.nzEffect.description', 'Transition effect'),
'nz-carousel.nzEnableSwipe.description': localize('nz-carousel.nzEnableSwipe.description', 'Whether to support swipe gesture'),
'nz-carousel.nzLoop.description': localize('nz-carousel.nzLoop.description', 'Whether to enable the carousel to go in a loop'),
'nz-carousel.nzAfterChange.description': localize('nz-carousel.nzAfterChange.description', 'Callback function called after the current index changes'),
'nz-carousel.nzBeforeChange.description': localize('nz-carousel.nzBeforeChange.description', 'Callback function called before the current index changes'),
'nz-cascader.title': localize('nz-cascader.title', 'Cascader'),
'nz-cascader.whenToUse': localize('nz-cascader.whenToUse', '- When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.\n- When selecting from a large data set, with multi-stage classification separated for easy selection.\n- Chooses cascade items in one float layer for better user experience.'),
'nz-cascader.description': localize('nz-cascader.description', 'Cascade selection box.'),
'nz-cascader.ngModel.description': localize('nz-cascader.ngModel.description', 'selected value'),
'nz-cascader.nzAllowClear.description': localize('nz-cascader.nzAllowClear.description', 'whether allow clear'),
'nz-cascader.nzAutoFocus.description': localize('nz-cascader.nzAutoFocus.description', 'whether auto focus the input box'),
'nz-cascader.nzBackdrop.description': localize('nz-cascader.nzBackdrop.description', 'whether or not the overlay should attach a backdrop'),
'nz-cascader.nzChangeOn.description': localize('nz-cascader.nzChangeOn.description', 'change value on each selection if this function return `true`'),
'nz-cascader.nzChangeOnSelect.description': localize('nz-cascader.nzChangeOnSelect.description', 'change value on each selection if set to true, see above demo for details'),
'nz-cascader.nzColumnClassName.description': localize('nz-cascader.nzColumnClassName.description', 'additional className of column in the popup overlay'),
'nz-cascader.nzDisabled.description': localize('nz-cascader.nzDisabled.description', 'whether disabled select'),
'nz-cascader.nzExpandIcon.description': localize('nz-cascader.nzExpandIcon.description', 'Customize the current item expand icon'),
'nz-cascader.nzExpandTrigger.description': localize('nz-cascader.nzExpandTrigger.description', 'expand current item when click or hover, one of \'click\' \'hover\''),
'nz-cascader.nzLabelProperty.description': localize('nz-cascader.nzLabelProperty.description', 'the label property name of options'),
'nz-cascader.nzLabelRender.description': localize('nz-cascader.nzLabelRender.description', 'render template of displaying selected options'),
'nz-cascader.nzLoadData.description': localize('nz-cascader.nzLoadData.description', 'To load option lazily. If setting `ngModel` with an array value and `nzOptions` is not setting, lazy load will be call immediately'),
'nz-cascader.nzMenuClassName.description': localize('nz-cascader.nzMenuClassName.description', 'additional className of popup overlay'),
'nz-cascader.nzMenuStyle.description': localize('nz-cascader.nzMenuStyle.description', 'additional css style of popup overlay'),
'nz-cascader.nzNotFoundContent.description': localize('nz-cascader.nzNotFoundContent.description', 'Specify content to show when no result matches.'),
'nz-cascader.nzOptionRender.description': localize('nz-cascader.nzOptionRender.description', 'render template of cascader options'),
'nz-cascader.nzOptions.description': localize('nz-cascader.nzOptions.description', 'data options of cascade'),
'nz-cascader.nzPlaceHolder.description': localize('nz-cascader.nzPlaceHolder.description', 'input placeholder'),
'nz-cascader.nzShowArrow.description': localize('nz-cascader.nzShowArrow.description', 'Whether show arrow'),
'nz-cascader.nzShowInput.description': localize('nz-cascader.nzShowInput.description', 'Whether show input'),
'nz-cascader.nzShowSearch.description': localize('nz-cascader.nzShowSearch.description', 'Whether support search. Cannot be used with `[nzLoadData]` at the same time'),
'nz-cascader.nzSize.description': localize('nz-cascader.nzSize.description', 'input size, one of `large` `default` `small`'),
'nz-cascader.nzStatus.description': localize('nz-cascader.nzStatus.description', 'Set validation status'),
'nz-cascader.nzSuffixIcon.description': localize('nz-cascader.nzSuffixIcon.description', 'The custom suffix icon'),
'nz-cascader.nzValueProperty.description': localize('nz-cascader.nzValueProperty.description', 'the value property name of options'),
'nz-cascader.ngModelChange.description': localize('nz-cascader.ngModelChange.description', 'Emit on values change'),
'nz-cascader.nzClear.description': localize('nz-cascader.nzClear.description', 'Emit on clear values'),
'nz-cascader.nzVisibleChange.description': localize('nz-cascader.nzVisibleChange.description', 'Emit on popup menu visible or hide'),
'nz-cascader.nzSelectionChange.description': localize('nz-cascader.nzSelectionChange.description', 'Emit on values change'),
'nz-cascader.formControlName.description': localize('nz-cascader.formControlName.description', ' '),
'nz-cascader.name.description': localize('nz-cascader.name.description', ' '),
'nz-checkbox.title': localize('nz-checkbox.title', 'Checkbox'),
'nz-checkbox.whenToUse': localize('nz-checkbox.whenToUse', '- Used for selecting multiple values from several options.\n- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.'),
'nz-checkbox.description': localize('nz-checkbox.description', 'Checkbox.'),
'nz-checkbox.nzId.description': localize('nz-checkbox.nzId.description', 'input id attribute inside the component'),
'nz-checkbox.nzAutoFocus.description': localize('nz-checkbox.nzAutoFocus.description', 'get focus when component mounted'),
'nz-checkbox.nzDisabled.description': localize('nz-checkbox.nzDisabled.description', 'Disable checkbox'),
'nz-checkbox.ngModel.description': localize('nz-checkbox.ngModel.description', 'Specifies whether the checkbox is selected, double binding'),
'nz-checkbox.nzIndeterminate.description': localize('nz-checkbox.nzIndeterminate.description', 'set the status of indeterminate，only affect the style'),
'nz-checkbox.nzValue.description': localize('nz-checkbox.nzValue.description', 'use for the callback of `nz-checkbox-wrapper`'),
'nz-checkbox.ngModelChange.description': localize('nz-checkbox.ngModelChange.description', 'The callback function that is triggered when the state changes.'),
'nz-checkbox.formControlName.description': localize('nz-checkbox.formControlName.description', ' '),
'nz-checkbox.name.description': localize('nz-checkbox.name.description', ' '),
'nz-checkbox-group.title': localize('nz-checkbox-group.title', 'Checkbox'),
'nz-checkbox-group.whenToUse': localize('nz-checkbox-group.whenToUse', '- Used for selecting multiple values from several options.\n- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.'),
'nz-checkbox-group.description': localize('nz-checkbox-group.description', 'Checkbox.'),
'nz-checkbox-group.ngModel.description': localize('nz-checkbox-group.ngModel.description', 'Specifies options, double binding'),
'nz-checkbox-group.nzDisabled.description': localize('nz-checkbox-group.nzDisabled.description', 'Disable all checkboxes'),
'nz-checkbox-group.ngModelChange.description': localize('nz-checkbox-group.ngModelChange.description', 'The callback function that is triggered when the state changes.'),
'nz-checkbox-wrapper.title': localize('nz-checkbox-wrapper.title', 'Checkbox'),
'nz-checkbox-wrapper.whenToUse': localize('nz-checkbox-wrapper.whenToUse', '- Used for selecting multiple values from several options.\n- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.'),
'nz-checkbox-wrapper.description': localize('nz-checkbox-wrapper.description', 'Checkbox.'),
'nz-checkbox-wrapper.nzOnChange.description': localize('nz-checkbox-wrapper.nzOnChange.description', 'The callback function that is triggered when the state changes.'),
'nz-code-editor.title': localize('nz-code-editor.title', 'Code Editor'),
'nz-code-editor.whenToUse': localize('nz-code-editor.whenToUse', 'When you want to use monaco editor in Angular.'),
'nz-code-editor.description': localize('nz-code-editor.description', '\nNG-ZORRO experiments are features that are released but not yet considered stable or production ready\nDevelopers and users can opt-in into these features before they are fully released. But breaking changes may occur with any release.\n'),
'nz-code-editor.nzEditorMode.description': localize('nz-code-editor.nzEditorMode.description', 'Mode of monaco editor'),
'nz-code-editor.nzLoading.description': localize('nz-code-editor.nzLoading.description', 'Show the loading spin'),
'nz-code-editor.nzOriginalText.description': localize('nz-code-editor.nzOriginalText.description', 'The content of the left editor in `diff` mode'),
'nz-code-editor.nzFullControl.description': localize('nz-code-editor.nzFullControl.description', 'Enable full control mode. User should manage `TextModel` manually in this mode'),
'nz-code-editor.nzEditorOption.description': localize('nz-code-editor.nzEditorOption.description', '[Please refer to the doc of monaco editor](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditorconstructionoptions.html)'),
'nz-code-editor.nzToolkit.description': localize('nz-code-editor.nzToolkit.description', 'A placeholder for adding some quick actions'),
'nz-code-editor.nzEditorInitialized.description': localize('nz-code-editor.nzEditorInitialized.description', 'The event that a code editor is initialized'),
'nz-collapse.title': localize('nz-collapse.title', 'Collapse'),
'nz-collapse.whenToUse': localize('nz-collapse.whenToUse', '- Can be used to group or hide complex regions to keep the page clean.\n- `Accordion` is a special kind of `Collapse`, which allows only one panel to be expanded at a time.'),
'nz-collapse.description': localize('nz-collapse.description', 'A content area which can be collapsed and expanded.'),
'nz-collapse.nzAccordion.description': localize('nz-collapse.nzAccordion.description', 'Accordion mode'),
'nz-collapse.nzBordered.description': localize('nz-collapse.nzBordered.description', 'Set border style'),
'nz-collapse.nzGhost.description': localize('nz-collapse.nzGhost.description', 'Make the collapse borderless and its background transparent'),
'nz-collapse.nzExpandIconPosition.description': localize('nz-collapse.nzExpandIconPosition.description', 'Set expand icon position'),
'nz-collapse-panel.title': localize('nz-collapse-panel.title', 'Collapse'),
'nz-collapse-panel.whenToUse': localize('nz-collapse-panel.whenToUse', '- Can be used to group or hide complex regions to keep the page clean.\n- `Accordion` is a special kind of `Collapse`, which allows only one panel to be expanded at a time.'),
'nz-collapse-panel.description': localize('nz-collapse-panel.description', 'A content area which can be collapsed and expanded.'),
'nz-collapse-panel.nzDisabled.description': localize('nz-collapse-panel.nzDisabled.description', 'If `true`, panel cannot be opened or closed'),
'nz-collapse-panel.nzHeader.description': localize('nz-collapse-panel.nzHeader.description', 'Title of the panel'),
'nz-collapse-panel.nzExpandedIcon.description': localize('nz-collapse-panel.nzExpandedIcon.description', 'Customize an icon for toggle'),
'nz-collapse-panel.nzExtra.description': localize('nz-collapse-panel.nzExtra.description', 'Extra element in the corner'),
'nz-collapse-panel.nzShowArrow.description': localize('nz-collapse-panel.nzShowArrow.description', 'Display arrow or not'),
'nz-collapse-panel.nzActive.description': localize('nz-collapse-panel.nzActive.description', 'Active status of panel, double binding'),
'nz-collapse-panel.nzActiveChange.description': localize('nz-collapse-panel.nzActiveChange.description', 'Callback function of the active status'),
'nz-comment.title': localize('nz-comment.title', 'Comment'),
'nz-comment.whenToUse': localize('nz-comment.whenToUse', 'Comments can be used to enable discussions on an entity such as a page, blog post, issue or other.'),
'nz-comment.description': localize('nz-comment.description', 'A comment displays user feedback and discussion to website content.'),
'nz-comment.nzAuthor.description': localize('nz-comment.nzAuthor.description', 'The element to display as the comment author'),
'nz-comment.nzDatetime.description': localize('nz-comment.nzDatetime.description', 'A datetime element containing the time to be displayed'),
'nz-comment-avatar.title': localize('nz-comment-avatar.title', 'Comment'),
'nz-comment-avatar.whenToUse': localize('nz-comment-avatar.whenToUse', 'Comments can be used to enable discussions on an entity such as a page, blog post, issue or other.'),
'nz-comment-avatar.description': localize('nz-comment-avatar.description', 'The element to display as the comment avatar.'),
'nz-comment-content.title': localize('nz-comment-content.title', 'Comment'),
'nz-comment-content.whenToUse': localize('nz-comment-content.whenToUse', 'Comments can be used to enable discussions on an entity such as a page, blog post, issue or other.'),
'nz-comment-content.description': localize('nz-comment-content.description', 'The main content of the comment.'),
'nz-comment-action.title': localize('nz-comment-action.title', 'Comment'),
'nz-comment-action.whenToUse': localize('nz-comment-action.whenToUse', 'Comments can be used to enable discussions on an entity such as a page, blog post, issue or other.'),
'nz-comment-action.description': localize('nz-comment-action.description', 'The element items rendered below the comment content.'),
'nz-cron-expression.title': localize('nz-cron-expression.title', 'cron form'),
'nz-cron-expression.whenToUse': localize('nz-cron-expression.whenToUse', 'When you want to use cron in Angular.'),
'nz-cron-expression.description': localize('nz-cron-expression.description', '\nNG-ZORRO experiments are features that are released but not yet considered stable or production ready\nDevelopers and users can opt-in into these features before they are fully released. But breaking changes may occur with any release.\n'),
'nz-cron-expression.nzType.description': localize('nz-cron-expression.nzType.description', 'Cron rule type'),
'nz-cron-expression.nzSize.description': localize('nz-cron-expression.nzSize.description', 'The size of the input box.'),
'nz-cron-expression.nzCollapseDisable.description': localize('nz-cron-expression.nzCollapseDisable.description', 'Hide collapse'),
'nz-cron-expression.nzExtra.description': localize('nz-cron-expression.nzExtra.description', 'Render the content on the right'),
'nz-cron-expression.nzSemantic.description': localize('nz-cron-expression.nzSemantic.description', 'Custom rendering next execution time'),
'nz-date-picker.title': localize('nz-date-picker.title', 'DatePicker'),
'nz-date-picker.whenToUse': localize('nz-date-picker.whenToUse', 'By clicking the input box, you can select a date from a popup calendar.'),
'nz-date-picker.description': localize('nz-date-picker.description', 'To select or input a date.'),
'nz-date-picker.nzDateRender.description': localize('nz-date-picker.nzDateRender.description', 'custom rendering function for date cells (Not support by month-picker/year-picker)'),
'nz-date-picker.nzDisabledTime.description': localize('nz-date-picker.nzDisabledTime.description', 'to specify the time that cannot be selected'),
'nz-date-picker.nzShowTime.description': localize('nz-date-picker.nzShowTime.description', 'to provide an additional time selection'),
'nz-date-picker.nzShowToday.description': localize('nz-date-picker.nzShowToday.description', 'whether to show \'Today\' button'),
'nz-date-picker.nzShowNow.description': localize('nz-date-picker.nzShowNow.description', 'whether to show \'Now\' button on panel when `nzShowTime` is set'),
'nz-date-picker.nzShowWeekNumber.description': localize('nz-date-picker.nzShowWeekNumber.description', 'whether to show the week number on each row (Only supported by date picker. Week picker always shows week numbers)'),
'nz-date-picker.nzOnOk.description': localize('nz-date-picker.nzOnOk.description', 'callback when click ok button'),
'nz-date-picker.nzId.description': localize('nz-date-picker.nzId.description', 'input id attribute inside the component'),
'nz-date-picker.nzAllowClear.description': localize('nz-date-picker.nzAllowClear.description', 'Whether to show clear button'),
'nz-date-picker.nzAutoFocus.description': localize('nz-date-picker.nzAutoFocus.description', 'get focus when component mounted'),
'nz-date-picker.nzBackdrop.description': localize('nz-date-picker.nzBackdrop.description', 'whether or not the overlay should attach a backdrop'),
'nz-date-picker.nzDefaultPickerValue.description': localize('nz-date-picker.nzDefaultPickerValue.description', 'default picker date'),
'nz-date-picker.nzDisabled.description': localize('nz-date-picker.nzDisabled.description', 'determine whether the nz-date-picker is disabled'),
'nz-date-picker.nzDisabledDate.description': localize('nz-date-picker.nzDisabledDate.description', 'specify the date that cannot be selected'),
'nz-date-picker.nzDropdownClassName.description': localize('nz-date-picker.nzDropdownClassName.description', 'to customize the className of the popup calendar'),
'nz-date-picker.nzFormat.description': localize('nz-date-picker.nzFormat.description', 'to set the date format, see `nzFormat special instructions`'),
'nz-date-picker.nzInputReadOnly.description': localize('nz-date-picker.nzInputReadOnly.description', 'set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)'),
'nz-date-picker.nzLocale.description': localize('nz-date-picker.nzLocale.description', 'localization configuration'),
'nz-date-picker.nzMode.description': localize('nz-date-picker.nzMode.description', 'Set picker mode'),
'nz-date-picker.nzPlaceHolder.description': localize('nz-date-picker.nzPlaceHolder.description', 'placeholder of date input'),
'nz-date-picker.nzPopupStyle.description': localize('nz-date-picker.nzPopupStyle.description', 'to customize the style of the popup calendar'),
'nz-date-picker.nzRenderExtraFooter.description': localize('nz-date-picker.nzRenderExtraFooter.description', 'render extra footer in panel'),
'nz-date-picker.nzSize.description': localize('nz-date-picker.nzSize.description', 'determine the size of the input box, the height of `large` and `small`, are 40px and 24px respectively, while default size is 32px'),
'nz-date-picker.nzStatus.description': localize('nz-date-picker.nzStatus.description', 'Set validation status'),
'nz-date-picker.nzPlacement.description': localize('nz-date-picker.nzPlacement.description', 'The position where the selection box pops up'),
'nz-date-picker.nzSuffixIcon.description': localize('nz-date-picker.nzSuffixIcon.description', 'the custom suffix icon'),
'nz-date-picker.nzBorderless.description': localize('nz-date-picker.nzBorderless.description', 'remove the border'),
'nz-date-picker.nzInline.description': localize('nz-date-picker.nzInline.description', 'inline mode'),
'nz-date-picker.nzOnOpenChange.description': localize('nz-date-picker.nzOnOpenChange.description', 'a callback emitter, can be executed whether the popup calendar is popped up or closed'),
'nz-date-picker.ngModel.description': localize('nz-date-picker.ngModel.description', 'Date'),
'nz-date-picker.ngModelChange.description': localize('nz-date-picker.ngModelChange.description', ' '),
'nz-date-picker.formControlName.description': localize('nz-date-picker.formControlName.description', ' '),
'nz-date-picker.name.description': localize('nz-date-picker.name.description', ' '),
'nz-range-picker.title': localize('nz-range-picker.title', 'DatePicker'),
'nz-range-picker.whenToUse': localize('nz-range-picker.whenToUse', 'By clicking the input box, you can select a date from a popup calendar.'),
'nz-range-picker.description': localize('nz-range-picker.description', 'To select or input a date.'),
'nz-range-picker.nzShowTime.description': localize('nz-range-picker.nzShowTime.description', 'to provide an additional time selection'),
'nz-range-picker.nzDisabledTime.description': localize('nz-range-picker.nzDisabledTime.description', 'to specify the time that cannot be selected'),
'nz-range-picker.nzShowWeekNumber.description': localize('nz-range-picker.nzShowWeekNumber.description', 'whether to show the week number on each row (Only supported by date picker. Week picker always shows week numbers)'),
'nz-range-picker.nzOnOk.description': localize('nz-range-picker.nzOnOk.description', 'click ok callback'),
'nz-range-picker.nzId.description': localize('nz-range-picker.nzId.description', 'input id attribute inside the component'),
'nz-range-picker.nzAllowClear.description': localize('nz-range-picker.nzAllowClear.description', 'Whether to show clear button'),
'nz-range-picker.nzAutoFocus.description': localize('nz-range-picker.nzAutoFocus.description', 'get focus when component mounted'),
'nz-range-picker.nzBackdrop.description': localize('nz-range-picker.nzBackdrop.description', 'whether or not the overlay should attach a backdrop'),
'nz-range-picker.nzDefaultPickerValue.description': localize('nz-range-picker.nzDefaultPickerValue.description', 'default picker date'),
'nz-range-picker.nzDisabled.description': localize('nz-range-picker.nzDisabled.description', 'determine whether the nz-date-picker is disabled'),
'nz-range-picker.nzDisabledDate.description': localize('nz-range-picker.nzDisabledDate.description', 'specify the date that cannot be selected'),
'nz-range-picker.nzDropdownClassName.description': localize('nz-range-picker.nzDropdownClassName.description', 'to customize the className of the popup calendar'),
'nz-range-picker.nzFormat.description': localize('nz-range-picker.nzFormat.description', 'to set the date format, see `nzFormat special instructions`'),
'nz-range-picker.nzInputReadOnly.description': localize('nz-range-picker.nzInputReadOnly.description', 'set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)'),
'nz-range-picker.nzLocale.description': localize('nz-range-picker.nzLocale.description', 'localization configuration'),
'nz-range-picker.nzMode.description': localize('nz-range-picker.nzMode.description', 'Set picker mode'),
'nz-range-picker.nzPlaceHolder.description': localize('nz-range-picker.nzPlaceHolder.description', 'placeholder of date input'),
'nz-range-picker.nzPopupStyle.description': localize('nz-range-picker.nzPopupStyle.description', 'to customize the style of the popup calendar'),
'nz-range-picker.nzRenderExtraFooter.description': localize('nz-range-picker.nzRenderExtraFooter.description', 'render extra footer in panel'),
'nz-range-picker.nzSize.description': localize('nz-range-picker.nzSize.description', 'determine the size of the input box, the height of `large` and `small`, are 40px and 24px respectively, while default size is 32px'),
'nz-range-picker.nzStatus.description': localize('nz-range-picker.nzStatus.description', 'Set validation status'),
'nz-range-picker.nzPlacement.description': localize('nz-range-picker.nzPlacement.description', 'The position where the selection box pops up'),
'nz-range-picker.nzSuffixIcon.description': localize('nz-range-picker.nzSuffixIcon.description', 'the custom suffix icon'),
'nz-range-picker.nzBorderless.description': localize('nz-range-picker.nzBorderless.description', 'remove the border'),
'nz-range-picker.nzInline.description': localize('nz-range-picker.nzInline.description', 'inline mode'),
'nz-range-picker.nzOnOpenChange.description': localize('nz-range-picker.nzOnOpenChange.description', 'a callback emitter, can be executed whether the popup calendar is popped up or closed'),
'nz-range-picker.ngModel.description': localize('nz-range-picker.ngModel.description', 'Date'),
'nz-range-picker.nzRanges.description': localize('nz-range-picker.nzRanges.description', 'preseted ranges for quick selection'),
'nz-range-picker.nzSeparator.description': localize('nz-range-picker.nzSeparator.description', 'separator'),
'nz-range-picker.nzOnCalendarChange.description': localize('nz-range-picker.nzOnCalendarChange.description', 'The start time or the end time of the range change callback'),
'nz-range-picker.ngModelChange.description': localize('nz-range-picker.ngModelChange.description', ' '),
'nz-range-picker.formControlName.description': localize('nz-range-picker.formControlName.description', ' '),
'nz-range-picker.name.description': localize('nz-range-picker.name.description', ' '),
'nz-descriptions.title': localize('nz-descriptions.title', 'Descriptions'),
'nz-descriptions.whenToUse': localize('nz-descriptions.whenToUse', 'Commonly displayed on the details page.'),
'nz-descriptions.description': localize('nz-descriptions.description', 'Display multiple read-only fields in groups.'),
'nz-descriptions.nzTitle.description': localize('nz-descriptions.nzTitle.description', 'Describe the title of the list, displayed at the top'),
'nz-descriptions.nzExtra.description': localize('nz-descriptions.nzExtra.description', 'The action area of the description list, placed at the top-right'),
'nz-descriptions.nzBordered.description': localize('nz-descriptions.nzBordered.description', 'Whether to display the border'),
'nz-descriptions.nzColumn.description': localize('nz-descriptions.nzColumn.description', 'The number of `nz-descriptions-item` in a row. It could be a number or a object like `{ xs: 8, sm: 16, md: 24}`'),
'nz-descriptions.nzSize.description': localize('nz-descriptions.nzSize.description', 'Set the size of the list. Only works when `nzBordered` is set'),
'nz-descriptions.nzColon.description': localize('nz-descriptions.nzColon.description', 'Show colon after title'),
'nz-descriptions-item.title': localize('nz-descriptions-item.title', 'Descriptions'),
'nz-descriptions-item.whenToUse': localize('nz-descriptions-item.whenToUse', 'Commonly displayed on the details page.'),
'nz-descriptions-item.description': localize('nz-descriptions-item.description', 'Display multiple read-only fields in groups.'),
'nz-descriptions-item.nzTitle.description': localize('nz-descriptions-item.nzTitle.description', 'Description of the content'),
'nz-descriptions-item.nzSpan.description': localize('nz-descriptions-item.nzSpan.description', 'The number of columns included'),
'nz-divider.title': localize('nz-divider.title', 'Divider'),
'nz-divider.whenToUse': localize('nz-divider.whenToUse', '- Divide sections of article.\n- Divide inline text and links such as the operation column of table.'),
'nz-divider.description': localize('nz-divider.description', 'A divider line separates different content.'),
'nz-divider.nzDashed.description': localize('nz-divider.nzDashed.description', 'whether line is dashed'),
'nz-divider.nzType.description': localize('nz-divider.nzType.description', 'direction type of divider'),
'nz-divider.nzText.description': localize('nz-divider.nzText.description', 'inner text of divider'),
'nz-divider.nzPlain.description': localize('nz-divider.nzPlain.description', 'Divider text show as plain style'),
'nz-divider.nzOrientation.description': localize('nz-divider.nzOrientation.description', 'inner text orientation'),
'nz-drawer.title': localize('nz-drawer.title', 'Drawer'),
'nz-drawer.whenToUse': localize('nz-drawer.whenToUse', '- Use a Form to create or edit a set of information.\n- Processing subtasks. When subtasks are too heavy for Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy.\n- When a same Form is needed in multiple places.'),
'nz-drawer.description': localize('nz-drawer.description', 'A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since that user can interact with the Drawer without leaving the current page, tasks can be achieved more efficient within the same context.'),
'nz-drawer.nzClosable.description': localize('nz-drawer.nzClosable.description', 'Whether a close (x) button is visible on top left of the Drawer dialog or not.'),
'nz-drawer.nzCloseIcon.description': localize('nz-drawer.nzCloseIcon.description', 'Custom close icon'),
'nz-drawer.nzExtra.description': localize('nz-drawer.nzExtra.description', 'Extra actions area at corner.'),
'nz-drawer.nzMask.description': localize('nz-drawer.nzMask.description', 'Whether to show mask or not.'),
'nz-drawer.nzMaskClosable.description': localize('nz-drawer.nzMaskClosable.description', 'Clicking on the mask (area outside the Drawer) to close the Drawer or not.'),
'nz-drawer.nzCloseOnNavigation.description': localize('nz-drawer.nzCloseOnNavigation.description', 'Whether to close the drawer when the user goes backwards/forwards in history. Note that this usually doesn\'t include clicking on links (unless the user is using the HashLocationStrategy).'),
'nz-drawer.nzKeyboard.description': localize('nz-drawer.nzKeyboard.description', 'Whether support press esc to close'),
'nz-drawer.nzMaskStyle.description': localize('nz-drawer.nzMaskStyle.description', 'Style for Drawer\'s mask element.'),
'nz-drawer.nzBodyStyle.description': localize('nz-drawer.nzBodyStyle.description', 'Body style for drawer body element. Such as height, padding etc.'),
'nz-drawer.nzTitle.description': localize('nz-drawer.nzTitle.description', 'The title for Drawer.'),
'nz-drawer.nzFooter.description': localize('nz-drawer.nzFooter.description', 'The footer for Drawer.'),
'nz-drawer.nzVisible.description': localize('nz-drawer.nzVisible.description', 'Whether the Drawer dialog is visible or not, you can use `[(nzVisible)]` two-way binding'),
'nz-drawer.nzPlacement.description': localize('nz-drawer.nzPlacement.description', 'The placement of the Drawer.'),
'nz-drawer.nzSize.description': localize('nz-drawer.nzSize.description', 'Preset size of drawer, default `378px` and large `736px`.'),
'nz-drawer.nzWidth.description': localize('nz-drawer.nzWidth.description', 'Width of the Drawer dialog, only when placement is `\'right\'` or `\'left\'`, having a higher priority than `nzSize`.'),
'nz-drawer.nzHeight.description': localize('nz-drawer.nzHeight.description', 'Height of the Drawer dialog, only when placement is `\'top\'` or `\'bottom\'`, having a higher priority than `nzSize`.'),
'nz-drawer.nzOffsetX.description': localize('nz-drawer.nzOffsetX.description', 'The the X coordinate offset(px), only when placement is `\'right\'` or `\'left\'`.'),
'nz-drawer.nzOffsetY.description': localize('nz-drawer.nzOffsetY.description', 'The the Y coordinate offset(px), only when placement is `\'top\'` or `\'bottom\'`.'),
'nz-drawer.nzWrapClassName.description': localize('nz-drawer.nzWrapClassName.description', 'The class name of the container of the Drawer dialog.'),
'nz-drawer.nzZIndex.description': localize('nz-drawer.nzZIndex.description', 'The `z-index` of the Drawer.'),
'nz-drawer.nzOnClose.description': localize('nz-drawer.nzOnClose.description', 'Specify a callback that will be called when a user clicks mask, close button or Cancel button.'),
'nz-dropdown.title': localize('nz-dropdown.title', 'Dropdown'),
'nz-dropdown.whenToUse': localize('nz-dropdown.whenToUse', 'If there are too many operations to display, you can wrap them in a `Dropdown`. By clicking/hovering on the trigger, a dropdown menu should appear, which allows you to choose one option and execute relevant actions.'),
'nz-dropdown.description': localize('nz-dropdown.description', 'A dropdown list.'),
'nz-dropdown.nzDropdownMenu.description': localize('nz-dropdown.nzDropdownMenu.description', 'Dropdown menu'),
'nz-dropdown.nzDisabled.description': localize('nz-dropdown.nzDisabled.description', 'whether the dropdown menu is disabled'),
'nz-dropdown.nzPlacement.description': localize('nz-dropdown.nzPlacement.description', 'placement of pop menu'),
'nz-dropdown.nzTrigger.description': localize('nz-dropdown.nzTrigger.description', 'the trigger mode which executes the drop-down action'),
'nz-dropdown.nzClickHide.description': localize('nz-dropdown.nzClickHide.description', 'whether hide menu when click'),
'nz-dropdown.nzVisible.description': localize('nz-dropdown.nzVisible.description', 'whether the dropdown menu is visible, double binding'),
'nz-dropdown.nzOverlayClassName.description': localize('nz-dropdown.nzOverlayClassName.description', 'Class name of the dropdown root element'),
'nz-dropdown.nzOverlayStyle.description': localize('nz-dropdown.nzOverlayStyle.description', 'Style of the dropdown root element'),
'nz-dropdown.nzVisibleChange.description': localize('nz-dropdown.nzVisibleChange.description', 'a callback function takes an argument: `nzVisible`, is executed when the visible state is changed'),
'nz-dropdown-menu.title': localize('nz-dropdown-menu.title', 'Dropdown'),
'nz-dropdown-menu.whenToUse': localize('nz-dropdown-menu.whenToUse', 'If there are too many operations to display, you can wrap them in a `Dropdown`. By clicking/hovering on the trigger, a dropdown menu should appear, which allows you to choose one option and execute relevant actions.'),
'nz-dropdown-menu.description': localize('nz-dropdown-menu.description', 'Wrap Dropdown Menu and pass to `[nz-dropdown]` and `NzContextMenuService`, you can export it via Template Syntax `nzDropdownMenu`'),
'nz-empty.title': localize('nz-empty.title', 'Empty'),
'nz-empty.whenToUse': localize('nz-empty.whenToUse', 'When there is no data provided, display for friendly tips.'),
'nz-empty.description': localize('nz-empty.description', 'Empty state placeholder.'),
'nz-empty.nzNotFoundImage.description': localize('nz-empty.nzNotFoundImage.description', 'Customize image. Will tread as image url when string provided'),
'nz-empty.nzNotFoundContent.description': localize('nz-empty.nzNotFoundContent.description', 'Custom description'),
'nz-empty.nzNotFoundFooter.description': localize('nz-empty.nzNotFoundFooter.description', 'Custom Footer'),
'nz-image.title': localize('nz-image.title', 'Image'),
'nz-image.whenToUse': localize('nz-image.whenToUse', '- When you need to display pictures.\n- Display when loading a large image or fault tolerant handling when loading fail.'),
'nz-image.description': localize('nz-image.description', 'Previewable image.'),
'nz-image.nzSrc.description': localize('nz-image.nzSrc.description', 'Image path'),
'nz-image.nzAlt.description': localize('nz-image.nzAlt.description', 'Alt'),
'nz-image.nzWidth.description': localize('nz-image.nzWidth.description', 'Width'),
'nz-image.nzHeight.description': localize('nz-image.nzHeight.description', 'Height'),
'nz-image.nzAutoSrcset.description': localize('nz-image.nzAutoSrcset.description', 'Whether to optimize image loading'),
'nz-image.nzSrcLoader.description': localize('nz-image.nzSrcLoader.description', 'Loader'),
'nz-image.nzPriority.description': localize('nz-image.nzPriority.description', 'Whether to add [preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content) (only SSR)'),
'nz-form.title': localize('nz-form.title', 'Form'),
'nz-form.whenToUse': localize('nz-form.whenToUse', ' '),
'nz-form.description': localize('nz-form.description', 'Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.'),
'nz-form.nzLayout.description': localize('nz-form.nzLayout.description', 'Form layout'),
'nz-form.nzAutoTips.description': localize('nz-form.nzAutoTips.description', 'Set default props `[nzAutoTips]` value of `nz-form-control`, please refer to the example: **Auto tips**'),
'nz-form.nzDisableAutoTips.description': localize('nz-form.nzDisableAutoTips.description', 'Set default props `[nzDisableAutoTip]` value of `nz-form-control`'),
'nz-form.nzNoColon.description': localize('nz-form.nzNoColon.description', 'Set default props `[nzNoColon]` value of `nz-form-label`'),
'nz-form.nzTooltipIcon.description': localize('nz-form.nzTooltipIcon.description', 'Set default props `[nzTooltipIcon]` value of `nz-form-label`'),
'nz-form.formGroup.description': localize('nz-form.formGroup.description', ' '),
'nz-form.ngSubmit.description': localize('nz-form.ngSubmit.description', ' '),
'nz-form-item.title': localize('nz-form-item.title', 'Form'),
'nz-form-item.whenToUse': localize('nz-form-item.whenToUse', ' '),
'nz-form-item.description': localize('nz-form-item.description', 'Used to separate the item in forms, contains label(optional) and control field.'),
'nz-form-item.nzAlign.description': localize('nz-form-item.nzAlign.description', 'the vertical alignment'),
'nz-form-item.nzGutter.description': localize('nz-form-item.nzGutter.description', 'spacing between grids, could be a number or a object like `{ xs: 8, sm: 16, md: 24}`. or you can use array to make horizontal and vertical spacing work at the same time `[horizontal, vertical]`'),
'nz-form-item.nzJustify.description': localize('nz-form-item.nzJustify.description', 'horizontal arrangement'),
'nz-form-item.nzRequired.description': localize('nz-form-item.nzRequired.description', 'add required style to current item'),
'nz-form-item.nzNoColon.description': localize('nz-form-item.nzNoColon.description', 'whether to not display `:` after label text.'),
'nz-form-item.nzFor.description': localize('nz-form-item.nzFor.description', 'The `for` property of `label`'),
'nz-form-item.nzTooltipTitle.description': localize('nz-form-item.nzTooltipTitle.description', 'Set tooltip info'),
'nz-form-item.nzTooltipIcon.description': localize('nz-form-item.nzTooltipIcon.description', 'Set icon of tooltip info'),
'nz-form-label.title': localize('nz-form-label.title', 'Form'),
'nz-form-label.whenToUse': localize('nz-form-label.whenToUse', ' '),
'nz-form-label.description': localize('nz-form-label.description', 'The label of the form item, optional.'),
'nz-form-label.nzFlex.description': localize('nz-form-label.nzFlex.description', 'flex layout style'),
'nz-form-label.nzOffset.description': localize('nz-form-label.nzOffset.description', 'the number of cells to offset Col from the left'),
'nz-form-label.nzOrder.description': localize('nz-form-label.nzOrder.description', 'raster order'),
'nz-form-label.nzPull.description': localize('nz-form-label.nzPull.description', 'the number of cells that raster is moved to the left'),
'nz-form-label.nzPush.description': localize('nz-form-label.nzPush.description', 'the number of cells that raster is moved to the right'),
'nz-form-label.nzSpan.description': localize('nz-form-label.nzSpan.description', 'raster number of cells to occupy, 0 corresponds to `display: none`'),
'nz-form-label.nzXs.description': localize('nz-form-label.nzXs.description', '`<576px` and also default setting, could be a `span` value or an object containing above props'),
'nz-form-label.nzSm.description': localize('nz-form-label.nzSm.description', '`≥576px`, could be a `span` value or an object containing above props'),
'nz-form-label.nzMd.description': localize('nz-form-label.nzMd.description', '`≥768px`, could be a `span` value or an object containing above props'),
'nz-form-label.nzLg.description': localize('nz-form-label.nzLg.description', '`≥992px`, could be a `span` value or an object containing above props'),
'nz-form-label.nzXl.description': localize('nz-form-label.nzXl.description', '`≥1200px`, could be a `span` value or an object containing above props'),
'nz-form-label.nzXXl.description': localize('nz-form-label.nzXXl.description', '`≥1600px`, could be a `span` value or an object containing above props'),
'nz-form-label.nzRequired.description': localize('nz-form-label.nzRequired.description', 'add required style to current item'),
'nz-form-label.nzNoColon.description': localize('nz-form-label.nzNoColon.description', 'whether to not display `:` after label text.'),
'nz-form-label.nzFor.description': localize('nz-form-label.nzFor.description', 'The `for` property of `label`'),
'nz-form-label.nzTooltipTitle.description': localize('nz-form-label.nzTooltipTitle.description', 'Set tooltip info'),
'nz-form-label.nzTooltipIcon.description': localize('nz-form-label.nzTooltipIcon.description', 'Set icon of tooltip info'),
'nz-form-control.title': localize('nz-form-control.title', 'Form'),
'nz-form-control.whenToUse': localize('nz-form-control.whenToUse', ' '),
'nz-form-control.description': localize('nz-form-control.description', 'Note：Due to the lack of partial Observable in [Angular Form](https://github.com/angular/angular/issues/10887), you have to notify `nz-form-control` to update its status with `updateValueAndValidity` when you update form status using methods like `markAsDirty`.'),
'nz-form-control.nzFlex.description': localize('nz-form-control.nzFlex.description', 'flex layout style'),
'nz-form-control.nzOffset.description': localize('nz-form-control.nzOffset.description', 'the number of cells to offset Col from the left'),
'nz-form-control.nzOrder.description': localize('nz-form-control.nzOrder.description', 'raster order'),
'nz-form-control.nzPull.description': localize('nz-form-control.nzPull.description', 'the number of cells that raster is moved to the left'),
'nz-form-control.nzPush.description': localize('nz-form-control.nzPush.description', 'the number of cells that raster is moved to the right'),
'nz-form-control.nzSpan.description': localize('nz-form-control.nzSpan.description', 'raster number of cells to occupy, 0 corresponds to `display: none`'),
'nz-form-control.nzXs.description': localize('nz-form-control.nzXs.description', '`<576px` and also default setting, could be a `span` value or an object containing above props'),
'nz-form-control.nzSm.description': localize('nz-form-control.nzSm.description', '`≥576px`, could be a `span` value or an object containing above props'),
'nz-form-control.nzMd.description': localize('nz-form-control.nzMd.description', '`≥768px`, could be a `span` value or an object containing above props'),
'nz-form-control.nzLg.description': localize('nz-form-control.nzLg.description', '`≥992px`, could be a `span` value or an object containing above props'),
'nz-form-control.nzXl.description': localize('nz-form-control.nzXl.description', '`≥1200px`, could be a `span` value or an object containing above props'),
'nz-form-control.nzXXl.description': localize('nz-form-control.nzXXl.description', '`≥1600px`, could be a `span` value or an object containing above props'),
'nz-form-control.nzValidateStatus.description': localize('nz-form-control.nzValidateStatus.description', 'Will generate status based on the input `FormControl`, `NgModel` or string, the default value is the first `FormControl` or `NgModel` in `nz-form-control`'),
'nz-form-control.nzHasFeedback.description': localize('nz-form-control.nzHasFeedback.description', 'Used with `nzValidateStatus`, this option specifies the validation status icon. Recommended to be used only with `Input`.'),
'nz-form-control.nzExtra.description': localize('nz-form-control.nzExtra.description', 'The extra prompt message'),
'nz-form-control.nzSuccessTip.description': localize('nz-form-control.nzSuccessTip.description', 'Tip display when validate success'),
'nz-form-control.nzWarningTip.description': localize('nz-form-control.nzWarningTip.description', 'Tip display when validate warning'),
'nz-form-control.nzErrorTip.description': localize('nz-form-control.nzErrorTip.description', 'Tip display when validate error'),
'nz-form-control.nzValidatingTip.description': localize('nz-form-control.nzValidatingTip.description', 'Tip display when validating'),
'nz-form-control.nzAutoTips.description': localize('nz-form-control.nzAutoTips.description', 'The object of the tips, please refer to the example: **Auto tips**'),
'nz-form-control.nzDisableAutoTips.description': localize('nz-form-control.nzDisableAutoTips.description', 'Disable Auto Tips'),
'nz-form-split.title': localize('nz-form-split.title', 'Form'),
'nz-form-split.whenToUse': localize('nz-form-split.whenToUse', ' '),
'nz-form-split.description': localize('nz-form-split.description', 'The split icon of `-`'),
'nz-form-text.title': localize('nz-form-text.title', 'Form'),
'nz-form-text.whenToUse': localize('nz-form-text.whenToUse', ' '),
'nz-form-text.description': localize('nz-form-text.description', 'Text in `nz-form-control`'),
'nz-graph.title': localize('nz-graph.title', 'Graph'),
'nz-graph.whenToUse': localize('nz-graph.whenToUse', 'When you want to use graph in Angular.'),
'nz-graph.description': localize('nz-graph.description', '\nNG-ZORRO experiments are features that are released but not yet considered stable or production ready\nDevelopers and users can opt-in into these features before they are fully released. But breaking changes may occur with any release.\n'),
'nz-graph.nzGraphData.description': localize('nz-graph.nzGraphData.description', 'Data source'),
'nz-graph.nzRankDirection.description': localize('nz-graph.nzRankDirection.description', 'Graph Direction'),
'nz-graph.nzAutoSize.description': localize('nz-graph.nzAutoSize.description', 'Whether to automatically adjust the height of the node, the default equal height'),
'nz-graph.nzGraphLayoutConfig.description': localize('nz-graph.nzGraphLayoutConfig.description', 'Global config of graph'),
'nz-graph-zoom.title': localize('nz-graph-zoom.title', 'Graph'),
'nz-graph-zoom.whenToUse': localize('nz-graph-zoom.whenToUse', 'When you want to use graph in Angular.'),
'nz-graph-zoom.description': localize('nz-graph-zoom.description', '\nNG-ZORRO experiments are features that are released but not yet considered stable or production ready\nDevelopers and users can opt-in into these features before they are fully released. But breaking changes may occur with any release.\n'),
'nz-graph-zoom.nzZoom.description': localize('nz-graph-zoom.nzZoom.description', 'Default zoom scale'),
'nz-graph-zoom.nzMinZoom.description': localize('nz-graph-zoom.nzMinZoom.description', 'Minimum zoom scale'),
'nz-graph-zoom.nzMaxZoom.description': localize('nz-graph-zoom.nzMaxZoom.description', 'Maximum zoom scale'),
'nz-graph-zoom.nzTransformEvent.description': localize('nz-graph-zoom.nzTransformEvent.description', 'Event of zooming'),
'nz-graph-zoom.fitCenter.description': localize('nz-graph-zoom.fitCenter.description', 'Move graph to center'),
'nz-graph-zoom.focus.description': localize('nz-graph-zoom.focus.description', 'Move target node to center'),
'nzGraphNode.title': localize('nzGraphNode.title', 'Graph'),
'nzGraphNode.whenToUse': localize('nzGraphNode.whenToUse', 'When you want to use graph in Angular.'),
'nzGraphNode.description': localize('nzGraphNode.description', 'Customize the graph node template'),
'nzGraphGroupNode.title': localize('nzGraphGroupNode.title', 'Graph'),
'nzGraphGroupNode.whenToUse': localize('nzGraphGroupNode.whenToUse', 'When you want to use graph in Angular.'),
'nzGraphGroupNode.description': localize('nzGraphGroupNode.description', 'Customize the graph group-node template'),
'nzGraphEdge.title': localize('nzGraphEdge.title', 'Graph'),
'nzGraphEdge.whenToUse': localize('nzGraphEdge.whenToUse', 'When you want to use graph in Angular.'),
'nzGraphEdge.description': localize('nzGraphEdge.description', 'Customize the graph edge template'),
'nz-icon.title': localize('nz-icon.title', 'Icon'),
'nz-icon.whenToUse': localize('nz-icon.whenToUse', ' '),
'nz-icon.description': localize('nz-icon.description', 'Semantic vector graphics.'),
'nz-icon.nzType.description': localize('nz-icon.nzType.description', 'Type of the ant design icon'),
'nz-icon.nzTheme.description': localize('nz-icon.nzTheme.description', 'Type of the ant design icon'),
'nz-icon.nzSpin.description': localize('nz-icon.nzSpin.description', 'Rotate icon with animation'),
'nz-icon.nzTwotoneColor.description': localize('nz-icon.nzTwotoneColor.description', 'Only support the two-tone icon. Specific the primary color.'),
'nz-icon.nzIconfont.description': localize('nz-icon.nzIconfont.description', 'Type of the icon from iconfont'),
'nz-icon.nzRotate.description': localize('nz-icon.nzRotate.description', 'Rotate degrees'),
'nz-image.nzFallback.description': localize('nz-image.nzFallback.description', 'Load failure fault-tolerant src'),
'nz-image.nzPlaceholder.description': localize('nz-image.nzPlaceholder.description', 'Load placeholder src'),
'nz-image.nzDisablePreview.description': localize('nz-image.nzDisablePreview.description', 'Whether to disable the preview'),
'nz-image.nzCloseOnNavigation.description': localize('nz-image.nzCloseOnNavigation.description', 'Whether to close the image preview when the user goes backwards/forwards in history. Note that this usually doesn\'t include clicking on links (unless the user is using the HashLocationStrategy).'),
'nz-image.nzDirection.description': localize('nz-image.nzDirection.description', 'Text directionality'),
'nz-input.title': localize('nz-input.title', 'Input'),
'nz-input.whenToUse': localize('nz-input.whenToUse', '- A user input in a form field is needed.\n- A search input is required.'),
'nz-input.description': localize('nz-input.description', 'All props of input supported by [w3c standards](https://www.w3schools.com/tags/tag_input.asp) and Angular can used in `nz-input`.'),
'nz-input.nzSize.description': localize('nz-input.nzSize.description', 'The size of the input box. Note: in the context of a form, the `large` size is used.'),
'nz-input.nzAutosize.description': localize('nz-input.nzAutosize.description', 'Only used for `textarea`, height autosize feature, can be set to `boolean` or an object `{ minRows: 2, maxRows: 6 }`'),
'nz-input.nzBorderless.description': localize('nz-input.nzBorderless.description', 'Whether hide border'),
'nz-input.nzStatus.description': localize('nz-input.nzStatus.description', 'Set validation status'),
'nz-input.ngModel.description': localize('nz-input.ngModel.description', ' '),
'nz-input.ngModelChange.description': localize('nz-input.ngModelChange.description', ' '),
'nz-input.disabled.description': localize('nz-input.disabled.description', ' '),
'nz-input.nzAutocomplete.description': localize('nz-input.nzAutocomplete.description', ' '),
'nz-input.formControlName.description': localize('nz-input.formControlName.description', ' '),
'nz-input.name.description': localize('nz-input.name.description', ' '),
'nz-input-group.title': localize('nz-input-group.title', 'Input'),
'nz-input-group.whenToUse': localize('nz-input-group.whenToUse', '- A user input in a form field is needed.\n- A search input is required.'),
'nz-input-group.description': localize('nz-input-group.description', 'A basic widget for getting the user input is a text field.\nKeyboard and mouse can be used for providing or changing data.'),
'nz-input-group.nzAddOnAfter.description': localize('nz-input-group.nzAddOnAfter.description', 'The label text displayed after (on the right side of) the input field, can work with `nzAddOnBefore`'),
'nz-input-group.nzAddOnBefore.description': localize('nz-input-group.nzAddOnBefore.description', 'The label text displayed before (on the left side of) the input field, can work with `nzAddOnAfter`'),
'nz-input-group.nzPrefix.description': localize('nz-input-group.nzPrefix.description', 'The prefix icon for the Input, can work with `nzSuffix`'),
'nz-input-group.nzSuffix.description': localize('nz-input-group.nzSuffix.description', 'The suffix icon for the Input, can work with `nzPrefix`'),
'nz-input-group.nzCompact.description': localize('nz-input-group.nzCompact.description', 'Whether use compact style'),
'nz-input-group.nzSize.description': localize('nz-input-group.nzSize.description', 'The size of `nz-input-group` specifies the size of the included `nz-input` fields'),
'nz-input-group.nzStatus.description': localize('nz-input-group.nzStatus.description', 'Set validation status'),
'nz-textarea-count.title': localize('nz-textarea-count.title', 'Input'),
'nz-textarea-count.whenToUse': localize('nz-textarea-count.whenToUse', '- A user input in a form field is needed.\n- A search input is required.'),
'nz-textarea-count.description': localize('nz-textarea-count.description', 'A basic widget for getting the user input is a text field.\nKeyboard and mouse can be used for providing or changing data.'),
'nz-textarea-count.nzMaxCharacterCount.description': localize('nz-textarea-count.nzMaxCharacterCount.description', '`textarea` maximum character count displayed'),
'nz-textarea-count.nzComputeCharacterCount.description': localize('nz-textarea-count.nzComputeCharacterCount.description', 'customized `characterCount` computation function'),
'nz-input-number.title': localize('nz-input-number.title', 'InputNumber'),
'nz-input-number.whenToUse': localize('nz-input-number.whenToUse', 'When a numeric value needs to be provided.'),
'nz-input-number.description': localize('nz-input-number.description', 'Enter a number within certain range with the mouse or keyboard.'),
'nz-input-number.ngModel.description': localize('nz-input-number.ngModel.description', 'current value, double binding'),
'nz-input-number.nzAutoFocus.description': localize('nz-input-number.nzAutoFocus.description', 'get focus when component mounted'),
'nz-input-number.nzDisabled.description': localize('nz-input-number.nzDisabled.description', 'disable the input'),
'nz-input-number.nzReadOnly.description': localize('nz-input-number.nzReadOnly.description', 'If readonly the input'),
'nz-input-number.nzMax.description': localize('nz-input-number.nzMax.description', 'max value'),
'nz-input-number.nzMin.description': localize('nz-input-number.nzMin.description', 'min value'),
'nz-input-number.nzFormatter.description': localize('nz-input-number.nzFormatter.description', 'Specifies the format of the value presented'),
'nz-input-number.nzParser.description': localize('nz-input-number.nzParser.description', 'Specifies the value extracted from nzFormatter'),
'nz-input-number.nzPrecision.description': localize('nz-input-number.nzPrecision.description', 'precision of input value'),
'nz-input-number.nzPrecisionMode.description': localize('nz-input-number.nzPrecisionMode.description', 'The method for calculating the precision of input value'),
'nz-input-number.nzSize.description': localize('nz-input-number.nzSize.description', 'width of input box'),
'nz-input-number.nzStatus.description': localize('nz-input-number.nzStatus.description', 'Set validation status'),
'nz-input-number.nzStep.description': localize('nz-input-number.nzStep.description', 'The number to which the current value is increased or decreased. It can be an integer or decimal.'),
'nz-input-number.nzInputMode.description': localize('nz-input-number.nzInputMode.description', 'enumerated attribute that hints at the type of data that might be entered by the user, [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)'),
'nz-input-number.nzPlaceHolder.description': localize('nz-input-number.nzPlaceHolder.description', 'Placeholder of select'),
'nz-input-number.nzId.description': localize('nz-input-number.nzId.description', 'input id attribute inside the component'),
'nz-input-number.ngModelChange.description': localize('nz-input-number.ngModelChange.description', 'The callback triggered when the value is changed'),
'nz-input-number.nzFocus.description': localize('nz-input-number.nzFocus.description', 'focus callback'),
'nz-input-number.nzBlur.description': localize('nz-input-number.nzBlur.description', 'blur callback'),
'nz-input-number.formControlName.description': localize('nz-input-number.formControlName.description', ' '),
'nz-input-number.name.description': localize('nz-input-number.name.description', ' '),
'nz-input-number-group.title': localize('nz-input-number-group.title', 'InputNumber'),
'nz-input-number-group.whenToUse': localize('nz-input-number-group.whenToUse', 'When a numeric value needs to be provided.'),
'nz-input-number-group.description': localize('nz-input-number-group.description', 'Enter a number within certain range with the mouse or keyboard.'),
'nz-input-number-group.nzAddOnAfter.description': localize('nz-input-number-group.nzAddOnAfter.description', 'The label text displayed after (on the right side of) the input number field, can work with `nzAddOnBefore`'),
'nz-input-number-group.nzAddOnBefore.description': localize('nz-input-number-group.nzAddOnBefore.description', 'The label text displayed before (on the left side of) the input number field, can work with `nzAddOnAfter`'),
'nz-input-number-group.nzPrefix.description': localize('nz-input-number-group.nzPrefix.description', 'The prefix icon for the Input Number, can work with `nzSuffix`'),
'nz-input-number-group.nzSuffix.description': localize('nz-input-number-group.nzSuffix.description', 'The suffix icon for the Input Number, can work with `nzPrefix`'),
'nz-input-number-group.nzPrefixIcon.description': localize('nz-input-number-group.nzPrefixIcon.description', 'The prefix icon for the Input Number'),
'nz-input-number-group.nzSuffixIcon.description': localize('nz-input-number-group.nzSuffixIcon.description', 'The suffix icon for the Input Number'),
'nz-input-number-group.nzCompact.description': localize('nz-input-number-group.nzCompact.description', 'Whether use compact style'),
'nz-input-number-group.nzSize.description': localize('nz-input-number-group.nzSize.description', 'The size of `nz-input-number-group` specifies the size of the included `nz-input-number` fields'),
'nz-input-number-group.nzStatus.description': localize('nz-input-number-group.nzStatus.description', 'Set validation status'),
'nz-sider.title': localize('nz-sider.title', 'Layout'),
'nz-sider.whenToUse': localize('nz-sider.whenToUse', ' '),
'nz-sider.description': localize('nz-sider.description', 'The sidebar.'),
'nz-sider.nzBreakpoint.description': localize('nz-sider.nzBreakpoint.description', 'breakpoints of the responsive layout'),
'nz-sider.nzCollapsedWidth.description': localize('nz-sider.nzCollapsedWidth.description', 'width of the collapsed sidebar, by setting to `0` a special `trigger` will appear'),
'nz-sider.nzCollapsible.description': localize('nz-sider.nzCollapsible.description', 'whether can be collapsed'),
'nz-sider.nzCollapsed.description': localize('nz-sider.nzCollapsed.description', 'the collapsed status can be double binding'),
'nz-sider.nzReverseArrow.description': localize('nz-sider.nzReverseArrow.description', 'reverse direction of arrow, for a sider that expands from the right'),
'nz-sider.nzTrigger.description': localize('nz-sider.nzTrigger.description', 'specify the customized `trigger`, set to `null` to hide the `trigger`'),
'nz-sider.nzZeroTrigger.description': localize('nz-sider.nzZeroTrigger.description', 'specify the customized trigger when `nzCollapsedWidth` setting to `0`'),
'nz-sider.nzWidth.description': localize('nz-sider.nzWidth.description', 'width of the sidebar'),
'nz-sider.nzTheme.description': localize('nz-sider.nzTheme.description', 'color theme of the sidebar'),
'nz-sider.nzCollapsedChange.description': localize('nz-sider.nzCollapsedChange.description', 'the callback function'),
'nz-list.title': localize('nz-list.title', 'List'),
'nz-list.whenToUse': localize('nz-list.whenToUse', 'A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.'),
'nz-list.description': localize('nz-list.description', 'Simple List.'),
'nz-list.nzBordered.description': localize('nz-list.nzBordered.description', 'Toggles rendering of the border around the list'),
'nz-list.nzFooter.description': localize('nz-list.nzFooter.description', 'List footer renderer'),
'nz-list.nzHeader.description': localize('nz-list.nzHeader.description', 'List header renderer'),
'nz-list.nzItemLayout.description': localize('nz-list.nzItemLayout.description', 'The layout of list, default is `horizontal`, If a vertical list is desired, set the itemLayout property to `vertical`'),
'nz-list.nzLoading.description': localize('nz-list.nzLoading.description', 'Shows a loading indicator while the contents of the list are being fetched'),
'nz-list.nzSize.description': localize('nz-list.nzSize.description', 'Size of list'),
'nz-list.nzSplit.description': localize('nz-list.nzSplit.description', 'Toggles rendering of the split under the list item'),
'nz-list-empty.title': localize('nz-list-empty.title', 'List'),
'nz-list-empty.whenToUse': localize('nz-list-empty.whenToUse', 'A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.'),
'nz-list-empty.description': localize('nz-list-empty.description', 'Empty content component for the list.'),
'nz-list-empty.nzNoResult.description': localize('nz-list-empty.nzNoResult.description', 'Empty content'),
'nz-list-header.title': localize('nz-list-header.title', 'List'),
'nz-list-header.whenToUse': localize('nz-list-header.whenToUse', 'A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.'),
'nz-list-header.description': localize('nz-list-header.description', 'Header component for the list.'),
'nz-list-header.nzNoFlex.description': localize('nz-list-header.nzNoFlex.description', 'Whether it\'s not `flex` layout rendering'),
'nz-list-footer.title': localize('nz-list-footer.title', 'List'),
'nz-list-footer.whenToUse': localize('nz-list-footer.whenToUse', 'A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.'),
'nz-list-footer.description': localize('nz-list-footer.description', 'Footer component for the list.'),
'nz-list-footer.nzNoFlex.description': localize('nz-list-footer.nzNoFlex.description', 'Whether it\'s not `flex` layout rendering'),
'nz-list-pagination.title': localize('nz-list-pagination.title', 'List'),
'nz-list-pagination.whenToUse': localize('nz-list-pagination.whenToUse', 'A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.'),
'nz-list-pagination.description': localize('nz-list-pagination.description', 'Pagination component for the list.'),
'nz-list-pagination.nzNoFlex.description': localize('nz-list-pagination.nzNoFlex.description', 'Whether it\'s not `flex` layout rendering'),
'nz-list-load-more.title': localize('nz-list-load-more.title', 'List'),
'nz-list-load-more.whenToUse': localize('nz-list-load-more.whenToUse', 'A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.'),
'nz-list-load-more.description': localize('nz-list-load-more.description', 'Load more component for the list.'),
'nz-list-load-more.nzNoFlex.description': localize('nz-list-load-more.nzNoFlex.description', 'Whether it\'s not `flex` layout rendering'),
'nz-list-item.title': localize('nz-list-item.title', 'List'),
'nz-list-item.whenToUse': localize('nz-list-item.whenToUse', 'A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.'),
'nz-list-item.description': localize('nz-list-item.description', 'Simple List.'),
'nz-list-item.nzNoFlex.description': localize('nz-list-item.nzNoFlex.description', 'Whether it\'s not `flex` layout rendering'),
'nz-list-item-meta.title': localize('nz-list-item-meta.title', 'List'),
'nz-list-item-meta.whenToUse': localize('nz-list-item-meta.whenToUse', 'A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.'),
'nz-list-item-meta.description': localize('nz-list-item-meta.description', 'Simple List.'),
'nz-list-item-meta.nzAvatar.description': localize('nz-list-item-meta.nzAvatar.description', 'The avatar of list item'),
'nz-list-item-meta.nzDescription.description': localize('nz-list-item-meta.nzDescription.description', 'The description of list item'),
'nz-list-item-meta.nzTitle.description': localize('nz-list-item-meta.nzTitle.description', 'The title of list item'),
'nz-mention.title': localize('nz-mention.title', 'Mention'),
'nz-mention.whenToUse': localize('nz-mention.whenToUse', 'When need to mention someone or something.'),
'nz-mention.description': localize('nz-mention.description', 'Mention component.'),
'nz-mention.nzMentionTrigger.description': localize('nz-mention.nzMentionTrigger.description', 'Trigger element **(required)**'),
'nz-mention.nzMentionSuggestion.description': localize('nz-mention.nzMentionSuggestion.description', 'Customize the suggestion template'),
'nz-mention.nzLoading.description': localize('nz-mention.nzLoading.description', 'Loading mode'),
'nz-mention.nzNotFoundContent.description': localize('nz-mention.nzNotFoundContent.description', 'Suggestion when suggestions empty'),
'nz-mention.nzPlacement.description': localize('nz-mention.nzPlacement.description', 'The position of the suggestion relative to the target, which can be one of top and bottom'),
'nz-mention.nzPrefix.description': localize('nz-mention.nzPrefix.description', 'Character which will trigger Mention to show mention list'),
'nz-mention.nzSuggestions.description': localize('nz-mention.nzSuggestions.description', 'Suggestion content'),
'nz-mention.nzStatus.description': localize('nz-mention.nzStatus.description', 'Set validation status'),
'nz-mention.nzValueWith.description': localize('nz-mention.nzValueWith.description', 'Function that maps an suggestion\'s value'),
'nz-mention.nzOnSelect.description': localize('nz-mention.nzOnSelect.description', 'Callback function called when select from suggestions'),
'nz-mention.nzOnSearchChange.description': localize('nz-mention.nzOnSearchChange.description', 'Callback function called when search content changes'),
'nzMentionTrigger.title': localize('nzMentionTrigger.title', 'Mention'),
'nzMentionTrigger.whenToUse': localize('nzMentionTrigger.whenToUse', 'When need to mention someone or something.'),
'nzMentionTrigger.description': localize('nzMentionTrigger.description', 'Trigger element'),
'nzMentionSuggestion.title': localize('nzMentionSuggestion.title', 'Mention'),
'nzMentionSuggestion.whenToUse': localize('nzMentionSuggestion.whenToUse', 'When need to mention someone or something.'),
'nzMentionSuggestion.description': localize('nzMentionSuggestion.description', 'Customize the suggestion template'),
'nz-menu.title': localize('nz-menu.title', 'Menu'),
'nz-menu.whenToUse': localize('nz-menu.whenToUse', 'Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website.'),
'nz-menu.description': localize('nz-menu.description', 'Menu list of Navigation.'),
'nz-menu.nzInlineCollapsed.description': localize('nz-menu.nzInlineCollapsed.description', 'specifies the collapsed status when menu is `inline` mode'),
'nz-menu.nzInlineIndent.description': localize('nz-menu.nzInlineIndent.description', 'indent px of `inline` menu item on each level'),
'nz-menu.nzMode.description': localize('nz-menu.nzMode.description', 'type of the menu; `vertical`、 `horizontal`, and `inline` modes are supported'),
'nz-menu.nzSelectable.description': localize('nz-menu.nzSelectable.description', 'allow selecting menu items'),
'nz-menu.nzTheme.description': localize('nz-menu.nzTheme.description', 'color theme of the menu'),
'nz-menu.nzClick.description': localize('nz-menu.nzClick.description', 'the Output when click `nz-menu-item` inside nz-menu'),
'nz-menu-item.title': localize('nz-menu-item.title', 'Menu'),
'nz-menu-item.whenToUse': localize('nz-menu-item.whenToUse', 'Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website.'),
'nz-menu-item.description': localize('nz-menu-item.description', 'Menu list of Navigation.'),
'nz-menu-item.nzDisabled.description': localize('nz-menu-item.nzDisabled.description', 'whether menu item is disabled or not'),
'nz-menu-item.nzSelected.description': localize('nz-menu-item.nzSelected.description', 'whether menu item is selected or not'),
'nz-menu-item.nzMatchRouter.description': localize('nz-menu-item.nzMatchRouter.description', 'whether auto set `nzSelected` according to [routerLink](https://www.angular.cn/api/router/RouterLink)'),
'nz-menu-item.nzMatchRouterExact.description': localize('nz-menu-item.nzMatchRouterExact.description', 'only match when the url matches the link exactly, same as [routerLinkActiveOptions](https://angular.io/api/router/RouterLinkActive#routerLinkActiveOptions)'),
'nz-menu-item.nzDanger.description': localize('nz-menu-item.nzDanger.description', 'display the danger style'),
'nz-submenu.title': localize('nz-submenu.title', 'Menu'),
'nz-submenu.whenToUse': localize('nz-submenu.whenToUse', 'Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website.'),
'nz-submenu.description': localize('nz-submenu.description', 'You can set the title of `[nz-submenu]` in the following ways.'),
'nz-submenu.nzPlacement.description': localize('nz-submenu.nzPlacement.description', 'placement of pop menu'),
'nz-submenu.nzOpen.description': localize('nz-submenu.nzOpen.description', 'whether sub menu is open or not, double binding'),
'nz-submenu.nzDisabled.description': localize('nz-submenu.nzDisabled.description', 'whether sub menu is disabled or not'),
'nz-submenu.nzTitle.description': localize('nz-submenu.nzTitle.description', 'set submenu title'),
'nz-submenu.nzIcon.description': localize('nz-submenu.nzIcon.description', '`icon` type in title'),
'nz-submenu.nzMenuClassName.description': localize('nz-submenu.nzMenuClassName.description', 'Custom the submenu container\'s class name'),
'nz-submenu.nzOpenChange.description': localize('nz-submenu.nzOpenChange.description', 'nzOpen callback'),
'nz-menu-group.title': localize('nz-menu-group.title', 'Menu'),
'nz-menu-group.whenToUse': localize('nz-menu-group.whenToUse', 'Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website.'),
'nz-menu-group.description': localize('nz-menu-group.description', 'You can set the title of `[nz-menu-group]` in the following ways.'),
'nz-menu-group.nzTitle.description': localize('nz-menu-group.nzTitle.description', 'set menu group title'),
'nz-menu-divider.title': localize('nz-menu-divider.title', 'Menu'),
'nz-menu-divider.whenToUse': localize('nz-menu-divider.whenToUse', 'Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website.'),
'nz-menu-divider.description': localize('nz-menu-divider.description', 'Divider line in between menu items, only used in vertical popup Menu or Dropdown Menu.'),
'nz-modal.title': localize('nz-modal.title', 'Modal'),
'nz-modal.whenToUse': localize('nz-modal.whenToUse', 'When requiring users to interact with application, but without jumping to a new page to interrupt\nthe user\'s workflow, you can use `Modal` to create a new floating layer over the current page for user\ngetting feedback or information purposes.\nAdditionally, if you need show a simple confirmation dialog, you can use `NzModalService.confirm()`,\nand so on.'),
'nz-modal.description': localize('nz-modal.description', 'The dialog is currently divided into 2 modes, `normal mode` and `confirm box mode` (ie the `Confirm` dialog, which is called by calling `confirm/info/success/error/warning`). The degree of API support for the two modes is slightly different.'),
'nz-modal.nzAfterOpen.description': localize('nz-modal.nzAfterOpen.description', 'Specify a EventEmitter that will be emitted when modal opened'),
'nz-modal.nzAfterClose.description': localize('nz-modal.nzAfterClose.description', 'Specify a EventEmitter that will be emitted when modal is closed completely (Can listen for parameters passed in the close/destroy method)'),
'nz-modal.nzBodyStyle.description': localize('nz-modal.nzBodyStyle.description', 'Body style for modal body element. Such as height, padding etc.'),
'nz-modal.nzCancelText.description': localize('nz-modal.nzCancelText.description', 'Text of the Cancel button. <i>Set to null to show no cancel button (this value is invalid if the nzFooter parameter is used in normal mode)</i>'),
'nz-modal.nzCentered.description': localize('nz-modal.nzCentered.description', 'Centered Modal'),
'nz-modal.nzClosable.description': localize('nz-modal.nzClosable.description', 'Whether a close (x) button is visible on top right of the modal dialog or not. <i>Invalid value in confirm box mode (default will be hidden)</i>'),
'nz-modal.nzOkLoading.description': localize('nz-modal.nzOkLoading.description', 'Whether to apply loading visual effect for OK button or not'),
'nz-modal.nzCancelLoading.description': localize('nz-modal.nzCancelLoading.description', 'Whether to apply loading visual effect for Cancel button or not'),
'nz-modal.nzOkDisabled.description': localize('nz-modal.nzOkDisabled.description', 'Whether to disable Ok button or not'),
'nz-modal.nzCancelDisabled.description': localize('nz-modal.nzCancelDisabled.description', 'Whether to disable Cancel button or not'),
'nz-modal.nzFooter.description': localize('nz-modal.nzFooter.description', 'Footer content, set as footer=null when you don\'t need default buttons. <i>1. Only valid in normal mode.<br>2. You can customize the buttons to the maximum extent by passing a `ModalButtonOptions` configuration (see the case or the instructions below).</i>'),
'nz-modal.nzKeyboard.description': localize('nz-modal.nzKeyboard.description', 'Whether support press esc to close'),
'nz-modal.nzMask.description': localize('nz-modal.nzMask.description', 'Whether show mask or not.'),
'nz-modal.nzMaskClosable.description': localize('nz-modal.nzMaskClosable.description', 'Whether to close the modal dialog when the mask (area outside the modal) is clicked'),
'nz-modal.nzCloseOnNavigation.description': localize('nz-modal.nzCloseOnNavigation.description', 'Whether to close the modal when the user goes backwards/forwards in history. Note that this usually doesn\'t include clicking on links (unless the user is using the HashLocationStrategy).'),
'nz-modal.nzDirection.description': localize('nz-modal.nzDirection.description', 'Direction of the text in the modal'),
'nz-modal.nzMaskStyle.description': localize('nz-modal.nzMaskStyle.description', 'Style for modal\'s mask element.'),
'nz-modal.nzOkText.description': localize('nz-modal.nzOkText.description', 'Text of the OK button. <i>Set to null to show no ok button (this value is invalid if the nzFooter parameter is used in normal mode)</i>'),
'nz-modal.nzOkType.description': localize('nz-modal.nzOkType.description', 'Button type of the OK button. <i>Consistent with the `nzType` of the `nz-button`.</i>'),
'nz-modal.nzOkDanger.description': localize('nz-modal.nzOkDanger.description', 'Danger status of the OK button. <i>Consistent with the `nzDanger` of the `nz-button`.</i>'),
'nz-modal.nzStyle.description': localize('nz-modal.nzStyle.description', 'Style of floating layer, typically used at least for adjusting the position.'),
'nz-modal.nzCloseIcon.description': localize('nz-modal.nzCloseIcon.description', 'Custom close icon'),
'nz-modal.nzTitle.description': localize('nz-modal.nzTitle.description', 'The modal dialog\'s title. <i>Leave blank to show no title. The usage of TemplateRef can refer to the case</i>'),
'nz-modal.nzVisible.description': localize('nz-modal.nzVisible.description', 'Whether the modal dialog is visible or not. <i>When using the `<nz-modal>` tag, be sure to use two-way binding, for example: `[(nzVisible)]="visible"`.</i>'),
'nz-modal.nzWidth.description': localize('nz-modal.nzWidth.description', 'Width of the modal dialog. <i>When using numbers, the default unit is `px`</i>'),
'nz-modal.nzClassName.description': localize('nz-modal.nzClassName.description', 'The class name of the modal dialog'),
'nz-modal.nzWrapClassName.description': localize('nz-modal.nzWrapClassName.description', 'The class name of the container of the modal dialog'),
'nz-modal.nzZIndex.description': localize('nz-modal.nzZIndex.description', 'The z-index of the Modal'),
'nz-modal.nzOnCancel.description': localize('nz-modal.nzOnCancel.description', 'Specify a function that will be called when a user clicks mask, close button on top right or Cancel button (If nzContent is Component, the Component instance will be put in as an argument). <i>Note: When created with `NzModalService.create`, this parameter should be passed into the type of function (callback function). This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return `false` to prevent closing)</i>'),
'nz-modal.nzOnOk.description': localize('nz-modal.nzOnOk.description', 'Specify a EventEmitter that will be emitted when a user clicks the OK button (If nzContent is Component, the Component instance will be put in as an argument). <i>Note: When created with `NzModalService.create`, this parameter should be passed into the type of function (callback function). This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return `false` to prevent closing)</i>'),
'nz-modal.nzContent.description': localize('nz-modal.nzContent.description', 'Content'),
'nz-modal.nzComponentParams.description': localize('nz-modal.nzComponentParams.description', 'Will be instance property when `nzContent` is a component，will be template variable when `nzContent` is `TemplateRef`'),
'nz-modal.nzIconType.description': localize('nz-modal.nzIconType.description', 'Icon type of the Icon component. <i>Only valid in confirm box mode</i>'),
'nz-modal.nzAutofocus.description': localize('nz-modal.nzAutofocus.description', 'autofocus and the position，disabled when is `null`'),
'nzModalTitle.title': localize('nzModalTitle.title', 'Modal'),
'nzModalTitle.whenToUse': localize('nzModalTitle.whenToUse', 'When requiring users to interact with application, but without jumping to a new page to interrupt\nthe user\'s workflow, you can use `Modal` to create a new floating layer over the current page for user\ngetting feedback or information purposes.\nAdditionally, if you need show a simple confirmation dialog, you can use `NzModalService.confirm()`,\nand so on.'),
'nzModalTitle.description': localize('nzModalTitle.description', 'Customize the title.'),
'nzModalFooter.title': localize('nzModalFooter.title', 'Modal'),
'nzModalFooter.whenToUse': localize('nzModalFooter.whenToUse', 'When requiring users to interact with application, but without jumping to a new page to interrupt\nthe user\'s workflow, you can use `Modal` to create a new floating layer over the current page for user\ngetting feedback or information purposes.\nAdditionally, if you need show a simple confirmation dialog, you can use `NzModalService.confirm()`,\nand so on.'),
'nzModalFooter.description': localize('nzModalFooter.description', 'Customize the footer.'),
'nz-page-header.title': localize('nz-page-header.title', 'PageHeader'),
'nz-page-header.whenToUse': localize('nz-page-header.whenToUse', 'PageHeader can be used to highlight the page topic, display important information about the page, and carry the action items related to the current page (including page-level operations, inter-page navigation, etc.) It can also be used as inter-page navigation.'),
'nz-page-header.description': localize('nz-page-header.description', 'A header with common actions and design elements built in.'),
'nz-page-header.nzGhost.description': localize('nz-page-header.nzGhost.description', 'Make background transparent'),
'nz-page-header.nzTitle.description': localize('nz-page-header.nzTitle.description', 'Title string'),
'nz-page-header.nzSubtitle.description': localize('nz-page-header.nzSubtitle.description', 'SubTitle string'),
'nz-page-header.nzBackIcon.description': localize('nz-page-header.nzBackIcon.description', 'Custom back icon'),
'nz-page-header.nzBack.description': localize('nz-page-header.nzBack.description', 'Back icon click event'),
'nz-pagination.title': localize('nz-pagination.title', 'Pagination'),
'nz-pagination.whenToUse': localize('nz-pagination.whenToUse', '- When it will take a long time to load/render all items.\n- If you want to browse the data by navigating through pages.'),
'nz-pagination.description': localize('nz-pagination.description', 'A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time.'),
'nz-pagination.nzTotal.description': localize('nz-pagination.nzTotal.description', 'total number of data items'),
'nz-pagination.nzPageIndex.description': localize('nz-pagination.nzPageIndex.description', 'current page number，double binding'),
'nz-pagination.nzPageSize.description': localize('nz-pagination.nzPageSize.description', 'number of data items per page, double binding'),
'nz-pagination.nzDisabled.description': localize('nz-pagination.nzDisabled.description', 'disable pagination'),
'nz-pagination.nzShowQuickJumper.description': localize('nz-pagination.nzShowQuickJumper.description', 'determine whether you can jump to pages directly'),
'nz-pagination.nzShowSizeChanger.description': localize('nz-pagination.nzShowSizeChanger.description', 'determine whether `nzPageSize` can be changed'),
'nz-pagination.nzSimple.description': localize('nz-pagination.nzSimple.description', 'whether to use simple mode'),
'nz-pagination.nzSize.description': localize('nz-pagination.nzSize.description', 'specify the size of `nz-pagination`, can be set to `small`'),
'nz-pagination.nzResponsive.description': localize('nz-pagination.nzResponsive.description', '`Pagination` would resize according to the width of the window'),
'nz-pagination.nzPageSizeOptions.description': localize('nz-pagination.nzPageSizeOptions.description', 'specify the sizeChanger options'),
'nz-pagination.nzItemRender.description': localize('nz-pagination.nzItemRender.description', 'to customize item'),
'nz-pagination.nzShowTotal.description': localize('nz-pagination.nzShowTotal.description', 'to display the total number and range'),
'nz-pagination.nzHideOnSinglePage.description': localize('nz-pagination.nzHideOnSinglePage.description', 'Whether to hide pager on single page'),
'nz-pagination.nzPageIndexChange.description': localize('nz-pagination.nzPageIndexChange.description', 'current page number change callback'),
'nz-pagination.nzPageSizeChange.description': localize('nz-pagination.nzPageSizeChange.description', 'number of data items per page change callback'),
'nzSafeNull.title': localize('nzSafeNull.title', 'Pipes'),
'nzSafeNull.whenToUse': localize('nzSafeNull.whenToUse', '- After introducing Pipe, use it like angular\'s default Pipe'),
'nzSafeNull.description': localize('nzSafeNull.description', '\nNG-ZORRO experiments are features that are released but not yet considered stable or production ready\nDevelopers and users can opt-in into these features before they are fully released. But breaking changes may occur with any release.\n'),
'nzSafeNull.replace.description': localize('nzSafeNull.replace.description', 'Replace character'),
'nzBytes.title': localize('nzBytes.title', 'Pipes'),
'nzBytes.whenToUse': localize('nzBytes.whenToUse', '- After introducing Pipe, use it like angular\'s default Pipe'),
'nzBytes.description': localize('nzBytes.description', '\nNG-ZORRO experiments are features that are released but not yet considered stable or production ready\nDevelopers and users can opt-in into these features before they are fully released. But breaking changes may occur with any release.\n'),
'nzBytes.decimal.description': localize('nzBytes.decimal.description', 'Decimal'),
'nzBytes.from.description': localize('nzBytes.from.description', 'Unit of current value'),
'nzBytes.to.description': localize('nzBytes.to.description', 'Units converted to target value'),
'nzToCssUnit.title': localize('nzToCssUnit.title', 'Pipes'),
'nzToCssUnit.whenToUse': localize('nzToCssUnit.whenToUse', '- After introducing Pipe, use it like angular\'s default Pipe'),
'nzToCssUnit.description': localize('nzToCssUnit.description', '\nNG-ZORRO experiments are features that are released but not yet considered stable or production ready\nDevelopers and users can opt-in into these features before they are fully released. But breaking changes may occur with any release.\n'),
'nzToCssUnit.defaultUnit.description': localize('nzToCssUnit.defaultUnit.description', 'Default Unit'),
'nzEllipsis.title': localize('nzEllipsis.title', 'Pipes'),
'nzEllipsis.whenToUse': localize('nzEllipsis.whenToUse', '- After introducing Pipe, use it like angular\'s default Pipe'),
'nzEllipsis.description': localize('nzEllipsis.description', '\nNG-ZORRO experiments are features that are released but not yet considered stable or production ready\nDevelopers and users can opt-in into these features before they are fully released. But breaking changes may occur with any release.\n'),
'nzEllipsis.length.description': localize('nzEllipsis.length.description', 'Truncate length'),
'nzEllipsis.suffix.description': localize('nzEllipsis.suffix.description', 'Replace character'),
'nzAggregate.title': localize('nzAggregate.title', 'Pipes'),
'nzAggregate.whenToUse': localize('nzAggregate.whenToUse', '- After introducing Pipe, use it like angular\'s default Pipe'),
'nzAggregate.description': localize('nzAggregate.description', '\nNG-ZORRO experiments are features that are released but not yet considered stable or production ready\nDevelopers and users can opt-in into these features before they are fully released. But breaking changes may occur with any release.\n'),
'nzAggregate.method.description': localize('nzAggregate.method.description', 'Aggregation'),
'nzSanitizer.title': localize('nzSanitizer.title', 'Pipes'),
'nzSanitizer.whenToUse': localize('nzSanitizer.whenToUse', '- After introducing Pipe, use it like angular\'s default Pipe'),
'nzSanitizer.description': localize('nzSanitizer.description', '\nNG-ZORRO experiments are features that are released but not yet considered stable or production ready\nDevelopers and users can opt-in into these features before they are fully released. But breaking changes may occur with any release.\n'),
'nzSanitizer.type.description': localize('nzSanitizer.type.description', 'sanitizer type'),
'nz-popconfirm.title': localize('nz-popconfirm.title', 'Popconfirm'),
'nz-popconfirm.whenToUse': localize('nz-popconfirm.whenToUse', 'A simple and compact dialog used for asking for user confirmation.'),
'nz-popconfirm.description': localize('nz-popconfirm.description', 'A simple and compact confirmation dialog of an action.'),
'nz-popconfirm.nzTooltipArrowPointAtCenter.description': localize('nz-popconfirm.nzTooltipArrowPointAtCenter.description', 'Arrow point at center of the origin'),
'nz-popconfirm.nzTooltipTitle.description': localize('nz-popconfirm.nzTooltipTitle.description', 'The text shown in the tooltip'),
'nz-popconfirm.nzTooltipTitleContext.description': localize('nz-popconfirm.nzTooltipTitleContext.description', 'The context of tooltip title'),
'nz-popconfirm.nzTooltipTrigger.description': localize('nz-popconfirm.nzTooltipTrigger.description', 'Tooltip trigger mode. If set to `null` it would not be triggered'),
'nz-popconfirm.nzTooltipPlacement.description': localize('nz-popconfirm.nzTooltipPlacement.description', 'The position of the tooltip relative to the target'),
'nz-popconfirm.nzTooltipColor.description': localize('nz-popconfirm.nzTooltipColor.description', 'The background color'),
'nz-popconfirm.nzTooltipOrigin.description': localize('nz-popconfirm.nzTooltipOrigin.description', 'Origin of the tooltip'),
'nz-popconfirm.nzTooltipVisible.description': localize('nz-popconfirm.nzTooltipVisible.description', 'Show or hide tooltip'),
'nz-popconfirm.nzTooltipVisibleChange.description': localize('nz-popconfirm.nzTooltipVisibleChange.description', 'Callback of hide or show'),
'nz-popconfirm.nzTooltipMouseEnterDelay.description': localize('nz-popconfirm.nzTooltipMouseEnterDelay.description', 'Delay in seconds, before tooltip is shown on mouse enter'),
'nz-popconfirm.nzTooltipMouseLeaveDelay.description': localize('nz-popconfirm.nzTooltipMouseLeaveDelay.description', 'Delay in seconds, before tooltip is hidden on mouse leave'),
'nz-popconfirm.nzTooltipOverlayClassName.description': localize('nz-popconfirm.nzTooltipOverlayClassName.description', 'Class name of the tooltip card'),
'nz-popconfirm.nzTooltipOverlayStyle.description': localize('nz-popconfirm.nzTooltipOverlayStyle.description', 'Style of the tooltip card'),
'nz-popconfirm.nzPopconfirmArrowPointAtCenter.description': localize('nz-popconfirm.nzPopconfirmArrowPointAtCenter.description', 'Arrow point at center of the origin'),
'nz-popconfirm.nzPopconfirmTitle.description': localize('nz-popconfirm.nzPopconfirmTitle.description', 'Title of the confirmation box'),
'nz-popconfirm.nzPopconfirmTrigger.description': localize('nz-popconfirm.nzPopconfirmTrigger.description', 'Popconfirm trigger mode. If set to `null` it would not be triggered'),
'nz-popconfirm.nzPopconfirmPlacement.description': localize('nz-popconfirm.nzPopconfirmPlacement.description', 'The position of the popconfirm relative to the target'),
'nz-popconfirm.nzPopconfirmOrigin.description': localize('nz-popconfirm.nzPopconfirmOrigin.description', 'Origin of the popconfirm'),
'nz-popconfirm.nzPopconfirmVisible.description': localize('nz-popconfirm.nzPopconfirmVisible.description', 'Show or hide popconfirm'),
'nz-popconfirm.nzPopconfirmShowArrow.description': localize('nz-popconfirm.nzPopconfirmShowArrow.description', 'Whether popconfirm has arrow'),
'nz-popconfirm.nzPopconfirmVisibleChange.description': localize('nz-popconfirm.nzPopconfirmVisibleChange.description', 'Callback of hide or show'),
'nz-popconfirm.nzPopconfirmMouseEnterDelay.description': localize('nz-popconfirm.nzPopconfirmMouseEnterDelay.description', 'Delay in seconds, before popconfirm is shown on mouse enter'),
'nz-popconfirm.nzPopconfirmMouseLeaveDelay.description': localize('nz-popconfirm.nzPopconfirmMouseLeaveDelay.description', 'Delay in seconds, before popconfirm is hidden on mouse leave'),
'nz-popconfirm.nzPopconfirmOverlayClassName.description': localize('nz-popconfirm.nzPopconfirmOverlayClassName.description', 'Class name of the popconfirm card'),
'nz-popconfirm.nzPopconfirmOverlayStyle.description': localize('nz-popconfirm.nzPopconfirmOverlayStyle.description', 'Style of the popconfirm card'),
'nz-popconfirm.nzPopconfirmBackdrop.description': localize('nz-popconfirm.nzPopconfirmBackdrop.description', 'whether or not the overlay should attach a backdrop'),
'nz-popconfirm.nzCancelText.description': localize('nz-popconfirm.nzCancelText.description', 'Text of the Cancel button'),
'nz-popconfirm.nzOkText.description': localize('nz-popconfirm.nzOkText.description', 'Text of the Confirm button'),
'nz-popconfirm.nzOkType.description': localize('nz-popconfirm.nzOkType.description', 'Button `type` of the Confirm button'),
'nz-popconfirm.nzOkDanger.description': localize('nz-popconfirm.nzOkDanger.description', 'Danger status of the OK button. <i>Consistent with the `nzDanger` of the `nz-button`.</i>'),
'nz-popconfirm.nzCondition.description': localize('nz-popconfirm.nzCondition.description', 'Whether to directly emit `onConfirm` without showing Popconfirm'),
'nz-popconfirm.nzIcon.description': localize('nz-popconfirm.nzIcon.description', 'Customize icon of confirmation'),
'nz-popconfirm.nzAutoFocus.description': localize('nz-popconfirm.nzAutoFocus.description', 'Autofocus a button'),
'nz-popconfirm.nzBeforeConfirm.description': localize('nz-popconfirm.nzBeforeConfirm.description', 'The hook before the confirmation operation, decides whether to continue responding to the `nzOnConfirm` callback, supports asynchronous verification.'),
'nz-popconfirm.nzOnCancel.description': localize('nz-popconfirm.nzOnCancel.description', 'Callback of cancel'),
'nz-popconfirm.nzOnConfirm.description': localize('nz-popconfirm.nzOnConfirm.description', 'Callback of confirmation'),
'nz-popover.title': localize('nz-popover.title', 'Popover'),
'nz-popover.whenToUse': localize('nz-popover.whenToUse', 'A simple popup menu to provide extra information or operations.'),
'nz-popover.description': localize('nz-popover.description', 'The floating card popped by clicking or hovering.'),
'nz-popover.nzTooltipArrowPointAtCenter.description': localize('nz-popover.nzTooltipArrowPointAtCenter.description', 'Arrow point at center of the origin'),
'nz-popover.nzTooltipTitle.description': localize('nz-popover.nzTooltipTitle.description', 'The text shown in the tooltip'),
'nz-popover.nzTooltipTitleContext.description': localize('nz-popover.nzTooltipTitleContext.description', 'The context of tooltip title'),
'nz-popover.nzTooltipTrigger.description': localize('nz-popover.nzTooltipTrigger.description', 'Tooltip trigger mode. If set to `null` it would not be triggered'),
'nz-popover.nzTooltipPlacement.description': localize('nz-popover.nzTooltipPlacement.description', 'The position of the tooltip relative to the target'),
'nz-popover.nzTooltipColor.description': localize('nz-popover.nzTooltipColor.description', 'The background color'),
'nz-popover.nzTooltipOrigin.description': localize('nz-popover.nzTooltipOrigin.description', 'Origin of the tooltip'),
'nz-popover.nzTooltipVisible.description': localize('nz-popover.nzTooltipVisible.description', 'Show or hide tooltip'),
'nz-popover.nzTooltipVisibleChange.description': localize('nz-popover.nzTooltipVisibleChange.description', 'Callback of hide or show'),
'nz-popover.nzTooltipMouseEnterDelay.description': localize('nz-popover.nzTooltipMouseEnterDelay.description', 'Delay in seconds, before tooltip is shown on mouse enter'),
'nz-popover.nzTooltipMouseLeaveDelay.description': localize('nz-popover.nzTooltipMouseLeaveDelay.description', 'Delay in seconds, before tooltip is hidden on mouse leave'),
'nz-popover.nzTooltipOverlayClassName.description': localize('nz-popover.nzTooltipOverlayClassName.description', 'Class name of the tooltip card'),
'nz-popover.nzTooltipOverlayStyle.description': localize('nz-popover.nzTooltipOverlayStyle.description', 'Style of the tooltip card'),
'nz-popover.nzPopoverArrowPointAtCenter.description': localize('nz-popover.nzPopoverArrowPointAtCenter.description', 'Arrow point at center of the origin'),
'nz-popover.nzPopoverTitle.description': localize('nz-popover.nzPopoverTitle.description', 'Title of the popover'),
'nz-popover.nzPopoverContent.description': localize('nz-popover.nzPopoverContent.description', 'Content of the popover'),
'nz-popover.nzPopoverTrigger.description': localize('nz-popover.nzPopoverTrigger.description', 'Popover trigger mode. If set to `null` it would not be triggered'),
'nz-popover.nzPopoverPlacement.description': localize('nz-popover.nzPopoverPlacement.description', 'The position of the popover relative to the target'),
'nz-popover.nzPopoverOrigin.description': localize('nz-popover.nzPopoverOrigin.description', 'Origin of the tooltip'),
'nz-popover.nzPopoverVisible.description': localize('nz-popover.nzPopoverVisible.description', 'Show or hide popover'),
'nz-popover.nzPopoverVisibleChange.description': localize('nz-popover.nzPopoverVisibleChange.description', 'Callback of hide or show'),
'nz-popover.nzPopoverMouseEnterDelay.description': localize('nz-popover.nzPopoverMouseEnterDelay.description', 'Delay in seconds, before popover is shown on mouse enter'),
'nz-popover.nzPopoverMouseLeaveDelay.description': localize('nz-popover.nzPopoverMouseLeaveDelay.description', 'Delay in seconds, before popover is hidden on mouse leave'),
'nz-popover.nzPopoverOverlayClassName.description': localize('nz-popover.nzPopoverOverlayClassName.description', 'Class name of the popover card'),
'nz-popover.nzPopoverOverlayStyle.description': localize('nz-popover.nzPopoverOverlayStyle.description', 'Style of the popover card'),
'nz-popover.nzPopoverBackdrop.description': localize('nz-popover.nzPopoverBackdrop.description', 'whether or not the overlay should attach a backdrop'),
'nz-progress.title': localize('nz-progress.title', 'Progress'),
'nz-progress.whenToUse': localize('nz-progress.whenToUse', 'If it will take a long time to complete an operation, you can use `Progress` to show the current progress and status.'),
'nz-progress.description': localize('nz-progress.description', 'Display the current progress of an operation flow.'),
'nz-progress.nzType.description': localize('nz-progress.nzType.description', 'to set the type'),
'nz-progress.nzFormat.description': localize('nz-progress.nzFormat.description', 'template function of the content'),
'nz-progress.nzPercent.description': localize('nz-progress.nzPercent.description', 'to set the completion percentage'),
'nz-progress.nzShowInfo.description': localize('nz-progress.nzShowInfo.description', 'whether to display the progress value and the status icon'),
'nz-progress.nzStatus.description': localize('nz-progress.nzStatus.description', 'to set the status of the Progress'),
'nz-progress.nzStrokeLinecap.description': localize('nz-progress.nzStrokeLinecap.description', 'to set the style of the progress linecap'),
'nz-progress.nzStrokeColor.description': localize('nz-progress.nzStrokeColor.description', 'color of progress bar, render linear-gradient when passing an object'),
'nz-progress.nzSuccessPercent.description': localize('nz-progress.nzSuccessPercent.description', 'segmented success percent'),
'nz-progress.nzStrokeWidth.description': localize('nz-progress.nzStrokeWidth.description', 'to set the width of the dashboard progress bar, unit: percentage of the canvas width'),
'nz-progress.nzSteps.description': localize('nz-progress.nzSteps.description', 'the total step count'),
'nz-progress.nzWidth.description': localize('nz-progress.nzWidth.description', 'to set the canvas width of the dashboard progress bar, unit: `px`'),
'nz-progress.nzGapDegree.description': localize('nz-progress.nzGapDegree.description', 'the gap degree of half circle, 0 ~ 360'),
'nz-progress.nzGapPosition.description': localize('nz-progress.nzGapPosition.description', 'the gap position'),
'nz-radio.title': localize('nz-radio.title', 'Radio'),
'nz-radio.whenToUse': localize('nz-radio.whenToUse', '- Used to select a single state in multiple options.\n- The difference between Select is that Radio is visible to user and can facilitate the comparison of choice. So, when you want to use Radio, option should not be too much.'),
'nz-radio.description': localize('nz-radio.description', 'Radio.'),
'nz-radio.nzAutoFocus.description': localize('nz-radio.nzAutoFocus.description', 'get focus when component mounted'),
'nz-radio.nzDisabled.description': localize('nz-radio.nzDisabled.description', 'Disable radio'),
'nz-radio.ngModel.description': localize('nz-radio.ngModel.description', 'Specifies whether the radio is selected, double binding'),
'nz-radio.nzValue.description': localize('nz-radio.nzValue.description', 'use with `nz-radio-group`'),
'nz-radio.ngModelChange.description': localize('nz-radio.ngModelChange.description', 'The callback function that is triggered when the state changes.'),
'nz-radio.formControlName.description': localize('nz-radio.formControlName.description', ' '),
'nz-radio.name.description': localize('nz-radio.name.description', ' '),
'nz-radio-button.title': localize('nz-radio-button.title', 'Radio'),
'nz-radio-button.whenToUse': localize('nz-radio-button.whenToUse', '- Used to select a single state in multiple options.\n- The difference between Select is that Radio is visible to user and can facilitate the comparison of choice. So, when you want to use Radio, option should not be too much.'),
'nz-radio-button.description': localize('nz-radio-button.description', 'Radio.'),
'nz-radio-button.nzAutoFocus.description': localize('nz-radio-button.nzAutoFocus.description', 'get focus when component mounted'),
'nz-radio-button.nzDisabled.description': localize('nz-radio-button.nzDisabled.description', 'Disable radio'),
'nz-radio-button.ngModel.description': localize('nz-radio-button.ngModel.description', 'Specifies whether the radio is selected, double binding'),
'nz-radio-button.nzValue.description': localize('nz-radio-button.nzValue.description', 'use with `nz-radio-group`'),
'nz-radio-button.ngModelChange.description': localize('nz-radio-button.ngModelChange.description', 'The callback function that is triggered when the state changes.'),
'nz-radio-group.title': localize('nz-radio-group.title', 'Radio'),
'nz-radio-group.whenToUse': localize('nz-radio-group.whenToUse', '- Used to select a single state in multiple options.\n- The difference between Select is that Radio is visible to user and can facilitate the comparison of choice. So, when you want to use Radio, option should not be too much.'),
'nz-radio-group.description': localize('nz-radio-group.description', 'radio group，wrap a group of `nz-radio`。'),
'nz-radio-group.ngModel.description': localize('nz-radio-group.ngModel.description', 'current selected `nz-radio` value, double binding'),
'nz-radio-group.nzName.description': localize('nz-radio-group.nzName.description', 'The `name` property of all `input[type="radio"]` children'),
'nz-radio-group.nzDisabled.description': localize('nz-radio-group.nzDisabled.description', 'Disable all radio buttons'),
'nz-radio-group.nzSize.description': localize('nz-radio-group.nzSize.description', 'Size, only on radio style'),
'nz-radio-group.ngModelChange.description': localize('nz-radio-group.ngModelChange.description', 'the callback function when current selected `nz-radio` value change'),
'nz-radio-group.nzButtonStyle.description': localize('nz-radio-group.nzButtonStyle.description', 'style type of radio button'),
'nz-rate.title': localize('nz-rate.title', 'Rate'),
'nz-rate.whenToUse': localize('nz-rate.whenToUse', '- Show evaluation.\n- A quick rating operation on something.'),
'nz-rate.description': localize('nz-rate.description', 'Rate component.'),
'nz-rate.nzAllowClear.description': localize('nz-rate.nzAllowClear.description', 'whether to allow clear when click again'),
'nz-rate.nzAllowHalf.description': localize('nz-rate.nzAllowHalf.description', 'whether to allow semi selection'),
'nz-rate.nzAutoFocus.description': localize('nz-rate.nzAutoFocus.description', 'get focus when component mounted'),
'nz-rate.nzCharacter.description': localize('nz-rate.nzCharacter.description', 'custom character of rate'),
'nz-rate.nzCount.description': localize('nz-rate.nzCount.description', 'star count'),
'nz-rate.nzDisabled.description': localize('nz-rate.nzDisabled.description', 'read only, unable to interact'),
'nz-rate.nzTooltips.description': localize('nz-rate.nzTooltips.description', 'Customize tooltip by each character'),
'nz-rate.ngModel.description': localize('nz-rate.ngModel.description', 'current value , double binding'),
'nz-rate.ngModelChange.description': localize('nz-rate.ngModelChange.description', 'callback when select value'),
'nz-rate.nzOnBlur.description': localize('nz-rate.nzOnBlur.description', 'callback when component lose focus'),
'nz-rate.nzOnFocus.description': localize('nz-rate.nzOnFocus.description', 'callback when component get focus'),
'nz-rate.nzOnHoverChange.description': localize('nz-rate.nzOnHoverChange.description', 'callback when hover item'),
'nz-rate.nzOnKeyDown.description': localize('nz-rate.nzOnKeyDown.description', 'callback when keydown on component'),
'nz-rate.formControlName.description': localize('nz-rate.formControlName.description', ' '),
'nz-rate.name.description': localize('nz-rate.name.description', ' '),
'nz-resizable.title': localize('nz-resizable.title', 'Resizable'),
'nz-resizable.whenToUse': localize('nz-resizable.whenToUse', 'When you want to resize elements.'),
'nz-resizable.description': localize('nz-resizable.description', 'Resizable element the `position` attribute  must be one of `\'relative\' | \'absolute\' | \'fixed\' |\'sticky\'`，default is `\'relative\'`.'),
'nz-resizable.nzBounds.description': localize('nz-resizable.nzBounds.description', 'Specifies resize boundaries.'),
'nz-resizable.nzMaxHeight.description': localize('nz-resizable.nzMaxHeight.description', 'Maximum height of resizable element'),
'nz-resizable.nzMaxWidth.description': localize('nz-resizable.nzMaxWidth.description', 'Maximum width of resizable element'),
'nz-resizable.nzMinHeight.description': localize('nz-resizable.nzMinHeight.description', 'Minimum height of resizable element'),
'nz-resizable.nzMinWidth.description': localize('nz-resizable.nzMinWidth.description', 'Minimum width of resizable element'),
'nz-resizable.nzGridColumnCount.description': localize('nz-resizable.nzGridColumnCount.description', 'Number of columns(-1 is not grid)'),
'nz-resizable.nzMaxColumn.description': localize('nz-resizable.nzMaxColumn.description', 'Maximum Column'),
'nz-resizable.nzMinColumn.description': localize('nz-resizable.nzMinColumn.description', 'Minimum Column'),
'nz-resizable.nzLockAspectRatio.description': localize('nz-resizable.nzLockAspectRatio.description', 'Lock the aspect ratio based on the initial size'),
'nz-resizable.nzPreview.description': localize('nz-resizable.nzPreview.description', 'Enable preview when resizing'),
'nz-resizable.nzDisabled.description': localize('nz-resizable.nzDisabled.description', 'Disable resize'),
'nz-resizable.nzResize.description': localize('nz-resizable.nzResize.description', 'Calls when Resizing'),
'nz-resizable.nzResizeStart.description': localize('nz-resizable.nzResizeStart.description', 'Calls when resize start'),
'nz-resizable.nzResizeEnd.description': localize('nz-resizable.nzResizeEnd.description', 'Calls when resize end'),
'nz-resize-handle.title': localize('nz-resize-handle.title', 'Resizable'),
'nz-resize-handle.whenToUse': localize('nz-resize-handle.whenToUse', 'When you want to resize elements.'),
'nz-resize-handle.description': localize('nz-resize-handle.description', 'Define handles and directions.'),
'nz-resize-handle.nzDirection.description': localize('nz-resize-handle.nzDirection.description', 'Set the direction of resizable'),
'nz-resize-handles.title': localize('nz-resize-handles.title', 'Resizable'),
'nz-resize-handles.whenToUse': localize('nz-resize-handles.whenToUse', 'When you want to resize elements.'),
'nz-resize-handles.description': localize('nz-resize-handles.description', 'Simpler way to define handles.'),
'nz-resize-handles.nzDirections.description': localize('nz-resize-handles.nzDirections.description', 'Allow directions of resizable'),
'nz-result.title': localize('nz-result.title', 'Result'),
'nz-result.whenToUse': localize('nz-result.whenToUse', 'Use when important operations need to inform the user to process the results and the feedback is more complicated.'),
'nz-result.description': localize('nz-result.description', 'Used to feed back the results of a series of operational tasks.'),
'nz-result.nzTitle.description': localize('nz-result.nzTitle.description', 'title'),
'nz-result.nzSubTitle.description': localize('nz-result.nzSubTitle.description', 'subTitle'),
'nz-result.nzStatus.description': localize('nz-result.nzStatus.description', 'result status, decides icons and colors'),
'nz-result.nzIcon.description': localize('nz-result.nzIcon.description', 'custom icon'),
'nz-result.nzExtra.description': localize('nz-result.nzExtra.description', 'operating area'),
'nz-select.title': localize('nz-select.title', 'Select'),
'nz-select.whenToUse': localize('nz-select.whenToUse', '- A dropdown menu for displaying choices - an elegant alternative to the native `<select>` element.\n- Utilizing [Radio](/components/radio/en) is recommended when there are fewer total options (less than 5).'),
'nz-select.description': localize('nz-select.description', 'Select component to select value from options.'),
'nz-select.nzId.description': localize('nz-select.nzId.description', 'input id attribute inside the component'),
'nz-select.ngModel.description': localize('nz-select.ngModel.description', 'Current selected nz-option value, double binding.'),
'nz-select.compareWith.description': localize('nz-select.compareWith.description', 'Same as [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection)'),
'nz-select.nzAutoClearSearchValue.description': localize('nz-select.nzAutoClearSearchValue.description', 'Whether the current search will be cleared on selecting an item. Only applies when `mode` is set to `multiple` or `tags`.'),
'nz-select.nzAllowClear.description': localize('nz-select.nzAllowClear.description', 'Show clear button.'),
'nz-select.nzBackdrop.description': localize('nz-select.nzBackdrop.description', 'whether or not the overlay should attach a backdrop'),
'nz-select.nzBorderless.description': localize('nz-select.nzBorderless.description', 'whether has borderless style'),
'nz-select.nzOpen.description': localize('nz-select.nzOpen.description', 'dropdown expand state, double binding'),
'nz-select.nzAutoFocus.description': localize('nz-select.nzAutoFocus.description', 'Get focus by default'),
'nz-select.nzDisabled.description': localize('nz-select.nzDisabled.description', 'Whether disabled select'),
'nz-select.nzDropdownClassName.description': localize('nz-select.nzDropdownClassName.description', 'className of dropdown menu'),
'nz-select.nzDropdownMatchSelectWidth.description': localize('nz-select.nzDropdownMatchSelectWidth.description', 'Whether dropdown\'s width is same width than select.'),
'nz-select.nzDropdownStyle.description': localize('nz-select.nzDropdownStyle.description', 'style of dropdown menu'),
'nz-select.nzCustomTemplate.description': localize('nz-select.nzCustomTemplate.description', 'The custom template of select'),
'nz-select.nzServerSearch.description': localize('nz-select.nzServerSearch.description', 'nz-option will not be filtered when set to true'),
'nz-select.nzFilterOption.description': localize('nz-select.nzFilterOption.description', 'Filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns `true`, the option will be included in the filtered set; Otherwise, it will be excluded.'),
'nz-select.nzMaxMultipleCount.description': localize('nz-select.nzMaxMultipleCount.description', 'Max selected option can be selected'),
'nz-select.nzMode.description': localize('nz-select.nzMode.description', 'Set mode of Select'),
'nz-select.nzNotFoundContent.description': localize('nz-select.nzNotFoundContent.description', 'Specify content to show when no result matches..'),
'nz-select.nzPlaceHolder.description': localize('nz-select.nzPlaceHolder.description', 'Placeholder of select'),
'nz-select.nzShowArrow.description': localize('nz-select.nzShowArrow.description', 'Whether to show the drop-down arrow'),
'nz-select.nzShowSearch.description': localize('nz-select.nzShowSearch.description', 'Whether show search input in single mode.'),
'nz-select.nzSize.description': localize('nz-select.nzSize.description', 'Size of Select input'),
'nz-select.nzStatus.description': localize('nz-select.nzStatus.description', 'Set validation status'),
'nz-select.nzSuffixIcon.description': localize('nz-select.nzSuffixIcon.description', 'The custom suffix icon'),
'nz-select.nzRemoveIcon.description': localize('nz-select.nzRemoveIcon.description', 'The custom remove icon'),
'nz-select.nzClearIcon.description': localize('nz-select.nzClearIcon.description', 'The custom clear icon'),
'nz-select.nzMenuItemSelectedIcon.description': localize('nz-select.nzMenuItemSelectedIcon.description', 'The custom menuItemSelected icon'),
'nz-select.nzTokenSeparators.description': localize('nz-select.nzTokenSeparators.description', 'Separator used to tokenize on tag/multiple mode'),
'nz-select.nzLoading.description': localize('nz-select.nzLoading.description', 'indicate loading state'),
'nz-select.nzMaxTagCount.description': localize('nz-select.nzMaxTagCount.description', 'Max tag count to show'),
'nz-select.nzOptions.description': localize('nz-select.nzOptions.description', 'use nzOptions or `nz-option` to pass options to the select'),
'nz-select.nzMaxTagPlaceholder.description': localize('nz-select.nzMaxTagPlaceholder.description', 'Placeholder for not showing tags'),
'nz-select.nzOptionHeightPx.description': localize('nz-select.nzOptionHeightPx.description', 'Each option height inside the dropdown'),
'nz-select.nzOptionOverflowSize.description': localize('nz-select.nzOptionOverflowSize.description', 'Max option size inside the dropdown, overflow when exceed the size'),
'nz-select.nzSelectOnTab.description': localize('nz-select.nzSelectOnTab.description', 'Allows to select an item with TAB key'),
'nz-select.ngModelChange.description': localize('nz-select.ngModelChange.description', 'Current selected nz-option value change callback.'),
'nz-select.nzOpenChange.description': localize('nz-select.nzOpenChange.description', 'dropdown expand change callback'),
'nz-select.nzScrollToBottom.description': localize('nz-select.nzScrollToBottom.description', 'Called when dropdown scrolls to bottom'),
'nz-select.nzOnSearch.description': localize('nz-select.nzOnSearch.description', 'Callback function that is fired when input changed.'),
'nz-select.nzFocus.description': localize('nz-select.nzFocus.description', 'focus callback'),
'nz-select.nzBlur.description': localize('nz-select.nzBlur.description', 'blur callback'),
'nz-select.formControlName.description': localize('nz-select.formControlName.description', ' '),
'nz-select.name.description': localize('nz-select.name.description', ' '),
'nz-option.title': localize('nz-option.title', 'Select'),
'nz-option.whenToUse': localize('nz-option.whenToUse', '- A dropdown menu for displaying choices - an elegant alternative to the native `<select>` element.\n- Utilizing [Radio](/components/radio/en) is recommended when there are fewer total options (less than 5).'),
'nz-option.description': localize('nz-option.description', 'Select component to select value from options.'),
'nz-option.nzDisabled.description': localize('nz-option.nzDisabled.description', 'Disable this option'),
'nz-option.nzLabel.description': localize('nz-option.nzLabel.description', 'The text show in nz-select and dropdown menu'),
'nz-option.nzValue.description': localize('nz-option.nzValue.description', 'The value passed to ngModel of nz-select'),
'nz-option.nzHide.description': localize('nz-option.nzHide.description', 'Whether hide the option in the option list'),
'nz-option.nzCustomContent.description': localize('nz-option.nzCustomContent.description', 'Whether custom nz-option content in drodown menu, the ng-content in nz-option will replace nzLabel when it was set to true'),
'nz-option-group.title': localize('nz-option-group.title', 'Select'),
'nz-option-group.whenToUse': localize('nz-option-group.whenToUse', '- A dropdown menu for displaying choices - an elegant alternative to the native `<select>` element.\n- Utilizing [Radio](/components/radio/en) is recommended when there are fewer total options (less than 5).'),
'nz-option-group.description': localize('nz-option-group.description', 'Select component to select value from options.'),
'nz-option-group.nzLabel.description': localize('nz-option-group.nzLabel.description', 'Group label'),
'nz-skeleton.title': localize('nz-skeleton.title', 'Skeleton'),
'nz-skeleton.whenToUse': localize('nz-skeleton.whenToUse', '- When resource needs long time loading, like low network speed.\n- The component contains information, such as a List or Card.\n- Only works when loading data for the first time.\n- Could be replaced by Spin in any situation but can provide a better user experience.'),
'nz-skeleton.description': localize('nz-skeleton.description', 'Provide a placeholder while you wait for content to load or visualize content that doesn\'t exist yet.'),
'nz-skeleton.nzActive.description': localize('nz-skeleton.nzActive.description', 'Show animation effect'),
'nz-skeleton.nzAvatar.description': localize('nz-skeleton.nzAvatar.description', 'Show avatar placeholder'),
'nz-skeleton.nzLoading.description': localize('nz-skeleton.nzLoading.description', 'Display the skeleton when `true`'),
'nz-skeleton.nzParagraph.description': localize('nz-skeleton.nzParagraph.description', 'Show the paragraph placeholder'),
'nz-skeleton.nzTitle.description': localize('nz-skeleton.nzTitle.description', 'Show the title placeholder'),
'nz-skeleton.nzRound.description': localize('nz-skeleton.nzRound.description', 'Show the paragraph and the title radius when `true`'),
'nz-skeleton.size.description': localize('nz-skeleton.size.description', 'Set the avatar size'),
'nz-skeleton.shape.description': localize('nz-skeleton.shape.description', 'Set the avatar shape'),
'nz-skeleton.rows.description': localize('nz-skeleton.rows.description', 'Set the row count of the paragraph'),
'nz-skeleton.width.description': localize('nz-skeleton.width.description', 'Set the title width'),
'nz-slider.title': localize('nz-slider.title', 'Slider'),
'nz-slider.whenToUse': localize('nz-slider.whenToUse', 'To input a value in a range.'),
'nz-slider.description': localize('nz-slider.description', 'A Slider component for displaying current value and intervals in range.'),
'nz-slider.nzDisabled.description': localize('nz-slider.nzDisabled.description', 'If true, the slider will not be interactable.'),
'nz-slider.nzDots.description': localize('nz-slider.nzDots.description', 'Whether the thumb can drag over tick only.'),
'nz-slider.nzIncluded.description': localize('nz-slider.nzIncluded.description', 'Make effect when `marks` not null，`true` means containment and `false` means coordinative'),
'nz-slider.nzMarks.description': localize('nz-slider.nzMarks.description', 'Tick mark of Slider, type of key must be `number`, and must in closed interval [min, max] ，each mark can declare its own style.'),
'nz-slider.nzMax.description': localize('nz-slider.nzMax.description', 'The maximum value the slider can slide to'),
'nz-slider.nzMin.description': localize('nz-slider.nzMin.description', 'The minimum value the slider can slide to.'),
'nz-slider.nzRange.description': localize('nz-slider.nzRange.description', 'dual thumb mode'),
'nz-slider.nzStep.description': localize('nz-slider.nzStep.description', 'The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When  `marks` no null, `step` can be `null`.'),
'nz-slider.nzTipFormatter.description': localize('nz-slider.nzTipFormatter.description', 'Slider will pass its value to `tipFormatter`, and display its value in Tooltip, and hide Tooltip when return value is null.'),
'nz-slider.ngModel.description': localize('nz-slider.ngModel.description', 'The value of slider. When `range` is `false`, use `number`, otherwise, use `[number, number]`'),
'nz-slider.nzVertical.description': localize('nz-slider.nzVertical.description', 'If true, the slider will be vertical.'),
'nz-slider.nzReverse.description': localize('nz-slider.nzReverse.description', 'Reverse the component'),
'nz-slider.nzTooltipVisible.description': localize('nz-slider.nzTooltipVisible.description', 'When set to `always` tooltips are always displayed. When set to `never` they are never displayed'),
'nz-slider.nzTooltipPlacement.description': localize('nz-slider.nzTooltipPlacement.description', 'Set the default placement of Tooltip'),
'nz-slider.nzOnAfterChange.description': localize('nz-slider.nzOnAfterChange.description', 'Fire when `onmouseup` is fired.'),
'nz-slider.ngModelChange.description': localize('nz-slider.ngModelChange.description', 'Callback function that is fired when the user changes the slider\'s value.'),
'nz-slider.formControlName.description': localize('nz-slider.formControlName.description', ' '),
'nz-slider.name.description': localize('nz-slider.name.description', ' '),
'nz-space.title': localize('nz-space.title', 'Space'),
'nz-space.whenToUse': localize('nz-space.whenToUse', 'Avoid components clinging together and set a unified space.'),
'nz-space.description': localize('nz-space.description', 'Set components spacing.'),
'nz-space.nzSize.description': localize('nz-space.nzSize.description', 'The space size'),
'nz-space.nzDirection.description': localize('nz-space.nzDirection.description', 'The space direction'),
'nz-space.nzAlign.description': localize('nz-space.nzAlign.description', 'Align items'),
'nz-space.nzWrap.description': localize('nz-space.nzWrap.description', 'Auto wrap line, when `horizontal` effective'),
'nz-space.nzSplit.description': localize('nz-space.nzSplit.description', 'Set split'),
'nz-spin.title': localize('nz-spin.title', 'Spin'),
'nz-spin.whenToUse': localize('nz-spin.whenToUse', 'When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users\' inquietude.'),
'nz-spin.description': localize('nz-spin.description', 'A spinner for displaying loading state of a page or a section.'),
'nz-spin.nzDelay.description': localize('nz-spin.nzDelay.description', 'specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds'),
'nz-spin.nzIndicator.description': localize('nz-spin.nzIndicator.description', 'the spinning indicator'),
'nz-spin.nzSize.description': localize('nz-spin.nzSize.description', 'size of Spin'),
'nz-spin.nzSpinning.description': localize('nz-spin.nzSpinning.description', 'whether Spin is spinning'),
'nz-spin.nzSimple.description': localize('nz-spin.nzSimple.description', 'whether Spin has no children'),
'nz-spin.nzTip.description': localize('nz-spin.nzTip.description', 'customize description content when Spin has children'),
'nz-statistic.title': localize('nz-statistic.title', 'Statistic'),
'nz-statistic.whenToUse': localize('nz-statistic.whenToUse', '- When want to highlight some data.\n- When want to display statistic data with description.'),
'nz-statistic.description': localize('nz-statistic.description', 'Display statistic number.'),
'nz-statistic.nzPrefix.description': localize('nz-statistic.nzPrefix.description', 'Prefix of Value'),
'nz-statistic.nzSuffix.description': localize('nz-statistic.nzSuffix.description', 'Suffix of Value'),
'nz-statistic.nzTitle.description': localize('nz-statistic.nzTitle.description', 'Title'),
'nz-statistic.nzValue.description': localize('nz-statistic.nzValue.description', 'Value'),
'nz-statistic.nzValueStyle.description': localize('nz-statistic.nzValueStyle.description', 'Value CSS style'),
'nz-statistic.nzValueTemplate.description': localize('nz-statistic.nzValueTemplate.description', 'Custom template to render a number'),
'nz-countdown.title': localize('nz-countdown.title', 'Statistic'),
'nz-countdown.whenToUse': localize('nz-countdown.whenToUse', '- When want to highlight some data.\n- When want to display statistic data with description.'),
'nz-countdown.description': localize('nz-countdown.description', 'Display statistic number.'),
'nz-countdown.nzFormat.description': localize('nz-countdown.nzFormat.description', 'Format string'),
'nz-countdown.nzPrefix.description': localize('nz-countdown.nzPrefix.description', 'Prefix of Value'),
'nz-countdown.nzSuffix.description': localize('nz-countdown.nzSuffix.description', 'Suffix of Value'),
'nz-countdown.nzTitle.description': localize('nz-countdown.nzTitle.description', 'Title'),
'nz-countdown.nzValue.description': localize('nz-countdown.nzValue.description', 'Target time in timestamp form'),
'nz-countdown.nzValueTemplate.description': localize('nz-countdown.nzValueTemplate.description', 'Custom template to render a time'),
'nz-countdown.nzCountdownFinish.description': localize('nz-countdown.nzCountdownFinish.description', 'Emit when countdown finishes'),
'nzFormat.title': localize('nzFormat.title', 'Statistic'),
'nzFormat.whenToUse': localize('nzFormat.whenToUse', '- When want to highlight some data.\n- When want to display statistic data with description.'),
'nzFormat.description': localize('nzFormat.description', 'Display statistic number.'),
'nz-steps.title': localize('nz-steps.title', 'Steps'),
'nz-steps.whenToUse': localize('nz-steps.whenToUse', 'When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.'),
'nz-steps.description': localize('nz-steps.description', 'The whole of the step bar.'),
'nz-steps.nzType.description': localize('nz-steps.nzType.description', 'type of steps, can be set to one of the following values: `default`, `navigation`'),
'nz-steps.nzCurrent.description': localize('nz-steps.nzCurrent.description', 'To set the current step, counting from 0. You can overwrite this state by using `nzStatus` of `nz-step`'),
'nz-steps.nzDirection.description': localize('nz-steps.nzDirection.description', 'To specify the direction of the step bar, `horizontal` and `vertical` are currently supported'),
'nz-steps.nzLabelPlacement.description': localize('nz-steps.nzLabelPlacement.description', 'Support vertical title and description'),
'nz-steps.nzProgressDot.description': localize('nz-steps.nzProgressDot.description', 'Steps with progress dot style, customize the progress dot by setting it with TemplateRef'),
'nz-steps.nzSize.description': localize('nz-steps.nzSize.description', 'To specify the size of the step bar, `default` and `small` are currently supported'),
'nz-steps.nzStatus.description': localize('nz-steps.nzStatus.description', 'To specify the status of current step, can be set to one of the following values: `wait` `process` `finish` `error`'),
'nz-steps.nzStartIndex.description': localize('nz-steps.nzStartIndex.description', 'To specify the starting number'),
'nz-steps.nzIndexChange.description': localize('nz-steps.nzIndexChange.description', 'Trigger event when step click'),
'nz-step.title': localize('nz-step.title', 'Steps'),
'nz-step.whenToUse': localize('nz-step.whenToUse', 'When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.'),
'nz-step.description': localize('nz-step.description', 'A single step in the step bar.'),
'nz-step.nzDescription.description': localize('nz-step.nzDescription.description', 'description of the step, optional property'),
'nz-step.nzIcon.description': localize('nz-step.nzIcon.description', 'icon of the step, optional property'),
'nz-step.nzStatus.description': localize('nz-step.nzStatus.description', 'to specify the status. It will be automatically set by `nzCurrent` of `nz-steps` if not configured. Optional values are: `wait` `process` `finish` `error`'),
'nz-step.nzTitle.description': localize('nz-step.nzTitle.description', 'title of the step'),
'nz-step.nzSubtitle.description': localize('nz-step.nzSubtitle.description', 'subTitle of the step'),
'nz-step.nzDisabled.description': localize('nz-step.nzDisabled.description', 'disable click'),
'nz-step.nzPercentage.description': localize('nz-step.nzPercentage.description', 'Progress percentage of the step in `process` status (only works on basic Steps)'),
'nz-switch.title': localize('nz-switch.title', 'Switch'),
'nz-switch.whenToUse': localize('nz-switch.whenToUse', '- If you need to represent the switching between two states or on-off state.\n- The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation.'),
'nz-switch.description': localize('nz-switch.description', 'Switching Selector.'),
'nz-switch.nzId.description': localize('nz-switch.nzId.description', 'button id attribute inside the component'),
'nz-switch.ngModel.description': localize('nz-switch.ngModel.description', 'determine whether the `nz-switch` is checked, double binding'),
'nz-switch.nzCheckedChildren.description': localize('nz-switch.nzCheckedChildren.description', 'content to be shown when the state is checked'),
'nz-switch.nzUnCheckedChildren.description': localize('nz-switch.nzUnCheckedChildren.description', 'content to be shown when the state is unchecked'),
'nz-switch.nzDisabled.description': localize('nz-switch.nzDisabled.description', 'Disable switch'),
'nz-switch.nzSize.description': localize('nz-switch.nzSize.description', 'the size of the `nz-switch`, options: `default` `small`'),
'nz-switch.nzLoading.description': localize('nz-switch.nzLoading.description', 'loading state of switch'),
'nz-switch.nzControl.description': localize('nz-switch.nzControl.description', 'determine whether fully control state by user'),
'nz-switch.ngModelChange.description': localize('nz-switch.ngModelChange.description', 'a callback function, can be executed when the checked state is changing'),
'nz-switch.formControlName.description': localize('nz-switch.formControlName.description', ' '),
'nz-switch.name.description': localize('nz-switch.name.description', ' '),
'nz-table.title': localize('nz-table.title', 'Table'),
'nz-table.whenToUse': localize('nz-table.whenToUse', '- To display a collection of structured data.\n- To sort, search, paginate and filter data.'),
'nz-table.description': localize('nz-table.description', 'A table displays rows of data.'),
'nz-table.nzData.description': localize('nz-table.nzData.description', 'Data record array to be rendered'),
'nz-table.nzFrontPagination.description': localize('nz-table.nzFrontPagination.description', 'Whether to paginate data on client. Should be set to `false` if data is to be paginated on server side or if all the data is to be displayed at once in the table without any pagination'),
'nz-table.nzTotal.description': localize('nz-table.nzTotal.description', 'Total data count. Should set when `nzFrontPagination` is `false`'),
'nz-table.nzPageIndex.description': localize('nz-table.nzPageIndex.description', 'pageIndex , double binding'),
'nz-table.nzPageSize.description': localize('nz-table.nzPageSize.description', 'pageSize, double binding'),
'nz-table.nzShowPagination.description': localize('nz-table.nzShowPagination.description', 'Whether to show pagination component at bottom of the table'),
'nz-table.nzPaginationPosition.description': localize('nz-table.nzPaginationPosition.description', 'Specify the position of pagination'),
'nz-table.nzPaginationType.description': localize('nz-table.nzPaginationType.description', 'Specify the size of pagination'),
'nz-table.nzBordered.description': localize('nz-table.nzBordered.description', 'Whether to show all table borders'),
'nz-table.nzOuterBordered.description': localize('nz-table.nzOuterBordered.description', 'Whether to show table outer borders'),
'nz-table.nzWidthConfig.description': localize('nz-table.nzWidthConfig.description', 'Set col width can not used with `[nzWidth]` of `th`'),
'nz-table.nzSize.description': localize('nz-table.nzSize.description', 'Size of table'),
'nz-table.nzLoading.description': localize('nz-table.nzLoading.description', 'Loading status of table'),
'nz-table.nzLoadingIndicator.description': localize('nz-table.nzLoadingIndicator.description', 'The loading indicator'),
'nz-table.nzLoadingDelay.description': localize('nz-table.nzLoadingDelay.description', 'Specifies a delay in milliseconds for loading state (prevents flush)'),
'nz-table.nzScroll.description': localize('nz-table.nzScroll.description', 'Whether table can be scrolled in x/y direction. `x` or `y` can be a string that indicates the width and height of table body'),
'nz-table.nzTitle.description': localize('nz-table.nzTitle.description', 'Table title renderer'),
'nz-table.nzFooter.description': localize('nz-table.nzFooter.description', 'Table footer renderer'),
'nz-table.nzNoResult.description': localize('nz-table.nzNoResult.description', 'Custom no result content'),
'nz-table.nzPageSizeOptions.description': localize('nz-table.nzPageSizeOptions.description', 'Specify the sizeChanger options'),
'nz-table.nzShowQuickJumper.description': localize('nz-table.nzShowQuickJumper.description', 'Determine whether you can jump to pages directly'),
'nz-table.nzShowSizeChanger.description': localize('nz-table.nzShowSizeChanger.description', 'Determine whether `nzPageSize` can be changed'),
'nz-table.nzShowTotal.description': localize('nz-table.nzShowTotal.description', 'To display Pagination total number and range, same as Pagination'),
'nz-table.nzItemRender.description': localize('nz-table.nzItemRender.description', 'To customize Pagination item, same as Pagination'),
'nz-table.nzHideOnSinglePage.description': localize('nz-table.nzHideOnSinglePage.description', 'Whether to hide pagination on single page'),
'nz-table.nzSimple.description': localize('nz-table.nzSimple.description', 'Whether to use simple mode'),
'nz-table.nzTemplateMode.description': localize('nz-table.nzTemplateMode.description', 'Template mode，no need to pass data to `nzData`'),
'nz-table.nzVirtualItemSize.description': localize('nz-table.nzVirtualItemSize.description', 'The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api)'),
'nz-table.nzVirtualMaxBufferPx.description': localize('nz-table.nzVirtualMaxBufferPx.description', 'The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api)'),
'nz-table.nzVirtualMinBufferPx.description': localize('nz-table.nzVirtualMinBufferPx.description', 'The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api)'),
'nz-table.nzVirtualForTrackBy.description': localize('nz-table.nzVirtualForTrackBy.description', 'The TrackByFunction to be used for tracking changes.'),
'nz-table.nzPageIndexChange.description': localize('nz-table.nzPageIndexChange.description', 'Callback when `pageIndex` changes'),
'nz-table.nzPageSizeChange.description': localize('nz-table.nzPageSizeChange.description', 'Callback when `pageSize` changes'),
'nz-table.nzCurrentPageDataChange.description': localize('nz-table.nzCurrentPageDataChange.description', 'Callback when current pageData changes'),
'nz-table.nzQueryParams.description': localize('nz-table.nzQueryParams.description', 'Callback with params when working with server side pagination, sorting and filtering'),
'th.title': localize('th.title', 'Table'),
'th.whenToUse': localize('th.whenToUse', '- To display a collection of structured data.\n- To sort, search, paginate and filter data.'),
'th.description': localize('th.description', 'Checkbox property'),
'th.nzShowCheckbox.description': localize('th.nzShowCheckbox.description', 'Whether `nz-checkbox` should be shown in the header'),
'th.nzDisabled.description': localize('th.nzDisabled.description', 'Whether the `nz-checkbox` is disabled'),
'th.nzIndeterminate.description': localize('th.nzIndeterminate.description', '`nz-checkbox` indeterminate status'),
'th.nzChecked.description': localize('th.nzChecked.description', 'Checked status, double binding'),
'th.nzCheckedChange.description': localize('th.nzCheckedChange.description', 'Callback when checked status changes'),
'th.nzShowRowSelection.description': localize('th.nzShowRowSelection.description', 'Whether to show row selection options'),
'th.nzSelections.description': localize('th.nzSelections.description', 'Selection options including `text` and `onSelect` callback function'),
'th.nzShowSort.description': localize('th.nzShowSort.description', 'Whether to display sorting'),
'th.nzSortFn.description': localize('th.nzSortFn.description', 'Sort function used to sort the data on client side (ref to Array.sort compareFunction). Should be set to `true` when using server side sorting'),
'th.nzSortOrder.description': localize('th.nzSortOrder.description', 'Sort direction'),
'th.nzSortDirections.description': localize('th.nzSortDirections.description', 'Supported sort order, could be `\'ascend\'`, `\'descend\'`, `null`'),
'th.nzSortOrderChange.description': localize('th.nzSortOrderChange.description', 'Callback when sort direction changes'),
'th.nzShowFilter.description': localize('th.nzShowFilter.description', 'Whether to show filter'),
'th.nzFilterFn.description': localize('th.nzFilterFn.description', 'Filter function used to filter the data on client side. Set to `true` when using server side filtering'),
'th.nzFilters.description': localize('th.nzFilters.description', 'Filter options,  `text`, and `value` for callback, `byDefault` to enable filter by default'),
'th.nzFilterMultiple.description': localize('th.nzFilterMultiple.description', 'Whether multiple mode filtering is enabled'),
'th.nzFilterChange.description': localize('th.nzFilterChange.description', 'Callback when filter `value` changes'),
'th.nzWidth.description': localize('th.nzWidth.description', 'Specify the column width (in pixels), can not used when grouping columns'),
'th.nzLeft.description': localize('th.nzLeft.description', 'Left pixels, used to fixed column to left, auto calc when set to `true` and disable fixed when `false`'),
'th.nzRight.description': localize('th.nzRight.description', 'Right pixels, used to fixed column to right, auto calc when set to `true` and disable fixed when `false`'),
'th.nzAlign.description': localize('th.nzAlign.description', 'Specify how content is aligned'),
'th.nzBreakWord.description': localize('th.nzBreakWord.description', 'Whether insert line breaks within words'),
'th.nzEllipsis.description': localize('th.nzEllipsis.description', 'ellipsis cell content, not working with sorter and filters for now. Only work when nzTableLayout was `fixed`'),
'th.nzColumnKey.description': localize('th.nzColumnKey.description', 'column key, work with server sort and filter'),
'td.title': localize('td.title', 'Table'),
'td.whenToUse': localize('td.whenToUse', '- To display a collection of structured data.\n- To sort, search, paginate and filter data.'),
'td.description': localize('td.description', 'Checkbox property'),
'td.nzShowCheckbox.description': localize('td.nzShowCheckbox.description', 'Whether add nz-checkbox'),
'td.nzDisabled.description': localize('td.nzDisabled.description', 'Whether disable checkbox'),
'td.nzIndeterminate.description': localize('td.nzIndeterminate.description', 'Indeterminate status'),
'td.nzChecked.description': localize('td.nzChecked.description', 'Checked status, double binding'),
'td.nzCheckedChange.description': localize('td.nzCheckedChange.description', 'Checked status change callback'),
'td.colSpan.description': localize('td.colSpan.description', 'how many columns the cell extends'),
'td.rowSpan.description': localize('td.rowSpan.description', 'how many rows the cell extends'),
'td.nzShowExpand.description': localize('td.nzShowExpand.description', 'Whether show expand icon'),
'td.nzExpand.description': localize('td.nzExpand.description', 'Current expand status, double binding'),
'td.nzExpandChange.description': localize('td.nzExpandChange.description', 'Expand status change callback'),
'td.nzLeft.description': localize('td.nzLeft.description', 'Left pixels, used to fixed column to left, auto calc when set to `true` and disable fixed when `false`'),
'td.nzRight.description': localize('td.nzRight.description', 'Right pixels, used to fixed column to right, auto calc when set to `true` and disable fixed when `false`'),
'td.nzAlign.description': localize('td.nzAlign.description', 'Specify how content is aligned'),
'td.nzBreakWord.description': localize('td.nzBreakWord.description', 'Whether insert line breaks within words'),
'td.nzEllipsis.description': localize('td.nzEllipsis.description', 'ellipsis cell content, not working with sorter and filters for now. Only work when nzTableLayout was `fixed`'),
'td.nzIndentSize.description': localize('td.nzIndentSize.description', 'Indent size in pixels of tree data'),
'tr.title': localize('tr.title', 'Table'),
'tr.whenToUse': localize('tr.whenToUse', '- To display a collection of structured data.\n- To sort, search, paginate and filter data.'),
'tr.description': localize('tr.description', 'A table displays rows of data.'),
'tr.nzExpand.description': localize('tr.nzExpand.description', 'Whether expand current row，used with `nzExpand` of `td`'),
'nz-filter-trigger.title': localize('nz-filter-trigger.title', 'Table'),
'nz-filter-trigger.whenToUse': localize('nz-filter-trigger.whenToUse', '- To display a collection of structured data.\n- To sort, search, paginate and filter data.'),
'nz-filter-trigger.description': localize('nz-filter-trigger.description', 'Customized filter panel'),
'nz-filter-trigger.nzDropdownMenu.description': localize('nz-filter-trigger.nzDropdownMenu.description', 'Dropdown menu'),
'nz-filter-trigger.nzVisible.description': localize('nz-filter-trigger.nzVisible.description', 'whether the dropdown menu is visible, double binding'),
'nz-filter-trigger.nzActive.description': localize('nz-filter-trigger.nzActive.description', 'whether the icon status is activated'),
'nz-filter-trigger.nzHasBackdrop.description': localize('nz-filter-trigger.nzHasBackdrop.description', 'Whether or not attach a backdrop.'),
'nz-filter-trigger.nzVisibleChange.description': localize('nz-filter-trigger.nzVisibleChange.description', 'a callback function takes an argument: `nzVisible`, is executed when the visible state is changed'),
'nz-virtual-scroll.title': localize('nz-virtual-scroll.title', 'Table'),
'nz-virtual-scroll.whenToUse': localize('nz-virtual-scroll.whenToUse', '- To display a collection of structured data.\n- To sort, search, paginate and filter data.'),
'nz-virtual-scroll.description': localize('nz-virtual-scroll.description', 'virtual scroll directive work with `ng-template`, type: `TemplateRef<{ $implicit: T, index: number }>`.'),
'nz-tabset.title': localize('nz-tabset.title', 'Tabs'),
'nz-tabset.whenToUse': localize('nz-tabset.whenToUse', 'Ant Design has 3 types of Tabs for different situations.'),
'nz-tabset.description': localize('nz-tabset.description', 'Tabs make it easy to switch between different views.'),
'nz-tabset.nzSelectedIndex.description': localize('nz-tabset.nzSelectedIndex.description', 'Current tab\'s index'),
'nz-tabset.nzAnimated.description': localize('nz-tabset.nzAnimated.description', 'Whether to change tabs with animation. Only works while `nzTabPosition="top" | "bottom"`'),
'nz-tabset.nzSize.description': localize('nz-tabset.nzSize.description', 'preset tab bar size'),
'nz-tabset.nzTabBarExtraContent.description': localize('nz-tabset.nzTabBarExtraContent.description', 'Extra content in tab bar'),
'nz-tabset.nzTabBarStyle.description': localize('nz-tabset.nzTabBarStyle.description', 'Tab bar style object'),
'nz-tabset.nzTabPosition.description': localize('nz-tabset.nzTabPosition.description', 'Position of tabs'),
'nz-tabset.nzType.description': localize('nz-tabset.nzType.description', 'Basic style of tabs'),
'nz-tabset.nzTabBarGutter.description': localize('nz-tabset.nzTabBarGutter.description', 'The gap between tabs'),
'nz-tabset.nzHideAll.description': localize('nz-tabset.nzHideAll.description', 'Whether hide all tabs'),
'nz-tabset.nzLinkRouter.description': localize('nz-tabset.nzLinkRouter.description', 'Link with Angular router. It supports child mode and query param mode'),
'nz-tabset.nzLinkExact.description': localize('nz-tabset.nzLinkExact.description', 'Use exact routing matching'),
'nz-tabset.nzCanDeactivate.description': localize('nz-tabset.nzCanDeactivate.description', 'Determine if a tab can be deactivated'),
'nz-tabset.nzCentered.description': localize('nz-tabset.nzCentered.description', 'Centers tabs'),
'nz-tabset.nzSelectedIndexChange.description': localize('nz-tabset.nzSelectedIndexChange.description', 'Current tab\'s index change callback'),
'nz-tabset.nzSelectChange.description': localize('nz-tabset.nzSelectChange.description', 'Current tab\'s change callback'),
'nz-tab.title': localize('nz-tab.title', 'Tabs'),
'nz-tab.whenToUse': localize('nz-tab.whenToUse', 'Ant Design has 3 types of Tabs for different situations.'),
'nz-tab.description': localize('nz-tab.description', 'Tab contents can be lazy loaded by declaring the body in a `ng-template` with the `[nz-tab]` attribute.'),
'nz-tab.nzTitle.description': localize('nz-tab.nzTitle.description', 'Show text in tab\'s head'),
'nz-tab.nzForceRender.description': localize('nz-tab.nzForceRender.description', 'Forced render of content in tabs, not lazy render after clicking on tabs'),
'nz-tab.nzDisabled.description': localize('nz-tab.nzDisabled.description', 'tab disable'),
'nz-tab.nzClick.description': localize('nz-tab.nzClick.description', 'title click callback'),
'nz-tab.nzContextmenu.description': localize('nz-tab.nzContextmenu.description', 'title contextmenu callback'),
'nz-tab.nzSelect.description': localize('nz-tab.nzSelect.description', 'title select callback'),
'nz-tab.nzDeselect.description': localize('nz-tab.nzDeselect.description', 'title deselect callback'),
'nz-tag.title': localize('nz-tag.title', 'Tag'),
'nz-tag.whenToUse': localize('nz-tag.whenToUse', '- It can be used to tag by dimension or property.\n- When categorizing.'),
'nz-tag.description': localize('nz-tag.description', 'Tag for categorizing or markup.'),
'nz-tag.nzMode.description': localize('nz-tag.nzMode.description', 'Mode of tag'),
'nz-tag.nzChecked.description': localize('nz-tag.nzChecked.description', 'Checked status of Tag, double binding, only works when `nzMode="checkable"`'),
'nz-tag.nzColor.description': localize('nz-tag.nzColor.description', 'Color of the Tag'),
'nz-tag.nzOnClose.description': localize('nz-tag.nzOnClose.description', 'Callback executed when tag is closed, only works when `nzMode="closable"`'),
'nz-tag.nzCheckedChange.description': localize('nz-tag.nzCheckedChange.description', 'Checked status change call back, only works when `nzMode="checkable"`'),
'nz-time-picker.title': localize('nz-time-picker.title', 'TimePicker'),
'nz-time-picker.whenToUse': localize('nz-time-picker.whenToUse', 'By clicking the input box, you can select a time from a popup panel.'),
'nz-time-picker.description': localize('nz-time-picker.description', 'To select/input a time.'),
'nz-time-picker.nzId.description': localize('nz-time-picker.nzId.description', 'input id attribute inside the component'),
'nz-time-picker.ngModel.description': localize('nz-time-picker.ngModel.description', 'to set time'),
'nz-time-picker.nzAddOn.description': localize('nz-time-picker.nzAddOn.description', 'called from timepicker panel to render some addon to its bottom'),
'nz-time-picker.nzAllowEmpty.description': localize('nz-time-picker.nzAllowEmpty.description', 'allow clearing text'),
'nz-time-picker.nzAutoFocus.description': localize('nz-time-picker.nzAutoFocus.description', 'get focus when component mounted'),
'nz-time-picker.nzBackdrop.description': localize('nz-time-picker.nzBackdrop.description', 'whether or not the overlay should attach a backdrop'),
'nz-time-picker.nzClearText.description': localize('nz-time-picker.nzClearText.description', 'clear tooltip of icon'),
'nz-time-picker.nzNowText.description': localize('nz-time-picker.nzNowText.description', 'text of the Now button'),
'nz-time-picker.nzOkText.description': localize('nz-time-picker.nzOkText.description', 'text of the Ok button'),
'nz-time-picker.nzDefaultOpenValue.description': localize('nz-time-picker.nzDefaultOpenValue.description', 'default open panel value if `[ngModel]` is null'),
'nz-time-picker.nzDisabled.description': localize('nz-time-picker.nzDisabled.description', 'determine whether the TimePicker is disabled'),
'nz-time-picker.nzDisabledHours.description': localize('nz-time-picker.nzDisabledHours.description', 'to specify the hours that cannot be selected'),
'nz-time-picker.nzDisabledMinutes.description': localize('nz-time-picker.nzDisabledMinutes.description', 'to specify the minutes that cannot be selected'),
'nz-time-picker.nzDisabledSeconds.description': localize('nz-time-picker.nzDisabledSeconds.description', 'to specify the seconds that cannot be selected'),
'nz-time-picker.nzFormat.description': localize('nz-time-picker.nzFormat.description', 'to set the time format'),
'nz-time-picker.nzHideDisabledOptions.description': localize('nz-time-picker.nzHideDisabledOptions.description', 'hide the options that can not be selected'),
'nz-time-picker.nzHourStep.description': localize('nz-time-picker.nzHourStep.description', 'interval between hours in picker'),
'nz-time-picker.nzMinuteStep.description': localize('nz-time-picker.nzMinuteStep.description', 'interval between minutes in picker'),
'nz-time-picker.nzSecondStep.description': localize('nz-time-picker.nzSecondStep.description', 'interval between seconds in picker'),
'nz-time-picker.nzSize.description': localize('nz-time-picker.nzSize.description', 'width of time picker box'),
'nz-time-picker.nzStatus.description': localize('nz-time-picker.nzStatus.description', 'Set validation status'),
'nz-time-picker.nzBorderless.description': localize('nz-time-picker.nzBorderless.description', 'remove the border'),
'nz-time-picker.nzInputReadOnly.description': localize('nz-time-picker.nzInputReadOnly.description', 'set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)'),
'nz-time-picker.nzOpen.description': localize('nz-time-picker.nzOpen.description', 'whether to popup panel, double binding'),
'nz-time-picker.nzPlaceHolder.description': localize('nz-time-picker.nzPlaceHolder.description', 'display when there\'s no value'),
'nz-time-picker.nzPopupClassName.description': localize('nz-time-picker.nzPopupClassName.description', 'className of panel'),
'nz-time-picker.nzUse12Hours.description': localize('nz-time-picker.nzUse12Hours.description', 'display as 12 hours format, with default format `h:mm:ss a`'),
'nz-time-picker.nzSuffixIcon.description': localize('nz-time-picker.nzSuffixIcon.description', 'the custom suffix icon'),
'nz-time-picker.ngModelChange.description': localize('nz-time-picker.ngModelChange.description', 'a callback function, can be executed when the selected time is changing'),
'nz-time-picker.nzOpenChange.description': localize('nz-time-picker.nzOpenChange.description', 'a callback function which will be called while panel opening/closing'),
'nz-time-picker.formControlName.description': localize('nz-time-picker.formControlName.description', ' '),
'nz-time-picker.name.description': localize('nz-time-picker.name.description', ' '),
'nz-timeline.title': localize('nz-timeline.title', 'Timeline'),
'nz-timeline.whenToUse': localize('nz-timeline.whenToUse', '- When a series of information needs to be ordered by time (ascend or descend).\n- When you need a timeline to make a visual connection.'),
'nz-timeline.description': localize('nz-timeline.description', 'Timeline'),
'nz-timeline.nzPending.description': localize('nz-timeline.nzPending.description', 'Set the last ghost node\'s existence or its content'),
'nz-timeline.nzPendingDot.description': localize('nz-timeline.nzPendingDot.description', 'Set the dot of the last ghost node when pending is true'),
'nz-timeline.nzReverse.description': localize('nz-timeline.nzReverse.description', 'Reverse nodes or not'),
'nz-timeline.nzMode.description': localize('nz-timeline.nzMode.description', 'By sending `alternate` the timeline will distribute the nodes to the left and right'),
'nz-timeline-item.title': localize('nz-timeline-item.title', 'Timeline'),
'nz-timeline-item.whenToUse': localize('nz-timeline-item.whenToUse', '- When a series of information needs to be ordered by time (ascend or descend).\n- When you need a timeline to make a visual connection.'),
'nz-timeline-item.description': localize('nz-timeline-item.description', 'Node of timeline'),
'nz-timeline-item.nzColor.description': localize('nz-timeline-item.nzColor.description', 'Set the circle\'s color to `\'blue\' | \'red\' | \'green\' | \'gray\'`'),
'nz-timeline-item.nzDot.description': localize('nz-timeline-item.nzDot.description', 'Customize timeline dot'),
'nz-timeline-item.nzPosition.description': localize('nz-timeline-item.nzPosition.description', 'Customize position, only works when `nzMode` is `custom`'),
'nz-timeline-item.nzLabel.description': localize('nz-timeline-item.nzLabel.description', 'Set the label'),
'nz-transfer.title': localize('nz-transfer.title', 'Transfer'),
'nz-transfer.whenToUse': localize('nz-transfer.whenToUse', 'Transfer the elements between two columns intuitively and efficiently.'),
'nz-transfer.description': localize('nz-transfer.description', 'Double column transfer choice box.'),
'nz-transfer.nzDataSource.description': localize('nz-transfer.nzDataSource.description', 'Used for setting the data source. Except for the elements whose keys are `direction: \'right\'` prop, or using `nzTargetKeys` prop.'),
'nz-transfer.nzDisabled.description': localize('nz-transfer.nzDisabled.description', 'Whether the transfer is disabled'),
'nz-transfer.nzTitles.description': localize('nz-transfer.nzTitles.description', 'A set of titles that are sorted from left to right.'),
'nz-transfer.nzOperations.description': localize('nz-transfer.nzOperations.description', 'A set of operations that are sorted from bottom to top.'),
'nz-transfer.nzListStyle.description': localize('nz-transfer.nzListStyle.description', 'A custom CSS style used for rendering the transfer columns. equals to `ngStyle`'),
'nz-transfer.nzItemUnit.description': localize('nz-transfer.nzItemUnit.description', 'single unit'),
'nz-transfer.nzItemsUnit.description': localize('nz-transfer.nzItemsUnit.description', 'multiple unit'),
'nz-transfer.nzRenderList.description': localize('nz-transfer.nzRenderList.description', 'Customize render list, please refer to the case.'),
'nz-transfer.nzRender.description': localize('nz-transfer.nzRender.description', 'The function to generate the item shown on a column. please refer to the case.'),
'nz-transfer.nzFooter.description': localize('nz-transfer.nzFooter.description', 'A function used for rendering the footer. please refer to the case.'),
'nz-transfer.nzShowSearch.description': localize('nz-transfer.nzShowSearch.description', 'Whether a search box is shown on each column.'),
'nz-transfer.nzFilterOption.description': localize('nz-transfer.nzFilterOption.description', 'A function to determine whether an item should be shown in a search result list'),
'nz-transfer.nzSearchPlaceholder.description': localize('nz-transfer.nzSearchPlaceholder.description', 'The hint text of the search box.'),
'nz-transfer.nzNotFoundContent.description': localize('nz-transfer.nzNotFoundContent.description', 'Text to display when a column is empty.'),
'nz-transfer.nzCanMove.description': localize('nz-transfer.nzCanMove.description', 'A function to determine what items should be moved (by default all checked items are moved). please refer to the case.'),
'nz-transfer.nzSelectedKeys.description': localize('nz-transfer.nzSelectedKeys.description', 'A set of keys of selected items.'),
'nz-transfer.nzTargetKeys.description': localize('nz-transfer.nzTargetKeys.description', 'A set of keys of elements that are listed on the right column.'),
'nz-transfer.nzStatus.description': localize('nz-transfer.nzStatus.description', 'Set validation status'),
'nz-transfer.nzChange.description': localize('nz-transfer.nzChange.description', 'A callback function that is executed when the transfer between columns is complete.'),
'nz-transfer.nzSearchChange.description': localize('nz-transfer.nzSearchChange.description', 'A callback function which is executed when search field are changed'),
'nz-transfer.nzSelectChange.description': localize('nz-transfer.nzSelectChange.description', 'A callback function which is executed when selected items are changed.'),
'nz-tree.title': localize('nz-tree.title', 'Tree'),
'nz-tree.whenToUse': localize('nz-tree.whenToUse', 'Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The `Tree` component is a way of representing the hierarchical relationship between these things. You can also  expand, collapse, and select a treeNode within a `Tree`.'),
'nz-tree.description': localize('nz-tree.description', 'Tips: According to the current data structure design, you need to ensure that `nzData` is set first, otherwise other attributes will not take effect. After the asynchronous operation returns data, re-assign other attributes to trigger rendering(including `nzExpandAll` `nzExpandedKeys` `nzCheckedKeys` `nzSelectedKeys` `nzSearchValue`). Please refer to [#5152](https://github.com/NG-ZORRO/ng-zorro-antd/issues/5152) to track the optimization progress.'),
'nz-tree.nzData.description': localize('nz-tree.nzData.description', 'Tree data (Reference NzTreeNode)'),
'nz-tree.nzBlockNode.description': localize('nz-tree.nzBlockNode.description', 'Whether treeNode fill remaining horizontal space'),
'nz-tree.nzCheckable.description': localize('nz-tree.nzCheckable.description', 'Adds a Checkbox before the treeNodes'),
'nz-tree.nzShowExpand.description': localize('nz-tree.nzShowExpand.description', 'Show a Expand Icon before the treeNodes'),
'nz-tree.nzShowLine.description': localize('nz-tree.nzShowLine.description', 'Shows a connecting line'),
'nz-tree.nzExpandedIcon.description': localize('nz-tree.nzExpandedIcon.description', 'Customize an expand icon'),
'nz-tree.nzShowIcon.description': localize('nz-tree.nzShowIcon.description', 'Shows the icon before a TreeNode\'s title. There is no default style'),
'nz-tree.nzAsyncData.description': localize('nz-tree.nzAsyncData.description', 'Load data asynchronously (should be used with NzTreeNode.addChildren(...))'),
'nz-tree.nzDraggable.description': localize('nz-tree.nzDraggable.description', 'Specifies whether this Tree is draggable (IE > 8)'),
'nz-tree.nzMultiple.description': localize('nz-tree.nzMultiple.description', 'Allows selecting multiple treeNodes'),
'nz-tree.nzHideUnMatched.description': localize('nz-tree.nzHideUnMatched.description', 'Hide unmatched nodes while searching'),
'nz-tree.nzCheckStrictly.description': localize('nz-tree.nzCheckStrictly.description', 'Check treeNode precisely; parent treeNode and children treeNodes are not associated'),
'nz-tree.nzTreeTemplate.description': localize('nz-tree.nzTreeTemplate.description', 'Custom Nodes'),
'nz-tree.nzExpandAll.description': localize('nz-tree.nzExpandAll.description', 'Whether to expand all treeNodes'),
'nz-tree.nzExpandedKeys.description': localize('nz-tree.nzExpandedKeys.description', 'Specify the keys of the default expanded treeNodes'),
'nz-tree.nzCheckedKeys.description': localize('nz-tree.nzCheckedKeys.description', 'Specifies the keys of the default checked treeNodes'),
'nz-tree.nzSelectedKeys.description': localize('nz-tree.nzSelectedKeys.description', 'Specifies the keys of the default selected treeNodes'),
'nz-tree.nzSearchValue.description': localize('nz-tree.nzSearchValue.description', 'Filter (highlight) treeNodes (see demo `Searchable`), two-way binding'),
'nz-tree.nzSearchFunc.description': localize('nz-tree.nzSearchFunc.description', 'Custom matching method, used with nzSearchValue'),
'nz-tree.nzBeforeDrop.description': localize('nz-tree.nzBeforeDrop.description', 'Drop before the second check, allowing the user to decide whether to allow placement'),
'nz-tree.nzVirtualHeight.description': localize('nz-tree.nzVirtualHeight.description', 'The height of virtual scroll'),
'nz-tree.nzVirtualItemSize.description': localize('nz-tree.nzVirtualItemSize.description', 'The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api)'),
'nz-tree.nzVirtualMaxBufferPx.description': localize('nz-tree.nzVirtualMaxBufferPx.description', 'The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api)'),
'nz-tree.nzVirtualMinBufferPx.description': localize('nz-tree.nzVirtualMinBufferPx.description', 'The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api)'),
'nz-tree.nzClick.description': localize('nz-tree.nzClick.description', 'Callback function for when the user clicks a treeNode'),
'nz-tree.nzDblClick.description': localize('nz-tree.nzDblClick.description', 'Callback function for when the user double clicks a treeNode'),
'nz-tree.nzContextMenu.description': localize('nz-tree.nzContextMenu.description', 'Callback function for when the user right clicks a treeNode'),
'nz-tree.nzCheckBoxChange.description': localize('nz-tree.nzCheckBoxChange.description', 'Callback function for when user clicks the Checkbox'),
'nz-tree.nzExpandChange.description': localize('nz-tree.nzExpandChange.description', 'Callback function for when a treeNode is expanded or collapsed'),
'nz-tree.nzSearchValueChange.description': localize('nz-tree.nzSearchValueChange.description', 'Callback function for when filter treeNodes(used with nzSearchValue)'),
'nz-tree.nzOnDragStart.description': localize('nz-tree.nzOnDragStart.description', 'Callback function for when the onDragStart event occurs'),
'nz-tree.nzOnDragEnter.description': localize('nz-tree.nzOnDragEnter.description', 'Callback function for when the onDragEnter event occurs'),
'nz-tree.nzOnDragOver.description': localize('nz-tree.nzOnDragOver.description', 'Callback function for when the onDragOver event occurs'),
'nz-tree.nzOnDragLeave.description': localize('nz-tree.nzOnDragLeave.description', 'Callback function for when the onDragLeave event occurs'),
'nz-tree.nzOnDrop.description': localize('nz-tree.nzOnDrop.description', 'Callback function for when the onDrop event occurs'),
'nz-tree.nzOnDragEnd.description': localize('nz-tree.nzOnDragEnd.description', 'Callback function for when the onDragEnd event occurs'),
'nz-tree-select.title': localize('nz-tree-select.title', 'TreeSelect'),
'nz-tree-select.whenToUse': localize('nz-tree-select.whenToUse', '`TreeSelect` is similar to `Select`, but the values are provided in a tree like structure.\nAny data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on.'),
'nz-tree-select.description': localize('nz-tree-select.description', 'Tree selection control.'),
'nz-tree-select.nzId.description': localize('nz-tree-select.nzId.description', 'input id attribute inside the component'),
'nz-tree-select.nzAllowClear.description': localize('nz-tree-select.nzAllowClear.description', 'Whether allow clear'),
'nz-tree-select.nzPlaceHolder.description': localize('nz-tree-select.nzPlaceHolder.description', 'Placeholder of the select input'),
'nz-tree-select.nzPlacement.description': localize('nz-tree-select.nzPlacement.description', 'The position where the selection box pops up'),
'nz-tree-select.nzDisabled.description': localize('nz-tree-select.nzDisabled.description', 'Disabled or not'),
'nz-tree-select.nzShowIcon.description': localize('nz-tree-select.nzShowIcon.description', 'Shows the icon before a TreeNode\'s title. There is no default style'),
'nz-tree-select.nzShowSearch.description': localize('nz-tree-select.nzShowSearch.description', 'Whether to display a search input in the dropdown menu(valid only in the single mode)'),
'nz-tree-select.nzNotFoundContent.description': localize('nz-tree-select.nzNotFoundContent.description', 'Specify content to show when no result matches.'),
'nz-tree-select.nzDropdownMatchSelectWidth.description': localize('nz-tree-select.nzDropdownMatchSelectWidth.description', 'Determine whether the dropdown menu and the select input are the same width'),
'nz-tree-select.nzDropdownStyle.description': localize('nz-tree-select.nzDropdownStyle.description', 'To set the style of the dropdown menu'),
'nz-tree-select.nzDropdownClassName.description': localize('nz-tree-select.nzDropdownClassName.description', 'classname of dropdown menu'),
'nz-tree-select.nzMultiple.description': localize('nz-tree-select.nzMultiple.description', 'Support multiple or not, will be `true` when enable `nzCheckable`.'),
'nz-tree-select.nzHideUnMatched.description': localize('nz-tree-select.nzHideUnMatched.description', 'Hide unmatched nodes while searching'),
'nz-tree-select.nzSize.description': localize('nz-tree-select.nzSize.description', 'To set the size of the select input'),
'nz-tree-select.nzStatus.description': localize('nz-tree-select.nzStatus.description', 'Set validation status'),
'nz-tree-select.nzCheckable.description': localize('nz-tree-select.nzCheckable.description', 'Whether to show checkbox on the treeNodes'),
'nz-tree-select.nzCheckStrictly.description': localize('nz-tree-select.nzCheckStrictly.description', 'Check treeNode precisely; parent treeNode and children treeNodes are not associated'),
'nz-tree-select.nzShowExpand.description': localize('nz-tree-select.nzShowExpand.description', 'Show a Expand Icon before the treeNodes'),
'nz-tree-select.nzShowLine.description': localize('nz-tree-select.nzShowLine.description', 'Shows a connecting line'),
'nz-tree-select.nzAsyncData.description': localize('nz-tree-select.nzAsyncData.description', 'Load data asynchronously (should be used with NzTreeNode.addChildren(...))'),
'nz-tree-select.nzNodes.description': localize('nz-tree-select.nzNodes.description', 'Data of the treeNodes'),
'nz-tree-select.nzDefaultExpandAll.description': localize('nz-tree-select.nzDefaultExpandAll.description', 'Whether to expand all treeNodes by default'),
'nz-tree-select.nzExpandedKeys.description': localize('nz-tree-select.nzExpandedKeys.description', 'Default expanded treeNodes'),
'nz-tree-select.nzDisplayWith.description': localize('nz-tree-select.nzDisplayWith.description', 'How to display the selected node value in the trigger'),
'nz-tree-select.nzMaxTagCount.description': localize('nz-tree-select.nzMaxTagCount.description', 'Max tag count to show'),
'nz-tree-select.nzMaxTagPlaceholder.description': localize('nz-tree-select.nzMaxTagPlaceholder.description', 'Placeholder for not showing tags'),
'nz-tree-select.nzTreeTemplate.description': localize('nz-tree-select.nzTreeTemplate.description', 'Custom Nodes'),
'nz-tree-select.nzVirtualHeight.description': localize('nz-tree-select.nzVirtualHeight.description', 'The height of virtual scroll'),
'nz-tree-select.nzVirtualItemSize.description': localize('nz-tree-select.nzVirtualItemSize.description', 'The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api)'),
'nz-tree-select.nzVirtualMaxBufferPx.description': localize('nz-tree-select.nzVirtualMaxBufferPx.description', 'The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api)'),
'nz-tree-select.nzVirtualMinBufferPx.description': localize('nz-tree-select.nzVirtualMinBufferPx.description', 'The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api)'),
'nz-tree-select.nzBackdrop.description': localize('nz-tree-select.nzBackdrop.description', 'whether or not the overlay should attach a backdrop'),
'nz-tree-select.nzExpandChange.description': localize('nz-tree-select.nzExpandChange.description', 'Callback function for when a treeNode is expanded or collapsed'),
'nz-tree-select.ngModel.description': localize('nz-tree-select.ngModel.description', ' '),
'nz-tree-select.ngModelChange.description': localize('nz-tree-select.ngModelChange.description', ' '),
'nz-tree-select.formControlName.description': localize('nz-tree-select.formControlName.description', ' '),
'nz-tree-select.name.description': localize('nz-tree-select.name.description', ' '),
'nz-tree-view.title': localize('nz-tree-view.title', 'Tree View'),
'nz-tree-view.whenToUse': localize('nz-tree-view.whenToUse', 'More basic Tree component, allowing each of its parts to be defined in the template, and state to be managed manually.\nWith better performance and customizability.'),
'nz-tree-view.description': localize('nz-tree-view.description', 'When To Use'),
'nz-tree-view.nzTreeControl.description': localize('nz-tree-view.nzTreeControl.description', 'The tree controller'),
'nz-tree-view.nzDataSource.description': localize('nz-tree-view.nzDataSource.description', 'The data array to render'),
'nz-tree-view.nzDirectoryTree.description': localize('nz-tree-view.nzDirectoryTree.description', 'Whether nodes are displayed as directory style'),
'nz-tree-view.nzBlockNode.description': localize('nz-tree-view.nzBlockNode.description', 'Whether tree nodes fill remaining horizontal space'),
'nz-tree-virtual-scroll-view.title': localize('nz-tree-virtual-scroll-view.title', 'Tree View'),
'nz-tree-virtual-scroll-view.whenToUse': localize('nz-tree-virtual-scroll-view.whenToUse', 'More basic Tree component, allowing each of its parts to be defined in the template, and state to be managed manually.\nWith better performance and customizability.'),
'nz-tree-virtual-scroll-view.description': localize('nz-tree-virtual-scroll-view.description', 'The virtual scroll tree view, which can be accessed from\nthe [CdkVirtualScrollViewport](https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport) instance through\nthe `virtualScrollViewport` member of the component instance.'),
'nz-tree-virtual-scroll-view.nzTreeControl.description': localize('nz-tree-virtual-scroll-view.nzTreeControl.description', 'The tree controller'),
'nz-tree-virtual-scroll-view.nzDataSource.description': localize('nz-tree-virtual-scroll-view.nzDataSource.description', 'The data array to render'),
'nz-tree-virtual-scroll-view.nzDirectoryTree.description': localize('nz-tree-virtual-scroll-view.nzDirectoryTree.description', 'Whether nodes are displayed as directory style'),
'nz-tree-virtual-scroll-view.nzBlockNode.description': localize('nz-tree-virtual-scroll-view.nzBlockNode.description', 'Whether tree nodes fill remaining horizontal space'),
'nz-tree-virtual-scroll-view.nzItemSize.description': localize('nz-tree-virtual-scroll-view.nzItemSize.description', 'The size of nodes in the tree (in pixels)'),
'nz-tree-virtual-scroll-view.nzMinBufferPx.description': localize('nz-tree-virtual-scroll-view.nzMinBufferPx.description', 'The minimum amount of buffer rendered allowed outside the viewport (in pixels)'),
'nz-tree-virtual-scroll-view.nzMaxBufferPx.description': localize('nz-tree-virtual-scroll-view.nzMaxBufferPx.description', 'The amount of buffer required for rendering new nodes (in pixels)'),
'nzTreeNodeDef.title': localize('nzTreeNodeDef.title', 'Tree View'),
'nzTreeNodeDef.whenToUse': localize('nzTreeNodeDef.whenToUse', 'More basic Tree component, allowing each of its parts to be defined in the template, and state to be managed manually.\nWith better performance and customizability.'),
'nzTreeNodeDef.description': localize('nzTreeNodeDef.description', 'Directive to define `nz-tree-node`.'),
'nzTreeNodeDef.nzTreeNodeDefWhen.description': localize('nzTreeNodeDef.nzTreeNodeDefWhen.description', 'A matching function which indicates whether inputted node should be used. It matches the very first node that makes this function return `true`. If no nodes that makes this function return `true`, the node which does not define this function would be matched instead.'),
'nz-tree-node.title': localize('nz-tree-node.title', 'Tree View'),
'nz-tree-node.whenToUse': localize('nz-tree-node.whenToUse', 'More basic Tree component, allowing each of its parts to be defined in the template, and state to be managed manually.\nWith better performance and customizability.'),
'nz-tree-node.description': localize('nz-tree-node.description', 'The tree node container component, which needs to be defined by the `nzTreeNodeDef` directive.'),
'nz-tree-node.nzTreeNodeToggleRecursive.description': localize('nz-tree-node.nzTreeNodeToggleRecursive.description', 'Is it recursively expand / collapse'),
'nzTreeNodePadding.title': localize('nzTreeNodePadding.title', 'Tree View'),
'nzTreeNodePadding.whenToUse': localize('nzTreeNodePadding.whenToUse', 'More basic Tree component, allowing each of its parts to be defined in the template, and state to be managed manually.\nWith better performance and customizability.'),
'nzTreeNodePadding.description': localize('nzTreeNodePadding.description', 'Show node indentation by adding `padding` **Best Performance**.'),
'nzTreeNodePadding.nzTreeNodeToggleRecursive.description': localize('nzTreeNodePadding.nzTreeNodeToggleRecursive.description', 'Is it recursively expand / collapse'),
'nzTreeNodeIndentLine.title': localize('nzTreeNodeIndentLine.title', 'Tree View'),
'nzTreeNodeIndentLine.whenToUse': localize('nzTreeNodeIndentLine.whenToUse', 'More basic Tree component, allowing each of its parts to be defined in the template, and state to be managed manually.\nWith better performance and customizability.'),
'nzTreeNodeIndentLine.description': localize('nzTreeNodeIndentLine.description', 'Show node indentation by adding indent lines.'),
'nzTreeNodeIndentLine.nzTreeNodeToggleRecursive.description': localize('nzTreeNodeIndentLine.nzTreeNodeToggleRecursive.description', 'Is it recursively expand / collapse'),
'nz-tree-node-toggle.title': localize('nz-tree-node-toggle.title', 'Tree View'),
'nz-tree-node-toggle.whenToUse': localize('nz-tree-node-toggle.whenToUse', 'More basic Tree component, allowing each of its parts to be defined in the template, and state to be managed manually.\nWith better performance and customizability.'),
'nz-tree-node-toggle.description': localize('nz-tree-node-toggle.description', 'A toggle which is used to expand / collapse the node.'),
'nz-tree-node-toggle.nzTreeNodeToggleRecursive.description': localize('nz-tree-node-toggle.nzTreeNodeToggleRecursive.description', 'Is it recursively expand / collapse'),
'nz-tree-node-option.title': localize('nz-tree-node-option.title', 'Tree View'),
'nz-tree-node-option.whenToUse': localize('nz-tree-node-option.whenToUse', 'More basic Tree component, allowing each of its parts to be defined in the template, and state to be managed manually.\nWith better performance and customizability.'),
'nz-tree-node-option.description': localize('nz-tree-node-option.description', 'Define the selectable feature of a node.'),
'nz-tree-node-option.nzSelected.description': localize('nz-tree-node-option.nzSelected.description', 'Whether the option is selected'),
'nz-tree-node-option.nzDisabled.description': localize('nz-tree-node-option.nzDisabled.description', 'Whether the option is disabled'),
'nz-tree-node-option.nzClick.description': localize('nz-tree-node-option.nzClick.description', 'Event on click'),
'nz-tree-node-checkbox.title': localize('nz-tree-node-checkbox.title', 'Tree View'),
'nz-tree-node-checkbox.whenToUse': localize('nz-tree-node-checkbox.whenToUse', 'More basic Tree component, allowing each of its parts to be defined in the template, and state to be managed manually.\nWith better performance and customizability.'),
'nz-tree-node-checkbox.description': localize('nz-tree-node-checkbox.description', 'Define the checkbox feature of a node.'),
'nz-tree-node-checkbox.nzChecked.description': localize('nz-tree-node-checkbox.nzChecked.description', 'Whether the checkbox is checked'),
'nz-tree-node-checkbox.nzDisabled.description': localize('nz-tree-node-checkbox.nzDisabled.description', 'Whether the checkbox is disabled'),
'nz-tree-node-checkbox.nzIndeterminate.description': localize('nz-tree-node-checkbox.nzIndeterminate.description', 'Whether the checkbox is indeterminate'),
'nz-tree-node-checkbox.nzClick.description': localize('nz-tree-node-checkbox.nzClick.description', 'Event on click'),
'nz-typography.title': localize('nz-typography.title', 'Typography'),
'nz-typography.whenToUse': localize('nz-typography.whenToUse', '- When need to display title or paragraph contents in Articles/Blogs/Notes.\n- When you need copyable/editable/ellipsis texts.'),
'nz-typography.description': localize('nz-typography.description', 'Basic text writing, including headings, body text, lists, and more.'),
'nz-typography.nzContent.description': localize('nz-typography.nzContent.description', 'Component content'),
'nz-typography.nzCopyable.description': localize('nz-typography.nzCopyable.description', 'Can copy, require use `[nzContent]`'),
'nz-typography.nzEditable.description': localize('nz-typography.nzEditable.description', 'Editable, require use `[nzContent]`'),
'nz-typography.nzCopyIcons.description': localize('nz-typography.nzCopyIcons.description', 'Custom copy icons'),
'nz-typography.nzCopyTooltips.description': localize('nz-typography.nzCopyTooltips.description', 'Custom tooltips text, hide when it is `null`'),
'nz-typography.nzEditIcon.description': localize('nz-typography.nzEditIcon.description', 'Custom edit icon'),
'nz-typography.nzEditTooltip.description': localize('nz-typography.nzEditTooltip.description', 'Custom tooltip text, hide when it is `null`'),
'nz-typography.nzEllipsis.description': localize('nz-typography.nzEllipsis.description', 'Display ellipsis when overflow, require use `[nzContent]` when dynamic content'),
'nz-typography.nzSuffix.description': localize('nz-typography.nzSuffix.description', 'The text suffix when used `nzEllipsis`'),
'nz-typography.nzCopyText.description': localize('nz-typography.nzCopyText.description', 'Customize the copy text'),
'nz-typography.nzDisabled.description': localize('nz-typography.nzDisabled.description', 'Disable content'),
'nz-typography.nzExpandable.description': localize('nz-typography.nzExpandable.description', 'Expandable when ellipsis'),
'nz-typography.nzEllipsisRows.description': localize('nz-typography.nzEllipsisRows.description', 'Line number'),
'nz-typography.nzType.description': localize('nz-typography.nzType.description', 'Content type'),
'nz-typography.nzContentChange.description': localize('nz-typography.nzContentChange.description', 'Trigger when user edit the content'),
'nz-typography.nzExpandChange.description': localize('nz-typography.nzExpandChange.description', 'Trigger when user expanded the content'),
'nz-typography.nzOnEllipsis.description': localize('nz-typography.nzOnEllipsis.description', 'Trigger when ellipsis status changed'),
'nz-upload.title': localize('nz-upload.title', 'Upload'),
'nz-upload.whenToUse': localize('nz-upload.whenToUse', 'Uploading is publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.'),
'nz-upload.description': localize('nz-upload.description', 'Upload file by selecting or dragging.'),
'nz-upload.nzAccept.description': localize('nz-upload.nzAccept.description', 'File types that can be accepted. See [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)'),
'nz-upload.nzAction.description': localize('nz-upload.nzAction.description', 'Required. Uploading URL'),
'nz-upload.nzDirectory.description': localize('nz-upload.nzDirectory.description', 'support uploading the whole directory ([caniuse](https://caniuse.com/#feat=input-file-directory))'),
'nz-upload.nzBeforeUpload.description': localize('nz-upload.nzBeforeUpload.description', 'Hook function, which will be executed before uploading. Uploading will be stopped with `false` or an Observable. **Warning： this function is not supported in IE9**. NOTICE: Must use `=>` to define the method.'),
'nz-upload.nzCustomRequest.description': localize('nz-upload.nzCustomRequest.description', 'Override for the default XHR behavior allowing for additional customization and the ability to implement your own XMLHttpRequest. NOTICE: Must use `=>` to define the method.'),
'nz-upload.nzData.description': localize('nz-upload.nzData.description', 'Uploading params or function which can return uploading params. NOTICE: Must use `=>` to define the method.'),
'nz-upload.nzDisabled.description': localize('nz-upload.nzDisabled.description', 'disable upload button'),
'nz-upload.nzFileList.description': localize('nz-upload.nzFileList.description', 'List of files, two-way data-binding'),
'nz-upload.nzLimit.description': localize('nz-upload.nzLimit.description', 'limit single upload count when `nzMultiple` has opened. `0` unlimited'),
'nz-upload.nzSize.description': localize('nz-upload.nzSize.description', 'limit file size (KB). `0` unlimited'),
'nz-upload.nzFileType.description': localize('nz-upload.nzFileType.description', 'limit file type, e.g: `image/png,image/jpeg,image/gif,image/bmp`'),
'nz-upload.nzFilter.description': localize('nz-upload.nzFilter.description', 'Custom filter when choosed file'),
'nz-upload.nzHeaders.description': localize('nz-upload.nzHeaders.description', 'Set request headers, valid above IE10. NOTICE: Must use `=>` to define the method.'),
'nz-upload.nzListType.description': localize('nz-upload.nzListType.description', 'Built-in stylesheets, support for three types: `text`, `picture` or `picture-card`'),
'nz-upload.nzMultiple.description': localize('nz-upload.nzMultiple.description', 'Whether to support selected multiple files. `IE10+` supported. You can select multiple files with CTRL holding down while multiple is set to be true'),
'nz-upload.nzName.description': localize('nz-upload.nzName.description', 'The name of the uploading file'),
'nz-upload.nzShowUploadList.description': localize('nz-upload.nzShowUploadList.description', 'Whether to show the default upload list, could be an object to specify `showPreviewIcon`, `showRemoveIcon` and `showDownloadIcon` individually'),
'nz-upload.nzShowButton.description': localize('nz-upload.nzShowButton.description', 'Show upload button'),
'nz-upload.nzWithCredentials.description': localize('nz-upload.nzWithCredentials.description', 'ajax upload with cookie sent'),
'nz-upload.nzOpenFileDialogOnClick.description': localize('nz-upload.nzOpenFileDialogOnClick.description', 'click open file dialog'),
'nz-upload.nzPreview.description': localize('nz-upload.nzPreview.description', 'A callback function will be executed when the file link or preview icon is clicked. NOTICE: Must use `=>` to define the method.'),
'nz-upload.nzPreviewFile.description': localize('nz-upload.nzPreviewFile.description', 'Customize preview file logic. NOTICE: Must use `=>` to define the method.'),
'nz-upload.nzPreviewIsImage.description': localize('nz-upload.nzPreviewIsImage.description', 'Customize the preview file is an image, generally used when the image URL is in a non-standard format. NOTICE: Must use `=>` to define the method.'),
'nz-upload.nzRemove.description': localize('nz-upload.nzRemove.description', 'A callback function will be executed when the removing file button is clicked, remove event will be prevented when the return value is `false` or an Observable. NOTICE: Must use `=>` to define the method.'),
'nz-upload.nzChange.description': localize('nz-upload.nzChange.description', 'A callback function, can be executed when uploading state is changing'),
'nz-upload.nzDownload.description': localize('nz-upload.nzDownload.description', 'Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB.'),
'nz-upload.nzTransformFile.description': localize('nz-upload.nzTransformFile.description', 'Customize transform file before request'),
'nz-upload.nzIconRender.description': localize('nz-upload.nzIconRender.description', 'Custom show icon'),
'nz-upload.nzFileListRender.description': localize('nz-upload.nzFileListRender.description', 'Custom file list'),
'auto-focus.title': localize('auto-focus.title', 'Auto focus'),
'auto-focus.whenToUse': localize('auto-focus.whenToUse', ' '),
'auto-focus.description': localize('auto-focus.description', 'Allows to focus HTML-element right after its appearance, By default, it will take effect for `input` and `textarea` with `[autofocus="autofocus"]`.'),
'auto-focus.enabled.description': localize('auto-focus.enabled.description', 'Whether enabled of auto focus'),
'auto-focus.delay.description': localize('auto-focus.delay.description', 'Delay of the focus (unit: ms)'),
'avatar-list.title': localize('avatar-list.title', 'AvatarList'),
'avatar-list.whenToUse': localize('avatar-list.whenToUse', ' '),
'avatar-list.description': localize('avatar-list.description', 'A list of user\'s avatar for project or group member list frequently. If a large or small avatar-list is desired, set the `size` property to either `large` or `small` and `mini` respectively. Omit the `size` property for a avatar-list with the default size.'),
'avatar-list.size.description': localize('avatar-list.size.description', 'size of list'),
'avatar-list.maxLength.description': localize('avatar-list.maxLength.description', 'max items to show'),
'avatar-list.excessItemsStyle.description': localize('avatar-list.excessItemsStyle.description', 'the excess item style'),
'avatar-list-item.title': localize('avatar-list-item.title', 'AvatarList'),
'avatar-list-item.whenToUse': localize('avatar-list-item.whenToUse', ' '),
'avatar-list-item.description': localize('avatar-list-item.description', 'A list of user\'s avatar for project or group member list frequently. If a large or small avatar-list is desired, set the `size` property to either `large` or `small` and `mini` respectively. Omit the `size` property for a avatar-list with the default size.'),
'avatar-list-item.tips.description': localize('avatar-list-item.tips.description', 'title tips for avatar item'),
'avatar-list-item.src.description': localize('avatar-list-item.src.description', 'the address of the image for an image avatar'),
'avatar-list-item.text.description': localize('avatar-list-item.text.description', 'text for avatar item'),
'avatar-list-item.icon.description': localize('avatar-list-item.icon.description', 'icon for avatar item'),
'count-down.title': localize('count-down.title', 'Count down'),
'count-down.whenToUse': localize('count-down.whenToUse', ' '),
'count-down.description': localize('count-down.description', 'The countdown component depends on [ngx-countdown](https://github.com/cipchk/ngx-countdown).'),
'count-down.target.description': localize('count-down.target.description', 'Target time, `number` means seconds'),
'count-down.config.description': localize('count-down.config.description', '[Config](https://github.com/cipchk/ngx-countdown#countdownconfig) paraments'),
'count-down.event.description': localize('count-down.event.description', 'Event notification'),
'extend.title': localize('extend.title', 'Data Range'),
'extend.whenToUse': localize('extend.whenToUse', ' '),
'extend.description': localize('extend.description', 'It needs to be used with [nz-range-picker](https://ng.ant.design/components/date-picker/zh#nz-range-picker), for example:'),
'extend.ngModelEnd.description': localize('extend.ngModelEnd.description', 'End date, start and end values at the same time'),
'extend.shortcut.description': localize('extend.shortcut.description', 'Set shortcuts'),
'down-file.title': localize('down-file.title', 'Download file'),
'down-file.whenToUse': localize('down-file.whenToUse', ' '),
'down-file.description': localize('down-file.description', 'A file download based on `blob`.'),
'down-file.http-data.description': localize('down-file.http-data.description', 'Parameter of request'),
'down-file.http-body.description': localize('down-file.http-body.description', 'Body of request'),
'down-file.http-method.description': localize('down-file.http-method.description', 'Method of request'),
'down-file.http-url.description': localize('down-file.http-url.description', 'Url of request'),
'down-file.file-name.description': localize('down-file.file-name.description', 'Specify a file name'),
'down-file.pre.description': localize('down-file.pre.description', 'Callback of download'),
'down-file.success.description': localize('down-file.success.description', 'Success callback'),
'down-file.error.description': localize('down-file.error.description', 'Error callback'),
'ellipsis.title': localize('ellipsis.title', 'Ellipsis'),
'ellipsis.whenToUse': localize('ellipsis.whenToUse', ' '),
'ellipsis.description': localize('ellipsis.description', 'When the text is too long, the Ellipsis automatically shortens it according to its length or the maximum number of lines.'),
'ellipsis.tooltip.description': localize('ellipsis.tooltip.description', 'tooltip for showing the full text content when hovering over'),
'ellipsis.length.description': localize('ellipsis.length.description', 'maximum number of characters in the text before being truncated'),
'ellipsis.lines.description': localize('ellipsis.lines.description', 'maximum number of rows in the text before being truncated'),
'ellipsis.fullWidthRecognition.description': localize('ellipsis.fullWidthRecognition.description', 'whether consider full-width character length as 2 when calculate string length'),
'ellipsis.tail.description': localize('ellipsis.tail.description', 'specify overflow tail'),
'error-collect.title': localize('error-collect.title', 'Error Collect'),
'error-collect.whenToUse': localize('error-collect.whenToUse', ' '),
'error-collect.description': localize('error-collect.description', 'A simple form exception messages collector that jump to element location via click icon; it must be a standard `form`.'),
'error-collect.freq.description': localize('error-collect.freq.description', 'Monitor frequency, unit is milliseconds'),
'error-collect.offsetTop.description': localize('error-collect.offsetTop.description', 'Top offset, unit is `px`'),
'exception.title': localize('exception.title', 'Exception'),
'exception.whenToUse': localize('exception.whenToUse', ' '),
'exception.description': localize('exception.description', 'Exceptions page is used to provide feedback on specific abnormal state. Usually, it contains an explanation of the error status, and provides users with suggestions or operations, to prevent users from feeling lost and confused.'),
'exception.type.description': localize('exception.type.description', 'type of exception, the corresponding default `title`, `desc`, `img` will be given if set, which can be overridden by explicit setting of `title`, `desc`, `img`'),
'exception.title.description': localize('exception.title.description', 'title'),
'exception.desc.description': localize('exception.desc.description', 'supplementary description'),
'exception.img.description': localize('exception.img.description', 'the url of background image'),
'exception.backRouterLink.description': localize('exception.backRouterLink.description', 'Back of router link'),
'exception.ng-content.description': localize('exception.ng-content.description', 'suggested operations, a default \'Home\' link will show if not set'),
'footer-toolbar.title': localize('footer-toolbar.title', 'FooterToolbar'),
'footer-toolbar.whenToUse': localize('footer-toolbar.whenToUse', ' '),
'footer-toolbar.description': localize('footer-toolbar.description', 'A toolbar fixed at the bottom.'),
'footer-toolbar.ng-content.description': localize('footer-toolbar.ng-content.description', 'toolbar content, align to the right'),
'footer-toolbar.errorCollect.description': localize('footer-toolbar.errorCollect.description', 'Whether `error-collect`, make sure to wrap inside the `<form>` element'),
'footer-toolbar.extra.description': localize('footer-toolbar.extra.description', 'extra information, align to the left'),
'full-content.title': localize('full-content.title', 'Full Screen Workspace'),
'full-content.whenToUse': localize('full-content.whenToUse', ' '),
'full-content.description': localize('full-content.description', 'Often used for tables with scroll bars, a simple [demo](https://ng-alain.surge.sh/#/delon/st)。'),
'full-content.fullscreen.description': localize('full-content.fullscreen.description', 'Whether full screen (not including top, sidebar area)'),
'full-content.hideTitle.description': localize('full-content.hideTitle.description', 'Hide title when `fullscreen` is true'),
'full-content.padding.description': localize('full-content.padding.description', 'Padding of work area'),
'full-toggle.title': localize('full-toggle.title', 'Full Screen Workspace'),
'full-toggle.whenToUse': localize('full-toggle.whenToUse', ' '),
'full-toggle.description': localize('full-toggle.description', 'Switch whether it is full screen.'),
'global-footer.title': localize('global-footer.title', 'Global footer'),
'global-footer.whenToUse': localize('global-footer.whenToUse', ' '),
'global-footer.description': localize('global-footer.description', 'The footer is part of the global navigation as a supplement to the top navigation.'),
'global-footer.links.description': localize('global-footer.links.description', 'Link data'),
'global-footer.copyright.description': localize('global-footer.copyright.description', 'Copyright Information'),
'global-footer.title.description': localize('global-footer.title.description', 'Title'),
'global-footer.href.description': localize('global-footer.href.description', 'Routing link'),
'global-footer.blankTarget.description': localize('global-footer.blankTarget.description', 'Whether to open a new window'),
'global-footer-item.title': localize('global-footer-item.title', 'Global footer'),
'global-footer-item.whenToUse': localize('global-footer-item.whenToUse', ' '),
'global-footer-item.description': localize('global-footer-item.description', 'The footer is part of the global navigation as a supplement to the top navigation.'),
'global-footer-item.ng-content.description': localize('global-footer-item.ng-content.description', 'Title'),
'global-footer-item.href.description': localize('global-footer-item.href.description', 'Routing link'),
'global-footer-item.blankTarget.description': localize('global-footer-item.blankTarget.description', 'Whether to open a new window'),
'let.title': localize('let.title', 'Let'),
'let.whenToUse': localize('let.whenToUse', ' '),
'let.description': localize('let.description', 'Allows to reuse computed value in several places in template to avoid recalculations of getters or many `async` pipes.'),
'let.let.description': localize('let.let.description', 'Expression'),
'media.title': localize('media.title', 'HTML5 Media'),
'media.whenToUse': localize('media.whenToUse', ' '),
'media.description': localize('media.description', 'HTML5 player based on [plyr](https://github.com/sampotts/plyr).'),
'media.type.description': localize('media.type.description', 'Media type'),
'media.source.description': localize('media.source.description', 'Source of the media'),
'media.options.description': localize('media.options.description', 'Source options of the media, please refer to [plyr options](https://github.com/sampotts/plyr#options)'),
'media.delay.description': localize('media.delay.description', 'Delay init plyr player, unit: ms'),
'media.ready.description': localize('media.ready.description', 'Ready callback'),
'notice-icon.title': localize('notice-icon.title', 'Notification menu'),
'notice-icon.whenToUse': localize('notice-icon.whenToUse', ' '),
'notice-icon.description': localize('notice-icon.description', 'Used on the navigation toolbar as a unified notification center for the entire product.'),
'notice-icon.data.description': localize('notice-icon.data.description', 'Data'),
'notice-icon.count.description': localize('notice-icon.count.description', 'Total number of messages on the icon'),
'notice-icon.loading.description': localize('notice-icon.loading.description', 'Pop up card loading status'),
'notice-icon.centered.description': localize('notice-icon.centered.description', 'Whether the tab is centered'),
'notice-icon.select.description': localize('notice-icon.select.description', 'Click the callback of the list item'),
'notice-icon.clear.description': localize('notice-icon.clear.description', 'Callback for clicking the clear button'),
'notice-icon.popoverVisible.description': localize('notice-icon.popoverVisible.description', 'Manual control of Popover display'),
'notice-icon.popoverVisibleChange.description': localize('notice-icon.popoverVisibleChange.description', 'Popover callback'),
'notice-icon.btnClass.description': localize('notice-icon.btnClass.description', 'Class of the button'),
'notice-icon.btnIconClass.description': localize('notice-icon.btnIconClass.description', 'Class of the icon in button'),
'observeSize.title': localize('observeSize.title', 'Observers'),
'observeSize.whenToUse': localize('observeSize.whenToUse', ' '),
'observeSize.description': localize('observeSize.description', 'Watch the DOM size change.'),
'observeSize.observeSize.description': localize('observeSize.observeSize.description', 'Event'),
'page-header.title': localize('page-header.title', 'Page Header'),
'page-header.whenToUse': localize('page-header.whenToUse', ' '),
'page-header.description': localize('page-header.description', 'The page header is used to declare the subject of the page and contains the most important information that the user is concerned about, so that the user can quickly understand what the current page and functions.'),
'page-header.title.description': localize('page-header.title.description', 'Title of the page'),
'page-header.autoTitle.description': localize('page-header.autoTitle.description', 'Whether to automatically generate the title and locate it from the main menu with the current route'),
'page-header.syncTitle.description': localize('page-header.syncTitle.description', 'Whether to automatically synchronize the title to `TitleService`, `ReuseService`, only valid when `title` is of type `string`'),
'page-header.home.description': localize('page-header.home.description', 'Home page text of the breadcrumb, if empty is specified, it will not be displayed'),
'page-header.homeLink.description': localize('page-header.homeLink.description', 'Home page link of the breadcrumb'),
'page-header.homeI18n.description': localize('page-header.homeI18n.description', 'Home page i18n of the breadcrumb'),
'page-header.autoBreadcrumb.description': localize('page-header.autoBreadcrumb.description', 'Whether to automatically generate navigation, use the current route to locate from the main menu'),
'page-header.recursiveBreadcrumb.description': localize('page-header.recursiveBreadcrumb.description', 'Search automatically upward recursively, if the menu data source contains `/ware`, then `/ware/1` is also regarded as `/ware` item'),
'page-header.loading.description': localize('page-header.loading.description', 'Whether loading'),
'page-header.wide.description': localize('page-header.wide.description', 'Whether wide'),
'page-header.fixed.description': localize('page-header.fixed.description', 'Whether fixed mode'),
'page-header.fixedOffsetTop.description': localize('page-header.fixedOffsetTop.description', 'Fixed offset of the fixed mode'),
'page-header.breadcrumb.description': localize('page-header.breadcrumb.description', 'Custom navigation area'),
'page-header.logo.description': localize('page-header.logo.description', 'Custom LOGO area'),
'page-header.action.description': localize('page-header.action.description', 'Custom action area'),
'page-header.content.description': localize('page-header.content.description', 'Custom content area'),
'page-header.extra.description': localize('page-header.extra.description', 'Customize extra information area'),
'page-header.tab.description': localize('page-header.tab.description', 'Custom tab area'),
'pdf.title': localize('pdf.title', 'Pdf'),
'pdf.whenToUse': localize('pdf.whenToUse', ' '),
'pdf.description': localize('pdf.description', 'Pdf view based on [pdf.js](https://mozilla.github.io/pdf.js/).'),
'pdf.src.description': localize('pdf.src.description', 'Specify path of the pdf'),
'pdf.pi.description': localize('pdf.pi.description', 'Current page'),
'pdf.showAll.description': localize('pdf.showAll.description', 'Whether to show all pages'),
'pdf.renderText.description': localize('pdf.renderText.description', 'Enable text rendering, allows to select text'),
'pdf.textLayerMode.description': localize('pdf.textLayerMode.description', 'Text rendering mode'),
'pdf.showBorders.description': localize('pdf.showBorders.description', 'Show page borders'),
'pdf.stickToPage.description': localize('pdf.stickToPage.description', 'Sticks view to the page'),
'pdf.originalSize.description': localize('pdf.originalSize.description', 'Control document display size, `true` size will be as same as original document, `false` size will be as same as container block'),
'pdf.fitToPage.description': localize('pdf.fitToPage.description', 'Works in combination with `originalSize`. You can show your document in original size, and make sure that it\'s not bigger then container block.'),
'pdf.zoom.description': localize('pdf.zoom.description', 'Zoom pdf'),
'pdf.zoomScale.description': localize('pdf.zoomScale.description', 'Defines how the Zoom scale is computed'),
'pdf.rotation.description': localize('pdf.rotation.description', 'Rotate PDF, Allowed step is 90 degree, ex. 0, 90, 180'),
'pdf.autoReSize.description': localize('pdf.autoReSize.description', 'Turn on or off auto resize'),
'pdf.externalLinkTarget.description': localize('pdf.externalLinkTarget.description', 'Link target of the external'),
'pdf.delay.description': localize('pdf.delay.description', 'Delayed rendering, unit: ms'),
'pdf.change.description': localize('pdf.change.description', 'change event'),
'qr.title': localize('qr.title', 'QR'),
'qr.whenToUse': localize('qr.whenToUse', ' '),
'qr.description': localize('qr.description', 'Generate a QR code based on [qrious](https://github.com/neocotic/qrious).'),
'qr.value.description': localize('qr.value.description', 'Value encoded within the QR code'),
'qr.background.description': localize('qr.background.description', 'Background colour of the QR code'),
'qr.backgroundAlpha.description': localize('qr.backgroundAlpha.description', 'Background alpha of the QR code'),
'qr.foreground.description': localize('qr.foreground.description', 'Foreground colour of the QR code'),
'qr.foregroundAlpha.description': localize('qr.foregroundAlpha.description', 'Foreground alpha of the QR code'),
'qr.level.description': localize('qr.level.description', 'Error correction level of the QR code'),
'qr.mime.description': localize('qr.mime.description', 'MIME type used to render the image for the QR code'),
'qr.padding.description': localize('qr.padding.description', 'Padding for the QR code (pixels)'),
'qr.size.description': localize('qr.size.description', 'Size of the QR code (pixels)'),
'qr.delay.description': localize('qr.delay.description', 'Delayed rendering, unit: ms'),
'qr.change.description': localize('qr.change.description', 'change event'),
'quick-menu.title': localize('quick-menu.title', 'Quick Menu'),
'quick-menu.whenToUse': localize('quick-menu.whenToUse', ' '),
'quick-menu.description': localize('quick-menu.description', 'Quick menu for the implicit auxiliary list on the right.'),
'quick-menu.icon.description': localize('quick-menu.icon.description', 'Icon for the quick menu'),
'quick-menu.top.description': localize('quick-menu.top.description', 'Icon from top'),
'quick-menu.width.description': localize('quick-menu.width.description', 'Width after opening'),
'quick-menu.bgColor.description': localize('quick-menu.bgColor.description', 'Background for the quick menu'),
'quick-menu.borderColor.description': localize('quick-menu.borderColor.description', 'Border for the quick menu'),
'quick-menu.expand.description': localize('quick-menu.expand.description', 'Current expand status, double binding'),
'quick-menu.expandChange.description': localize('quick-menu.expandChange.description', 'Expand status change callback'),
'result.title': localize('result.title', 'Result'),
'result.whenToUse': localize('result.whenToUse', ' '),
'result.description': localize('result.description', 'Used to feedback the processing results of a series of tasks performed by the user.'),
'result.type.description': localize('result.type.description', 'Types, different types come with corresponding icons'),
'result.title.description': localize('result.title.description', 'Title for the result'),
'result.description.description': localize('result.description.description', 'Description for the result'),
'result.extra.description': localize('result.extra.description', 'Supplemental information, with default gray background'),
'result.ng-content.description': localize('result.ng-content.description', 'Operation suggestions, Recommended to place jump links, button groups, etc.'),
'reuse-tab.title': localize('reuse-tab.title', 'Reuse Route Tab'),
'reuse-tab.whenToUse': localize('reuse-tab.whenToUse', ' '),
'reuse-tab.description': localize('reuse-tab.description', 'Reuse route tab are extremely common for admin interfaces, and the problem of component data is not lost when switching routes.'),
'reuse-tab.i18n.description': localize('reuse-tab.i18n.description', 'Context Menu internationalization, support HTML'),
'reuse-tab.mode.description': localize('reuse-tab.mode.description', 'Matching Mode'),
'reuse-tab.debug.description': localize('reuse-tab.debug.description', 'Whether Debug mode'),
'reuse-tab.max.description': localize('reuse-tab.max.description', 'Maximum of reuse'),
'reuse-tab.keepingScroll.description': localize('reuse-tab.keepingScroll.description', 'Keep the scrollbar position'),
'reuse-tab.keepingScrollContainer.description': localize('reuse-tab.keepingScrollContainer.description', 'Keep the scroll bar container'),
'reuse-tab.excludes.description': localize('reuse-tab.excludes.description', 'Exclusion rules, limited by `mode=URL`'),
'reuse-tab.allowClose.description': localize('reuse-tab.allowClose.description', 'Whether to allow close tab'),
'reuse-tab.customContextMenu.description': localize('reuse-tab.customContextMenu.description', 'Custom context click menu'),
'reuse-tab.tabBarExtraContent.description': localize('reuse-tab.tabBarExtraContent.description', 'Extra content in tab bar'),
'reuse-tab.tabBarStyle.description': localize('reuse-tab.tabBarStyle.description', 'Tab bar style object'),
'reuse-tab.tabBarGutter.description': localize('reuse-tab.tabBarGutter.description', 'The gap between tabs'),
'reuse-tab.tabType.description': localize('reuse-tab.tabType.description', 'Basic style of tabs'),
'reuse-tab.tabMaxWidth.description': localize('reuse-tab.tabMaxWidth.description', 'The maximum width of each tab, unit: `px`'),
'reuse-tab.routeParamMatchMode.description': localize('reuse-tab.routeParamMatchMode.description', 'Match the pattern when routing parameters are included, for example:`/view/:id`<br> - `strict` Strict mode `/view/1`, `/view/2` Different pages<br> - `loose` Loose mode `/view/1`, `/view/2` Same page and only one tab of component'),
'reuse-tab.disabled.description': localize('reuse-tab.disabled.description', 'Whether to disabled'),
'reuse-tab.titleRender.description': localize('reuse-tab.titleRender.description', 'Custom rendering of the title'),
'reuse-tab.storageState.description': localize('reuse-tab.storageState.description', 'Whether to store the state, keep the last browser state'),
'reuse-tab.canClose.description': localize('reuse-tab.canClose.description', 'A function to determine what should be closed'),
'reuse-tab.close.description': localize('reuse-tab.close.description', 'Close'),
'reuse-tab.change.description': localize('reuse-tab.change.description', 'Callback when switching'),
'reuse-tab.closeOther.description': localize('reuse-tab.closeOther.description', 'Close other tabs'),
'reuse-tab.closeRight.description': localize('reuse-tab.closeRight.description', 'Close tabs to the right'),
'reuse-tab.clear.description': localize('reuse-tab.clear.description', 'Clear tabs'),
'se-container.title': localize('se-container.title', 'Edit'),
'se-container.whenToUse': localize('se-container.whenToUse', ' '),
'se-container.description': localize('se-container.description', 'A higher-order components of the form HTML template. And optimized some details:'),
'se-container.gutter.description': localize('se-container.gutter.description', 'specify the distance between two items, unit is `px`, only `nzLayout:horizontal`'),
'se-container.se-container.description': localize('se-container.se-container.description', 'specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive)'),
'se-container.col.description': localize('se-container.col.description', 'specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive)'),
'se-container.labelWidth.description': localize('se-container.labelWidth.description', 'label text of width, unit is `px`'),
'se-container.nzLayout.description': localize('se-container.nzLayout.description', 'type of layout when `inline` forced size is `compact`'),
'se-container.size.description': localize('se-container.size.description', 'size of edit, forced ingores `error`, `extra`'),
'se-container.firstVisual.description': localize('se-container.firstVisual.description', 'Immediately show validation error message'),
'se-container.ingoreDirty.description': localize('se-container.ingoreDirty.description', 'Whether to ignore the `dirty` check'),
'se-container.line.description': localize('se-container.line.description', 'whether separation line style'),
'se-container.title.description': localize('se-container.title.description', 'Display title'),
'se-container.errors.description': localize('se-container.errors.description', 'Batch modify `se` error value'),
'se-container.noColon.description': localize('se-container.noColon.description', 'Whether to not display : after label text'),
'se.title': localize('se.title', 'Edit'),
'se.whenToUse': localize('se.whenToUse', ' '),
'se.description': localize('se.description', 'A higher-order components of the form HTML template. And optimized some details:'),
'se.col.description': localize('se.col.description', 'specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) (Inherited from `se-container`)'),
'se.label.description': localize('se.label.description', 'Label'),
'se.labelWidth.description': localize('se.labelWidth.description', 'label text of width, unit is `px` (Inherited from `se-container`)'),
'se.hideLabel.description': localize('se.hideLabel.description', 'Whether to hide the current label'),
'se.optional.description': localize('se.optional.description', 'Label optional information'),
'se.optionalHelp.description': localize('se.optionalHelp.description', 'Label optional help'),
'se.optionalHelpColor.description': localize('se.optionalHelpColor.description', 'The background color of label optional help'),
'se.error.description': localize('se.error.description', 'validation error message'),
'se.extra.description': localize('se.extra.description', 'The extra prompt message. It is similar to help.'),
'se.required.description': localize('se.required.description', 'Whether required identifier, if not set, the value is automatically set according to whether the form element has `RequiredValidator` validation'),
'se.controlClass.description': localize('se.controlClass.description', 'Control area classes'),
'se.id.description': localize('se.id.description', 'Custom `id` value of component'),
'se.line.description': localize('se.line.description', 'whether separation line style (Inherited from `se-container`)'),
'se.noColon.description': localize('se.noColon.description', 'Whether to not display : after label text'),
'se-title.title': localize('se-title.title', 'Edit'),
'se-title.whenToUse': localize('se-title.whenToUse', ' '),
'se-title.description': localize('se-title.description', 'Display title.'),
'sg-container.title': localize('sg-container.title', 'Simple Grid'),
'sg-container.whenToUse': localize('sg-container.whenToUse', ' '),
'sg-container.description': localize('sg-container.description', 'A higher-order components of grid systems, that consists of `sg-container` (directive) and `sg` components:'),
'sg-container.gutter.description': localize('sg-container.gutter.description', 'specify the distance between two items, unit is `px`, only `nzLayout:horizontal`'),
'sg-container.sg-container.description': localize('sg-container.sg-container.description', 'specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive)'),
'sg-container.col.description': localize('sg-container.col.description', 'specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive)'),
'sg.title': localize('sg.title', 'Simple Grid'),
'sg.whenToUse': localize('sg.whenToUse', ' '),
'sg.description': localize('sg.description', 'A higher-order components of grid systems, that consists of `sg-container` (directive) and `sg` components:'),
'sg.col.description': localize('sg.col.description', 'specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive)'),
'st.title': localize('st.title', 'Table'),
'st.whenToUse': localize('st.whenToUse', ' '),
'st.description': localize('st.description', '`st` is not creating another table component, but use **configurable** rendering table on base of `nz-table`. this method can satisfy most scenes in admin interfaces, but it\'s easier to rendering table.'),
'st.columns.description': localize('st.columns.description', 'Columns description'),
'st.data.description': localize('st.data.description', 'Data source'),
'st.req.description': localize('st.req.description', 'Http request configuration'),
'st.res.description': localize('st.res.description', 'Http response configuration'),
'st.pi.description': localize('st.pi.description', 'Page index'),
'st.ps.description': localize('st.ps.description', 'Page size, default is `10`'),
'st.total.description': localize('st.total.description', 'To display the total number and range, support custom string template (Three variable names: `total` for total data, `range[0]` and `range[1]` for current data range; **Variable name** must be double curly braces wrapper)'),
'st.page.description': localize('st.page.description', 'Pager configuration'),
'st.noResult.description': localize('st.noResult.description', 'Custom no result content'),
'st.bordered.description': localize('st.bordered.description', 'Whether to show all table borders'),
'st.size.description': localize('st.size.description', 'Size of table'),
'st.widthMode.description': localize('st.widthMode.description', 'Set the table width mode'),
'st.rowClassName.description': localize('st.rowClassName.description', 'Row class name of table'),
'st.clickRowClassName.description': localize('st.clickRowClassName.description', 'Row class name of click the row'),
'st.loading.description': localize('st.loading.description', 'Loading status of table, when specifying `null` is controlled by st'),
'st.loadingIndicator.description': localize('st.loadingIndicator.description', 'The spinning indicator'),
'st.loadingDelay.description': localize('st.loadingDelay.description', 'Specifies a delay in milliseconds for loading state (prevent flush)'),
'st.scroll.description': localize('st.scroll.description', 'Whether table can be scrolled in x/y direction, x or y can be a string that indicates the width and height of table body'),
'st.virtualScroll.description': localize('st.virtualScroll.description', 'Enable virtual scroll mode，work with `[nzScroll]`'),
'st.virtualItemSize.description': localize('st.virtualItemSize.description', 'The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api)'),
'st.virtualMaxBufferPx.description': localize('st.virtualMaxBufferPx.description', 'The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api)'),
'st.virtualMinBufferPx.description': localize('st.virtualMinBufferPx.description', 'The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api)'),
'st.virtualForTrackBy.description': localize('st.virtualForTrackBy.description', 'The TrackByFunction to use for tracking changes.'),
'st.singleSort.description': localize('st.singleSort.description', 'Single sort config<br>If not specified, return: `columnName=ascend'),
'st.multiSort.description': localize('st.multiSort.description', 'Whether to mulit-sort, recommended use in URL data source'),
'st.header.description': localize('st.header.description', 'Table header renderer'),
'st.showHeader.description': localize('st.showHeader.description', 'Whether show the head of the columns of the table'),
'st.footer.description': localize('st.footer.description', 'Table footer renderer'),
'st.bodyHeader.description': localize('st.bodyHeader.description', 'Table extra body renderer in header, generally used to add total rows'),
'st.body.description': localize('st.body.description', 'Request body (only method is POST)'),
'st.widthConfig.description': localize('st.widthConfig.description', 'Set col width can not used with width of STColumn'),
'st.expandRowByClick.description': localize('st.expandRowByClick.description', 'Whether to expand row by clicking anywhere in the whole row'),
'st.expandAccordion.description': localize('st.expandAccordion.description', 'Accordion mode'),
'st.expand.description': localize('st.expand.description', 'Whether current column include expand icon'),
'st.responsive.description': localize('st.responsive.description', 'Whether to turn on responsive'),
'st.responsiveHideHeaderFooter.description': localize('st.responsiveHideHeaderFooter.description', 'Whether to display the header and footer under the small screen'),
'st.resizable.description': localize('st.resizable.description', 'Resize header of the current table, **Multiple headers not supported**'),
'st.change.description': localize('st.change.description', 'Events'),
'st.error.description': localize('st.error.description', 'Error event'),
'st.type.description': localize('st.type.description', 'Type of width mode'),
'st.params.description': localize('st.params.description', 'Request parameters, default to auto append `pi`, `ps` to URL'),
'st.ignoreParamNull.description': localize('st.ignoreParamNull.description', 'Whether to ignore `null` or `unfind` values in parameters'),
'st.method.description': localize('st.method.description', 'Request method'),
'st.headers.description': localize('st.headers.description', 'Request header'),
'st.reName.description': localize('st.reName.description', 'Map name `total`、`list`, could be set like `a.b.c`'),
'st.allInBody.description': localize('st.allInBody.description', 'Whether to request all parameter data into `body` (except `url` itself parameter)'),
'st.lazyLoad.description': localize('st.lazyLoad.description', 'Whether to delay loading data in first render `st` component'),
'st.process.description': localize('st.process.description', 'Data preprocessing'),
'st.front.description': localize('st.front.description', 'Front paging when `data` is `any[]` or `Observable<any[]>`'),
'st.zeroIndexed.description': localize('st.zeroIndexed.description', 'Whether the backend paging uses the `0` base index (only data is url)'),
'st.position.description': localize('st.position.description', 'Specify the position of Pagination'),
'st.placement.description': localize('st.placement.description', 'Specify the direction of Pagination'),
'st.show.description': localize('st.show.description', 'Whether to show pager'),
'st.showSize.description': localize('st.showSize.description', 'Determine whether `ps` can be changed'),
'st.pageSizes.description': localize('st.pageSizes.description', 'Specify the sizeChanger options'),
'st.showQuickJumper.description': localize('st.showQuickJumper.description', 'Determine whether you can jump to pages directly'),
'st.toTop.description': localize('st.toTop.description', 'To top when pager changed'),
'st.toTopOffset.description': localize('st.toTopOffset.description', 'To top offset value'),
'st.itemRender.description': localize('st.itemRender.description', 'To customize Pagination item, same as Pagination'),
'st.simple.description': localize('st.simple.description', 'Whether to use simple mode'),
'st.strictBehavior.description': localize('st.strictBehavior.description', 'Behavior type of `strict`'),
'st.key.description': localize('st.key.description', 'Request parameter name'),
'st.separator.description': localize('st.separator.description', 'Separator between attributes'),
'st.nameSeparator.description': localize('st.nameSeparator.description', 'Column name and state separator'),
'st.arrayParam.description': localize('st.arrayParam.description', 'Whether to pass parameters as an array<br>`true` Indicates the use of `url?sort=name.asc&sort=age.desc`<br>`false` Indicates the use of `url?sort=name.asc-age.desc`'),
'st.keepEmptyKey.description': localize('st.keepEmptyKey.description', 'Whether to keep send empty key<br>`true` send the `key` name anyway<br>`false` don\'t send `key` when not sorting'),
'st.global.description': localize('st.global.description', '**Only global config**, Whether global multi sort mode<br>`true` all `st` defaults multi-sort<br>`false` all `st` non-multiple sorting, just only configurable for rule'),
'st.disabled.description': localize('st.disabled.description', 'Disable resize'),
'st.bounds.description': localize('st.bounds.description', 'Specifies resize boundaries'),
'st.maxWidth.description': localize('st.maxWidth.description', 'Maximum width of resizable elemen'),
'st.minWidth.description': localize('st.minWidth.description', 'Minimum width of resizable element'),
'st.preview.description': localize('st.preview.description', 'Enable preview when resizing'),
'sv-container.title': localize('sv-container.title', 'View'),
'sv-container.whenToUse': localize('sv-container.whenToUse', ' '),
'sv-container.description': localize('sv-container.description', 'Viewing grid system is a higher-order components based on the original [Grid System] (https://ng.ant.design/components/grid/zh) that server for view pages.'),
'sv-container.size.description': localize('sv-container.size.description', 'size of view'),
'sv-container.layout.description': localize('sv-container.layout.description', 'type of layout'),
'sv-container.gutter.description': localize('sv-container.gutter.description', 'specify the distance between two items, unit is `px`'),
'sv-container.col.description': localize('sv-container.col.description', 'specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive)'),
'sv-container.labelWidth.description': localize('sv-container.labelWidth.description', 'label text of width'),
'sv-container.default.description': localize('sv-container.default.description', 'whether default text'),
'sv-container.title.description': localize('sv-container.title.description', 'Display title'),
'sv-container.noColon.description': localize('sv-container.noColon.description', 'Whether to not display : after label text'),
'sv.title': localize('sv.title', 'View'),
'sv.whenToUse': localize('sv.whenToUse', ' '),
'sv.description': localize('sv.description', 'Viewing grid system is a higher-order components based on the original [Grid System] (https://ng.ant.design/components/grid/zh) that server for view pages.'),
'sv.col.description': localize('sv.col.description', 'specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive)'),
'sv.label.description': localize('sv.label.description', 'label of view'),
'sv.unit.description': localize('sv.unit.description', 'unit of view'),
'sv.default.description': localize('sv.default.description', 'whether default text, inherit `sv-container`'),
'sv.type.description': localize('sv.type.description', 'type of view'),
'sv.optional.description': localize('sv.optional.description', 'Label optional information'),
'sv.optionalHelp.description': localize('sv.optionalHelp.description', 'Label optional help'),
'sv.optionalHelpColor.description': localize('sv.optionalHelpColor.description', 'The background color of label optional help'),
'sv.noColon.description': localize('sv.noColon.description', 'Whether to not display : after label text'),
'sv.hideLabel.description': localize('sv.hideLabel.description', 'Whether to hide the current label'),
'sv-title.title': localize('sv-title.title', 'View'),
'sv-title.whenToUse': localize('sv-title.whenToUse', ' '),
'sv-title.description': localize('sv-title.description', 'Display title.'),
'sv-title.prefix.description': localize('sv-title.prefix.description', 'Prefix of value'),
'sv-title.unit.description': localize('sv-title.unit.description', 'Unit of value'),
'sv-title.tooltip.description': localize('sv-title.tooltip.description', 'Tooltip text of value'),
'sv-title.size.description': localize('sv-title.size.description', 'Size of value'),
'sv-value.title': localize('sv-value.title', 'View'),
'sv-value.whenToUse': localize('sv-value.whenToUse', ' '),
'sv-value.description': localize('sv-value.description', '值展示。'),
'sv-value.prefix.description': localize('sv-value.prefix.description', 'Prefix of value'),
'sv-value.unit.description': localize('sv-value.unit.description', 'Unit of value'),
'sv-value.tooltip.description': localize('sv-value.tooltip.description', 'Tooltip text of value'),
'sv-value.size.description': localize('sv-value.size.description', 'Size of value'),
'tag-select.title': localize('tag-select.title', 'Tag Select'),
'tag-select.whenToUse': localize('tag-select.whenToUse', ' '),
'tag-select.description': localize('tag-select.description', 'Increase the label expansion and retraction function.'),
'tag-select.expandable.description': localize('tag-select.expandable.description', 'Whether to enabled'),
'tag-select.change.description': localize('tag-select.change.description', 'Callback'),
'xlsx.title': localize('xlsx.title', 'Excel'),
'xlsx.whenToUse': localize('xlsx.whenToUse', ' '),
'xlsx.description': localize('xlsx.description', 'xlsx directive.'),
'g2-bar.title': localize('g2-bar.title', '柱状图'),
'g2-bar.whenToUse': localize('g2-bar.whenToUse', ' '),
'g2-bar.description': localize('g2-bar.description', '使用垂直的柱子显示类别之间的数值比较。其中一个轴表示需要对比的分类维度，另一个轴代表相应的数值。'),
'g2-bar.repaint.description': localize('g2-bar.repaint.description', '数据再次变更时是否重绘'),
'g2-bar.delay.description': localize('g2-bar.delay.description', '延迟渲染，单位：毫秒'),
'g2-bar.title.description': localize('g2-bar.title.description', '图表标题'),
'g2-bar.color.description': localize('g2-bar.color.description', '图表颜色'),
'g2-bar.padding.description': localize('g2-bar.padding.description', '图表内部间距'),
'g2-bar.height.description': localize('g2-bar.height.description', '图表高度'),
'g2-bar.data.description': localize('g2-bar.data.description', '数据'),
'g2-bar.autoLabel.description': localize('g2-bar.autoLabel.description', '在宽度不足时，自动隐藏 x 轴的 label'),
'g2-bar.interaction.description': localize('g2-bar.interaction.description', '交互类型，none 无 element-active 图形元素，active-region 图表组件，brush 框选，drag-move 移动'),
'g2-bar.theme.description': localize('g2-bar.theme.description', '定制图表主题'),
'g2-bar.clickItem.description': localize('g2-bar.clickItem.description', '点击项回调'),
'g2-bar.ready.description': localize('g2-bar.ready.description', '当G2完成初始化后调用'),
'g2-card.title': localize('g2-card.title', '图表卡片'),
'g2-card.whenToUse': localize('g2-card.whenToUse', ' '),
'g2-card.description': localize('g2-card.description', '图表卡片，用于展示图表的卡片容器，可以方便的配合其它图表套件展示丰富信息。'),
'g2-card.title.description': localize('g2-card.title.description', '卡片标题'),
'g2-card.avatar.description': localize('g2-card.avatar.description', '头像'),
'g2-card.action.description': localize('g2-card.action.description', '卡片操作'),
'g2-card.total.description': localize('g2-card.total.description', '数据总量（支持HTML）'),
'g2-card.footer.description': localize('g2-card.footer.description', '卡片底部'),
'g2-card.contentHeight.description': localize('g2-card.contentHeight.description', '内容区域高度（单位：`px`）'),
'g2-card.bordered.description': localize('g2-card.bordered.description', '是否显示边框'),
'chart-echarts.title': localize('chart-echarts.title', 'ECharts'),
'chart-echarts.whenToUse': localize('chart-echarts.whenToUse', ' '),
'chart-echarts.description': localize('chart-echarts.description', '[ECharts](https://echarts.apache.org/zh/index.html) 一个基于 JavaScript 的开源可视化图表库。使用懒加载 ECharts 脚本，开箱启用。'),
'chart-echarts.width.description': localize('chart-echarts.width.description', '图表宽度'),
'chart-echarts.height.description': localize('chart-echarts.height.description', '图表高度'),
'chart-echarts.option.description': localize('chart-echarts.option.description', '[配置项](https://echarts.apache.org/zh/option.html#title)'),
'chart-echarts.theme.description': localize('chart-echarts.theme.description', '[主题](https://echarts.apache.org/zh/theme-builder.html)配置'),
'chart-echarts.on.description': localize('chart-echarts.on.description', '等同于 ECharts [on](https://echarts.apache.org/zh/api.html#echartsInstance.on)'),
'chart-echarts.events.description': localize('chart-echarts.events.description', '事件回调'),
'g2-custom.title': localize('g2-custom.title', 'Custom Chart'),
'g2-custom.whenToUse': localize('g2-custom.whenToUse', ' '),
'g2-custom.description': localize('g2-custom.description', 'Use `g2-custom` component to package your G2 chart.'),
'g2-custom.delay.description': localize('g2-custom.delay.description', 'Delayed rendering, unit: ms'),
'g2-custom.height.description': localize('g2-custom.height.description', 'Height of chart container'),
'g2-custom.resizeTime.description': localize('g2-custom.resizeTime.description', 'Resize event debounce time'),
'g2-custom.render.description': localize('g2-custom.render.description', 'Render event'),
'g2-custom.resize.description': localize('g2-custom.resize.description', 'Resize event'),
'g2-custom.destroy.description': localize('g2-custom.destroy.description', 'Destroy event'),
'g2-custom.theme.description': localize('g2-custom.theme.description', 'Custom chart theme'),
'g2-gauge.title': localize('g2-gauge.title', '仪表盘'),
'g2-gauge.whenToUse': localize('g2-gauge.whenToUse', ' '),
'g2-gauge.description': localize('g2-gauge.description', '一种进度展示方式，可以更直观的展示当前的进展情况，通常也可表示占比。'),
'g2-gauge.repaint.description': localize('g2-gauge.repaint.description', '数据再次变更时是否重绘'),
'g2-gauge.delay.description': localize('g2-gauge.delay.description', '延迟渲染，单位：毫秒'),
'g2-gauge.title.description': localize('g2-gauge.title.description', '图表标题'),
'g2-gauge.height.description': localize('g2-gauge.height.description', '图表高度'),
'g2-gauge.color.description': localize('g2-gauge.color.description', '图表颜色'),
'g2-gauge.bgColor.description': localize('g2-gauge.bgColor.description', '图表背景色'),
'g2-gauge.percent.description': localize('g2-gauge.percent.description', '进度比例'),
'g2-gauge.padding.description': localize('g2-gauge.padding.description', '内边距'),
'g2-gauge.format.description': localize('g2-gauge.format.description', '坐标轴格式'),
'g2-gauge.theme.description': localize('g2-gauge.theme.description', '定制图表主题'),
'g2-gauge.ready.description': localize('g2-gauge.ready.description', '当G2完成初始化后调用'),
'g2-mini-area.title': localize('g2-mini-area.title', '迷你区域图'),
'g2-mini-area.whenToUse': localize('g2-mini-area.whenToUse', ' '),
'g2-mini-area.description': localize('g2-mini-area.description', '面积图又叫区域图。 它是在折线图的基础之上形成的, 它将折线图中折线与自变量坐标轴之间的区域使用颜色或者纹理填充，这样一个填充区域我们叫做面积，颜色的填充可以更好的突出趋势信息。'),
'g2-mini-area.repaint.description': localize('g2-mini-area.repaint.description', '数据再次变更时是否重绘'),
'g2-mini-area.delay.description': localize('g2-mini-area.delay.description', '延迟渲染，单位：毫秒'),
'g2-mini-area.color.description': localize('g2-mini-area.color.description', '图表颜色'),
'g2-mini-area.borderColor.description': localize('g2-mini-area.borderColor.description', '图表边颜色'),
'g2-mini-area.height.description': localize('g2-mini-area.height.description', '图表高度'),
'g2-mini-area.line.description': localize('g2-mini-area.line.description', '是否显示描边'),
'g2-mini-area.animate.description': localize('g2-mini-area.animate.description', '是否显示动画'),
'g2-mini-area.padding.description': localize('g2-mini-area.padding.description', '图表内部间距'),
'g2-mini-area.xAxis.description': localize('g2-mini-area.xAxis.description', '[x 轴配置](https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc)'),
'g2-mini-area.yAxis.description': localize('g2-mini-area.yAxis.description', '[y 轴配置](https://www.yuque.com/antv/g2-docs/api-chart#ef1eaedc)'),
'g2-mini-area.yTooltipSuffix.description': localize('g2-mini-area.yTooltipSuffix.description', 'y 轴Tooltip后缀，一般指定单位'),
'g2-mini-area.tooltipType.description': localize('g2-mini-area.tooltipType.description', 'Tooltip显示类型'),
'g2-mini-area.data.description': localize('g2-mini-area.data.description', '数据'),
'g2-mini-area.theme.description': localize('g2-mini-area.theme.description', '定制图表主题'),
'g2-mini-area.clickItem.description': localize('g2-mini-area.clickItem.description', '点击项回调'),
'g2-mini-area.ready.description': localize('g2-mini-area.ready.description', '当G2完成初始化后调用'),
'g2-mini-bar.title': localize('g2-mini-bar.title', '迷你柱状图'),
'g2-mini-bar.whenToUse': localize('g2-mini-bar.whenToUse', ' '),
'g2-mini-bar.description': localize('g2-mini-bar.description', '迷你柱状图更适合展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。'),
'g2-mini-bar.repaint.description': localize('g2-mini-bar.repaint.description', '数据再次变更时是否重绘'),
'g2-mini-bar.delay.description': localize('g2-mini-bar.delay.description', '延迟渲染，单位：毫秒'),
'g2-mini-bar.color.description': localize('g2-mini-bar.color.description', '图表颜色'),
'g2-mini-bar.height.description': localize('g2-mini-bar.height.description', '图表高度'),
'g2-mini-bar.yTooltipSuffix.description': localize('g2-mini-bar.yTooltipSuffix.description', 'y 轴Tooltip后缀，一般指定单位'),
'g2-mini-bar.tooltipType.description': localize('g2-mini-bar.tooltipType.description', 'Tooltip显示类型'),
'g2-mini-bar.borderWidth.description': localize('g2-mini-bar.borderWidth.description', '线条粗细'),
'g2-mini-bar.padding.description': localize('g2-mini-bar.padding.description', '图表内部间距'),
'g2-mini-bar.data.description': localize('g2-mini-bar.data.description', '数据'),
'g2-mini-bar.theme.description': localize('g2-mini-bar.theme.description', '定制图表主题'),
'g2-mini-bar.clickItem.description': localize('g2-mini-bar.clickItem.description', '点击项回调'),
'g2-mini-bar.ready.description': localize('g2-mini-bar.ready.description', '当G2完成初始化后调用'),
'g2-mini-progress.title': localize('g2-mini-progress.title', '迷你进度条'),
'g2-mini-progress.whenToUse': localize('g2-mini-progress.whenToUse', ' '),
'g2-mini-progress.description': localize('g2-mini-progress.description', '用于显示跟速度相关图形再适合不过。'),
'g2-mini-progress.target.description': localize('g2-mini-progress.target.description', '目标比例'),
'g2-mini-progress.color.description': localize('g2-mini-progress.color.description', '进度条颜色'),
'g2-mini-progress.strokeWidth.description': localize('g2-mini-progress.strokeWidth.description', '进度条高度'),
'g2-mini-progress.percent.description': localize('g2-mini-progress.percent.description', '进度比例'),
'number-info.title': localize('number-info.title', 'NumberInfo'),
'number-info.whenToUse': localize('number-info.whenToUse', ' '),
'number-info.description': localize('number-info.description', 'Often used in data cards for highlighting the business data.'),
'number-info.title.description': localize('number-info.title.description', 'title'),
'number-info.subTitle.description': localize('number-info.subTitle.description', 'subtitle'),
'number-info.total.description': localize('number-info.total.description', 'total amount'),
'number-info.suffix.description': localize('number-info.suffix.description', 'total amount suffix'),
'number-info.subTotal.description': localize('number-info.subTotal.description', 'total amount of additional information'),
'number-info.status.description': localize('number-info.status.description', 'increase state'),
'number-info.theme.description': localize('number-info.theme.description', 'state style'),
'number-info.gap.description': localize('number-info.gap.description', 'set the spacing (pixels) between numbers and descriptions'),
'g2-pie.title': localize('g2-pie.title', '饼状图'),
'g2-pie.whenToUse': localize('g2-pie.whenToUse', ' '),
'g2-pie.description': localize('g2-pie.description', '用于显示跟速度相关图形再适合不过。'),
'g2-pie.repaint.description': localize('g2-pie.repaint.description', '数据再次变更时是否重绘'),
'g2-pie.delay.description': localize('g2-pie.delay.description', '延迟渲染，单位：毫秒'),
'g2-pie.animate.description': localize('g2-pie.animate.description', '是否显示动画'),
'g2-pie.color.description': localize('g2-pie.color.description', '图表颜色'),
'g2-pie.height.description': localize('g2-pie.height.description', '图表高度'),
'g2-pie.hasLegend.description': localize('g2-pie.hasLegend.description', '是否显示 legend'),
'g2-pie.padding.description': localize('g2-pie.padding.description', '图表内部间距'),
'g2-pie.percent.description': localize('g2-pie.percent.description', '占比'),
'g2-pie.lineWidth.description': localize('g2-pie.lineWidth.description', '边框粗细'),
'g2-pie.inner.description': localize('g2-pie.inner.description', '内部极坐标系的半径'),
'g2-pie.blockMaxWidth.description': localize('g2-pie.blockMaxWidth.description', '多少宽度为块显示'),
'g2-pie.tooltip.description': localize('g2-pie.tooltip.description', '是否显示 tooltip'),
'g2-pie.subTitle.description': localize('g2-pie.subTitle.description', '图表子标题'),
'g2-pie.total.description': localize('g2-pie.total.description', '总量'),
'g2-pie.valueFormat.description': localize('g2-pie.valueFormat.description', 'y轴格式化'),
'g2-pie.data.description': localize('g2-pie.data.description', '数据'),
'g2-pie.colors.description': localize('g2-pie.colors.description', '颜色列表'),
'g2-pie.interaction.description': localize('g2-pie.interaction.description', '交互类型，none 无 element-active 图形元素，active-region 图表组件，brush 框选，drag-move 移动'),
'g2-pie.ratio.description': localize('g2-pie.ratio.description', '百分比配置项'),
'g2-pie.theme.description': localize('g2-pie.theme.description', '定制图表主题'),
'g2-pie.clickItem.description': localize('g2-pie.clickItem.description', '点击项回调'),
'g2-pie.ready.description': localize('g2-pie.ready.description', '当G2完成初始化后调用'),
'g2-radar.title': localize('g2-radar.title', '雷达图'),
'g2-radar.whenToUse': localize('g2-radar.whenToUse', ' '),
'g2-radar.description': localize('g2-radar.description', '雷达图是以相同点开始的轴上表示的三个或更多个定量变量的二维图形的形式显示多变量数据的图形方法。轴的相对位置和角度通常是不知情的。'),
'g2-radar.repaint.description': localize('g2-radar.repaint.description', '数据再次变更时是否重绘'),
'g2-radar.delay.description': localize('g2-radar.delay.description', '延迟渲染，单位：毫秒'),
'g2-radar.title.description': localize('g2-radar.title.description', '图表标题'),
'g2-radar.height.description': localize('g2-radar.height.description', '图表高度'),
'g2-radar.hasLegend.description': localize('g2-radar.hasLegend.description', '是否显示 legend'),
'g2-radar.padding.description': localize('g2-radar.padding.description', '图表内部间距'),
'g2-radar.colors.description': localize('g2-radar.colors.description', '颜色列表'),
'g2-radar.data.description': localize('g2-radar.data.description', '数据'),
'g2-radar.theme.description': localize('g2-radar.theme.description', '定制图表主题'),
'g2-radar.clickItem.description': localize('g2-radar.clickItem.description', '点击项回调'),
'g2-radar.ready.description': localize('g2-radar.ready.description', '当G2完成初始化后调用'),
'g2-single-bar.title': localize('g2-single-bar.title', '单一柱状图'),
'g2-single-bar.whenToUse': localize('g2-single-bar.whenToUse', ' '),
'g2-single-bar.description': localize('g2-single-bar.description', '单一柱状图更适合在列表中展示简单的区间数据，简洁的表现方式可以很好的减少大数据量的视觉展现压力。'),
'g2-single-bar.repaint.description': localize('g2-single-bar.repaint.description', '数据再次变更时是否重绘'),
'g2-single-bar.delay.description': localize('g2-single-bar.delay.description', '延迟渲染，单位：毫秒'),
'g2-single-bar.plusColor.description': localize('g2-single-bar.plusColor.description', '图表颜色'),
'g2-single-bar.minusColor.description': localize('g2-single-bar.minusColor.description', '负值图表颜色'),
'g2-single-bar.height.description': localize('g2-single-bar.height.description', '图表高度'),
'g2-single-bar.barSize.description': localize('g2-single-bar.barSize.description', '柱状高度'),
'g2-single-bar.min.description': localize('g2-single-bar.min.description', '最小值'),
'g2-single-bar.max.description': localize('g2-single-bar.max.description', '最大值，若小于0表示显示负值'),
'g2-single-bar.padding.description': localize('g2-single-bar.padding.description', '图表内部间距'),
'g2-single-bar.value.description': localize('g2-single-bar.value.description', '值'),
'g2-single-bar.format.description': localize('g2-single-bar.format.description', '显示值格式'),
'g2-single-bar.textStyle.description': localize('g2-single-bar.textStyle.description', '显示值样式'),
'g2-single-bar.theme.description': localize('g2-single-bar.theme.description', '定制图表主题'),
'g2-single-bar.ready.description': localize('g2-single-bar.ready.description', '当G2完成初始化后调用'),
'g2-tag-cloud.title': localize('g2-tag-cloud.title', '标签云'),
'g2-tag-cloud.whenToUse': localize('g2-tag-cloud.whenToUse', ' '),
'g2-tag-cloud.description': localize('g2-tag-cloud.description', '标签云是一套相关的标签以及与此相应的权重展示方式，一般典型的标签云有 30 至 150 个标签，而权重影响使用的字体大小或其他视觉效果。'),
'g2-tag-cloud.repaint.description': localize('g2-tag-cloud.repaint.description', '数据再次变更时是否重绘'),
'g2-tag-cloud.delay.description': localize('g2-tag-cloud.delay.description', '延迟渲染，单位：毫秒'),
'g2-tag-cloud.height.description': localize('g2-tag-cloud.height.description', '高度值'),
'g2-tag-cloud.width.description': localize('g2-tag-cloud.width.description', '宽度值，若不指定自动按宿主元素的宽度'),
'g2-tag-cloud.data.description': localize('g2-tag-cloud.data.description', '数据'),
'g2-tag-cloud.theme.description': localize('g2-tag-cloud.theme.description', '定制图表主题'),
'g2-tag-cloud.clickItem.description': localize('g2-tag-cloud.clickItem.description', '点击项回调'),
'g2-tag-cloud.ready.description': localize('g2-tag-cloud.ready.description', '当G2完成初始化后调用'),
'g2-timeline.title': localize('g2-timeline.title', '折线图'),
'g2-timeline.whenToUse': localize('g2-timeline.whenToUse', ' '),
'g2-timeline.description': localize('g2-timeline.description', '使用 `timeline` 组件可以实现带有时间轴的柱状图展现，而其中的 `x` 属性，则是时间值的指向，默认最多支持同时展现两个指标，分别是 `y1` 和 `y2`。'),
'g2-timeline.repaint.description': localize('g2-timeline.repaint.description', '数据再次变更时是否重绘'),
'g2-timeline.delay.description': localize('g2-timeline.delay.description', '延迟渲染，单位：毫秒'),
'g2-timeline.title.description': localize('g2-timeline.title.description', '图表标题'),
'g2-timeline.maxAxis.description': localize('g2-timeline.maxAxis.description', '最大指标数量'),
'g2-timeline.data.description': localize('g2-timeline.data.description', '数据'),
'g2-timeline.titleMap.description': localize('g2-timeline.titleMap.description', '指标别名'),
'g2-timeline.colorMap.description': localize('g2-timeline.colorMap.description', '颜色'),
'g2-timeline.height.description': localize('g2-timeline.height.description', '高度值'),
'g2-timeline.padding.description': localize('g2-timeline.padding.description', '图表内部间距'),
'g2-timeline.borderWidth.description': localize('g2-timeline.borderWidth.description', '线条'),
'g2-timeline.mask.description': localize('g2-timeline.mask.description', '日期格式，使用 [G2 Mask日期格式](https://g2.antv.vision/zh/docs/manual/tutorial/scale#time)'),
'g2-timeline.maskSlider.description': localize('g2-timeline.maskSlider.description', '滑动条日期格式，使用 [date-fns 日期格式](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)'),
'g2-timeline.position.description': localize('g2-timeline.position.description', '标题位置'),
'g2-timeline.slider.description': localize('g2-timeline.slider.description', '是否需要滑动条'),
'g2-timeline.theme.description': localize('g2-timeline.theme.description', '定制图表主题'),
'g2-timeline.clickItem.description': localize('g2-timeline.clickItem.description', '点击项回调'),
'g2-timeline.ready.description': localize('g2-timeline.ready.description', '当G2完成初始化后调用'),
'g2-timeline.y1.description': localize('g2-timeline.y1.description', '指标1'),
'g2-timeline.y2.description': localize('g2-timeline.y2.description', '指标2'),
'g2-timeline.y3.description': localize('g2-timeline.y3.description', '指标3'),
'g2-timeline.y4.description': localize('g2-timeline.y4.description', '指标4'),
'g2-timeline.y5.description': localize('g2-timeline.y5.description', '指标5'),
'trend.title': localize('trend.title', '趋势标记'),
'trend.whenToUse': localize('trend.whenToUse', ' '),
'trend.description': localize('trend.description', '趋势符号，标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外。'),
'trend.colorful.description': localize('trend.colorful.description', '是否彩色标记'),
'trend.flag.description': localize('trend.flag.description', '上升下降标识'),
'trend.reverseColor.description': localize('trend.reverseColor.description', '颜色反转'),
'g2-water-wave.title': localize('g2-water-wave.title', '水波图'),
'g2-water-wave.whenToUse': localize('g2-water-wave.whenToUse', ' '),
'g2-water-wave.description': localize('g2-water-wave.description', '水波图是一种比例的展示方式，可以更直观的展示关键值的占比。'),
'g2-water-wave.animate.description': localize('g2-water-wave.animate.description', '是否显示动画'),
'g2-water-wave.delay.description': localize('g2-water-wave.delay.description', '延迟渲染，单位：毫秒'),
'g2-water-wave.title.description': localize('g2-water-wave.title.description', '图表标题'),
'g2-water-wave.height.description': localize('g2-water-wave.height.description', '图表高度'),
'g2-water-wave.color.description': localize('g2-water-wave.color.description', '图表颜色'),
'g2-water-wave.percent.description': localize('g2-water-wave.percent.description', '进度比例'),
'sf.title': localize('sf.title', 'Getting Started'),
'sf.whenToUse': localize('sf.whenToUse', ' '),
'sf.description': localize('sf.description', '@delon/form is a dynamic build form based on the [JSON Schema](http://json-schema.org/) standard.'),
'sf.layout.description': localize('sf.layout.description', 'layout of the form'),
'sf.schema.description': localize('sf.schema.description', '**Required** JSON Schema'),
'sf.ui.description': localize('sf.ui.description', 'UI Schema'),
'sf.formData.description': localize('sf.formData.description', 'Default form values'),
'sf.mode.description': localize('sf.mode.description', 'Form type mode'),
'sf.button.description': localize('sf.button.description', 'Submit button of the form'),
'sf.firstVisual.description': localize('sf.firstVisual.description', 'Whether to show visual error immediately'),
'sf.liveValidate.description': localize('sf.liveValidate.description', 'Whether to live validate'),
'sf.autocomplete.description': localize('sf.autocomplete.description', 'autocomplete value of this form'),
'sf.disabled.description': localize('sf.disabled.description', 'Whether to disabled status'),
'sf.loading.description': localize('sf.loading.description', 'Whether to load status，when `true` reset button is disabled status, submit button is loading status'),
'sf.noColon.description': localize('sf.noColon.description', 'Whether to not display `:` after label text.'),
'sf.compact.description': localize('sf.compact.description', 'Whether compact style'),
'sf.cleanValue.description': localize('sf.cleanValue.description', 'Whether to clean up data for undefined Schema'),
'sf.delay.description': localize('sf.delay.description', 'Whether to delay rendering, should be manually call `refreshSchema()`'),
'sf.formChange.description': localize('sf.formChange.description', 'Callback when data changes'),
'sf.formValueChange.description': localize('sf.formValueChange.description', 'Callback when value changes'),
'sf.formSubmit.description': localize('sf.formSubmit.description', 'Callback when submitting the form'),
'sf.formReset.description': localize('sf.formReset.description', 'Callback when resetting the form'),
'sf.formError.description': localize('sf.formError.description', 'Callback when form check'),
'sf.submit.description': localize('sf.submit.description', 'Submit text of button'),
'sf.reset.description': localize('sf.reset.description', 'Reset text of button'),
'sf.search.description': localize('sf.search.description', 'Search text of button'),
'sf.edit.description': localize('sf.edit.description', 'Edit text of button'),
'sf.render.description': localize('sf.render.description', 'Button layout'),
'nz-breadcrumb-item.title': localize('nz-breadcrumb-item.title', 'Breadcrumb'),
'nz-breadcrumb-item.whenToUse': localize('nz-breadcrumb-item.whenToUse', '- When the system has more than two layers in a hierarchy.\n- When you need to inform the user of where they are.\n- When the user may need to navigate back to a higher level.\n- When the application has multi-layer architecture.'),
'nz-breadcrumb-item.description': localize('nz-breadcrumb-item.description', 'A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.'),
'nz-layout.title': localize('nz-layout.title', ' '),
'nz-layout.whenToUse': localize('nz-layout.whenToUse', ' '),
'nz-layout.description': localize('nz-layout.description', 'The layout wrapper, in which `nz-header` `nz-sider` `nz-content` `nz-footer` or `nz-layout` itself can be nested, and can be placed in any parent container.'),
'nz-header.title': localize('nz-header.title', ' '),
'nz-header.whenToUse': localize('nz-header.whenToUse', ' '),
'nz-header.description': localize('nz-header.description', 'The top layout with default style, in which any element can be nested, and must be placed in `nz-layout`.'),
'nz-content.title': localize('nz-content.title', ' '),
'nz-content.whenToUse': localize('nz-content.whenToUse', ' '),
'nz-content.description': localize('nz-content.description', 'The content layout with default style, in which any element can be nested, and must be placed in `nz-layout`.'),
'nz-footer.title': localize('nz-footer.title', ' '),
'nz-footer.whenToUse': localize('nz-footer.whenToUse', ' '),
'nz-footer.description': localize('nz-footer.description', 'The bottom layout with default style, in which any element can be nested, and must be placed in `nz-layout`.') };
export const DATA = [
  {
    "type": "directive",
    "selector": "nz-row",
    "types": {},
    "properties": [
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "nz-row.nzAlign.description",
        "type": "Enum",
        "typeRaw": "`'top'|'middle'|'bottom'`",
        "default": "",
        "typeDefinition": [
          "top",
          "middle",
          "bottom"
        ]
      },
      {
        "name": "nzGutter",
        "inputType": 0,
        "description": "nz-row.nzGutter.description",
        "type": "Enum",
        "typeRaw": "`string|number|object|[number, number]|[object, object]`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzJustify",
        "inputType": 0,
        "description": "nz-row.nzJustify.description",
        "type": "Enum",
        "typeRaw": "`'start'|'end'|'center'|'space-around'|'space-between'`",
        "default": "",
        "typeDefinition": [
          "start",
          "end",
          "center",
          "space-around",
          "space-between"
        ]
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-row.title",
    "description": "nz-row.description",
    "whenToUse": "nz-row.whenToUse",
    "doc": "/components/grid/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/grid"
  },
  {
    "type": "directive",
    "selector": "nz-col",
    "types": {},
    "properties": [
      {
        "name": "nzFlex",
        "inputType": 0,
        "description": "nz-col.nzFlex.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzOffset",
        "inputType": 0,
        "description": "nz-col.nzOffset.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzOrder",
        "inputType": 0,
        "description": "nz-col.nzOrder.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPull",
        "inputType": 0,
        "description": "nz-col.nzPull.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPush",
        "inputType": 0,
        "description": "nz-col.nzPush.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSpan",
        "inputType": 0,
        "description": "nz-col.nzSpan.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXs",
        "inputType": 0,
        "description": "nz-col.nzXs.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSm",
        "inputType": 0,
        "description": "nz-col.nzSm.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzMd",
        "inputType": 0,
        "description": "nz-col.nzMd.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzLg",
        "inputType": 0,
        "description": "nz-col.nzLg.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXl",
        "inputType": 0,
        "description": "nz-col.nzXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXXl",
        "inputType": 0,
        "description": "nz-col.nzXXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-col.title",
    "description": "nz-col.description",
    "whenToUse": "nz-col.whenToUse",
    "doc": "/components/grid/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/grid"
  },
  {
    "type": "directive",
    "selector": "nz-tooltip",
    "types": {},
    "properties": [
      {
        "name": "nzTooltipArrowPointAtCenter",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipArrowPointAtCenter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipTitle",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTooltipTitleContext",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipTitleContext.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzTooltipTrigger",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'focus' | 'hover' | null`",
        "default": "`'hover'`",
        "typeDefinition": [
          "click",
          "focus",
          "hover",
          "null"
        ],
        "pureDefault": "hover"
      },
      {
        "name": "nzTooltipPlacement",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | Array<string>`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom",
          "Array<string>"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzTooltipColor",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOrigin",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipOrigin.description",
        "type": "object",
        "typeRaw": "`ElementRef`",
        "default": ""
      },
      {
        "name": "nzTooltipVisible",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipVisibleChange",
        "inputType": 1,
        "description": "nz-tooltip.nzTooltipVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzTooltipMouseEnterDelay",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipMouseEnterDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.15`",
        "pureDefault": "0.15"
      },
      {
        "name": "nzTooltipMouseLeaveDelay",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipMouseLeaveDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzTooltipOverlayClassName",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOverlayStyle",
        "inputType": 0,
        "description": "nz-tooltip.nzTooltipOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-tooltip.title",
    "description": "nz-tooltip.description",
    "whenToUse": "nz-tooltip.whenToUse",
    "doc": "/components/tooltip/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tooltip",
    "snippet": "<span __$1>$2</span>"
  },
  {
    "type": "component",
    "selector": "nz-affix",
    "types": {},
    "properties": [
      {
        "name": "nzOffsetBottom",
        "inputType": 0,
        "description": "nz-affix.nzOffsetBottom.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzOffsetTop",
        "inputType": 0,
        "description": "nz-affix.nzOffsetTop.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzTarget",
        "inputType": 0,
        "description": "nz-affix.nzTarget.description",
        "type": "string",
        "typeRaw": "`string | HTMLElement`",
        "default": "`window`",
        "pureDefault": "window"
      },
      {
        "name": "nzChange",
        "inputType": 1,
        "description": "nz-affix.nzChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-affix.title",
    "description": "nz-affix.description",
    "whenToUse": "nz-affix.whenToUse",
    "doc": "/components/affix/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/affix"
  },
  {
    "type": "component",
    "selector": "nz-alert",
    "types": {},
    "properties": [
      {
        "name": "nzBanner",
        "inputType": 0,
        "description": "nz-alert.nzBanner.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAction",
        "inputType": 0,
        "description": "nz-alert.nzAction.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzCloseable",
        "inputType": 0,
        "description": "nz-alert.nzCloseable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzCloseText",
        "inputType": 0,
        "description": "nz-alert.nzCloseText.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDescription",
        "inputType": 0,
        "description": "nz-alert.nzDescription.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzMessage",
        "inputType": 0,
        "description": "nz-alert.nzMessage.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzShowIcon",
        "inputType": 0,
        "description": "nz-alert.nzShowIcon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzIconType",
        "inputType": 0,
        "description": "nz-alert.nzIconType.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-alert.nzType.description",
        "type": "Enum",
        "typeRaw": "`'success' | 'info' | 'warning' | 'error'`",
        "default": "`'info'`",
        "typeDefinition": [
          "success",
          "info",
          "warning",
          "error"
        ],
        "pureDefault": "info"
      },
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-alert.nzIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzOnClose",
        "inputType": 1,
        "description": "nz-alert.nzOnClose.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-alert.title",
    "description": "nz-alert.description",
    "whenToUse": "nz-alert.whenToUse",
    "doc": "/components/alert/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/alert"
  },
  {
    "type": "component",
    "selector": "nz-anchor",
    "types": {},
    "properties": [
      {
        "name": "nzAffix",
        "inputType": 0,
        "description": "nz-anchor.nzAffix.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzBounds",
        "inputType": 0,
        "description": "nz-anchor.nzBounds.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`5`",
        "pureDefault": "5"
      },
      {
        "name": "nzOffsetTop",
        "inputType": 0,
        "description": "nz-anchor.nzOffsetTop.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzShowInkInFixed",
        "inputType": 0,
        "description": "nz-anchor.nzShowInkInFixed.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTargetOffset",
        "inputType": 0,
        "description": "nz-anchor.nzTargetOffset.description",
        "type": "number",
        "typeRaw": "number",
        "default": ""
      },
      {
        "name": "nzContainer",
        "inputType": 0,
        "description": "nz-anchor.nzContainer.description",
        "type": "string",
        "typeRaw": "`string | HTMLElement`",
        "default": "`window`",
        "pureDefault": "window"
      },
      {
        "name": "nzCurrentAnchor",
        "inputType": 0,
        "description": "nz-anchor.nzCurrentAnchor.description",
        "type": "string",
        "typeRaw": "string",
        "default": ""
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-anchor.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "nzChange",
        "inputType": 1,
        "description": "nz-anchor.nzChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "nzScroll",
        "inputType": 1,
        "description": "nz-anchor.nzScroll.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzAnchorLinkComponent>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-anchor.title",
    "description": "nz-anchor.description",
    "whenToUse": "nz-anchor.whenToUse",
    "doc": "/components/anchor/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/anchor"
  },
  {
    "type": "component",
    "selector": "nz-link",
    "types": {},
    "properties": [
      {
        "name": "nzHref",
        "inputType": 0,
        "description": "nz-link.nzHref.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTarget",
        "inputType": 0,
        "description": "nz-link.nzTarget.description",
        "type": "string",
        "typeRaw": "string",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-link.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-link.title",
    "description": "nz-link.description",
    "whenToUse": "nz-link.whenToUse",
    "doc": "/components/anchor/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/anchor"
  },
  {
    "type": "directive",
    "selector": "nzAutocomplete",
    "types": {},
    "properties": [
      {
        "name": "nzAutocomplete",
        "inputType": 0,
        "description": "nzAutocomplete.nzAutocomplete.description",
        "type": "object",
        "typeRaw": "`NzAutocompleteComponent`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nzAutocomplete.title",
    "description": "nzAutocomplete.description",
    "whenToUse": "nzAutocomplete.whenToUse",
    "doc": "/components/auto-complete/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/auto-complete"
  },
  {
    "type": "component",
    "selector": "nz-autocomplete",
    "types": {},
    "properties": [
      {
        "name": "nzBackfill",
        "inputType": 0,
        "description": "nz-autocomplete.nzBackfill.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDataSource",
        "inputType": 0,
        "description": "nz-autocomplete.nzDataSource.description",
        "type": "object",
        "typeRaw": "`AutocompleteDataSource`",
        "default": ""
      },
      {
        "name": "nzDefaultActiveFirstOption",
        "inputType": 0,
        "description": "nz-autocomplete.nzDefaultActiveFirstOption.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-autocomplete.nzWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "trigger element width",
        "pureDefault": "trigger element width"
      },
      {
        "name": "nzOverlayClassName",
        "inputType": 0,
        "description": "nz-autocomplete.nzOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzOverlayStyle",
        "inputType": 0,
        "description": "nz-autocomplete.nzOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "compareWith",
        "inputType": 0,
        "description": "nz-autocomplete.compareWith.description",
        "type": "function",
        "typeRaw": "`(o1: any, o2: any) => boolean`",
        "default": "`(o1: any, o2: any) => o1===o2`",
        "pureDefault": "(o1: any, o2: any) => o1===o2"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-autocomplete.title",
    "description": "nz-autocomplete.description",
    "whenToUse": "nz-autocomplete.whenToUse",
    "doc": "/components/auto-complete/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/auto-complete"
  },
  {
    "type": "component",
    "selector": "nz-auto-option",
    "types": {},
    "properties": [
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-auto-option.nzValue.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "nzLabel",
        "inputType": 0,
        "description": "nz-auto-option.nzLabel.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-auto-option.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-auto-option.title",
    "description": "nz-auto-option.description",
    "whenToUse": "nz-auto-option.whenToUse",
    "doc": "/components/auto-complete/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/auto-complete"
  },
  {
    "type": "component",
    "selector": "nz-avatar",
    "types": {},
    "properties": [
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-avatar.nzIcon.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzShape",
        "inputType": 0,
        "description": "nz-avatar.nzShape.description",
        "type": "Enum",
        "typeRaw": "`'circle' | 'square'`",
        "default": "`'circle'`",
        "typeDefinition": [
          "circle",
          "square"
        ],
        "pureDefault": "circle"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-avatar.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default' | number`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default",
          "number"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzGap",
        "inputType": 0,
        "description": "nz-avatar.nzGap.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`4`",
        "pureDefault": "4"
      },
      {
        "name": "nzSrc",
        "inputType": 0,
        "description": "nz-avatar.nzSrc.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzSrcSet",
        "inputType": 0,
        "description": "nz-avatar.nzSrcSet.description",
        "type": "string",
        "typeRaw": "string",
        "default": ""
      },
      {
        "name": "nzAlt",
        "inputType": 0,
        "description": "nz-avatar.nzAlt.description",
        "type": "string",
        "typeRaw": "string",
        "default": ""
      },
      {
        "name": "nzText",
        "inputType": 0,
        "description": "nz-avatar.nzText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzError",
        "inputType": 1,
        "description": "nz-avatar.nzError.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Event>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-avatar.title",
    "description": "nz-avatar.description",
    "whenToUse": "nz-avatar.whenToUse",
    "doc": "/components/avatar/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/avatar"
  },
  {
    "type": "component",
    "selector": "nz-avatar-group",
    "types": {},
    "properties": [],
    "lib": "ng-zorro-antd",
    "title": "nz-avatar-group.title",
    "description": "nz-avatar-group.description",
    "whenToUse": "nz-avatar-group.whenToUse",
    "doc": "/components/avatar/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/avatar"
  },
  {
    "type": "component",
    "selector": "nz-back-top",
    "types": {},
    "properties": [
      {
        "name": "nzTemplate",
        "inputType": 0,
        "description": "nz-back-top.nzTemplate.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzVisibilityHeight",
        "inputType": 0,
        "description": "nz-back-top.nzVisibilityHeight.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`400`",
        "pureDefault": "400"
      },
      {
        "name": "nzTarget",
        "inputType": 0,
        "description": "nz-back-top.nzTarget.description",
        "type": "string",
        "typeRaw": "`string | Element`",
        "default": "`window`",
        "pureDefault": "window"
      },
      {
        "name": "nzDuration",
        "inputType": 0,
        "description": "nz-back-top.nzDuration.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`450`",
        "pureDefault": "450"
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-back-top.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "description": "nz-back-top.description",
    "lib": "ng-zorro-antd",
    "title": "nz-back-top.title",
    "whenToUse": "nz-back-top.whenToUse",
    "doc": "/components/back-top/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/back-top"
  },
  {
    "type": "component",
    "selector": "nz-badge",
    "types": {},
    "properties": [
      {
        "name": "nzStandalone",
        "inputType": 0,
        "description": "nz-badge.nzStandalone.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzColor",
        "inputType": 0,
        "description": "nz-badge.nzColor.description",
        "type": "string",
        "typeRaw": "string",
        "default": ""
      },
      {
        "name": "nzCount",
        "inputType": 0,
        "description": "nz-badge.nzCount.description",
        "type": "number",
        "typeRaw": "`number | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDot",
        "inputType": 0,
        "description": "nz-badge.nzDot.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowDot",
        "inputType": 0,
        "description": "nz-badge.nzShowDot.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzOverflowCount",
        "inputType": 0,
        "description": "nz-badge.nzOverflowCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`99`",
        "pureDefault": "99"
      },
      {
        "name": "nzShowZero",
        "inputType": 0,
        "description": "nz-badge.nzShowZero.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-badge.nzSize.description",
        "type": "string",
        "typeRaw": "`default | small`",
        "default": "`default`",
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-badge.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'success' | 'processing' | 'default' | 'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "success",
          "processing",
          "default",
          "error",
          "warning"
        ]
      },
      {
        "name": "nzText",
        "inputType": 0,
        "description": "nz-badge.nzText.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-badge.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | null`",
        "default": "`nzCount`",
        "pureDefault": "nzCount"
      },
      {
        "name": "nzOffset",
        "inputType": 0,
        "description": "nz-badge.nzOffset.description",
        "type": "string",
        "typeRaw": "`[number, number]`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-badge.title",
    "description": "nz-badge.description",
    "whenToUse": "nz-badge.whenToUse",
    "doc": "/components/badge/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/badge"
  },
  {
    "type": "component",
    "selector": "nz-ribbon",
    "types": {},
    "properties": [
      {
        "name": "nzColor",
        "inputType": 0,
        "description": "nz-ribbon.nzColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-ribbon.nzPlacement.description",
        "type": "string",
        "typeRaw": "`start` | `end`",
        "default": "`end`",
        "pureDefault": "end"
      },
      {
        "name": "nzText",
        "inputType": 0,
        "description": "nz-ribbon.nzText.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-ribbon.title",
    "description": "nz-ribbon.description",
    "whenToUse": "nz-ribbon.whenToUse",
    "doc": "/components/badge/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/badge"
  },
  {
    "type": "component",
    "selector": "nz-breadcrumb",
    "types": {},
    "properties": [
      {
        "name": "nzSeparator",
        "inputType": 0,
        "description": "nz-breadcrumb.nzSeparator.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void> | null`",
        "default": "`'/'`",
        "pureDefault": "/"
      },
      {
        "name": "nzAutoGenerate",
        "inputType": 0,
        "description": "nz-breadcrumb.nzAutoGenerate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzRouteLabel",
        "inputType": 0,
        "description": "nz-breadcrumb.nzRouteLabel.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'breadcrumb'`",
        "pureDefault": "breadcrumb"
      },
      {
        "name": "nzRouteLabelFn",
        "inputType": 0,
        "description": "nz-breadcrumb.nzRouteLabelFn.description",
        "type": "function",
        "typeRaw": "`(label:string) => string`",
        "default": "`label => label`",
        "pureDefault": "label => label"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-breadcrumb.title",
    "description": "nz-breadcrumb.description",
    "whenToUse": "nz-breadcrumb.whenToUse",
    "doc": "/components/breadcrumb/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/breadcrumb"
  },
  {
    "type": "directive",
    "selector": "nz-button",
    "types": {},
    "properties": [
      {
        "name": "disabled",
        "inputType": 0,
        "description": "nz-button.disabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzGhost",
        "inputType": 0,
        "description": "nz-button.nzGhost.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-button.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzShape",
        "inputType": 0,
        "description": "nz-button.nzShape.description",
        "type": "Enum",
        "typeRaw": "`'circle'|'round'`",
        "default": "",
        "typeDefinition": [
          "circle",
          "round"
        ]
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-button.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large'|'small'|'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-button.nzType.description",
        "type": "Enum",
        "typeRaw": "`'primary'|'dashed'|'link'|'text'`",
        "default": "",
        "typeDefinition": [
          "primary",
          "dashed",
          "link",
          "text"
        ]
      },
      {
        "name": "nzBlock",
        "inputType": 0,
        "description": "nz-button.nzBlock.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDanger",
        "inputType": 0,
        "description": "nz-button.nzDanger.description",
        "type": "boolean",
        "typeRaw": "boolean",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "click",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter`",
        "description": "nz-button.click.description"
      }
    ],
    "description": "nz-button.description",
    "lib": "ng-zorro-antd",
    "title": "nz-button.title",
    "whenToUse": "nz-button.whenToUse",
    "doc": "/components/button/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/button",
    "snippet": "<button __$1>${2|Save,Submit,Cancel,Create,Delete,Search|}</button>"
  },
  {
    "type": "component",
    "selector": "nz-button-group",
    "types": {},
    "properties": [
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-button-group.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large'|'small'|'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-button-group.title",
    "description": "nz-button-group.description",
    "whenToUse": "nz-button-group.whenToUse",
    "doc": "/components/button/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/button"
  },
  {
    "type": "component",
    "selector": "nz-calendar",
    "types": {},
    "properties": [
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-calendar.ngModel.description",
        "type": "object",
        "typeRaw": "`Date`",
        "default": "current date",
        "pureDefault": "current date"
      },
      {
        "name": "nzMode",
        "inputType": 2,
        "description": "nz-calendar.nzMode.description",
        "type": "Enum",
        "typeRaw": "`'month' | 'year'`",
        "default": "`'month'`",
        "typeDefinition": [
          "month",
          "year"
        ],
        "pureDefault": "month"
      },
      {
        "name": "nzFullscreen",
        "inputType": 0,
        "description": "nz-calendar.nzFullscreen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "forceInputType": 0
      },
      {
        "name": "nzDateCell",
        "inputType": 0,
        "description": "nz-calendar.nzDateCell.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<Date>`",
        "default": ""
      },
      {
        "name": "nzDateFullCell",
        "inputType": 0,
        "description": "nz-calendar.nzDateFullCell.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<Date>`",
        "default": ""
      },
      {
        "name": "nzMonthCell",
        "inputType": 0,
        "description": "nz-calendar.nzMonthCell.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<Date>`",
        "default": ""
      },
      {
        "name": "nzMonthFullCell",
        "inputType": 0,
        "description": "nz-calendar.nzMonthFullCell.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<Date>`",
        "default": ""
      },
      {
        "name": "nzDisabledDate",
        "inputType": 0,
        "description": "nz-calendar.nzDisabledDate.description",
        "type": "function",
        "typeRaw": "`(current: Date) => boolean`",
        "default": ""
      },
      {
        "name": "nzPanelChange",
        "inputType": 1,
        "description": "nz-calendar.nzPanelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{ date: Date, mode: 'month' | 'year' }>`",
        "default": ""
      },
      {
        "name": "nzSelectChange",
        "inputType": 1,
        "description": "nz-calendar.nzSelectChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Date>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-calendar.title",
    "description": "nz-calendar.description",
    "whenToUse": "nz-calendar.whenToUse",
    "doc": "/components/calendar/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/calendar"
  },
  {
    "type": "component",
    "selector": "nz-card",
    "types": {},
    "properties": [
      {
        "name": "nzActions",
        "inputType": 0,
        "description": "nz-card.nzActions.description",
        "type": "Array",
        "typeRaw": "`Array<TemplateRef<void>>`",
        "default": ""
      },
      {
        "name": "nzBodyStyle",
        "inputType": 0,
        "description": "nz-card.nzBodyStyle.description",
        "type": "object",
        "typeRaw": "`{ [key: string]: string }`",
        "default": ""
      },
      {
        "name": "nzBorderless",
        "inputType": 0,
        "description": "nz-card.nzBorderless.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCover",
        "inputType": 0,
        "description": "nz-card.nzCover.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-card.nzExtra.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzHoverable",
        "inputType": 0,
        "description": "nz-card.nzHoverable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-card.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-card.nzTitle.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-card.nzType.description",
        "type": "Enum",
        "typeRaw": "`'inner'`",
        "default": "",
        "typeDefinition": [
          "inner"
        ]
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-card.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'default'|'small'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "small"
        ],
        "pureDefault": "default"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-card.title",
    "description": "nz-card.description",
    "whenToUse": "nz-card.whenToUse",
    "doc": "/components/card/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/card"
  },
  {
    "type": "component",
    "selector": "nz-card-meta",
    "types": {},
    "properties": [
      {
        "name": "nzAvatar",
        "inputType": 0,
        "description": "nz-card-meta.nzAvatar.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDescription",
        "inputType": 0,
        "description": "nz-card-meta.nzDescription.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-card-meta.nzTitle.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-card-meta.title",
    "description": "nz-card-meta.description",
    "whenToUse": "nz-card-meta.whenToUse",
    "doc": "/components/card/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/card"
  },
  {
    "type": "directive",
    "selector": "nz-card-grid",
    "types": {},
    "properties": [
      {
        "name": "nzHoverable",
        "inputType": 0,
        "description": "nz-card-grid.nzHoverable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-card-grid.title",
    "description": "nz-card-grid.description",
    "whenToUse": "nz-card-grid.whenToUse",
    "doc": "/components/card/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/card"
  },
  {
    "type": "component",
    "selector": "nz-card-tab",
    "types": {},
    "properties": [],
    "description": "nz-card-tab.description",
    "lib": "ng-zorro-antd",
    "title": "nz-card-tab.title",
    "whenToUse": "nz-card-tab.whenToUse",
    "doc": "/components/card/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/card"
  },
  {
    "type": "component",
    "selector": "nz-carousel",
    "types": {},
    "properties": [
      {
        "name": "nzAutoPlay",
        "inputType": 0,
        "description": "nz-carousel.nzAutoPlay.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAutoPlaySpeed",
        "inputType": 0,
        "description": "nz-carousel.nzAutoPlaySpeed.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`3000`",
        "pureDefault": "3000"
      },
      {
        "name": "nzDotRender",
        "inputType": 0,
        "description": "nz-carousel.nzDotRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: number }>`",
        "default": ""
      },
      {
        "name": "nzDotPosition",
        "inputType": 0,
        "description": "nz-carousel.nzDotPosition.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`bottom`",
        "pureDefault": "bottom"
      },
      {
        "name": "nzDots",
        "inputType": 0,
        "description": "nz-carousel.nzDots.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzEffect",
        "inputType": 0,
        "description": "nz-carousel.nzEffect.description",
        "type": "Enum",
        "typeRaw": "`'scrollx'|'fade'`",
        "default": "`'scrollx'`",
        "typeDefinition": [
          "scrollx",
          "fade"
        ],
        "pureDefault": "scrollx"
      },
      {
        "name": "nzEnableSwipe",
        "inputType": 0,
        "description": "nz-carousel.nzEnableSwipe.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzLoop",
        "inputType": 0,
        "description": "nz-carousel.nzLoop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzAfterChange",
        "inputType": 1,
        "description": "nz-carousel.nzAfterChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzBeforeChange",
        "inputType": 1,
        "description": "nz-carousel.nzBeforeChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter{ from: number; to: number }>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-carousel.title",
    "description": "nz-carousel.description",
    "whenToUse": "nz-carousel.whenToUse",
    "doc": "/components/carousel/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/carousel"
  },
  {
    "type": "component",
    "selector": "nz-cascader",
    "types": {},
    "properties": [
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-cascader.ngModel.description",
        "type": "object",
        "typeRaw": "`any[]`",
        "default": ""
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-cascader.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-cascader.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-cascader.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzChangeOn",
        "inputType": 0,
        "description": "nz-cascader.nzChangeOn.description",
        "type": "function",
        "typeRaw": "`(option: any, index: number) => boolean`",
        "default": ""
      },
      {
        "name": "nzChangeOnSelect",
        "inputType": 0,
        "description": "nz-cascader.nzChangeOnSelect.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzColumnClassName",
        "inputType": 0,
        "description": "nz-cascader.nzColumnClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-cascader.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzExpandIcon",
        "inputType": 0,
        "description": "nz-cascader.nzExpandIcon.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzExpandTrigger",
        "inputType": 0,
        "description": "nz-cascader.nzExpandTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click'|'hover'`",
        "default": "`'click'`",
        "typeDefinition": [
          "click",
          "hover"
        ],
        "pureDefault": "click"
      },
      {
        "name": "nzLabelProperty",
        "inputType": 0,
        "description": "nz-cascader.nzLabelProperty.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'label'`",
        "pureDefault": "label"
      },
      {
        "name": "nzLabelRender",
        "inputType": 0,
        "description": "nz-cascader.nzLabelRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any>`",
        "default": ""
      },
      {
        "name": "nzLoadData",
        "inputType": 0,
        "description": "nz-cascader.nzLoadData.description",
        "type": "function",
        "typeRaw": "`(option: any, index?: index) => PromiseLike<any>`",
        "default": ""
      },
      {
        "name": "nzMenuClassName",
        "inputType": 0,
        "description": "nz-cascader.nzMenuClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzMenuStyle",
        "inputType": 0,
        "description": "nz-cascader.nzMenuStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-cascader.nzNotFoundContent.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzOptionRender",
        "inputType": 0,
        "description": "nz-cascader.nzOptionRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzCascaderOption, index: number }>`",
        "default": ""
      },
      {
        "name": "nzOptions",
        "inputType": 0,
        "description": "nz-cascader.nzOptions.description",
        "type": "object",
        "typeRaw": "`object[]`",
        "default": ""
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-cascader.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Please select'`",
        "pureDefault": "Please select"
      },
      {
        "name": "nzShowArrow",
        "inputType": 0,
        "description": "nz-cascader.nzShowArrow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzShowInput",
        "inputType": 0,
        "description": "nz-cascader.nzShowInput.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzShowSearch",
        "inputType": 0,
        "description": "nz-cascader.nzShowSearch.description",
        "type": "boolean",
        "typeRaw": "`boolean|NzShowSearchOptions`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-cascader.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large'|'small'|'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-cascader.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-cascader.nzSuffixIcon.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzValueProperty",
        "inputType": 0,
        "description": "nz-cascader.nzValueProperty.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'value'`",
        "pureDefault": "value"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-cascader.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any[]>`",
        "default": ""
      },
      {
        "name": "nzClear",
        "inputType": 1,
        "description": "nz-cascader.nzClear.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "nzVisibleChange",
        "inputType": 1,
        "description": "nz-cascader.nzVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzSelectionChange",
        "inputType": 1,
        "description": "nz-cascader.nzSelectionChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzCascaderOption[]>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-cascader.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-cascader.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-cascader.title",
    "description": "nz-cascader.description",
    "whenToUse": "nz-cascader.whenToUse",
    "doc": "/components/cascader/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/cascader"
  },
  {
    "type": "directive",
    "selector": "nz-checkbox",
    "types": {},
    "properties": [
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-checkbox.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-checkbox.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-checkbox.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-checkbox.ngModel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzIndeterminate",
        "inputType": 0,
        "description": "nz-checkbox.nzIndeterminate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-checkbox.nzValue.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-checkbox.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-checkbox.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-checkbox.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-checkbox.title",
    "description": "nz-checkbox.description",
    "whenToUse": "nz-checkbox.whenToUse",
    "doc": "/components/checkbox/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/checkbox",
    "snippet": "<label __$1>$2</label>"
  },
  {
    "type": "component",
    "selector": "nz-checkbox-group",
    "types": {},
    "properties": [
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-checkbox-group.ngModel.description",
        "type": "Array",
        "typeRaw": "`Array<{ label: string; value: string; checked?: boolean; }>`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-checkbox-group.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-checkbox-group.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Array<{ label: string; value: string; checked?: boolean; }>>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-checkbox-group.title",
    "description": "nz-checkbox-group.description",
    "whenToUse": "nz-checkbox-group.whenToUse",
    "doc": "/components/checkbox/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/checkbox"
  },
  {
    "type": "component",
    "selector": "nz-checkbox-wrapper",
    "types": {},
    "properties": [
      {
        "name": "nzOnChange",
        "inputType": 1,
        "description": "nz-checkbox-wrapper.nzOnChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any[]>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-checkbox-wrapper.title",
    "description": "nz-checkbox-wrapper.description",
    "whenToUse": "nz-checkbox-wrapper.whenToUse",
    "doc": "/components/checkbox/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/checkbox"
  },
  {
    "type": "component",
    "selector": "nz-code-editor",
    "types": {},
    "properties": [
      {
        "name": "nzEditorMode",
        "inputType": 0,
        "description": "nz-code-editor.nzEditorMode.description",
        "type": "string",
        "typeRaw": "`normal`|`diff`",
        "default": "`normal`",
        "pureDefault": "normal"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-code-editor.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzOriginalText",
        "inputType": 0,
        "description": "nz-code-editor.nzOriginalText.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFullControl",
        "inputType": 0,
        "description": "nz-code-editor.nzFullControl.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzEditorOption",
        "inputType": 0,
        "description": "nz-code-editor.nzEditorOption.description",
        "type": "object",
        "typeRaw": "`IEditorConstructionOptions`",
        "default": "`{}`",
        "pureDefault": "{}"
      },
      {
        "name": "nzToolkit",
        "inputType": 0,
        "description": "nz-code-editor.nzToolkit.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzEditorInitialized",
        "inputType": 1,
        "description": "nz-code-editor.nzEditorInitialized.description",
        "type": "object",
        "typeRaw": "`IStandaloneCodeEditor` | `IStandaloneDiffEditor`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-code-editor.title",
    "description": "nz-code-editor.description",
    "whenToUse": "nz-code-editor.whenToUse",
    "doc": "/components/code-editor/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/code-editor"
  },
  {
    "type": "component",
    "selector": "nz-collapse",
    "types": {},
    "properties": [
      {
        "name": "nzAccordion",
        "inputType": 0,
        "description": "nz-collapse.nzAccordion.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBordered",
        "inputType": 0,
        "description": "nz-collapse.nzBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzGhost",
        "inputType": 0,
        "description": "nz-collapse.nzGhost.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExpandIconPosition",
        "inputType": 0,
        "description": "nz-collapse.nzExpandIconPosition.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'right'`",
        "default": "`left`",
        "typeDefinition": [
          "left",
          "right"
        ],
        "pureDefault": "left"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-collapse.title",
    "description": "nz-collapse.description",
    "whenToUse": "nz-collapse.whenToUse",
    "doc": "/components/collapse/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/collapse"
  },
  {
    "type": "component",
    "selector": "nz-collapse-panel",
    "types": {},
    "properties": [
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-collapse-panel.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzHeader",
        "inputType": 0,
        "description": "nz-collapse-panel.nzHeader.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzExpandedIcon",
        "inputType": 0,
        "description": "nz-collapse-panel.nzExpandedIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-collapse-panel.nzExtra.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzShowArrow",
        "inputType": 0,
        "description": "nz-collapse-panel.nzShowArrow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzActive",
        "inputType": 2,
        "description": "nz-collapse-panel.nzActive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzActiveChange",
        "inputType": 1,
        "description": "nz-collapse-panel.nzActiveChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-collapse-panel.title",
    "description": "nz-collapse-panel.description",
    "whenToUse": "nz-collapse-panel.whenToUse",
    "doc": "/components/collapse/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/collapse"
  },
  {
    "type": "component",
    "selector": "nz-comment",
    "types": {},
    "properties": [
      {
        "name": "nzAuthor",
        "inputType": 0,
        "description": "nz-comment.nzAuthor.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDatetime",
        "inputType": 0,
        "description": "nz-comment.nzDatetime.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-comment.title",
    "description": "nz-comment.description",
    "whenToUse": "nz-comment.whenToUse",
    "doc": "/components/comment/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/comment"
  },
  {
    "type": "directive",
    "selector": "nz-comment-avatar",
    "types": {},
    "properties": [],
    "description": "nz-comment-avatar.description",
    "lib": "ng-zorro-antd",
    "title": "nz-comment-avatar.title",
    "whenToUse": "nz-comment-avatar.whenToUse",
    "doc": "/components/comment/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/comment"
  },
  {
    "type": "component",
    "selector": "nz-comment-content",
    "types": {},
    "properties": [],
    "description": "nz-comment-content.description",
    "lib": "ng-zorro-antd",
    "title": "nz-comment-content.title",
    "whenToUse": "nz-comment-content.whenToUse",
    "doc": "/components/comment/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/comment"
  },
  {
    "type": "component",
    "selector": "nz-comment-action",
    "types": {},
    "properties": [],
    "description": "nz-comment-action.description",
    "lib": "ng-zorro-antd",
    "title": "nz-comment-action.title",
    "whenToUse": "nz-comment-action.whenToUse",
    "doc": "/components/comment/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/comment"
  },
  {
    "type": "component",
    "selector": "nz-cron-expression",
    "types": {},
    "properties": [
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-cron-expression.nzType.description",
        "type": "Enum",
        "typeRaw": "`'linux'｜'spring'`",
        "default": "`linux`",
        "typeDefinition": [
          "linux",
          "spring"
        ],
        "pureDefault": "linux"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-cron-expression.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large'｜'small'｜'default'`",
        "default": "`default`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzCollapseDisable",
        "inputType": 0,
        "description": "nz-cron-expression.nzCollapseDisable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-cron-expression.nzExtra.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSemantic",
        "inputType": 0,
        "description": "nz-cron-expression.nzSemantic.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-cron-expression.title",
    "description": "nz-cron-expression.description",
    "whenToUse": "nz-cron-expression.whenToUse",
    "doc": "/components/cron-expression/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/cron-expression"
  },
  {
    "type": "component",
    "selector": "nz-date-picker",
    "types": {},
    "properties": [
      {
        "name": "nzDateRender",
        "inputType": 0,
        "description": "nz-date-picker.nzDateRender.description",
        "type": "string",
        "typeRaw": "-",
        "default": "`TemplateRef<Date> | string | ((d: Date) => TemplateRef<Date> | string)`",
        "pureDefault": "TemplateRef<Date> | string | ((d: Date) => TemplateRef<Date> | string)",
        "_common": true
      },
      {
        "name": "nzDisabledTime",
        "inputType": 0,
        "description": "nz-date-picker.nzDisabledTime.description",
        "type": "function",
        "typeRaw": "`(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzShowTime",
        "inputType": 0,
        "description": "nz-date-picker.nzShowTime.description",
        "type": "object",
        "typeRaw": "`object | boolean`",
        "default": "[TimePicker Options](/components/time-picker/en#api)",
        "pureDefault": "[TimePicker Options](/components/time-picker/en#api)",
        "_common": true
      },
      {
        "name": "nzShowToday",
        "inputType": 0,
        "description": "nz-date-picker.nzShowToday.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "_common": true
      },
      {
        "name": "nzShowNow",
        "inputType": 0,
        "description": "nz-date-picker.nzShowNow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "_common": true
      },
      {
        "name": "nzShowWeekNumber",
        "inputType": 0,
        "description": "nz-date-picker.nzShowWeekNumber.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzOnOk",
        "inputType": 1,
        "description": "nz-date-picker.nzOnOk.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Date>`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-date-picker.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-date-picker.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "_common": true
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-date-picker.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-date-picker.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzDefaultPickerValue",
        "inputType": 0,
        "description": "nz-date-picker.nzDefaultPickerValue.description",
        "type": "object",
        "typeRaw": "`Date` | `Date[]`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-date-picker.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true,
        "forceInputType": 0
      },
      {
        "name": "nzDisabledDate",
        "inputType": 0,
        "description": "nz-date-picker.nzDisabledDate.description",
        "type": "function",
        "typeRaw": "`(current: Date) => boolean`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzDropdownClassName",
        "inputType": 0,
        "description": "nz-date-picker.nzDropdownClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzFormat",
        "inputType": 0,
        "description": "nz-date-picker.nzFormat.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzInputReadOnly",
        "inputType": 0,
        "description": "nz-date-picker.nzInputReadOnly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzLocale",
        "inputType": 0,
        "description": "nz-date-picker.nzLocale.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "[default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)",
        "pureDefault": "[default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)",
        "_common": true
      },
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-date-picker.nzMode.description",
        "type": "Date",
        "typeRaw": "`'date'` | `'week'` | `'month'` | `'year'`",
        "default": "`'date'`",
        "pureDefault": "date",
        "_common": true
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-date-picker.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string` | `string[]`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzPopupStyle",
        "inputType": 0,
        "description": "nz-date-picker.nzPopupStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "`{}`",
        "pureDefault": "{}",
        "_common": true
      },
      {
        "name": "nzRenderExtraFooter",
        "inputType": 0,
        "description": "nz-date-picker.nzRenderExtraFooter.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef | string | (() => TemplateRef | string)`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-date-picker.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small'`",
        "default": "",
        "typeDefinition": [
          "large",
          "small"
        ],
        "_common": true
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-date-picker.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ],
        "_common": true
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-date-picker.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'`",
        "default": "`'bottomLeft'`",
        "typeDefinition": [
          "bottomLeft",
          "bottomRight",
          "topLeft",
          "topRight"
        ],
        "pureDefault": "bottomLeft",
        "_common": true
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-date-picker.nzSuffixIcon.description",
        "type": "string",
        "typeRaw": "`string` | `TemplateRef`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzBorderless",
        "inputType": 0,
        "description": "nz-date-picker.nzBorderless.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzInline",
        "inputType": 0,
        "description": "nz-date-picker.nzInline.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzOnOpenChange",
        "inputType": 1,
        "description": "nz-date-picker.nzOnOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": "",
        "_common": true
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-date-picker.ngModel.description",
        "type": "object",
        "typeRaw": "`Date`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "description": "nz-date-picker.ngModelChange.description"
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-date-picker.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-date-picker.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-date-picker.title",
    "description": "nz-date-picker.description",
    "whenToUse": "nz-date-picker.whenToUse",
    "doc": "/components/date-picker/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/date-picker"
  },
  {
    "type": "component",
    "selector": "nz-range-picker",
    "types": {},
    "properties": [
      {
        "name": "nzShowTime",
        "inputType": 0,
        "description": "nz-range-picker.nzShowTime.description",
        "type": "object",
        "typeRaw": "`object | boolean`",
        "default": "[TimePicker Options](/components/time-picker/en#api)",
        "pureDefault": "[TimePicker Options](/components/time-picker/en#api)",
        "_common": true
      },
      {
        "name": "nzDisabledTime",
        "inputType": 0,
        "description": "nz-range-picker.nzDisabledTime.description",
        "type": "function",
        "typeRaw": "`(current: Date, partial: 'start' | 'end') => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzShowWeekNumber",
        "inputType": 0,
        "description": "nz-range-picker.nzShowWeekNumber.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzOnOk",
        "inputType": 1,
        "description": "nz-range-picker.nzOnOk.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Date[]>`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-range-picker.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-range-picker.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "_common": true
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-range-picker.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-range-picker.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzDefaultPickerValue",
        "inputType": 0,
        "description": "nz-range-picker.nzDefaultPickerValue.description",
        "type": "object",
        "typeRaw": "`Date` | `Date[]`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-range-picker.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true,
        "forceInputType": 0
      },
      {
        "name": "nzDisabledDate",
        "inputType": 0,
        "description": "nz-range-picker.nzDisabledDate.description",
        "type": "function",
        "typeRaw": "`(current: Date) => boolean`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzDropdownClassName",
        "inputType": 0,
        "description": "nz-range-picker.nzDropdownClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzFormat",
        "inputType": 0,
        "description": "nz-range-picker.nzFormat.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzInputReadOnly",
        "inputType": 0,
        "description": "nz-range-picker.nzInputReadOnly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzLocale",
        "inputType": 0,
        "description": "nz-range-picker.nzLocale.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "[default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)",
        "pureDefault": "[default](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)",
        "_common": true
      },
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-range-picker.nzMode.description",
        "type": "Date",
        "typeRaw": "`'date'` | `'week'` | `'month'` | `'year'`",
        "default": "`'date'`",
        "pureDefault": "date",
        "_common": true
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-range-picker.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string` | `string[]`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzPopupStyle",
        "inputType": 0,
        "description": "nz-range-picker.nzPopupStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "`{}`",
        "pureDefault": "{}",
        "_common": true
      },
      {
        "name": "nzRenderExtraFooter",
        "inputType": 0,
        "description": "nz-range-picker.nzRenderExtraFooter.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef | string | (() => TemplateRef | string)`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-range-picker.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small'`",
        "default": "",
        "typeDefinition": [
          "large",
          "small"
        ],
        "_common": true
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-range-picker.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ],
        "_common": true
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-range-picker.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'`",
        "default": "`'bottomLeft'`",
        "typeDefinition": [
          "bottomLeft",
          "bottomRight",
          "topLeft",
          "topRight"
        ],
        "pureDefault": "bottomLeft",
        "_common": true
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-range-picker.nzSuffixIcon.description",
        "type": "string",
        "typeRaw": "`string` | `TemplateRef`",
        "default": "",
        "_common": true
      },
      {
        "name": "nzBorderless",
        "inputType": 0,
        "description": "nz-range-picker.nzBorderless.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzInline",
        "inputType": 0,
        "description": "nz-range-picker.nzInline.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "_common": true
      },
      {
        "name": "nzOnOpenChange",
        "inputType": 1,
        "description": "nz-range-picker.nzOnOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": "",
        "_common": true
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-range-picker.ngModel.description",
        "type": "Array",
        "typeRaw": "`Date[]`",
        "default": ""
      },
      {
        "name": "nzRanges",
        "inputType": 0,
        "description": "nz-range-picker.nzRanges.description",
        "type": "object",
        "typeRaw": "`{ [ key: string ]: Date[] }  |  { [ key: string ]: () => Date[] }`",
        "default": ""
      },
      {
        "name": "nzSeparator",
        "inputType": 0,
        "description": "nz-range-picker.nzSeparator.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef`",
        "default": "`'~'`",
        "pureDefault": "~"
      },
      {
        "name": "nzOnCalendarChange",
        "inputType": 1,
        "description": "nz-range-picker.nzOnCalendarChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Date[]>`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "description": "nz-range-picker.ngModelChange.description"
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-range-picker.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-range-picker.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-range-picker.title",
    "description": "nz-range-picker.description",
    "whenToUse": "nz-range-picker.whenToUse",
    "doc": "/components/date-picker/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/date-picker"
  },
  {
    "type": "component",
    "selector": "nz-descriptions",
    "types": {},
    "properties": [
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-descriptions.nzTitle.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-descriptions.nzExtra.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzBordered",
        "inputType": 0,
        "description": "nz-descriptions.nzBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzColumn",
        "inputType": 0,
        "description": "nz-descriptions.nzColumn.description",
        "type": "number",
        "typeRaw": "`number|object`",
        "default": "`{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }`",
        "pureDefault": "{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-descriptions.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'middle' | 'small'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "middle",
          "small"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzColon",
        "inputType": 0,
        "description": "nz-descriptions.nzColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-descriptions.title",
    "description": "nz-descriptions.description",
    "whenToUse": "nz-descriptions.whenToUse",
    "doc": "/components/descriptions/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/descriptions"
  },
  {
    "type": "component",
    "selector": "nz-descriptions-item",
    "types": {},
    "properties": [
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-descriptions-item.nzTitle.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`string|TemplateRef<void>`",
        "pureDefault": "string|TemplateRef<void>"
      },
      {
        "name": "nzSpan",
        "inputType": 0,
        "description": "nz-descriptions-item.nzSpan.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-descriptions-item.title",
    "description": "nz-descriptions-item.description",
    "whenToUse": "nz-descriptions-item.whenToUse",
    "doc": "/components/descriptions/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/descriptions"
  },
  {
    "type": "component",
    "selector": "nz-divider",
    "types": {},
    "properties": [
      {
        "name": "nzDashed",
        "inputType": 0,
        "description": "nz-divider.nzDashed.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-divider.nzType.description",
        "type": "Enum",
        "typeRaw": "`'horizontal' | 'vertical'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzText",
        "inputType": 0,
        "description": "nz-divider.nzText.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPlain",
        "inputType": 0,
        "description": "nz-divider.nzPlain.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOrientation",
        "inputType": 0,
        "description": "nz-divider.nzOrientation.description",
        "type": "Enum",
        "typeRaw": "`'center' | 'left' | 'right'`",
        "default": "`'center'`",
        "typeDefinition": [
          "center",
          "left",
          "right"
        ],
        "pureDefault": "center"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-divider.title",
    "description": "nz-divider.description",
    "whenToUse": "nz-divider.whenToUse",
    "doc": "/components/divider/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/divider"
  },
  {
    "type": "component",
    "selector": "nz-drawer",
    "types": {},
    "properties": [
      {
        "name": "nzClosable",
        "inputType": 0,
        "description": "nz-drawer.nzClosable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzCloseIcon",
        "inputType": 0,
        "description": "nz-drawer.nzCloseIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void> | null`",
        "default": "`'close'`",
        "pureDefault": "close"
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-drawer.nzExtra.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void> | null`",
        "default": ""
      },
      {
        "name": "nzMask",
        "inputType": 0,
        "description": "nz-drawer.nzMask.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzMaskClosable",
        "inputType": 0,
        "description": "nz-drawer.nzMaskClosable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzCloseOnNavigation",
        "inputType": 0,
        "description": "nz-drawer.nzCloseOnNavigation.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzKeyboard",
        "inputType": 0,
        "description": "nz-drawer.nzKeyboard.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzMaskStyle",
        "inputType": 0,
        "description": "nz-drawer.nzMaskStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "`{}`",
        "pureDefault": "{}"
      },
      {
        "name": "nzBodyStyle",
        "inputType": 0,
        "description": "nz-drawer.nzBodyStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "`{}`",
        "pureDefault": "{}"
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-drawer.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzFooter",
        "inputType": 0,
        "description": "nz-drawer.nzFooter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzVisible",
        "inputType": 0,
        "description": "nz-drawer.nzVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-drawer.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'right' | 'bottom' | 'left'`",
        "default": "`'right'`",
        "typeDefinition": [
          "top",
          "right",
          "bottom",
          "left"
        ],
        "pureDefault": "right"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-drawer.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'large'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "large"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-drawer.nzWidth.description",
        "type": "number",
        "typeRaw": "`number | string`",
        "default": ""
      },
      {
        "name": "nzHeight",
        "inputType": 0,
        "description": "nz-drawer.nzHeight.description",
        "type": "number",
        "typeRaw": "`number | string`",
        "default": ""
      },
      {
        "name": "nzOffsetX",
        "inputType": 0,
        "description": "nz-drawer.nzOffsetX.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzOffsetY",
        "inputType": 0,
        "description": "nz-drawer.nzOffsetY.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzWrapClassName",
        "inputType": 0,
        "description": "nz-drawer.nzWrapClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzZIndex",
        "inputType": 0,
        "description": "nz-drawer.nzZIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1000`",
        "pureDefault": "1000"
      },
      {
        "name": "nzOnClose",
        "inputType": 1,
        "description": "nz-drawer.nzOnClose.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-drawer.title",
    "description": "nz-drawer.description",
    "whenToUse": "nz-drawer.whenToUse",
    "doc": "/components/drawer/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/drawer"
  },
  {
    "type": "directive",
    "selector": "nz-dropdown",
    "types": {},
    "properties": [
      {
        "name": "nzDropdownMenu",
        "inputType": 0,
        "description": "nz-dropdown.nzDropdownMenu.description",
        "type": "object",
        "typeRaw": "`NzDropdownMenuComponent`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-dropdown.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-dropdown.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'`",
        "default": "`'bottomLeft'`",
        "typeDefinition": [
          "bottomLeft",
          "bottomCenter",
          "bottomRight",
          "topLeft",
          "topCenter",
          "topRight"
        ],
        "pureDefault": "bottomLeft"
      },
      {
        "name": "nzTrigger",
        "inputType": 0,
        "description": "nz-dropdown.nzTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'hover'`",
        "default": "`'hover'`",
        "typeDefinition": [
          "click",
          "hover"
        ],
        "pureDefault": "hover"
      },
      {
        "name": "nzClickHide",
        "inputType": 0,
        "description": "nz-dropdown.nzClickHide.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzVisible",
        "inputType": 2,
        "description": "nz-dropdown.nzVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzOverlayClassName",
        "inputType": 0,
        "description": "nz-dropdown.nzOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzOverlayStyle",
        "inputType": 0,
        "description": "nz-dropdown.nzOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzVisibleChange",
        "inputType": 1,
        "description": "nz-dropdown.nzVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-dropdown.title",
    "description": "nz-dropdown.description",
    "whenToUse": "nz-dropdown.whenToUse",
    "doc": "/components/dropdown/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/dropdown"
  },
  {
    "type": "component",
    "selector": "nz-dropdown-menu",
    "types": {},
    "properties": [],
    "description": "nz-dropdown-menu.description",
    "lib": "ng-zorro-antd",
    "title": "nz-dropdown-menu.title",
    "whenToUse": "nz-dropdown-menu.whenToUse",
    "doc": "/components/dropdown/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/dropdown"
  },
  {
    "type": "component",
    "selector": "nz-empty",
    "types": {},
    "properties": [
      {
        "name": "nzNotFoundImage",
        "inputType": 0,
        "description": "nz-empty.nzNotFoundImage.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-empty.nzNotFoundContent.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void> | null`",
        "default": ""
      },
      {
        "name": "nzNotFoundFooter",
        "inputType": 0,
        "description": "nz-empty.nzNotFoundFooter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-empty.title",
    "description": "nz-empty.description",
    "whenToUse": "nz-empty.whenToUse",
    "doc": "/components/empty/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/empty"
  },
  {
    "type": "component",
    "selector": "nz-image",
    "types": {},
    "properties": [
      {
        "name": "nzSrc",
        "inputType": 0,
        "description": "nz-image.nzSrc.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAlt",
        "inputType": 0,
        "description": "nz-image.nzAlt.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-image.nzWidth.description",
        "type": "number",
        "typeRaw": "`number|string`",
        "default": "`auto`",
        "pureDefault": "auto"
      },
      {
        "name": "nzHeight",
        "inputType": 0,
        "description": "nz-image.nzHeight.description",
        "type": "number",
        "typeRaw": "`number|string`",
        "default": "`auto`",
        "pureDefault": "auto"
      },
      {
        "name": "nzAutoSrcset",
        "inputType": 0,
        "description": "nz-image.nzAutoSrcset.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSrcLoader",
        "inputType": 0,
        "description": "nz-image.nzSrcLoader.description",
        "type": "object",
        "typeRaw": "`NzImageSrcLoader`",
        "default": "`defaultImageSrcLoader`",
        "pureDefault": "defaultImageSrcLoader"
      },
      {
        "name": "nzPriority",
        "inputType": 0,
        "description": "nz-image.nzPriority.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-image.title",
    "description": "nz-image.description",
    "whenToUse": "nz-image.whenToUse",
    "doc": "/components/experimental-image/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/experimental-image"
  },
  {
    "type": "directive",
    "selector": "nz-form",
    "types": {},
    "properties": [
      {
        "name": "nzLayout",
        "inputType": 0,
        "description": "nz-form.nzLayout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal' | 'vertical' | 'inline'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical",
          "inline"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzAutoTips",
        "inputType": 0,
        "description": "nz-form.nzAutoTips.description",
        "type": "object",
        "typeRaw": "`Record<string, Record<string, string>>`",
        "default": "`{}`",
        "pureDefault": "{}"
      },
      {
        "name": "nzDisableAutoTips",
        "inputType": 0,
        "description": "nz-form.nzDisableAutoTips.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzNoColon",
        "inputType": 0,
        "description": "nz-form.nzNoColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipIcon",
        "inputType": 0,
        "description": "nz-form.nzTooltipIcon.description",
        "type": "string",
        "typeRaw": "`string | { type: string; theme: ThemeType }`",
        "default": "`{ type: 'question-circle', theme: 'outline' }`",
        "pureDefault": "{ type: 'question-circle', theme: 'outline' }"
      },
      {
        "name": "formGroup",
        "inputType": 0,
        "type": "object",
        "typeRaw": "`object`",
        "description": "nz-form.formGroup.description"
      },
      {
        "name": "ngSubmit",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "description": "nz-form.ngSubmit.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-form.title",
    "description": "nz-form.description",
    "whenToUse": "nz-form.whenToUse",
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form",
    "snippet": "<form __$1>$0</form>"
  },
  {
    "type": "component",
    "selector": "nz-form-item",
    "types": {},
    "properties": [
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "nz-form-item.nzAlign.description",
        "type": "Enum",
        "typeRaw": "`'top'|'middle'|'bottom'`",
        "default": "",
        "typeDefinition": [
          "top",
          "middle",
          "bottom"
        ]
      },
      {
        "name": "nzGutter",
        "inputType": 0,
        "description": "nz-form-item.nzGutter.description",
        "type": "Enum",
        "typeRaw": "`string|number|object|[number, number]|[object, object]`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzJustify",
        "inputType": 0,
        "description": "nz-form-item.nzJustify.description",
        "type": "Enum",
        "typeRaw": "`'start'|'end'|'center'|'space-around'|'space-between'`",
        "default": "",
        "typeDefinition": [
          "start",
          "end",
          "center",
          "space-around",
          "space-between"
        ]
      },
      {
        "name": "nzRequired",
        "inputType": 0,
        "description": "nz-form-item.nzRequired.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzNoColon",
        "inputType": 0,
        "description": "nz-form-item.nzNoColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFor",
        "inputType": 0,
        "description": "nz-form-item.nzFor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipTitle",
        "inputType": 0,
        "description": "nz-form-item.nzTooltipTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTooltipIcon",
        "inputType": 0,
        "description": "nz-form-item.nzTooltipIcon.description",
        "type": "string",
        "typeRaw": "`string | NzFormTooltipIcon`",
        "default": ""
      }
    ],
    "description": "nz-form-item.description",
    "lib": "ng-zorro-antd",
    "title": "nz-form-item.title",
    "whenToUse": "nz-form-item.whenToUse",
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form"
  },
  {
    "type": "component",
    "selector": "nz-form-label",
    "types": {},
    "properties": [
      {
        "name": "nzFlex",
        "inputType": 0,
        "description": "nz-form-label.nzFlex.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzOffset",
        "inputType": 0,
        "description": "nz-form-label.nzOffset.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzOrder",
        "inputType": 0,
        "description": "nz-form-label.nzOrder.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPull",
        "inputType": 0,
        "description": "nz-form-label.nzPull.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPush",
        "inputType": 0,
        "description": "nz-form-label.nzPush.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSpan",
        "inputType": 0,
        "description": "nz-form-label.nzSpan.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXs",
        "inputType": 0,
        "description": "nz-form-label.nzXs.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSm",
        "inputType": 0,
        "description": "nz-form-label.nzSm.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzMd",
        "inputType": 0,
        "description": "nz-form-label.nzMd.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzLg",
        "inputType": 0,
        "description": "nz-form-label.nzLg.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXl",
        "inputType": 0,
        "description": "nz-form-label.nzXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXXl",
        "inputType": 0,
        "description": "nz-form-label.nzXXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzRequired",
        "inputType": 0,
        "description": "nz-form-label.nzRequired.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzNoColon",
        "inputType": 0,
        "description": "nz-form-label.nzNoColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFor",
        "inputType": 0,
        "description": "nz-form-label.nzFor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipTitle",
        "inputType": 0,
        "description": "nz-form-label.nzTooltipTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTooltipIcon",
        "inputType": 0,
        "description": "nz-form-label.nzTooltipIcon.description",
        "type": "string",
        "typeRaw": "`string | NzFormTooltipIcon`",
        "default": ""
      }
    ],
    "description": "nz-form-label.description",
    "lib": "ng-zorro-antd",
    "title": "nz-form-label.title",
    "whenToUse": "nz-form-label.whenToUse",
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form"
  },
  {
    "type": "component",
    "selector": "nz-form-control",
    "types": {},
    "properties": [
      {
        "name": "nzFlex",
        "inputType": 0,
        "description": "nz-form-control.nzFlex.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzOffset",
        "inputType": 0,
        "description": "nz-form-control.nzOffset.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzOrder",
        "inputType": 0,
        "description": "nz-form-control.nzOrder.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPull",
        "inputType": 0,
        "description": "nz-form-control.nzPull.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzPush",
        "inputType": 0,
        "description": "nz-form-control.nzPush.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSpan",
        "inputType": 0,
        "description": "nz-form-control.nzSpan.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXs",
        "inputType": 0,
        "description": "nz-form-control.nzXs.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzSm",
        "inputType": 0,
        "description": "nz-form-control.nzSm.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzMd",
        "inputType": 0,
        "description": "nz-form-control.nzMd.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzLg",
        "inputType": 0,
        "description": "nz-form-control.nzLg.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXl",
        "inputType": 0,
        "description": "nz-form-control.nzXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzXXl",
        "inputType": 0,
        "description": "nz-form-control.nzXXl.description",
        "type": "Enum",
        "typeRaw": "`number | object`",
        "default": "",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "nzValidateStatus",
        "inputType": 0,
        "description": "nz-form-control.nzValidateStatus.description",
        "type": "Enum",
        "typeRaw": "`'success' | 'warning' | 'error' | 'validating'  |  FormControl  |  NgModel`",
        "default": "first `FormControl` or `NgModel` in `nz-form-control`",
        "typeDefinition": [
          "success",
          "warning",
          "error",
          "validating",
          "FormControl",
          "NgModel"
        ],
        "pureDefault": "first `FormControl` or `NgModel` in `nz-form-control`"
      },
      {
        "name": "nzHasFeedback",
        "inputType": 0,
        "description": "nz-form-control.nzHasFeedback.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-form-control.nzExtra.description",
        "type": "string",
        "typeRaw": "`string  |  TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSuccessTip",
        "inputType": 0,
        "description": "nz-form-control.nzSuccessTip.description",
        "type": "string",
        "typeRaw": "`string  |  TemplateRef<{ $implicit: FormControl  |  NgModel }>`",
        "default": ""
      },
      {
        "name": "nzWarningTip",
        "inputType": 0,
        "description": "nz-form-control.nzWarningTip.description",
        "type": "string",
        "typeRaw": "`string  |  TemplateRef<{ $implicit: FormControl  |  NgModel }>`",
        "default": ""
      },
      {
        "name": "nzErrorTip",
        "inputType": 0,
        "description": "nz-form-control.nzErrorTip.description",
        "type": "string",
        "typeRaw": "`string  |  TemplateRef<{ $implicit: FormControl  |  NgModel }>`",
        "default": ""
      },
      {
        "name": "nzValidatingTip",
        "inputType": 0,
        "description": "nz-form-control.nzValidatingTip.description",
        "type": "string",
        "typeRaw": "`string  |  TemplateRef<{ $implicit: FormControl  |  NgModel }>`",
        "default": ""
      },
      {
        "name": "nzAutoTips",
        "inputType": 0,
        "description": "nz-form-control.nzAutoTips.description",
        "type": "object",
        "typeRaw": "`Record<string, string | Record<string, string>>`",
        "default": ""
      },
      {
        "name": "nzDisableAutoTips",
        "inputType": 0,
        "description": "nz-form-control.nzDisableAutoTips.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      }
    ],
    "description": "nz-form-control.description",
    "lib": "ng-zorro-antd",
    "title": "nz-form-control.title",
    "whenToUse": "nz-form-control.whenToUse",
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form"
  },
  {
    "type": "component",
    "selector": "nz-form-split",
    "types": {},
    "properties": [],
    "description": "nz-form-split.description",
    "lib": "ng-zorro-antd",
    "title": "nz-form-split.title",
    "whenToUse": "nz-form-split.whenToUse",
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form"
  },
  {
    "type": "component",
    "selector": "nz-form-text",
    "types": {},
    "properties": [],
    "description": "nz-form-text.description",
    "lib": "ng-zorro-antd",
    "title": "nz-form-text.title",
    "whenToUse": "nz-form-text.whenToUse",
    "doc": "/components/form/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/form"
  },
  {
    "type": "component",
    "selector": "nz-graph",
    "types": {},
    "properties": [
      {
        "name": "nzGraphData",
        "inputType": 0,
        "description": "nz-graph.nzGraphData.description",
        "type": "object",
        "typeRaw": "`NzGraphData(data: NzGraphDataDef?)`",
        "default": "``",
        "pureDefault": ""
      },
      {
        "name": "nzRankDirection",
        "inputType": 0,
        "description": "nz-graph.nzRankDirection.description",
        "type": "object",
        "typeRaw": "`TB` | `BT` | `LR` | `RL`",
        "default": "`LR`",
        "pureDefault": "LR"
      },
      {
        "name": "nzAutoSize",
        "inputType": 0,
        "description": "nz-graph.nzAutoSize.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzGraphLayoutConfig",
        "inputType": 0,
        "description": "nz-graph.nzGraphLayoutConfig.description",
        "type": "object",
        "typeRaw": "`NzGraphLayoutConfig`",
        "default": "``",
        "pureDefault": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-graph.title",
    "description": "nz-graph.description",
    "whenToUse": "nz-graph.whenToUse",
    "doc": "/components/graph/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/graph"
  },
  {
    "type": "directive",
    "selector": "nz-graph-zoom",
    "types": {},
    "properties": [
      {
        "name": "nzZoom",
        "inputType": 2,
        "description": "nz-graph-zoom.nzZoom.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzMinZoom",
        "inputType": 0,
        "description": "nz-graph-zoom.nzMinZoom.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzMaxZoom",
        "inputType": 0,
        "description": "nz-graph-zoom.nzMaxZoom.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`10`",
        "pureDefault": "10"
      },
      {
        "name": "nzTransformEvent",
        "inputType": 1,
        "description": "nz-graph-zoom.nzTransformEvent.description",
        "type": "function",
        "typeRaw": "`() => NzZoomTransform`",
        "default": "``",
        "pureDefault": ""
      },
      {
        "name": "fitCenter",
        "inputType": 1,
        "description": "nz-graph-zoom.fitCenter.description",
        "type": "function",
        "typeRaw": "`() => void`",
        "default": "`void`",
        "pureDefault": "void"
      },
      {
        "name": "focus",
        "inputType": 1,
        "description": "nz-graph-zoom.focus.description",
        "type": "function",
        "typeRaw": "`(e: SVGGElement, duration: number) => void`",
        "default": "`void`",
        "pureDefault": "void"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-graph-zoom.title",
    "description": "nz-graph-zoom.description",
    "whenToUse": "nz-graph-zoom.whenToUse",
    "doc": "/components/graph/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/graph"
  },
  {
    "type": "directive",
    "selector": "nzGraphNode",
    "types": {},
    "properties": [],
    "description": "nzGraphNode.description",
    "lib": "ng-zorro-antd",
    "title": "nzGraphNode.title",
    "whenToUse": "nzGraphNode.whenToUse",
    "doc": "/components/graph/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/graph"
  },
  {
    "type": "directive",
    "selector": "nzGraphGroupNode",
    "types": {},
    "properties": [],
    "description": "nzGraphGroupNode.description",
    "lib": "ng-zorro-antd",
    "title": "nzGraphGroupNode.title",
    "whenToUse": "nzGraphGroupNode.whenToUse",
    "doc": "/components/graph/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/graph"
  },
  {
    "type": "directive",
    "selector": "nzGraphEdge",
    "types": {},
    "properties": [],
    "description": "nzGraphEdge.description",
    "lib": "ng-zorro-antd",
    "title": "nzGraphEdge.title",
    "whenToUse": "nzGraphEdge.whenToUse",
    "doc": "/components/graph/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/graph"
  },
  {
    "type": "directive",
    "selector": "nz-icon",
    "types": {},
    "properties": [
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-icon.nzType.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "",
        "typeDefinition": {
          "type": "complex",
          "conditionField": "theme",
          "list": [
            {
              "conditionValue": "outline",
              "values": [
                {
                  "value": "alert",
                  "label": "alert"
                },
                {
                  "value": "account-book",
                  "label": "account-book"
                },
                {
                  "value": "aim",
                  "label": "aim"
                },
                {
                  "value": "align-center",
                  "label": "align-center"
                },
                {
                  "value": "align-right",
                  "label": "align-right"
                },
                {
                  "value": "align-left",
                  "label": "align-left"
                },
                {
                  "value": "alibaba",
                  "label": "alibaba"
                },
                {
                  "value": "alipay-circle",
                  "label": "alipay-circle"
                },
                {
                  "value": "alipay",
                  "label": "alipay"
                },
                {
                  "value": "aliwangwang",
                  "label": "aliwangwang"
                },
                {
                  "value": "aliyun",
                  "label": "aliyun"
                },
                {
                  "value": "ant-design",
                  "label": "ant-design"
                },
                {
                  "value": "android",
                  "label": "android"
                },
                {
                  "value": "apartment",
                  "label": "apartment"
                },
                {
                  "value": "ant-cloud",
                  "label": "ant-cloud"
                },
                {
                  "value": "amazon",
                  "label": "amazon"
                },
                {
                  "value": "api",
                  "label": "api"
                },
                {
                  "value": "appstore-add",
                  "label": "appstore-add"
                },
                {
                  "value": "appstore",
                  "label": "appstore"
                },
                {
                  "value": "apple",
                  "label": "apple"
                },
                {
                  "value": "area-chart",
                  "label": "area-chart"
                },
                {
                  "value": "arrow-right",
                  "label": "arrow-right"
                },
                {
                  "value": "arrow-down",
                  "label": "arrow-down"
                },
                {
                  "value": "arrow-up",
                  "label": "arrow-up"
                },
                {
                  "value": "arrow-left",
                  "label": "arrow-left"
                },
                {
                  "value": "arrows-alt",
                  "label": "arrows-alt"
                },
                {
                  "value": "audio-muted",
                  "label": "audio-muted"
                },
                {
                  "value": "audio",
                  "label": "audio"
                },
                {
                  "value": "backward",
                  "label": "backward"
                },
                {
                  "value": "audit",
                  "label": "audit"
                },
                {
                  "value": "bank",
                  "label": "bank"
                },
                {
                  "value": "barcode",
                  "label": "barcode"
                },
                {
                  "value": "bars",
                  "label": "bars"
                },
                {
                  "value": "bar-chart",
                  "label": "bar-chart"
                },
                {
                  "value": "behance",
                  "label": "behance"
                },
                {
                  "value": "behance-square",
                  "label": "behance-square"
                },
                {
                  "value": "bg-colors",
                  "label": "bg-colors"
                },
                {
                  "value": "bell",
                  "label": "bell"
                },
                {
                  "value": "block",
                  "label": "block"
                },
                {
                  "value": "bold",
                  "label": "bold"
                },
                {
                  "value": "book",
                  "label": "book"
                },
                {
                  "value": "border-bottom",
                  "label": "border-bottom"
                },
                {
                  "value": "border-horizontal",
                  "label": "border-horizontal"
                },
                {
                  "value": "border-left",
                  "label": "border-left"
                },
                {
                  "value": "border-outer",
                  "label": "border-outer"
                },
                {
                  "value": "border-inner",
                  "label": "border-inner"
                },
                {
                  "value": "border-right",
                  "label": "border-right"
                },
                {
                  "value": "border-top",
                  "label": "border-top"
                },
                {
                  "value": "border-verticle",
                  "label": "border-verticle"
                },
                {
                  "value": "border",
                  "label": "border"
                },
                {
                  "value": "box-plot",
                  "label": "box-plot"
                },
                {
                  "value": "borderless-table",
                  "label": "borderless-table"
                },
                {
                  "value": "bug",
                  "label": "bug"
                },
                {
                  "value": "branches",
                  "label": "branches"
                },
                {
                  "value": "build",
                  "label": "build"
                },
                {
                  "value": "bulb",
                  "label": "bulb"
                },
                {
                  "value": "calculator",
                  "label": "calculator"
                },
                {
                  "value": "calendar",
                  "label": "calendar"
                },
                {
                  "value": "camera",
                  "label": "camera"
                },
                {
                  "value": "caret-down",
                  "label": "caret-down"
                },
                {
                  "value": "car",
                  "label": "car"
                },
                {
                  "value": "caret-left",
                  "label": "caret-left"
                },
                {
                  "value": "caret-right",
                  "label": "caret-right"
                },
                {
                  "value": "caret-up",
                  "label": "caret-up"
                },
                {
                  "value": "carry-out",
                  "label": "carry-out"
                },
                {
                  "value": "check-circle",
                  "label": "check-circle"
                },
                {
                  "value": "check",
                  "label": "check"
                },
                {
                  "value": "check-square",
                  "label": "check-square"
                },
                {
                  "value": "ci-circle",
                  "label": "ci-circle"
                },
                {
                  "value": "ci",
                  "label": "ci"
                },
                {
                  "value": "chrome",
                  "label": "chrome"
                },
                {
                  "value": "clock-circle",
                  "label": "clock-circle"
                },
                {
                  "value": "clear",
                  "label": "clear"
                },
                {
                  "value": "close-circle",
                  "label": "close-circle"
                },
                {
                  "value": "close-square",
                  "label": "close-square"
                },
                {
                  "value": "close",
                  "label": "close"
                },
                {
                  "value": "cloud-server",
                  "label": "cloud-server"
                },
                {
                  "value": "cloud-sync",
                  "label": "cloud-sync"
                },
                {
                  "value": "cloud-upload",
                  "label": "cloud-upload"
                },
                {
                  "value": "cloud-download",
                  "label": "cloud-download"
                },
                {
                  "value": "cluster",
                  "label": "cluster"
                },
                {
                  "value": "cloud",
                  "label": "cloud"
                },
                {
                  "value": "code-sandbox",
                  "label": "code-sandbox"
                },
                {
                  "value": "code",
                  "label": "code"
                },
                {
                  "value": "codepen-circle",
                  "label": "codepen-circle"
                },
                {
                  "value": "codepen",
                  "label": "codepen"
                },
                {
                  "value": "column-height",
                  "label": "column-height"
                },
                {
                  "value": "coffee",
                  "label": "coffee"
                },
                {
                  "value": "comment",
                  "label": "comment"
                },
                {
                  "value": "compass",
                  "label": "compass"
                },
                {
                  "value": "column-width",
                  "label": "column-width"
                },
                {
                  "value": "compress",
                  "label": "compress"
                },
                {
                  "value": "console-sql",
                  "label": "console-sql"
                },
                {
                  "value": "contacts",
                  "label": "contacts"
                },
                {
                  "value": "container",
                  "label": "container"
                },
                {
                  "value": "control",
                  "label": "control"
                },
                {
                  "value": "copy",
                  "label": "copy"
                },
                {
                  "value": "copyright-circle",
                  "label": "copyright-circle"
                },
                {
                  "value": "copyright",
                  "label": "copyright"
                },
                {
                  "value": "credit-card",
                  "label": "credit-card"
                },
                {
                  "value": "dash",
                  "label": "dash"
                },
                {
                  "value": "customer-service",
                  "label": "customer-service"
                },
                {
                  "value": "crown",
                  "label": "crown"
                },
                {
                  "value": "dashboard",
                  "label": "dashboard"
                },
                {
                  "value": "database",
                  "label": "database"
                },
                {
                  "value": "delete-column",
                  "label": "delete-column"
                },
                {
                  "value": "delete-row",
                  "label": "delete-row"
                },
                {
                  "value": "delete",
                  "label": "delete"
                },
                {
                  "value": "deployment-unit",
                  "label": "deployment-unit"
                },
                {
                  "value": "desktop",
                  "label": "desktop"
                },
                {
                  "value": "delivered-procedure",
                  "label": "delivered-procedure"
                },
                {
                  "value": "dingtalk",
                  "label": "dingtalk"
                },
                {
                  "value": "diff",
                  "label": "diff"
                },
                {
                  "value": "dingding",
                  "label": "dingding"
                },
                {
                  "value": "disconnect",
                  "label": "disconnect"
                },
                {
                  "value": "dislike",
                  "label": "dislike"
                },
                {
                  "value": "dollar-circle",
                  "label": "dollar-circle"
                },
                {
                  "value": "dollar",
                  "label": "dollar"
                },
                {
                  "value": "dot-chart",
                  "label": "dot-chart"
                },
                {
                  "value": "double-left",
                  "label": "double-left"
                },
                {
                  "value": "double-right",
                  "label": "double-right"
                },
                {
                  "value": "down-square",
                  "label": "down-square"
                },
                {
                  "value": "down",
                  "label": "down"
                },
                {
                  "value": "down-circle",
                  "label": "down-circle"
                },
                {
                  "value": "download",
                  "label": "download"
                },
                {
                  "value": "dribbble",
                  "label": "dribbble"
                },
                {
                  "value": "drag",
                  "label": "drag"
                },
                {
                  "value": "dribbble-square",
                  "label": "dribbble-square"
                },
                {
                  "value": "dropbox",
                  "label": "dropbox"
                },
                {
                  "value": "edit",
                  "label": "edit"
                },
                {
                  "value": "ellipsis",
                  "label": "ellipsis"
                },
                {
                  "value": "enter",
                  "label": "enter"
                },
                {
                  "value": "euro-circle",
                  "label": "euro-circle"
                },
                {
                  "value": "environment",
                  "label": "environment"
                },
                {
                  "value": "euro",
                  "label": "euro"
                },
                {
                  "value": "exclamation-circle",
                  "label": "exclamation-circle"
                },
                {
                  "value": "expand-alt",
                  "label": "expand-alt"
                },
                {
                  "value": "exclamation",
                  "label": "exclamation"
                },
                {
                  "value": "exception",
                  "label": "exception"
                },
                {
                  "value": "expand",
                  "label": "expand"
                },
                {
                  "value": "experiment",
                  "label": "experiment"
                },
                {
                  "value": "export",
                  "label": "export"
                },
                {
                  "value": "eye-invisible",
                  "label": "eye-invisible"
                },
                {
                  "value": "eye",
                  "label": "eye"
                },
                {
                  "value": "facebook",
                  "label": "facebook"
                },
                {
                  "value": "fast-backward",
                  "label": "fast-backward"
                },
                {
                  "value": "fall",
                  "label": "fall"
                },
                {
                  "value": "fast-forward",
                  "label": "fast-forward"
                },
                {
                  "value": "field-binary",
                  "label": "field-binary"
                },
                {
                  "value": "field-time",
                  "label": "field-time"
                },
                {
                  "value": "field-number",
                  "label": "field-number"
                },
                {
                  "value": "field-string",
                  "label": "field-string"
                },
                {
                  "value": "file-add",
                  "label": "file-add"
                },
                {
                  "value": "file-done",
                  "label": "file-done"
                },
                {
                  "value": "file-excel",
                  "label": "file-excel"
                },
                {
                  "value": "file-exclamation",
                  "label": "file-exclamation"
                },
                {
                  "value": "file-gif",
                  "label": "file-gif"
                },
                {
                  "value": "file-image",
                  "label": "file-image"
                },
                {
                  "value": "file-jpg",
                  "label": "file-jpg"
                },
                {
                  "value": "file-ppt",
                  "label": "file-ppt"
                },
                {
                  "value": "file-markdown",
                  "label": "file-markdown"
                },
                {
                  "value": "file-pdf",
                  "label": "file-pdf"
                },
                {
                  "value": "file-protect",
                  "label": "file-protect"
                },
                {
                  "value": "file-search",
                  "label": "file-search"
                },
                {
                  "value": "file-text",
                  "label": "file-text"
                },
                {
                  "value": "file-sync",
                  "label": "file-sync"
                },
                {
                  "value": "file-unknown",
                  "label": "file-unknown"
                },
                {
                  "value": "file-word",
                  "label": "file-word"
                },
                {
                  "value": "file-zip",
                  "label": "file-zip"
                },
                {
                  "value": "filter",
                  "label": "filter"
                },
                {
                  "value": "fire",
                  "label": "fire"
                },
                {
                  "value": "file",
                  "label": "file"
                },
                {
                  "value": "folder-add",
                  "label": "folder-add"
                },
                {
                  "value": "folder-open",
                  "label": "folder-open"
                },
                {
                  "value": "flag",
                  "label": "flag"
                },
                {
                  "value": "font-colors",
                  "label": "font-colors"
                },
                {
                  "value": "folder",
                  "label": "folder"
                },
                {
                  "value": "font-size",
                  "label": "font-size"
                },
                {
                  "value": "folder-view",
                  "label": "folder-view"
                },
                {
                  "value": "forward",
                  "label": "forward"
                },
                {
                  "value": "fork",
                  "label": "fork"
                },
                {
                  "value": "form",
                  "label": "form"
                },
                {
                  "value": "format-painter",
                  "label": "format-painter"
                },
                {
                  "value": "fullscreen-exit",
                  "label": "fullscreen-exit"
                },
                {
                  "value": "fund-projection-screen",
                  "label": "fund-projection-screen"
                },
                {
                  "value": "frown",
                  "label": "frown"
                },
                {
                  "value": "fullscreen",
                  "label": "fullscreen"
                },
                {
                  "value": "fund-view",
                  "label": "fund-view"
                },
                {
                  "value": "function",
                  "label": "function"
                },
                {
                  "value": "fund",
                  "label": "fund"
                },
                {
                  "value": "funnel-plot",
                  "label": "funnel-plot"
                },
                {
                  "value": "gif",
                  "label": "gif"
                },
                {
                  "value": "gateway",
                  "label": "gateway"
                },
                {
                  "value": "github",
                  "label": "github"
                },
                {
                  "value": "gift",
                  "label": "gift"
                },
                {
                  "value": "gold",
                  "label": "gold"
                },
                {
                  "value": "google-plus",
                  "label": "google-plus"
                },
                {
                  "value": "google",
                  "label": "google"
                },
                {
                  "value": "gitlab",
                  "label": "gitlab"
                },
                {
                  "value": "global",
                  "label": "global"
                },
                {
                  "value": "hdd",
                  "label": "hdd"
                },
                {
                  "value": "heat-map",
                  "label": "heat-map"
                },
                {
                  "value": "group",
                  "label": "group"
                },
                {
                  "value": "highlight",
                  "label": "highlight"
                },
                {
                  "value": "heart",
                  "label": "heart"
                },
                {
                  "value": "history",
                  "label": "history"
                },
                {
                  "value": "home",
                  "label": "home"
                },
                {
                  "value": "ie",
                  "label": "ie"
                },
                {
                  "value": "hourglass",
                  "label": "hourglass"
                },
                {
                  "value": "idcard",
                  "label": "idcard"
                },
                {
                  "value": "import",
                  "label": "import"
                },
                {
                  "value": "inbox",
                  "label": "inbox"
                },
                {
                  "value": "html5",
                  "label": "html5"
                },
                {
                  "value": "info",
                  "label": "info"
                },
                {
                  "value": "info-circle",
                  "label": "info-circle"
                },
                {
                  "value": "insert-row-right",
                  "label": "insert-row-right"
                },
                {
                  "value": "insert-row-above",
                  "label": "insert-row-above"
                },
                {
                  "value": "issues-close",
                  "label": "issues-close"
                },
                {
                  "value": "instagram",
                  "label": "instagram"
                },
                {
                  "value": "insert-row-below",
                  "label": "insert-row-below"
                },
                {
                  "value": "left-square",
                  "label": "left-square"
                },
                {
                  "value": "layout",
                  "label": "layout"
                },
                {
                  "value": "insurance",
                  "label": "insurance"
                },
                {
                  "value": "key",
                  "label": "key"
                },
                {
                  "value": "laptop",
                  "label": "laptop"
                },
                {
                  "value": "insert-row-left",
                  "label": "insert-row-left"
                },
                {
                  "value": "left",
                  "label": "left"
                },
                {
                  "value": "italic",
                  "label": "italic"
                },
                {
                  "value": "left-circle",
                  "label": "left-circle"
                },
                {
                  "value": "line-height",
                  "label": "line-height"
                },
                {
                  "value": "like",
                  "label": "like"
                },
                {
                  "value": "interaction",
                  "label": "interaction"
                },
                {
                  "value": "linkedin",
                  "label": "linkedin"
                },
                {
                  "value": "loading",
                  "label": "loading"
                },
                {
                  "value": "link",
                  "label": "link"
                },
                {
                  "value": "loading-3-quarters",
                  "label": "loading-3-quarters"
                },
                {
                  "value": "login",
                  "label": "login"
                },
                {
                  "value": "line-chart",
                  "label": "line-chart"
                },
                {
                  "value": "line",
                  "label": "line"
                },
                {
                  "value": "lock",
                  "label": "lock"
                },
                {
                  "value": "medium-workmark",
                  "label": "medium-workmark"
                },
                {
                  "value": "logout",
                  "label": "logout"
                },
                {
                  "value": "mail",
                  "label": "mail"
                },
                {
                  "value": "mac-command",
                  "label": "mac-command"
                },
                {
                  "value": "man",
                  "label": "man"
                },
                {
                  "value": "medicine-box",
                  "label": "medicine-box"
                },
                {
                  "value": "menu-unfold",
                  "label": "menu-unfold"
                },
                {
                  "value": "medium",
                  "label": "medium"
                },
                {
                  "value": "menu-fold",
                  "label": "menu-fold"
                },
                {
                  "value": "menu",
                  "label": "menu"
                },
                {
                  "value": "meh",
                  "label": "meh"
                },
                {
                  "value": "minus-circle",
                  "label": "minus-circle"
                },
                {
                  "value": "minus",
                  "label": "minus"
                },
                {
                  "value": "message",
                  "label": "message"
                },
                {
                  "value": "minus-square",
                  "label": "minus-square"
                },
                {
                  "value": "merge-cells",
                  "label": "merge-cells"
                },
                {
                  "value": "more",
                  "label": "more"
                },
                {
                  "value": "node-collapse",
                  "label": "node-collapse"
                },
                {
                  "value": "node-index",
                  "label": "node-index"
                },
                {
                  "value": "mobile",
                  "label": "mobile"
                },
                {
                  "value": "one-to-one",
                  "label": "one-to-one"
                },
                {
                  "value": "node-expand",
                  "label": "node-expand"
                },
                {
                  "value": "notification",
                  "label": "notification"
                },
                {
                  "value": "money-collect",
                  "label": "money-collect"
                },
                {
                  "value": "number",
                  "label": "number"
                },
                {
                  "value": "monitor",
                  "label": "monitor"
                },
                {
                  "value": "pause",
                  "label": "pause"
                },
                {
                  "value": "pause-circle",
                  "label": "pause-circle"
                },
                {
                  "value": "pay-circle",
                  "label": "pay-circle"
                },
                {
                  "value": "ordered-list",
                  "label": "ordered-list"
                },
                {
                  "value": "partition",
                  "label": "partition"
                },
                {
                  "value": "percentage",
                  "label": "percentage"
                },
                {
                  "value": "paper-clip",
                  "label": "paper-clip"
                },
                {
                  "value": "phone",
                  "label": "phone"
                },
                {
                  "value": "pic-center",
                  "label": "pic-center"
                },
                {
                  "value": "pic-left",
                  "label": "pic-left"
                },
                {
                  "value": "play-circle",
                  "label": "play-circle"
                },
                {
                  "value": "picture",
                  "label": "picture"
                },
                {
                  "value": "pic-right",
                  "label": "pic-right"
                },
                {
                  "value": "plus-circle",
                  "label": "plus-circle"
                },
                {
                  "value": "play-square",
                  "label": "play-square"
                },
                {
                  "value": "pie-chart",
                  "label": "pie-chart"
                },
                {
                  "value": "pound-circle",
                  "label": "pound-circle"
                },
                {
                  "value": "printer",
                  "label": "printer"
                },
                {
                  "value": "pound",
                  "label": "pound"
                },
                {
                  "value": "plus",
                  "label": "plus"
                },
                {
                  "value": "project",
                  "label": "project"
                },
                {
                  "value": "poweroff",
                  "label": "poweroff"
                },
                {
                  "value": "profile",
                  "label": "profile"
                },
                {
                  "value": "pull-request",
                  "label": "pull-request"
                },
                {
                  "value": "qrcode",
                  "label": "qrcode"
                },
                {
                  "value": "plus-square",
                  "label": "plus-square"
                },
                {
                  "value": "radius-bottomright",
                  "label": "radius-bottomright"
                },
                {
                  "value": "pushpin",
                  "label": "pushpin"
                },
                {
                  "value": "radius-setting",
                  "label": "radius-setting"
                },
                {
                  "value": "radar-chart",
                  "label": "radar-chart"
                },
                {
                  "value": "qq",
                  "label": "qq"
                },
                {
                  "value": "property-safety",
                  "label": "property-safety"
                },
                {
                  "value": "radius-upleft",
                  "label": "radius-upleft"
                },
                {
                  "value": "question-circle",
                  "label": "question-circle"
                },
                {
                  "value": "reconciliation",
                  "label": "reconciliation"
                },
                {
                  "value": "radius-bottomleft",
                  "label": "radius-bottomleft"
                },
                {
                  "value": "read",
                  "label": "read"
                },
                {
                  "value": "redo",
                  "label": "redo"
                },
                {
                  "value": "question",
                  "label": "question"
                },
                {
                  "value": "radius-upright",
                  "label": "radius-upright"
                },
                {
                  "value": "rest",
                  "label": "rest"
                },
                {
                  "value": "red-envelope",
                  "label": "red-envelope"
                },
                {
                  "value": "right",
                  "label": "right"
                },
                {
                  "value": "reload",
                  "label": "reload"
                },
                {
                  "value": "reddit",
                  "label": "reddit"
                },
                {
                  "value": "retweet",
                  "label": "retweet"
                },
                {
                  "value": "right-square",
                  "label": "right-square"
                },
                {
                  "value": "rise",
                  "label": "rise"
                },
                {
                  "value": "robot",
                  "label": "robot"
                },
                {
                  "value": "right-circle",
                  "label": "right-circle"
                },
                {
                  "value": "rollback",
                  "label": "rollback"
                },
                {
                  "value": "safety-certificate",
                  "label": "safety-certificate"
                },
                {
                  "value": "rocket",
                  "label": "rocket"
                },
                {
                  "value": "safety",
                  "label": "safety"
                },
                {
                  "value": "save",
                  "label": "save"
                },
                {
                  "value": "rotate-right",
                  "label": "rotate-right"
                },
                {
                  "value": "rotate-left",
                  "label": "rotate-left"
                },
                {
                  "value": "scan",
                  "label": "scan"
                },
                {
                  "value": "schedule",
                  "label": "schedule"
                },
                {
                  "value": "search",
                  "label": "search"
                },
                {
                  "value": "share-alt",
                  "label": "share-alt"
                },
                {
                  "value": "scissor",
                  "label": "scissor"
                },
                {
                  "value": "select",
                  "label": "select"
                },
                {
                  "value": "security-scan",
                  "label": "security-scan"
                },
                {
                  "value": "shop",
                  "label": "shop"
                },
                {
                  "value": "shrink",
                  "label": "shrink"
                },
                {
                  "value": "send",
                  "label": "send"
                },
                {
                  "value": "shake",
                  "label": "shake"
                },
                {
                  "value": "setting",
                  "label": "setting"
                },
                {
                  "value": "skin",
                  "label": "skin"
                },
                {
                  "value": "shopping",
                  "label": "shopping"
                },
                {
                  "value": "sisternode",
                  "label": "sisternode"
                },
                {
                  "value": "slack-square",
                  "label": "slack-square"
                },
                {
                  "value": "shopping-cart",
                  "label": "shopping-cart"
                },
                {
                  "value": "smile",
                  "label": "smile"
                },
                {
                  "value": "skype",
                  "label": "skype"
                },
                {
                  "value": "small-dash",
                  "label": "small-dash"
                },
                {
                  "value": "slack",
                  "label": "slack"
                },
                {
                  "value": "sketch",
                  "label": "sketch"
                },
                {
                  "value": "sliders",
                  "label": "sliders"
                },
                {
                  "value": "solution",
                  "label": "solution"
                },
                {
                  "value": "sort-descending",
                  "label": "sort-descending"
                },
                {
                  "value": "step-backward",
                  "label": "step-backward"
                },
                {
                  "value": "snippets",
                  "label": "snippets"
                },
                {
                  "value": "star",
                  "label": "star"
                },
                {
                  "value": "split-cells",
                  "label": "split-cells"
                },
                {
                  "value": "step-forward",
                  "label": "step-forward"
                },
                {
                  "value": "sort-ascending",
                  "label": "sort-ascending"
                },
                {
                  "value": "stock",
                  "label": "stock"
                },
                {
                  "value": "sound",
                  "label": "sound"
                },
                {
                  "value": "stop",
                  "label": "stop"
                },
                {
                  "value": "subnode",
                  "label": "subnode"
                },
                {
                  "value": "swap-left",
                  "label": "swap-left"
                },
                {
                  "value": "table",
                  "label": "table"
                },
                {
                  "value": "strikethrough",
                  "label": "strikethrough"
                },
                {
                  "value": "swap",
                  "label": "swap"
                },
                {
                  "value": "switcher",
                  "label": "switcher"
                },
                {
                  "value": "tablet",
                  "label": "tablet"
                },
                {
                  "value": "tags",
                  "label": "tags"
                },
                {
                  "value": "swap-right",
                  "label": "swap-right"
                },
                {
                  "value": "taobao",
                  "label": "taobao"
                },
                {
                  "value": "taobao-circle",
                  "label": "taobao-circle"
                },
                {
                  "value": "team",
                  "label": "team"
                },
                {
                  "value": "sync",
                  "label": "sync"
                },
                {
                  "value": "tool",
                  "label": "tool"
                },
                {
                  "value": "tag",
                  "label": "tag"
                },
                {
                  "value": "to-top",
                  "label": "to-top"
                },
                {
                  "value": "trademark",
                  "label": "trademark"
                },
                {
                  "value": "trademark-circle",
                  "label": "trademark-circle"
                },
                {
                  "value": "twitter",
                  "label": "twitter"
                },
                {
                  "value": "thunderbolt",
                  "label": "thunderbolt"
                },
                {
                  "value": "trophy",
                  "label": "trophy"
                },
                {
                  "value": "translation",
                  "label": "translation"
                },
                {
                  "value": "transaction",
                  "label": "transaction"
                },
                {
                  "value": "undo",
                  "label": "undo"
                },
                {
                  "value": "unordered-list",
                  "label": "unordered-list"
                },
                {
                  "value": "unlock",
                  "label": "unlock"
                },
                {
                  "value": "underline",
                  "label": "underline"
                },
                {
                  "value": "up-circle",
                  "label": "up-circle"
                },
                {
                  "value": "upload",
                  "label": "upload"
                },
                {
                  "value": "up-square",
                  "label": "up-square"
                },
                {
                  "value": "up",
                  "label": "up"
                },
                {
                  "value": "user-switch",
                  "label": "user-switch"
                },
                {
                  "value": "user-delete",
                  "label": "user-delete"
                },
                {
                  "value": "ungroup",
                  "label": "ungroup"
                },
                {
                  "value": "verified",
                  "label": "verified"
                },
                {
                  "value": "user",
                  "label": "user"
                },
                {
                  "value": "usb",
                  "label": "usb"
                },
                {
                  "value": "usergroup-delete",
                  "label": "usergroup-delete"
                },
                {
                  "value": "usergroup-add",
                  "label": "usergroup-add"
                },
                {
                  "value": "vertical-left",
                  "label": "vertical-left"
                },
                {
                  "value": "user-add",
                  "label": "user-add"
                },
                {
                  "value": "vertical-align-middle",
                  "label": "vertical-align-middle"
                },
                {
                  "value": "vertical-align-top",
                  "label": "vertical-align-top"
                },
                {
                  "value": "video-camera-add",
                  "label": "video-camera-add"
                },
                {
                  "value": "vertical-align-bottom",
                  "label": "vertical-align-bottom"
                },
                {
                  "value": "wallet",
                  "label": "wallet"
                },
                {
                  "value": "vertical-right",
                  "label": "vertical-right"
                },
                {
                  "value": "video-camera",
                  "label": "video-camera"
                },
                {
                  "value": "weibo-circle",
                  "label": "weibo-circle"
                },
                {
                  "value": "wechat",
                  "label": "wechat"
                },
                {
                  "value": "warning",
                  "label": "warning"
                },
                {
                  "value": "weibo",
                  "label": "weibo"
                },
                {
                  "value": "weibo-square",
                  "label": "weibo-square"
                },
                {
                  "value": "woman",
                  "label": "woman"
                },
                {
                  "value": "whats-app",
                  "label": "whats-app"
                },
                {
                  "value": "windows",
                  "label": "windows"
                },
                {
                  "value": "yuque",
                  "label": "yuque"
                },
                {
                  "value": "yahoo",
                  "label": "yahoo"
                },
                {
                  "value": "youtube",
                  "label": "youtube"
                },
                {
                  "value": "zoom-out",
                  "label": "zoom-out"
                },
                {
                  "value": "wifi",
                  "label": "wifi"
                },
                {
                  "value": "zoom-in",
                  "label": "zoom-in"
                },
                {
                  "value": "zhihu",
                  "label": "zhihu"
                }
              ]
            },
            {
              "conditionValue": "fill",
              "values": [
                {
                  "value": "alert",
                  "label": "alert"
                },
                {
                  "value": "account-book",
                  "label": "account-book"
                },
                {
                  "value": "alipay-circle",
                  "label": "alipay-circle"
                },
                {
                  "value": "alipay-square",
                  "label": "alipay-square"
                },
                {
                  "value": "amazon-circle",
                  "label": "amazon-circle"
                },
                {
                  "value": "aliwangwang",
                  "label": "aliwangwang"
                },
                {
                  "value": "amazon-square",
                  "label": "amazon-square"
                },
                {
                  "value": "android",
                  "label": "android"
                },
                {
                  "value": "api",
                  "label": "api"
                },
                {
                  "value": "apple",
                  "label": "apple"
                },
                {
                  "value": "appstore",
                  "label": "appstore"
                },
                {
                  "value": "audio",
                  "label": "audio"
                },
                {
                  "value": "backward",
                  "label": "backward"
                },
                {
                  "value": "bank",
                  "label": "bank"
                },
                {
                  "value": "behance-circle",
                  "label": "behance-circle"
                },
                {
                  "value": "book",
                  "label": "book"
                },
                {
                  "value": "box-plot",
                  "label": "box-plot"
                },
                {
                  "value": "bell",
                  "label": "bell"
                },
                {
                  "value": "behance-square",
                  "label": "behance-square"
                },
                {
                  "value": "build",
                  "label": "build"
                },
                {
                  "value": "bug",
                  "label": "bug"
                },
                {
                  "value": "bulb",
                  "label": "bulb"
                },
                {
                  "value": "calculator",
                  "label": "calculator"
                },
                {
                  "value": "camera",
                  "label": "camera"
                },
                {
                  "value": "calendar",
                  "label": "calendar"
                },
                {
                  "value": "car",
                  "label": "car"
                },
                {
                  "value": "caret-left",
                  "label": "caret-left"
                },
                {
                  "value": "caret-down",
                  "label": "caret-down"
                },
                {
                  "value": "caret-up",
                  "label": "caret-up"
                },
                {
                  "value": "caret-right",
                  "label": "caret-right"
                },
                {
                  "value": "carry-out",
                  "label": "carry-out"
                },
                {
                  "value": "check-circle",
                  "label": "check-circle"
                },
                {
                  "value": "chrome",
                  "label": "chrome"
                },
                {
                  "value": "clock-circle",
                  "label": "clock-circle"
                },
                {
                  "value": "check-square",
                  "label": "check-square"
                },
                {
                  "value": "close-circle",
                  "label": "close-circle"
                },
                {
                  "value": "ci-circle",
                  "label": "ci-circle"
                },
                {
                  "value": "code-sandbox-circle",
                  "label": "code-sandbox-circle"
                },
                {
                  "value": "close-square",
                  "label": "close-square"
                },
                {
                  "value": "cloud",
                  "label": "cloud"
                },
                {
                  "value": "code-sandbox-square",
                  "label": "code-sandbox-square"
                },
                {
                  "value": "codepen-circle",
                  "label": "codepen-circle"
                },
                {
                  "value": "code",
                  "label": "code"
                },
                {
                  "value": "contacts",
                  "label": "contacts"
                },
                {
                  "value": "compass",
                  "label": "compass"
                },
                {
                  "value": "codepen-square",
                  "label": "codepen-square"
                },
                {
                  "value": "control",
                  "label": "control"
                },
                {
                  "value": "container",
                  "label": "container"
                },
                {
                  "value": "copy",
                  "label": "copy"
                },
                {
                  "value": "credit-card",
                  "label": "credit-card"
                },
                {
                  "value": "customer-service",
                  "label": "customer-service"
                },
                {
                  "value": "copyright-circle",
                  "label": "copyright-circle"
                },
                {
                  "value": "database",
                  "label": "database"
                },
                {
                  "value": "crown",
                  "label": "crown"
                },
                {
                  "value": "dashboard",
                  "label": "dashboard"
                },
                {
                  "value": "diff",
                  "label": "diff"
                },
                {
                  "value": "delete",
                  "label": "delete"
                },
                {
                  "value": "dingtalk-circle",
                  "label": "dingtalk-circle"
                },
                {
                  "value": "dingtalk-square",
                  "label": "dingtalk-square"
                },
                {
                  "value": "dislike",
                  "label": "dislike"
                },
                {
                  "value": "dollar-circle",
                  "label": "dollar-circle"
                },
                {
                  "value": "down-square",
                  "label": "down-square"
                },
                {
                  "value": "down-circle",
                  "label": "down-circle"
                },
                {
                  "value": "dribbble-circle",
                  "label": "dribbble-circle"
                },
                {
                  "value": "dribbble-square",
                  "label": "dribbble-square"
                },
                {
                  "value": "dropbox-circle",
                  "label": "dropbox-circle"
                },
                {
                  "value": "edit",
                  "label": "edit"
                },
                {
                  "value": "dropbox-square",
                  "label": "dropbox-square"
                },
                {
                  "value": "euro-circle",
                  "label": "euro-circle"
                },
                {
                  "value": "exclamation-circle",
                  "label": "exclamation-circle"
                },
                {
                  "value": "environment",
                  "label": "environment"
                },
                {
                  "value": "eye-invisible",
                  "label": "eye-invisible"
                },
                {
                  "value": "experiment",
                  "label": "experiment"
                },
                {
                  "value": "facebook",
                  "label": "facebook"
                },
                {
                  "value": "eye",
                  "label": "eye"
                },
                {
                  "value": "fast-backward",
                  "label": "fast-backward"
                },
                {
                  "value": "fast-forward",
                  "label": "fast-forward"
                },
                {
                  "value": "file-excel",
                  "label": "file-excel"
                },
                {
                  "value": "file-add",
                  "label": "file-add"
                },
                {
                  "value": "file-exclamation",
                  "label": "file-exclamation"
                },
                {
                  "value": "file-pdf",
                  "label": "file-pdf"
                },
                {
                  "value": "file-image",
                  "label": "file-image"
                },
                {
                  "value": "file-markdown",
                  "label": "file-markdown"
                },
                {
                  "value": "file-ppt",
                  "label": "file-ppt"
                },
                {
                  "value": "file-text",
                  "label": "file-text"
                },
                {
                  "value": "file-unknown",
                  "label": "file-unknown"
                },
                {
                  "value": "file",
                  "label": "file"
                },
                {
                  "value": "file-zip",
                  "label": "file-zip"
                },
                {
                  "value": "file-word",
                  "label": "file-word"
                },
                {
                  "value": "filter",
                  "label": "filter"
                },
                {
                  "value": "fire",
                  "label": "fire"
                },
                {
                  "value": "flag",
                  "label": "flag"
                },
                {
                  "value": "folder-add",
                  "label": "folder-add"
                },
                {
                  "value": "format-painter",
                  "label": "format-painter"
                },
                {
                  "value": "folder",
                  "label": "folder"
                },
                {
                  "value": "folder-open",
                  "label": "folder-open"
                },
                {
                  "value": "forward",
                  "label": "forward"
                },
                {
                  "value": "fund",
                  "label": "fund"
                },
                {
                  "value": "frown",
                  "label": "frown"
                },
                {
                  "value": "funnel-plot",
                  "label": "funnel-plot"
                },
                {
                  "value": "github",
                  "label": "github"
                },
                {
                  "value": "gitlab",
                  "label": "gitlab"
                },
                {
                  "value": "gift",
                  "label": "gift"
                },
                {
                  "value": "gold",
                  "label": "gold"
                },
                {
                  "value": "golden",
                  "label": "golden"
                },
                {
                  "value": "google-circle",
                  "label": "google-circle"
                },
                {
                  "value": "google-plus-circle",
                  "label": "google-plus-circle"
                },
                {
                  "value": "google-plus-square",
                  "label": "google-plus-square"
                },
                {
                  "value": "google-square",
                  "label": "google-square"
                },
                {
                  "value": "hdd",
                  "label": "hdd"
                },
                {
                  "value": "heart",
                  "label": "heart"
                },
                {
                  "value": "highlight",
                  "label": "highlight"
                },
                {
                  "value": "home",
                  "label": "home"
                },
                {
                  "value": "hourglass",
                  "label": "hourglass"
                },
                {
                  "value": "html5",
                  "label": "html5"
                },
                {
                  "value": "idcard",
                  "label": "idcard"
                },
                {
                  "value": "ie-circle",
                  "label": "ie-circle"
                },
                {
                  "value": "info-circle",
                  "label": "info-circle"
                },
                {
                  "value": "ie-square",
                  "label": "ie-square"
                },
                {
                  "value": "instagram",
                  "label": "instagram"
                },
                {
                  "value": "insurance",
                  "label": "insurance"
                },
                {
                  "value": "layout",
                  "label": "layout"
                },
                {
                  "value": "interaction",
                  "label": "interaction"
                },
                {
                  "value": "linkedin",
                  "label": "linkedin"
                },
                {
                  "value": "left-circle",
                  "label": "left-circle"
                },
                {
                  "value": "left-square",
                  "label": "left-square"
                },
                {
                  "value": "like",
                  "label": "like"
                },
                {
                  "value": "lock",
                  "label": "lock"
                },
                {
                  "value": "mac-command",
                  "label": "mac-command"
                },
                {
                  "value": "mail",
                  "label": "mail"
                },
                {
                  "value": "medicine-box",
                  "label": "medicine-box"
                },
                {
                  "value": "medium-circle",
                  "label": "medium-circle"
                },
                {
                  "value": "meh",
                  "label": "meh"
                },
                {
                  "value": "message",
                  "label": "message"
                },
                {
                  "value": "medium-square",
                  "label": "medium-square"
                },
                {
                  "value": "minus-circle",
                  "label": "minus-circle"
                },
                {
                  "value": "mobile",
                  "label": "mobile"
                },
                {
                  "value": "money-collect",
                  "label": "money-collect"
                },
                {
                  "value": "minus-square",
                  "label": "minus-square"
                },
                {
                  "value": "notification",
                  "label": "notification"
                },
                {
                  "value": "pause-circle",
                  "label": "pause-circle"
                },
                {
                  "value": "pay-circle",
                  "label": "pay-circle"
                },
                {
                  "value": "phone",
                  "label": "phone"
                },
                {
                  "value": "picture",
                  "label": "picture"
                },
                {
                  "value": "pie-chart",
                  "label": "pie-chart"
                },
                {
                  "value": "plus-circle",
                  "label": "plus-circle"
                },
                {
                  "value": "play-circle",
                  "label": "play-circle"
                },
                {
                  "value": "play-square",
                  "label": "play-square"
                },
                {
                  "value": "plus-square",
                  "label": "plus-square"
                },
                {
                  "value": "pound-circle",
                  "label": "pound-circle"
                },
                {
                  "value": "printer",
                  "label": "printer"
                },
                {
                  "value": "project",
                  "label": "project"
                },
                {
                  "value": "property-safety",
                  "label": "property-safety"
                },
                {
                  "value": "profile",
                  "label": "profile"
                },
                {
                  "value": "pushpin",
                  "label": "pushpin"
                },
                {
                  "value": "qq-circle",
                  "label": "qq-circle"
                },
                {
                  "value": "qq-square",
                  "label": "qq-square"
                },
                {
                  "value": "question-circle",
                  "label": "question-circle"
                },
                {
                  "value": "read",
                  "label": "read"
                },
                {
                  "value": "red-envelope",
                  "label": "red-envelope"
                },
                {
                  "value": "reddit-circle",
                  "label": "reddit-circle"
                },
                {
                  "value": "reconciliation",
                  "label": "reconciliation"
                },
                {
                  "value": "reddit-square",
                  "label": "reddit-square"
                },
                {
                  "value": "right-circle",
                  "label": "right-circle"
                },
                {
                  "value": "right-square",
                  "label": "right-square"
                },
                {
                  "value": "robot",
                  "label": "robot"
                },
                {
                  "value": "rest",
                  "label": "rest"
                },
                {
                  "value": "safety-certificate",
                  "label": "safety-certificate"
                },
                {
                  "value": "rocket",
                  "label": "rocket"
                },
                {
                  "value": "save",
                  "label": "save"
                },
                {
                  "value": "security-scan",
                  "label": "security-scan"
                },
                {
                  "value": "schedule",
                  "label": "schedule"
                },
                {
                  "value": "sketch-circle",
                  "label": "sketch-circle"
                },
                {
                  "value": "signal",
                  "label": "signal"
                },
                {
                  "value": "setting",
                  "label": "setting"
                },
                {
                  "value": "shop",
                  "label": "shop"
                },
                {
                  "value": "shopping",
                  "label": "shopping"
                },
                {
                  "value": "skin",
                  "label": "skin"
                },
                {
                  "value": "sketch-square",
                  "label": "sketch-square"
                },
                {
                  "value": "slack-circle",
                  "label": "slack-circle"
                },
                {
                  "value": "skype",
                  "label": "skype"
                },
                {
                  "value": "smile",
                  "label": "smile"
                },
                {
                  "value": "slack-square",
                  "label": "slack-square"
                },
                {
                  "value": "sliders",
                  "label": "sliders"
                },
                {
                  "value": "sound",
                  "label": "sound"
                },
                {
                  "value": "snippets",
                  "label": "snippets"
                },
                {
                  "value": "star",
                  "label": "star"
                },
                {
                  "value": "step-forward",
                  "label": "step-forward"
                },
                {
                  "value": "stop",
                  "label": "stop"
                },
                {
                  "value": "tag",
                  "label": "tag"
                },
                {
                  "value": "step-backward",
                  "label": "step-backward"
                },
                {
                  "value": "switcher",
                  "label": "switcher"
                },
                {
                  "value": "tablet",
                  "label": "tablet"
                },
                {
                  "value": "tags",
                  "label": "tags"
                },
                {
                  "value": "thunderbolt",
                  "label": "thunderbolt"
                },
                {
                  "value": "taobao-square",
                  "label": "taobao-square"
                },
                {
                  "value": "trademark-circle",
                  "label": "trademark-circle"
                },
                {
                  "value": "taobao-circle",
                  "label": "taobao-circle"
                },
                {
                  "value": "tool",
                  "label": "tool"
                },
                {
                  "value": "twitter-circle",
                  "label": "twitter-circle"
                },
                {
                  "value": "trophy",
                  "label": "trophy"
                },
                {
                  "value": "twitter-square",
                  "label": "twitter-square"
                },
                {
                  "value": "up-square",
                  "label": "up-square"
                },
                {
                  "value": "up-circle",
                  "label": "up-circle"
                },
                {
                  "value": "warning",
                  "label": "warning"
                },
                {
                  "value": "usb",
                  "label": "usb"
                },
                {
                  "value": "unlock",
                  "label": "unlock"
                },
                {
                  "value": "wechat",
                  "label": "wechat"
                },
                {
                  "value": "video-camera",
                  "label": "video-camera"
                },
                {
                  "value": "weibo-circle",
                  "label": "weibo-circle"
                },
                {
                  "value": "windows",
                  "label": "windows"
                },
                {
                  "value": "wallet",
                  "label": "wallet"
                },
                {
                  "value": "weibo-square",
                  "label": "weibo-square"
                },
                {
                  "value": "yuque",
                  "label": "yuque"
                },
                {
                  "value": "youtube",
                  "label": "youtube"
                },
                {
                  "value": "zhihu-square",
                  "label": "zhihu-square"
                },
                {
                  "value": "yahoo",
                  "label": "yahoo"
                },
                {
                  "value": "zhihu-circle",
                  "label": "zhihu-circle"
                }
              ]
            },
            {
              "conditionValue": "twotone",
              "values": [
                {
                  "value": "account-book",
                  "label": "account-book"
                },
                {
                  "value": "api",
                  "label": "api"
                },
                {
                  "value": "alert",
                  "label": "alert"
                },
                {
                  "value": "appstore",
                  "label": "appstore"
                },
                {
                  "value": "bank",
                  "label": "bank"
                },
                {
                  "value": "bell",
                  "label": "bell"
                },
                {
                  "value": "audio",
                  "label": "audio"
                },
                {
                  "value": "book",
                  "label": "book"
                },
                {
                  "value": "build",
                  "label": "build"
                },
                {
                  "value": "box-plot",
                  "label": "box-plot"
                },
                {
                  "value": "bulb",
                  "label": "bulb"
                },
                {
                  "value": "bug",
                  "label": "bug"
                },
                {
                  "value": "calculator",
                  "label": "calculator"
                },
                {
                  "value": "calendar",
                  "label": "calendar"
                },
                {
                  "value": "carry-out",
                  "label": "carry-out"
                },
                {
                  "value": "check-circle",
                  "label": "check-circle"
                },
                {
                  "value": "check-square",
                  "label": "check-square"
                },
                {
                  "value": "camera",
                  "label": "camera"
                },
                {
                  "value": "car",
                  "label": "car"
                },
                {
                  "value": "ci-circle",
                  "label": "ci-circle"
                },
                {
                  "value": "ci",
                  "label": "ci"
                },
                {
                  "value": "clock-circle",
                  "label": "clock-circle"
                },
                {
                  "value": "close-circle",
                  "label": "close-circle"
                },
                {
                  "value": "code",
                  "label": "code"
                },
                {
                  "value": "close-square",
                  "label": "close-square"
                },
                {
                  "value": "cloud",
                  "label": "cloud"
                },
                {
                  "value": "contacts",
                  "label": "contacts"
                },
                {
                  "value": "container",
                  "label": "container"
                },
                {
                  "value": "compass",
                  "label": "compass"
                },
                {
                  "value": "copy",
                  "label": "copy"
                },
                {
                  "value": "control",
                  "label": "control"
                },
                {
                  "value": "copyright",
                  "label": "copyright"
                },
                {
                  "value": "copyright-circle",
                  "label": "copyright-circle"
                },
                {
                  "value": "credit-card",
                  "label": "credit-card"
                },
                {
                  "value": "crown",
                  "label": "crown"
                },
                {
                  "value": "customer-service",
                  "label": "customer-service"
                },
                {
                  "value": "dashboard",
                  "label": "dashboard"
                },
                {
                  "value": "database",
                  "label": "database"
                },
                {
                  "value": "delete",
                  "label": "delete"
                },
                {
                  "value": "diff",
                  "label": "diff"
                },
                {
                  "value": "dollar-circle",
                  "label": "dollar-circle"
                },
                {
                  "value": "dislike",
                  "label": "dislike"
                },
                {
                  "value": "dollar",
                  "label": "dollar"
                },
                {
                  "value": "down-circle",
                  "label": "down-circle"
                },
                {
                  "value": "edit",
                  "label": "edit"
                },
                {
                  "value": "environment",
                  "label": "environment"
                },
                {
                  "value": "euro",
                  "label": "euro"
                },
                {
                  "value": "down-square",
                  "label": "down-square"
                },
                {
                  "value": "euro-circle",
                  "label": "euro-circle"
                },
                {
                  "value": "experiment",
                  "label": "experiment"
                },
                {
                  "value": "eye-invisible",
                  "label": "eye-invisible"
                },
                {
                  "value": "exclamation-circle",
                  "label": "exclamation-circle"
                },
                {
                  "value": "eye",
                  "label": "eye"
                },
                {
                  "value": "file-add",
                  "label": "file-add"
                },
                {
                  "value": "file-excel",
                  "label": "file-excel"
                },
                {
                  "value": "file-exclamation",
                  "label": "file-exclamation"
                },
                {
                  "value": "file-ppt",
                  "label": "file-ppt"
                },
                {
                  "value": "file-image",
                  "label": "file-image"
                },
                {
                  "value": "file-markdown",
                  "label": "file-markdown"
                },
                {
                  "value": "file-pdf",
                  "label": "file-pdf"
                },
                {
                  "value": "file-text",
                  "label": "file-text"
                },
                {
                  "value": "file-unknown",
                  "label": "file-unknown"
                },
                {
                  "value": "file-zip",
                  "label": "file-zip"
                },
                {
                  "value": "file-word",
                  "label": "file-word"
                },
                {
                  "value": "filter",
                  "label": "filter"
                },
                {
                  "value": "file",
                  "label": "file"
                },
                {
                  "value": "fire",
                  "label": "fire"
                },
                {
                  "value": "flag",
                  "label": "flag"
                },
                {
                  "value": "folder-add",
                  "label": "folder-add"
                },
                {
                  "value": "fund",
                  "label": "fund"
                },
                {
                  "value": "folder-open",
                  "label": "folder-open"
                },
                {
                  "value": "folder",
                  "label": "folder"
                },
                {
                  "value": "frown",
                  "label": "frown"
                },
                {
                  "value": "gift",
                  "label": "gift"
                },
                {
                  "value": "gold",
                  "label": "gold"
                },
                {
                  "value": "funnel-plot",
                  "label": "funnel-plot"
                },
                {
                  "value": "hdd",
                  "label": "hdd"
                },
                {
                  "value": "heart",
                  "label": "heart"
                },
                {
                  "value": "home",
                  "label": "home"
                },
                {
                  "value": "highlight",
                  "label": "highlight"
                },
                {
                  "value": "html5",
                  "label": "html5"
                },
                {
                  "value": "hourglass",
                  "label": "hourglass"
                },
                {
                  "value": "idcard",
                  "label": "idcard"
                },
                {
                  "value": "info-circle",
                  "label": "info-circle"
                },
                {
                  "value": "interaction",
                  "label": "interaction"
                },
                {
                  "value": "layout",
                  "label": "layout"
                },
                {
                  "value": "insurance",
                  "label": "insurance"
                },
                {
                  "value": "like",
                  "label": "like"
                },
                {
                  "value": "left-circle",
                  "label": "left-circle"
                },
                {
                  "value": "left-square",
                  "label": "left-square"
                },
                {
                  "value": "mail",
                  "label": "mail"
                },
                {
                  "value": "lock",
                  "label": "lock"
                },
                {
                  "value": "medicine-box",
                  "label": "medicine-box"
                },
                {
                  "value": "meh",
                  "label": "meh"
                },
                {
                  "value": "minus-circle",
                  "label": "minus-circle"
                },
                {
                  "value": "message",
                  "label": "message"
                },
                {
                  "value": "money-collect",
                  "label": "money-collect"
                },
                {
                  "value": "minus-square",
                  "label": "minus-square"
                },
                {
                  "value": "mobile",
                  "label": "mobile"
                },
                {
                  "value": "notification",
                  "label": "notification"
                },
                {
                  "value": "pause-circle",
                  "label": "pause-circle"
                },
                {
                  "value": "phone",
                  "label": "phone"
                },
                {
                  "value": "pie-chart",
                  "label": "pie-chart"
                },
                {
                  "value": "picture",
                  "label": "picture"
                },
                {
                  "value": "play-circle",
                  "label": "play-circle"
                },
                {
                  "value": "play-square",
                  "label": "play-square"
                },
                {
                  "value": "plus-circle",
                  "label": "plus-circle"
                },
                {
                  "value": "printer",
                  "label": "printer"
                },
                {
                  "value": "pound-circle",
                  "label": "pound-circle"
                },
                {
                  "value": "plus-square",
                  "label": "plus-square"
                },
                {
                  "value": "profile",
                  "label": "profile"
                },
                {
                  "value": "project",
                  "label": "project"
                },
                {
                  "value": "property-safety",
                  "label": "property-safety"
                },
                {
                  "value": "reconciliation",
                  "label": "reconciliation"
                },
                {
                  "value": "red-envelope",
                  "label": "red-envelope"
                },
                {
                  "value": "pushpin",
                  "label": "pushpin"
                },
                {
                  "value": "rest",
                  "label": "rest"
                },
                {
                  "value": "question-circle",
                  "label": "question-circle"
                },
                {
                  "value": "right-circle",
                  "label": "right-circle"
                },
                {
                  "value": "right-square",
                  "label": "right-square"
                },
                {
                  "value": "safety-certificate",
                  "label": "safety-certificate"
                },
                {
                  "value": "save",
                  "label": "save"
                },
                {
                  "value": "rocket",
                  "label": "rocket"
                },
                {
                  "value": "schedule",
                  "label": "schedule"
                },
                {
                  "value": "setting",
                  "label": "setting"
                },
                {
                  "value": "security-scan",
                  "label": "security-scan"
                },
                {
                  "value": "shop",
                  "label": "shop"
                },
                {
                  "value": "shopping",
                  "label": "shopping"
                },
                {
                  "value": "sliders",
                  "label": "sliders"
                },
                {
                  "value": "skin",
                  "label": "skin"
                },
                {
                  "value": "smile",
                  "label": "smile"
                },
                {
                  "value": "snippets",
                  "label": "snippets"
                },
                {
                  "value": "sound",
                  "label": "sound"
                },
                {
                  "value": "star",
                  "label": "star"
                },
                {
                  "value": "tablet",
                  "label": "tablet"
                },
                {
                  "value": "stop",
                  "label": "stop"
                },
                {
                  "value": "switcher",
                  "label": "switcher"
                },
                {
                  "value": "tag",
                  "label": "tag"
                },
                {
                  "value": "tags",
                  "label": "tags"
                },
                {
                  "value": "trademark-circle",
                  "label": "trademark-circle"
                },
                {
                  "value": "unlock",
                  "label": "unlock"
                },
                {
                  "value": "tool",
                  "label": "tool"
                },
                {
                  "value": "thunderbolt",
                  "label": "thunderbolt"
                },
                {
                  "value": "trophy",
                  "label": "trophy"
                },
                {
                  "value": "up-circle",
                  "label": "up-circle"
                },
                {
                  "value": "up-square",
                  "label": "up-square"
                },
                {
                  "value": "usb",
                  "label": "usb"
                },
                {
                  "value": "warning",
                  "label": "warning"
                },
                {
                  "value": "video-camera",
                  "label": "video-camera"
                },
                {
                  "value": "wallet",
                  "label": "wallet"
                }
              ]
            }
          ]
        }
      },
      {
        "name": "nzTheme",
        "inputType": 0,
        "description": "nz-icon.nzTheme.description",
        "type": "Enum",
        "typeRaw": "`'fill'|'outline'|'twotone'`",
        "default": "`'outline'`",
        "typeDefinition": [
          "fill",
          "outline",
          "twotone"
        ],
        "pureDefault": "outline"
      },
      {
        "name": "nzSpin",
        "inputType": 0,
        "description": "nz-icon.nzSpin.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTwotoneColor",
        "inputType": 0,
        "description": "nz-icon.nzTwotoneColor.description",
        "type": "string",
        "typeRaw": "`string (hex color)`",
        "default": ""
      },
      {
        "name": "nzIconfont",
        "inputType": 0,
        "description": "nz-icon.nzIconfont.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzRotate",
        "inputType": 0,
        "description": "nz-icon.nzRotate.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-icon.title",
    "description": "nz-icon.description",
    "whenToUse": "nz-icon.whenToUse",
    "doc": "/components/icon/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/icon",
    "snippet": "<span __$1></span>"
  },
  {
    "type": "directive",
    "selector": "nz-image",
    "types": {},
    "properties": [
      {
        "name": "nzSrc",
        "inputType": 0,
        "description": "nz-image.nzSrc.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzFallback",
        "inputType": 0,
        "description": "nz-image.nzFallback.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPlaceholder",
        "inputType": 0,
        "description": "nz-image.nzPlaceholder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDisablePreview",
        "inputType": 0,
        "description": "nz-image.nzDisablePreview.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCloseOnNavigation",
        "inputType": 0,
        "description": "nz-image.nzCloseOnNavigation.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-image.nzDirection.description",
        "type": "object",
        "typeRaw": "`Direction`",
        "default": "`'ltr'`",
        "pureDefault": "ltr"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-image.title",
    "description": "nz-image.description",
    "whenToUse": "nz-image.whenToUse",
    "doc": "/components/image/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/image"
  },
  {
    "type": "directive",
    "selector": "nz-input",
    "types": {},
    "properties": [
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-input.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzAutosize",
        "inputType": 0,
        "description": "nz-input.nzAutosize.description",
        "type": "boolean",
        "typeRaw": "`boolean | { minRows: number, maxRows: number }`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBorderless",
        "inputType": 0,
        "description": "nz-input.nzBorderless.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-input.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "type": "any",
        "typeRaw": "`any`",
        "description": "nz-input.ngModel.description"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "description": "nz-input.ngModelChange.description"
      },
      {
        "name": "disabled",
        "inputType": 0,
        "type": "boolean",
        "typeRaw": "`boolean`",
        "forceInputType": 0,
        "description": "nz-input.disabled.description"
      },
      {
        "name": "nzAutocomplete",
        "inputType": 0,
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef`",
        "default": "auto",
        "description": "nz-input.nzAutocomplete.description"
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-input.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-input.name.description"
      }
    ],
    "description": "nz-input.description",
    "lib": "ng-zorro-antd",
    "title": "nz-input.title",
    "whenToUse": "nz-input.whenToUse",
    "doc": "/components/input/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input",
    "snippet": "<input __$1>"
  },
  {
    "type": "component",
    "selector": "nz-input-group",
    "types": {},
    "properties": [
      {
        "name": "nzAddOnAfter",
        "inputType": 0,
        "description": "nz-input-group.nzAddOnAfter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzAddOnBefore",
        "inputType": 0,
        "description": "nz-input-group.nzAddOnBefore.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-input-group.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSuffix",
        "inputType": 0,
        "description": "nz-input-group.nzSuffix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzCompact",
        "inputType": 0,
        "description": "nz-input-group.nzCompact.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-input-group.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-input-group.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-input-group.title",
    "description": "nz-input-group.description",
    "whenToUse": "nz-input-group.whenToUse",
    "doc": "/components/input/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input"
  },
  {
    "type": "component",
    "selector": "nz-textarea-count",
    "types": {},
    "properties": [
      {
        "name": "nzMaxCharacterCount",
        "inputType": 0,
        "description": "nz-textarea-count.nzMaxCharacterCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzComputeCharacterCount",
        "inputType": 0,
        "description": "nz-textarea-count.nzComputeCharacterCount.description",
        "type": "function",
        "typeRaw": "`(v: string) => number`",
        "default": "`v => v.length`",
        "pureDefault": "v => v.length"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-textarea-count.title",
    "description": "nz-textarea-count.description",
    "whenToUse": "nz-textarea-count.whenToUse",
    "doc": "/components/input/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input"
  },
  {
    "type": "component",
    "selector": "nz-input-number",
    "types": {},
    "properties": [
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-input-number.ngModel.description",
        "type": "number",
        "typeRaw": "`number | string`  |  `string`",
        "default": ""
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-input-number.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-input-number.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzReadOnly",
        "inputType": 0,
        "description": "nz-input-number.nzReadOnly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzMax",
        "inputType": 0,
        "description": "nz-input-number.nzMax.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`Infinity`",
        "pureDefault": "Infinity"
      },
      {
        "name": "nzMin",
        "inputType": 0,
        "description": "nz-input-number.nzMin.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`-Infinity`",
        "pureDefault": "-Infinity"
      },
      {
        "name": "nzFormatter",
        "inputType": 0,
        "description": "nz-input-number.nzFormatter.description",
        "type": "function",
        "typeRaw": "`(value: number | string) => string | number`",
        "default": ""
      },
      {
        "name": "nzParser",
        "inputType": 0,
        "description": "nz-input-number.nzParser.description",
        "type": "function",
        "typeRaw": "`(value: string) => string | number`",
        "default": "`(value: string) => value.trim().replace(/。/g, '.').replace(/[^\\w\\.-]+/g, '')`",
        "pureDefault": "(value: string) => value.trim().replace(/。/g, '.').replace(/[^\\w\\.-]+/g, '')"
      },
      {
        "name": "nzPrecision",
        "inputType": 0,
        "description": "nz-input-number.nzPrecision.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzPrecisionMode",
        "inputType": 0,
        "description": "nz-input-number.nzPrecisionMode.description",
        "type": "Enum",
        "typeRaw": "`'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)`",
        "default": "`'toFixed'`",
        "typeDefinition": [
          "cut",
          "toFixed",
          "((value: number",
          "string, precision?: number) => number)"
        ],
        "pureDefault": "toFixed"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-input-number.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-input-number.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzStep",
        "inputType": 0,
        "description": "nz-input-number.nzStep.description",
        "type": "number",
        "typeRaw": "`number | string`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzInputMode",
        "inputType": 0,
        "description": "nz-input-number.nzInputMode.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`decimal`",
        "pureDefault": "decimal"
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-input-number.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-input-number.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-input-number.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzFocus",
        "inputType": 1,
        "description": "nz-input-number.nzFocus.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "nzBlur",
        "inputType": 1,
        "description": "nz-input-number.nzBlur.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-input-number.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-input-number.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-input-number.title",
    "description": "nz-input-number.description",
    "whenToUse": "nz-input-number.whenToUse",
    "doc": "/components/input-number/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input-number"
  },
  {
    "type": "component",
    "selector": "nz-input-number-group",
    "types": {},
    "properties": [
      {
        "name": "nzAddOnAfter",
        "inputType": 0,
        "description": "nz-input-number-group.nzAddOnAfter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzAddOnBefore",
        "inputType": 0,
        "description": "nz-input-number-group.nzAddOnBefore.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-input-number-group.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSuffix",
        "inputType": 0,
        "description": "nz-input-number-group.nzSuffix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPrefixIcon",
        "inputType": 0,
        "description": "nz-input-number-group.nzPrefixIcon.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-input-number-group.nzSuffixIcon.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzCompact",
        "inputType": 0,
        "description": "nz-input-number-group.nzCompact.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-input-number-group.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-input-number-group.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-input-number-group.title",
    "description": "nz-input-number-group.description",
    "whenToUse": "nz-input-number-group.whenToUse",
    "doc": "/components/input-number/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/input-number"
  },
  {
    "type": "component",
    "selector": "nz-sider",
    "types": {},
    "properties": [
      {
        "name": "nzBreakpoint",
        "inputType": 0,
        "description": "nz-sider.nzBreakpoint.description",
        "type": "Enum",
        "typeRaw": "`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'`",
        "default": "",
        "typeDefinition": [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "xxl"
        ]
      },
      {
        "name": "nzCollapsedWidth",
        "inputType": 0,
        "description": "nz-sider.nzCollapsedWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`64`",
        "pureDefault": "64"
      },
      {
        "name": "nzCollapsible",
        "inputType": 0,
        "description": "nz-sider.nzCollapsible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCollapsed",
        "inputType": 2,
        "description": "nz-sider.nzCollapsed.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzReverseArrow",
        "inputType": 0,
        "description": "nz-sider.nzReverseArrow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTrigger",
        "inputType": 0,
        "description": "nz-sider.nzTrigger.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzZeroTrigger",
        "inputType": 0,
        "description": "nz-sider.nzZeroTrigger.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-sider.nzWidth.description",
        "type": "number",
        "typeRaw": "`number | string`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "nzTheme",
        "inputType": 0,
        "description": "nz-sider.nzTheme.description",
        "type": "Enum",
        "typeRaw": "`'light' | 'dark'`",
        "default": "`dark`",
        "typeDefinition": [
          "light",
          "dark"
        ],
        "pureDefault": "dark"
      },
      {
        "name": "nzCollapsedChange",
        "inputType": 1,
        "description": "nz-sider.nzCollapsedChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "description": "nz-sider.description",
    "lib": "ng-zorro-antd",
    "title": "nz-sider.title",
    "whenToUse": "nz-sider.whenToUse",
    "doc": "/components/layout/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/layout"
  },
  {
    "type": "component",
    "selector": "nz-list",
    "types": {},
    "properties": [
      {
        "name": "nzBordered",
        "inputType": 0,
        "description": "nz-list.nzBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFooter",
        "inputType": 0,
        "description": "nz-list.nzFooter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzHeader",
        "inputType": 0,
        "description": "nz-list.nzHeader.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzItemLayout",
        "inputType": 0,
        "description": "nz-list.nzItemLayout.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "vertical",
          "horizontal"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-list.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-list.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzSplit",
        "inputType": 0,
        "description": "nz-list.nzSplit.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-list.title",
    "description": "nz-list.description",
    "whenToUse": "nz-list.whenToUse",
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list"
  },
  {
    "type": "component",
    "selector": "nz-list-empty",
    "types": {},
    "properties": [
      {
        "name": "nzNoResult",
        "inputType": 0,
        "description": "nz-list-empty.nzNoResult.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "description": "nz-list-empty.description",
    "lib": "ng-zorro-antd",
    "title": "nz-list-empty.title",
    "whenToUse": "nz-list-empty.whenToUse",
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list"
  },
  {
    "type": "component",
    "selector": "nz-list-header",
    "types": {},
    "properties": [
      {
        "name": "nzNoFlex",
        "inputType": 0,
        "description": "nz-list-header.nzNoFlex.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "description": "nz-list-header.description",
    "lib": "ng-zorro-antd",
    "title": "nz-list-header.title",
    "whenToUse": "nz-list-header.whenToUse",
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list"
  },
  {
    "type": "component",
    "selector": "nz-list-footer",
    "types": {},
    "properties": [
      {
        "name": "nzNoFlex",
        "inputType": 0,
        "description": "nz-list-footer.nzNoFlex.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "description": "nz-list-footer.description",
    "lib": "ng-zorro-antd",
    "title": "nz-list-footer.title",
    "whenToUse": "nz-list-footer.whenToUse",
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list"
  },
  {
    "type": "component",
    "selector": "nz-list-pagination",
    "types": {},
    "properties": [
      {
        "name": "nzNoFlex",
        "inputType": 0,
        "description": "nz-list-pagination.nzNoFlex.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "description": "nz-list-pagination.description",
    "lib": "ng-zorro-antd",
    "title": "nz-list-pagination.title",
    "whenToUse": "nz-list-pagination.whenToUse",
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list"
  },
  {
    "type": "component",
    "selector": "nz-list-load-more",
    "types": {},
    "properties": [
      {
        "name": "nzNoFlex",
        "inputType": 0,
        "description": "nz-list-load-more.nzNoFlex.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "description": "nz-list-load-more.description",
    "lib": "ng-zorro-antd",
    "title": "nz-list-load-more.title",
    "whenToUse": "nz-list-load-more.whenToUse",
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list"
  },
  {
    "type": "component",
    "selector": "nz-list-item",
    "types": {},
    "properties": [
      {
        "name": "nzNoFlex",
        "inputType": 0,
        "description": "nz-list-item.nzNoFlex.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-list-item.title",
    "description": "nz-list-item.description",
    "whenToUse": "nz-list-item.whenToUse",
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list"
  },
  {
    "type": "component",
    "selector": "nz-list-item-meta",
    "types": {},
    "properties": [
      {
        "name": "nzAvatar",
        "inputType": 0,
        "description": "nz-list-item-meta.nzAvatar.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDescription",
        "inputType": 0,
        "description": "nz-list-item-meta.nzDescription.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-list-item-meta.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-list-item-meta.title",
    "description": "nz-list-item-meta.description",
    "whenToUse": "nz-list-item-meta.whenToUse",
    "doc": "/components/list/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/list"
  },
  {
    "type": "component",
    "selector": "nz-mention",
    "types": {},
    "properties": [
      {
        "name": "nzMentionTrigger",
        "inputType": 0,
        "description": "nz-mention.nzMentionTrigger.description",
        "type": "object",
        "typeRaw": "`HTMLTextAreaElement | HTMLInputElement`",
        "default": ""
      },
      {
        "name": "nzMentionSuggestion",
        "inputType": 0,
        "description": "nz-mention.nzMentionSuggestion.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any>`",
        "default": ""
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-mention.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-mention.nzNotFoundContent.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'无匹配结果，轻敲空格完成输入'`",
        "pureDefault": "无匹配结果，轻敲空格完成输入"
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-mention.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'button' | 'top'`",
        "default": "`'bottom'`",
        "typeDefinition": [
          "button",
          "top"
        ],
        "pureDefault": "bottom"
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-mention.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string | string[]`",
        "default": "`'@'`",
        "pureDefault": "@"
      },
      {
        "name": "nzSuggestions",
        "inputType": 0,
        "description": "nz-mention.nzSuggestions.description",
        "type": "object",
        "typeRaw": "`any[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-mention.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzValueWith",
        "inputType": 0,
        "description": "nz-mention.nzValueWith.description",
        "type": "function",
        "typeRaw": "`(any) => string | (value: string) => string`",
        "default": ""
      },
      {
        "name": "nzOnSelect",
        "inputType": 1,
        "description": "nz-mention.nzOnSelect.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "default": ""
      },
      {
        "name": "nzOnSearchChange",
        "inputType": 1,
        "description": "nz-mention.nzOnSearchChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MentionOnSearchTypes>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-mention.title",
    "description": "nz-mention.description",
    "whenToUse": "nz-mention.whenToUse",
    "doc": "/components/mention/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/mention"
  },
  {
    "type": "component",
    "selector": "nzMentionTrigger",
    "types": {},
    "properties": [],
    "description": "nzMentionTrigger.description",
    "lib": "ng-zorro-antd",
    "title": "nzMentionTrigger.title",
    "whenToUse": "nzMentionTrigger.whenToUse",
    "doc": "/components/mention/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/mention"
  },
  {
    "type": "component",
    "selector": "nzMentionSuggestion",
    "types": {},
    "properties": [],
    "description": "nzMentionSuggestion.description",
    "lib": "ng-zorro-antd",
    "title": "nzMentionSuggestion.title",
    "whenToUse": "nzMentionSuggestion.whenToUse",
    "doc": "/components/mention/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/mention",
    "snippet": "<ng-container *nzMentionSuggestion=\"let ${1|item|}\">$0</ng-container>"
  },
  {
    "type": "directive",
    "selector": "nz-menu",
    "types": {},
    "properties": [
      {
        "name": "nzInlineCollapsed",
        "inputType": 0,
        "description": "nz-menu.nzInlineCollapsed.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzInlineIndent",
        "inputType": 0,
        "description": "nz-menu.nzInlineIndent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`24`",
        "pureDefault": "24"
      },
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-menu.nzMode.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal' | 'inline'`",
        "default": "`'vertical'`",
        "typeDefinition": [
          "vertical",
          "horizontal",
          "inline"
        ],
        "pureDefault": "vertical"
      },
      {
        "name": "nzSelectable",
        "inputType": 0,
        "description": "nz-menu.nzSelectable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzTheme",
        "inputType": 0,
        "description": "nz-menu.nzTheme.description",
        "type": "Enum",
        "typeRaw": "`'light' | 'dark'`",
        "default": "`'light'`",
        "typeDefinition": [
          "light",
          "dark"
        ],
        "pureDefault": "light"
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-menu.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzMenuItemDirective>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-menu.title",
    "description": "nz-menu.description",
    "whenToUse": "nz-menu.whenToUse",
    "doc": "/components/menu/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/menu"
  },
  {
    "type": "directive",
    "selector": "nz-menu-item",
    "types": {},
    "properties": [
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-menu-item.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzSelected",
        "inputType": 0,
        "description": "nz-menu-item.nzSelected.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzMatchRouter",
        "inputType": 0,
        "description": "nz-menu-item.nzMatchRouter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzMatchRouterExact",
        "inputType": 0,
        "description": "nz-menu-item.nzMatchRouterExact.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDanger",
        "inputType": 0,
        "description": "nz-menu-item.nzDanger.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-menu-item.title",
    "description": "nz-menu-item.description",
    "whenToUse": "nz-menu-item.whenToUse",
    "doc": "/components/menu/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/menu"
  },
  {
    "type": "directive",
    "selector": "nz-submenu",
    "types": {},
    "properties": [
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-submenu.nzPlacement.description",
        "type": "Enum",
        "typeRaw": "`'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'`",
        "default": "`'bottomLeft'`",
        "typeDefinition": [
          "bottomLeft",
          "bottomCenter",
          "bottomRight",
          "topLeft",
          "topCenter",
          "topRight"
        ],
        "pureDefault": "bottomLeft"
      },
      {
        "name": "nzOpen",
        "inputType": 2,
        "description": "nz-submenu.nzOpen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-submenu.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-submenu.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-submenu.nzIcon.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzMenuClassName",
        "inputType": 0,
        "description": "nz-submenu.nzMenuClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzOpenChange",
        "inputType": 1,
        "description": "nz-submenu.nzOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "description": "nz-submenu.description",
    "lib": "ng-zorro-antd",
    "title": "nz-submenu.title",
    "whenToUse": "nz-submenu.whenToUse",
    "doc": "/components/menu/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/menu"
  },
  {
    "type": "directive",
    "selector": "nz-menu-group",
    "types": {},
    "properties": [
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-menu-group.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "description": "nz-menu-group.description",
    "lib": "ng-zorro-antd",
    "title": "nz-menu-group.title",
    "whenToUse": "nz-menu-group.whenToUse",
    "doc": "/components/menu/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/menu"
  },
  {
    "type": "directive",
    "selector": "nz-menu-divider",
    "types": {},
    "properties": [],
    "description": "nz-menu-divider.description",
    "lib": "ng-zorro-antd",
    "title": "nz-menu-divider.title",
    "whenToUse": "nz-menu-divider.whenToUse",
    "doc": "/components/menu/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/menu"
  },
  {
    "type": "component",
    "selector": "nz-modal",
    "types": {},
    "properties": [
      {
        "name": "nzAfterOpen",
        "inputType": 0,
        "description": "nz-modal.nzAfterOpen.description",
        "type": "EventEmitter",
        "typeRaw": "EventEmitter",
        "default": ""
      },
      {
        "name": "nzAfterClose",
        "inputType": 0,
        "description": "nz-modal.nzAfterClose.description",
        "type": "EventEmitter",
        "typeRaw": "EventEmitter",
        "default": ""
      },
      {
        "name": "nzBodyStyle",
        "inputType": 0,
        "description": "nz-modal.nzBodyStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzCancelText",
        "inputType": 0,
        "description": "nz-modal.nzCancelText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "Cancel",
        "pureDefault": "Cancel"
      },
      {
        "name": "nzCentered",
        "inputType": 0,
        "description": "nz-modal.nzCentered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzClosable",
        "inputType": 0,
        "description": "nz-modal.nzClosable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzOkLoading",
        "inputType": 0,
        "description": "nz-modal.nzOkLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCancelLoading",
        "inputType": 0,
        "description": "nz-modal.nzCancelLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOkDisabled",
        "inputType": 0,
        "description": "nz-modal.nzOkDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCancelDisabled",
        "inputType": 0,
        "description": "nz-modal.nzCancelDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFooter",
        "inputType": 0,
        "description": "nz-modal.nzFooter.description",
        "type": "string",
        "typeRaw": "string<br>TemplateRef<br>ModalButtonOptions",
        "default": "OK and Cancel buttons",
        "pureDefault": "OK and Cancel buttons"
      },
      {
        "name": "nzKeyboard",
        "inputType": 0,
        "description": "nz-modal.nzKeyboard.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzMask",
        "inputType": 0,
        "description": "nz-modal.nzMask.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzMaskClosable",
        "inputType": 0,
        "description": "nz-modal.nzMaskClosable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzCloseOnNavigation",
        "inputType": 0,
        "description": "nz-modal.nzCloseOnNavigation.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-modal.nzDirection.description",
        "type": "Enum",
        "typeRaw": "`'ltr' | 'rtl'`",
        "default": "",
        "typeDefinition": [
          "ltr",
          "rtl"
        ]
      },
      {
        "name": "nzMaskStyle",
        "inputType": 0,
        "description": "nz-modal.nzMaskStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzOkText",
        "inputType": 0,
        "description": "nz-modal.nzOkText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "OK",
        "pureDefault": "OK"
      },
      {
        "name": "nzOkType",
        "inputType": 0,
        "description": "nz-modal.nzOkType.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`primary`",
        "pureDefault": "primary"
      },
      {
        "name": "nzOkDanger",
        "inputType": 0,
        "description": "nz-modal.nzOkDanger.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzStyle",
        "inputType": 0,
        "description": "nz-modal.nzStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzCloseIcon",
        "inputType": 0,
        "description": "nz-modal.nzCloseIcon.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-modal.nzTitle.description",
        "type": "string",
        "typeRaw": "string / TemplateRef",
        "default": ""
      },
      {
        "name": "nzVisible",
        "inputType": 0,
        "description": "nz-modal.nzVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-modal.nzWidth.description",
        "type": "string",
        "typeRaw": "string<br>number",
        "default": "520",
        "pureDefault": "520"
      },
      {
        "name": "nzClassName",
        "inputType": 0,
        "description": "nz-modal.nzClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzWrapClassName",
        "inputType": 0,
        "description": "nz-modal.nzWrapClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzZIndex",
        "inputType": 0,
        "description": "nz-modal.nzZIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "1000",
        "pureDefault": "1000"
      },
      {
        "name": "nzOnCancel",
        "inputType": 0,
        "description": "nz-modal.nzOnCancel.description",
        "type": "EventEmitter",
        "typeRaw": "EventEmitter",
        "default": ""
      },
      {
        "name": "nzOnOk",
        "inputType": 0,
        "description": "nz-modal.nzOnOk.description",
        "type": "EventEmitter",
        "typeRaw": "EventEmitter",
        "default": ""
      },
      {
        "name": "nzContent",
        "inputType": 0,
        "description": "nz-modal.nzContent.description",
        "type": "string",
        "typeRaw": "string / TemplateRef / Component / ng-content",
        "default": ""
      },
      {
        "name": "nzComponentParams",
        "inputType": 0,
        "description": "nz-modal.nzComponentParams.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzIconType",
        "inputType": 0,
        "description": "nz-modal.nzIconType.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "question-circle",
        "pureDefault": "question-circle"
      },
      {
        "name": "nzAutofocus",
        "inputType": 0,
        "description": "nz-modal.nzAutofocus.description",
        "type": "Enum",
        "typeRaw": "`'ok' | 'cancel' | 'auto' | null`",
        "default": "`'auto'`",
        "typeDefinition": [
          "ok",
          "cancel",
          "auto",
          "null"
        ],
        "pureDefault": "auto"
      }
    ],
    "description": "nz-modal.description",
    "lib": "ng-zorro-antd",
    "title": "nz-modal.title",
    "whenToUse": "nz-modal.whenToUse",
    "doc": "/components/modal/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/modal"
  },
  {
    "type": "directive",
    "selector": "nzModalTitle",
    "types": {},
    "properties": [],
    "description": "nzModalTitle.description",
    "lib": "ng-zorro-antd",
    "title": "nzModalTitle.title",
    "whenToUse": "nzModalTitle.whenToUse",
    "doc": "/components/modal/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/modal"
  },
  {
    "type": "directive",
    "selector": "nzModalFooter",
    "types": {},
    "properties": [],
    "description": "nzModalFooter.description",
    "lib": "ng-zorro-antd",
    "title": "nzModalFooter.title",
    "whenToUse": "nzModalFooter.whenToUse",
    "doc": "/components/modal/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/modal",
    "snippet": "<div *nzModalFooter>$0</div>"
  },
  {
    "type": "component",
    "selector": "nz-page-header",
    "types": {},
    "properties": [
      {
        "name": "nzGhost",
        "inputType": 0,
        "description": "nz-page-header.nzGhost.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-page-header.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSubtitle",
        "inputType": 0,
        "description": "nz-page-header.nzSubtitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzBackIcon",
        "inputType": 0,
        "description": "nz-page-header.nzBackIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzBack",
        "inputType": 1,
        "description": "nz-page-header.nzBack.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": "Call [Location[back]](https://angular.io/api/common/Location#back) when the event not subscribed（you need import [RouterModule](https://angular.io/api/router/RouterModule) or register [Location](https://angular.io/api/common/Location)）",
        "pureDefault": "Call [Location[back]](https://angular.io/api/common/Location#back) when the event not subscribed（you need import [RouterModule](https://angular.io/api/router/RouterModule) or register [Location](https://angular.io/api/common/Location)）"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-page-header.title",
    "description": "nz-page-header.description",
    "whenToUse": "nz-page-header.whenToUse",
    "doc": "/components/page-header/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/page-header"
  },
  {
    "type": "component",
    "selector": "nz-pagination",
    "types": {},
    "properties": [
      {
        "name": "nzTotal",
        "inputType": 0,
        "description": "nz-pagination.nzTotal.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzPageIndex",
        "inputType": 2,
        "description": "nz-pagination.nzPageIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzPageSize",
        "inputType": 2,
        "description": "nz-pagination.nzPageSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`10`",
        "pureDefault": "10"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-pagination.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzShowQuickJumper",
        "inputType": 0,
        "description": "nz-pagination.nzShowQuickJumper.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowSizeChanger",
        "inputType": 0,
        "description": "nz-pagination.nzShowSizeChanger.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSimple",
        "inputType": 0,
        "description": "nz-pagination.nzSimple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-pagination.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'small'`",
        "default": "`'default'`",
        "typeDefinition": [
          "small"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzResponsive",
        "inputType": 0,
        "description": "nz-pagination.nzResponsive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPageSizeOptions",
        "inputType": 0,
        "description": "nz-pagination.nzPageSizeOptions.description",
        "type": "Array",
        "typeRaw": "`number[]`",
        "default": "`[10, 20, 30, 40]`",
        "pureDefault": "[10, 20, 30, 40]"
      },
      {
        "name": "nzItemRender",
        "inputType": 0,
        "description": "nz-pagination.nzItemRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: 'page' | 'prev' | 'next'| 'prev_5'| 'next_5', page: number }>`",
        "default": ""
      },
      {
        "name": "nzShowTotal",
        "inputType": 0,
        "description": "nz-pagination.nzShowTotal.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: number, range: [ number, number ] }>`",
        "default": ""
      },
      {
        "name": "nzHideOnSinglePage",
        "inputType": 0,
        "description": "nz-pagination.nzHideOnSinglePage.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPageIndexChange",
        "inputType": 1,
        "description": "nz-pagination.nzPageIndexChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzPageSizeChange",
        "inputType": 1,
        "description": "nz-pagination.nzPageSizeChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-pagination.title",
    "description": "nz-pagination.description",
    "whenToUse": "nz-pagination.whenToUse",
    "doc": "/components/pagination/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pagination"
  },
  {
    "type": "pipe",
    "selector": "nzSafeNull",
    "types": {},
    "properties": [
      {
        "name": "replace",
        "inputType": 0,
        "description": "nzSafeNull.replace.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "''",
        "pureDefault": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nzSafeNull.title",
    "description": "nzSafeNull.description",
    "whenToUse": "nzSafeNull.whenToUse",
    "doc": "/components/pipes/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pipes"
  },
  {
    "type": "pipe",
    "selector": "nzBytes",
    "types": {},
    "properties": [
      {
        "name": "decimal",
        "inputType": 0,
        "description": "nzBytes.decimal.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "'0'",
        "pureDefault": "0"
      },
      {
        "name": "from",
        "inputType": 0,
        "description": "nzBytes.from.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "'B'",
        "pureDefault": "B"
      },
      {
        "name": "to",
        "inputType": 0,
        "description": "nzBytes.to.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "''",
        "pureDefault": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nzBytes.title",
    "description": "nzBytes.description",
    "whenToUse": "nzBytes.whenToUse",
    "doc": "/components/pipes/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pipes"
  },
  {
    "type": "pipe",
    "selector": "nzToCssUnit",
    "types": {},
    "properties": [
      {
        "name": "defaultUnit",
        "inputType": 0,
        "description": "nzToCssUnit.defaultUnit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "'px'",
        "pureDefault": "px"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nzToCssUnit.title",
    "description": "nzToCssUnit.description",
    "whenToUse": "nzToCssUnit.whenToUse",
    "doc": "/components/pipes/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pipes"
  },
  {
    "type": "pipe",
    "selector": "nzEllipsis",
    "types": {},
    "properties": [
      {
        "name": "length",
        "inputType": 0,
        "description": "nzEllipsis.length.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "''",
        "pureDefault": ""
      },
      {
        "name": "suffix",
        "inputType": 0,
        "description": "nzEllipsis.suffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "''",
        "pureDefault": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nzEllipsis.title",
    "description": "nzEllipsis.description",
    "whenToUse": "nzEllipsis.whenToUse",
    "doc": "/components/pipes/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pipes"
  },
  {
    "type": "pipe",
    "selector": "nzAggregate",
    "types": {},
    "properties": [
      {
        "name": "method",
        "inputType": 0,
        "description": "nzAggregate.method.description",
        "type": "Enum",
        "typeRaw": "`'sum' | 'max' | 'min' | 'avg'`",
        "default": "''",
        "typeDefinition": [
          "sum",
          "max",
          "min",
          "avg"
        ],
        "pureDefault": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nzAggregate.title",
    "description": "nzAggregate.description",
    "whenToUse": "nzAggregate.whenToUse",
    "doc": "/components/pipes/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pipes"
  },
  {
    "type": "pipe",
    "selector": "nzSanitizer",
    "types": {},
    "properties": [
      {
        "name": "type",
        "inputType": 0,
        "description": "nzSanitizer.type.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "'html'",
        "pureDefault": "html"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nzSanitizer.title",
    "description": "nzSanitizer.description",
    "whenToUse": "nzSanitizer.whenToUse",
    "doc": "/components/pipes/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/pipes"
  },
  {
    "type": "directive",
    "selector": "nz-popconfirm",
    "types": {},
    "properties": [
      {
        "name": "nzTooltipArrowPointAtCenter",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipArrowPointAtCenter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipTitle",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTooltipTitleContext",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipTitleContext.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzTooltipTrigger",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'focus' | 'hover' | null`",
        "default": "`'hover'`",
        "typeDefinition": [
          "click",
          "focus",
          "hover",
          "null"
        ],
        "pureDefault": "hover"
      },
      {
        "name": "nzTooltipPlacement",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | Array<string>`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom",
          "Array<string>"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzTooltipColor",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOrigin",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipOrigin.description",
        "type": "object",
        "typeRaw": "`ElementRef`",
        "default": ""
      },
      {
        "name": "nzTooltipVisible",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipVisibleChange",
        "inputType": 1,
        "description": "nz-popconfirm.nzTooltipVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzTooltipMouseEnterDelay",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipMouseEnterDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.15`",
        "pureDefault": "0.15"
      },
      {
        "name": "nzTooltipMouseLeaveDelay",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipMouseLeaveDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzTooltipOverlayClassName",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOverlayStyle",
        "inputType": 0,
        "description": "nz-popconfirm.nzTooltipOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzPopconfirmArrowPointAtCenter",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmArrowPointAtCenter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPopconfirmTitle",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPopconfirmTrigger",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'focus' | 'hover' | null`",
        "default": "`'click'`",
        "typeDefinition": [
          "click",
          "focus",
          "hover",
          "null"
        ],
        "pureDefault": "click"
      },
      {
        "name": "nzPopconfirmPlacement",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | Array<string>`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom",
          "Array<string>"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzPopconfirmOrigin",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmOrigin.description",
        "type": "object",
        "typeRaw": "`ElementRef`",
        "default": ""
      },
      {
        "name": "nzPopconfirmVisible",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPopconfirmShowArrow",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmShowArrow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzPopconfirmVisibleChange",
        "inputType": 1,
        "description": "nz-popconfirm.nzPopconfirmVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzPopconfirmMouseEnterDelay",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmMouseEnterDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.15`",
        "pureDefault": "0.15"
      },
      {
        "name": "nzPopconfirmMouseLeaveDelay",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmMouseLeaveDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzPopconfirmOverlayClassName",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPopconfirmOverlayStyle",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzPopconfirmBackdrop",
        "inputType": 0,
        "description": "nz-popconfirm.nzPopconfirmBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCancelText",
        "inputType": 0,
        "description": "nz-popconfirm.nzCancelText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Cancel'`",
        "pureDefault": "Cancel"
      },
      {
        "name": "nzOkText",
        "inputType": 0,
        "description": "nz-popconfirm.nzOkText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Confirm'`",
        "pureDefault": "Confirm"
      },
      {
        "name": "nzOkType",
        "inputType": 0,
        "description": "nz-popconfirm.nzOkType.description",
        "type": "Enum",
        "typeRaw": "`'primary' | 'ghost' | 'dashed' | 'danger' | 'default'`",
        "default": "`'primary'`",
        "typeDefinition": [
          "primary",
          "ghost",
          "dashed",
          "danger",
          "default"
        ],
        "pureDefault": "primary"
      },
      {
        "name": "nzOkDanger",
        "inputType": 0,
        "description": "nz-popconfirm.nzOkDanger.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCondition",
        "inputType": 0,
        "description": "nz-popconfirm.nzCondition.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-popconfirm.nzIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-popconfirm.nzAutoFocus.description",
        "type": "Enum",
        "typeRaw": "`null | 'ok' | 'cancel'`",
        "default": "`null`",
        "typeDefinition": [
          "null",
          "ok",
          "cancel"
        ],
        "pureDefault": "null"
      },
      {
        "name": "nzBeforeConfirm",
        "inputType": 0,
        "description": "nz-popconfirm.nzBeforeConfirm.description",
        "type": "function",
        "typeRaw": "`(() => Observable<boolean> | Promise<boolean> | boolean) | null`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "nzOnCancel",
        "inputType": 1,
        "description": "nz-popconfirm.nzOnCancel.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "nzOnConfirm",
        "inputType": 1,
        "description": "nz-popconfirm.nzOnConfirm.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-popconfirm.title",
    "description": "nz-popconfirm.description",
    "whenToUse": "nz-popconfirm.whenToUse",
    "doc": "/components/popconfirm/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/popconfirm"
  },
  {
    "type": "directive",
    "selector": "nz-popover",
    "types": {},
    "properties": [
      {
        "name": "nzTooltipArrowPointAtCenter",
        "inputType": 0,
        "description": "nz-popover.nzTooltipArrowPointAtCenter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipTitle",
        "inputType": 0,
        "description": "nz-popover.nzTooltipTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTooltipTitleContext",
        "inputType": 0,
        "description": "nz-popover.nzTooltipTitleContext.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzTooltipTrigger",
        "inputType": 0,
        "description": "nz-popover.nzTooltipTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'focus' | 'hover' | null`",
        "default": "`'hover'`",
        "typeDefinition": [
          "click",
          "focus",
          "hover",
          "null"
        ],
        "pureDefault": "hover"
      },
      {
        "name": "nzTooltipPlacement",
        "inputType": 0,
        "description": "nz-popover.nzTooltipPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | Array<string>`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom",
          "Array<string>"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzTooltipColor",
        "inputType": 0,
        "description": "nz-popover.nzTooltipColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOrigin",
        "inputType": 0,
        "description": "nz-popover.nzTooltipOrigin.description",
        "type": "object",
        "typeRaw": "`ElementRef`",
        "default": ""
      },
      {
        "name": "nzTooltipVisible",
        "inputType": 0,
        "description": "nz-popover.nzTooltipVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipVisibleChange",
        "inputType": 1,
        "description": "nz-popover.nzTooltipVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzTooltipMouseEnterDelay",
        "inputType": 0,
        "description": "nz-popover.nzTooltipMouseEnterDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.15`",
        "pureDefault": "0.15"
      },
      {
        "name": "nzTooltipMouseLeaveDelay",
        "inputType": 0,
        "description": "nz-popover.nzTooltipMouseLeaveDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzTooltipOverlayClassName",
        "inputType": 0,
        "description": "nz-popover.nzTooltipOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzTooltipOverlayStyle",
        "inputType": 0,
        "description": "nz-popover.nzTooltipOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzPopoverArrowPointAtCenter",
        "inputType": 0,
        "description": "nz-popover.nzPopoverArrowPointAtCenter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPopoverTitle",
        "inputType": 0,
        "description": "nz-popover.nzPopoverTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPopoverContent",
        "inputType": 0,
        "description": "nz-popover.nzPopoverContent.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPopoverTrigger",
        "inputType": 0,
        "description": "nz-popover.nzPopoverTrigger.description",
        "type": "Enum",
        "typeRaw": "`'click' | 'focus' | 'hover' | null`",
        "default": "`'hover'`",
        "typeDefinition": [
          "click",
          "focus",
          "hover",
          "null"
        ],
        "pureDefault": "hover"
      },
      {
        "name": "nzPopoverPlacement",
        "inputType": 0,
        "description": "nz-popover.nzPopoverPlacement.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom' | Array<string>`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "left",
          "right",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom",
          "Array<string>"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzPopoverOrigin",
        "inputType": 0,
        "description": "nz-popover.nzPopoverOrigin.description",
        "type": "object",
        "typeRaw": "`ElementRef`",
        "default": ""
      },
      {
        "name": "nzPopoverVisible",
        "inputType": 0,
        "description": "nz-popover.nzPopoverVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPopoverVisibleChange",
        "inputType": 1,
        "description": "nz-popover.nzPopoverVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzPopoverMouseEnterDelay",
        "inputType": 0,
        "description": "nz-popover.nzPopoverMouseEnterDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.15`",
        "pureDefault": "0.15"
      },
      {
        "name": "nzPopoverMouseLeaveDelay",
        "inputType": 0,
        "description": "nz-popover.nzPopoverMouseLeaveDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.1`",
        "pureDefault": "0.1"
      },
      {
        "name": "nzPopoverOverlayClassName",
        "inputType": 0,
        "description": "nz-popover.nzPopoverOverlayClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPopoverOverlayStyle",
        "inputType": 0,
        "description": "nz-popover.nzPopoverOverlayStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzPopoverBackdrop",
        "inputType": 0,
        "description": "nz-popover.nzPopoverBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-popover.title",
    "description": "nz-popover.description",
    "whenToUse": "nz-popover.whenToUse",
    "doc": "/components/popover/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/popover"
  },
  {
    "type": "component",
    "selector": "nz-progress",
    "types": {},
    "properties": [
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-progress.nzType.description",
        "type": "Enum",
        "typeRaw": "`'line' | 'circle' | 'dashboard'`",
        "default": "`'line'`",
        "typeDefinition": [
          "line",
          "circle",
          "dashboard"
        ],
        "pureDefault": "line"
      },
      {
        "name": "nzFormat",
        "inputType": 0,
        "description": "nz-progress.nzFormat.description",
        "type": "function",
        "typeRaw": "`(percent: number) => string | TemplateRef<{ $implicit: number }>`",
        "default": "`percent => percent + '%'`",
        "pureDefault": "percent => percent + '%"
      },
      {
        "name": "nzPercent",
        "inputType": 0,
        "description": "nz-progress.nzPercent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzShowInfo",
        "inputType": 0,
        "description": "nz-progress.nzShowInfo.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-progress.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'success' | 'exception' | 'active' | 'normal'`",
        "default": "",
        "typeDefinition": [
          "success",
          "exception",
          "active",
          "normal"
        ]
      },
      {
        "name": "nzStrokeLinecap",
        "inputType": 0,
        "description": "nz-progress.nzStrokeLinecap.description",
        "type": "Enum",
        "typeRaw": "`'round' | 'square'`",
        "default": "`'round'`",
        "typeDefinition": [
          "round",
          "square"
        ],
        "pureDefault": "round"
      },
      {
        "name": "nzStrokeColor",
        "inputType": 0,
        "description": "nz-progress.nzStrokeColor.description",
        "type": "string",
        "typeRaw": "`string | { from: string; to: string: direction: string; [percent: string]: string }`",
        "default": ""
      },
      {
        "name": "nzSuccessPercent",
        "inputType": 0,
        "description": "nz-progress.nzSuccessPercent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "0",
        "pureDefault": "0"
      },
      {
        "name": "nzStrokeWidth",
        "inputType": 0,
        "description": "nz-progress.nzStrokeWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`8`",
        "pureDefault": "8"
      },
      {
        "name": "nzSteps",
        "inputType": 0,
        "description": "nz-progress.nzSteps.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-progress.nzWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`132`",
        "pureDefault": "132"
      },
      {
        "name": "nzStrokeWidth",
        "inputType": 0,
        "description": "nz-progress.nzStrokeWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`6`",
        "pureDefault": "6"
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "nz-progress.nzWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`132`",
        "pureDefault": "132"
      },
      {
        "name": "nzStrokeWidth",
        "inputType": 0,
        "description": "nz-progress.nzStrokeWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`6`",
        "pureDefault": "6"
      },
      {
        "name": "nzGapDegree",
        "inputType": 0,
        "description": "nz-progress.nzGapDegree.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzGapPosition",
        "inputType": 0,
        "description": "nz-progress.nzGapPosition.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'right' | 'bottom' | 'left'`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "right",
          "bottom",
          "left"
        ],
        "pureDefault": "top"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-progress.title",
    "description": "nz-progress.description",
    "whenToUse": "nz-progress.whenToUse",
    "doc": "/components/progress/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/progress"
  },
  {
    "type": "directive",
    "selector": "nz-radio",
    "types": {},
    "properties": [
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-radio.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-radio.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-radio.ngModel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-radio.nzValue.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-radio.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-radio.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-radio.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-radio.title",
    "description": "nz-radio.description",
    "whenToUse": "nz-radio.whenToUse",
    "doc": "/components/radio/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/radio",
    "snippet": "<label __$1>$2</label>"
  },
  {
    "type": "directive",
    "selector": "nz-radio-button",
    "types": {},
    "properties": [
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-radio-button.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-radio-button.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-radio-button.ngModel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-radio-button.nzValue.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-radio-button.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-radio-button.title",
    "description": "nz-radio-button.description",
    "whenToUse": "nz-radio-button.whenToUse",
    "doc": "/components/radio/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/radio"
  },
  {
    "type": "component",
    "selector": "nz-radio-group",
    "types": {},
    "properties": [
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-radio-group.ngModel.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "nzName",
        "inputType": 0,
        "description": "nz-radio-group.nzName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-radio-group.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-radio-group.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-radio-group.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "nzButtonStyle",
        "inputType": 0,
        "description": "nz-radio-group.nzButtonStyle.description",
        "type": "Enum",
        "typeRaw": "`'outline' | 'solid'`",
        "default": "`'outline'`",
        "typeDefinition": [
          "outline",
          "solid"
        ],
        "pureDefault": "outline"
      }
    ],
    "description": "nz-radio-group.description",
    "lib": "ng-zorro-antd",
    "title": "nz-radio-group.title",
    "whenToUse": "nz-radio-group.whenToUse",
    "doc": "/components/radio/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/radio"
  },
  {
    "type": "component",
    "selector": "nz-rate",
    "types": {},
    "properties": [
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-rate.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzAllowHalf",
        "inputType": 0,
        "description": "nz-rate.nzAllowHalf.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-rate.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCharacter",
        "inputType": 0,
        "description": "nz-rate.nzCharacter.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": "`<span nz-icon nzType=\"star\"></span>`",
        "pureDefault": "<span nz-icon nzType=\"star\"></span>"
      },
      {
        "name": "nzCount",
        "inputType": 0,
        "description": "nz-rate.nzCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`5`",
        "pureDefault": "5"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-rate.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzTooltips",
        "inputType": 0,
        "description": "nz-rate.nzTooltips.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-rate.ngModel.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-rate.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzOnBlur",
        "inputType": 1,
        "description": "nz-rate.nzOnBlur.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<FocusEvent>`",
        "default": ""
      },
      {
        "name": "nzOnFocus",
        "inputType": 1,
        "description": "nz-rate.nzOnFocus.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<FocusEvent>`",
        "default": ""
      },
      {
        "name": "nzOnHoverChange",
        "inputType": 1,
        "description": "nz-rate.nzOnHoverChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzOnKeyDown",
        "inputType": 1,
        "description": "nz-rate.nzOnKeyDown.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<KeyboardEvent>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-rate.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-rate.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-rate.title",
    "description": "nz-rate.description",
    "whenToUse": "nz-rate.whenToUse",
    "doc": "/components/rate/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/rate"
  },
  {
    "type": "directive",
    "selector": "nz-resizable",
    "types": {},
    "properties": [
      {
        "name": "nzBounds",
        "inputType": 0,
        "description": "nz-resizable.nzBounds.description",
        "type": "Enum",
        "typeRaw": "`'window' | 'parent' | ElementRef<HTMLElement>`",
        "default": "`parent`",
        "typeDefinition": [
          "window",
          "parent",
          "ElementRef<HTMLElement>"
        ],
        "pureDefault": "parent"
      },
      {
        "name": "nzMaxHeight",
        "inputType": 0,
        "description": "nz-resizable.nzMaxHeight.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzMaxWidth",
        "inputType": 0,
        "description": "nz-resizable.nzMaxWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzMinHeight",
        "inputType": 0,
        "description": "nz-resizable.nzMinHeight.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`40`",
        "pureDefault": "40"
      },
      {
        "name": "nzMinWidth",
        "inputType": 0,
        "description": "nz-resizable.nzMinWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`40`",
        "pureDefault": "40"
      },
      {
        "name": "nzGridColumnCount",
        "inputType": 0,
        "description": "nz-resizable.nzGridColumnCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`-1`",
        "pureDefault": "-1"
      },
      {
        "name": "nzMaxColumn",
        "inputType": 0,
        "description": "nz-resizable.nzMaxColumn.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzMinColumn",
        "inputType": 0,
        "description": "nz-resizable.nzMinColumn.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzLockAspectRatio",
        "inputType": 0,
        "description": "nz-resizable.nzLockAspectRatio.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPreview",
        "inputType": 0,
        "description": "nz-resizable.nzPreview.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-resizable.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzResize",
        "inputType": 1,
        "description": "nz-resizable.nzResize.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzResizeEvent>`",
        "default": ""
      },
      {
        "name": "nzResizeStart",
        "inputType": 1,
        "description": "nz-resizable.nzResizeStart.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzResizeEvent>`",
        "default": ""
      },
      {
        "name": "nzResizeEnd",
        "inputType": 1,
        "description": "nz-resizable.nzResizeEnd.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzResizeEvent>`",
        "default": ""
      }
    ],
    "description": "nz-resizable.description",
    "lib": "ng-zorro-antd",
    "title": "nz-resizable.title",
    "whenToUse": "nz-resizable.whenToUse",
    "doc": "/components/resizable/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/resizable"
  },
  {
    "type": "component",
    "selector": "nz-resize-handle",
    "types": {},
    "properties": [
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-resize-handle.nzDirection.description",
        "type": "object",
        "typeRaw": "`NzResizeDirection`",
        "default": "`'bottomRight'`",
        "pureDefault": "bottomRight"
      }
    ],
    "description": "nz-resize-handle.description",
    "lib": "ng-zorro-antd",
    "title": "nz-resize-handle.title",
    "whenToUse": "nz-resize-handle.whenToUse",
    "doc": "/components/resizable/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/resizable"
  },
  {
    "type": "component",
    "selector": "nz-resize-handles",
    "types": {},
    "properties": [
      {
        "name": "nzDirections",
        "inputType": 0,
        "description": "nz-resize-handles.nzDirections.description",
        "type": "Array",
        "typeRaw": "`NzResizeDirection[]`",
        "default": "`DEFAULT_RESIZE_DIRECTION`",
        "pureDefault": "DEFAULT_RESIZE_DIRECTION"
      }
    ],
    "description": "nz-resize-handles.description",
    "lib": "ng-zorro-antd",
    "title": "nz-resize-handles.title",
    "whenToUse": "nz-resize-handles.whenToUse",
    "doc": "/components/resizable/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/resizable"
  },
  {
    "type": "component",
    "selector": "nz-result",
    "types": {},
    "properties": [
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-result.nzTitle.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>` | `string`",
        "default": ""
      },
      {
        "name": "nzSubTitle",
        "inputType": 0,
        "description": "nz-result.nzSubTitle.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>` | `string`",
        "default": ""
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-result.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'success' | 'error' | 'info' | 'warning'| '404' | '403' | '500'` | 'info'",
        "default": "`'info'`",
        "typeDefinition": [
          "success",
          "error",
          "info",
          "warning",
          "404",
          "403",
          "500",
          "info"
        ],
        "pureDefault": "info"
      },
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-result.nzIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>` | `string`",
        "default": ""
      },
      {
        "name": "nzExtra",
        "inputType": 0,
        "description": "nz-result.nzExtra.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>` | `string`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-result.title",
    "description": "nz-result.description",
    "whenToUse": "nz-result.whenToUse",
    "doc": "/components/result/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/result"
  },
  {
    "type": "component",
    "selector": "nz-select",
    "types": {},
    "properties": [
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-select.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-select.ngModel.description",
        "type": "object",
        "typeRaw": "`any | any[]`",
        "default": ""
      },
      {
        "name": "compareWith",
        "inputType": 0,
        "description": "nz-select.compareWith.description",
        "type": "function",
        "typeRaw": "`(o1: any, o2: any) => boolean`",
        "default": "`(o1: any, o2: any) => o1===o2`",
        "pureDefault": "(o1: any, o2: any) => o1===o2"
      },
      {
        "name": "nzAutoClearSearchValue",
        "inputType": 0,
        "description": "nz-select.nzAutoClearSearchValue.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-select.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-select.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBorderless",
        "inputType": 0,
        "description": "nz-select.nzBorderless.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOpen",
        "inputType": 2,
        "description": "nz-select.nzOpen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-select.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-select.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzDropdownClassName",
        "inputType": 0,
        "description": "nz-select.nzDropdownClassName.description",
        "type": "string",
        "typeRaw": "`string | string[]`",
        "default": ""
      },
      {
        "name": "nzDropdownMatchSelectWidth",
        "inputType": 0,
        "description": "nz-select.nzDropdownMatchSelectWidth.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzDropdownStyle",
        "inputType": 0,
        "description": "nz-select.nzDropdownStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzCustomTemplate",
        "inputType": 0,
        "description": "nz-select.nzCustomTemplate.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzOptionComponent }>`",
        "default": ""
      },
      {
        "name": "nzServerSearch",
        "inputType": 0,
        "description": "nz-select.nzServerSearch.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFilterOption",
        "inputType": 0,
        "description": "nz-select.nzFilterOption.description",
        "type": "function",
        "typeRaw": "`(input?: string, option?: NzOptionComponent) => boolean;`",
        "default": ""
      },
      {
        "name": "nzMaxMultipleCount",
        "inputType": 0,
        "description": "nz-select.nzMaxMultipleCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`Infinity`",
        "pureDefault": "Infinity"
      },
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-select.nzMode.description",
        "type": "Enum",
        "typeRaw": "`'multiple' | 'tags' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "multiple",
          "tags",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-select.nzNotFoundContent.description",
        "type": "string",
        "typeRaw": "`string  |  TemplateRef<void>`",
        "default": "`'Not Found'`",
        "pureDefault": "Not Found"
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-select.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzShowArrow",
        "inputType": 0,
        "description": "nz-select.nzShowArrow.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`(for single select), `false`(for multiple select)",
        "pureDefault": "true`(for single select), `false`(for multiple select"
      },
      {
        "name": "nzShowSearch",
        "inputType": 0,
        "description": "nz-select.nzShowSearch.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-select.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-select.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-select.nzSuffixIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any> | string`",
        "default": ""
      },
      {
        "name": "nzRemoveIcon",
        "inputType": 0,
        "description": "nz-select.nzRemoveIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any>`",
        "default": ""
      },
      {
        "name": "nzClearIcon",
        "inputType": 0,
        "description": "nz-select.nzClearIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any>`",
        "default": ""
      },
      {
        "name": "nzMenuItemSelectedIcon",
        "inputType": 0,
        "description": "nz-select.nzMenuItemSelectedIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<any>`",
        "default": ""
      },
      {
        "name": "nzTokenSeparators",
        "inputType": 0,
        "description": "nz-select.nzTokenSeparators.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-select.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "false",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzMaxTagCount",
        "inputType": 0,
        "description": "nz-select.nzMaxTagCount.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzOptions",
        "inputType": 0,
        "description": "nz-select.nzOptions.description",
        "type": "Array",
        "typeRaw": "`Array<{ label: string  | number | TemplateRef<any>; value: any; disabled?: boolean; hide?: boolean; groupLabel?: string | TemplateRef<any>;}>`",
        "default": ""
      },
      {
        "name": "nzMaxTagPlaceholder",
        "inputType": 0,
        "description": "nz-select.nzMaxTagPlaceholder.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: any[] }>`",
        "default": ""
      },
      {
        "name": "nzOptionHeightPx",
        "inputType": 0,
        "description": "nz-select.nzOptionHeightPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32"
      },
      {
        "name": "nzOptionOverflowSize",
        "inputType": 0,
        "description": "nz-select.nzOptionOverflowSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`8`",
        "pureDefault": "8"
      },
      {
        "name": "nzSelectOnTab",
        "inputType": 0,
        "description": "nz-select.nzSelectOnTab.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-select.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any[]>`",
        "default": ""
      },
      {
        "name": "nzOpenChange",
        "inputType": 1,
        "description": "nz-select.nzOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzScrollToBottom",
        "inputType": 1,
        "description": "nz-select.nzScrollToBottom.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "default": ""
      },
      {
        "name": "nzOnSearch",
        "inputType": 1,
        "description": "nz-select.nzOnSearch.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "nzFocus",
        "inputType": 1,
        "description": "nz-select.nzFocus.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "default": ""
      },
      {
        "name": "nzBlur",
        "inputType": 1,
        "description": "nz-select.nzBlur.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-select.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-select.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-select.title",
    "description": "nz-select.description",
    "whenToUse": "nz-select.whenToUse",
    "doc": "/components/select/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/select"
  },
  {
    "type": "component",
    "selector": "nz-option",
    "types": {},
    "properties": [
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-option.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzLabel",
        "inputType": 0,
        "description": "nz-option.nzLabel.description",
        "type": "string",
        "typeRaw": "`string  | number`",
        "default": ""
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-option.nzValue.description",
        "type": "object",
        "typeRaw": "`any `",
        "default": ""
      },
      {
        "name": "nzHide",
        "inputType": 0,
        "description": "nz-option.nzHide.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCustomContent",
        "inputType": 0,
        "description": "nz-option.nzCustomContent.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-option.title",
    "description": "nz-option.description",
    "whenToUse": "nz-option.whenToUse",
    "doc": "/components/select/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/select"
  },
  {
    "type": "component",
    "selector": "nz-option-group",
    "types": {},
    "properties": [
      {
        "name": "nzLabel",
        "inputType": 0,
        "description": "nz-option-group.nzLabel.description",
        "type": "string",
        "typeRaw": "`string  | number | TemplateRef<void>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-option-group.title",
    "description": "nz-option-group.description",
    "whenToUse": "nz-option-group.whenToUse",
    "doc": "/components/select/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/select"
  },
  {
    "type": "component",
    "selector": "nz-skeleton",
    "types": {
      "NzSkeletonAvatar": [
        {
          "name": "size",
          "inputType": 0,
          "description": "nz-skeleton.size.description",
          "type": "number",
          "typeRaw": "`number",
          "default": "\\ 'large' | 'small' | 'default'`",
          "pureDefault": "\\ 'large' | 'small' | 'default'`"
        },
        {
          "name": "shape",
          "inputType": 0,
          "description": "nz-skeleton.shape.description",
          "type": "Enum",
          "typeRaw": "`'circle' | 'square'`",
          "default": "",
          "typeDefinition": [
            "circle",
            "square"
          ]
        }
      ],
      "NzSkeletonParagraph": [
        {
          "name": "rows",
          "inputType": 0,
          "description": "nz-skeleton.rows.description",
          "type": "number",
          "typeRaw": "`number`",
          "default": ""
        },
        {
          "name": "width",
          "inputType": 0,
          "description": "nz-skeleton.width.description",
          "type": "number",
          "typeRaw": "`number | string | Array<number | string>`",
          "default": ""
        }
      ],
      "NzSkeletonTitle": [
        {
          "name": "width",
          "inputType": 0,
          "description": "nz-skeleton.width.description",
          "type": "number",
          "typeRaw": "`number | string`",
          "default": ""
        }
      ]
    },
    "properties": [
      {
        "name": "nzActive",
        "inputType": 0,
        "description": "nz-skeleton.nzActive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAvatar",
        "inputType": 0,
        "description": "nz-skeleton.nzAvatar.description",
        "type": "boolean",
        "typeRaw": "`boolean | NzSkeletonAvatar`",
        "default": "`false`",
        "complexType": "NzSkeletonAvatar",
        "pureDefault": "false"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-skeleton.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzParagraph",
        "inputType": 0,
        "description": "nz-skeleton.nzParagraph.description",
        "type": "boolean",
        "typeRaw": "`boolean | NzSkeletonParagraph`",
        "default": "`true`",
        "complexType": "NzSkeletonParagraph",
        "pureDefault": "true"
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-skeleton.nzTitle.description",
        "type": "boolean",
        "typeRaw": "`boolean | NzSkeletonTitle`",
        "default": "`true`",
        "complexType": "NzSkeletonTitle",
        "pureDefault": "true"
      },
      {
        "name": "nzRound",
        "inputType": 0,
        "description": "nz-skeleton.nzRound.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-skeleton.title",
    "description": "nz-skeleton.description",
    "whenToUse": "nz-skeleton.whenToUse",
    "doc": "/components/skeleton/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/skeleton"
  },
  {
    "type": "component",
    "selector": "nz-slider",
    "types": {},
    "properties": [
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-slider.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzDots",
        "inputType": 0,
        "description": "nz-slider.nzDots.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzIncluded",
        "inputType": 0,
        "description": "nz-slider.nzIncluded.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzMarks",
        "inputType": 0,
        "description": "nz-slider.nzMarks.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": "{ number: string/HTML } or { number: { style: object, label: string/HTML } }",
        "pureDefault": "{ number: string/HTML } or { number: { style: object, label: string/HTML } }"
      },
      {
        "name": "nzMax",
        "inputType": 0,
        "description": "nz-slider.nzMax.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`100`",
        "pureDefault": "100"
      },
      {
        "name": "nzMin",
        "inputType": 0,
        "description": "nz-slider.nzMin.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzRange",
        "inputType": 0,
        "description": "nz-slider.nzRange.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzStep",
        "inputType": 0,
        "description": "nz-slider.nzStep.description",
        "type": "number",
        "typeRaw": "`number | null`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzTipFormatter",
        "inputType": 0,
        "description": "nz-slider.nzTipFormatter.description",
        "type": "function",
        "typeRaw": "`(value: number) => string`",
        "default": ""
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-slider.ngModel.description",
        "type": "number",
        "typeRaw": "`number | number[]`",
        "default": ""
      },
      {
        "name": "nzVertical",
        "inputType": 0,
        "description": "nz-slider.nzVertical.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzReverse",
        "inputType": 0,
        "description": "nz-slider.nzReverse.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTooltipVisible",
        "inputType": 0,
        "description": "nz-slider.nzTooltipVisible.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'always' | 'never'`",
        "default": "`default`",
        "typeDefinition": [
          "default",
          "always",
          "never"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzTooltipPlacement",
        "inputType": 0,
        "description": "nz-slider.nzTooltipPlacement.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzOnAfterChange",
        "inputType": 1,
        "description": "nz-slider.nzOnAfterChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number[]  |  number>`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-slider.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number[]  |  number>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-slider.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-slider.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-slider.title",
    "description": "nz-slider.description",
    "whenToUse": "nz-slider.whenToUse",
    "doc": "/components/slider/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/slider"
  },
  {
    "type": "component",
    "selector": "nz-space",
    "types": {},
    "properties": [
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-space.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'small' | 'middle' | 'large' | number`",
        "default": "`small`",
        "typeDefinition": [
          "small",
          "middle",
          "large",
          "number"
        ],
        "pureDefault": "small"
      },
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-space.nzDirection.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal'`",
        "default": "`horizontal`",
        "typeDefinition": [
          "vertical",
          "horizontal"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "nz-space.nzAlign.description",
        "type": "Enum",
        "typeRaw": "`'start' | 'end' | 'baseline' | 'center'`",
        "default": "",
        "typeDefinition": [
          "start",
          "end",
          "baseline",
          "center"
        ]
      },
      {
        "name": "nzWrap",
        "inputType": 0,
        "description": "nz-space.nzWrap.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSplit",
        "inputType": 0,
        "description": "nz-space.nzSplit.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-space.title",
    "description": "nz-space.description",
    "whenToUse": "nz-space.whenToUse",
    "doc": "/components/space/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/space"
  },
  {
    "type": "component",
    "selector": "nz-spin",
    "types": {},
    "properties": [
      {
        "name": "nzDelay",
        "inputType": 0,
        "description": "nz-spin.nzDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzIndicator",
        "inputType": 0,
        "description": "nz-spin.nzIndicator.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-spin.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzSpinning",
        "inputType": 0,
        "description": "nz-spin.nzSpinning.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true",
        "forceInputType": 0
      },
      {
        "name": "nzSimple",
        "inputType": 0,
        "description": "nz-spin.nzSimple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTip",
        "inputType": 0,
        "description": "nz-spin.nzTip.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-spin.title",
    "description": "nz-spin.description",
    "whenToUse": "nz-spin.whenToUse",
    "doc": "/components/spin/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/spin"
  },
  {
    "type": "component",
    "selector": "nz-statistic",
    "types": {},
    "properties": [
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-statistic.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSuffix",
        "inputType": 0,
        "description": "nz-statistic.nzSuffix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-statistic.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-statistic.nzValue.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzValueStyle",
        "inputType": 0,
        "description": "nz-statistic.nzValueStyle.description",
        "type": "object",
        "typeRaw": "`Object`",
        "default": ""
      },
      {
        "name": "nzValueTemplate",
        "inputType": 0,
        "description": "nz-statistic.nzValueTemplate.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: string | number }>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-statistic.title",
    "description": "nz-statistic.description",
    "whenToUse": "nz-statistic.whenToUse",
    "doc": "/components/statistic/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/statistic"
  },
  {
    "type": "component",
    "selector": "nz-countdown",
    "types": {},
    "properties": [
      {
        "name": "nzFormat",
        "inputType": 0,
        "description": "nz-countdown.nzFormat.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`\"HH:mm:ss\"`",
        "pureDefault": "HH:mm:ss"
      },
      {
        "name": "nzPrefix",
        "inputType": 0,
        "description": "nz-countdown.nzPrefix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSuffix",
        "inputType": 0,
        "description": "nz-countdown.nzSuffix.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-countdown.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzValue",
        "inputType": 0,
        "description": "nz-countdown.nzValue.description",
        "type": "string",
        "typeRaw": "`string | number`",
        "default": ""
      },
      {
        "name": "nzValueTemplate",
        "inputType": 0,
        "description": "nz-countdown.nzValueTemplate.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: number }>`",
        "default": ""
      },
      {
        "name": "nzCountdownFinish",
        "inputType": 1,
        "description": "nz-countdown.nzCountdownFinish.description",
        "type": "string",
        "typeRaw": "`void`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-countdown.title",
    "description": "nz-countdown.description",
    "whenToUse": "nz-countdown.whenToUse",
    "doc": "/components/statistic/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/statistic"
  },
  {
    "type": "component",
    "selector": "nzFormat",
    "types": {},
    "properties": [],
    "lib": "ng-zorro-antd",
    "title": "nzFormat.title",
    "description": "nzFormat.description",
    "whenToUse": "nzFormat.whenToUse",
    "doc": "/components/statistic/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/statistic"
  },
  {
    "type": "component",
    "selector": "nz-steps",
    "types": {},
    "properties": [
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-steps.nzType.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'navigation'`",
        "default": "`default`",
        "typeDefinition": [
          "default",
          "navigation"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzCurrent",
        "inputType": 0,
        "description": "nz-steps.nzCurrent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzDirection",
        "inputType": 0,
        "description": "nz-steps.nzDirection.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal'`",
        "default": "`horizontal`",
        "typeDefinition": [
          "vertical",
          "horizontal"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzLabelPlacement",
        "inputType": 0,
        "description": "nz-steps.nzLabelPlacement.description",
        "type": "Enum",
        "typeRaw": "`'vertical' | 'horizontal'`",
        "default": "`horizontal`",
        "typeDefinition": [
          "vertical",
          "horizontal"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "nzProgressDot",
        "inputType": 0,
        "description": "nz-steps.nzProgressDot.description",
        "type": "boolean",
        "typeRaw": "`boolean | TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }>`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-steps.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-steps.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'wait' | 'process' | 'finish' | 'error'`",
        "default": "`'process'`",
        "typeDefinition": [
          "wait",
          "process",
          "finish",
          "error"
        ],
        "pureDefault": "process"
      },
      {
        "name": "nzStartIndex",
        "inputType": 0,
        "description": "nz-steps.nzStartIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzIndexChange",
        "inputType": 1,
        "description": "nz-steps.nzIndexChange.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "description": "nz-steps.description",
    "lib": "ng-zorro-antd",
    "title": "nz-steps.title",
    "whenToUse": "nz-steps.whenToUse",
    "doc": "/components/steps/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/steps"
  },
  {
    "type": "component",
    "selector": "nz-step",
    "types": {},
    "properties": [
      {
        "name": "nzDescription",
        "inputType": 0,
        "description": "nz-step.nzDescription.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzIcon",
        "inputType": 0,
        "description": "nz-step.nzIcon.description",
        "type": "string",
        "typeRaw": "`string | string[] | Set<string> | { [klass: string]: any; }`  |  `TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-step.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'wait' | 'process' | 'finish' | 'error'`",
        "default": "`'wait'`",
        "typeDefinition": [
          "wait",
          "process",
          "finish",
          "error"
        ],
        "pureDefault": "wait"
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-step.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzSubtitle",
        "inputType": 0,
        "description": "nz-step.nzSubtitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-step.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzPercentage",
        "inputType": 0,
        "description": "nz-step.nzPercentage.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "description": "nz-step.description",
    "lib": "ng-zorro-antd",
    "title": "nz-step.title",
    "whenToUse": "nz-step.whenToUse",
    "doc": "/components/steps/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/steps"
  },
  {
    "type": "component",
    "selector": "nz-switch",
    "types": {},
    "properties": [
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-switch.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-switch.ngModel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCheckedChildren",
        "inputType": 0,
        "description": "nz-switch.nzCheckedChildren.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzUnCheckedChildren",
        "inputType": 0,
        "description": "nz-switch.nzUnCheckedChildren.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-switch.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-switch.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-switch.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzControl",
        "inputType": 0,
        "description": "nz-switch.nzControl.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-switch.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-switch.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-switch.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-switch.title",
    "description": "nz-switch.description",
    "whenToUse": "nz-switch.whenToUse",
    "doc": "/components/switch/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/switch"
  },
  {
    "type": "component",
    "selector": "nz-table",
    "types": {},
    "properties": [
      {
        "name": "nzData",
        "inputType": 0,
        "description": "nz-table.nzData.description",
        "type": "Array",
        "typeRaw": "`T[]`",
        "default": ""
      },
      {
        "name": "nzFrontPagination",
        "inputType": 0,
        "description": "nz-table.nzFrontPagination.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzTotal",
        "inputType": 0,
        "description": "nz-table.nzTotal.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzPageIndex",
        "inputType": 2,
        "description": "nz-table.nzPageIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzPageSize",
        "inputType": 2,
        "description": "nz-table.nzPageSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzShowPagination",
        "inputType": 0,
        "description": "nz-table.nzShowPagination.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzPaginationPosition",
        "inputType": 0,
        "description": "nz-table.nzPaginationPosition.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'bottom' | 'both'`",
        "default": "`bottom`",
        "typeDefinition": [
          "top",
          "bottom",
          "both"
        ],
        "pureDefault": "bottom"
      },
      {
        "name": "nzPaginationType",
        "inputType": 0,
        "description": "nz-table.nzPaginationType.description",
        "type": "Enum",
        "typeRaw": "`'default' | 'small'`",
        "default": "`default`",
        "typeDefinition": [
          "default",
          "small"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzBordered",
        "inputType": 0,
        "description": "nz-table.nzBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOuterBordered",
        "inputType": 0,
        "description": "nz-table.nzOuterBordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzWidthConfig",
        "inputType": 0,
        "description": "nz-table.nzWidthConfig.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-table.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'middle' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "middle",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzLoading",
        "inputType": 0,
        "description": "nz-table.nzLoading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzLoadingIndicator",
        "inputType": 0,
        "description": "nz-table.nzLoadingIndicator.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzLoadingDelay",
        "inputType": 0,
        "description": "nz-table.nzLoadingDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzScroll",
        "inputType": 0,
        "description": "nz-table.nzScroll.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-table.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzFooter",
        "inputType": 0,
        "description": "nz-table.nzFooter.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzNoResult",
        "inputType": 0,
        "description": "nz-table.nzNoResult.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPageSizeOptions",
        "inputType": 0,
        "description": "nz-table.nzPageSizeOptions.description",
        "type": "Array",
        "typeRaw": "`number[]`",
        "default": "`[10, 20, 30, 40]`",
        "pureDefault": "[10, 20, 30, 40]"
      },
      {
        "name": "nzShowQuickJumper",
        "inputType": 0,
        "description": "nz-table.nzShowQuickJumper.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowSizeChanger",
        "inputType": 0,
        "description": "nz-table.nzShowSizeChanger.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowTotal",
        "inputType": 0,
        "description": "nz-table.nzShowTotal.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: number, range: [ number, number ] }>`",
        "default": ""
      },
      {
        "name": "nzItemRender",
        "inputType": 0,
        "description": "nz-table.nzItemRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>`",
        "default": ""
      },
      {
        "name": "nzHideOnSinglePage",
        "inputType": 0,
        "description": "nz-table.nzHideOnSinglePage.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSimple",
        "inputType": 0,
        "description": "nz-table.nzSimple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzTemplateMode",
        "inputType": 0,
        "description": "nz-table.nzTemplateMode.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzVirtualItemSize",
        "inputType": 0,
        "description": "nz-table.nzVirtualItemSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzVirtualMaxBufferPx",
        "inputType": 0,
        "description": "nz-table.nzVirtualMaxBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "nzVirtualMinBufferPx",
        "inputType": 0,
        "description": "nz-table.nzVirtualMinBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`100`",
        "pureDefault": "100"
      },
      {
        "name": "nzVirtualForTrackBy",
        "inputType": 0,
        "description": "nz-table.nzVirtualForTrackBy.description",
        "type": "object",
        "typeRaw": "`TrackByFunction<T>`",
        "default": ""
      },
      {
        "name": "nzPageIndexChange",
        "inputType": 1,
        "description": "nz-table.nzPageIndexChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzPageSizeChange",
        "inputType": 1,
        "description": "nz-table.nzPageSizeChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzCurrentPageDataChange",
        "inputType": 1,
        "description": "nz-table.nzCurrentPageDataChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<T[]>`",
        "default": ""
      },
      {
        "name": "nzQueryParams",
        "inputType": 1,
        "description": "nz-table.nzQueryParams.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzTableQueryParams>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-table.title",
    "description": "nz-table.description",
    "whenToUse": "nz-table.whenToUse",
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table"
  },
  {
    "type": "component",
    "selector": "th",
    "types": {},
    "properties": [
      {
        "name": "nzShowCheckbox",
        "inputType": 0,
        "description": "th.nzShowCheckbox.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "th.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzIndeterminate",
        "inputType": 0,
        "description": "th.nzIndeterminate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzChecked",
        "inputType": 2,
        "description": "th.nzChecked.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzCheckedChange",
        "inputType": 1,
        "description": "th.nzCheckedChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzShowRowSelection",
        "inputType": 0,
        "description": "th.nzShowRowSelection.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzSelections",
        "inputType": 0,
        "description": "th.nzSelections.description",
        "type": "Array",
        "typeRaw": "`Array<{ text: string, onSelect: any }>`",
        "default": ""
      },
      {
        "name": "nzShowSort",
        "inputType": 0,
        "description": "th.nzShowSort.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzSortFn",
        "inputType": 0,
        "description": "th.nzSortFn.description",
        "type": "object",
        "typeRaw": "`NzTableSortFn<T> | boolean`",
        "default": ""
      },
      {
        "name": "nzSortOrder",
        "inputType": 0,
        "description": "th.nzSortOrder.description",
        "type": "Enum",
        "typeRaw": "`'ascend' | 'descend' | null`",
        "default": "",
        "typeDefinition": [
          "ascend",
          "descend",
          "null"
        ]
      },
      {
        "name": "nzSortDirections",
        "inputType": 0,
        "description": "th.nzSortDirections.description",
        "type": "Array",
        "typeRaw": "`Array<'ascend' | 'descend' | null>`",
        "default": "`['ascend', 'descend', null]`",
        "pureDefault": "['ascend', 'descend', null]"
      },
      {
        "name": "nzSortOrderChange",
        "inputType": 1,
        "description": "th.nzSortOrderChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<'ascend' | 'descend' | null>`",
        "default": ""
      },
      {
        "name": "nzShowFilter",
        "inputType": 0,
        "description": "th.nzShowFilter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzFilterFn",
        "inputType": 0,
        "description": "th.nzFilterFn.description",
        "type": "object",
        "typeRaw": "`NzTableFilterFn<T> | boolean`",
        "default": ""
      },
      {
        "name": "nzFilters",
        "inputType": 0,
        "description": "th.nzFilters.description",
        "type": "Array",
        "typeRaw": "`Array<{ text: string; value: any; byDefault?: boolean }>`",
        "default": ""
      },
      {
        "name": "nzFilterMultiple",
        "inputType": 0,
        "description": "th.nzFilterMultiple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzFilterChange",
        "inputType": 1,
        "description": "th.nzFilterChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any[] | any>`",
        "default": ""
      },
      {
        "name": "nzWidth",
        "inputType": 0,
        "description": "th.nzWidth.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzLeft",
        "inputType": 0,
        "description": "th.nzLeft.description",
        "type": "string",
        "typeRaw": "`string | boolean`",
        "default": ""
      },
      {
        "name": "nzRight",
        "inputType": 0,
        "description": "th.nzRight.description",
        "type": "string",
        "typeRaw": "`string | boolean`",
        "default": ""
      },
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "th.nzAlign.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'right' | 'center'`",
        "default": "",
        "typeDefinition": [
          "left",
          "right",
          "center"
        ]
      },
      {
        "name": "nzBreakWord",
        "inputType": 0,
        "description": "th.nzBreakWord.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzEllipsis",
        "inputType": 0,
        "description": "th.nzEllipsis.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzColumnKey",
        "inputType": 0,
        "description": "th.nzColumnKey.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      }
    ],
    "description": "th.description",
    "lib": "ng-zorro-antd",
    "title": "th.title",
    "whenToUse": "th.whenToUse",
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table"
  },
  {
    "type": "component",
    "selector": "td",
    "types": {},
    "properties": [
      {
        "name": "nzShowCheckbox",
        "inputType": 0,
        "description": "td.nzShowCheckbox.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "td.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzIndeterminate",
        "inputType": 0,
        "description": "td.nzIndeterminate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzChecked",
        "inputType": 2,
        "description": "td.nzChecked.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzCheckedChange",
        "inputType": 1,
        "description": "td.nzCheckedChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "colSpan",
        "inputType": 0,
        "description": "td.colSpan.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "rowSpan",
        "inputType": 0,
        "description": "td.rowSpan.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "nzShowExpand",
        "inputType": 0,
        "description": "td.nzShowExpand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzExpand",
        "inputType": 2,
        "description": "td.nzExpand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzExpandChange",
        "inputType": 1,
        "description": "td.nzExpandChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "nzLeft",
        "inputType": 0,
        "description": "td.nzLeft.description",
        "type": "string",
        "typeRaw": "`string | boolean`",
        "default": ""
      },
      {
        "name": "nzRight",
        "inputType": 0,
        "description": "td.nzRight.description",
        "type": "string",
        "typeRaw": "`string | boolean`",
        "default": ""
      },
      {
        "name": "nzAlign",
        "inputType": 0,
        "description": "td.nzAlign.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'right' | 'center'`",
        "default": "",
        "typeDefinition": [
          "left",
          "right",
          "center"
        ]
      },
      {
        "name": "nzBreakWord",
        "inputType": 0,
        "description": "td.nzBreakWord.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzEllipsis",
        "inputType": 0,
        "description": "td.nzEllipsis.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzIndentSize",
        "inputType": 0,
        "description": "td.nzIndentSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "description": "td.description",
    "lib": "ng-zorro-antd",
    "title": "td.title",
    "whenToUse": "td.whenToUse",
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table"
  },
  {
    "type": "component",
    "selector": "tr",
    "types": {},
    "properties": [
      {
        "name": "nzExpand",
        "inputType": 0,
        "description": "tr.nzExpand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "tr.title",
    "description": "tr.description",
    "whenToUse": "tr.whenToUse",
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table"
  },
  {
    "type": "component",
    "selector": "nz-filter-trigger",
    "types": {},
    "properties": [
      {
        "name": "nzDropdownMenu",
        "inputType": 0,
        "description": "nz-filter-trigger.nzDropdownMenu.description",
        "type": "object",
        "typeRaw": "`NzDropdownMenuComponent`",
        "default": ""
      },
      {
        "name": "nzVisible",
        "inputType": 2,
        "description": "nz-filter-trigger.nzVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "nzActive",
        "inputType": 0,
        "description": "nz-filter-trigger.nzActive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzHasBackdrop",
        "inputType": 0,
        "description": "nz-filter-trigger.nzHasBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzVisibleChange",
        "inputType": 1,
        "description": "nz-filter-trigger.nzVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "description": "nz-filter-trigger.description",
    "lib": "ng-zorro-antd",
    "title": "nz-filter-trigger.title",
    "whenToUse": "nz-filter-trigger.whenToUse",
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table"
  },
  {
    "type": "directive",
    "selector": "nz-virtual-scroll",
    "types": {},
    "properties": [],
    "description": "nz-virtual-scroll.description",
    "lib": "ng-zorro-antd",
    "title": "nz-virtual-scroll.title",
    "whenToUse": "nz-virtual-scroll.whenToUse",
    "doc": "/components/table/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/table"
  },
  {
    "type": "component",
    "selector": "nz-tabset",
    "types": {},
    "properties": [
      {
        "name": "nzSelectedIndex",
        "inputType": 0,
        "description": "nz-tabset.nzSelectedIndex.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzAnimated",
        "inputType": 0,
        "description": "nz-tabset.nzAnimated.description",
        "type": "boolean",
        "typeRaw": "`boolean | {inkBar:boolean, tabPane:boolean}`",
        "default": "`true`, `false` when `type=\"card\"`",
        "pureDefault": "true`, `false` when `type=\"card"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-tabset.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzTabBarExtraContent",
        "inputType": 0,
        "description": "nz-tabset.nzTabBarExtraContent.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzTabBarStyle",
        "inputType": 0,
        "description": "nz-tabset.nzTabBarStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzTabPosition",
        "inputType": 0,
        "description": "nz-tabset.nzTabPosition.description",
        "type": "Enum",
        "typeRaw": "`'top' | 'right' | 'bottom' | 'left'`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "right",
          "bottom",
          "left"
        ],
        "pureDefault": "top"
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-tabset.nzType.description",
        "type": "Enum",
        "typeRaw": "`'line' | 'card' | 'editable-card'`",
        "default": "`'line'`",
        "typeDefinition": [
          "line",
          "card",
          "editable-card"
        ],
        "pureDefault": "line"
      },
      {
        "name": "nzTabBarGutter",
        "inputType": 0,
        "description": "nz-tabset.nzTabBarGutter.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "nzHideAll",
        "inputType": 0,
        "description": "nz-tabset.nzHideAll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzLinkRouter",
        "inputType": 0,
        "description": "nz-tabset.nzLinkRouter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzLinkExact",
        "inputType": 0,
        "description": "nz-tabset.nzLinkExact.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzCanDeactivate",
        "inputType": 0,
        "description": "nz-tabset.nzCanDeactivate.description",
        "type": "object",
        "typeRaw": "`NzTabsCanDeactivateFn`",
        "default": ""
      },
      {
        "name": "nzCentered",
        "inputType": 0,
        "description": "nz-tabset.nzCentered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSelectedIndexChange",
        "inputType": 1,
        "description": "nz-tabset.nzSelectedIndexChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<number>`",
        "default": ""
      },
      {
        "name": "nzSelectChange",
        "inputType": 1,
        "description": "nz-tabset.nzSelectChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{index: number,tab: NzTabComponent}>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-tabset.title",
    "description": "nz-tabset.description",
    "whenToUse": "nz-tabset.whenToUse",
    "doc": "/components/tabs/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tabs"
  },
  {
    "type": "component",
    "selector": "nz-tab",
    "types": {},
    "properties": [
      {
        "name": "nzTitle",
        "inputType": 0,
        "description": "nz-tab.nzTitle.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzForceRender",
        "inputType": 0,
        "description": "nz-tab.nzForceRender.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-tab.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "",
        "forceInputType": 0
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-tab.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "nzContextmenu",
        "inputType": 1,
        "description": "nz-tab.nzContextmenu.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      },
      {
        "name": "nzSelect",
        "inputType": 1,
        "description": "nz-tab.nzSelect.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "nzDeselect",
        "inputType": 1,
        "description": "nz-tab.nzDeselect.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-tab.title",
    "description": "nz-tab.description",
    "whenToUse": "nz-tab.whenToUse",
    "doc": "/components/tabs/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tabs"
  },
  {
    "type": "directive",
    "selector": "nz-tab",
    "types": {},
    "properties": [],
    "description": "nz-tab.description",
    "lib": "ng-zorro-antd",
    "title": "nz-tab.title",
    "whenToUse": "nz-tab.whenToUse",
    "doc": "/components/tabs/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tabs"
  },
  {
    "type": "component",
    "selector": "nz-tag",
    "types": {},
    "properties": [
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-tag.nzMode.description",
        "type": "Enum",
        "typeRaw": "`'closeable' | 'default' | 'checkable'`",
        "default": "`'default'`",
        "typeDefinition": [
          "closeable",
          "default",
          "checkable"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzChecked",
        "inputType": 2,
        "description": "nz-tag.nzChecked.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzColor",
        "inputType": 0,
        "description": "nz-tag.nzColor.description",
        "type": "Enum",
        "typeRaw": "`string`",
        "default": "",
        "typeDefinition": [
          "success",
          "processing",
          "error",
          "default",
          "warning",
          "magenta",
          "red",
          "volcano",
          "orange",
          "gold",
          "lime",
          "green",
          "cyan",
          "blue",
          "geekblue",
          "purple"
        ]
      },
      {
        "name": "nzOnClose",
        "inputType": 1,
        "description": "nz-tag.nzOnClose.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      },
      {
        "name": "nzCheckedChange",
        "inputType": 1,
        "description": "nz-tag.nzCheckedChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-tag.title",
    "description": "nz-tag.description",
    "whenToUse": "nz-tag.whenToUse",
    "doc": "/components/tag/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tag"
  },
  {
    "type": "component",
    "selector": "nz-time-picker",
    "types": {},
    "properties": [
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-time-picker.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "description": "nz-time-picker.ngModel.description",
        "type": "object",
        "typeRaw": "`Date`",
        "default": ""
      },
      {
        "name": "nzAddOn",
        "inputType": 0,
        "description": "nz-time-picker.nzAddOn.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzAllowEmpty",
        "inputType": 0,
        "description": "nz-time-picker.nzAllowEmpty.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzAutoFocus",
        "inputType": 0,
        "description": "nz-time-picker.nzAutoFocus.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-time-picker.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzClearText",
        "inputType": 0,
        "description": "nz-time-picker.nzClearText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'clear'`",
        "pureDefault": "clear"
      },
      {
        "name": "nzNowText",
        "inputType": 0,
        "description": "nz-time-picker.nzNowText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Now'`",
        "pureDefault": "Now"
      },
      {
        "name": "nzOkText",
        "inputType": 0,
        "description": "nz-time-picker.nzOkText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Ok'`",
        "pureDefault": "Ok"
      },
      {
        "name": "nzDefaultOpenValue",
        "inputType": 0,
        "description": "nz-time-picker.nzDefaultOpenValue.description",
        "type": "object",
        "typeRaw": "`Date`",
        "default": "`new Date()`",
        "pureDefault": "new Date()"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-time-picker.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzDisabledHours",
        "inputType": 0,
        "description": "nz-time-picker.nzDisabledHours.description",
        "type": "function",
        "typeRaw": "`() => number[]`",
        "default": ""
      },
      {
        "name": "nzDisabledMinutes",
        "inputType": 0,
        "description": "nz-time-picker.nzDisabledMinutes.description",
        "type": "function",
        "typeRaw": "`(hour: number) => number[]`",
        "default": ""
      },
      {
        "name": "nzDisabledSeconds",
        "inputType": 0,
        "description": "nz-time-picker.nzDisabledSeconds.description",
        "type": "function",
        "typeRaw": "`(hour: number, minute: number) => number[]`",
        "default": ""
      },
      {
        "name": "nzFormat",
        "inputType": 0,
        "description": "nz-time-picker.nzFormat.description",
        "type": "string",
        "typeRaw": "[DatePipe](https://angular.io/api/common/DatePipe)",
        "default": "`\"HH:mm:ss\"`",
        "pureDefault": "HH:mm:ss"
      },
      {
        "name": "nzHideDisabledOptions",
        "inputType": 0,
        "description": "nz-time-picker.nzHideDisabledOptions.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzHourStep",
        "inputType": 0,
        "description": "nz-time-picker.nzHourStep.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzMinuteStep",
        "inputType": 0,
        "description": "nz-time-picker.nzMinuteStep.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzSecondStep",
        "inputType": 0,
        "description": "nz-time-picker.nzSecondStep.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-time-picker.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-time-picker.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzBorderless",
        "inputType": 0,
        "description": "nz-time-picker.nzBorderless.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzInputReadOnly",
        "inputType": 0,
        "description": "nz-time-picker.nzInputReadOnly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOpen",
        "inputType": 2,
        "description": "nz-time-picker.nzOpen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-time-picker.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`\"Select a time\"`",
        "pureDefault": "Select a time"
      },
      {
        "name": "nzPopupClassName",
        "inputType": 0,
        "description": "nz-time-picker.nzPopupClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`''`",
        "pureDefault": ""
      },
      {
        "name": "nzUse12Hours",
        "inputType": 0,
        "description": "nz-time-picker.nzUse12Hours.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSuffixIcon",
        "inputType": 0,
        "description": "nz-time-picker.nzSuffixIcon.description",
        "type": "string",
        "typeRaw": "`string` | `TemplateRef`",
        "default": ""
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "description": "nz-time-picker.ngModelChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Date>`",
        "default": ""
      },
      {
        "name": "nzOpenChange",
        "inputType": 1,
        "description": "nz-time-picker.nzOpenChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-time-picker.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-time-picker.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-time-picker.title",
    "description": "nz-time-picker.description",
    "whenToUse": "nz-time-picker.whenToUse",
    "doc": "/components/time-picker/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/time-picker"
  },
  {
    "type": "component",
    "selector": "nz-timeline",
    "types": {},
    "properties": [
      {
        "name": "nzPending",
        "inputType": 0,
        "description": "nz-timeline.nzPending.description",
        "type": "string",
        "typeRaw": "`string|boolean|TemplateRef<void>`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPendingDot",
        "inputType": 0,
        "description": "nz-timeline.nzPendingDot.description",
        "type": "string",
        "typeRaw": "`string|TemplateRef<void>`",
        "default": "`<span nz-icon nzType=\"loading\"></span>`",
        "pureDefault": "<span nz-icon nzType=\"loading\"></span>"
      },
      {
        "name": "nzReverse",
        "inputType": 0,
        "description": "nz-timeline.nzReverse.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzMode",
        "inputType": 0,
        "description": "nz-timeline.nzMode.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'alternate' | 'right' | 'custom'`",
        "default": "",
        "typeDefinition": [
          "left",
          "alternate",
          "right",
          "custom"
        ]
      }
    ],
    "description": "nz-timeline.description",
    "lib": "ng-zorro-antd",
    "title": "nz-timeline.title",
    "whenToUse": "nz-timeline.whenToUse",
    "doc": "/components/timeline/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/timeline"
  },
  {
    "type": "component",
    "selector": "nz-timeline-item",
    "types": {},
    "properties": [
      {
        "name": "nzColor",
        "inputType": 0,
        "description": "nz-timeline-item.nzColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`blue`",
        "pureDefault": "blue"
      },
      {
        "name": "nzDot",
        "inputType": 0,
        "description": "nz-timeline-item.nzDot.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzPosition",
        "inputType": 0,
        "description": "nz-timeline-item.nzPosition.description",
        "type": "Enum",
        "typeRaw": "`'left' | 'right'`",
        "default": "",
        "typeDefinition": [
          "left",
          "right"
        ]
      },
      {
        "name": "nzLabel",
        "inputType": 0,
        "description": "nz-timeline-item.nzLabel.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": ""
      }
    ],
    "description": "nz-timeline-item.description",
    "lib": "ng-zorro-antd",
    "title": "nz-timeline-item.title",
    "whenToUse": "nz-timeline-item.whenToUse",
    "doc": "/components/timeline/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/timeline"
  },
  {
    "type": "component",
    "selector": "nz-transfer",
    "types": {},
    "properties": [
      {
        "name": "nzDataSource",
        "inputType": 0,
        "description": "nz-transfer.nzDataSource.description",
        "type": "Array",
        "typeRaw": "`TransferItem[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-transfer.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzTitles",
        "inputType": 0,
        "description": "nz-transfer.nzTitles.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`['', '']`",
        "pureDefault": "['', '']"
      },
      {
        "name": "nzOperations",
        "inputType": 0,
        "description": "nz-transfer.nzOperations.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`['', '']`",
        "pureDefault": "['', '']"
      },
      {
        "name": "nzListStyle",
        "inputType": 0,
        "description": "nz-transfer.nzListStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzItemUnit",
        "inputType": 0,
        "description": "nz-transfer.nzItemUnit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'item'`",
        "pureDefault": "item"
      },
      {
        "name": "nzItemsUnit",
        "inputType": 0,
        "description": "nz-transfer.nzItemsUnit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'items'`",
        "pureDefault": "items"
      },
      {
        "name": "nzRenderList",
        "inputType": 0,
        "description": "nz-transfer.nzRenderList.description",
        "type": "Array",
        "typeRaw": "`Array<TemplateRef<void> | null>`",
        "default": "`[null, null]`",
        "pureDefault": "[null, null]"
      },
      {
        "name": "nzRender",
        "inputType": 0,
        "description": "nz-transfer.nzRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzFooter",
        "inputType": 0,
        "description": "nz-transfer.nzFooter.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzShowSearch",
        "inputType": 0,
        "description": "nz-transfer.nzShowSearch.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzFilterOption",
        "inputType": 0,
        "description": "nz-transfer.nzFilterOption.description",
        "type": "function",
        "typeRaw": "`(inputValue: string, item: TransferItem) => boolean`",
        "default": ""
      },
      {
        "name": "nzSearchPlaceholder",
        "inputType": 0,
        "description": "nz-transfer.nzSearchPlaceholder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'Search here'`",
        "pureDefault": "Search here"
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-transfer.nzNotFoundContent.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'The list is empty'`",
        "pureDefault": "The list is empty"
      },
      {
        "name": "nzCanMove",
        "inputType": 0,
        "description": "nz-transfer.nzCanMove.description",
        "type": "function",
        "typeRaw": "`(arg: TransferCanMove) => Observable<TransferItem[]>`",
        "default": ""
      },
      {
        "name": "nzSelectedKeys",
        "inputType": 0,
        "description": "nz-transfer.nzSelectedKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "nzTargetKeys",
        "inputType": 0,
        "description": "nz-transfer.nzTargetKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-transfer.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzChange",
        "inputType": 1,
        "description": "nz-transfer.nzChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<TransferChange>`",
        "default": ""
      },
      {
        "name": "nzSearchChange",
        "inputType": 1,
        "description": "nz-transfer.nzSearchChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<TransferSearchChange>`",
        "default": ""
      },
      {
        "name": "nzSelectChange",
        "inputType": 1,
        "description": "nz-transfer.nzSelectChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<TransferSearchChange>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-transfer.title",
    "description": "nz-transfer.description",
    "whenToUse": "nz-transfer.whenToUse",
    "doc": "/components/transfer/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/transfer"
  },
  {
    "type": "component",
    "selector": "nz-tree",
    "types": {},
    "properties": [
      {
        "name": "nzData",
        "inputType": 0,
        "description": "nz-tree.nzData.description",
        "type": "Array",
        "typeRaw": "`NzTreeNodeOptions[] | NzTreeNode[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzBlockNode",
        "inputType": 0,
        "description": "nz-tree.nzBlockNode.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCheckable",
        "inputType": 0,
        "description": "nz-tree.nzCheckable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowExpand",
        "inputType": 0,
        "description": "nz-tree.nzShowExpand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzShowLine",
        "inputType": 0,
        "description": "nz-tree.nzShowLine.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExpandedIcon",
        "inputType": 0,
        "description": "nz-tree.nzExpandedIcon.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzTreeNode }>`",
        "default": ""
      },
      {
        "name": "nzShowIcon",
        "inputType": 0,
        "description": "nz-tree.nzShowIcon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAsyncData",
        "inputType": 0,
        "description": "nz-tree.nzAsyncData.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDraggable",
        "inputType": 0,
        "description": "nz-tree.nzDraggable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzMultiple",
        "inputType": 0,
        "description": "nz-tree.nzMultiple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzHideUnMatched",
        "inputType": 0,
        "description": "nz-tree.nzHideUnMatched.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCheckStrictly",
        "inputType": 0,
        "description": "nz-tree.nzCheckStrictly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzTreeTemplate",
        "inputType": 0,
        "description": "nz-tree.nzTreeTemplate.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzTreeNode }>`",
        "default": ""
      },
      {
        "name": "nzExpandAll",
        "inputType": 0,
        "description": "nz-tree.nzExpandAll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExpandedKeys",
        "inputType": 0,
        "description": "nz-tree.nzExpandedKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzCheckedKeys",
        "inputType": 0,
        "description": "nz-tree.nzCheckedKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzSelectedKeys",
        "inputType": 0,
        "description": "nz-tree.nzSelectedKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzSearchValue",
        "inputType": 0,
        "description": "nz-tree.nzSearchValue.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "nzSearchFunc",
        "inputType": 0,
        "description": "nz-tree.nzSearchFunc.description",
        "type": "function",
        "typeRaw": "`(node: NzTreeNodeOptions) => boolean`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "nzBeforeDrop",
        "inputType": 0,
        "description": "nz-tree.nzBeforeDrop.description",
        "type": "function",
        "typeRaw": "`(confirm: NzFormatBeforeDropEvent) => Observable<boolean>`",
        "default": ""
      },
      {
        "name": "nzVirtualHeight",
        "inputType": 0,
        "description": "nz-tree.nzVirtualHeight.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzVirtualItemSize",
        "inputType": 0,
        "description": "nz-tree.nzVirtualItemSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28`",
        "pureDefault": "28"
      },
      {
        "name": "nzVirtualMaxBufferPx",
        "inputType": 0,
        "description": "nz-tree.nzVirtualMaxBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`500`",
        "pureDefault": "500"
      },
      {
        "name": "nzVirtualMinBufferPx",
        "inputType": 0,
        "description": "nz-tree.nzVirtualMinBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28`",
        "pureDefault": "28"
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-tree.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzDblClick",
        "inputType": 1,
        "description": "nz-tree.nzDblClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzContextMenu",
        "inputType": 1,
        "description": "nz-tree.nzContextMenu.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzCheckBoxChange",
        "inputType": 1,
        "description": "nz-tree.nzCheckBoxChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzExpandChange",
        "inputType": 1,
        "description": "nz-tree.nzExpandChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzSearchValueChange",
        "inputType": 1,
        "description": "nz-tree.nzSearchValueChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDragStart",
        "inputType": 1,
        "description": "nz-tree.nzOnDragStart.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDragEnter",
        "inputType": 1,
        "description": "nz-tree.nzOnDragEnter.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDragOver",
        "inputType": 1,
        "description": "nz-tree.nzOnDragOver.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDragLeave",
        "inputType": 1,
        "description": "nz-tree.nzOnDragLeave.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDrop",
        "inputType": 1,
        "description": "nz-tree.nzOnDrop.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "nzOnDragEnd",
        "inputType": 1,
        "description": "nz-tree.nzOnDragEnd.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      }
    ],
    "description": "nz-tree.description",
    "lib": "ng-zorro-antd",
    "title": "nz-tree.title",
    "whenToUse": "nz-tree.whenToUse",
    "doc": "/components/tree/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree"
  },
  {
    "type": "component",
    "selector": "nz-tree-select",
    "types": {},
    "properties": [
      {
        "name": "nzId",
        "inputType": 0,
        "description": "nz-tree-select.nzId.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAllowClear",
        "inputType": 0,
        "description": "nz-tree-select.nzAllowClear.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzPlaceHolder",
        "inputType": 0,
        "description": "nz-tree-select.nzPlaceHolder.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzPlacement",
        "inputType": 0,
        "description": "nz-tree-select.nzPlacement.description",
        "type": "string",
        "typeRaw": "`bottomLeft` `bottomRight` `topLeft` `topRight`",
        "default": "bottomLeft",
        "pureDefault": "bottomLeft"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-tree-select.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzShowIcon",
        "inputType": 0,
        "description": "nz-tree-select.nzShowIcon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowSearch",
        "inputType": 0,
        "description": "nz-tree-select.nzShowSearch.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzNotFoundContent",
        "inputType": 0,
        "description": "nz-tree-select.nzNotFoundContent.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDropdownMatchSelectWidth",
        "inputType": 0,
        "description": "nz-tree-select.nzDropdownMatchSelectWidth.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzDropdownStyle",
        "inputType": 0,
        "description": "nz-tree-select.nzDropdownStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "nzDropdownClassName",
        "inputType": 0,
        "description": "nz-tree-select.nzDropdownClassName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzMultiple",
        "inputType": 0,
        "description": "nz-tree-select.nzMultiple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzHideUnMatched",
        "inputType": 0,
        "description": "nz-tree-select.nzHideUnMatched.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-tree-select.nzSize.description",
        "type": "Enum",
        "typeRaw": "`'large' | 'small' | 'default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "nzStatus",
        "inputType": 0,
        "description": "nz-tree-select.nzStatus.description",
        "type": "Enum",
        "typeRaw": "`'error' | 'warning'`",
        "default": "",
        "typeDefinition": [
          "error",
          "warning"
        ]
      },
      {
        "name": "nzCheckable",
        "inputType": 0,
        "description": "nz-tree-select.nzCheckable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCheckStrictly",
        "inputType": 0,
        "description": "nz-tree-select.nzCheckStrictly.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzShowExpand",
        "inputType": 0,
        "description": "nz-tree-select.nzShowExpand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzShowLine",
        "inputType": 0,
        "description": "nz-tree-select.nzShowLine.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzAsyncData",
        "inputType": 0,
        "description": "nz-tree-select.nzAsyncData.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzNodes",
        "inputType": 0,
        "description": "nz-tree-select.nzNodes.description",
        "type": "Array",
        "typeRaw": "`NzTreeNodeOptions[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "nzDefaultExpandAll",
        "inputType": 0,
        "description": "nz-tree-select.nzDefaultExpandAll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExpandedKeys",
        "inputType": 0,
        "description": "nz-tree-select.nzExpandedKeys.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "nzDisplayWith",
        "inputType": 0,
        "description": "nz-tree-select.nzDisplayWith.description",
        "type": "function",
        "typeRaw": "`(node: NzTreeNode) => string`",
        "default": "`(node: NzTreeNode) => node.title`",
        "pureDefault": "(node: NzTreeNode) => node.title"
      },
      {
        "name": "nzMaxTagCount",
        "inputType": 0,
        "description": "nz-tree-select.nzMaxTagCount.description",
        "type": "number",
        "typeRaw": "number",
        "default": ""
      },
      {
        "name": "nzMaxTagPlaceholder",
        "inputType": 0,
        "description": "nz-tree-select.nzMaxTagPlaceholder.description",
        "type": "TemplateRef",
        "typeRaw": "TemplateRef<{ $implicit: NzTreeNode[] }>",
        "default": ""
      },
      {
        "name": "nzTreeTemplate",
        "inputType": 0,
        "description": "nz-tree-select.nzTreeTemplate.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzTreeNode }>`",
        "default": ""
      },
      {
        "name": "nzVirtualHeight",
        "inputType": 0,
        "description": "nz-tree-select.nzVirtualHeight.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzVirtualItemSize",
        "inputType": 0,
        "description": "nz-tree-select.nzVirtualItemSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28`",
        "pureDefault": "28"
      },
      {
        "name": "nzVirtualMaxBufferPx",
        "inputType": 0,
        "description": "nz-tree-select.nzVirtualMaxBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`500`",
        "pureDefault": "500"
      },
      {
        "name": "nzVirtualMinBufferPx",
        "inputType": 0,
        "description": "nz-tree-select.nzVirtualMinBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28`",
        "pureDefault": "28"
      },
      {
        "name": "nzBackdrop",
        "inputType": 0,
        "description": "nz-tree-select.nzBackdrop.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzExpandChange",
        "inputType": 1,
        "description": "nz-tree-select.nzExpandChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzFormatEmitEvent>`",
        "default": ""
      },
      {
        "name": "ngModel",
        "inputType": 2,
        "type": "any",
        "typeRaw": "`any`",
        "description": "nz-tree-select.ngModel.description"
      },
      {
        "name": "ngModelChange",
        "inputType": 1,
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "description": "nz-tree-select.ngModelChange.description"
      },
      {
        "name": "formControlName",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-tree-select.formControlName.description"
      },
      {
        "name": "name",
        "inputType": 0,
        "type": "string",
        "typeRaw": "`string`",
        "description": "nz-tree-select.name.description"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-tree-select.title",
    "description": "nz-tree-select.description",
    "whenToUse": "nz-tree-select.whenToUse",
    "doc": "/components/tree-select/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-select"
  },
  {
    "type": "component",
    "selector": "nz-tree-view",
    "types": {},
    "properties": [
      {
        "name": "nzTreeControl",
        "inputType": 0,
        "description": "nz-tree-view.nzTreeControl.description",
        "type": "string",
        "typeRaw": "[TreeControl](https://material.angular.io/cdk/tree/api#TreeControl)",
        "default": ""
      },
      {
        "name": "nzDataSource",
        "inputType": 0,
        "description": "nz-tree-view.nzDataSource.description",
        "type": "string",
        "typeRaw": "[DataSource](https://material.angular.io/cdk/tree/overview#data-source)&lt;T&gt; | Observable<T[]> | T[]",
        "default": ""
      },
      {
        "name": "nzDirectoryTree",
        "inputType": 0,
        "description": "nz-tree-view.nzDirectoryTree.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBlockNode",
        "inputType": 0,
        "description": "nz-tree-view.nzBlockNode.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-tree-view.title",
    "description": "nz-tree-view.description",
    "whenToUse": "nz-tree-view.whenToUse",
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view"
  },
  {
    "type": "component",
    "selector": "nz-tree-virtual-scroll-view",
    "types": {},
    "properties": [
      {
        "name": "nzTreeControl",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzTreeControl.description",
        "type": "string",
        "typeRaw": "[TreeControl](https://material.angular.io/cdk/tree/api#TreeControl)",
        "default": ""
      },
      {
        "name": "nzDataSource",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzDataSource.description",
        "type": "string",
        "typeRaw": "[DataSource](https://material.angular.io/cdk/tree/overview#data-source)&lt;T&gt; | Observable<T[]> | T[]",
        "default": ""
      },
      {
        "name": "nzDirectoryTree",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzDirectoryTree.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBlockNode",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzBlockNode.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzItemSize",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzItemSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28`",
        "pureDefault": "28"
      },
      {
        "name": "nzMinBufferPx",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzMinBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28 * 5`",
        "pureDefault": "28 * 5"
      },
      {
        "name": "nzMaxBufferPx",
        "inputType": 0,
        "description": "nz-tree-virtual-scroll-view.nzMaxBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`28 * 10`",
        "pureDefault": "28 * 10"
      }
    ],
    "description": "nz-tree-virtual-scroll-view.description",
    "lib": "ng-zorro-antd",
    "title": "nz-tree-virtual-scroll-view.title",
    "whenToUse": "nz-tree-virtual-scroll-view.whenToUse",
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view"
  },
  {
    "type": "directive",
    "selector": "nzTreeNodeDef",
    "types": {},
    "properties": [
      {
        "name": "nzTreeNodeDefWhen",
        "inputType": 0,
        "description": "nzTreeNodeDef.nzTreeNodeDefWhen.description",
        "type": "function",
        "typeRaw": "`(index: number, nodeData: T) => boolean`",
        "default": ""
      }
    ],
    "description": "nzTreeNodeDef.description",
    "lib": "ng-zorro-antd",
    "title": "nzTreeNodeDef.title",
    "whenToUse": "nzTreeNodeDef.whenToUse",
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view"
  },
  {
    "type": "component",
    "selector": "nz-tree-node",
    "types": {},
    "properties": [
      {
        "name": "nzTreeNodeToggleRecursive",
        "inputType": 0,
        "description": "nz-tree-node.nzTreeNodeToggleRecursive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "description": "nz-tree-node.description",
    "lib": "ng-zorro-antd",
    "title": "nz-tree-node.title",
    "whenToUse": "nz-tree-node.whenToUse",
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view"
  },
  {
    "type": "directive",
    "selector": "nzTreeNodePadding",
    "types": {},
    "properties": [
      {
        "name": "nzTreeNodeToggleRecursive",
        "inputType": 0,
        "description": "nzTreeNodePadding.nzTreeNodeToggleRecursive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "description": "nzTreeNodePadding.description",
    "lib": "ng-zorro-antd",
    "title": "nzTreeNodePadding.title",
    "whenToUse": "nzTreeNodePadding.whenToUse",
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view"
  },
  {
    "type": "component",
    "selector": "nzTreeNodeIndentLine",
    "types": {},
    "properties": [
      {
        "name": "nzTreeNodeToggleRecursive",
        "inputType": 0,
        "description": "nzTreeNodeIndentLine.nzTreeNodeToggleRecursive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "description": "nzTreeNodeIndentLine.description",
    "lib": "ng-zorro-antd",
    "title": "nzTreeNodeIndentLine.title",
    "whenToUse": "nzTreeNodeIndentLine.whenToUse",
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view"
  },
  {
    "type": "component",
    "selector": "nz-tree-node-toggle",
    "types": {},
    "properties": [
      {
        "name": "nzTreeNodeToggleRecursive",
        "inputType": 0,
        "description": "nz-tree-node-toggle.nzTreeNodeToggleRecursive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "description": "nz-tree-node-toggle.description",
    "lib": "ng-zorro-antd",
    "title": "nz-tree-node-toggle.title",
    "whenToUse": "nz-tree-node-toggle.whenToUse",
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view"
  },
  {
    "type": "component",
    "selector": "nz-tree-node-option",
    "types": {},
    "properties": [
      {
        "name": "nzSelected",
        "inputType": 0,
        "description": "nz-tree-node-option.nzSelected.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-tree-node-option.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-tree-node-option.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      }
    ],
    "description": "nz-tree-node-option.description",
    "lib": "ng-zorro-antd",
    "title": "nz-tree-node-option.title",
    "whenToUse": "nz-tree-node-option.whenToUse",
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view"
  },
  {
    "type": "component",
    "selector": "nz-tree-node-checkbox",
    "types": {},
    "properties": [
      {
        "name": "nzChecked",
        "inputType": 0,
        "description": "nz-tree-node-checkbox.nzChecked.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-tree-node-checkbox.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzIndeterminate",
        "inputType": 0,
        "description": "nz-tree-node-checkbox.nzIndeterminate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzClick",
        "inputType": 1,
        "description": "nz-tree-node-checkbox.nzClick.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<MouseEvent>`",
        "default": ""
      }
    ],
    "description": "nz-tree-node-checkbox.description",
    "lib": "ng-zorro-antd",
    "title": "nz-tree-node-checkbox.title",
    "whenToUse": "nz-tree-node-checkbox.whenToUse",
    "doc": "/components/tree-view/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/tree-view"
  },
  {
    "type": "directive",
    "selector": "nz-typography",
    "types": {},
    "properties": [
      {
        "name": "nzContent",
        "inputType": 0,
        "description": "nz-typography.nzContent.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzCopyable",
        "inputType": 0,
        "description": "nz-typography.nzCopyable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzEditable",
        "inputType": 0,
        "description": "nz-typography.nzEditable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzCopyIcons",
        "inputType": 0,
        "description": "nz-typography.nzCopyIcons.description",
        "type": "string",
        "typeRaw": "`[string | TemplateRef<void>, string | TemplateRef<void>]`",
        "default": "`['copy', 'check']`",
        "pureDefault": "['copy', 'check']"
      },
      {
        "name": "nzCopyTooltips",
        "inputType": 0,
        "description": "nz-typography.nzCopyTooltips.description",
        "type": "string",
        "typeRaw": "`null | [string | TemplateRef<void>, string | TemplateRef<void>]`",
        "default": ""
      },
      {
        "name": "nzEditIcon",
        "inputType": 0,
        "description": "nz-typography.nzEditIcon.description",
        "type": "string",
        "typeRaw": "`string | TemplateRef<void>`",
        "default": "`'edit'`",
        "pureDefault": "edit"
      },
      {
        "name": "nzEditTooltip",
        "inputType": 0,
        "description": "nz-typography.nzEditTooltip.description",
        "type": "string",
        "typeRaw": "`null | string | TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "nzEllipsis",
        "inputType": 0,
        "description": "nz-typography.nzEllipsis.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzSuffix",
        "inputType": 0,
        "description": "nz-typography.nzSuffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzCopyText",
        "inputType": 0,
        "description": "nz-typography.nzCopyText.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-typography.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzExpandable",
        "inputType": 0,
        "description": "nz-typography.nzExpandable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzEllipsisRows",
        "inputType": 0,
        "description": "nz-typography.nzEllipsisRows.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "nzType",
        "inputType": 0,
        "description": "nz-typography.nzType.description",
        "type": "Enum",
        "typeRaw": "`'secondary' | 'warning' | 'danger' | 'success'`",
        "default": "",
        "typeDefinition": [
          "secondary",
          "warning",
          "danger",
          "success"
        ]
      },
      {
        "name": "nzContentChange",
        "inputType": 1,
        "description": "nz-typography.nzContentChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "nzExpandChange",
        "inputType": 1,
        "description": "nz-typography.nzExpandChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<void>`",
        "default": ""
      },
      {
        "name": "nzOnEllipsis",
        "inputType": 1,
        "description": "nz-typography.nzOnEllipsis.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-typography.title",
    "description": "nz-typography.description",
    "whenToUse": "nz-typography.whenToUse",
    "doc": "/components/typography/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/typography"
  },
  {
    "type": "component",
    "selector": "nz-upload",
    "types": {},
    "properties": [
      {
        "name": "nzAccept",
        "inputType": 0,
        "description": "nz-upload.nzAccept.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzAction",
        "inputType": 0,
        "description": "nz-upload.nzAction.description",
        "type": "string",
        "typeRaw": "`string | ((file: NzUploadFile) => string | Observable<string>)`",
        "default": ""
      },
      {
        "name": "nzDirectory",
        "inputType": 0,
        "description": "nz-upload.nzDirectory.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzBeforeUpload",
        "inputType": 0,
        "description": "nz-upload.nzBeforeUpload.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile, fileList: NzUploadFile[]) => boolean | Observable<boolean>`",
        "default": ""
      },
      {
        "name": "nzCustomRequest",
        "inputType": 0,
        "description": "nz-upload.nzCustomRequest.description",
        "type": "function",
        "typeRaw": "`(item) => Subscription`",
        "default": ""
      },
      {
        "name": "nzData",
        "inputType": 0,
        "description": "nz-upload.nzData.description",
        "type": "object",
        "typeRaw": "`Object | ((file: NzUploadFile) => Object | Observable<{}>)`",
        "default": ""
      },
      {
        "name": "nzDisabled",
        "inputType": 0,
        "description": "nz-upload.nzDisabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "nzFileList",
        "inputType": 0,
        "description": "nz-upload.nzFileList.description",
        "type": "Array",
        "typeRaw": "`NzUploadFile[]`",
        "default": ""
      },
      {
        "name": "nzLimit",
        "inputType": 0,
        "description": "nz-upload.nzLimit.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzSize",
        "inputType": 0,
        "description": "nz-upload.nzSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "nzFileType",
        "inputType": 0,
        "description": "nz-upload.nzFileType.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "nzFilter",
        "inputType": 0,
        "description": "nz-upload.nzFilter.description",
        "type": "Array",
        "typeRaw": "`UploadFilter[]`",
        "default": ""
      },
      {
        "name": "nzHeaders",
        "inputType": 0,
        "description": "nz-upload.nzHeaders.description",
        "type": "object",
        "typeRaw": "`Object | ((file: NzUploadFile) => Object | Observable<{}>)`",
        "default": ""
      },
      {
        "name": "nzListType",
        "inputType": 0,
        "description": "nz-upload.nzListType.description",
        "type": "Enum",
        "typeRaw": "`'text' | 'picture' | 'picture-card'`",
        "default": "`'text'`",
        "typeDefinition": [
          "text",
          "picture",
          "picture-card"
        ],
        "pureDefault": "text"
      },
      {
        "name": "nzMultiple",
        "inputType": 0,
        "description": "nz-upload.nzMultiple.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzName",
        "inputType": 0,
        "description": "nz-upload.nzName.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'file'`",
        "pureDefault": "file"
      },
      {
        "name": "nzShowUploadList",
        "inputType": 0,
        "description": "nz-upload.nzShowUploadList.description",
        "type": "boolean",
        "typeRaw": "`boolean | { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzShowButton",
        "inputType": 0,
        "description": "nz-upload.nzShowButton.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzWithCredentials",
        "inputType": 0,
        "description": "nz-upload.nzWithCredentials.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "nzOpenFileDialogOnClick",
        "inputType": 0,
        "description": "nz-upload.nzOpenFileDialogOnClick.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "nzPreview",
        "inputType": 0,
        "description": "nz-upload.nzPreview.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile) => void`",
        "default": ""
      },
      {
        "name": "nzPreviewFile",
        "inputType": 0,
        "description": "nz-upload.nzPreviewFile.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile) => Observable<dataURL: string>`",
        "default": ""
      },
      {
        "name": "nzPreviewIsImage",
        "inputType": 0,
        "description": "nz-upload.nzPreviewIsImage.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile) => boolean`",
        "default": ""
      },
      {
        "name": "nzRemove",
        "inputType": 0,
        "description": "nz-upload.nzRemove.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile) => boolean | Observable<boolean>`",
        "default": ""
      },
      {
        "name": "nzChange",
        "inputType": 1,
        "description": "nz-upload.nzChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NzUploadChangeParam>`",
        "default": ""
      },
      {
        "name": "nzDownload",
        "inputType": 0,
        "description": "nz-upload.nzDownload.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile) => void`",
        "default": "Jump to new TAB",
        "pureDefault": "Jump to new TAB"
      },
      {
        "name": "nzTransformFile",
        "inputType": 0,
        "description": "nz-upload.nzTransformFile.description",
        "type": "function",
        "typeRaw": "`(file: NzUploadFile) => NzUploadTransformFileType`",
        "default": ""
      },
      {
        "name": "nzIconRender",
        "inputType": 0,
        "description": "nz-upload.nzIconRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzUploadFile }>`",
        "default": ""
      },
      {
        "name": "nzFileListRender",
        "inputType": 0,
        "description": "nz-upload.nzFileListRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: NzUploadFile[] }>`",
        "default": ""
      }
    ],
    "lib": "ng-zorro-antd",
    "title": "nz-upload.title",
    "description": "nz-upload.description",
    "whenToUse": "nz-upload.whenToUse",
    "doc": "/components/upload/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/upload"
  },
  {
    "type": "directive",
    "selector": "auto-focus",
    "types": {},
    "properties": [
      {
        "name": "enabled",
        "inputType": 0,
        "description": "auto-focus.enabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "auto-focus.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`300`",
        "pureDefault": "300"
      }
    ],
    "lib": "@delon/abc",
    "title": "auto-focus.title",
    "description": "auto-focus.description",
    "whenToUse": "auto-focus.whenToUse",
    "doc": "/components/auto-focus/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/auto-focus"
  },
  {
    "type": "component",
    "selector": "avatar-list",
    "types": {},
    "properties": [
      {
        "name": "size",
        "inputType": 0,
        "description": "avatar-list.size.description",
        "type": "Enum",
        "typeRaw": "`'large','small','mini','default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "large",
          "small",
          "mini",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "maxLength",
        "inputType": 0,
        "description": "avatar-list.maxLength.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "excessItemsStyle",
        "inputType": 0,
        "description": "avatar-list.excessItemsStyle.description",
        "type": "object",
        "typeRaw": "`{ [key: string]: string }`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "avatar-list.title",
    "description": "avatar-list.description",
    "whenToUse": "avatar-list.whenToUse",
    "doc": "/components/avatar-list/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/avatar-list"
  },
  {
    "type": "component",
    "selector": "avatar-list-item",
    "types": {},
    "properties": [
      {
        "name": "tips",
        "inputType": 0,
        "description": "avatar-list-item.tips.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "src",
        "inputType": 0,
        "description": "avatar-list-item.src.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "text",
        "inputType": 0,
        "description": "avatar-list-item.text.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "icon",
        "inputType": 0,
        "description": "avatar-list-item.icon.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "avatar-list-item.title",
    "description": "avatar-list-item.description",
    "whenToUse": "avatar-list-item.whenToUse",
    "doc": "/components/avatar-list/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/avatar-list"
  },
  {
    "type": "component",
    "selector": "count-down",
    "types": {},
    "properties": [
      {
        "name": "target",
        "inputType": 0,
        "description": "count-down.target.description",
        "type": "number",
        "typeRaw": "`number",
        "default": "Date`",
        "pureDefault": "Date`"
      },
      {
        "name": "config",
        "inputType": 0,
        "description": "count-down.config.description",
        "type": "object",
        "typeRaw": "`CountdownConfig`",
        "default": ""
      },
      {
        "name": "event",
        "inputType": 1,
        "description": "count-down.event.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<CountdownEvent>`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "count-down.title",
    "description": "count-down.description",
    "whenToUse": "count-down.whenToUse",
    "doc": "/components/count-down/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/count-down"
  },
  {
    "type": "directive",
    "selector": "extend",
    "types": {},
    "properties": [
      {
        "name": "ngModelEnd",
        "inputType": 2,
        "description": "extend.ngModelEnd.description",
        "type": "object",
        "typeRaw": "`Date`",
        "default": ""
      },
      {
        "name": "shortcut",
        "inputType": 0,
        "description": "extend.shortcut.description",
        "type": "boolean",
        "typeRaw": "`boolean",
        "default": "DateRangePickerShortcut`",
        "pureDefault": "DateRangePickerShortcut`"
      }
    ],
    "description": "extend.description",
    "lib": "@delon/abc",
    "title": "extend.title",
    "whenToUse": "extend.whenToUse",
    "doc": "/components/date-picker/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/date-picker"
  },
  {
    "type": "directive",
    "selector": "down-file",
    "types": {},
    "properties": [
      {
        "name": "http-data",
        "inputType": 0,
        "description": "down-file.http-data.description",
        "type": "object",
        "typeRaw": "`{}`",
        "default": ""
      },
      {
        "name": "http-body",
        "inputType": 0,
        "description": "down-file.http-body.description",
        "type": "object",
        "typeRaw": "`{}`",
        "default": ""
      },
      {
        "name": "http-method",
        "inputType": 0,
        "description": "down-file.http-method.description",
        "type": "object",
        "typeRaw": "`'POST','GET','HEAD','PUT','PATCH','DELETE'`",
        "default": "`'GET'`",
        "pureDefault": "GET"
      },
      {
        "name": "http-url",
        "inputType": 0,
        "description": "down-file.http-url.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "file-name",
        "inputType": 0,
        "description": "down-file.file-name.description",
        "type": "string",
        "typeRaw": "`string, (rep: HttpResponse<Blob>) => string`",
        "default": ""
      },
      {
        "name": "pre",
        "inputType": 0,
        "description": "down-file.pre.description",
        "type": "function",
        "typeRaw": "`(ev: MouseEvent) => Promise<boolean>`",
        "default": ""
      },
      {
        "name": "success",
        "inputType": 1,
        "description": "down-file.success.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<HttpResponse<Blob>>`",
        "default": ""
      },
      {
        "name": "error",
        "inputType": 1,
        "description": "down-file.error.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<any>`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "down-file.title",
    "description": "down-file.description",
    "whenToUse": "down-file.whenToUse",
    "doc": "/components/down-file/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/down-file"
  },
  {
    "type": "component",
    "selector": "ellipsis",
    "types": {},
    "properties": [
      {
        "name": "tooltip",
        "inputType": 0,
        "description": "ellipsis.tooltip.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "length",
        "inputType": 0,
        "description": "ellipsis.length.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "lines",
        "inputType": 0,
        "description": "ellipsis.lines.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "fullWidthRecognition",
        "inputType": 0,
        "description": "ellipsis.fullWidthRecognition.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "tail",
        "inputType": 0,
        "description": "ellipsis.tail.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`'...'`",
        "pureDefault": "..."
      }
    ],
    "lib": "@delon/abc",
    "title": "ellipsis.title",
    "description": "ellipsis.description",
    "whenToUse": "ellipsis.whenToUse",
    "doc": "/components/ellipsis/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/ellipsis"
  },
  {
    "type": "component",
    "selector": "error-collect",
    "types": {},
    "properties": [
      {
        "name": "freq",
        "inputType": 0,
        "description": "error-collect.freq.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`500`",
        "pureDefault": "500"
      },
      {
        "name": "offsetTop",
        "inputType": 0,
        "description": "error-collect.offsetTop.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`145`",
        "pureDefault": "145"
      }
    ],
    "lib": "@delon/abc",
    "title": "error-collect.title",
    "description": "error-collect.description",
    "whenToUse": "error-collect.whenToUse",
    "doc": "/components/error-collect/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/error-collect"
  },
  {
    "type": "directive",
    "selector": "error-collect",
    "types": {},
    "properties": [
      {
        "name": "freq",
        "inputType": 0,
        "description": "error-collect.freq.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`500`",
        "pureDefault": "500"
      },
      {
        "name": "offsetTop",
        "inputType": 0,
        "description": "error-collect.offsetTop.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`145`",
        "pureDefault": "145"
      }
    ],
    "lib": "@delon/abc",
    "title": "error-collect.title",
    "description": "error-collect.description",
    "whenToUse": "error-collect.whenToUse",
    "doc": "/components/error-collect/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/error-collect"
  },
  {
    "type": "component",
    "selector": "exception",
    "types": {},
    "properties": [
      {
        "name": "type",
        "inputType": 0,
        "description": "exception.type.description",
        "type": "Enum",
        "typeRaw": "`'403','404','500'`",
        "default": "",
        "typeDefinition": [
          "403",
          "404",
          "500"
        ]
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "exception.title.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "desc",
        "inputType": 0,
        "description": "exception.desc.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "img",
        "inputType": 0,
        "description": "exception.img.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "backRouterLink",
        "inputType": 0,
        "description": "exception.backRouterLink.description",
        "type": "string",
        "typeRaw": "`string, any[]`",
        "default": "`/`",
        "pureDefault": "/"
      },
      {
        "name": "ng-content",
        "inputType": 0,
        "description": "exception.ng-content.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "exception.title",
    "description": "exception.description",
    "whenToUse": "exception.whenToUse",
    "doc": "/components/exception/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/exception"
  },
  {
    "type": "component",
    "selector": "footer-toolbar",
    "types": {},
    "properties": [
      {
        "name": "ng-content",
        "inputType": 0,
        "description": "footer-toolbar.ng-content.description",
        "type": "string",
        "typeRaw": "`-`",
        "default": ""
      },
      {
        "name": "errorCollect",
        "inputType": 0,
        "description": "footer-toolbar.errorCollect.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "extra",
        "inputType": 0,
        "description": "footer-toolbar.extra.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "footer-toolbar.title",
    "description": "footer-toolbar.description",
    "whenToUse": "footer-toolbar.whenToUse",
    "doc": "/components/footer-toolbar/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/footer-toolbar"
  },
  {
    "type": "component",
    "selector": "full-content",
    "types": {},
    "properties": [
      {
        "name": "fullscreen",
        "inputType": 2,
        "description": "full-content.fullscreen.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "hideTitle",
        "inputType": 0,
        "description": "full-content.hideTitle.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "full-content.padding.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`24`",
        "pureDefault": "24"
      }
    ],
    "lib": "@delon/abc",
    "title": "full-content.title",
    "description": "full-content.description",
    "whenToUse": "full-content.whenToUse",
    "doc": "/components/full-content/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/full-content"
  },
  {
    "type": "directive",
    "selector": "full-toggle",
    "types": {},
    "properties": [],
    "description": "full-toggle.description",
    "lib": "@delon/abc",
    "title": "full-toggle.title",
    "whenToUse": "full-toggle.whenToUse",
    "doc": "/components/full-content/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/full-content"
  },
  {
    "type": "component",
    "selector": "global-footer",
    "types": {
      "GlobalFooterLink": [
        {
          "name": "title",
          "inputType": 0,
          "description": "global-footer.title.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "href",
          "inputType": 0,
          "description": "global-footer.href.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "blankTarget",
          "inputType": 0,
          "description": "global-footer.blankTarget.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        }
      ]
    },
    "properties": [
      {
        "name": "links",
        "inputType": 0,
        "description": "global-footer.links.description",
        "type": "object",
        "typeRaw": "`GlobalFooterLink`",
        "default": "",
        "complexType": "GlobalFooterLink"
      },
      {
        "name": "copyright",
        "inputType": 0,
        "description": "global-footer.copyright.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "global-footer.title",
    "description": "global-footer.description",
    "whenToUse": "global-footer.whenToUse",
    "doc": "/components/global-footer/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/global-footer"
  },
  {
    "type": "component",
    "selector": "global-footer-item",
    "types": {},
    "properties": [
      {
        "name": "ng-content",
        "inputType": 0,
        "description": "global-footer-item.ng-content.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "href",
        "inputType": 0,
        "description": "global-footer-item.href.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "blankTarget",
        "inputType": 0,
        "description": "global-footer-item.blankTarget.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "@delon/abc",
    "title": "global-footer-item.title",
    "description": "global-footer-item.description",
    "whenToUse": "global-footer-item.whenToUse",
    "doc": "/components/global-footer/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/global-footer"
  },
  {
    "type": "directive",
    "selector": "let",
    "types": {},
    "properties": [
      {
        "name": "let",
        "inputType": 0,
        "description": "let.let.description",
        "type": "object",
        "typeRaw": "`T`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "let.title",
    "description": "let.description",
    "whenToUse": "let.whenToUse",
    "doc": "/components/let/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/let"
  },
  {
    "type": "component",
    "selector": "media",
    "types": {},
    "properties": [
      {
        "name": "type",
        "inputType": 0,
        "description": "media.type.description",
        "type": "string",
        "typeRaw": "`audio, video`",
        "default": "`video`",
        "pureDefault": "video"
      },
      {
        "name": "source",
        "inputType": 0,
        "description": "media.source.description",
        "type": "string",
        "typeRaw": "`string, PlyrMediaSource`",
        "default": ""
      },
      {
        "name": "options",
        "inputType": 0,
        "description": "media.options.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "media.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "media.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Plyr>`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "media.title",
    "description": "media.description",
    "whenToUse": "media.whenToUse",
    "doc": "/components/media/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/media"
  },
  {
    "type": "component",
    "selector": "notice-icon",
    "types": {},
    "properties": [
      {
        "name": "data",
        "inputType": 0,
        "description": "notice-icon.data.description",
        "type": "Array",
        "typeRaw": "`NoticeItem[]`",
        "default": ""
      },
      {
        "name": "count",
        "inputType": 0,
        "description": "notice-icon.count.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "loading",
        "inputType": 0,
        "description": "notice-icon.loading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "centered",
        "inputType": 0,
        "description": "notice-icon.centered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "select",
        "inputType": 1,
        "description": "notice-icon.select.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<NoticeIconSelect>`",
        "default": ""
      },
      {
        "name": "clear",
        "inputType": 1,
        "description": "notice-icon.clear.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      },
      {
        "name": "popoverVisible",
        "inputType": 0,
        "description": "notice-icon.popoverVisible.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "popoverVisibleChange",
        "inputType": 1,
        "description": "notice-icon.popoverVisibleChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      },
      {
        "name": "btnClass",
        "inputType": 0,
        "description": "notice-icon.btnClass.description",
        "type": "string",
        "typeRaw": "`ngClass`",
        "default": ""
      },
      {
        "name": "btnIconClass",
        "inputType": 0,
        "description": "notice-icon.btnIconClass.description",
        "type": "string",
        "typeRaw": "`ngClass`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "notice-icon.title",
    "description": "notice-icon.description",
    "whenToUse": "notice-icon.whenToUse",
    "doc": "/components/notice-icon/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/notice-icon"
  },
  {
    "type": "directive",
    "selector": "observeSize",
    "types": {},
    "properties": [
      {
        "name": "observeSize",
        "inputType": 1,
        "description": "observeSize.observeSize.description",
        "type": "Array",
        "typeRaw": "`MutationRecord[]`",
        "default": ""
      }
    ],
    "description": "observeSize.description",
    "lib": "@delon/abc",
    "title": "observeSize.title",
    "whenToUse": "observeSize.whenToUse",
    "doc": "/components/observers/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/observers"
  },
  {
    "type": "component",
    "selector": "page-header",
    "types": {},
    "properties": [
      {
        "name": "title",
        "inputType": 0,
        "description": "page-header.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "autoTitle",
        "inputType": 0,
        "description": "page-header.autoTitle.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "syncTitle",
        "inputType": 0,
        "description": "page-header.syncTitle.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "home",
        "inputType": 0,
        "description": "page-header.home.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`首页`",
        "pureDefault": "首页"
      },
      {
        "name": "homeLink",
        "inputType": 0,
        "description": "page-header.homeLink.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`/`",
        "pureDefault": "/"
      },
      {
        "name": "homeI18n",
        "inputType": 0,
        "description": "page-header.homeI18n.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "autoBreadcrumb",
        "inputType": 0,
        "description": "page-header.autoBreadcrumb.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "recursiveBreadcrumb",
        "inputType": 0,
        "description": "page-header.recursiveBreadcrumb.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "loading",
        "inputType": 0,
        "description": "page-header.loading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "wide",
        "inputType": 0,
        "description": "page-header.wide.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "fixed",
        "inputType": 0,
        "description": "page-header.fixed.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "fixedOffsetTop",
        "inputType": 0,
        "description": "page-header.fixedOffsetTop.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`64`",
        "pureDefault": "64"
      },
      {
        "name": "breadcrumb",
        "inputType": 0,
        "description": "page-header.breadcrumb.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "logo",
        "inputType": 0,
        "description": "page-header.logo.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "action",
        "inputType": 0,
        "description": "page-header.action.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "content",
        "inputType": 0,
        "description": "page-header.content.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "extra",
        "inputType": 0,
        "description": "page-header.extra.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "tab",
        "inputType": 0,
        "description": "page-header.tab.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "page-header.title",
    "description": "page-header.description",
    "whenToUse": "page-header.whenToUse",
    "doc": "/components/page-header/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/page-header"
  },
  {
    "type": "component",
    "selector": "pdf",
    "types": {},
    "properties": [
      {
        "name": "src",
        "inputType": 0,
        "description": "pdf.src.description",
        "type": "string",
        "typeRaw": "`string, object, UInt8Array`",
        "default": ""
      },
      {
        "name": "pi",
        "inputType": 0,
        "description": "pdf.pi.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "showAll",
        "inputType": 0,
        "description": "pdf.showAll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "renderText",
        "inputType": 0,
        "description": "pdf.renderText.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "textLayerMode",
        "inputType": 0,
        "description": "pdf.textLayerMode.description",
        "type": "object",
        "typeRaw": "`PdfTextLayerMode`",
        "default": "`ENABLE`",
        "pureDefault": "ENABLE"
      },
      {
        "name": "showBorders",
        "inputType": 0,
        "description": "pdf.showBorders.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "stickToPage",
        "inputType": 0,
        "description": "pdf.stickToPage.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "originalSize",
        "inputType": 0,
        "description": "pdf.originalSize.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "fitToPage",
        "inputType": 0,
        "description": "pdf.fitToPage.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "zoom",
        "inputType": 0,
        "description": "pdf.zoom.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "zoomScale",
        "inputType": 0,
        "description": "pdf.zoomScale.description",
        "type": "object",
        "typeRaw": "`PdfZoomScale`",
        "default": "`page-width`",
        "pureDefault": "page-width"
      },
      {
        "name": "rotation",
        "inputType": 0,
        "description": "pdf.rotation.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "autoReSize",
        "inputType": 0,
        "description": "pdf.autoReSize.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "externalLinkTarget",
        "inputType": 0,
        "description": "pdf.externalLinkTarget.description",
        "type": "object",
        "typeRaw": "`PdfExternalLinkTarget`",
        "default": "`BLANK`",
        "pureDefault": "BLANK"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "pdf.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "change",
        "inputType": 1,
        "description": "pdf.change.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<PdfChangeEvent>`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "pdf.title",
    "description": "pdf.description",
    "whenToUse": "pdf.whenToUse",
    "doc": "/components/pdf/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/pdf"
  },
  {
    "type": "component",
    "selector": "qr",
    "types": {},
    "properties": [
      {
        "name": "value",
        "inputType": 0,
        "description": "qr.value.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "() => string`",
        "pureDefault": "() => string`"
      },
      {
        "name": "background",
        "inputType": 0,
        "description": "qr.background.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`white`",
        "pureDefault": "white"
      },
      {
        "name": "backgroundAlpha",
        "inputType": 0,
        "description": "qr.backgroundAlpha.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "foreground",
        "inputType": 0,
        "description": "qr.foreground.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`white`",
        "pureDefault": "white"
      },
      {
        "name": "foregroundAlpha",
        "inputType": 0,
        "description": "qr.foregroundAlpha.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "level",
        "inputType": 0,
        "description": "qr.level.description",
        "type": "object",
        "typeRaw": "`'L','M','Q','H'`",
        "default": "`'L'`",
        "pureDefault": "L"
      },
      {
        "name": "mime",
        "inputType": 0,
        "description": "qr.mime.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`image/png`",
        "pureDefault": "image/png"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "qr.padding.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`10`",
        "pureDefault": "10"
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "qr.size.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`220`",
        "pureDefault": "220"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "qr.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "change",
        "inputType": 1,
        "description": "qr.change.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<string>`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "qr.title",
    "description": "qr.description",
    "whenToUse": "qr.whenToUse",
    "doc": "/components/qr/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/qr"
  },
  {
    "type": "component",
    "selector": "quick-menu",
    "types": {},
    "properties": [
      {
        "name": "icon",
        "inputType": 0,
        "description": "quick-menu.icon.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": "`question-circle`",
        "pureDefault": "question-circle"
      },
      {
        "name": "top",
        "inputType": 0,
        "description": "quick-menu.top.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`120`",
        "pureDefault": "120"
      },
      {
        "name": "width",
        "inputType": 0,
        "description": "quick-menu.width.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "bgColor",
        "inputType": 0,
        "description": "quick-menu.bgColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "borderColor",
        "inputType": 0,
        "description": "quick-menu.borderColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "expand",
        "inputType": 2,
        "description": "quick-menu.expand.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "expandChange",
        "inputType": 1,
        "description": "quick-menu.expandChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "quick-menu.title",
    "description": "quick-menu.description",
    "whenToUse": "quick-menu.whenToUse",
    "doc": "/components/quick-menu/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/quick-menu"
  },
  {
    "type": "component",
    "selector": "result",
    "types": {},
    "properties": [
      {
        "name": "type",
        "inputType": 0,
        "description": "result.type.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "result.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "description",
        "inputType": 0,
        "description": "result.description.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "extra",
        "inputType": 0,
        "description": "result.extra.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "ng-content",
        "inputType": 0,
        "description": "result.ng-content.description",
        "type": "string",
        "typeRaw": "`ng-content`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "result.title",
    "description": "result.description",
    "whenToUse": "result.whenToUse",
    "doc": "/components/result/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/result"
  },
  {
    "type": "component",
    "selector": "reuse-tab",
    "types": {
      "ReuseContextI18n": [
        {
          "name": "close",
          "inputType": 0,
          "description": "reuse-tab.close.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "closeOther",
          "inputType": 0,
          "description": "reuse-tab.closeOther.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "closeRight",
          "inputType": 0,
          "description": "reuse-tab.closeRight.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "clear",
          "inputType": 0,
          "description": "reuse-tab.clear.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        }
      ]
    },
    "properties": [
      {
        "name": "i18n",
        "inputType": 0,
        "description": "reuse-tab.i18n.description",
        "type": "object",
        "typeRaw": "`ReuseContextI18n`",
        "default": "",
        "complexType": "ReuseContextI18n"
      },
      {
        "name": "mode",
        "inputType": 0,
        "description": "reuse-tab.mode.description",
        "type": "object",
        "typeRaw": "`ReuseTabMatchMode`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "debug",
        "inputType": 0,
        "description": "reuse-tab.debug.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "max",
        "inputType": 0,
        "description": "reuse-tab.max.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`10`",
        "pureDefault": "10"
      },
      {
        "name": "keepingScroll",
        "inputType": 0,
        "description": "reuse-tab.keepingScroll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "keepingScrollContainer",
        "inputType": 0,
        "description": "reuse-tab.keepingScrollContainer.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "Element`",
        "pureDefault": "Element`"
      },
      {
        "name": "excludes",
        "inputType": 0,
        "description": "reuse-tab.excludes.description",
        "type": "Array",
        "typeRaw": "`RegExp[]`",
        "default": ""
      },
      {
        "name": "allowClose",
        "inputType": 0,
        "description": "reuse-tab.allowClose.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "customContextMenu",
        "inputType": 0,
        "description": "reuse-tab.customContextMenu.description",
        "type": "Array",
        "typeRaw": "`ReuseCustomContextMenu[]`",
        "default": ""
      },
      {
        "name": "tabBarExtraContent",
        "inputType": 0,
        "description": "reuse-tab.tabBarExtraContent.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "tabBarStyle",
        "inputType": 0,
        "description": "reuse-tab.tabBarStyle.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "tabBarGutter",
        "inputType": 0,
        "description": "reuse-tab.tabBarGutter.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "tabType",
        "inputType": 0,
        "description": "reuse-tab.tabType.description",
        "type": "string",
        "typeRaw": "`line, card`",
        "default": "`line`",
        "pureDefault": "line"
      },
      {
        "name": "tabMaxWidth",
        "inputType": 0,
        "description": "reuse-tab.tabMaxWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "routeParamMatchMode",
        "inputType": 0,
        "description": "reuse-tab.routeParamMatchMode.description",
        "type": "string",
        "typeRaw": "`strict,loose`",
        "default": "`strict`",
        "pureDefault": "strict"
      },
      {
        "name": "disabled",
        "inputType": 0,
        "description": "reuse-tab.disabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "titleRender",
        "inputType": 0,
        "description": "reuse-tab.titleRender.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<{ $implicit: ReuseItem }>`",
        "default": ""
      },
      {
        "name": "storageState",
        "inputType": 0,
        "description": "reuse-tab.storageState.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "canClose",
        "inputType": 0,
        "description": "reuse-tab.canClose.description",
        "type": "function",
        "typeRaw": "`(options: { item: ReuseItem; includeNonCloseable: boolean }) => Observable<boolean>`",
        "default": ""
      },
      {
        "name": "close",
        "inputType": 1,
        "description": "reuse-tab.close.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter`",
        "default": ""
      },
      {
        "name": "change",
        "inputType": 1,
        "description": "reuse-tab.change.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "reuse-tab.title",
    "description": "reuse-tab.description",
    "whenToUse": "reuse-tab.whenToUse",
    "doc": "/components/reuse-tab/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/reuse-tab"
  },
  {
    "type": "component",
    "selector": "se-container",
    "types": {},
    "properties": [
      {
        "name": "gutter",
        "inputType": 0,
        "description": "se-container.gutter.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "se-container",
        "inputType": 0,
        "description": "se-container.se-container.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "se-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "labelWidth",
        "inputType": 0,
        "description": "se-container.labelWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`150`",
        "pureDefault": "150"
      },
      {
        "name": "nzLayout",
        "inputType": 0,
        "description": "se-container.nzLayout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal','vertical','inline'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical",
          "inline"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "se-container.size.description",
        "type": "Enum",
        "typeRaw": "`'default','compact'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "compact"
        ],
        "pureDefault": "default"
      },
      {
        "name": "firstVisual",
        "inputType": 0,
        "description": "se-container.firstVisual.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "ingoreDirty",
        "inputType": 0,
        "description": "se-container.ingoreDirty.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "line",
        "inputType": 0,
        "description": "se-container.line.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "se-container.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "errors",
        "inputType": 0,
        "description": "se-container.errors.description",
        "type": "Array",
        "typeRaw": "`SEErrorRefresh[]`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "se-container.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "@delon/abc",
    "title": "se-container.title",
    "description": "se-container.description",
    "whenToUse": "se-container.whenToUse",
    "doc": "/components/se/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/se"
  },
  {
    "type": "directive",
    "selector": "se-container",
    "types": {},
    "properties": [
      {
        "name": "gutter",
        "inputType": 0,
        "description": "se-container.gutter.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "se-container",
        "inputType": 0,
        "description": "se-container.se-container.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "se-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "labelWidth",
        "inputType": 0,
        "description": "se-container.labelWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`150`",
        "pureDefault": "150"
      },
      {
        "name": "nzLayout",
        "inputType": 0,
        "description": "se-container.nzLayout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal','vertical','inline'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical",
          "inline"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "se-container.size.description",
        "type": "Enum",
        "typeRaw": "`'default','compact'`",
        "default": "`'default'`",
        "typeDefinition": [
          "default",
          "compact"
        ],
        "pureDefault": "default"
      },
      {
        "name": "firstVisual",
        "inputType": 0,
        "description": "se-container.firstVisual.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "ingoreDirty",
        "inputType": 0,
        "description": "se-container.ingoreDirty.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "line",
        "inputType": 0,
        "description": "se-container.line.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "se-container.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "errors",
        "inputType": 0,
        "description": "se-container.errors.description",
        "type": "Array",
        "typeRaw": "`SEErrorRefresh[]`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "se-container.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "@delon/abc",
    "title": "se-container.title",
    "description": "se-container.description",
    "whenToUse": "se-container.whenToUse",
    "doc": "/components/se/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/se"
  },
  {
    "type": "component",
    "selector": "se",
    "types": {},
    "properties": [
      {
        "name": "col",
        "inputType": 0,
        "description": "se.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "label",
        "inputType": 0,
        "description": "se.label.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "labelWidth",
        "inputType": 0,
        "description": "se.labelWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "hideLabel",
        "inputType": 0,
        "description": "se.hideLabel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "optional",
        "inputType": 0,
        "description": "se.optional.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "optionalHelp",
        "inputType": 0,
        "description": "se.optionalHelp.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "optionalHelpColor",
        "inputType": 0,
        "description": "se.optionalHelpColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "error",
        "inputType": 0,
        "description": "se.error.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>, { [key: string]: string, TemplateRef<void> }`",
        "default": ""
      },
      {
        "name": "extra",
        "inputType": 0,
        "description": "se.extra.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "required",
        "inputType": 0,
        "description": "se.required.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "controlClass",
        "inputType": 0,
        "description": "se.controlClass.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "id",
        "inputType": 0,
        "description": "se.id.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "line",
        "inputType": 0,
        "description": "se.line.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "se.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "@delon/abc",
    "title": "se.title",
    "description": "se.description",
    "whenToUse": "se.whenToUse",
    "doc": "/components/se/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/se"
  },
  {
    "type": "component",
    "selector": "se-title",
    "types": {},
    "properties": [],
    "description": "se-title.description",
    "lib": "@delon/abc",
    "title": "se-title.title",
    "whenToUse": "se-title.whenToUse",
    "doc": "/components/se/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/se"
  },
  {
    "type": "directive",
    "selector": "se-title",
    "types": {},
    "properties": [],
    "description": "se-title.description",
    "lib": "@delon/abc",
    "title": "se-title.title",
    "whenToUse": "se-title.whenToUse",
    "doc": "/components/se/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/se"
  },
  {
    "type": "component",
    "selector": "sg-container",
    "types": {},
    "properties": [
      {
        "name": "gutter",
        "inputType": 0,
        "description": "sg-container.gutter.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "sg-container",
        "inputType": 0,
        "description": "sg-container.sg-container.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "sg-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "`2`",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "pureDefault": "2"
      }
    ],
    "lib": "@delon/abc",
    "title": "sg-container.title",
    "description": "sg-container.description",
    "whenToUse": "sg-container.whenToUse",
    "doc": "/components/sg/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sg"
  },
  {
    "type": "directive",
    "selector": "sg-container",
    "types": {},
    "properties": [
      {
        "name": "gutter",
        "inputType": 0,
        "description": "sg-container.gutter.description",
        "type": "Enum",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32",
        "typeDefinition": [
          "16",
          "0",
          "8",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64"
        ]
      },
      {
        "name": "sg-container",
        "inputType": 0,
        "description": "sg-container.sg-container.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "sg-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "`2`",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "pureDefault": "2"
      }
    ],
    "lib": "@delon/abc",
    "title": "sg-container.title",
    "description": "sg-container.description",
    "whenToUse": "sg-container.whenToUse",
    "doc": "/components/sg/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sg"
  },
  {
    "type": "component",
    "selector": "sg",
    "types": {},
    "properties": [
      {
        "name": "col",
        "inputType": 0,
        "description": "sg.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
      }
    ],
    "lib": "@delon/abc",
    "title": "sg.title",
    "description": "sg.description",
    "whenToUse": "sg.whenToUse",
    "doc": "/components/sg/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sg"
  },
  {
    "type": "component",
    "selector": "st",
    "types": {
      "STReq": [
        {
          "name": "type",
          "inputType": 0,
          "description": "st.type.description",
          "type": "string",
          "typeRaw": "`page,skip`",
          "default": "`page`",
          "pureDefault": "page"
        },
        {
          "name": "params",
          "inputType": 0,
          "description": "st.params.description",
          "type": "object",
          "typeRaw": "`any`",
          "default": ""
        },
        {
          "name": "ignoreParamNull",
          "inputType": 0,
          "description": "st.ignoreParamNull.description",
          "type": "object",
          "typeRaw": "`Boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "method",
          "inputType": 0,
          "description": "st.method.description",
          "type": "object",
          "typeRaw": "`'POST','GET','HEAD','PUT','PATCH','DELETE'`",
          "default": "`'GET'`",
          "pureDefault": "GET"
        },
        {
          "name": "body",
          "inputType": 0,
          "description": "st.body.description",
          "type": "object",
          "typeRaw": "`any`",
          "default": ""
        },
        {
          "name": "headers",
          "inputType": 0,
          "description": "st.headers.description",
          "type": "object",
          "typeRaw": "`any`",
          "default": ""
        },
        {
          "name": "reName",
          "inputType": 0,
          "description": "st.reName.description",
          "type": "object",
          "typeRaw": "`STReqReNameType, ((result: any, options: { pi: number; ps: number; total: number }) => { total: number; list: T[] })`",
          "default": "`{ pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }`",
          "pureDefault": "{ pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }"
        },
        {
          "name": "allInBody",
          "inputType": 0,
          "description": "st.allInBody.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "lazyLoad",
          "inputType": 0,
          "description": "st.lazyLoad.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "process",
          "inputType": 0,
          "description": "st.process.description",
          "type": "function",
          "typeRaw": "`(requestOptions: STRequestOptions) => STRequestOptions`",
          "default": ""
        }
      ],
      "STRes": [
        {
          "name": "reName",
          "inputType": 0,
          "description": "st.reName.description",
          "type": "object",
          "typeRaw": "`{total:string;list:string}`",
          "default": ""
        },
        {
          "name": "process",
          "inputType": 0,
          "description": "st.process.description",
          "type": "function",
          "typeRaw": "`(data: STData[], rawData?: any) => STData[]`",
          "default": ""
        }
      ],
      "STPage": [
        {
          "name": "front",
          "inputType": 0,
          "description": "st.front.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        },
        {
          "name": "zeroIndexed",
          "inputType": 0,
          "description": "st.zeroIndexed.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "position",
          "inputType": 0,
          "description": "st.position.description",
          "type": "string",
          "typeRaw": "`top,bottom,both`",
          "default": "`bottom`",
          "pureDefault": "bottom"
        },
        {
          "name": "placement",
          "inputType": 0,
          "description": "st.placement.description",
          "type": "string",
          "typeRaw": "`left,center,right`",
          "default": "`right`",
          "pureDefault": "right"
        },
        {
          "name": "show",
          "inputType": 0,
          "description": "st.show.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        },
        {
          "name": "showSize",
          "inputType": 0,
          "description": "st.showSize.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "pageSizes",
          "inputType": 0,
          "description": "st.pageSizes.description",
          "type": "Array",
          "typeRaw": "`number[]`",
          "default": "`[10, 20, 30, 40, 50]`",
          "pureDefault": "[10, 20, 30, 40, 50]"
        },
        {
          "name": "showQuickJumper",
          "inputType": 0,
          "description": "st.showQuickJumper.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "total",
          "inputType": 0,
          "description": "st.total.description",
          "type": "boolean",
          "typeRaw": "`boolean, string`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "toTop",
          "inputType": 0,
          "description": "st.toTop.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        },
        {
          "name": "toTopOffset",
          "inputType": 0,
          "description": "st.toTopOffset.description",
          "type": "number",
          "typeRaw": "`number`",
          "default": "`100`",
          "pureDefault": "100"
        },
        {
          "name": "itemRender",
          "inputType": 0,
          "description": "st.itemRender.description",
          "type": "TemplateRef",
          "typeRaw": "`TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>`",
          "default": ""
        },
        {
          "name": "simple",
          "inputType": 0,
          "description": "st.simple.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": ""
        }
      ],
      "STWidthMode": [
        {
          "name": "type",
          "inputType": 0,
          "description": "st.type.description",
          "type": "string",
          "typeRaw": "`strict,default`",
          "default": "`default`",
          "pureDefault": "default"
        },
        {
          "name": "strictBehavior",
          "inputType": 0,
          "description": "st.strictBehavior.description",
          "type": "string",
          "typeRaw": "`wrap,truncate`",
          "default": "`truncate`",
          "pureDefault": "truncate"
        }
      ],
      "STMultiSort": [
        {
          "name": "key",
          "inputType": 0,
          "description": "st.key.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`sort`",
          "pureDefault": "sort"
        },
        {
          "name": "separator",
          "inputType": 0,
          "description": "st.separator.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "nameSeparator",
          "inputType": 0,
          "description": "st.nameSeparator.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`.`",
          "pureDefault": "."
        },
        {
          "name": "arrayParam",
          "inputType": 0,
          "description": "st.arrayParam.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`false`",
          "pureDefault": "false"
        },
        {
          "name": "keepEmptyKey",
          "inputType": 0,
          "description": "st.keepEmptyKey.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        },
        {
          "name": "global",
          "inputType": 0,
          "description": "st.global.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        }
      ],
      "STResizable": [
        {
          "name": "disabled",
          "inputType": 0,
          "description": "st.disabled.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        },
        {
          "name": "bounds",
          "inputType": 0,
          "description": "st.bounds.description",
          "type": "string",
          "typeRaw": "`window, parent, ElementRef<HTMLElement>`",
          "default": "`window`",
          "pureDefault": "window"
        },
        {
          "name": "maxWidth",
          "inputType": 0,
          "description": "st.maxWidth.description",
          "type": "number",
          "typeRaw": "`number`",
          "default": "`360`",
          "pureDefault": "360"
        },
        {
          "name": "minWidth",
          "inputType": 0,
          "description": "st.minWidth.description",
          "type": "number",
          "typeRaw": "`number`",
          "default": "`60`",
          "pureDefault": "60"
        },
        {
          "name": "preview",
          "inputType": 0,
          "description": "st.preview.description",
          "type": "boolean",
          "typeRaw": "`boolean`",
          "default": "`true`",
          "pureDefault": "true"
        }
      ]
    },
    "properties": [
      {
        "name": "columns",
        "inputType": 0,
        "description": "st.columns.description",
        "type": "Array",
        "typeRaw": "`STColumn[]`",
        "default": ""
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "st.data.description",
        "type": "string",
        "typeRaw": "`string, STData[], Observable<STData[]>`",
        "default": ""
      },
      {
        "name": "req",
        "inputType": 0,
        "description": "st.req.description",
        "type": "object",
        "typeRaw": "`STReq`",
        "default": "",
        "complexType": "STReq"
      },
      {
        "name": "res",
        "inputType": 0,
        "description": "st.res.description",
        "type": "object",
        "typeRaw": "`STRes`",
        "default": "",
        "complexType": "STRes"
      },
      {
        "name": "pi",
        "inputType": 0,
        "description": "st.pi.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`1`",
        "pureDefault": "1"
      },
      {
        "name": "ps",
        "inputType": 0,
        "description": "st.ps.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`10`",
        "pureDefault": "10"
      },
      {
        "name": "total",
        "inputType": 0,
        "description": "st.total.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "page",
        "inputType": 0,
        "description": "st.page.description",
        "type": "object",
        "typeRaw": "`STPage`",
        "default": "",
        "complexType": "STPage"
      },
      {
        "name": "noResult",
        "inputType": 0,
        "description": "st.noResult.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "bordered",
        "inputType": 0,
        "description": "st.bordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "st.size.description",
        "type": "Enum",
        "typeRaw": "`'small','middle','default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "small",
          "middle",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "widthMode",
        "inputType": 0,
        "description": "st.widthMode.description",
        "type": "object",
        "typeRaw": "`STWidthMode`",
        "default": "",
        "complexType": "STWidthMode"
      },
      {
        "name": "rowClassName",
        "inputType": 0,
        "description": "st.rowClassName.description",
        "type": "function",
        "typeRaw": "`(record: STData, index: number) => string`",
        "default": ""
      },
      {
        "name": "clickRowClassName",
        "inputType": 0,
        "description": "st.clickRowClassName.description",
        "type": "string",
        "typeRaw": "`string, STClickRowClassNameType`",
        "default": ""
      },
      {
        "name": "loading",
        "inputType": 0,
        "description": "st.loading.description",
        "type": "boolean",
        "typeRaw": "`boolean",
        "default": "null`",
        "pureDefault": "null`"
      },
      {
        "name": "loadingIndicator",
        "inputType": 0,
        "description": "st.loadingIndicator.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "loadingDelay",
        "inputType": 0,
        "description": "st.loadingDelay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "scroll",
        "inputType": 0,
        "description": "st.scroll.description",
        "type": "object",
        "typeRaw": "`{ y?: string; x?: string }`",
        "default": ""
      },
      {
        "name": "virtualScroll",
        "inputType": 0,
        "description": "st.virtualScroll.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "virtualItemSize",
        "inputType": 0,
        "description": "st.virtualItemSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`54`",
        "pureDefault": "54"
      },
      {
        "name": "virtualMaxBufferPx",
        "inputType": 0,
        "description": "st.virtualMaxBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "virtualMinBufferPx",
        "inputType": 0,
        "description": "st.virtualMinBufferPx.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`100`",
        "pureDefault": "100"
      },
      {
        "name": "virtualForTrackBy",
        "inputType": 0,
        "description": "st.virtualForTrackBy.description",
        "type": "object",
        "typeRaw": "`TrackByFunction<T>`",
        "default": ""
      },
      {
        "name": "singleSort",
        "inputType": 0,
        "description": "st.singleSort.description",
        "type": "string",
        "typeRaw": "descend`<br>If specified, return: `sort=columnName.(ascend",
        "default": "descend)`",
        "pureDefault": "descend)`"
      },
      {
        "name": "multiSort",
        "inputType": 0,
        "description": "st.multiSort.description",
        "type": "boolean",
        "typeRaw": "`boolean, STMultiSort`",
        "default": "`false`",
        "complexType": "STMultiSort",
        "pureDefault": "false"
      },
      {
        "name": "header",
        "inputType": 0,
        "description": "st.header.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "showHeader",
        "inputType": 0,
        "description": "st.showHeader.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "footer",
        "inputType": 0,
        "description": "st.footer.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "bodyHeader",
        "inputType": 0,
        "description": "st.bodyHeader.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<STStatisticalResults>`",
        "default": ""
      },
      {
        "name": "body",
        "inputType": 0,
        "description": "st.body.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<STStatisticalResults>`",
        "default": ""
      },
      {
        "name": "widthConfig",
        "inputType": 0,
        "description": "st.widthConfig.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "expandRowByClick",
        "inputType": 0,
        "description": "st.expandRowByClick.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "expandAccordion",
        "inputType": 0,
        "description": "st.expandAccordion.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "expand",
        "inputType": 0,
        "description": "st.expand.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "responsive",
        "inputType": 0,
        "description": "st.responsive.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "responsiveHideHeaderFooter",
        "inputType": 0,
        "description": "st.responsiveHideHeaderFooter.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "resizable",
        "inputType": 0,
        "description": "st.resizable.description",
        "type": "object",
        "typeRaw": "`STResizable, boolean`",
        "default": "",
        "complexType": "STResizable"
      },
      {
        "name": "change",
        "inputType": 1,
        "description": "st.change.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<STChange>`",
        "default": ""
      },
      {
        "name": "error",
        "inputType": 1,
        "description": "st.error.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<STError>`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "st.title",
    "description": "st.description",
    "whenToUse": "st.whenToUse",
    "doc": "/components/st/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/st"
  },
  {
    "type": "component",
    "selector": "sv-container",
    "types": {},
    "properties": [
      {
        "name": "size",
        "inputType": 0,
        "description": "sv-container.size.description",
        "type": "Enum",
        "typeRaw": "`'small','large'`",
        "default": "`'large'`",
        "typeDefinition": [
          "small",
          "large"
        ],
        "pureDefault": "large"
      },
      {
        "name": "layout",
        "inputType": 0,
        "description": "sv-container.layout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal','vertical'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "gutter",
        "inputType": 0,
        "description": "sv-container.gutter.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32"
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "sv-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "`3`",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "pureDefault": "3"
      },
      {
        "name": "labelWidth",
        "inputType": 0,
        "description": "sv-container.labelWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "default",
        "inputType": 0,
        "description": "sv-container.default.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "sv-container.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "sv-container.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "@delon/abc",
    "title": "sv-container.title",
    "description": "sv-container.description",
    "whenToUse": "sv-container.whenToUse",
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv"
  },
  {
    "type": "directive",
    "selector": "sv-container",
    "types": {},
    "properties": [
      {
        "name": "size",
        "inputType": 0,
        "description": "sv-container.size.description",
        "type": "Enum",
        "typeRaw": "`'small','large'`",
        "default": "`'large'`",
        "typeDefinition": [
          "small",
          "large"
        ],
        "pureDefault": "large"
      },
      {
        "name": "layout",
        "inputType": 0,
        "description": "sv-container.layout.description",
        "type": "Enum",
        "typeRaw": "`'horizontal','vertical'`",
        "default": "`'horizontal'`",
        "typeDefinition": [
          "horizontal",
          "vertical"
        ],
        "pureDefault": "horizontal"
      },
      {
        "name": "gutter",
        "inputType": 0,
        "description": "sv-container.gutter.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`32`",
        "pureDefault": "32"
      },
      {
        "name": "col",
        "inputType": 0,
        "description": "sv-container.col.description",
        "type": "Enum",
        "typeRaw": "`'1','2','3','4','5','6'`",
        "default": "`3`",
        "typeDefinition": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "pureDefault": "3"
      },
      {
        "name": "labelWidth",
        "inputType": 0,
        "description": "sv-container.labelWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "default",
        "inputType": 0,
        "description": "sv-container.default.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "sv-container.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "sv-container.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "@delon/abc",
    "title": "sv-container.title",
    "description": "sv-container.description",
    "whenToUse": "sv-container.whenToUse",
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv"
  },
  {
    "type": "component",
    "selector": "sv",
    "types": {},
    "properties": [
      {
        "name": "col",
        "inputType": 0,
        "description": "sv.col.description",
        "type": "string",
        "typeRaw": "-",
        "default": ""
      },
      {
        "name": "label",
        "inputType": 0,
        "description": "sv.label.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "unit",
        "inputType": 0,
        "description": "sv.unit.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "default",
        "inputType": 0,
        "description": "sv.default.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": ""
      },
      {
        "name": "type",
        "inputType": 0,
        "description": "sv.type.description",
        "type": "Enum",
        "typeRaw": "`'primary','success','danger','warning'`",
        "default": "",
        "typeDefinition": [
          "primary",
          "success",
          "danger",
          "warning"
        ]
      },
      {
        "name": "optional",
        "inputType": 0,
        "description": "sv.optional.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "optionalHelp",
        "inputType": 0,
        "description": "sv.optionalHelp.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "optionalHelpColor",
        "inputType": 0,
        "description": "sv.optionalHelpColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "sv.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "hideLabel",
        "inputType": 0,
        "description": "sv.hideLabel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "@delon/abc",
    "title": "sv.title",
    "description": "sv.description",
    "whenToUse": "sv.whenToUse",
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv"
  },
  {
    "type": "component",
    "selector": "sv-title",
    "types": {},
    "properties": [
      {
        "name": "prefix",
        "inputType": 0,
        "description": "sv-title.prefix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "unit",
        "inputType": 0,
        "description": "sv-title.unit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "tooltip",
        "inputType": 0,
        "description": "sv-title.tooltip.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "sv-title.size.description",
        "type": "Enum",
        "typeRaw": "`'large','small','default'`",
        "default": "`default`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      }
    ],
    "description": "sv-title.description",
    "lib": "@delon/abc",
    "title": "sv-title.title",
    "whenToUse": "sv-title.whenToUse",
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv"
  },
  {
    "type": "directive",
    "selector": "sv-title",
    "types": {},
    "properties": [
      {
        "name": "prefix",
        "inputType": 0,
        "description": "sv-title.prefix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "unit",
        "inputType": 0,
        "description": "sv-title.unit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "tooltip",
        "inputType": 0,
        "description": "sv-title.tooltip.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "sv-title.size.description",
        "type": "Enum",
        "typeRaw": "`'large','small','default'`",
        "default": "`default`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      }
    ],
    "description": "sv-title.description",
    "lib": "@delon/abc",
    "title": "sv-title.title",
    "whenToUse": "sv-title.whenToUse",
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv"
  },
  {
    "type": "component",
    "selector": "sv-value",
    "types": {},
    "properties": [
      {
        "name": "prefix",
        "inputType": 0,
        "description": "sv-value.prefix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "unit",
        "inputType": 0,
        "description": "sv-value.unit.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "tooltip",
        "inputType": 0,
        "description": "sv-value.tooltip.description",
        "type": "string",
        "typeRaw": "`string, TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "size",
        "inputType": 0,
        "description": "sv-value.size.description",
        "type": "Enum",
        "typeRaw": "`'large','small','default'`",
        "default": "`default`",
        "typeDefinition": [
          "large",
          "small",
          "default"
        ],
        "pureDefault": "default"
      }
    ],
    "description": "sv-value.description",
    "lib": "@delon/abc",
    "title": "sv-value.title",
    "whenToUse": "sv-value.whenToUse",
    "doc": "/components/sv/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/sv"
  },
  {
    "type": "component",
    "selector": "tag-select",
    "types": {},
    "properties": [
      {
        "name": "expandable",
        "inputType": 0,
        "description": "tag-select.expandable.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "change",
        "inputType": 1,
        "description": "tag-select.change.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<boolean>`",
        "default": ""
      }
    ],
    "lib": "@delon/abc",
    "title": "tag-select.title",
    "description": "tag-select.description",
    "whenToUse": "tag-select.whenToUse",
    "doc": "/components/tag-select/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/tag-select"
  },
  {
    "type": "directive",
    "selector": "xlsx",
    "types": {},
    "properties": [],
    "description": "xlsx.description",
    "lib": "@delon/abc",
    "title": "xlsx.title",
    "whenToUse": "xlsx.whenToUse",
    "doc": "/components/xlsx/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/abc/xlsx"
  },
  {
    "type": "component",
    "selector": "g2-bar",
    "types": {},
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-bar.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-bar.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-bar.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-bar.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`rgba(24, 144, 255, 0.85)`",
        "pureDefault": "rgba(24, 144, 255, 0.85)"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-bar.padding.description",
        "type": "Array",
        "typeRaw": "`Array<number",
        "default": "string>",
        "pureDefault": "string>"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-bar.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-bar.data.description",
        "type": "Array",
        "typeRaw": "`G2BarData[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "autoLabel",
        "inputType": 0,
        "description": "g2-bar.autoLabel.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "interaction",
        "inputType": 0,
        "description": "g2-bar.interaction.description",
        "type": "object",
        "typeRaw": "`InteractionType`",
        "default": "`none`",
        "pureDefault": "none"
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-bar.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-bar.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2BarClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-bar.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-bar.title",
    "description": "g2-bar.description",
    "whenToUse": "g2-bar.whenToUse",
    "doc": "/chart/bar/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/bar"
  },
  {
    "type": "component",
    "selector": "g2-card",
    "types": {},
    "properties": [
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-card.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "avatar",
        "inputType": 0,
        "description": "g2-card.avatar.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "action",
        "inputType": 0,
        "description": "g2-card.action.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "total",
        "inputType": 0,
        "description": "g2-card.total.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "footer",
        "inputType": 0,
        "description": "g2-card.footer.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "contentHeight",
        "inputType": 0,
        "description": "g2-card.contentHeight.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "bordered",
        "inputType": 0,
        "description": "g2-card.bordered.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-card.title",
    "description": "g2-card.description",
    "whenToUse": "g2-card.whenToUse",
    "doc": "/chart/card/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/card"
  },
  {
    "type": "component",
    "selector": "chart-echarts",
    "types": {},
    "properties": [
      {
        "name": "width",
        "inputType": 0,
        "description": "chart-echarts.width.description",
        "type": "number",
        "typeRaw": "`number, string`",
        "default": "`100%`",
        "pureDefault": "100%"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "chart-echarts.height.description",
        "type": "number",
        "typeRaw": "`number, string`",
        "default": "`400px`",
        "pureDefault": "400px"
      },
      {
        "name": "option",
        "inputType": 0,
        "description": "chart-echarts.option.description",
        "type": "object",
        "typeRaw": "`ChartEChartsOption`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "chart-echarts.theme.description",
        "type": "string",
        "typeRaw": "`string, object`",
        "default": ""
      },
      {
        "name": "on",
        "inputType": 0,
        "description": "chart-echarts.on.description",
        "type": "Array",
        "typeRaw": "`ChartEChartsOn[]`",
        "default": ""
      },
      {
        "name": "events",
        "inputType": 1,
        "description": "chart-echarts.events.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ChartEChartsEvent>`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "chart-echarts.title",
    "description": "chart-echarts.description",
    "whenToUse": "chart-echarts.whenToUse",
    "doc": "/chart/chart-echarts/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/chart-echarts"
  },
  {
    "type": "component",
    "selector": "g2-custom",
    "types": {},
    "properties": [
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-custom.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-custom.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "resizeTime",
        "inputType": 0,
        "description": "g2-custom.resizeTime.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "render",
        "inputType": 1,
        "description": "g2-custom.render.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ElementRef>`",
        "default": ""
      },
      {
        "name": "resize",
        "inputType": 1,
        "description": "g2-custom.resize.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ElementRef>`",
        "default": ""
      },
      {
        "name": "destroy",
        "inputType": 1,
        "description": "g2-custom.destroy.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ElementRef>`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-custom.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-custom.title",
    "description": "g2-custom.description",
    "whenToUse": "g2-custom.whenToUse",
    "doc": "/chart/custom/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/custom"
  },
  {
    "type": "component",
    "selector": "g2-gauge",
    "types": {},
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-gauge.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-gauge.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-gauge.title.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-gauge.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-gauge.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#2F9CFF`",
        "pureDefault": "#2F9CFF"
      },
      {
        "name": "bgColor",
        "inputType": 0,
        "description": "g2-gauge.bgColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#F0F2F5`",
        "pureDefault": "#F0F2F5"
      },
      {
        "name": "percent",
        "inputType": 0,
        "description": "g2-gauge.percent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-gauge.padding.description",
        "type": "Array",
        "typeRaw": "`Array<number",
        "default": "string>`",
        "pureDefault": "string>`"
      },
      {
        "name": "format",
        "inputType": 0,
        "description": "g2-gauge.format.description",
        "type": "function",
        "typeRaw": "`(text: string, item: {}, index: number) => string`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-gauge.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-gauge.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-gauge.title",
    "description": "g2-gauge.description",
    "whenToUse": "g2-gauge.whenToUse",
    "doc": "/chart/gauge/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/gauge"
  },
  {
    "type": "component",
    "selector": "g2-mini-area",
    "types": {},
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-mini-area.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-mini-area.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-mini-area.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`rgba(24, 144, 255, 0.2)`",
        "pureDefault": "rgba(24, 144, 255, 0.2)"
      },
      {
        "name": "borderColor",
        "inputType": 0,
        "description": "g2-mini-area.borderColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#1890FF`",
        "pureDefault": "#1890FF"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-mini-area.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`56`",
        "pureDefault": "56"
      },
      {
        "name": "line",
        "inputType": 0,
        "description": "g2-mini-area.line.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "animate",
        "inputType": 0,
        "description": "g2-mini-area.animate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-mini-area.padding.description",
        "type": "string",
        "typeRaw": "`array`",
        "default": "`[8, 8, 8, 8]`",
        "pureDefault": "[8, 8, 8, 8]"
      },
      {
        "name": "xAxis",
        "inputType": 0,
        "description": "g2-mini-area.xAxis.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "yAxis",
        "inputType": 0,
        "description": "g2-mini-area.yAxis.description",
        "type": "object",
        "typeRaw": "`object`",
        "default": ""
      },
      {
        "name": "yTooltipSuffix",
        "inputType": 0,
        "description": "g2-mini-area.yTooltipSuffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "tooltipType",
        "inputType": 0,
        "description": "g2-mini-area.tooltipType.description",
        "type": "Enum",
        "typeRaw": "`'mini','default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "mini",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-mini-area.data.description",
        "type": "Array",
        "typeRaw": "`G2MiniAreaData[]`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-mini-area.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-mini-area.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2MiniAreaClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-mini-area.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-mini-area.title",
    "description": "g2-mini-area.description",
    "whenToUse": "g2-mini-area.whenToUse",
    "doc": "/chart/mini-area/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/mini-area"
  },
  {
    "type": "component",
    "selector": "g2-mini-bar",
    "types": {},
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-mini-bar.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-mini-bar.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-mini-bar.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#1890FF`",
        "pureDefault": "#1890FF"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-mini-bar.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "yTooltipSuffix",
        "inputType": 0,
        "description": "g2-mini-bar.yTooltipSuffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "tooltipType",
        "inputType": 0,
        "description": "g2-mini-bar.tooltipType.description",
        "type": "Enum",
        "typeRaw": "`'mini','default'`",
        "default": "`'default'`",
        "typeDefinition": [
          "mini",
          "default"
        ],
        "pureDefault": "default"
      },
      {
        "name": "borderWidth",
        "inputType": 0,
        "description": "g2-mini-bar.borderWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`5`",
        "pureDefault": "5"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-mini-bar.padding.description",
        "type": "string",
        "typeRaw": "`array`",
        "default": "`[8, 8, 8, 8]`",
        "pureDefault": "[8, 8, 8, 8]"
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-mini-bar.data.description",
        "type": "Array",
        "typeRaw": "`G2MiniBarData[]`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-mini-bar.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-mini-bar.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2MiniBarClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-mini-bar.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-mini-bar.title",
    "description": "g2-mini-bar.description",
    "whenToUse": "g2-mini-bar.whenToUse",
    "doc": "/chart/mini-bar/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/mini-bar"
  },
  {
    "type": "component",
    "selector": "g2-mini-progress",
    "types": {},
    "properties": [
      {
        "name": "target",
        "inputType": 0,
        "description": "g2-mini-progress.target.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-mini-progress.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "strokeWidth",
        "inputType": 0,
        "description": "g2-mini-progress.strokeWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "percent",
        "inputType": 0,
        "description": "g2-mini-progress.percent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-mini-progress.title",
    "description": "g2-mini-progress.description",
    "whenToUse": "g2-mini-progress.whenToUse",
    "doc": "/chart/mini-progress/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/mini-progress"
  },
  {
    "type": "component",
    "selector": "number-info",
    "types": {},
    "properties": [
      {
        "name": "title",
        "inputType": 0,
        "description": "number-info.title.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "subTitle",
        "inputType": 0,
        "description": "number-info.subTitle.description",
        "type": "TemplateRef",
        "typeRaw": "`TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "total",
        "inputType": 0,
        "description": "number-info.total.description",
        "type": "string",
        "typeRaw": "`string, number`",
        "default": ""
      },
      {
        "name": "suffix",
        "inputType": 0,
        "description": "number-info.suffix.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": ""
      },
      {
        "name": "subTotal",
        "inputType": 0,
        "description": "number-info.subTotal.description",
        "type": "string",
        "typeRaw": "`string, number`",
        "default": ""
      },
      {
        "name": "status",
        "inputType": 0,
        "description": "number-info.status.description",
        "type": "Enum",
        "typeRaw": "`'up','down'`",
        "default": "",
        "typeDefinition": [
          "up",
          "down"
        ]
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "number-info.theme.description",
        "type": "Enum",
        "typeRaw": "`'light','default'`",
        "default": "`'light'`",
        "typeDefinition": [
          "light",
          "default"
        ],
        "pureDefault": "light"
      },
      {
        "name": "gap",
        "inputType": 0,
        "description": "number-info.gap.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "8",
        "pureDefault": "8"
      }
    ],
    "lib": "@delon/chart",
    "title": "number-info.title",
    "description": "number-info.description",
    "whenToUse": "number-info.whenToUse",
    "doc": "/chart/number-info/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/number-info"
  },
  {
    "type": "component",
    "selector": "g2-pie",
    "types": {},
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-pie.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-pie.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "animate",
        "inputType": 0,
        "description": "g2-pie.animate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-pie.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`rgba(24, 144, 255, 0.85)`",
        "pureDefault": "rgba(24, 144, 255, 0.85)"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-pie.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "hasLegend",
        "inputType": 0,
        "description": "g2-pie.hasLegend.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-pie.padding.description",
        "type": "Array",
        "typeRaw": "`number[]`",
        "default": "`[12, 0, 12, 0]`",
        "pureDefault": "[12, 0, 12, 0]"
      },
      {
        "name": "percent",
        "inputType": 0,
        "description": "g2-pie.percent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "lineWidth",
        "inputType": 0,
        "description": "g2-pie.lineWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "inner",
        "inputType": 0,
        "description": "g2-pie.inner.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0.75`",
        "pureDefault": "0.75"
      },
      {
        "name": "blockMaxWidth",
        "inputType": 0,
        "description": "g2-pie.blockMaxWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`380`",
        "pureDefault": "380"
      },
      {
        "name": "tooltip",
        "inputType": 0,
        "description": "g2-pie.tooltip.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "subTitle",
        "inputType": 0,
        "description": "g2-pie.subTitle.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void><void>`",
        "default": ""
      },
      {
        "name": "total",
        "inputType": 0,
        "description": "g2-pie.total.description",
        "type": "string",
        "typeRaw": "`string,number,TemplateRef<void><void>`",
        "default": ""
      },
      {
        "name": "valueFormat",
        "inputType": 0,
        "description": "g2-pie.valueFormat.description",
        "type": "function",
        "typeRaw": "`(y: number) => string`",
        "default": ""
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-pie.data.description",
        "type": "Array",
        "typeRaw": "`G2PieData[]`",
        "default": ""
      },
      {
        "name": "colors",
        "inputType": 0,
        "description": "g2-pie.colors.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "interaction",
        "inputType": 0,
        "description": "g2-pie.interaction.description",
        "type": "object",
        "typeRaw": "`InteractionType`",
        "default": "`none`",
        "pureDefault": "none"
      },
      {
        "name": "ratio",
        "inputType": 0,
        "description": "g2-pie.ratio.description",
        "type": "object",
        "typeRaw": "`G2PieRatio`",
        "default": "`{ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' }`",
        "pureDefault": "{ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' }"
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-pie.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-pie.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2PieClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-pie.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-pie.title",
    "description": "g2-pie.description",
    "whenToUse": "g2-pie.whenToUse",
    "doc": "/chart/pie/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/pie"
  },
  {
    "type": "component",
    "selector": "g2-radar",
    "types": {},
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-radar.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-radar.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-radar.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-radar.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      },
      {
        "name": "hasLegend",
        "inputType": 0,
        "description": "g2-radar.hasLegend.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-radar.padding.description",
        "type": "string",
        "typeRaw": "`array`",
        "default": "`[24, 30, 16, 30]`",
        "pureDefault": "[24, 30, 16, 30]"
      },
      {
        "name": "colors",
        "inputType": 0,
        "description": "g2-radar.colors.description",
        "type": "Array",
        "typeRaw": "`string[]`",
        "default": ""
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-radar.data.description",
        "type": "Array",
        "typeRaw": "`G2RadarData[]`",
        "default": ""
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-radar.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-radar.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2RadarClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-radar.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-radar.title",
    "description": "g2-radar.description",
    "whenToUse": "g2-radar.whenToUse",
    "doc": "/chart/radar/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/radar"
  },
  {
    "type": "component",
    "selector": "g2-single-bar",
    "types": {},
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-single-bar.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-single-bar.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "plusColor",
        "inputType": 0,
        "description": "g2-single-bar.plusColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#40a9ff`",
        "pureDefault": "#40a9ff"
      },
      {
        "name": "minusColor",
        "inputType": 0,
        "description": "g2-single-bar.minusColor.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#ff4d4f`",
        "pureDefault": "#ff4d4f"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-single-bar.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`60`",
        "pureDefault": "60"
      },
      {
        "name": "barSize",
        "inputType": 0,
        "description": "g2-single-bar.barSize.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`30`",
        "pureDefault": "30"
      },
      {
        "name": "min",
        "inputType": 0,
        "description": "g2-single-bar.min.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "max",
        "inputType": 0,
        "description": "g2-single-bar.max.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`100`",
        "pureDefault": "100"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-single-bar.padding.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "value",
        "inputType": 0,
        "description": "g2-single-bar.value.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "format",
        "inputType": 0,
        "description": "g2-single-bar.format.description",
        "type": "function",
        "typeRaw": "`(value: number) => string`",
        "default": ""
      },
      {
        "name": "textStyle",
        "inputType": 0,
        "description": "g2-single-bar.textStyle.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": "`{ fontSize: 12, color: '#595959' }`",
        "pureDefault": "{ fontSize: 12, color: '#595959' }"
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-single-bar.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-single-bar.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-single-bar.title",
    "description": "g2-single-bar.description",
    "whenToUse": "g2-single-bar.whenToUse",
    "doc": "/chart/single-bar/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/single-bar"
  },
  {
    "type": "component",
    "selector": "g2-tag-cloud",
    "types": {},
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-tag-cloud.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-tag-cloud.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-tag-cloud.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`200`",
        "pureDefault": "200"
      },
      {
        "name": "width",
        "inputType": 0,
        "description": "g2-tag-cloud.width.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-tag-cloud.data.description",
        "type": "Array",
        "typeRaw": "`G2TagCloudData[]`",
        "default": "`[]`",
        "pureDefault": "[]"
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-tag-cloud.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-tag-cloud.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2TagCloudClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-tag-cloud.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-tag-cloud.title",
    "description": "g2-tag-cloud.description",
    "whenToUse": "g2-tag-cloud.whenToUse",
    "doc": "/chart/tag-cloud/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/tag-cloud"
  },
  {
    "type": "component",
    "selector": "g2-timeline",
    "types": {
      "G2TimelineMap": [
        {
          "name": "y1",
          "inputType": 0,
          "description": "g2-timeline.y1.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "y2",
          "inputType": 0,
          "description": "g2-timeline.y2.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "y3",
          "inputType": 0,
          "description": "g2-timeline.y3.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "y4",
          "inputType": 0,
          "description": "g2-timeline.y4.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        },
        {
          "name": "y5",
          "inputType": 0,
          "description": "g2-timeline.y5.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": ""
        }
      ]
    },
    "properties": [
      {
        "name": "repaint",
        "inputType": 0,
        "description": "g2-timeline.repaint.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-timeline.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-timeline.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "maxAxis",
        "inputType": 0,
        "description": "g2-timeline.maxAxis.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`2`",
        "pureDefault": "2"
      },
      {
        "name": "data",
        "inputType": 0,
        "description": "g2-timeline.data.description",
        "type": "Array",
        "typeRaw": "`G2TimelineData[]`",
        "default": ""
      },
      {
        "name": "titleMap",
        "inputType": 0,
        "description": "g2-timeline.titleMap.description",
        "type": "object",
        "typeRaw": "`G2TimelineMap`",
        "default": "",
        "complexType": "G2TimelineMap"
      },
      {
        "name": "colorMap",
        "inputType": 0,
        "description": "g2-timeline.colorMap.description",
        "type": "object",
        "typeRaw": "`G2TimelineMap`",
        "default": "`{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }`",
        "complexType": "G2TimelineMap",
        "pureDefault": "{ y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' }"
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-timeline.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`400`",
        "pureDefault": "400"
      },
      {
        "name": "padding",
        "inputType": 0,
        "description": "g2-timeline.padding.description",
        "type": "Array",
        "typeRaw": "`number[]`",
        "default": "`[40, 8, 64, 40]`",
        "pureDefault": "[40, 8, 64, 40]"
      },
      {
        "name": "borderWidth",
        "inputType": 0,
        "description": "g2-timeline.borderWidth.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`2`",
        "pureDefault": "2"
      },
      {
        "name": "mask",
        "inputType": 0,
        "description": "g2-timeline.mask.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`HH:mm`",
        "pureDefault": "HH:mm"
      },
      {
        "name": "maskSlider",
        "inputType": 0,
        "description": "g2-timeline.maskSlider.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`HH:mm`",
        "pureDefault": "HH:mm"
      },
      {
        "name": "position",
        "inputType": 0,
        "description": "g2-timeline.position.description",
        "type": "Enum",
        "typeRaw": "`'top','right','bottom','left'`",
        "default": "`'top'`",
        "typeDefinition": [
          "top",
          "right",
          "bottom",
          "left"
        ],
        "pureDefault": "top"
      },
      {
        "name": "slider",
        "inputType": 0,
        "description": "g2-timeline.slider.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "theme",
        "inputType": 0,
        "description": "g2-timeline.theme.description",
        "type": "string",
        "typeRaw": "`string",
        "default": "LooseObject`",
        "pureDefault": "LooseObject`"
      },
      {
        "name": "clickItem",
        "inputType": 1,
        "description": "g2-timeline.clickItem.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<G2TimelineClickItem>`",
        "default": ""
      },
      {
        "name": "ready",
        "inputType": 1,
        "description": "g2-timeline.ready.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<Chart>`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-timeline.title",
    "description": "g2-timeline.description",
    "whenToUse": "g2-timeline.whenToUse",
    "doc": "/chart/timeline/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/timeline"
  },
  {
    "type": "component",
    "selector": "trend",
    "types": {},
    "properties": [
      {
        "name": "colorful",
        "inputType": 0,
        "description": "trend.colorful.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "flag",
        "inputType": 0,
        "description": "trend.flag.description",
        "type": "Enum",
        "typeRaw": "`'up','down'`",
        "default": "",
        "typeDefinition": [
          "up",
          "down"
        ]
      },
      {
        "name": "reverseColor",
        "inputType": 0,
        "description": "trend.reverseColor.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      }
    ],
    "lib": "@delon/chart",
    "title": "trend.title",
    "description": "trend.description",
    "whenToUse": "trend.whenToUse",
    "doc": "/chart/trend/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/trend"
  },
  {
    "type": "component",
    "selector": "g2-water-wave",
    "types": {},
    "properties": [
      {
        "name": "animate",
        "inputType": 0,
        "description": "g2-water-wave.animate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "g2-water-wave.delay.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`0`",
        "pureDefault": "0"
      },
      {
        "name": "title",
        "inputType": 0,
        "description": "g2-water-wave.title.description",
        "type": "string",
        "typeRaw": "`string,TemplateRef<void>`",
        "default": ""
      },
      {
        "name": "height",
        "inputType": 0,
        "description": "g2-water-wave.height.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": "`160`",
        "pureDefault": "160"
      },
      {
        "name": "color",
        "inputType": 0,
        "description": "g2-water-wave.color.description",
        "type": "string",
        "typeRaw": "`string`",
        "default": "`#1890FF`",
        "pureDefault": "#1890FF"
      },
      {
        "name": "percent",
        "inputType": 0,
        "description": "g2-water-wave.percent.description",
        "type": "number",
        "typeRaw": "`number`",
        "default": ""
      }
    ],
    "lib": "@delon/chart",
    "title": "g2-water-wave.title",
    "description": "g2-water-wave.description",
    "whenToUse": "g2-water-wave.whenToUse",
    "doc": "/chart/water-wave/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/chart/water-wave"
  },
  {
    "type": "component",
    "selector": "sf",
    "types": {
      "SFButton": [
        {
          "name": "submit",
          "inputType": 0,
          "description": "sf.submit.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`提交`",
          "pureDefault": "提交"
        },
        {
          "name": "reset",
          "inputType": 0,
          "description": "sf.reset.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`重置`",
          "pureDefault": "重置"
        },
        {
          "name": "search",
          "inputType": 0,
          "description": "sf.search.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`搜索`",
          "pureDefault": "搜索"
        },
        {
          "name": "edit",
          "inputType": 0,
          "description": "sf.edit.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`保存`",
          "pureDefault": "保存"
        },
        {
          "name": "render",
          "inputType": 0,
          "description": "sf.render.description",
          "type": "object",
          "typeRaw": "`SFRenderButton`",
          "default": ""
        }
      ]
    },
    "properties": [
      {
        "name": "layout",
        "inputType": 0,
        "description": "sf.layout.description",
        "type": "string",
        "typeRaw": "`horizontal,vertical,inline`",
        "default": "`horizontal`",
        "pureDefault": "horizontal"
      },
      {
        "name": "schema",
        "inputType": 0,
        "description": "sf.schema.description",
        "type": "object",
        "typeRaw": "`SFSchema`",
        "default": ""
      },
      {
        "name": "ui",
        "inputType": 0,
        "description": "sf.ui.description",
        "type": "object",
        "typeRaw": "`SFUISchema`",
        "default": ""
      },
      {
        "name": "formData",
        "inputType": 0,
        "description": "sf.formData.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "mode",
        "inputType": 0,
        "description": "sf.mode.description",
        "type": "string",
        "typeRaw": "`default,search,edit`",
        "default": "`default`",
        "pureDefault": "default"
      },
      {
        "name": "button",
        "inputType": 0,
        "description": "sf.button.description",
        "type": "object",
        "typeRaw": "`SFButton, 'none'`",
        "default": "`{}`",
        "complexType": "SFButton",
        "pureDefault": "{}"
      },
      {
        "name": "firstVisual",
        "inputType": 0,
        "description": "sf.firstVisual.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "liveValidate",
        "inputType": 0,
        "description": "sf.liveValidate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "autocomplete",
        "inputType": 0,
        "description": "sf.autocomplete.description",
        "type": "string",
        "typeRaw": "`on,off`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "disabled",
        "inputType": 0,
        "description": "sf.disabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "loading",
        "inputType": 0,
        "description": "sf.loading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "sf.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "compact",
        "inputType": 0,
        "description": "sf.compact.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "cleanValue",
        "inputType": 0,
        "description": "sf.cleanValue.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "sf.delay.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "formChange",
        "inputType": 1,
        "description": "sf.formChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formValueChange",
        "inputType": 1,
        "description": "sf.formValueChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<SFValueChange>`",
        "default": ""
      },
      {
        "name": "formSubmit",
        "inputType": 1,
        "description": "sf.formSubmit.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formReset",
        "inputType": 1,
        "description": "sf.formReset.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formError",
        "inputType": 1,
        "description": "sf.formError.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ErrorData[]>`",
        "default": ""
      }
    ],
    "lib": "@delon/form",
    "title": "sf.title",
    "description": "sf.description",
    "whenToUse": "sf.whenToUse",
    "doc": "/form/getting-started/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/form/src"
  },
  {
    "type": "directive",
    "selector": "sf",
    "types": {
      "SFButton": [
        {
          "name": "submit",
          "inputType": 0,
          "description": "sf.submit.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`提交`",
          "pureDefault": "提交"
        },
        {
          "name": "reset",
          "inputType": 0,
          "description": "sf.reset.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`重置`",
          "pureDefault": "重置"
        },
        {
          "name": "search",
          "inputType": 0,
          "description": "sf.search.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`搜索`",
          "pureDefault": "搜索"
        },
        {
          "name": "edit",
          "inputType": 0,
          "description": "sf.edit.description",
          "type": "string",
          "typeRaw": "`string`",
          "default": "`保存`",
          "pureDefault": "保存"
        },
        {
          "name": "render",
          "inputType": 0,
          "description": "sf.render.description",
          "type": "object",
          "typeRaw": "`SFRenderButton`",
          "default": ""
        }
      ]
    },
    "properties": [
      {
        "name": "layout",
        "inputType": 0,
        "description": "sf.layout.description",
        "type": "string",
        "typeRaw": "`horizontal,vertical,inline`",
        "default": "`horizontal`",
        "pureDefault": "horizontal"
      },
      {
        "name": "schema",
        "inputType": 0,
        "description": "sf.schema.description",
        "type": "object",
        "typeRaw": "`SFSchema`",
        "default": ""
      },
      {
        "name": "ui",
        "inputType": 0,
        "description": "sf.ui.description",
        "type": "object",
        "typeRaw": "`SFUISchema`",
        "default": ""
      },
      {
        "name": "formData",
        "inputType": 0,
        "description": "sf.formData.description",
        "type": "object",
        "typeRaw": "`any`",
        "default": ""
      },
      {
        "name": "mode",
        "inputType": 0,
        "description": "sf.mode.description",
        "type": "string",
        "typeRaw": "`default,search,edit`",
        "default": "`default`",
        "pureDefault": "default"
      },
      {
        "name": "button",
        "inputType": 0,
        "description": "sf.button.description",
        "type": "object",
        "typeRaw": "`SFButton, 'none'`",
        "default": "`{}`",
        "complexType": "SFButton",
        "pureDefault": "{}"
      },
      {
        "name": "firstVisual",
        "inputType": 0,
        "description": "sf.firstVisual.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "liveValidate",
        "inputType": 0,
        "description": "sf.liveValidate.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`true`",
        "pureDefault": "true"
      },
      {
        "name": "autocomplete",
        "inputType": 0,
        "description": "sf.autocomplete.description",
        "type": "string",
        "typeRaw": "`on,off`",
        "default": "`null`",
        "pureDefault": "null"
      },
      {
        "name": "disabled",
        "inputType": 0,
        "description": "sf.disabled.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false",
        "forceInputType": 0
      },
      {
        "name": "loading",
        "inputType": 0,
        "description": "sf.loading.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "noColon",
        "inputType": 0,
        "description": "sf.noColon.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "compact",
        "inputType": 0,
        "description": "sf.compact.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "cleanValue",
        "inputType": 0,
        "description": "sf.cleanValue.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "delay",
        "inputType": 0,
        "description": "sf.delay.description",
        "type": "boolean",
        "typeRaw": "`boolean`",
        "default": "`false`",
        "pureDefault": "false"
      },
      {
        "name": "formChange",
        "inputType": 1,
        "description": "sf.formChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formValueChange",
        "inputType": 1,
        "description": "sf.formValueChange.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<SFValueChange>`",
        "default": ""
      },
      {
        "name": "formSubmit",
        "inputType": 1,
        "description": "sf.formSubmit.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formReset",
        "inputType": 1,
        "description": "sf.formReset.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<{}>`",
        "default": ""
      },
      {
        "name": "formError",
        "inputType": 1,
        "description": "sf.formError.description",
        "type": "EventEmitter",
        "typeRaw": "`EventEmitter<ErrorData[]>`",
        "default": ""
      }
    ],
    "lib": "@delon/form",
    "title": "sf.title",
    "description": "sf.description",
    "whenToUse": "sf.whenToUse",
    "doc": "/form/getting-started/en",
    "github": "https://github.com/ng-alain/delon/tree/master/packages/form/src"
  },
  {
    "type": "component",
    "selector": "nz-breadcrumb-item",
    "types": {},
    "properties": [],
    "lib": "ng-zorro-antd",
    "title": "nz-breadcrumb-item.title",
    "description": "nz-breadcrumb-item.description",
    "whenToUse": "nz-breadcrumb-item.whenToUse",
    "doc": "/components/breadcrumb/en",
    "github": "https://github.com/NG-ZORRO/ng-zorro-antd/tree/master/components/breadcrumb"
  },
  {
    "selector": "nz-layout",
    "description": "nz-layout.description",
    "type": "component",
    "lib": "ng-zorro-antd",
    "title": "nz-layout.title",
    "whenToUse": "nz-layout.whenToUse"
  },
  {
    "selector": "nz-header",
    "description": "nz-header.description",
    "type": "component",
    "lib": "ng-zorro-antd",
    "title": "nz-header.title",
    "whenToUse": "nz-header.whenToUse"
  },
  {
    "selector": "nz-content",
    "description": "nz-content.description",
    "type": "component",
    "lib": "ng-zorro-antd",
    "title": "nz-content.title",
    "whenToUse": "nz-content.whenToUse"
  },
  {
    "selector": "nz-footer",
    "description": "nz-footer.description",
    "type": "component",
    "lib": "ng-zorro-antd",
    "title": "nz-footer.title",
    "whenToUse": "nz-footer.whenToUse"
  }
];