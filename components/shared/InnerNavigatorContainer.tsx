import { Box } from '@chakra-ui/react'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi'
import { SectionsTypes } from '../../shared/enums/sections-types.enum'
import { gsap } from 'gsap'

type Props = {
  containerRef: any
  handleContainerChangeFromInside: (value: SectionsTypes) => void
  nextSection?: SectionsTypes
  previousSection?: SectionsTypes
  delay: number
}
const InnerNavigatorContainer: FunctionComponent<Props> = ({
  containerRef,
  handleContainerChangeFromInside,
  previousSection,
  nextSection,
  delay,
}) => {
  const [canNavigate, setCanNavigate] = useState(false)
  const nextButtonRef = useRef(null)
  const previousButtonRef = useRef(null)
  const timelineRef = useRef(gsap.timeline())
  const handleNextSectionPress = useCallback(() => {
    if (nextSection) {
      const context = gsap.context(() => {
        const tl = timelineRef.current

        tl.to(containerRef.current, {
          transform: 'translateX(500%) scale(0)',
          opacity: 0,
          background: '#121212',
          duration: 1,
          ease: 'expo.inOut',
          onComplete: () => {
            handleContainerChangeFromInside(nextSection)
          },
        })
      })
      return () => context.revert()
    }
  }, [containerRef, handleContainerChangeFromInside, nextSection])
  const handlePreviousSectionPress = useCallback(() => {
    if (previousSection) {
      const context = gsap.context(() => {
        const tl = timelineRef.current

        tl.to(containerRef.current, {
          transform: 'translateX(-500%) scale(0)',
          background: '#121212',
          opacity: 0,
          duration: 1,
          ease: 'expo.inOut',
          onComplete: () => {
            handleContainerChangeFromInside(previousSection)
          },
        })
      })
      return () => context.revert()
    }
  }, [containerRef, handleContainerChangeFromInside, previousSection])
  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current

      tl.fromTo(
        nextButtonRef.current,
        {
          transform: 'translateX(200%)',
        },
        {
          transform: 'translateX(0%)',
          delay: delay,
          opacity: 1,
          ease: 'expo.inOut',
        }
      ).fromTo(
        previousButtonRef.current,
        {
          transform: 'translateX(-200%)',
        },
        {
          transform: 'translateX(0%)',
          opacity: 1,
          ease: 'expo.inOut',
          onComplete: () => setCanNavigate(true),
        },
        '<'
      )
    })
    return () => context.revert()
  }, [delay])
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (canNavigate) {
        if (event.key === 'ArrowLeft') {
          handlePreviousSectionPress()
        } else if (event.key === 'ArrowRight') {
          handleNextSectionPress()
        }
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [canNavigate, handleNextSectionPress, handlePreviousSectionPress])
  return (
    <>
      {nextSection && (
        <Box
          pos={'absolute'}
          right={{ base: 1, lg: 5 }}
          top={400}
          onClick={handleNextSectionPress}
          overflow={'hidden'}
          zIndex={9999999}
          borderRadius={'50%'}
          _hover={{
            transform: 'scale(0.8)',
            opacity: 0.5,
            transition: 'all 0.1s ease-in-out',
            borderWidth: '1px',
            borderRadius: '50%',
          }}
        >
          <Box
            ref={nextButtonRef}
            w={10}
            opacity={0}
            color={'white'}
            zIndex={9999999}
            fontSize={{ base: 20, md: 28 }}
            cursor={'pointer'}
            bg={'rgb(168,168,168,0.2)'}
            borderRadius={'50%'}
            py={1}
            as='button'
            disabled={!canNavigate}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <HiArrowNarrowRight />
          </Box>
        </Box>
      )}
      {previousSection && (
        <Box
          pos={'absolute'}
          left={{ base: 1, lg: 5 }}
          top={400}
          zIndex={9999999}
          borderRadius={'50%'}
          _hover={{
            transform: 'scale(0.8)',
            opacity: 0.5,
            transition: 'all 0.1s ease-in-out',
            borderWidth: '1px',
            borderRadius: '50%',
          }}
          onClick={handlePreviousSectionPress}
          overflow={'hidden'}
        >
          <Box
            ref={previousButtonRef}
            w={10}
            opacity={0}
            color={'white'}
            zIndex={9999999}
            py={1}
            fontSize={{ base: 20, md: 28 }}
            cursor={'pointer'}
            bg={'rgb(168,168,168,0.2)'}
            borderRadius={'50%'}
            as='button'
            disabled={!canNavigate}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <HiArrowNarrowLeft />
          </Box>
        </Box>
      )}
    </>
  )
}

export default InnerNavigatorContainer
