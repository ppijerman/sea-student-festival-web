import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Countdown from '../components/Countdown';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import styled from 'styled-components';
import Map from '../components/Map';

const Section = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

const Heading = styled.h1`
  text-align: center;
  font-family: 'Piazzolla', serif;
  font-size: 72px;
  line-height: 80%;
  font-weight: 900;
  color: var(--yellow);
  z-index: 0;
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 500px;
`;

const MainWrapper = styled.main`
  z-index: 99;
  `;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Southeast Asian Student Festival 2022</title>
      </Head>

      <MainWrapper>
        <Section>
          <MapWrapper>
            <div id={'map'}></div>
          </MapWrapper>
        </Section>
        <Section>
          <Countdown time={Date.parse('27 Aug 2022 00:00:00 GMT+1')} />
        </Section>
        <Section>
          <Heading>Agenda</Heading>
        </Section>
        <Section>
          <Heading>Venue</Heading>
          <MapWrapper>
            <Map lat={52.520008} lng={13.404954} zoom={10} label={'Venue'}/>
          </MapWrapper>
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
