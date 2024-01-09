import { Box, Center, Flex, Link, Text } from '@chakra-ui/react'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useColor } from '../../shared/hooks/use-color.hook'
import { useRouter } from 'next/router'
import { motion, useScroll, useSpring } from 'framer-motion'

const Navbar: FunctionComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [show, setshow] = useState(false)
  const colors = useColor()
  const [isMouseOnAbout, setIsMouseOnAbout] = useState(false)
  const [isMouseOnContact, setIsMouseOnContact] = useState(false)
  const router = useRouter()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    if (router.pathname !== '/') {
      setshow(true)
    } else {
      setTimeout(() => {
        setshow(true)
      }, 700)
    }
  }, [router.pathname])
  return (
    <>
      {show && (
        <Box
          w='100%'
          backdropFilter={
            isScrolled && router.pathname === '/about_me' ? 'blur(5px)' : 'none'
          }
          transition={'ease-in-out .6s'}
          // animation={
          //   router.pathname === '/'
          //     ? 'slide-down ease-in-out .5s both'
          //     : 'unset'
          // }
          position='static'
          top={0}
          pos={'fixed'}
          zIndex={9999}
          left={0}
          right={0}
          h={'70px'}
        >
          <Flex
            mx={7}
            // borderBottomWidth={router.pathname === '/about_me' ? 1 : 0}
            // borderBottomColor={colors.textColor}
            h={'100%'}
            justifyContent={'space-between'}
            color={'white'}
          >
            <Flex
              fontWeight={800}
              fontFamily={'Brush Script, cursive'}
              fontSize={20}
            >
              <Link
                href='/'
                _hover={{ textDecoration: 'none' }}
                alignSelf={'center'}
                zIndex={999}
              >
                David Botros
              </Link>
            </Flex>
            <Flex flexDir={'row'}>
              <Center gap={1}>
                <Link
                  zIndex={999}
                  href='/about_me'
                  _hover={{ textDecoration: 'nonw' }}
                  alignSelf={'center'}
                  pos={'relative'}
                  onMouseEnter={() => setIsMouseOnAbout(true)}
                  onMouseLeave={() => setIsMouseOnAbout(false)}
                >
                  about
                  <Box
                    w={
                      isMouseOnAbout || router.pathname === '/about_me'
                        ? '100%'
                        : 0
                    }
                    pos={'absolute'}
                    h={0.5}
                    left={0}
                    top={'50%'}
                    bg={'white'}
                    transition={'linear .2s'}
                  ></Box>
                </Link>
                <Text ml={-0.5}>, </Text>
                <Link
                  zIndex={999}
                  href='/about_me'
                  _hover={{ textDecoration: 'nonw' }}
                  alignSelf={'center'}
                  pos={'relative'}
                  onMouseEnter={() => setIsMouseOnContact(true)}
                  onMouseLeave={() => setIsMouseOnContact(false)}
                >
                  contact
                  <Box
                    w={
                      isMouseOnContact || router.pathname === '/contact'
                        ? '100%'
                        : 0
                    }
                    pos={'absolute'}
                    h={0.5}
                    left={0}
                    top={'50%'}
                    bg={'white'}
                    transition={'linear .2s'}
                  ></Box>
                </Link>
              </Center>
            </Flex>
          </Flex>
          {router.pathname === '/about_me' && (
            <motion.div className='progress-bar' style={{ scaleX }} />
          )}
        </Box>
      )}
    </>
  )
}

export default Navbar
