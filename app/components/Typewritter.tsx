import React, { useState, useEffect } from "react";
import clsx from "clsx";

interface TypeWritterProps {
  strings: string[];
  className?: string;
}

const Typewritter = ({ strings, className }: TypeWritterProps) => {
  const [strIndex, setStrIndex] = useState<number>(0);
  const [subStrIndex, setSubStrIndex] = useState<number>(0);
  const [reset, setReset] = useState<boolean>(false);

  // Typewritter
  useEffect(() => {
    const lastChar = subStrIndex === strings[strIndex].length + 1;
    const lastString = strIndex === strings.length - 1;

    if (lastString && lastChar) {
      // If last word and last char
      setReset(true);
    }

    if (lastChar && !reset) {
      setReset(true);
      return;
    }
    if (subStrIndex === 0 && reset) {
      setReset(false);
      setStrIndex((prev) => (lastString ? 0 : prev + 1));
      return;
    }
    const repeat = setInterval(
      () => {
        setSubStrIndex((prev) => prev + (reset ? -1 : 1));
      },
      // eslint-disable-next-line no-nested-ternary
      reset
        ? 35
        : subStrIndex === strings[strIndex].length
        ? 2000
        : Math.max(Math.random() * 175, 50)
    );

    // eslint-disable-next-line consistent-return
    return () => clearInterval(repeat);
  }, [subStrIndex, strIndex, reset, strings]);

  return (
    <>
      <h2 className={clsx(className)}>
        {strings[strIndex].substring(0, subStrIndex)}
      </h2>
    </>
  );
};

export default Typewritter;
