import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';
import { Row, Col, Affix, Tooltip } from 'antd';
import { getChildren } from 'jsonml.js/lib/utils';
import { CodeFilled, CodeOutlined, BugFilled, BugOutlined } from '@ant-design/icons';
import Demo from './Demo';
import { ping } from '../utils';

class ComponentDoc extends React.Component {
  state = {
    expandAll: false,
    visibleAll: process.env.NODE_ENV !== 'production',
    showRiddleButton: false,
  };

  componentDidMount() {
    const { demos = {}, location = {} } = this.props;
    if (location.hash) {
      const demoKey = location.hash.split('-demo-')[1];
      const demoData = demos[demoKey];
      if (demoData && demoData.meta && demoData.meta.debug) {
        this.setState({ visibleAll: true });
      }
    }
    this.pingTimer = ping(status => {
      if (status !== 'timeout' && status !== 'error') {
        this.setState({
          showRiddleButton: true,
        });
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { location, theme } = this.props;
    const { location: nextLocation, theme: nextTheme } = nextProps;
    const { expandAll, visibleAll, showRiddleButton } = this.state;
    const {
      expandAll: nextExpandAll,
      visibleAll: nextVisibleAll,
      showRiddleButton: nextShowRiddleButton,
    } = nextState;

    if (
      nextLocation.pathname === location.pathname &&
      expandAll === nextExpandAll &&
      showRiddleButton === nextShowRiddleButton &&
      theme === nextTheme &&
      visibleAll === nextVisibleAll &&
      showRiddleButton === nextShowRiddleButton
    ) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    clearTimeout(this.pingTimer);
  }

  handleExpandToggle = () => {
    const { expandAll } = this.state;
    this.setState({
      expandAll: !expandAll,
    });
  };

  handleVisibleToggle = () => {
    const { visibleAll } = this.state;
    this.setState({
      visibleAll: !visibleAll,
    });
  };

  render() {
    const {
      doc,
      location,
      intl: { locale },
      utils,
      theme,
      setIframeTheme,
      demos,
    } = this.props;
    const { content, meta } = doc;
    const demoValues = Object.keys(demos).map(key => demos[key]);
    const { expandAll, visibleAll, showRiddleButton } = this.state;
    const children = [];
    let showedDemo = demoValues.some(demo => demo.meta.only)
      ? demoValues.filter(demo => demo.meta.only)
      : demoValues.filter(demo => demo.preview);
    if (!visibleAll) {
      showedDemo = showedDemo.filter(item => !item.meta.debug);
    }
    showedDemo
      .sort((a, b) => a.meta.order - b.meta.order)
      .forEach(demoData => {
        const demoElem = (
          <Demo
            {...demoData}
            key={demoData.meta.filename}
            utils={utils}
            expand={expandAll}
            location={location}
            theme={theme}
            setIframeTheme={setIframeTheme}
          />
        );
        children.push(demoElem);
      });
    const expandTriggerClass = classNames({
      'code-box-expand-trigger': true,
      'code-box-expand-trigger-active': expandAll,
    });

    const jumper = showedDemo.map(demo => {
      const { title } = demo.meta;
      const localizeTitle = title[locale] || title;
      return (
        <li key={demo.meta.id} title={localizeTitle}>
          <a href={`#${demo.meta.id}`}>{localizeTitle}</a>
        </li>
      );
    });

    const { title, subtitle } = meta;
    const articleClassName = classNames({
      'show-riddle-button': showRiddleButton,
    });
    const helmetTitle = `${subtitle || ''} ${title[locale] || title}`;

    return (
      <article className={articleClassName}>
        <Helmet encodeSpecialCharacters={false}>
          {helmetTitle && <title>{helmetTitle}</title>}
        </Helmet>
        <Affix className="toc-affix" offsetTop={16}>
          <ul id="demo-toc" className="toc">
            {jumper}
            {doc.api && (
              <li key="API" title="API">
                <a href="#API">API</a>
              </li>
            )}
          </ul>
        </Affix>
        <section className="markdown">
          <h1>
            {title[locale] || title}
            {!subtitle ? null : <span className="subtitle">{subtitle}</span>}
          </h1>
          {utils.toReactComponent(
            ['section', { className: 'markdown' }].concat(getChildren(content)),
          )}
          <h2>
            <FormattedMessage id="app.component.examples" />
            <span className="all-code-box-controls">
              <Tooltip
                title={
                  <FormattedMessage
                    id={`app.component.examples.${expandAll ? 'collapse' : 'expand'}`}
                  />
                }
              >
                {expandAll ? (
                  <CodeFilled className={expandTriggerClass} onClick={this.handleExpandToggle} />
                ) : (
                  <CodeOutlined className={expandTriggerClass} onClick={this.handleExpandToggle} />
                )}
              </Tooltip>
              <Tooltip
                title={
                  <FormattedMessage
                    id={`app.component.examples.${visibleAll ? 'hide' : 'visible'}`}
                  />
                }
              >
                {visibleAll ? (
                  <BugFilled className={expandTriggerClass} onClick={this.handleVisibleToggle} />
                ) : (
                  <BugOutlined className={expandTriggerClass} onClick={this.handleVisibleToggle} />
                )}
              </Tooltip>
            </span>
          </h2>
        </section>
        <Row gutter={16}>
          <Col span={24} className="code-boxes-col-1-1">
            {children}
          </Col>
        </Row>
        {utils.toReactComponent(
          [
            'section',
            {
              className: 'markdown api-container',
            },
          ].concat(getChildren(doc.api || ['placeholder'])),
        )}
      </article>
    );
  }
}

export default injectIntl(ComponentDoc);
