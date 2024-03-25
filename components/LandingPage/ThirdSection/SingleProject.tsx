import React, { FunctionComponent, useState } from 'react'
import { SingleProjectAttributes } from '../../../shared/interfaces/SingleProjectAttributes'
import { Flex, Text } from '@chakra-ui/react'
import TagsContainer from '../../shared/TagsContainer'

type Props = {
  project: SingleProjectAttributes
}

const SingleProject: FunctionComponent<Props> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Flex
      h={'100%'}
      flexDir={'column'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      w={{ base: '90%', sm: '95%', xl: '90%' }}
      borderRadius={'lg'}
      borderWidth={{ base: 0, lg: 0.5 }}
      borderColor={!isHovered ? 'white' : '#C59A27'}
      py={2}
      mb={8}
      px={{ base: 4, sm: 0, md: 4, lg: 6 }}
      cursor={'pointer'}
      transition='background-color 0.3s'
      _hover={{
        bg: { base: 'transparent', lg: 'rgb(197,	154	,39,0.1)' },
      }}
    >
      <Text
        color={!isHovered ? 'white' : 'rgb(197,	154	,39)'}
        fontSize={20}
        mt={3}
        fontWeight={700}
        transition={'all .3s ease-in-out'}
      >
        {project.title}
      </Text>
      <Text
        color={'white'}
        fontSize={{ base: 18, md: 14 }}
        mt={3}
        fontWeight={400}
        lineHeight={2}
      >
        {project.description}
      </Text>
      <TagsContainer skills={project.skills} isHovered={isHovered} />
    </Flex>
  )
}

export default SingleProject
