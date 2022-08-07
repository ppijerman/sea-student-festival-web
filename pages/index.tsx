import type { NextPage } from 'next';
import Head from 'next/head';
import Countdown from '../components/Countdown';
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
import {
  MainWrapper,
  Section,
  FramesWrapper,
  Frame1,
  Frame2,
  Information,
  TagLine,
  PlaceAndDate,
  Heading,
  MapText,
  MapWrapper,
} from '../styles/index.style';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
} from '@mui/material';

const chooseOne = (arr: string[]) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

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
            <br />
            12051, Berlin
          </MapText>
          <MapWrapper>
            <Map lat={52.4685396} lng={13.4185596} zoom={16} />
          </MapWrapper>
          <Button
            href={'https://goo.gl/maps/wkBX5PyzzpeBVHPf7'}
            style={{
              zIndex: 9999,
              marginTop: '50px',
            }}
          >
            Open in Google Maps
          </Button>
        </Section>
        <Section>
          <Heading>Sponsors</Heading>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2 }}
            alignItems="center"
            justifyContent="center"
          >
            <Card sx={{ width: 255 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/logo/ppi-berbrand.png"
                />
              </CardActionArea>
            </Card>
            <Card sx={{ width: 315 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/logo/ppi-jerman.png"
                />
              </CardActionArea>
            </Card>
          </Stack>
        </Section>
        <Section>
          <Heading>Media Partners</Heading>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2 }}
            alignItems="center"
            justifyContent="center"
          >
            <Card sx={{ width: 255 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/logo/ppi-berbrand.png"
                />
              </CardActionArea>
            </Card>
            <Card sx={{ width: 315 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/logo/ppi-jerman.png"
                />
              </CardActionArea>
            </Card>
          </Stack>
        </Section>
      </MainWrapper>
    </>
  );
};

export default Home;
