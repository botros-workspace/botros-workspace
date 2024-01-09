import { Box, Flex, Show, Text } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import { AboutMeIndexTypes } from '../../../shared/enums/about-me-index-types.enum'
import SingleExperienceContainer from './SingleExperienceContainer'
import SingleLanguage from './SingleLanguage'
type Props = {
  setSelectedIndex: (value: AboutMeIndexTypes) => void
}
const SpeakingLanguagesContainer: FunctionComponent<Props> = ({
  setSelectedIndex,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const handleScroll = () => {
      const containerElement = containerRef.current

      if (containerElement) {
        const containerrect = containerElement.getBoundingClientRect()
        if (window.innerHeight >= containerrect.top + 100) {
          setSelectedIndex(AboutMeIndexTypes.SPEAKING_LANGUAGES)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setSelectedIndex])
  return (
    <Element name='speakingLanguagesComponent'>
      <Box ref={containerRef} mb={52} w={'100%'}>
        <Show below='lg'>
          <Text
            fontSize={20}
            color={'white'}
            fontWeight={700}
            pt={12}
            pl={{ base: 5, md: 12, lg: 8 }}
            mb={6}
          >
            SPEAKING LANGUAGES
          </Text>
        </Show>
        <Flex
          flexDir={'row'}
          flexGrow={1}
          flexWrap={'wrap'}
          w={{ base: '90%', sm: '88%', xl: '90%' }}
          gap={4}
          mx={{ base: 5, sm: 'auto' }}
        >
          <SingleLanguage shortcut='DE' level='Fluent' language='GERMAN' />
          <SingleLanguage shortcut='EN' level='Bilingual' language='ENGLISH' />
          <SingleLanguage shortcut='AR' level='Native' language='ARABIC' />
        </Flex>
      </Box>
    </Element>
  )
}

export default SpeakingLanguagesContainer
