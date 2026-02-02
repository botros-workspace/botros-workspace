import { Flex } from '@chakra-ui/react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import React from 'react'

export type NavigationDirection = 'left' | 'right'

interface NavigationArrowProps {
  direction: NavigationDirection
  onClick: () => void
  top?: string | number
}

export const NavigationArrow: React.FC<NavigationArrowProps> = ({
  direction,
  onClick,
  top = '50%',
}) => {
  const isLeft = direction === 'left'

  return (
    <Flex
      pos='absolute'
      top={top}
      {...(isLeft ? { left: 2 } : { right: 2 })}
      transform='translateY(-50%)'
      cursor='pointer'
      zIndex={99999}
      onClick={onClick}
    >
      <Flex
        fontSize={{ base: 24, md: 32 }}
        color='white'
        animation={
          isLeft
            ? 'arrowLeft 2.4s ease-in-out infinite'
            : 'arrowRight 2.4s ease-in-out infinite'
        }
        sx={{
          '@keyframes arrowLeft': {
            '0%': { transform: 'translateX(0)', opacity: 0.6 },
            '40%': { transform: 'translateX(-8px)', opacity: 1 },
            '100%': { transform: 'translateX(0)', opacity: 0.6 },
          },
          '@keyframes arrowRight': {
            '0%': { transform: 'translateX(0)', opacity: 0.6 },
            '40%': { transform: 'translateX(8px)', opacity: 1 },
            '100%': { transform: 'translateX(0)', opacity: 0.6 },
          },
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      >
        {isLeft ? <FaAngleLeft /> : <FaAngleRight />}
      </Flex>
    </Flex>
  )
}
