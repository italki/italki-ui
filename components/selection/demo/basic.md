---
order: 7
title:
  zh-CN: 基础
  en-US: Basic
---

Usage of Selection.

```jsx
import { Selection } from '@italki/ui';

ReactDOM.render(
  <div>
    <p>Type: item</p>
    <br />
    <Selection type="item">Normal Item</Selection>
    <br />
    <Selection type="item" checked>
      Checked Item
    </Selection>
    <br />
    <Selection type="item" disabled>
      Checked Item
    </Selection>
    <br />
    <Selection type="item" size="small">
      Small Item
    </Selection>
    <br />
    <Selection type="item" size="small" checked>
      Checked Small Item
    </Selection>
    <br />
    <Selection type="item" size="small" disabled>
      Checked Small Item
    </Selection>
    <br />
    <br />

    <p>Type: button</p>
    <br />
    <Selection type="button">Normal</Selection>
    <Selection type="button" checked>
      Checked
    </Selection>
    <Selection type="button" disabled>
      Disabled
    </Selection>
    <br />
    <br />
    <Selection type="button" size="small">
      Normal
    </Selection>
    <Selection type="button" size="small" checked>
      Checked
    </Selection>
    <Selection type="button" size="small" disabled>
      Disabled
    </Selection>
    <br />
  </div>,
  mountNode,
);
```
