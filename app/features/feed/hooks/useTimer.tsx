import { useEffect, useState } from 'react';

export const useTimer = () => {
  const [time, setTime] = useState(900);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes}m:${seconds}s`;
};
