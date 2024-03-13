import { Avatar, Box, Center, Flex, Text } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import IndexSingleRow from './IndexSingleRow'
import { ImGithub } from 'react-icons/im'
import { ImLinkedin } from 'react-icons/im'
import { AboutMeIndexTypes } from '../../../shared/enums/about-me-index-types.enum'
import Link from 'next/link'
import { gsap } from 'gsap'

type Props = {
  selectedIndex: AboutMeIndexTypes
  setSelectedIndex: (index: AboutMeIndexTypes) => void
  scrollToAboutMe: () => void
  scrollToExperience: () => void
  scrollToProjects: () => void
  scrollToProgrammingLanguages: () => void
  scrollToFrameworks: () => void
  scrollToSpeakingLanguages: () => void
}
const IndexContainer: FunctionComponent<Props> = ({
  selectedIndex,
  setSelectedIndex,
  scrollToAboutMe,
  scrollToExperience,
  scrollToProjects,
  scrollToProgrammingLanguages,
  scrollToFrameworks,
  scrollToSpeakingLanguages,
}) => {
  const timelineRef = useRef(gsap.timeline())
  const avatarRef = useRef(null)
  const textsRef = useRef<any>([])
  const indexesRef = useRef<any>([])
  const contactsRef = useRef<any>([])

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.fromTo(
        avatarRef.current,
        {
          transform: 'translateY(-300%)',
        },
        {
          transform: 'translateY(0%)',
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
        }
      )
        .fromTo(
          textsRef.current,
          {
            transform: 'translateY(200%)',
          },
          {
            transform: 'translateY(0%)',
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
          },
          '<'
        )
        .fromTo(
          contactsRef.current,
          {
            transform: 'translateY(200%)',
          },
          {
            transform: 'translateY(0%)',
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
          },
          '<'
        )
        .fromTo(
          indexesRef.current,
          {
            transform: 'translateX(-200%)',
          },
          {
            transform: 'translateX(0%)',
            stagger: 0.2,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
          },
          '<'
        )
    })
    return () => context.revert()
  }, [])
  return (
    <Center flexDir={'column'} color={'white'} w={'100%'}>
      <Avatar
        size={'2xl'}
        name={'Developer'}
        src={'./developer.jpg'}
        opacity={0}
        mt={4}
        backgroundSize={'cover'}
        ref={avatarRef}
      />
      <Box overflow={'hidden'} w={'100%'}>
        <Text
          pl={{ base: '15%', sm: '30%', lg: '19%' }}
          w={'100%'}
          fontSize={{ base: 40, lg: 60 }}
          fontWeight={600}
          alignSelf={'initial'}
          mt={{ base: 0, lg: -3 }}
          opacity={0}
          ref={(text: any) => textsRef.current.push(text)}
        >
          David Botros
        </Text>
      </Box>
      <Box overflow={'hidden'} w={'100%'}>
        <Text
          pl={{ base: '15%', sm: '30%', lg: '20%' }}
          w={'100%'}
          fontSize={24}
          fontWeight={400}
          alignSelf={'initial'}
          pt={{ base: -2, lg: -3 }}
          opacity={0}
          ref={(text: any) => textsRef.current.push(text)}
        >
          Senior Javascript developer
        </Text>
      </Box>
      <Box
        w={'100%'}
        pl={{ base: '15%', sm: '30%', lg: '20%' }}
        pt={4}
        overflow={'hidden'}
      >
        <Text
          w={{ base: '90%', md: '50%', lg: '90%', xl: '70%' }}
          fontSize={16}
          fontWeight={200}
          textAlign={'left'}
          opacity={0}
          ref={(text: any) => textsRef.current.push(text)}
        >
          I build high quality, pixel perfect product that meet your exact
          requirements
        </Text>
      </Box>

      <Box
        w={'100%'}
        ref={(text: any) => indexesRef.current.push(text)}
        opacity={0}
      >
        <IndexSingleRow
          title={'ABOUT'}
          isSelected={selectedIndex === AboutMeIndexTypes.ABOUT_ME}
          onClick={() => {
            scrollToAboutMe()
            setSelectedIndex(AboutMeIndexTypes.ABOUT_ME)
          }}
        />
      </Box>
      <Box
        w={'100%'}
        ref={(text: any) => indexesRef.current.push(text)}
        opacity={0}
      >
        <IndexSingleRow
          title={'EXPERIENCE'}
          isSelected={selectedIndex === AboutMeIndexTypes.EXPERIENCE}
          onClick={() => {
            scrollToExperience()
            setSelectedIndex(AboutMeIndexTypes.EXPERIENCE)
          }}
        />
      </Box>
      <Box
        w={'100%'}
        ref={(text: any) => indexesRef.current.push(text)}
        opacity={0}
      >
        <IndexSingleRow
          title={'PROJECTS'}
          isSelected={selectedIndex === AboutMeIndexTypes.PROJECTS}
          onClick={() => {
            scrollToProjects()
            setSelectedIndex(AboutMeIndexTypes.PROJECTS)
          }}
        />
      </Box>
      <Box
        w={'100%'}
        ref={(text: any) => indexesRef.current.push(text)}
        opacity={0}
      >
        <IndexSingleRow
          title={'PROGRAMMING LANGUAGES'}
          isSelected={selectedIndex === AboutMeIndexTypes.PROGRAMING_LANGUAGES}
          onClick={() => {
            scrollToProgrammingLanguages()
            setSelectedIndex(AboutMeIndexTypes.PROGRAMING_LANGUAGES)
          }}
        />
      </Box>
      <Box
        w={'100%'}
        ref={(text: any) => indexesRef.current.push(text)}
        opacity={0}
      >
        <IndexSingleRow
          title={'FRAMWORKS'}
          isSelected={selectedIndex === AboutMeIndexTypes.FRAMEWORKS}
          onClick={() => {
            scrollToFrameworks()
            setSelectedIndex(AboutMeIndexTypes.FRAMEWORKS)
          }}
        />
      </Box>
      <Box
        w={'100%'}
        ref={(text: any) => indexesRef.current.push(text)}
        opacity={0}
      >
        <IndexSingleRow
          title={'SPEAKING LANGUAGES'}
          isSelected={selectedIndex === AboutMeIndexTypes.SPEAKING_LANGUAGES}
          onClick={() => {
            scrollToSpeakingLanguages()
            setSelectedIndex(AboutMeIndexTypes.SPEAKING_LANGUAGES)
          }}
        />
      </Box>

      <Flex
        fontSize={'2xl'}
        mt={{ base: 8, lg: 6 }}
        w={'100%'}
        pl={{ base: '15%', sm: '30%', lg: '20%' }}
        gap={5}
      >
        {/* <Box
          cursor={'pointer'}
          _hover={{
            color: '#C59A27',
          }}
          overflow={'hidden'}
        >
          <Box ref={(text: any) => contactsRef.current.push(text)} opacity={0}>
            <ImGithub />
          </Box>
        </Box> */}
        {/* <Link
          href={'https://www.linkedin.com/in/david-botros-967ba4211/'}
          target='_blank'
        >
          <Box
            cursor={'pointer'}
            _hover={{
              color: '#C59A27',
              scale: 1.1,
            }}
            overflow={'hidden'}
          >
            <Box
              ref={(text: any) => contactsRef.current.push(text)}
              opacity={0}
            >
              <ImLinkedin />
            </Box>
          </Box>
        </Link> */}
      </Flex>
    </Center>
  )
}

export default IndexContainer
