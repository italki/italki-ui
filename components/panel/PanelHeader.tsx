import * as React from 'react';
import classNames from 'classnames';
import RightSml from '@italki/icons/lib/right-sml';

import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface PanelHeaderProps {
  divider?: boolean;
  extra?: React.ReactNode;
  title?: string | React.ReactNode;
  onTitleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function PanelHeader({ divider, extra, title, onTitleClick }: PanelHeaderProps) {
  return (
    <ConfigConsumer>
      {({ getPrefixCls }: ConfigConsumerProps) => {
        const prefixCls = getPrefixCls('panel-header');
        return (
          <div
            className={classNames(prefixCls, {
              [`${prefixCls}-divider`]: divider,
            })}
          >
            <div
              className={classNames(`${prefixCls}-title`, {
                [`${prefixCls}-clickable`]: !!onTitleClick,
              })}
              onClick={onTitleClick}
            >
              {title}
              {!!onTitleClick && <RightSml />}
            </div>
            {extra && <div className={`${prefixCls}-tool`}>{extra}</div>}
          </div>
        );
      }}
    </ConfigConsumer>
  );
}

export default PanelHeader;
