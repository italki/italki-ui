import * as React from 'react';
import Successful from '@italki/icons/lib/successful';
import Warning from '@italki/icons/lib/warning';
import Information from '@italki/icons/lib/information';
import Error from '@italki/icons/lib/error';
import classNames from 'classnames';

import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import getDataOrAriaProps from '../_util/getDataOrAriaProps';

export interface AlertProps {
  /**
   * Type of Alert styles, options:`success`, `info`, `warning`, `error`
   */
  type?: 'success' | 'info' | 'warning' | 'error';
  /** Content of Alert */
  message: React.ReactNode;
  /** Additional content of Alert */
  description?: React.ReactNode;
  /** Whether to show icon */
  showIcon?: boolean;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  icon?: React.ReactNode;
}

const icons = {
  success: Successful,
  info: Information,
  error: Error,
  warning: Warning,
};

export default class Alert extends React.Component<AlertProps> {
  renderAlert = ({ getPrefixCls, direction }: ConfigConsumerProps) => {
    const {
      description,
      prefixCls: customizePrefixCls,
      message,
      className = '',
      style,
      icon,
    } = this.props;
    const { showIcon } = this.props;
    let { type } = this.props;

    const prefixCls = getPrefixCls('alert', customizePrefixCls);

    type = type === undefined ? 'warning' : type || 'info';

    // use outline icon in alert with description
    const iconType = icons[type] || null;

    const alertCls = classNames(
      prefixCls,
      `${prefixCls}-${type}`,
      {
        [`${prefixCls}-with-description`]: !!description,
        [`${prefixCls}-no-icon`]: !showIcon,
        [`${prefixCls}-rtl`]: direction === 'rtl',
      },
      className,
    );

    const dataOrAriaProps = getDataOrAriaProps(this.props);

    const iconNode =
      (icon &&
        (React.isValidElement<{ className?: string }>(icon) ? (
          React.cloneElement(icon, {
            className: classNames(`${prefixCls}-icon`, {
              [icon.props.className as string]: icon.props.className,
            }),
          })
        ) : (
          <span className={`${prefixCls}-icon`}>{icon}</span>
        ))) ||
      React.createElement(iconType, { className: `${prefixCls}-icon` });

    return (
      <div className={alertCls} style={style} {...dataOrAriaProps}>
        {showIcon ? iconNode : null}
        <span className={`${prefixCls}-message`}>{message}</span>
        <span className={`${prefixCls}-description`}>{description}</span>
      </div>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderAlert}</ConfigConsumer>;
  }
}
