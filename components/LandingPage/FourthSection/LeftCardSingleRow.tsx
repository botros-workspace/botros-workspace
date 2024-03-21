import { Flex, Box, useToast } from '@chakra-ui/react'
import React, { FunctionComponent, ReactNode } from 'react'
import TooltipTemplate from '../../shared/TooltipTemplate'
import { FaCircleInfo, FaRegCopy } from 'react-icons/fa6'
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
            duration: 2000,
            render: () => (
              <Flex
                direction={'row'}
                color={'white'}
                borderWidth={1}
                borderRadius={'5px'}
                borderColor={'white'}
                px={4}
                h={16}
                w={'auto'}
              >
                <Flex fontSize={20} fontWeight={700} direction={'row'} pt={2.5}>
                  <FaCircleInfo />
                </Flex>
                <Flex direction={'column'} px={4} justifyContent={'center'}>
                  <Flex>{title} has been copied</Flex>
                  <Flex textDecor={'underline'}>{text}</Flex>
                </Flex>
              </Flex>
            ),
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
