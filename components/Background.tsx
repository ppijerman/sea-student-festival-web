import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  height: 100%;
  z-index: -999;
  position: absolute;
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
  <>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </>
);

export default Background;
