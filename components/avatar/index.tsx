import * as React from 'react';
import classNames from 'classnames';
import Flag from '@italki/flags';
import DefaultAvatar from './defaultAvatar';

import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import warning from '../_util/warning';

export interface AvatarProps {
  /** Shape of avatar, options:`circle`, `square` */
  shape?: 'circle' | 'square';
  /*
   * Size of avatar, options: `large`, `small`, `default`
   * or a custom number size
   * */
  size: number;
  /** Src of image avatar */
  src?: string;
  /** icon to be used in avatar */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  children?: React.ReactNode;
  alt?: string;
  country?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  /* callback when img load error */
  /* return false to prevent Avatar show default fallback behavior, then you can do fallback by your self */
  onError?: () => boolean;
}

export interface AvatarState {
  scale: number;
  mounted: boolean;
  isImgExist: boolean;
}

export default class Avatar extends React.Component<AvatarProps, AvatarState> {
  static defaultProps = {
    shape: 'circle' as AvatarProps['shape'],
    size: 40 as AvatarProps['size'],
  };

  state = {
    scale: 1,
    mounted: false,
    isImgExist: true,
  };

  private avatarNode: HTMLElement;

  private avatarChildren: HTMLElement;

  private lastChildrenWidth: number;

  private lastNodeWidth: number;

  componentDidMount() {
    this.setScale();
    this.setState({ mounted: true });
  }

  componentDidUpdate(prevProps: AvatarProps) {
    this.setScale();
    if (prevProps.src !== this.props.src) {
      this.setState({ isImgExist: true, scale: 1 });
    }
  }

  setScale = () => {
    if (!this.avatarChildren || !this.avatarNode) {
      return;
    }
    const childrenWidth = this.avatarChildren.offsetWidth; // offsetWidth avoid affecting be transform scale
    const nodeWidth = this.avatarNode.offsetWidth;
    // denominator is 0 is no meaning
    if (
      childrenWidth === 0 ||
      nodeWidth === 0 ||
      (this.lastChildrenWidth === childrenWidth && this.lastNodeWidth === nodeWidth)
    ) {
      return;
    }
    this.lastChildrenWidth = childrenWidth;
    this.lastNodeWidth = nodeWidth;
    // add 4px gap for each side to get better performance
    this.setState({
      scale: nodeWidth - 8 < childrenWidth ? (nodeWidth - 8) / childrenWidth : 1,
    });
  };

  handleImgLoadError = () => {
    const { onError } = this.props;
    const errorFlag = onError ? onError() : undefined;
    if (errorFlag !== false) {
      this.setState({ isImgExist: false });
    }
  };

  renderAvatar = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls: customizePrefixCls,
      shape,
      size,
      src,
      icon,
      className,
      alt,
      country,
      ...others
    } = this.props;

    warning(
      !(typeof icon === 'string' && icon.length > 2),
      'Avatar',
      `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${icon}\` at https://ant.design/components/icon`,
    );

    const { isImgExist, scale, mounted } = this.state;

    const prefixCls = getPrefixCls('avatar', customizePrefixCls);

    const classString = classNames(prefixCls, className, {
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-image`]: src && isImgExist,
      [`${prefixCls}-icon`]: icon,
    });

    const sizeStyle: React.CSSProperties =
      typeof size === 'number'
        ? {
            width: size,
            height: size,
            lineHeight: `${size}px`,
            fontSize: icon ? size / 2 : 18,
          }
        : {};

    let { children } = this.props;
    if (src && isImgExist) {
      let imgSrc;
      if (/http[s]?:\/\//.test(src)) {
        imgSrc = src;
      } else {
        imgSrc = `${process.env.REACT_APP_AVATAR_CDN}/${src}_Avatar.jpg`;
      }

      children = <img src={imgSrc} onError={this.handleImgLoadError} alt={alt} />;
    } else if (icon) {
      children = icon;
    } else if (!isImgExist) {
      children = <DefaultAvatar size={size} />;
    } else {
      const childrenNode = this.avatarChildren;
      if (childrenNode || scale !== 1) {
        const transformString = `scale(${scale}) translateX(-50%)`;
        const childrenStyle: React.CSSProperties = {
          msTransform: transformString,
          WebkitTransform: transformString,
          transform: transformString,
        };

        const sizeChildrenStyle: React.CSSProperties =
          typeof size === 'number'
            ? {
                lineHeight: `${size}px`,
              }
            : {};
        children = children ? (
          <span
            className={`${prefixCls}-string`}
            ref={(node: HTMLElement) => (this.avatarChildren = node)}
            style={{ ...sizeChildrenStyle, ...childrenStyle }}
          >
            {children}
          </span>
        ) : (
          <DefaultAvatar size={size} />
        );
      } else {
        const childrenStyle: React.CSSProperties = {};
        if (!mounted) {
          childrenStyle.opacity = 0;
        }

        children = children ? (
          <span
            className={`${prefixCls}-string`}
            style={{ opacity: 0 }}
            ref={(node: HTMLElement) => (this.avatarChildren = node)}
          >
            {children}
          </span>
        ) : (
          <DefaultAvatar size={size} />
        );
      }
    }

    const isLargest = typeof size === 'number' && size >= 120;
    return (
      <>
        <span
          {...others}
          style={{ ...sizeStyle, ...others.style }}
          className={classString}
          ref={(node: HTMLElement) => (this.avatarNode = node)}
        >
          {children}
          {!!country && (
            <Flag
              style={{
                right: isLargest ? 8 : 0,
              }}
              country={country}
              width={typeof size === 'number' && size < 64 ? 16 : 24}
              height={typeof size === 'number' && size < 64 ? 16 : 24}
              className={`${prefixCls}-flag`}
            />
          )}
        </span>
      </>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderAvatar}</ConfigConsumer>;
  }
}
