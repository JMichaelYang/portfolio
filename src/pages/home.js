import React from 'react';
import background from '../static/images/portfolio_cartoon.png';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Jaewon's Portfolio</h1>
        <img src={background}/>
      </div>
    );
  }
}

export default Home;