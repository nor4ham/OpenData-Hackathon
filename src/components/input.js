import { Flex, Spacer ,Box ,SimpleGrid,Input,Select} from '@chakra-ui/react';
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
    <Flex id='input' >
   <SimpleGrid columns={1} spacing={10} >
  <Box  pt={20}  px={20}  heightp='80x' >
  <FormControl>
  <FormLabel>رابط البيانات</FormLabel>
  <Input type='url'  />
</FormControl>
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
  <RadioGroup onChange={setValue} value={value} >
      <Stack direction='row'>
        <Radio colorScheme='red'  value='1'>الاكتمال</Radio>
        <Radio colorScheme='red' value='2'>نقاء البيانات</Radio>
        <Radio colorScheme='red' value='3'>التوقيت</Radio>
        <Radio colorScheme='red' value='4'>نقاء البيانات</Radio>
        <Radio colorScheme='red' value='5'>البيانات الوصفيه</Radio>

      </Stack>
    </RadioGroup>
  </Box>
  <Box  pb={20}  px={20}  heightp='80x' >
  <ButtonGroup variant='outline' spacing='6'>
  <Button onClick={show} colorScheme='black'>Save</Button>
  <Button onClick={cancel} colorScheme='red'  >Cancel</Button>
</ButtonGroup>
  </Box>

 </SimpleGrid>

    <Spacer />
    {result? <Box py={20}  px={20} bg='tomato' height='80px' width={'80px'}>
      result
    </Box>:null}
   
  </Flex>
  )
}
