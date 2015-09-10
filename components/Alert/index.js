import React, { PropTypes } from 'react';
import cx from 'classnames';

export default class Alert extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,

    type: PropTypes.oneOf([
      'success', 'warning', 'danger', 'secondary'
    ]),
    closable: PropTypes.bool,
    closeText: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
    onClose: PropTypes.func
  };

  state = {
    isClosed: false
  };

  render() {
    let {
      type, text, closable, closeText, contentNode, children
    } = this.props;
    let { isClosed } = this.state;
    let content = children ? children : <p>{text}</p>;

    let closeTextNode = closeText
      ? (isString(closeText)
         ? <b style={style.closeText}>{closeText}</b>
         : closeText)
      : <b>&times;</b>;

    return (
      isClosed ? null :
      <div className={cx('am-alert', {
        [`am-alert-${type}`]: !!type
      })}>
        {
          closable
          ? <button type="button" className="am-close"
              onClick={this._handleClick.bind(this)} style={style.closeButton}>
              { closeTextNode }
            </button>
          : null
        }
        { content }
      </div>
    );

  }

  _handleClick() {
    let { onClose } = this.props;
    if (onClose) {
      onClose();
    }
    this.setState({ isClosed: true });
  }
}

function isString(obj) {
  return toString.call(obj) === '[object String]';
}

const style = {
  closeButton: {
    minWidth: '3em',
    padding: '0 0.5em 0 0',
    textAlign: 'right'
  },
  closeText: {
    fontSize: '12px'
  }
}
