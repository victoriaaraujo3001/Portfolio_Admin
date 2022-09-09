import { ChakraProvider } from "@chakra-ui/react";
import { FormAuth } from "./components/FormAuth/index.jsx";
import { Rotas } from "./routes/routes.js";

function App() {
  return (
    <ChakraProvider>
      <Rotas />
    </ChakraProvider>
  );
}

export default App;
