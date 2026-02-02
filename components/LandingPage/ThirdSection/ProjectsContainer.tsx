import React, { FunctionComponent, useEffect, useRef } from 'react'
import { Box, Show, Text } from '@chakra-ui/react'
import { Element } from 'react-scroll'
import { AboutMeIndexTypes } from '../../../shared/enums/about-me-index-types.enum'
import { SingleProjectAttributes } from '../../../shared/interfaces/SingleProjectAttributes'
import SingleProject from './SingleProject'

type Props = {
  setSelectedIndex: (value: AboutMeIndexTypes) => void
}
const ProjectsContainer: FunctionComponent<Props> = ({ setSelectedIndex }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const projects: SingleProjectAttributes[] = [
    {
      title: 'Crewser – Time Tracking SaaS',
      description:
        'Designed and developed the frontend architecture for a time-tracking SaaS using React and TypeScript. Delivered a scalable, production-ready application with a strong focus on usability, performance, and long-term maintainability. Owned frontend technical decisions from early development through production release.',
      skills: [
        'React',
        'TypeScript',
        'Next.js',
        'JavaScript',
        'HTML',
        'CSS',
        'Git',
      ],
    },

    {
      title: 'MetaInfoXR – Augmented Reality Events App',
      description:
        'Led the frontend development of a React Native and TypeScript augmented reality mobile application featuring an interactive map for local events. Defined frontend architecture, improved performance and responsiveness, and guided junior developers through code reviews and internal React workshops.',
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
    {
      title: 'AOK Germany – Insurance Internal Application',
      description:
        'Developed a feature-rich internal insurance application using React, Electron, and TypeScript. Built reusable UI components, validated them through Storybook, implemented local data storage, and ensured application reliability through comprehensive unit testing with Jest.',
      skills: [
        'React',
        'Electron',
        'TypeScript',
        'JavaScript',
        'Chakra UI',
        'Recoil',
        'Storybook',
        'Jest',
        'Git',
      ],
    },
  ]
  useEffect(() => {
    const handleScroll = () => {
      const containerElement = containerRef.current

      if (containerElement) {
        const containerrect = containerElement.getBoundingClientRect()
        if (
          window.innerHeight >= containerrect.top &&
          window.innerHeight <= containerrect.bottom + 65
        ) {
          setSelectedIndex(AboutMeIndexTypes.PROJECTS)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setSelectedIndex])
  return (
    <Element name='projectsComponent'>
      <Box
        w={'100%'}
        ref={containerRef}
        p={{ base: 1, sm: 7, md: 8, lg: 8 }}
        pt={14}
      >
        <Show below='lg'>
          <Text
            fontSize={20}
            color={'white'}
            mb={3}
            fontWeight={700}
            pl={{ base: 4, sm: 0, md: 4 }}
          >
            PROJECTS
          </Text>
        </Show>

        {projects.map((project, index) => {
          return <SingleProject project={project} key={index} />
        })}
      </Box>
    </Element>
  )
}

export default ProjectsContainer
