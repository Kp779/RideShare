// pages/index.js
import Home from './homepage';
import { ChakraProvider } from '@chakra-ui/react';

function HomePage() {
  return (
    <React.StrictMode>
      <ChakraProvider>
      <Home/>
    </ChakraProvider>
      </React.StrictMode>
  );
}

export default HomePage;
