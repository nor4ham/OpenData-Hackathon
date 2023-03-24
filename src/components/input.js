import { Flex,Box ,SimpleGrid,Select,Divider,Checkbox,Button, ButtonGroup,Stack,Center} from '@chakra-ui/react';
import React, { useEffect, useState } from "react";

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

     const [result, setResult] = useState(false)
     const [save, setSave] = useState(true)

    const [items, setItems] = useState([])

    const [value, setValue] = useState("health")

    const [checkbox, setCheckbox] = useState([])

    function show(){
        setResult(true);
        setSave(false)
        api_fun()
        console.log("save")
    }
 
    function refreshPage() {
      window.location.reload(false);
    }
  
     //api 
/*    async function api(){
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
  try{let response = await axios.request(config); setItems(response.data)}catch(e){console.log(e.message)}
  
  
    } */
    async function api_fun(){
      let url = "http://ec2-34-202-159-48.compute-1.amazonaws.com:5000/api/"+value+"/publisher/"+checkbox.join('')

      fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result)
        })
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
      console.log("useEffect")
 
     }, [])


 
  return (
    <Flex justify={'space-between'}   id='input' minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
   <SimpleGrid columns={1}  >
  <Box  pt={0}  px={20}   >
  <Select onChange={(value)=>setValue(value.target.value)}>
  <option selected  value='all'>كامل القطاع </option>
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
  <Box  pt={0}  px={20}   >
  <Select /* onChange={(value)=>setPublisher(value.target.value)} */  >
  <option selected value='publisher'>جميع الناشرين </option>
 </Select>
  </Box>
  <Box  pt={0}  px={20}  >
    اختر المعيار 
  </Box>

  <Box  pt={0}  px={20}  >
  <SimpleGrid columns={2} spacing={10} >

    <Checkbox  colorScheme='red' onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}    value='1'>البيانات الوصفية</Checkbox>
    <Checkbox colorScheme='red' onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}    value='2'>تنوع الصيغ</Checkbox>
    <Checkbox colorScheme='red' onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}  value='3'>مفتوحة المصدر</Checkbox>
    <Checkbox colorScheme='red'onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}   value='4'>التوقيت</Checkbox>
    <Checkbox isDisabled colorScheme='red'onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}    value='5'>الإكتمال</Checkbox>
    <Checkbox isDisabled colorScheme='red'onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}  value='6' >نقاء البيانات</Checkbox>
    <Checkbox isDisabled colorScheme='red'onChange={(value)=> setCheckbox(oldArray => [...oldArray, value.target.value])}  value='7'>المعالجة الإلكترونية</Checkbox>

  </SimpleGrid>

  </Box>
  <Box  pb={20}  px={20}   >
  <ButtonGroup variant='outline' spacing='6'>
  {save?<Button onClick={show} colorScheme='black'>قياس</Button>:null} 
  
  <Button onClick={refreshPage} colorScheme='red'  >الغاء</Button>
</ButtonGroup>
  </Box>

 </SimpleGrid>
 <Center >
 {result? <Divider borderColor={'red'}  width={10} orientation='vertical' />:null}
</Center> 
 <Box  pt={0} pb={10} px={20}  >
 <SimpleGrid columns={2} spacing={10} >
 {result? <SimpleGrid columns={1} > 
   <p  > النسبه الكليه لنضج وجودة البيانات  : {items.length!=0? items.total:0} %  </p>

   {items.length!=0?items.labels.map((label ,index)=><p  > {label}  : {items.data[index]} % </p> ):null}
  
   </SimpleGrid> :null} 
  {result? <Box py={4}  px={4} >
    <Radar  data={data} /></Box>   :null}

   </SimpleGrid>
   </Box>


  </Flex>
  )
}
