import { Box } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type Props = {
  isActive: boolean
}
const UpperNavigatorPoint: FunctionComponent<Props> = ({ isActive }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      if (isActive) {
        gsap.to(elementRef.current, {
          opacity: 0.9,
          ease: 'elastic',
        })
      } else {
        gsap.to(elementRef.current, {
          height: window.innerWidth > 700 ? 8 : 4,
          width: window.innerWidth > 700 ? 8 : 4,
          opacity: 0.2,
          duration: 0.8,
          ease: 'power2.out',
        })
      }
    })
    return () => context.revert()
  }, [isActive])
  return (
    <Box
      w={{ base: 2, md: 3 }}
      h={{ base: 2, md: 3 }}
      borderRadius={'50%'}
      bg={'white'}
      ref={elementRef}
      zIndex={9999}
    ></Box>
  )
}

export default UpperNavigatorPoint
