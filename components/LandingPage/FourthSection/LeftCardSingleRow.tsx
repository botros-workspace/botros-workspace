import { Flex, Box, useToast } from '@chakra-ui/react'
import React, { FunctionComponent, ReactNode } from 'react'
import TooltipTemplate from '../../shared/TooltipTemplate'
type Props = {
  image: ReactNode
  title?: string
  text: string
  isBold: boolean
}
const LeftCardSingleRow: FunctionComponent<Props> = ({
  image,
  title,
  text,
  isBold,
}) => {
  const toast = useToast()

  return (
    <TooltipTemplate
      label={title ? 'Click to copy' : ''}
      hasArrow={false}
      placement={'bottom'}
      shouldWrapChildren={true}
    >
      <Flex
        flexDir={'row'}
        gap={0}
        onClick={() => {
          if (title) {
            navigator.clipboard.writeText(text)
            toast({
              title: `${title} has been copied`,
              description: `${text}`,
              status: 'info',
              duration: 2000,
              isClosable: true,
            })
          }
        }}
        zIndex={999999999}
      >
        <Box
          w={'15%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          fontSize={20}
        >
          {image}
        </Box>
        <Box
          w={'85%'}
          display={'flex'}
          alignItems={'center'}
          fontSize={isBold ? 20 : 18}
          fontWeight={isBold ? 700 : ''}
          as={title ? 'button' : 'section'}
        >
          {text}
        </Box>
      </Flex>
    </TooltipTemplate>
  )
}

export default LeftCardSingleRow
