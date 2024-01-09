import { useColorModeValue } from '@chakra-ui/react'

export type colors = {
  primaryColor: string
  secondaryColor: string
  backgroundGrayColor: string
  backgroundLightGrayColor: string
  textColor: string
  textOnHover: string
  mainBackground: string
  underLineColor: string
  businessPreviewShortcutMenuBG: string
  mainSearchBarBg: string
}

export function useColor(): colors {
  return {
    primaryColor: useColorModeValue('blue.800', 'whiteAlpha.800'),
    secondaryColor: 'tomato',
    backgroundGrayColor: useColorModeValue('gray.400', 'gray.600'),
    backgroundLightGrayColor: useColorModeValue('gray.100', 'gray.400'),
    textColor: useColorModeValue('white', 'whiteAlpha.800'),
    textOnHover: useColorModeValue('white', 'gray.800'),
    mainBackground: useColorModeValue('whiteAlpha.100', 'gray.800'),
    underLineColor: useColorModeValue('white', 'gray.800'),
    businessPreviewShortcutMenuBG: useColorModeValue('gray.300', 'gray.600'),
    mainSearchBarBg: useColorModeValue('whiteAlpha.700', 'gray.800'),
  }
}
