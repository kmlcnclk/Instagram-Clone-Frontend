import React, { createRef, useRef, useState, useEffect } from 'react';
import styles from '../styles/a.module.css';
import NextImage from 'next/image';
import Asd from '../components/asd';
import { Progress } from '@chakra-ui/react';

const data = [1, 2, 3, 4, 5];
const data1 = [1, 2, 3];

function A() {
  const elementsRef = useRef(data.map(() => createRef()));
  const progressesRef = useRef(data1.map(() => createRef()));

  const [asd1State, setAsd1State] = React.useState(0);
  const [progressState, setProgressState] = useState({});

  const a = () => {
    if (
      elementsRef.current[asd1State].current &&
      elementsRef.current[asd1State - 1].current
    ) {
      elementsRef.current[
        asd1State
      ].current.className = `${styles.asd2} ${styles.asd_right_to_left2}`;
      elementsRef.current[
        asd1State - 1
      ].current.className = `${styles.asd3} ${styles.asd_left_to_right2}`;
      if (elementsRef.current[asd1State - 2]) {
        elementsRef.current[
          asd1State - 2
        ].current.className = `${styles.asd5} ${styles.asd_left_to_right4}`;
      }
      if (elementsRef.current[asd1State - 3]) {
        elementsRef.current[
          asd1State - 3
        ].current.className = `${styles.asdx} ${styles.asd_left_to_right6}`;
      }
      if (elementsRef.current[asd1State + 1]) {
        elementsRef.current[
          asd1State + 1
        ].current.className = `${styles.asd4} ${styles.asd_left_to_right3}`;
      }
      if (elementsRef.current[asd1State + 2]) {
        elementsRef.current[
          asd1State + 2
        ].current.className = `${styles.asd0} ${styles.asd_left_to_right5}`;
      }

      setAsd1State(asd1State - 1);
    }
  };
  const b = () => {
    if (
      elementsRef.current[asd1State].current &&
      elementsRef.current[asd1State + 1].current
    ) {
      elementsRef.current[
        asd1State
      ].current.className = `${styles.asd1} ${styles.asd_left_to_right1}`;
      elementsRef.current[
        asd1State + 1
      ].current.className = `${styles.asd2} ${styles.asd_right_to_left1}`;

      if (elementsRef.current[asd1State + 2]) {
        elementsRef.current[
          asd1State + 2
        ].current.className = `${styles.asd4} ${styles.asd_right_to_left3}`;
      }
      if (elementsRef.current[asd1State + 3]) {
        elementsRef.current[
          asd1State + 3
        ].current.className = `${styles.asd0} ${styles.asd_right_to_left5}`;
      }
      if (elementsRef.current[asd1State - 1]) {
        elementsRef.current[
          asd1State - 1
        ].current.className = `${styles.asd3} ${styles.asd_right_to_left4}`;
      }
      if (elementsRef.current[asd1State - 2]) {
        elementsRef.current[
          asd1State - 2
        ].current.className = `${styles.asdx} ${styles.asd_right_to_left6}`;
      }
      setAsd1State(asd1State + 1);
    }
  };

  useEffect(() => {
    if (progressesRef.current[0].current) {
    }
  }, [asd1State]);

  return (
    <div className="flex justify-center items-center w-full relative">
      {/* <div className={styles.box}></div> */}
      <button
        onClick={a}
        className="absolute z-10 top-[320px] bg-white h-6 w-6 drop-shadow-lg -translate-y-1/2 text-black flex justify-center items-center rounded-full left-[370px] shadow-md"
      >
        sol
      </button>
      <button
        onClick={b}
        className="absolute z-10 top-[320px] bg-white h-6 w-6 drop-shadow-lg -translate-y-1/2 text-black flex justify-center items-center rounded-full right-[440px] shadow-md"
      >
        sağ
      </button>
      <div className="w-full min-h-screen flex justify-end">
        <div className="flex justify-center items-center w-full relative overflow-hidden">
          {data.map((item, i) => (
            <div
              className={`${
                i == 0
                  ? styles.asd2
                  : i == 1
                  ? styles.asd1
                  : i == 2
                  ? styles.asd4
                  : styles.asd0
              } `}
              ref={elementsRef.current[i]}
              key={i}
            >
              {i}
              {i == asd1State ? (
                <div>
                  <div className="flex justify-center w-full h-[200px] bg-blue-500">
                    {data1.map((item1, i1) => (
                      <div
                        onClick={() => {
                          if (progressesRef.current[0].current) {
                            setProgressState({
                              ...progressState,
                              [i1]: progressState[i1] + 1,
                            });
                          }
                        }}
                        key={i1}
                        className="w-1/2"
                        ref={progressesRef.current[i1]}
                        name={i1}
                      >
                        <Progress
                          value={progressState[i1] ? progressState[i1] : 0}
                          size="xs"
                          colorScheme="blackAlpha"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default A;
