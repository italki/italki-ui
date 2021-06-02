---
category: Components
type: General
title: Button
---

## API

To get a customized button, just set `type`/`shape`/`size`/`loading`/`disabled`.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | disabled state of button | boolean | `false` |
| outlined | transparent background | boolean | `false` |
| text | transparent background without border | boolean | `false` |
| ghost | transparent background, white text color and border | boolean | `false` |
| href | redirect url of link button | string | - |
| htmlType | set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |
| icon | set the icon component of button | ReactNode | - |
| loading | set the loading status of button | boolean \| { delay: number } | `false` |
| shape | can be set to `circle`, `round` or omitted | string | - |
| size | set the size of button | `large` \| `small` | medium |
| target | same as target attribute of a, works when href is specified | string | - |
| type | can be set to `primary` `secondary` `shadow` or omitted (meaning `default`) | string | `default` |
| onClick | set the handler to handle `click` event | (event) => void | - |
| block | option to fit button width to its parent width | boolean | `false` |

It accepts all props which native buttons support.

## FAQ

### How to remove space between 2 chinese characters

We will add one space between if Button contains two Chinese characters only. If you don't need that, you can use [ConfigProvider](/components/config-provider/#API) to set `autoInsertSpaceInButton` as `false`.

<style>
[id^=components-button-demo-] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^=components-button-demo-] .ant-btn-group > .ant-btn,
[id^=components-button-demo-] .ant-btn-group > span > .ant-btn {
  margin-right: 0;
}
[data-theme="dark"] .site-button-ghost-wrapper {
  background: rgba(255, 255, 255, 0.2);
}
</style>
