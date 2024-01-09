import { Box } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa6'
import { Player } from '@lottiefiles/react-lottie-player'

type Props = {
  isLightOn: boolean
  setIsLightOn: (value: boolean) => void
}

const LightSwitcherContainer: FunctionComponent<Props> = ({
  isLightOn,
  setIsLightOn,
}) => {
  const [blink, setBlink] = useState(false)
  const [stop, setStop] = useState(false)
  const [start, setStart] = useState(false)
  const [scale, setScale] = useState(0)
  const [arrowHeight, setArrowHeight] = useState(180)
  const [arrowWidth, setArrowWidth] = useState(180)
  const [arrowTop, setArrowTop] = useState(140)
  const [arrowLeft, setArrowLeft] = useState(-10)
  const [shortBlink, setShortBlink] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const ref = useRef<Player>(null)

  useEffect(() => {
    const showId = window.setInterval(function () {
      if (!blink && !stop && start && opacity === 1) {
        setBlink(true)
      }
    }, 100)
    const hidelId = window.setInterval(function () {
      if (blink && !stop && start && opacity === 1) {
        setBlink(false)
      }
    }, 200)

    return () => {
      clearInterval(hidelId), clearInterval(showId)
    }
  }, [blink, stop, start, opacity])

  useEffect(() => {
    let stopId: number
    if (shortBlink && opacity === 1) {
      stopId = window.setInterval(function () {
        if (!stop && ref.current && start) {
          setStop(true)
          setBlink(false)
        }
      }, 600)
    } else if (opacity === 1) {
      stopId = window.setInterval(function () {
        if (!stop && ref.current && start) {
          setStop(true)
          setBlink(false)
          setIsLightOn(true)
        }
      }, 1500)
    }
    return () => {
      clearInterval(stopId)
    }
  }, [stop, setIsLightOn, start, shortBlink, opacity])

  useEffect(() => {
    const stopId = window.setInterval(function () {
      if (!start && opacity === 1) {
        setStart(true)
      }
    }, 1000)
    return () => {
      clearInterval(stopId)
    }
  }, [start, opacity])

  useEffect(() => {
    const interval = setInterval(() => {
      if (scale + 1 <= 35 && ref.current && stop && opacity === 1) {
        setScale(scale + 1)
      } else if (opacity === 1) {
        clearInterval(interval)
      }
    }, 10)

    return () => {
      clearInterval(interval)
    }
  }, [scale, stop, opacity])

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [scale, stop, opacity])

  useEffect(() => {
    if (ref.current && stop && opacity === 1) {
      ref.current.setSeeker(scale)
    }
  }, [scale, stop, opacity])
  return (
    <Box
      visibility={{ base: 'hidden', xl: 'visible' }}
      zIndex={99999999}
      opacity={opacity}
      transition={'all ease-in-out .8s'}
    >
      <Box
        as={motion.div}
        pos={'fixed'}
        top={32}
        left={150}
        zIndex={9}
        cursor={'pointer'}
        fontSize={'6xl'}
        whileTap={{
          scale: 0.8,
          opacity: 0.5,
        }}
        color={isLightOn || blink ? '#C59A27' : 'white'}
        onClick={() => setIsLightOn(!isLightOn)}
        transition='0.1s linear'
        animate={blink ? { scale: 0.8, opacity: 0.5 } : ''}
      >
        <FaRegLightbulb />
      </Box>
      <Box
        bg={'red'}
        zIndex={99999}
        onMouseEnter={() => {
          setShortBlink(true)
          setStart(true)
          setStop(false)
          setArrowWidth(150)
          setArrowHeight(160)
          setArrowTop(135)
          setArrowLeft(20)
        }}
        onMouseLeave={() => {
          setArrowWidth(180)
          setArrowHeight(180)
          setArrowTop(140)
          setArrowLeft(-10)
        }}
      >
        <Player
          ref={ref}
          autoplay={false}
          loop={false}
          src='https://assets-v2.lottiefiles.com/a/5cdcc126-1179-11ee-a2f7-c313dabeac35/fDzi4jDGMb.json'
          style={{
            transition: 'ease-in-out 0.4s',
            height: `${arrowHeight}px`,
            width: `${arrowWidth}px`,
            rotate: `-50deg`,
            position: 'fixed',
            left: arrowLeft,
            top: arrowTop,
            zIndex: 9,
          }}
        />
      </Box>
    </Box>
  )
}

export default LightSwitcherContainer
