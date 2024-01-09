import { Box, Text } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import SingleExperienceContainer from './SingleExperienceContainer'
import { AboutMeIndexTypes } from '../../../shared/enums/about-me-index-types.enum'
import { SingleExperienceAttributes } from '../../../shared/interfaces/SingleExperienceAttributes'
import { gsap } from 'gsap'

type Props = {
  setSelectedIndex: (value: AboutMeIndexTypes) => void
}
const ExperienceContainer: FunctionComponent<Props> = ({
  setSelectedIndex,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef(null)
  const timelineRef = useRef(gsap.timeline())

  const experiences: SingleExperienceAttributes[] = [
    {
      date: 'FEB-AUG 2023',
      title: 'Senior developer @ MetaInfo XR',
      description:
        'I worked on different projects using different programming languages and frameworks, alone and in teams, in which I have learned how to collaborate on code, be consistent in my style of coding and how to maintain a code base of a project.',
      skills: ['React', 'ReactNative', 'Javascript', 'Typescript'],
    },
    {
      date: 'APR-NOV 2022',
      title: 'Junior React Electron Developer @ Rise',
      description:
        'I worked on different projects using different programming languages and frameworks, alone and in teams, in which I have learned how to collaborate on code, be consistent in my style of coding and how to maintain a code base of a project.',
      skills: ['React', 'ReactNative', 'Javascript', 'Typescript', 'Electron'],
    },
    {
      date: 'MAY 17-APR 22',
      title: 'Fullstack freelancer',
      description:
        'I worked on different projects using different programming languages and frameworks, alone and in teams, in which I have learned how to collaborate on code, be consistent in my style of coding and how to maintain a code base of a project.',
      skills: [
        'React',
        'ReactNative',
        'Python',
        'Javascript',
        'Docker',
        'Typescript',
      ],
    },
  ]
  useEffect(() => {
    const handleScroll = () => {
      const containerElement = containerRef.current
      if (containerElement) {
        const containerrect = containerElement.getBoundingClientRect()
        if (scrollY >= containerrect.top && scrollY <= containerrect.bottom) {
          setSelectedIndex(AboutMeIndexTypes.EXPERIENCE)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setSelectedIndex])
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to(titleRef.current, {
        opacity: window.innerWidth > 1000 ? 0 : 1,
        duration: 2,
        ease: 'expo.inOut',
      })
    })
    return () => context.revert()
  }, [])
  return (
    <Element name='experienceComponent'>
      <Box
        w={'100%'}
        ref={containerRef}
        p={{ base: 5, sm: 7, md: 12, lg: 8 }}
        pt={14}
        h={'70%'}
      >
        <Text
          fontSize={20}
          color={'white'}
          mb={3}
          fontWeight={700}
          ref={titleRef}
          opacity={0}
        >
          EXPERIENCE
        </Text>

        {experiences.map((experience, index) => {
          return (
            <SingleExperienceContainer experience={experience} key={index} />
          )
        })}
      </Box>
    </Element>
  )
}

export default ExperienceContainer
