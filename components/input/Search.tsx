import * as React from 'react';
import classNames from 'classnames';
import SearcSml from '@italki/icons/lib/search-sml';
import Input, { InputProps } from './Input';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';

export interface SearchProps extends InputProps {
  inputPrefixCls?: string;
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => void;
  enterButton?: React.ReactNode;
  loading?: boolean;
}

export default class Search extends React.Component<SearchProps, any> {
  static defaultProps = {
    enterButton: false,
  };

  private input: Input;

  saveInput = (node: Input) => {
    this.input = node;
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange, onSearch } = this.props;
    if (e && e.target && e.type === 'click' && onSearch) {
      onSearch((e as React.ChangeEvent<HTMLInputElement>).target.value, e);
    }
    if (onChange) {
      onChange(e);
    }
  };

  onMouseDown: React.MouseEventHandler<HTMLElement> = e => {
    if (document.activeElement === this.input.input) {
      e.preventDefault();
    }
  };

  onSearch = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {
    const { onSearch, loading, disabled } = this.props;
    if (loading || disabled) {
      return;
    }
    if (onSearch) {
      onSearch(this.input.input.value, e);
    }
  };

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  renderSearch = ({ getPrefixCls, direction }: ConfigConsumerProps) => {
    const {
      prefixCls: customizePrefixCls,
      inputPrefixCls: customizeInputPrefixCls,
      size,
      enterButton,
      className,
      ...restProps
    } = this.props;

    delete (restProps as any).onSearch;
    delete (restProps as any).loading;

    const prefixCls = getPrefixCls('input-search', customizePrefixCls);
    const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);

    let inputClassName;

    if (enterButton) {
      inputClassName = classNames(prefixCls, className, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-enter-button`]: !!enterButton,
        [`${prefixCls}-${size}`]: !!size,
      });
    } else {
      inputClassName = classNames(prefixCls, className, {
        [`${prefixCls}-rtl`]: direction === 'rtl',
      });
    }

    return (
      <Input
        onPressEnter={this.onSearch}
        {...restProps}
        size={size}
        prefixCls={inputPrefixCls}
        prefix={<SearcSml fill="#BFBFBF" />}
        onChange={this.onChange}
        ref={this.saveInput}
        className={inputClassName}
      />
    );
  };

  render() {
    return <ConfigConsumer>{this.renderSearch}</ConfigConsumer>;
  }
}
