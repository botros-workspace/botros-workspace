import { Flex, Box } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'

type Props = {
  skills: string[]
  isHovered: boolean
}
const TagsContainer: FunctionComponent<Props> = ({ skills, isHovered }) => {
  return (
    <Flex
      flexDir={'row'}
      display={'flex'}
      flexGrow={1}
      rowGap={4}
      columnGap={2}
      ml={-1}
      mb={3}
      mr={4}
      flexWrap={'wrap'}
      my={5}
    >
      {skills.map((skill: string, index: number) => {
        return (
          <Box
            key={index}
            color={!isHovered ? 'white' : 'rgb(197,	154	,39,1)'}
            borderRadius={'full'}
            boxShadow={'2xl'}
            textAlign={'center'}
            fontSize={14}
            px={3}
            py={1}
            bg={'rgb(197,	154	,39,0.1)'}
            fontWeight={400}
            animation={
              isHovered
                ? `bounce  0.6s ease ${
                    index === 10
                      ? `1.0s`
                      : index === 11
                      ? `1.1s`
                      : index === 12
                      ? `1.2s`
                      : `0.${index}s`
                  }`
                : ''
            }
          >
            {skill}
          </Box>
        )
      })}
    </Flex>
  )
}

export default TagsContainer
