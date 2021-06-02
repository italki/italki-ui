import * as React from 'react';
import classNames from 'classnames';

import PanelHeader from './PanelHeader';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface PanelProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  extra?: React.ReactNode;
  title?: string | React.ReactNode;
  divider?: boolean;
  onTitleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function Panel({ children, size = 'medium', divider, extra, title, onTitleClick }: PanelProps) {
  let sizeCls = 'md';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }

  return (
    <ConfigConsumer>
      {({ getPrefixCls }: ConfigConsumerProps) => {
        const prefixCls = getPrefixCls('panel');
        return (
          <div className={classNames(prefixCls, `${prefixCls}-${sizeCls}`)}>
            {title && (
              <PanelHeader
                extra={extra}
                title={title}
                divider={divider}
                onTitleClick={onTitleClick}
              />
            )}
            <div className={`${prefixCls}-container`}>{children}</div>
          </div>
        );
      }}
    </ConfigConsumer>
  );
}

export default Panel;
