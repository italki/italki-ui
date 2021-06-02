---
order: 3
title:
  zh-CN: 从浮层内关闭
  en-US: Controlling the close of the dialog
---

## zh-CN

使用 `visible` 属性控制浮层显示。

## en-US

Use `visible` prop to control the display of the card.

```jsx
import { Popup, Button } from '@italki/ui';

class App extends React.Component {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    return (
      <Popup
        popup={<a onClick={this.hide}>Close</a>}
        action="click"
        popupVisible={this.state.visible}
        onPopupVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popup>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
