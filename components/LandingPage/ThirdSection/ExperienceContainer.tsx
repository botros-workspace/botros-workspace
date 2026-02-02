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
      date: '2017 – Present',
      title: 'Frontend Engineer (Freelance / Contract)',
      description: [
        '• Designed and built scalable React + TypeScript architectures for multiple clients',
        '• Delivered production-ready SaaS and internal tools used in real-world environments',
        '• Improved frontend performance and load times by 30–40% through optimized rendering and state management',
        '• Created reusable component systems and design patterns to reduce development and maintenance effort',
        '• Collaborated directly with founders, designers, and backend engineers to define requirements and ship features',
        '• Owned frontend delivery end-to-end, from architecture and implementation to testing and deployment',
        '• Frequently brought in to define frontend architecture and technical direction for early-stage products',
      ],
      skills: [
        'React',
        'TypeScript',
        'Next.js',
        'JavaScript',
        'Zustand',
        'Recoil',
        'HTML',
        'CSS',
        'Git',
      ],
    },

    {
      date: '2023 – 2024',
      title: 'Lead Frontend Developer @ Crewser',
      description: [
        '• Designed and developed the frontend architecture for a time-tracking SaaS using React and TypeScript',
        '• Built a scalable, production-ready application with a strong focus on usability and performance',
        '• Took ownership of frontend technical decisions from early development through production release',
        '• Implemented clean, maintainable component structures to support long-term product growth',
      ],
      skills: [
        'React',
        'TypeScript',
        'Next.js',
        'JavaScript',
        'CSS',
        'Framer Motion',
        'Git',
      ],
    },

    {
      date: '2022 – 2023',
      title: 'Frontend Team Lead @ MetaInfoXR',
      description: [
        '• Led frontend development of a mobile application and data entry system from concept to production',
        '• Defined frontend and backend architecture to improve scalability, maintainability, and long-term growth',
        '• Mentored and onboarded developers, conducted code reviews, and enforced frontend best practices',
        '• Led internal React workshops and knowledge-sharing sessions',
        '• Worked closely with stakeholders to align technical decisions with business goals',
      ],
      skills: [
        'React',
        'React Native',
        'TypeScript',
        'JavaScript',
        'Native Base',
        'Chakra UI',
        'Recoil',
        'Git',
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
