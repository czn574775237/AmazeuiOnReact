import React from 'react';
import { Alert, Button } from '../components';

export default class ButtonPage extends React.Component {
  render() {

    let closeText = (
      <span style={{fontSize: '12px', color: '#fff'}}>不再提醒</span>
    );
    return (
      <div>
        <div>
          <Button>普通按钮</Button>
          <Button loadable>加载按钮</Button>
        </div>
        <hr />
        <div>
          <Alert text="Hello" closable />
          <Alert text="Hello" type="success" closable closeText="关闭" />
          <Alert text="Hello" type="warning" closable closeText={closeText} />
          <Alert text="Hello" type="danger" />
          <Alert text="Hello" type="secondary" closable closeText="隐藏">
            <h3>共同渡过</h3>
            <p>《共同渡过》是张国荣1987年发行的专辑《Summer Romance》中的一首歌。</p>
            <ul>
              <li>若我可再活多一次都盼</li>
              <li>再可以在路途重逢着你</li>
              <li>共去写一生的句子</li>
              <li>若我可再活多一次千次</li>
              <li>我都盼面前仍是你</li>
              <li>我要他生都有今生的暖意</li>
            </ul>
          </Alert>
        </div>
      </div>
    );
  }
}
