import React, { FunctionComponent, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { Box } from '@chakra-ui/react'
import IntroLoader from './IntroLoader'
import MainLayer from './MainLayer'

const GSAPContainer: FunctionComponent = () => {
  const [loaderFinished, setLoaderFinished] = useState(false)
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null)
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      })
      setTimeline(tl)
    })
    return () => context.revert()
  }, [])
  return (
    <>
      {loaderFinished ? (
        <Box w={'100%'} h={'100%'} pos={'relative'}>
          <MainLayer />
        </Box>
      ) : (
        <IntroLoader timeline={timeline} />
      )}
    </>
  )
}

export default GSAPContainer
