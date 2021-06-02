---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基础分页。

## en-US

Basic panel.

```jsx
import { Button, Panel } from '@italki/ui';

ReactDOM.render(
  <div>
    <Panel>Panel body</Panel>
    <Panel title="Panel title">Panel body</Panel>
    <Panel divider title="Panel title">
      Panel body
    </Panel>
    <Panel divider title="Panel title" onTitleClick={() => {}}>
      Panel body
    </Panel>
    <Panel divider title="Panel title" onTitleClick={() => {}} extra={<Button>Button</Button>}>
      Panel body
    </Panel>
  </div>,
  mountNode,
);
```
