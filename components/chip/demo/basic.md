---
order: 7
title:
  zh-CN: 基础
  en-US: Basic
---

Usage of Chip , default size is Regular 40px height.

```jsx
import { Chip } from '@italki/ui';

class MyChip extends React.Component {
  state = { checked: false };

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <Chip checked={this.state.checked} onChange={this.handleChange}>
        40-Normal
      </Chip>
    );
  }
}

ReactDOM.render(
  <div>
    <p>Normal</p>
    <Chip>40-Normal</Chip>
    <br />
    <br />
    <p>Size small</p>
    <Chip size="small">32-small</Chip>
    <br />
    <br />
    <p>Checked</p>
    <Chip checked>40-Normal</Chip>
    <br />
    <br />
    <p>Controlled</p>
    <MyChip />
  </div>,
  mountNode,
);
```
