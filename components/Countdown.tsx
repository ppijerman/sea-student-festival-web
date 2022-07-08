import { useEffect, useState } from 'react';
// @ts-ignore
import styled from 'styled-components';
import Button from "./Button";

const CountdownFrame = styled.div`
    background-color: var(--blue);
    padding: 40px;
    height: 300px;
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
    justify-content: center;
  `;

const CountdownDigit = styled.div`
    width: 200px;
    margin-top: -20px;
  `;

const CountdownNumber = styled.div`
    font-size: 150px;
    font-weight: 600;
    font-family: 'Piazzolla', serif;
    padding: 0px;
    margin: 0px;
    line-height: 80%;
    text-align: center;
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

  return (
      <>
        <CountdownFrame>
          <CountdownBody>
            <CountdownDigit>
              <CountdownNumber>{(duration / (3600 * 24 * 1000)).toFixed(0)}</CountdownNumber>
              <CountdownUnit>{duration / (3600 * 24 * 1000) > 1 ? 'Days' : 'Day'}</CountdownUnit>
            </CountdownDigit>
            <CountdownDigit>
              <CountdownNumber>{new Date(duration).getHours()}</CountdownNumber>
              <CountdownUnit>{new Date(duration).getHours() > 1 ? 'Hours' : 'Hour'}</CountdownUnit>
            </CountdownDigit>
            <CountdownDigit>
              <CountdownNumber>{new Date(duration).getMinutes()}</CountdownNumber>
              <CountdownUnit>{new Date(duration).getMinutes() > 1 ? 'Minutes' : 'Minute'}</CountdownUnit>
            </CountdownDigit>
            <CountdownDigit>
              <CountdownNumber>{new Date(duration).getSeconds()}</CountdownNumber>
              <CountdownUnit>{new Date(duration).getSeconds() > 1 ? 'Seconds' : 'Second'}</CountdownUnit>
            </CountdownDigit>
          </CountdownBody>
        </CountdownFrame>
        <BuyTicketCountdownButton href={'/'}>
          <ButtonText>Grab your ticket</ButtonText> &rarr;
        </BuyTicketCountdownButton>
      </>
  );
};

export default Countdown;
