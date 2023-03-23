import { Flex, Spacer ,Box ,SimpleGrid,Input,Select} from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    FormControl,
    FormLabel,
    Button, ButtonGroup,
     FormHelperText,Stack,Text
  } from '@chakra-ui/react'
 
  import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  
  



  export default function InputOutput() {

     const [result, setResult] = React.useState(false)
     const [save, setSave] = React.useState(true)

    const [items, setItems] = React.useState([])

    const [publisher, setPublisher] = React.useState("")
    const [value, setValue] = React.useState("health")

    const [checkbox, setCheckbox] = React.useState([])

    function show(){
        setResult(true);
        setSave(false)
    }
 
    function refreshPage() {
      window.location.reload(false);
    }
  
     //api 
   async function api(){
    let url = "http://ec2-34-202-159-48.compute-1.amazonaws.com:5000/api/"+value+"/publisher/"+checkbox.join('')
     let config = {
      url:url,
      method: "get",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With',
        'Access-Control-Allow-Credentials': 'true'
      }
  };
  let response = await axios.request(config);
  setItems(response.data)
  console.log(response.data.data)
    }

   const data = {
    labels: items.labels,
    datasets: [
      {
        label: 'Radar Chart (%)',
        data:items.data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

    useEffect( () => {
      api()
      console.log(value)
    }, [checkbox])


 
  return (
    <Stack id='input' minH={'100vh'} direction={{ base: 'column', md: 'column' }}>
   <SimpleGrid columns={1} spacing={10} >
  <Box  pt={20}  px={20}  heightp='80x' >
 
  </Box>
  <Box  pt={0}  px={20}  heightp='80x' >
  <Select placeholder='القطاع' onChange={(value)=>setValue(value.target.value)}>
  <option value='all'>كامل القطاع </option>
  <option value='health'>الصحه </option>
  <option value='agriculture_and_fishing'>زراعه</option>
  <option value='social_services'>خدمات اجتماعيه </option>
  <option value='transport_and_communications'>نقل</option>
  <option value='trade_-internal_and_externa'>تجاره</option>
  <option value='education_and_training'>تعليم</option>
  <option value='accounts_financial_monetary_affairs_and_industry'>المال والصناعه </option>
  <option value='arab_gulf_cooperation_council_-gcc-'>مجلس التعاون لدول الخليج العربيه </option>
</Select>
  </Box>
  <Box  pt={0}  px={20}  heightp='80x' >
  <Select onChange={(value)=>setPublisher(value.target.value)}  >
  <option selected value='publisher'>الناشر</option>
 </Select>
  </Box>
  <Box  pt={0}  px={20}  heightp='3' >
    اختر المعيار 
  </Box>

  <Box  pt={0}  px={20}  heightp='80x' >
  <Stack spacing={[1, 5]} direction={['column', 'row']} >

    <Checkbox   colorScheme='red' onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}    value='1'>البيانات الوصفية</Checkbox>
    <Checkbox colorScheme='red' onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}    value='2'>تنوع الصيغ</Checkbox>
    <Checkbox colorScheme='red' onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}  value='3'>مفتوحة المصدر</Checkbox>
    <Checkbox colorScheme='red'onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}   value='4'>التوقيت</Checkbox>
    <Checkbox isDisabled colorScheme='red'onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}    value='5'>الإكتمال</Checkbox>
    <Checkbox isDisabled colorScheme='red'onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}  value='6' >نقاء البيانات</Checkbox>
    <Checkbox isDisabled colorScheme='red'onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}  value='7'>المعالجة الإلكترونية</Checkbox>

  </Stack>

  </Box>
  <Box  pb={20}  px={20}  heightp='80x' >
  <ButtonGroup variant='outline' spacing='6'>
  {save?<Button onClick={show} colorScheme='black'>Save</Button>:null} 
  
  <Button onClick={refreshPage} colorScheme='red'  >Cancel</Button>
</ButtonGroup>
  </Box>

 </SimpleGrid>
 <Flex justify={'space-between'}  >
  {result? <Box py={4}  px={4} >
    <Radar  data={data} /></Box>   :null}
  {result? <SimpleGrid columns={1} > 
   <p  > النسبه الكليه لنضج وجودة البيانات  : {items.total} %  </p>

   {items.labels.map((label ,index)=><p  > {label}  : {items.data[index]} % </p> )}
  
   </SimpleGrid> :null}

<Box width={'40px'} ></Box>
 </Flex>
{/*  <Stack   minH={'100vh'} direction={{ base: 'column', md: 'column' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
     {result? <Box py={20}  px={20} >
    <Radar  data={data} />
    <br/>
    <Text  fontSize='4xl'> النسبه الكليه لنضج وجودة البيانات  : {items.total} ٪ </Text>

    </Box>: null}
             </Stack> 
          </Flex>         
  </Stack> 
    */}
  </Stack>
  )
}
