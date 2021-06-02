import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModalFuncProps, destroyFns } from './Modal';
import ConfirmDialog from './ConfirmDialog';

export type ModalFunc = (
  props: ModalFuncProps,
) => {
  destroy: () => void;
  update: (newConfig: ModalFuncProps) => void;
};

export interface ModalStaticFunctions {
  info: ModalFunc;
  success: ModalFunc;
  error: ModalFunc;
  warn: ModalFunc;
  warning: ModalFunc;
  confirm: ModalFunc;
}

export default function confirm(config: ModalFuncProps) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  // eslint-disable-next-line no-use-before-define
  let currentConfig = { ...config, close, visible: true } as any;

  function destroy(...args: any[]) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    const triggerCancel = args.some(param => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel(...args);
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      // eslint-disable-next-line no-use-before-define
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  function render({ okText, cancelText, ...props }: any) {
    ReactDOM.render(
      <ConfirmDialog {...props} okText={okText || 'OK'} cancelText={cancelText || 'Cancel'} />,
      div,
    );
  }

  function close(...args: any[]) {
    currentConfig = {
      ...currentConfig,
      visible: false,
      afterClose: destroy.bind(this, ...args),
    };
    render(currentConfig);
  }

  function update(newConfig: ModalFuncProps) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };
    render(currentConfig);
  }

  render(currentConfig);

  destroyFns.push(close);

  return {
    destroy: close,
    update,
  };
}

export function withWarn(props: ModalFuncProps): ModalFuncProps {
  return {
    type: 'warning',
    okCancel: false,
    ...props,
  };
}

export function withInfo(props: ModalFuncProps): ModalFuncProps {
  return {
    type: 'info',
    okCancel: false,
    ...props,
  };
}

export function withSuccess(props: ModalFuncProps): ModalFuncProps {
  return {
    type: 'success',
    okCancel: false,
    ...props,
  };
}

export function withError(props: ModalFuncProps): ModalFuncProps {
  return {
    type: 'error',
    okCancel: false,
    ...props,
  };
}

export function withConfirm(props: ModalFuncProps): ModalFuncProps {
  return {
    type: 'confirm',
    okCancel: true,
    ...props,
  };
}
