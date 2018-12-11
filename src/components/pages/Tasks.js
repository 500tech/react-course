import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTask, toggleTask } from '../../redux/actions/tasks.actions';

// components
import Progress from '../common/Progress';
import Input from '../common/Input';
import Card from '../common/Card';
import List from '../List';

class Tasks extends React.Component {
  // static propTypes = {};
  updateRow = (id, checked) => this.props.toggleTask(id, checked);

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  handleKeyDown = e => {
    if (e.which === 13) {
      const task = {
        id: this.uuid(),
        label: e.target.value,
        checked: false
      };

      // dispatch redux action
      this.props.addTask(task);

      this.input.value = '';
    }
  };

  handleRef = el => this.input = el;

  render() {
    const { data } = this.props;
    const totalChecked = data.filter(item => item.checked).length;

    return (
      <Container>
        <Box>
          <Title>my tasks</Title>
          <Progress
            value={totalChecked / data.length * 100}
            margin="0 0 20px 0"
          />
          <Input
            margin="0 0 20px 0"
            onKeyDown={this.handleKeyDown}
            onRef={this.handleRef}
          />
          <Card>
            <List data={data} updateRow={this.updateRow} />
          </Card>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.tasks
});

export default connect(
  mapStateToProps,
  { addTask, toggleTask }
)(Tasks);

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

const Box = styled.div`
  width: 30vw;
  min-height: 100px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 300;
  text-transform: capitalize;
  margin-bottom: 40px;
`;

