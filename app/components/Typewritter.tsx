import React, { useState, useEffect } from "react";

interface TypeWritterProps {
  strings: string[];
}

const Typewritter = ({ strings }: TypeWritterProps) => {
  const [strIndex, setStrIndex] = useState<number>(0);
  const [subStrIndex, setSubStrIndex] = useState<number>(0);
  const [reset, setReset] = useState<boolean>(false);
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [isLastChar, setIsLastChar] = useState<boolean>(false);

  // Cursor
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLastChar) {
        setShowCursor((prev) => !prev);
      } else {
        setShowCursor(true);
      }
    }, 175);

    return () => clearTimeout(timeout);
  }, [showCursor, isLastChar]);

  // Typewritter
  useEffect(() => {
    const lastChar = subStrIndex === strings[strIndex].length + 1;
    const lastString = strIndex === strings.length - 1;

    if (subStrIndex === strings[strIndex].length && !reset) {
      // Next call is last char
      setIsLastChar(true);
    }

    if (lastString && lastChar) {
      // If last word and last char
      setReset(true);
    }

    if (lastChar && !reset) {
      setIsLastChar(false);
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
        ? 65
        : subStrIndex === strings[strIndex].length
        ? 1500
        : Math.max(Math.random() * 200, 70)
    );

    // eslint-disable-next-line consistent-return
    return () => clearInterval(repeat);
  }, [subStrIndex, strIndex, reset, strings]);

  return (
    <>
      <h2 className="text-[#FFB659]">
        {strings[strIndex].substring(0, subStrIndex)}
        {showCursor && (
          <span className="h-full border-l-4 ml-1 border-[#FFB659]">
            &nbsp;
          </span>
        )}
      </h2>
    </>
  );
};

export default Typewritter;
