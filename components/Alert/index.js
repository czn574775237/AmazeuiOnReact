import React, { PropTypes } from 'react';
import cx from 'classnames';

export default class Alert extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,

    type: PropTypes.oneOf([
      'success', 'warning', 'danger', 'secondary'
    ]),
    closable: PropTypes.bool,
    closeText: PropTypes.string,
    onClose: PropTypes.func
  };

  state = {
    isClosed: false
  };

  render() {
    let { type, text, closable, closeText } = this.props;
    let { isClosed } = this.state;
    return (
      isClosed ? null :
      <div className={cx('am-alert', {
        [`am-alert-${type}`]: !!type
      })}>
        {
          closable ?
          <button type="button" className="am-close"
            onClick={this._handleClick.bind(this)}>
            {
              closeText
              ? <b style={{fontSize: '12px'}}>{closeText}</b>
              : <b>&times;</b>
            }
          </button> :
          null
        }
        <p>{text}</p>
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
