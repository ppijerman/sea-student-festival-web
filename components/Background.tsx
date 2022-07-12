import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  z-index: -999;
  height: 0;
`;

const starImagePaths = [];

const RandomStarGenerator = () => {
  return <></>;
};

// const Background = () => {
//   return (
//       <BackgroundWrapper>

//       </BackgroundWrapper>
//   )
// }

const Background = () => (
  <BackgroundWrapper>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </BackgroundWrapper>
);

export default Background;
