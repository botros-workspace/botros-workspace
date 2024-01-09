import { Flex, Box, Text, Show } from '@chakra-ui/react'
import React, { FunctionComponent, useState } from 'react'

type Props = {
  title: string
  isSelected: boolean
  onClick: () => void
}
const IndexSingleRow: FunctionComponent<Props> = ({
  title,
  isSelected,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Show above='lg'>
      <Flex
        w={'100%'}
        pl={{ base: '15%', sm: '30%', lg: '20%' }}
        mt={6}
        h={8}
        flexDir={'row'}
        gap={4}
        onClick={() => onClick()}
        textAlign={'center'}
      >
        <Box
          h={0.5}
          w={isHovered || isSelected ? 16 : 8}
          opacity={isHovered || isSelected ? 1 : 0.5}
          bg={isHovered || isSelected ? '#C59A27' : 'white'}
          transition='all .1s ease-in-out'
          mt={3}
          cursor={'pointer'}
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
        ></Box>

        <Text
          opacity={isHovered || isSelected ? 1 : 0.5}
          fontSize={isHovered || isSelected ? 14 : 13}
          fontWeight={isHovered || isSelected ? 500 : 300}
          cursor={'pointer'}
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
        >
          {title}
        </Text>
      </Flex>
    </Show>
  )
}

export default IndexSingleRow
