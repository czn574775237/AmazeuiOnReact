import React from 'react';
import { Alert } from '../components';


if (process.env.__CLIENT__) {
  require('./IndexPage.less');
}

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="IndexPage">
        <section className="IndexPage-Section">
          <header>
            <h3>常用组件</h3>
          </header>
          <div className="IndexPage-Section-Content">
            <ul>
              <li>
                <p>警告框</p>
                <Alert text="Alert" />
                <Alert text="Hello" type="success" closable closeText="关闭" />
              </li>
            </ul>
          </div>
        </section>

        <section>
          <header>
            <h3>表单组件</h3>
          </header>

        </section>
      </div>
    );
  }
}
