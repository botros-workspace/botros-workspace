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
      description: [
        '• Code base refactoring',
        '• Refactoring the architecture between frontend and backend',
        '• Managed relations between customer and developers',
        '• Handling all juniors merge requests',
        '• Helping Junior developers with their quests',
        '• Holding workshops to explain the basic principles/ best practices of React',
      ],
      skills: [
        'React',
        'ReactNative',
        'Native Base',
        'Chakra ui',
        'Javascript',
        'Typescript',
        'Recoil',
        'Git',
      ],
    },
    {
      date: 'APR-NOV 2022',
      title: 'React Electron Developer @ Rise',
      description: [
        '• Implemented Elements using React Electron, Typescript and Chakra ui',
        '• Tested elements using Story book',
        '• Created storage functionality to store data locally',
        '• Wrote unit test with Jest',
      ],
      skills: [
        'React',
        'Javascript',
        'Typescript',
        'Electron',
        'Recoil',
        'Chakra ui',
        'Story book',
        'Git',
        'Jira',
        'Confluence',
      ],
    },
    {
      date: 'MAY 17- NOW',
      title: 'Fullstack freelancer',
      description: [
        '• Designed databanks schemas',
        '• Designed the project architecture of the required system',
        '• Created APIS using Django API restframework',
        '• Created the responsive UI using react and typescript',
        '• Created a complete API documentation',
      ],
      skills: [
        'React',
        'Django API',
        'Python',
        'Javascript',
        'Docker',
        'Typescript',
        'Celery',
        'PostgreSQL',
        'Redis',
        'Git',
        'Mongo DB',
        'Chakra ui',
        'Story book',
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
