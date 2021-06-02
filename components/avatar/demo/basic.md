---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

Profile pics and more in general user avatars appear often on the italki pages: profile pic, teacher pic, contact lists card… It’s important to identify the possible characteristics of these pics, considering that according to the situation and the screen size they could appear in different dimensions or with different characteristics.

```tsx
import { Avatar } from '@italki/ui';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <div>
    <div>
      <Avatar size={120} />
      <Avatar size={80} />
      <Avatar size={64} />
      <Avatar size={56} />
      <Avatar size={48} />
      <Avatar size={40} />
      <Avatar size={32} />
    </div>
    <div>
      <Avatar country="us" size={120} />
      <Avatar country="cn" size={80} />
      <Avatar country="ad" size={64} />
      <Avatar country="ke" size={56} />
      <Avatar country="kh" size={48} />
      <Avatar country="la" size={40} />
    </div>
  </div>,
  mountNode,
);
```

<style>
#components-avatar-demo-basic .ant-avatar {
  margin-top: 16px;
  margin-right: 16px;
}
</style>
