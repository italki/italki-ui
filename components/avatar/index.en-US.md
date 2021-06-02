---
category: Components
type: Data Display
title: Avatar
---

Avatars can be used to represent people or objects. It supports images, `Icon`s, or letters.

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| icon | custom icon type for an icon avatar | ReactNode | - |
| shape | the shape of avatar | `circle` \| `square` | `circle` |
| size | the size of the avatar | number | - |
| country | the country flag of the avatar | string | - |
| src | the address of the image for an image avatar | string | - |
| alt | This attribute defines the alternative text describing the image | string | - |
| onError | handler when img load error, return false to prevent default fallback behavior | () => boolean | - |
