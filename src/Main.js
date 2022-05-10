import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';

class Main extends React.Component {

  render() {

    let beasts = [];
    data.forEach((beast) => {
      beasts.push(
        <HornedBeast
          id={beast._id}
          image_url={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
        />)
    });


    return (
      <main>
        {beasts}
      </main>
    );
  }
}

export default Main;