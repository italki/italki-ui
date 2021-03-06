import * as React from 'react';
import ResizableTextArea, { AutoSizeType } from './ResizableTextArea';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import { fixControlledValue, resolveOnChange } from './Input';

export type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface TextAreaProps extends HTMLTextareaProps {
  prefixCls?: string;
  autoSize?: boolean | AutoSizeType;
  onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  allowClear?: boolean;
  onResize?: (size: { width: number; height: number }) => void;
}

export interface TextAreaState {
  value: any;
}

class TextArea extends React.Component<TextAreaProps, TextAreaState> {
  resizableTextArea: ResizableTextArea;

  constructor(props: TextAreaProps) {
    super(props);
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value,
    };
  }

  static getDerivedStateFromProps(nextProps: TextAreaProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  getValue() {
    return this.resizableTextArea.textArea.value;
  }

  setValue(value: string, callback?: () => void) {
    if (!('value' in this.props)) {
      this.setState({ value }, callback);
    }
  }

  focus = () => {
    this.resizableTextArea.textArea.focus();
  };

  blur() {
    this.resizableTextArea.textArea.blur();
  }

  saveTextArea = (resizableTextArea: ResizableTextArea) => {
    this.resizableTextArea = resizableTextArea;
  };

  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setValue(e.target.value, () => {
      this.resizableTextArea.resizeTextarea();
    });
    resolveOnChange(this.resizableTextArea.textArea, e, this.props.onChange);
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { onPressEnter, onKeyDown } = this.props;
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  renderTextArea = ({ getPrefixCls }: ConfigConsumerProps) => {
    const { value } = this.state;
    const { maxLength, prefixCls: customizePrefixCls } = this.props;
    const prefixCls = getPrefixCls('input', customizePrefixCls);
    return (
      <label className={`textarea-custom ${prefixCls}`}>
        <ResizableTextArea
          {...this.props}
          value={fixControlledValue(value)}
          prefixCls={prefixCls}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          ref={this.saveTextArea}
        />
        {maxLength && (
          <p className="textarea-count">
            {value ? value.length : 0}&nbsp;/&nbsp;{maxLength}
          </p>
        )}
      </label>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderTextArea}</ConfigConsumer>;
  }
}

export default TextArea;
