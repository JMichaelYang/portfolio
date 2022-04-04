import React from 'react';
import styled from 'styled-components';

class Home extends React.Component {
  render() {
    return (
      <Background image_url={process.env.PUBLIC_URL + '/static/images/portfolio_cartoon.png'}>
        <div>Welcome to Jaewon's Portfolio</div>
      </Background>
    );
  }
}

const Background = styled.div`
  background-image: url(${props => props.image_url});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export default Home;