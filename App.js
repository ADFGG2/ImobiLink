import MyStack from './src/ReactNavigation/ReactNavigation';
import TelaPrincipal2 from './src/pages/PessoaFIsicaJuridica/TelaPrincipal2';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (

    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
};

export default App;

