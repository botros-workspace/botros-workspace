import { Box, Flex, Text } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import ResponsiveDevices from '../../../public/skills/ResponsiveDevices'
import SEO from '../../../public/skills/SEO'
import Scalable from '../../../public/skills/Scalable'
import { gsap } from 'gsap'

type Props = {
  show: boolean
}
const ProductsContainer: FunctionComponent<Props> = ({ show }) => {
  const firstProductRef = useRef(null)
  const secondProductRef = useRef(null)
  const thirdProductRef = useRef(null)
  const timelineRef = useRef(gsap.timeline())

  useEffect(() => {
    if (show) {
      const context = gsap.context(() => {
        const tl = timelineRef.current

        if (show) {
          tl.fromTo(
            firstProductRef.current,
            {
              xPercent: 200,
              opacity: 0,
            },
            {
              xPercent: 0,
              delay: 0.1,
              opacity: 1,
              duration: 0.6,
              ease: 'expo.inOut',
            }
          )
            .fromTo(
              secondProductRef.current,
              {
                xPercent: 200,
                opacity: 0,
              },
              {
                xPercent: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'expo.inOut',
              }
            )
            .fromTo(
              thirdProductRef.current,
              {
                xPercent: 200,
                opacity: 0,
              },
              {
                xPercent: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'expo.inOut',
              }
            )
        }
        if (!show) {
          tl.fromTo(
            [
              firstProductRef.current,
              secondProductRef.current,
              thirdProductRef.current,
            ],
            {
              xPercent: 0,
              opacity: 1,
            },
            {
              xPercent: 200,
              opacity: 0,
              duration: 0.001,
              ease: 'expo.inOut',
            }
          )
        }
      })
      return () => context.revert()
    }
  }, [show])
  return (
    <Box
      h={'80%'}
      w={'25%'}
      zIndex={4}
      float={'right'}
      opacity={window.innerWidth > 992 ? 1 : 0}
    >
      <Flex
        h={'100%'}
        w={'100%'}
        gap={4}
        direction={'column'}
        pt={'25%'}
        float={'right'}
        alignItems={'center'}
      >
        <Flex
          w={'100%'}
          h={'20%'}
          direction={'column'}
          ref={firstProductRef}
          opacity={0}
        >
          <ResponsiveDevices />
          <Text
            color={'white'}
            textAlign={'center'}
            fontWeight={600}
            flexWrap={'wrap'}
            w={'100%'}
            h={'10%'}
          >
            Responsive
          </Text>
        </Flex>
        <Flex
          w={'100%'}
          h={'20%'}
          direction={'column'}
          ref={secondProductRef}
          opacity={0}
        >
          <SEO />
          <Text
            color={'white'}
            textAlign={'center'}
            fontWeight={600}
            flexWrap={'wrap'}
            w={'100%'}
            h={'10%'}
          >
            SEO optimized
          </Text>
        </Flex>
        <Flex
          w={'100%'}
          h={'20%'}
          direction={'column'}
          ref={thirdProductRef}
          opacity={0}
        >
          <Scalable />

          <Text
            color={'white'}
            textAlign={'center'}
            fontWeight={600}
            flexWrap={'wrap'}
            w={'100%'}
            h={'10%'}
          >
            Scalable code
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProductsContainer
