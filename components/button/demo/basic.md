---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

There are `primary` button, `default ghost` button and `text` button in antd.

```jsx
import { Button } from '@italki/ui';

ReactDOM.render(
  <div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Primary</Button>
    <Button type="primary" outlined>
      Primary Outlined
    </Button>
    <Button type="secondary" outlined>
      Secondary Outlined
    </Button>
    <Button type="primary" text>
      Text
    </Button>
    <Button type="secondary" text>
      Text
    </Button>
    <Button type="shadow">Text</Button>
    <Button type="shadow" color="#009897">
      Text
    </Button>
  </div>,
  mountNode,
);
```
