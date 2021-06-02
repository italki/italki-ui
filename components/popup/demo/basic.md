---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法，浮层的大小由内容区域决定。

## en-US

The most basic example. The size of the floating layer depends on the contents region.

```jsx
import { Popup, Button } from '@italki/ui';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <Popup popup={content}>
    <Button type="primary">Hover me</Button>
  </Popup>,
  mountNode,
);
```

<style>
p {
  margin: 0;
}
</style>
