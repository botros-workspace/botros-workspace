import { Flex, Box, Image, Text, Center } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'

type Props = {
  image?: string
  svg?: React.JSX.Element
  title: string
}
const SingleFramework: FunctionComponent<Props> = ({ image, title, svg }) => {
  return (
    <Flex
      w={{ base: 16, md: 24, lg: 20, xl: 32 }}
      flexDir={'column'}
      textAlign={'center'}
      gap={4}
      h={{ base: 16, xl: 32 }}
    >
      <Box h={{ base: 16, md: 20, xl: 32 }} w={'100%'}>
        <Center>
          {image && (
            <Image
              alt='framework'
              src={image}
              h={{ base: 14, md: 20, lg: 16, xl: 28 }}
              w={'100%'}
            />
          )}
          {svg && (
            <Box as='svg' h={'50%'} w={'100%'} m={'auto'} viewBox='0 0 130 130'>
              {svg}
            </Box>
          )}
        </Center>
      </Box>
      <Text
        color={'white'}
        fontSize={{ base: 8, md: 12, lg: 10, xl: 12 }}
        fontWeight={700}
        w={'100%'}
        transform={{
          base: 'scaleY(1.3) scaleX(1.3)',
          lg: 'scaleY(1.7) scaleX(1.7)',
        }}
      >
        {title}
      </Text>
    </Flex>
  )
}

export default SingleFramework
