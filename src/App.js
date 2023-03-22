import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import SplitScreen from './components/hero1'
import BasicStatistics from './components/list'
import Footer from './components/footer'
import InputOutput from './components/input'
import {  Routes, Route } from "react-router-dom";


import './App.css'
function App() {
  return (
    <div className='App'  >
      <ChakraProvider><SplitScreen />  <br/></ChakraProvider>
      <ChakraProvider><BasicStatistics /></ChakraProvider>
      <ChakraProvider><InputOutput /></ChakraProvider>
      
  {/*     <Routes>
        <Route path="/" element={<ChakraProvider><SplitScreen />  <br/></ChakraProvider>}>
          <Route path="list" element={<ChakraProvider><BasicStatistics /></ChakraProvider>} />
          <Route path="input" element={<ChakraProvider><InputOutput /></ChakraProvider>} />
        </Route>
      </Routes> */}
      <ChakraProvider><Footer /></ChakraProvider>
    </div>
  );
}

export default App;
