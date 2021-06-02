import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Row, Col, Popover } from 'antd';

import * as utils from '../../utils';
import Logo from './Logo';
// import SearchBox from './SearchBox';
import Navigation from './Navigation';
import SiteContext from '../SiteContext';

import './index.less';

const RESPONSIVE_XS = 1120;
const RESPONSIVE_SM = 1200;

// let docsearch: any;
// if (typeof window !== 'undefined') {
//   docsearch = require('docsearch.js'); // eslint-disable-line
// }

// function initDocSearch() {
//   if (!docsearch) {
//     return;
//   }
//   const lang = 'en';
//   docsearch({
//     apiKey: '60ac2c1a7d26ab713757e4a081e133d0',
//     indexName: 'ant_design',
//     inputSelector: '#search-box input',
//     algoliaOptions: { facetFilters: [`tags:${lang}`] },
//     transformData(hits: { url: string }[]) {
//       hits.forEach(hit => {
//         hit.url = hit.url.replace('ant.design', window.location.host); // eslint-disable-line
//         hit.url = hit.url.replace('https:', window.location.protocol); // eslint-disable-line
//       });
//       return hits;
//     },
//     debug: false, // Set debug to true if you want to inspect the dropdown
//   });
// }

export interface HeaderProps {
  intl: {
    locale: string;
  };
  location: { pathname: string };
  themeConfig: { docVersions: Record<string, string> };
  changeDirection: (direction: string) => void;
}

interface HeaderState {
  menuVisible: boolean;
  windowWidth: number;
  searching: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    theme: PropTypes.oneOf(['default', 'dark']),
    direction: PropTypes.string,
  };

  state = {
    menuVisible: false,
    windowWidth: 1400,
    searching: false,
  };

  componentDidMount() {
    // const { intl } = this.props;
    const { router } = this.context;
    router.listen(this.handleHideMenu);
    // initDocSearch();

    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  onTriggerSearching = (searching: boolean) => {
    this.setState({ searching });
  };

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  };

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  };

  onDirectionChange = () => {
    const { changeDirection } = this.props;
    const { direction } = this.context;
    if (direction !== 'rtl') {
      changeDirection('rtl');
    } else {
      changeDirection('ltr');
    }
  };

  getNextDirectionText = () => {
    const { direction } = this.context;

    if (direction !== 'rtl') {
      return 'RTL';
    }
    return 'LTR';
  };

  onMenuVisibleChange = (visible: boolean) => {
    this.setState({
      menuVisible: visible,
    });
  };

  handleVersionChange = (url: string) => {
    const currentUrl = window.location.href;
    const currentPathname = window.location.pathname;
    window.location.href = currentUrl
      .replace(window.location.origin, url)
      .replace(currentPathname, utils.getLocalizedPathname(currentPathname));
  };

  onLangChange = () => {
    const {
      location: { pathname },
    } = this.props;
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.substr(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }

    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname)),
      );
  };

  render() {
    return (
      <SiteContext.Consumer>
        {({ isMobile }) => {
          const { menuVisible, windowWidth, searching } = this.state;
          const { location } = this.props;
          const pathname = location.pathname.replace(/(^\/|\/$)/g, '');

          const isHome = ['', 'index', 'index-cn'].includes(pathname);

          let responsive: null | 'narrow' | 'crowded' = null;
          if (windowWidth < RESPONSIVE_XS) {
            responsive = 'crowded';
          } else if (windowWidth < RESPONSIVE_SM) {
            responsive = 'narrow';
          }

          const headerClassName = classNames({
            clearfix: true,
            'home-header': isHome,
          });

          // const searchBox = (
          //   <SearchBox
          //     key="search"
          //     responsive={responsive}
          //     onTriggerFocus={this.onTriggerSearching}
          //   />
          // );

          const navigationNode = (
            <Navigation
              key="nav"
              location={location}
              responsive={responsive}
              isMobile={isMobile}
              pathname={pathname}
            />
          );

          let menu: (React.ReactElement | null)[] = [navigationNode];

          if (windowWidth < RESPONSIVE_XS) {
            menu = searching ? [] : [navigationNode];
          } else if (windowWidth < RESPONSIVE_SM) {
            menu = searching ? [] : menu;
          }

          const colProps = isHome
            ? [{ flex: 'none' }, { flex: 'auto' }]
            : [
                {
                  xxl: 4,
                  xl: 5,
                  lg: 6,
                  md: 6,
                  sm: 24,
                  xs: 24,
                },
                {
                  xxl: 20,
                  xl: 19,
                  lg: 18,
                  md: 18,
                  sm: 0,
                  xs: 0,
                },
              ];

          return (
            <header id="header" className={headerClassName}>
              {isMobile && (
                <Popover
                  overlayClassName="popover-menu"
                  placement="bottomRight"
                  content={menu}
                  trigger="click"
                  visible={menuVisible}
                  arrowPointAtCenter
                  onVisibleChange={this.onMenuVisibleChange}
                >
                  <UnorderedListOutlined className="nav-phone-icon" onClick={this.handleShowMenu} />
                </Popover>
              )}
              <Row style={{ flexFlow: 'nowrap' }}>
                <Col {...colProps[0]}>
                  <Logo />
                </Col>
                <Col {...colProps[1]} className="menu-row">
                  {!isMobile && menu}
                </Col>
              </Row>
            </header>
          );
        }}
      </SiteContext.Consumer>
    );
  }
}

export default injectIntl(Header as any);
