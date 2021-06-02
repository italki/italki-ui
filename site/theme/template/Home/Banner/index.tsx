import * as React from 'react';
import { Typography } from 'antd';

import './index.less';

const { Title, Paragraph, Text } = Typography;

export default function Banner() {
  return (
    <div className="banner">
      <div className="hero-text">
        <Title>New Design System</Title>
        <Title>Launching Soon</Title>
        <Paragraph>
          <Text strong>STAY TUNED</Text>
        </Paragraph>
      </div>
    </div>
  );
}
