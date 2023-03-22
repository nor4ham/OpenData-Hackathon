import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import img from '../img/makin.jpeg'
  export default function SplitScreen() {
    return (
      <Stack Link to="#list" minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'gray.400',
                  zIndex: -1,
                }}>
                مكمن
              </Text>
              <br />{' '}
              <Text color={'gray.400'} as={'span'}>
                شعار 
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                وصف مشروع
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'black'}
                color={'white'}
                _hover={{
                  bg: 'gray.500',
                }}>
            <a href="#list">افهم المعاير</a>

                
              </Button>
              <Button rounded={'full'}> <a href="#input">ابدا</a></Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              img
            }
          />
        </Flex>
      </Stack>
    );
  }