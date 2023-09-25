import { FC, useEffect, useRef, useState } from 'react';

// MessageItem

type Props = {
  speed: number; // ms
  text: string;
};

const TextAnimation: FC<Props> = ({ speed = 20, text }) => {
  const [placeholder, setPlaceholder] = useState<string>(text[0]); // each char of the text
  const index = useRef<number>(0); // text index

  useEffect(() => {
    const tick = () => {
      index.current++;
      setPlaceholder((prevChar) => prevChar + text[index.current]);
    };

    /* Interval function "tick" until the current index of
     the text (placeholder) is equal to the length of the text (index) */
    if (index.current < text.length - 1) {
      const addChar = setInterval(tick, speed);

      return () => clearInterval(addChar);
    }
  }, [placeholder, speed, text]);

  return <span>{placeholder}</span>;
};

export default TextAnimation;
