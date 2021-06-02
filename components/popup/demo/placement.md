---
order: 2
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有十二个方向。

## en-US

There are 12 `placement` options available.

```jsx
import { Popup, Button } from '@italki/ui';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

ReactDOM.render(
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Popup popupPlacement="topLeft" popup={content} action="click">
        <Button>TL</Button>
      </Popup>
      <Popup popupPlacement="top" popup={content} action="click">
        <Button>Top</Button>
      </Popup>
      <Popup popupPlacement="topRight" popup={content} action="click">
        <Button>TR</Button>
      </Popup>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <Popup popupPlacement="leftTop" popup={content} action="click">
        <Button>LT</Button>
      </Popup>
      <Popup popupPlacement="left" popup={content} action="click">
        <Button>Left</Button>
      </Popup>
      <Popup popupPlacement="leftBottom" popup={content} action="click">
        <Button>LB</Button>
      </Popup>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
      <Popup popupPlacement="rightTop" popup={content} action="click">
        <Button>RT</Button>
      </Popup>
      <Popup popupPlacement="right" popup={content} action="click">
        <Button>Right</Button>
      </Popup>
      <Popup popupPlacement="rightBottom" popup={content} action="click">
        <Button>RB</Button>
      </Popup>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <Popup popupPlacement="bottomLeft" popup={content} action="click">
        <Button>BL</Button>
      </Popup>
      <Popup popupPlacement="bottom" popup={content} action="click">
        <Button>Bottom</Button>
      </Popup>
      <Popup popupPlacement="bottomRight" popup={content} action="click">
        <Button>BR</Button>
      </Popup>
    </div>
  </div>,
  mountNode,
);
```

<style>
.code-box-demo .demo {
  overflow: auto;
}
.code-box-demo .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
#components-popover-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
}
</style>
