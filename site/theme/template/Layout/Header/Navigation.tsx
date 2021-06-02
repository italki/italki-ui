import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Link } from 'bisheng/router';
import { Menu } from 'antd';

import './Navigation.less';

export interface NavigationProps {
  isMobile: boolean;
  pathname: string;
  responsive: null | 'narrow' | 'crowded';
  location: { pathname: string };
}

export default ({ isMobile, pathname, location }: NavigationProps) => {
  const menuMode = isMobile ? 'inline' : 'horizontal';

  const module = pathname
    .split('/')
    .slice(0, -1)
    .join('/');
  let activeMenuItem = module || 'home';
  if (location.pathname === 'changelog' || location.pathname === 'changelog-cn') {
    activeMenuItem = 'docs/react';
  }

  return (
    <Menu
      className={classNames('menu-site')}
      mode={menuMode}
      selectedKeys={[activeMenuItem]}
      id="nav"
    >
      {/* <Menu.Item key="docs/react">
        <Link to="/docs/react/introduce">
          <FormattedMessage id="app.header.menu.documentation" />
        </Link>
      </Menu.Item> */}
      <Menu.Item key="components">
        <Link to="/components/button/">
          <FormattedMessage id="app.header.menu.components" />
        </Link>
      </Menu.Item>
    </Menu>
  );
};
