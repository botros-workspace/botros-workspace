import { Box, Flex } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import { MdWorkOutline } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import LeftCardSingleRow from './LeftCardSingleRow'

const LeftCardContainer: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const timelineRef = useRef(gsap.timeline())
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to(containerRef.current, {
        transform: 'translateY(-30%) skewY(-10deg) skewX(10deg)',
        delay: 4.6,
        duration: 0.05,
        ease: 'expo.inOut',
      })
        .to(containerRef.current, {
          transform: 'translateY(-80%) skewY(10deg) skewX(-10deg)',
          duration: 0.05,
          ease: 'expo.inOut',
        })
        .to(containerRef.current, {
          transform: 'translateY(-60%) skewY(-10deg) skewX(10deg)',
          duration: 0.05,
          ease: 'expo.inOut',
        })
        .to(containerRef.current, {
          transform: 'translateY(-80%) skewY(10deg) skewX(-10deg)',
          duration: 0.05,
          ease: 'expo.inOut',
        })
        .to(containerRef.current, {
          transform: 'translateY(-50%) skewY(-10deg) skewX(10deg)',
          duration: 0.05,
          ease: 'expo.inOut',
        })
        .to(containerRef.current, {
          transform:
            window.innerWidth < 768
              ? 'translateY(15%) skewY(0deg) skewX(0deg)'
              : 'translateY(45%) skewY(0deg) skewX(0deg)',
          duration: 0.05,
          ease: 'expo.inOut',
        })
    })
    return () => context.revert()
  }, [])
  return (
    <Box
      overflow={'hidden'}
      w={'100%'}
      h={'100%'}
      color={'white'}
      borderRadius={18}
      bg={'transparent'}
      px={2}
      zIndex={999999999}
    >
      <Flex
        w={'100%'}
        flexDir={'column'}
        gap={4}
        transform={'translateY(-150%)'}
        ref={containerRef}
      >
        <LeftCardSingleRow
          image={<MdDriveFileRenameOutline />}
          text={'David Botros'}
          isBold={true}
        />
        <LeftCardSingleRow
          image={<MdWorkOutline />}
          text={'Senior frontend developer'}
          isBold={false}
        />
        <LeftCardSingleRow
          image={<FiPhone />}
          text={'+4367761751520'}
          title='Phone number'
          isBold={false}
        />
        <LeftCardSingleRow
          image={<MdOutlineEmail />}
          text={'db.co@hotmail.com'}
          title='Email'
          isBold={false}
        />
        <LeftCardSingleRow
          image={<GoLocation />}
          text={'Sebastianplatz, 1030 Wien'}
          title={'Address'}
          isBold={false}
        />
      </Flex>
    </Box>
  )
}

export default LeftCardContainer
