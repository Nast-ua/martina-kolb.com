
import React, { useRef } from "react";
import { useSpring, animated, useChain } from 'react-spring';


function Intro() { 
  const firstSpring = useRef()
  const propsFirstH1 = useSpring({ 
    config: { mass: 20, tension: 100, friction: 200 },
    to: {left: '100%'},
    from: {left: '0%', top: '0%', width: '100%', height: '100%'},
    ref: firstSpring,
  })

  const secondSpring = useRef()
  const propsSecondH1 = useSpring({ 
    config: { mass: 20, tension: 300, friction: 200 },
    to: {left: '100%'},
    from: {left: '0%', top: '0%', width: '100%', height: '100%'},
    ref: secondSpring, 
  })

  useChain([firstSpring, secondSpring], [0, 1.0])

  return (
    <div className="m-auto w-5/6">
      <div className="introContainer m-auto w-2/3 mt-40" >
        <h1 className="text-6xl">Hallo.</h1>

        <animated.div className="fill" style={propsFirstH1} />  
      </div>

      <div className="introContainer m-auto w-2/3 mt-5 mb-32" >
        <h1 className="text-6xl">Ich bin Martina Kolb.</h1>

        <animated.div className="fill" style={propsSecondH1} />
      </div>
    </div>
   
  );
}

export default Intro;
