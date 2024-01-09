import { Box, SimpleGrid } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react'
import SingleSkillContainer from './SingleSkillContainer'
import { SingleSkillContainerAttributes } from '../../../shared/interfaces/SingleSkillContainerAttribute'
import ReactSVG from '../../../public/skills/ReactLogo'
import JavaScriptSVG from '../../../public/skills/JavaScriptLogo'
import GitSVG from '../../../public/skills/GitLogo'
import CSS3SVG from '../../../public/skills/CSS3Logo'
import NextJsSVG from '../../../public/skills/NextjsLogo'
import { gsap } from 'gsap'
import GSAPSVG from '../../../public/skills/GSAPLogo'
import RecoilSVG from '../../../public/skills/RecoilLogo'
import TypeScriptSVG from '../../../public/skills/TypeScriptLogo'
import DjangoSVG from '../../../public/skills/DjangoLogo'
import PythonSVG from '../../../public/skills/PythonLogo'
import HTMLSVG from '../../../public/skills/HtmlLogo'

const SkillsGallery: FunctionComponent = () => {
  const skillsRef = useRef<any>([])
  const timelineRef = useRef(gsap.timeline())

  const allSkills: SingleSkillContainerAttributes[] = useMemo(
    () => [
      {
        title: 'React',
        image: <ReactSVG />,
        delay: 100,
      },
      {
        title: 'React Native',
        image: <ReactSVG />,
        delay: 150,
      },
      {
        title: 'Nextjs',
        image: <NextJsSVG />,
        delay: 200,
      },
      {
        title: 'JavaScript',
        image: <JavaScriptSVG />,
        delay: 250,
      },
      {
        title: 'GSAP',
        image: <GSAPSVG />,
        delay: 350,
      },
      {
        title: 'Recoil',
        image: <RecoilSVG />,
        delay: 450,
      },
      {
        title: 'Django',
        image: <DjangoSVG />,
        delay: 300,
      },

      {
        title: 'TypeScript',
        image: <TypeScriptSVG />,
        delay: 400,
      },

      {
        title: 'Git',
        image: <GitSVG />,
        delay: 500,
      },
      {
        title: 'Python',
        image: <PythonSVG />,
        delay: 550,
      },
      {
        title: 'HTML5',
        image: <HTMLSVG />,
        delay: 600,
      },
      {
        title: 'CSS3',
        image: <CSS3SVG />,
        delay: 650,
      },
    ],
    []
  )
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.to(skillsRef.current, {
        transform: 'translateY(0%)',
        opacity: 1,
        delay: 1.5,
        stagger: 0.2,
        duration: 3,
        ease: 'expo.inOut',
      })
    })
    return () => context.revert()
  }, [])

  return (
    <Box
      w={{ base: '100%', sm: '85%', lg: '70%' }}
      h={{ base: '50%', lg: '55%' }}
      m={'auto'}
      overflow={'scroll'}
      mt={{ base: '10%', sm: '-10%', md: '10%', lg: '-10%', xl: '4%' }}
    >
      <SimpleGrid
        minChildWidth={{ base: '95px', md: '120px', lg: '130px' }}
        spacingX={'20px'}
        spacingY={{ base: '0px', md: '40px' }}
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        alignItems={'center'}
        overflow={'hidden'}
      >
        {allSkills.map(
          (skill: SingleSkillContainerAttributes, index: number) => {
            return (
              <Box
                ref={(text: any) => skillsRef.current.push(text)}
                key={index}
                transform={'translateY(800%)'}
                opacity={0}
              >
                <SingleSkillContainer skill={skill} />
              </Box>
            )
          }
        )}
      </SimpleGrid>
    </Box>
  )
}

export default SkillsGallery
