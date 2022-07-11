import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const CountdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 20px;
`;

const CountdownFrame = styled.div`
  align-self: center;
  background-color: var(--blue);
  padding: 40px;
  min-height: 300px;
  max-width: 100%;
  width: max-content;
  border-radius: 30px;
  border: solid 8px var(--sand);
  color: var(--yellow);
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CountdownBody = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 25px;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-self: center;
  }
`;

const CountdownTitle = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 900;
  letter-spacing: 2px;
  font-family: 'Piazzolla', serif;
  line-height: 80%;
  margin-bottom: 20px;
  word-break: break-word;
  @media only screen and (min-width: 420px) {
    font-size: 48px;
  }
`;

const CountdownDigit = styled.div`
  width: 200px;
  margin-top: -20px;

  @media only screen and (max-width: 992px) {
    margin-bottom: 3em;
    margin-top: 0;
  }
`;

const CountdownNumber = styled.div`
  font-size: 150px;
  font-weight: 600;
  font-family: 'Piazzolla', serif;
  padding: 0px;
  margin: 0px;
  line-height: 80%;
  text-align: center;

  @media only screen and (max-width: 992px) {
    font-size: 100px;
  }
`;

const CountdownUnit = styled.div`
  font-size: 36px;
  font-weight: 600;
  font-family: 'Piazzolla', serif;
  padding: 0px;
  line-height: 80%;
  text-align: center;
  margin-top: 20px;
`;

const BuyTicketCountdownButton = styled(Button)`
  border: solid 8px var(--sand);
  margin-top: -37.5px;
  width: max-content;
  align-self: center;

  @media only screen and (max-width: 992px) {
    font-size: 16px;
  }
`;

const ButtonText = styled.span`
  margin-right: 1em;
`;

// @ts-ignore
const Countdown = ({ time }) => {
  let ticker: NodeJS.Timer;

  const countDuration = (time: number) => {
    return Math.max(0, time - Date.now());
  };

  const [duration, setDuration] = useState(countDuration(time));

  useEffect(() => {
    startCountdown();
    return () => {
      stopCountDown();
    };
  });

  const startCountdown = () => {
    if (duration && duration > 0) {
      ticker = setInterval(countDown, 1000);
    }
  };

  const countDown = () => {
    setDuration(_second => {
      const res = countDuration(time);
      if (res === 0) {
        stopCountDown();
      }
      return res;
    });
  };

  const stopCountDown = () => {
    clearInterval(ticker);
  };

  const days = duration / (3600 * 24 * 1000);
  const hours = new Date(duration).getHours();
  const minutes = new Date(duration).getMinutes();
  const seconds = new Date(duration).getSeconds();

  return (
    <CountdownWrapper>
      <CountdownFrame>
        <CountdownTitle>Opening Countdown</CountdownTitle>
        <CountdownBody>
          <CountdownDigit>
            <CountdownNumber>{days.toFixed(0)}</CountdownNumber>
            <CountdownUnit>{days > 1 ? 'Days' : 'Day'}</CountdownUnit>
          </CountdownDigit>
          <CountdownDigit>
            <CountdownNumber>
              {hours < 10 ? 0 : ''}
              {hours}
            </CountdownNumber>
            <CountdownUnit>{hours > 1 ? 'Hours' : 'Hour'}</CountdownUnit>
          </CountdownDigit>
          <CountdownDigit>
            <CountdownNumber>
              {minutes < 10 ? 0 : ''}
              {minutes}
            </CountdownNumber>
            <CountdownUnit>{minutes > 1 ? 'Minutes' : 'Minute'}</CountdownUnit>
          </CountdownDigit>
          <CountdownDigit>
            <CountdownNumber>
              {seconds < 10 ? 0 : ''}
              {seconds}
            </CountdownNumber>
            <CountdownUnit>{seconds > 1 ? 'Seconds' : 'Second'}</CountdownUnit>
          </CountdownDigit>
        </CountdownBody>
      </CountdownFrame>
      <BuyTicketCountdownButton href={'/'}>
        <ButtonText>Grab your ticket</ButtonText> &rarr;
      </BuyTicketCountdownButton>
    </CountdownWrapper>
  );
};

export default Countdown;
