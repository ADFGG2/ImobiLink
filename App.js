import LoginECadastro from './src/pages/LoginECadastro'; 
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {<LoginECadastro />}
    </NavigationContainer>
  );
};

export default App;