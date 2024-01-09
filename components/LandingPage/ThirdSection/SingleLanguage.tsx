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
        w={{ base: 24, md: 28, xl: 40 }}
        gap={6}
        borderRadius={'lg'}
        borderWidth={1}
        p={4}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Text
          transform={{
            base: 'scaleY(2) scaleX(2)',
            md: 'scaleY(2.7) scaleX(2.7)',
          }}
          color={'rgb(197,	154	,39,1)'}
          textAlign={'center'}
          fontSize={{ base: 12, lg: 14, xl: 16 }}
          fontWeight={700}
          w={'100%'}
        >
          {shortcut}
        </Text>
        <Text
          color={'white'}
          fontSize={{ base: 14, md: 16 }}
          fontWeight={700}
          w={'100%'}
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
