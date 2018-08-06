import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Input from '../common/Input';

export default class Login extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <div className="page">
        <Card styles={{
          width: 400,
          height: 250,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Input
            placeholder="email"
            styles={{ marginBottom: 20 }}
          />
          <Input
            placeholder="password"
            type="password"
            styles={{ marginBottom: 20 }}
          />
          <Button
            label="login"
            onClick={() => history.push('timers')}
          />
        </Card>
      </div>
    );
  }
}
