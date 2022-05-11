import React from 'react';
import Card from 'react-bootstrap/Card'
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
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image_url} alt={this.props.description} title={this.props.title} onClick={this.clickPhoto} />
        <Card.Body>
          <Card.Text>
            ❤️ favorited {this.state.clicks} times!
          </Card.Text>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;