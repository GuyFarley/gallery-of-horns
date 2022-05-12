
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';

import './App.css';
import SelectedBeast from './SelectedBeast.js';

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
        <SelectedBeast
          closeModalHandler={this.closeModalHandler}
          isModalDisplaying={this.state.isModalDisplaying}
          beastPic={this.state.beastPic}
          beastDesc={this.state.beastDesc}
        />
      </>
    );
  }
}

export default App;
