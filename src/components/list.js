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
        <StatsCard title={'معيار ١'} stat={'تعدد صيغ البيانات: أن تكون البيانات متوفرة بأكثر من صيغة للتحكم بها. '} />
        <StatsCard title={'معيار٢'} stat={'الإكتمال: أن تكون البيانات مكتملة إلى أقصى حد ممكن دون قيود.'} />
        <StatsCard title={'معيار٣'} stat={'التوقيت: إتاحة البيانات في الوقت المناسب وذلك للحفاظ على قيمة البيانات الفعلية.'} />
        <StatsCard title={'معيار٤'} stat={'إمكانية الوصول: أن تكون البيانات متاحة للوصول بسهولة للجميع  دون أي شروط أو تمييز. '} />
        <StatsCard title={'معيار٥'} stat={'البيانات الوصفية: ضرورة التوثيق لجميع الاصدارات ولابد من الإشارة إلى التغيرات  التي طرأت عليها. '} />
        <StatsCard title={'معيار٦'} stat={'المعالجة الإلكترونية وتوفر صيغ مفتوحة المصدر: أن تحتوي مجمموعة البيانات على صيغ مفتوحة المصدر تمكن الجميع من التعامل معها دون '} />
        <StatsCard title={'معيار٧'} stat={'  مفتوحة الرخصة: أن لا تخضع البيانات لأي حقوق طبع أو نشر أو براءات اختراع أو علامة تجارية. '} />
      </SimpleGrid>
    </Box>
   </div>
  );
}