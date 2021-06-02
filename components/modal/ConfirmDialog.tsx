import * as React from 'react';
import classNames from 'classnames';
import Dialog, { ModalFuncProps } from './Modal';
import ActionButton from './ActionButton';
import SizeContext, { SizeType } from '../config-provider/SizeContext';

interface ConfirmDialogProps extends ModalFuncProps {
  afterClose?: () => void;
  close: (...args: any[]) => void;
  autoFocusButton?: null | 'ok' | 'cancel';
  size?: SizeType;
}

const ConfirmDialog = (props: ConfirmDialogProps) => {
  const {
    onCancel,
    onOk,
    close,
    zIndex,
    afterClose,
    visible,
    keyboard,
    centered,
    getContainer,
    maskStyle,
    okText,
    okButtonProps,
    cancelText,
    cancelButtonProps,
    size: customizeSize,
  } = props;

  const okType = props.okType || 'secondary';
  const prefixCls = props.prefixCls || 'ant-modal';
  const contentPrefixCls = `${prefixCls}-confirm`;
  // 默认为 true，保持向下兼容
  const okCancel = 'okCancel' in props ? props.okCancel! : true;
  const width = props.width || 416;
  const style = props.style || {};
  const mask = props.mask === undefined ? true : props.mask;
  // 默认为 false，保持旧版默认行为
  const maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  const transitionName = props.transitionName || 'zoom';
  const maskTransitionName = props.maskTransitionName || 'fade';

  const classString = classNames(
    contentPrefixCls,
    `${contentPrefixCls}-${props.type}`,
    props.className,
  );

  const cancelButton = okCancel && (
    <ActionButton
      actionFn={onCancel}
      closeModal={close}
      autoFocus={autoFocusButton === 'cancel'}
      buttonProps={cancelButtonProps}
    >
      {cancelText}
    </ActionButton>
  );

  return (
    <SizeContext.Consumer>
      {size => {
        const mergedSize = customizeSize || size;
        let prefixSizeCls = prefixCls;
        switch (mergedSize) {
          case 'large':
            prefixSizeCls = `${prefixSizeCls}-lg`;
            break;
          case 'small':
            prefixSizeCls = `${prefixSizeCls}-sm`;
            break;
          default:
            break;
        }
        return (
          <Dialog
            prefixCls={prefixSizeCls}
            className={classString}
            wrapClassName={classNames({ [`${contentPrefixCls}-centered`]: !!props.centered })}
            onCancel={() => close({ triggerCancel: true })}
            visible={visible}
            title=""
            transitionName={transitionName}
            footer=""
            maskTransitionName={maskTransitionName}
            mask={mask}
            maskClosable={maskClosable}
            maskStyle={maskStyle}
            style={style}
            width={width}
            zIndex={zIndex}
            afterClose={afterClose}
            keyboard={keyboard}
            centered={centered}
            getContainer={getContainer}
          >
            <div className={`${contentPrefixCls}-body-wrapper`}>
              <div className={`${contentPrefixCls}-body`}>
                {props.title === undefined ? null : (
                  <span className={`${contentPrefixCls}-title`}>{props.title}</span>
                )}
                <div className={`${contentPrefixCls}-content`}>{props.content}</div>
              </div>
              <div className={`${contentPrefixCls}-btns`}>
                {cancelButton}
                <ActionButton
                  type={okType}
                  actionFn={onOk}
                  closeModal={close}
                  autoFocus={autoFocusButton === 'ok'}
                  buttonProps={okButtonProps}
                >
                  {okText}
                </ActionButton>
              </div>
            </div>
          </Dialog>
        );
      }}
    </SizeContext.Consumer>
  );
};

export default ConfirmDialog;
