import { Box } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'
import { SingleSkillContainerAttributes } from '../../../shared/interfaces/SingleSkillContainerAttribute'
type Props = {
  skill: SingleSkillContainerAttributes
}

const SingleSkillContainer: FunctionComponent<Props> = ({ skill }) => {
  return (
    <>
      <Box
        color={'white'}
        h={{ base: 24, md: 36, lg: 32 }}
        w={{ base: 24, md: 36, lg: 32 }}
      >
        <Box as='svg' h={'50%'} w={'100%'} m={'auto'} viewBox='0 0 130 130'>
          {skill.image}
        </Box>
        <Box h={'25%'} textAlign={'center'} fontSize={{ base: 12, md: 20 }}>
          {skill.title}
        </Box>
      </Box>
    </>
  )
}

export default SingleSkillContainer
