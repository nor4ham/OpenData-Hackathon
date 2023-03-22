import { Flex, Spacer ,Box ,SimpleGrid,Input,Select} from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
    Button, ButtonGroup,
     FormHelperText,Stack
  } from '@chakra-ui/react'
  import { Radio, RadioGroup } from '@chakra-ui/react'
  export default function InputOutput() {
    const [value, setValue] = React.useState('1')
    const [result, setResult] = React.useState(false)
    function show(){
        setResult(true);
    }
    function cancel(){
        setResult(false);
    }
  return (
    <Stack id='input' minH={'100vh'} direction={{ base: 'column', md: 'column' }}>
   <SimpleGrid columns={1} spacing={10} >
  <Box  pt={20}  px={20}  heightp='80x' >
 
  </Box>
  <Box  pt={0}  px={20}  heightp='80x' >
  <Select placeholder='القطاع'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
  </Box>
  <Box  pt={0}  px={20}  heightp='80x' >
  <Select placeholder='الناشر'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
  </Box>
  <Box  pt={0}  px={20}  heightp='3' >
    اختر المعيار 
  </Box>

  <Box  pt={0}  px={20}  heightp='80x' >
  <CheckboxGroup colorScheme='red' defaultValue={['naruto', 'kakashi']}>
  <Stack spacing={[1, 5]} direction={['column', 'row']}>
    <Checkbox value='1'>البيانات الوصفية</Checkbox>
    <Checkbox value='2'>تنوع الصيغ</Checkbox>
    <Checkbox value='3'>مفتوحة المصدر</Checkbox>
    <Checkbox value='4'>التوقيت</Checkbox>
    <Checkbox value='5'>الإكتمال</Checkbox>
    <Checkbox value='6'>نقاء البيانات</Checkbox>
    <Checkbox value='7'>المعالجة الإلكترونية</Checkbox>

  </Stack>
</CheckboxGroup>

  </Box>
  <Box  pb={20}  px={20}  heightp='80x' >
  <ButtonGroup variant='outline' spacing='6'>
  <Button onClick={show} colorScheme='black'>Save</Button>
  <Button onClick={cancel} colorScheme='red'  >Cancel</Button>
</ButtonGroup>
  </Box>

 </SimpleGrid>

   
    <Flex flex={1}>
    {result? <Box py={20}  px={20} bg='tomato' height='80px' w={'full'} h={'full'} >
      result
    </Box>:null}
        </Flex>
  </Stack>
  )
}
