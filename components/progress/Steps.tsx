import * as React from 'react';
import { ProgressProps, ProgressSize } from './progress';

interface StepsProps extends ProgressProps {
  steps: number;
  size?: ProgressSize;
}

const Steps: React.SFC<StepsProps> = props => {
  const {
    size = 'default',
    steps,
    percent = 0,
    strokeWidth = size === 'small' ? 8 : 4,
    strokeColor,
    prefixCls,
    children,
  } = props;
  const getStyledSteps = () => {
    const current = Math.floor(steps * (percent / 100));
    const styleSteps = [];
    for (let i = 0; i < steps; i++) {
      let color;
      let stepWidth = size === 'small' ? 2 : 10;
      if (i <= current - 1) {
        color = strokeColor;
        if (i === current - 1 && size !== 'small') {
          stepWidth *= 2;
        }
      }
      const stepStyle = {
        backgroundColor: `${color}`,
        width: `${stepWidth}px`,
        height: `${strokeWidth}px`,
      };
      styleSteps.push(<div key={i} className={`${prefixCls}-steps-item`} style={stepStyle} />);
    }
    return styleSteps;
  };
  return (
    <div className={`${prefixCls}-steps-outer`}>
      {getStyledSteps()}
      {children}
    </div>
  );
};

export default Steps;
