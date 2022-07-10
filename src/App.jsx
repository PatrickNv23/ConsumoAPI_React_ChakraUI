import './App.css'
import React from 'react';
import { useEffect, useState } from 'react';
import { ChakraProvider, Box, extendTheme, Text, Button } from '@chakra-ui/react';
import { BiEnvelope } from "react-icons/bi";
import Header from './components/Header';
import Footer from './components/Footer';
import QuickNote from './components/QuickNote';
function App() {

  const [users, setUsers] = useState([]);

  const theme = extendTheme({
    fonts: {
      body: 'Roboto, sans-serif',
      heading: 'Roboto, sans-serif',
    },
  })

  useEffect(() => {
    const getData = async () => {
      let containerUsers = document.querySelector('.main-container-users');
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let json = await response.json();
        if (!response.ok) {
          throw { status: response.status, statusText: response.statusText }
        }
        setUsers(json);
      } catch (err) {
        let message = err.statusText || 'Ocurrió un error';
        containerUsers.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      }
    }
    getData();
  }, []);

  const recorrerUsuarios = (users) => {
    return users.map((user) => (
      <Box m={6} bg='gray.200' bgGradient="radial-gradient(circle, rgba(209,187,238,1) 0%, rgba(148,187,233,1) 100%)" borderWidth='1px' borderRadius='xl' fontSize='md' w='xxl' h="100px" borderColor='#296da5' display='flex' alignItems='center' justifyContent='space-between' boxShadow='box-shadow: 17px -17px 16px -9px rgba(0,0,0,0.48);
-webkit-box-shadow: 17px -17px 16px -9px rgba(0,0,0,0.48);
-moz-box-shadow: 17px -17px 16px -9px rgba(0,0,0,0.48);'>

        < QuickNote key={user.id} name={user.username} email={user.email} phone={user.phone} />

        <div className='container-buttons'>
          <Button colorScheme='red'>Ver detalles</Button>
          <Button leftIcon={<BiEnvelope />} colorScheme='teal' variant='solid'>
            Email
          </Button>
        </div>

      </Box >
    ))
  }

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header headerTitle='FAKE API JSON PLACEHOLDER' />
        <div className='main-container'>
          <div className="main-container-title">
            <Text fontSize='4xl' letterSpacing='8px' fontWeight='bold'>LISTA DE USUARIOS</Text>
          </div>
          <div className='main-container-users'>
            {recorrerUsuarios(users)}
          </div>
        </div>
        <Footer footerTitle='Todos los derechos reservados @2022' />
      </div >
    </ChakraProvider>
  )
}

export default App
