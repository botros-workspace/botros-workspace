import { Box, Flex, Show, Text } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import { AboutMeIndexTypes } from '../../../shared/enums/about-me-index-types.enum'
import SingleFramework from './SingleFramework'
import ReactSVG from '../../../public/skills/ReactLogo'

type Props = {
  setSelectedIndex: (value: AboutMeIndexTypes) => void
}

const FrameworksContainer: FunctionComponent<Props> = ({
  setSelectedIndex,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const frameworksArray = [
    {
      title: 'REACTJS',
      svg: <ReactSVG />,
    },
    {
      title: 'REACT NATIVE',
      svg: <ReactSVG />,
    },
    {
      title: 'ELECTRON',
      svg: <ReactSVG />,
    },
    {
      title: 'NEXTJS',
      image: './nextjs.png',
    },
    {
      title: 'DJANGO',
      image: './django.png',
    },
  ]
  useEffect(() => {
    const handleScroll = () => {
      const containerElement = containerRef.current

      if (containerElement) {
        const containerrect = containerElement.getBoundingClientRect()
        if (
          window.innerHeight >= containerrect.top + 350 &&
          window.innerHeight <= containerrect.bottom + 150
        ) {
          setSelectedIndex(AboutMeIndexTypes.FRAMEWORKS)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setSelectedIndex])
  return (
    <Element name='frameworksComponent'>
      <Box w={{ base: '100%', sm: '80%', lg: '90%' }} ref={containerRef}>
        <Show below='lg'>
          <Text
            fontSize={20}
            color={'white'}
            fontWeight={700}
            pt={12}
            pl={{ base: 5, md: 12, lg: 8 }}
            mb={6}
          >
            FRAMEWORKS
          </Text>
        </Show>
        <Flex
          flexWrap={'wrap'}
          flexGrow={1}
          gap={16}
          justifyContent={'center'}
          p={{ base: 0, md: 0, lg: 8 }}
        >
          {frameworksArray.map((framework, index) => {
            return (
              <SingleFramework
                image={framework.image}
                svg={framework.svg}
                title={framework.title}
                key={index}
              />
            )
          })}
        </Flex>
      </Box>
    </Element>
  )
}

export default FrameworksContainer
