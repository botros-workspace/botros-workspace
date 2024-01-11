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
      title: 'Germany insurence internal system',
      description:
        'I worked on different projects using different programming languages and frameworks, alone and in teams, in which I have learned how to collaborate on code, be consistent in my style of coding and how to maintain a code base of a project.',
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
      title: 'Augmented reality app for vicinity events',
      description:
        'I worked on different projects using different programming languages and frameworks, alone and in teams, in which I have learned how to collaborate on code, be consistent in my style of coding and how to maintain a code base of a project.',
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
