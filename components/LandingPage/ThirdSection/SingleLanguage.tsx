import { Flex, Text, Tooltip } from '@chakra-ui/react'
import React, { FunctionComponent, useState } from 'react'
import TooltipTemplate from '../../shared/TooltipTemplate'

type Props = {
  language: string
  level: string
  shortcut: string
}
const SingleLanguage: FunctionComponent<Props> = ({
  language,
  level,
  shortcut,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <TooltipTemplate
      label={language}
      hasArrow={true}
      placement={'bottom'}
      shouldWrapChildren={true}
    >
      <Flex
        flexDir={'column'}
        cursor={'pointer'}
        w={{ base: 24, md: 40, lg: 32, xl: 40 }}
        gap={1}
        borderRadius={'lg'}
        borderWidth={1}
        p={1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Text
          color={'rgb(197,	154	,39,1)'}
          textAlign={'center'}
          fontSize={{ base: 28, md: 40 }}
          fontWeight={700}
        >
          {shortcut}
        </Text>
        <Text
          color={'white'}
          fontSize={{ base: 14, md: 20 }}
          fontWeight={700}
          pb={2}
          textAlign={'center'}
          animation={isHovered ? 'bounce ease-in-out 0.6s both' : ''}
        >
          {level}
        </Text>
      </Flex>
    </TooltipTemplate>
  )
}

export default SingleLanguage
