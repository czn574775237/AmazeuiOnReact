import React, { PropTypes } from 'react';
import cx from 'classnames';

export default class Button extends React.Component {

  static propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    loadingNode: PropTypes.node,

    loadable: PropTypes.bool,
    onClick: PropTypes.func
  };

  state = {
    isLoading: false
  };

  render() {
    let { href } = this.props;
    if (href) {
      return this.renderLink();
    } else {
      return this.renderButton();
    }
  }


  renderLink() {
    let { href, children } = this.props;
    return (
      <a className="am-btn am-btn-primary"
        href={this.props.href}>{children}</a>
    );
  }

  renderButton() {
    let { children, loadingNode } = this.props;
    return (
      <button className="am-btn am-btn-primary"
        onClick={this._handleClick.bind(this)}>
        {
          this.state.isLoading
          ? (loadingNode ? loadingNode : 'Loading')
          : children
        }
      </button>
    );
  }

  _handleClick() {
    let { onClick, loadable } = this.props;
    if (loadable) {
      this.setState({ isLoading: true });
    }
    if (onClick) {
      onClick.bind(this)();
    }
  }

  finish = () => {
    this.setState({ isLoading: false });
  }
}
