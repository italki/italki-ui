import * as React from 'react';
import { Link } from 'bisheng/router';

import './Logo.less';

export default () => (
  <h1>
    <Link to="/" id="logo">
      <img alt="logo" src="https://www.italki.com/static/media/logo_red.149c838d.svg" />
    </Link>
  </h1>
);
