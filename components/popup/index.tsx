import * as React from 'react';
import Trigger, { TriggerProps } from 'rc-trigger';
import { TooltipPlacement } from '../tooltip';
import getPlacements from './placements';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

const Popup = ({
  popupPlacement = 'bottom' as TooltipPlacement,
  action = 'hover',
  popupMotion = {
    motionName: 'zoom-big',
  },
  popup,
  children,
  offset = [0, 0],
  ...props
}: { offset: [number, number] } & TriggerProps) => {
  // 动态设置动画点
  function onPopupAlign(domNode: HTMLElement, align: any) {
    const rect = domNode.getBoundingClientRect();
    const transformOrigin = {
      top: '50%',
      left: '50%',
    };
    if (popupPlacement.indexOf('top') >= 0 || popupPlacement.indexOf('Bottom') >= 0) {
      transformOrigin.top = `${rect.height - align.offset[1]}px`;
    } else if (popupPlacement.indexOf('Top') >= 0 || popupPlacement.indexOf('bottom') >= 0) {
      transformOrigin.top = `${-align.offset[1]}px`;
    }
    if (popupPlacement.indexOf('left') >= 0 || popupPlacement.indexOf('Right') >= 0) {
      transformOrigin.left = `${rect.width - align.offset[0]}px`;
    } else if (popupPlacement.indexOf('right') >= 0 || popupPlacement.indexOf('Left') >= 0) {
      transformOrigin.left = `${-align.offset[0]}px`;
    }
    domNode.style.transformOrigin = `${transformOrigin.left} ${transformOrigin.top}`;
  }

  function renderPopover({ getPrefixCls }: ConfigConsumerProps) {
    const { prefixCls: customizePrefixCls } = props;
    const prefixCls = getPrefixCls('popover', customizePrefixCls);
    return (
      <Trigger
        {...props}
        prefixCls={prefixCls}
        action={action}
        popupAlign={getPlacements(popupPlacement, offset)}
        popupTransitionName="zoom-big"
        popup={popup}
        onPopupAlign={onPopupAlign}
      >
        {children}
      </Trigger>
    );
  }

  return <ConfigConsumer>{renderPopover}</ConfigConsumer>;
};

export default Popup;
