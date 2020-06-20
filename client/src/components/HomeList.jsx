import React from 'react';
import HomeItems from './HomeItems.jsx'

class HomeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
      </div>
    )
  }
}

export default HomeList;