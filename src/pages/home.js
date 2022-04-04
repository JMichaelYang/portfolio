import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Jaewon's Portfolio</h1>
        <img src={process.env.PUBLIC_URL + '/static/images/portfolio_cartoon.png'} alt='home page background'/>
      </div>
    );
  }
}

export default Home;