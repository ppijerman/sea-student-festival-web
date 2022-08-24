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
import {SpaceBar} from "@mui/icons-material";

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
                Berlin, 28<sup>th</sup>August 2022, <br/>3<sup>rd</sup> - 4<sup>th</sup> September 2022
              </PlaceAndDate>
            </Information>
          </FramesWrapper>
        </Section>
        <Section>
          <Countdown time={Date.parse('28 Aug 2022 09:00:00 GMT+1')} />
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
                28<sup>th</sup> August 2022
                <br />
                9 AM - 12 PM CEST
                <br/>
                Poststadion – Lehrter Str. 59, 10557 Berlin
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ m: 'auto' }}>
                <Typography variant="h6" component="span">
                  Soccer Fun Match
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="var(--sand)"
              >
                3<sup>rd</sup> September 2022
                <br />
                10 AM - 4 PM CEST
                <br/>
                Sportzentrum TiB Berlin 1848 e.V. – Columbiadamm 111, 10965 Berlin
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ m: 'auto' }}>
                <Typography variant="h6" component="span">
                  Badminton Competition
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="var(--sand)"
              >
                4<sup>th</sup> September 2022
                <br />
                10 AM - 6 PM CEST
                <br/>
                Primo-Levi-Gymnasium, Woelckpromenade 11, 13086 Berlin
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ m: 'auto' }}>
                <Typography variant="h6" component="span">
                  Basketball and <br/>Volleyball <br/>Competition
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
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
          <Heading>In Collaboration With</Heading>
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
                    image="/logo/kbri.png"
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
