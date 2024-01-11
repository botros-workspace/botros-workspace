import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { SingleExperienceAttributes } from '../../../shared/interfaces/SingleExperienceAttributes'
import TagsContainer from '../../shared/TagsContainer'
import { gsap } from 'gsap'

type Props = {
  experience: SingleExperienceAttributes
}
const SingleExperienceContainer: FunctionComponent<Props> = ({
  experience,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const mainContainerRef = useRef(null)
  const timelineRef = useRef(gsap.timeline())

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.fromTo(
        mainContainerRef.current,
        {
          transform: 'translateY(150%)',
        },
        {
          opacity: 1,
          transform: 'translateY(0%)',
          duration: 0.8,
          delay: window.innerWidth > 1000 ? 2.7 : 1.5,
          ease: 'expo.inOut',
        }
      )
    })
    return () => context.revert()
  }, [])
  return (
    <Box opacity={0} ref={mainContainerRef} w={'100%'}>
      <Flex
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        w={{ base: '90%', sm: '95%', xl: '90%' }}
        borderRadius={'lg'}
        py={3}
        mb={4}
        gap={2}
        flexDir={{ base: 'column', lg: 'row' }}
        cursor={'pointer'}
        transition='all ease-in-out 0.3s'
        _hover={{
          bg: {
            base: 'transparent',
            lg: 'rgb(197,	154	,39,0.1)',
          },
        }}
      >
        <Flex h={{ base: '25%', lg: '100%' }} w={{ base: '100%', lg: '25%' }}>
          <Text
            mx={{ base: 'unset', lg: 'auto' }}
            color={!isHovered ? 'white' : '#C59A27'}
            opacity={0.7}
            fontSize={{ base: 16, lg: 11, xl: 12 }}
            fontWeight={500}
            mt={{ base: 4, lg: 5 }}
            pl={{ base: 'unset', md: 1, lg: 'unset' }}
          >
            {experience.date}
          </Text>
        </Flex>
        <Flex
          h={{ base: '75%', lg: '100%' }}
          w={{ base: '100%', lg: '75%' }}
          pr={2}
          flexDir={'column'}
        >
          <Text
            color={!isHovered ? 'white' : '#C59A27'}
            fontSize={20}
            mt={3}
            fontWeight={700}
            transition={'all .3s ease-in-out'}
          >
            {experience.title}
          </Text>
          <Box mt={3}>
            {experience.description.map((singleExperience, index) => {
              return (
                <Text
                  key={index}
                  color={'white'}
                  fontSize={{ base: 18, lg: 14 }}
                  fontWeight={400}
                  lineHeight={2}
                >
                  {singleExperience}
                </Text>
              )
            })}
          </Box>
          <TagsContainer skills={experience.skills} isHovered={isHovered} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default SingleExperienceContainer
