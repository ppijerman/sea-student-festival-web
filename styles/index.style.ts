import styled from 'styled-components';

export const Section = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const Heading = styled.h1`
  text-align: center;
  font-family: 'Piazzolla', serif;
  font-size: 72px;
  line-height: 80%;
  font-weight: 900;
  color: var(--yellow);
  z-index: 99;
`;

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100vw - 50px);
  height: 500px;

  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;

export const FramesWrapper = styled.div`
  z-index: 99;
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  display: block;
  min-height: 720px;

  @media only screen and (min-aspect-ratio: 1/1) {
    max-height: 900px;
  }
`;

export const Frame1 = styled.div`
  background-image: url('https://unsplash.com/photos/mY2ZHBU6GRk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fHNvY2NlcnxlbnwwfHx8fDE2NTc3Mzg2OTU&force=true&w=640');
  background-size: cover;
  background-position: center;
  aspect-ratio: 4/3;
  z-index: 99;
  border-radius: 20px;
  position: absolute;
  right: 20px;
  bottom: 100px;
  width: 60%;

  @media only screen and (max-aspect-ratio: 1/1) {
    aspect-ratio: 9/16;
  }

  @media only screen and (min-width: 720px) {
    right: 2%;
    left: unset;
    top: unset;
    bottom: 100px;
    max-width: 60%;
    max-height: 70%;
  }

  @media only screen and (min-width: 1280px) {
    width: 600px;
    top: 175px;
    left: 50%;
  }
`;

export const Information = styled.div`
  display: block;
  /* background: var(--black); */
  color: var(--yellow);
  position: absolute;
  top: 430px;
  z-index: 9999;
  font-family: 'Piazzolla', serif;
  font-weight: 900;
  letter-spacing: 1px;
  padding: 10px;
  left: calc(50% - 550px);

  @media only screen and (max-width: 1280px) {
    left: 0;
    bottom: 50px;
    top: unset;
  }
`;

export const TagLine = styled.span`
  font-size: 32px;
  line-height: 100%;

  @media only screen and (min-width: 720px) and (min-height: 720px) {
    font-size: 72px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 100px;
  }
`;

export const PlaceAndDate = styled.span`
  font-size: 18px;

  @media only screen and (min-width: 720px) and (min-height: 720px) {
    font-size: 36px;
  }
`;

export const Frame2 = styled.div`
  background-image: url('https://unsplash.com/photos/ZhQCZjr9fHo/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3NzM4MjIw&force=true&w=640');
  background-size: cover;
  background-position: center;
  aspect-ratio: 4/3;
  z-index: 999;
  position: absolute;
  border-radius: 20px;
  margin-bottom: -50px;
  width: 40%;
  min-width: 150px;
  top: unset;
  bottom: 65%;
  left: 30px;
  border: solid 8px var(--black);

  @media only screen and (max-aspect-ratio: 1/1) {
    aspect-ratio: 3/4;
  }

  @media only screen and (min-width: 720px) {
    aspect-ratio: 4/3;
    top: unset;
    left: 50px;
    border: solid 10px var(--black);
  }

  @media only screen and (min-width: 1280px) {
    width: 300px;
    top: 40px;
    left: calc(50% - 200px);
  }
`;

export const MainWrapper = styled.main`
  z-index: 99;
`;

export const MapText = styled.span`
  display: block;
  font-family: 'Piazzolla', serif;
  font-weight: bolder;
  color: var(--yellow);
  background: var(--black);
  margin-right: 45%;
  margin-bottom: -20px;
  z-index: 9999;
  line-height: 90%;
  padding: 10px;
  font-size: 20px;

  @media only screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;
