---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

第一个对话框。

## en-US

Basic modal.

```jsx
import { Modal, Button } from '@italki/ui';

class App extends React.Component {
  state = {
    visible: false,
    noTitleVisible: false,
    noFooterVisible: false,
    responsiveVisible: false,
    fullscreenVisible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  showHasNoTitleModal = () => {
    this.setState({
      noTitleVisible: true,
    });
  };

  showHasNoFooterModal = () => {
    this.setState({
      noFooterVisible: true,
    });
  };

  showResponsiveModal = () => {
    this.setState({
      responsiveVisible: true,
    });
  };

  showFullscreenModal = () => {
    this.setState({
      fullscreenVisible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleNoTitleOk = () => {
    this.setState({
      noTitleVisible: false,
    });
  };

  handleNoTitleCancel = () => {
    this.setState({
      noTitleVisible: false,
    });
  };

  handleNoFooterOk = () => {
    this.setState({
      noFooterVisible: false,
    });
  };

  handleNoFooterCancel = () => {
    this.setState({
      noFooterVisible: false,
    });
  };

  handleResponsiveOk = () => {
    this.setState({
      responsiveVisible: false,
    });
  };

  handleResponsiveCancel = () => {
    this.setState({
      responsiveVisible: false,
    });
  };

  handleFullscreenOk = () => {
    this.setState({
      fullscreenVisible: false,
    });
  };

  handleFullscreenCancel = () => {
    this.setState({
      fullscreenVisible: false,
    });
  };

  render() {
    return (
      <div>
        <div>
          <Button type="primary" onClick={this.showModal}>
            Open Basic Modal
          </Button>
        </div>
        <br />
        <div>
          <Button type="primary" onClick={this.showHasNoTitleModal}>
            Open no title Modal
          </Button>
        </div>
        <br />
        <div>
          <Button type="primary" onClick={this.showHasNoFooterModal}>
            Open no footer Modal
          </Button>
        </div>
        <br />
        <div>
          <Button type="primary" onClick={this.showResponsiveModal}>
            Open Responsive Modal
          </Button>
        </div>
        <br />
        <div>
          <Button type="primary" onClick={this.showFullscreenModal}>
            Open Fullscreen Modal
          </Button>
        </div>

        {/*title不传默认没有，footer不传默认有cancel和confirm按钮*/}
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer=""
        >
          <p>Has no title and footer...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          visible={this.state.noTitleVisible}
          onOk={this.handleNoTitleOk}
          onCancel={this.handleNoTitleCancel}
          footerNoDivider
        >
          <p>Has no title but has footer...</p>
          <p>Footer has no divider line...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Has No Footer"
          footer=""
          visible={this.state.noFooterVisible}
          onOk={this.handleNoFooterOk}
          onCancel={this.handleNoFooterCancel}
        >
          <p>Has title and no footer</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          responsive
          title="Responsive Modal"
          visible={this.state.responsiveVisible}
          onOk={this.handleResponsiveOk}
          onCancel={this.handleResponsiveCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          fullscreen
          title="Fullscreen Modal"
          visible={this.state.fullscreenVisible}
          onOk={this.handleFullscreenOk}
          onCancel={this.handleFullscreenCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

<style>
.ant-modal p {
  margin: 0;
}
</style>
