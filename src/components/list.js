import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

 function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
   <div id='list'>
     <Box maxW="7xl" mx={'auto'} py={20} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        ماهي المعاير?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'معيار ١'} stat={' الاكتمال'} />
        <StatsCard title={'معيار٢'} stat={'تعدد الصيغ'} />
        <StatsCard title={'معيار٣'} stat={'التوقيت'} />
        <StatsCard title={'معيار٤'} stat={'نقاء البيانات'} />
        <StatsCard title={'معيار٥'} stat={'البيانات الوصفيه '} />
        <StatsCard title={'معيار٦'} stat={'نقاء البيانات '} />
        <StatsCard title={'معيار٧'} stat={'المعالجة الإلكترونية '} />

      </SimpleGrid>
    </Box>
   </div>
  );
}