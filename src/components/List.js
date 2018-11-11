import React from 'react';

export default class List extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  }

  render() {
    const { onRemove } = this.props;

    return (
      <div className="list">
        {
          this.props.data.map(item => (
            <div key={item.id} className="row">
              {item.label}
              <span onClick={() => onRemove(item.id)}>
                delete
              </span>
            </div>
          ))
        }
      </div>
    );
  }
}
