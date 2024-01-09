import React, { FunctionComponent } from 'react'
import { Flex } from '@chakra-ui/react'
import AboutMeText from './AboutMeText'
import ExperienceContainer from './ExperienceContainer'
import ProjectsContainer from './ProjectsContainer'
import ProgrammingLanguagesContainer from './ProgrammingLanguagesContainer'
import SpeakingLanguagesContainer from './SpeakingLanguagesContainer'
import { AboutMeIndexTypes } from '../../../shared/enums/about-me-index-types.enum'
import FrameworksContainer from './FrameworksContainer'
import ContentSeparator from '../../shared/ContentSeparator'

type Props = {
  setSelectedIndex: (value: AboutMeIndexTypes) => void
}
const ContentContainer: FunctionComponent<Props> = ({ setSelectedIndex }) => {
  return (
    <Flex w={'100%'} flexDir={'column'}>
      <AboutMeText setSelectedIndex={setSelectedIndex} />
      <ContentSeparator />
      <ExperienceContainer setSelectedIndex={setSelectedIndex} />
      <ContentSeparator />
      <ProjectsContainer setSelectedIndex={setSelectedIndex} />
      <ContentSeparator />
      <ProgrammingLanguagesContainer setSelectedIndex={setSelectedIndex} />
      <ContentSeparator />
      <FrameworksContainer setSelectedIndex={setSelectedIndex} />
      <ContentSeparator />
      <SpeakingLanguagesContainer setSelectedIndex={setSelectedIndex} />
    </Flex>
  )
}

export default ContentContainer
