import React from 'react';
import Spinner from '../../common/Spinner';
import moment from 'moment';
import Card from '../../common/Card';

export default class Item extends React.Component {
  state = {
    delta: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ delta: prevState.delta + 1 }))
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const {
      date,
      label,
      id,
      removeItem,
      isRunning
    } = this.props;

    return (
      <Card width={600} height={100}>
        <div className="left-area">
          <div className="date">{date}</div>
          <div className="label">{label}</div>

          <div className="actions">
            <div className="delete" onClick={() => removeItem(id)}>delete</div>
            <div className="favorite">favorite</div>
          </div>
        </div>
        <div className="right-area">
          {
            isRunning && (
              <div className="time">
                <Spinner />
                {moment({ hours: 0, minutes: 0 }).add(this.state.delta, 'seconds').format('mm:ss')}
              </div>
            )
          }
        </div>
      </Card>
    );
  }
}
