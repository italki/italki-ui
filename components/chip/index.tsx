import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface ChipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
  prefixCls?: string;
  className?: string;
  checked?: boolean;
  size?: 'small' | undefined;
  onChange?: (checked: boolean) => void;
}

class Chip extends React.Component<ChipProps> {
  getChipClassName({ getPrefixCls }: ConfigConsumerProps) {
    const { prefixCls: customizePrefixCls, className, checked, size } = this.props;
    const prefixCls = getPrefixCls('chip', customizePrefixCls);
    return classNames(
      prefixCls,
      {
        [`${prefixCls}-${size}`]: size === 'small',
        [`${prefixCls}-checked`]: checked,
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

  renderChip = (configProps: ConfigConsumerProps) => {
    const { children, ...otherProps } = this.props;
    const chipProps = omit(otherProps, ['onClose', 'prefixCls']);
    return (
      <span
        {...chipProps}
        onClick={this.handleClick}
        className={this.getChipClassName(configProps)}
      >
        {children}
      </span>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderChip}</ConfigConsumer>;
  }
}

export default Chip;
