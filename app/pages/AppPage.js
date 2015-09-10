import React from 'react';
import { Link } from 'react-router';
import isActive from 'react-router/lib/isActive';

if (process.env.__CLIENT__) {
  require('./AppPage.less');
}

export default class AppPage extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    location: React.PropTypes.object,
    route: React.PropTypes.object,
  };

  render() {
    let { location, route } = this.props;
    return (
      <div className="AppPage">
        <header className="am-topbar">
          <h1 className="am-topbar-brand">
            <a href="#">Amaze UI On React</a>
          </h1>

          <button className="am-topbar-btn am-topbar-toggle
            am-btn am-btn-sm am-btn-success am-show-sm-only">
            <span className="am-sr-only">导航切换</span>
          </button>

          <div className="am-collapse am-topbar-collapse">
            <ul className="am-nav am-nav-pills am-topbar-nav">
              <IsActiveRoute path="/" location={location} route={route}>
                <Link to="/" activeClassName="am-active">首页</Link>
              </IsActiveRoute>
              <IsActiveRoute path="/btn" location={location} route={route}>
                <Link to="/btn" activeClassName="am-active">警告框</Link>
              </IsActiveRoute>
            </ul>

            <div className="am-topbar-right">
              <button
                className="am-btn am-btn-primary
                am-topbar-btn am-btn-sm">登录</button>
            </div>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
}


class IsActiveRoute extends React.Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    location: React.PropTypes.object.isRequired,
    route:  React.PropTypes.object.isRequired,
    path: React.PropTypes.string.isRequired,
  };

  render() {
    let { path, location, route } = this.props;
    let { query, params } = location;
    let activeClassName =
      isActive(path, query, false, location, route, params)
      ? 'am-active' : '';

    return (
      <li className={activeClassName}>
        {this.props.children}
      </li>
    );
  }
}
