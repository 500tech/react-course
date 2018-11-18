import React from 'react';
import Fade from 'react-reveal/Fade';

//common
import Card from '../common/Card';
import Input from '../common/Input';
import Button from '../common/Button';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = type => event => this.setState({ [type]: event.target.value });

  authenticate = () => {
    console.log(this.state);

    this.props.history.push('/chat');
  };

  render() {
    return (
      <Fade top>
        <Card>
          <Input
            label="email"
            onChange={this.handleChange('email')}
          />
          <Input
            label="password"
            type="password"
            onChange={this.handleChange('password')}
          />
          <Button
            label="login"
            onClick={this.authenticate}
          />
        </Card>
      </Fade>
    );
  }
}

export default Login;
