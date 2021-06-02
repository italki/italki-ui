import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface SelectionProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
  prefixCls?: string;
  className?: string;
  checked?: boolean;
  size?: 'small' | undefined;
  type?: 'item' | 'button';
  onChange?: (checked: boolean) => void;
}

class Selection extends React.Component<SelectionProps> {
  getSelectionClassName({ getPrefixCls }: ConfigConsumerProps) {
    const { prefixCls: customizePrefixCls, className, checked, type, size } = this.props;
    const prefixCls = getPrefixCls('selection', customizePrefixCls);
    return classNames(
      prefixCls,
      {
        [`${prefixCls}-${type}`]: type === 'item' || type === 'button',
        [`${prefixCls}-${type}-${size}`]: size === 'small',
        [`${prefixCls}-${type}-checked`]: checked,
      },
      className,
    );
  }

  handleClick = () => {
    const { checked, onChange } = this.props;
    if (onChange) {
      onChange(!checked);
    }
  };

  renderSelection = (configProps: ConfigConsumerProps) => {
    // console.log('this.props---------', this.props);
    const { children, ...otherProps } = this.props;
    const selectionProps = omit(otherProps, ['onClose', 'prefixCls']);
    // console.log('selectionProps-------', selectionProps);
    return (
      <div
        {...selectionProps}
        onClick={this.handleClick}
        className={this.getSelectionClassName(configProps)}
      >
        {children}
      </div>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderSelection}</ConfigConsumer>;
  }
}

export default Selection;
