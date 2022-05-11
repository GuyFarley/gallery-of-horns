
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      beastPic: '',
      beastDesc: ''
    }
  }

  openModalHandler = (photo, description) => {
    this.setState({
      isModalDisplaying: true,
      beastPic: photo,
      beastDesc: description
    });
  };

  closeModalHandler = () => {
    this.setState({
      isModalDisplaying: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          openModalHandler={this.openModalHandler}
        />
        <Footer />
        <Modal
          size="lg"
          show={this.state.isModalDisplaying}
          onHide={this.closeModalHandler}>
          <Modal.Body><img src={this.state.beastPic} alt={this.props.description} title={this.props.title} /></Modal.Body>
          <Modal.Footer>{this.state.beastDesc}</Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
