---
order: 1
title:
  zh-CN: 三种触发方式
  en-US: Three ways to trigger
---

## zh-CN

鼠标移入、聚集、点击。

## en-US

Mouse to click, focus and move in.

```jsx
import { Popup, Button } from '@italki/ui';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <div>
    <Popup popup={content} action="hover">
      <Button>Hover me</Button>
    </Popup>
    <Popup popup={content} action="focus">
      <Button>Focus me</Button>
    </Popup>
    <Popup popup={content} action="click">
      <Button>Click me</Button>
    </Popup>
  </div>,
  mountNode,
);
```
