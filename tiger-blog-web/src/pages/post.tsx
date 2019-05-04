import React from 'react';
import { withRouter } from 'react-router-dom';

class Post extends React.Component<any> {
  state = {
    id: 0
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    });
  }

  render() {
    return (
      <div>
        <div style={{ height: '300px' }} onClick={() => console.log(5)}>
          test
        </div>
        <div>{this.state.id}</div>
      </div>
    );
  }
}

export default withRouter(Post);
