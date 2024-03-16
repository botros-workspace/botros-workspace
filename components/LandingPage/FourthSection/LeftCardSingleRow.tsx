import { Flex, Box, useToast } from '@chakra-ui/react'
import React, { FunctionComponent, ReactNode } from 'react'
import TooltipTemplate from '../../shared/TooltipTemplate'
import { FaRegCopy } from 'react-icons/fa6'
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
      {title && (
        <TooltipTemplate
          label={'Copy'}
          hasArrow={false}
          placement={'bottom'}
          shouldWrapChildren={false}
        >
          <Box
            w={'10%'}
            cursor={'pointer'}
            borderWidth={1}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'50%'}
            p={1.5}
            _hover={{
              borderColor: '#121212',
              color: 'rgb(197,	154	,39,1)',
            }}
          >
            <FaRegCopy />
          </Box>
        </TooltipTemplate>
      )}
    </Flex>
  )
}

export default LeftCardSingleRow
