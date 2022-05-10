import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
  }

  clickPhoto = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    })
  }

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>❤️ favorited {this.state.clicks} times!</p>
        <img src={this.props.image_url} alt={this.props.description} title={this.props.title} onClick={this.clickPhoto} />
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default HornedBeast;