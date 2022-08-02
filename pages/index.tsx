import type { NextPage } from 'next';
import Head from 'next/head';
import Countdown from '../components/Countdown';
import styled from 'styled-components';
import Map from '../components/Map';
import Button from '../components/Button';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import VerticalShadesIcon from '@mui/icons-material/VerticalShades';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Typography from '@mui/material/Typography';

const chooseOne = (arr: string[]) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const Section = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

const Heading = styled.h1`
  text-align: center;
  font-family: 'Piazzolla', serif;
  font-size: 72px;
  line-height: 80%;
  font-weight: 900;
  color: var(--yellow);
  z-index: 99;
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100vw - 50px);
  height: 500px;

  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;

const FramesWrapper = styled.div`
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

const Frame1 = styled.div`
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

const Information = styled.div`
  display: block;
  background: var(--black);
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

const TagLine = styled.span`
  font-size: 32px;
  line-height: 100%;

  @media only screen and (min-width: 720px) and (min-height: 720px) {
    font-size: 72px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 100px;
  }
`;

const PlaceAndDate = styled.span`
  font-size: 18px;

  @media only screen and (min-width: 720px) and (min-height: 720px) {
    font-size: 36px;
  }
`;

const Frame2 = styled.div`
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

const MainWrapper = styled.main`
  z-index: 99;
`;

const MapText = styled.span`
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
  text-wrap: normal;
  @media only screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Southeast Asian Student Festival 2022</title>
      </Head>

      <MainWrapper>
        <Section>
          <FramesWrapper>
            <Frame1 />
            <Frame2 />
            <Information>
              <TagLine>
                For a Stronger
                <br />
                Collaboration
              </TagLine>
              <br />
              <PlaceAndDate>
                Berlin, 27<sup>th</sup> - 28<sup>th</sup> August 2022
              </PlaceAndDate>
            </Information>
          </FramesWrapper>
        </Section>
        <Section>
          <Countdown time={Date.parse('27 Aug 2022 00:00:00 GMT+1')} />
        </Section>
        <Section>
          <Heading>Agenda</Heading>
          <Timeline position="alternate" style={{ color: 'var(--yellow)' }}>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="var(--sand)"
              >
                27th August
                <br />
                09:30
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="inherit">
                  <VerticalShadesIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Opening
                </Typography>
                <Typography>Our opening ceremony</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="var(--sand)"
              >
                27-28th August
                <br />
                09:30 to 17:30
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="inherit">
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Food Bazaar
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="var(--sand)"
              >
                27-28th August
                <br />
                09:30 to 17:30
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="inherit">
                  <SportsHandballIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Sportfest
                </Typography>
                <Typography>Wouldn&apos;t one be awesome?</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="var(--sand)"
              >
                28th August
                <br />
                17:30
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="inherit">
                  <EmojiPeopleIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Closing
                </Typography>
                <Typography>See you again later!</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Section>
        <Section>
          <Heading>Venue</Heading>
          <MapText>
            Werner-Seelenbinder-Sportpark,
            <br/>12051, Berlin
          </MapText>
          <MapWrapper>
            <Map lat={52.4685396} lng={13.4185596} zoom={16}/>
          </MapWrapper>
          <Button href={'https://goo.gl/maps/wkBX5PyzzpeBVHPf7'} style={{
            zIndex: 9999,
            marginTop: '50px',
          }}>
            Open in Google Maps
          </Button>
        </Section>
        <Section>
          <Heading>Sponsors</Heading>
        </Section>
        <Section>
          <Heading>Media Partners</Heading>
        </Section>
      </MainWrapper>
    </>
  );
};

export default Home;
