import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginECadastro from "../pages/LoginECadastro";
import Login from "../pages/Login"; 
import SelecaoCadastro from "../pages/SelecaoCadastro";
import Duvidas from "../pages/Duvidas";
import Sobre from "../pages/Sobre";
import CadastroCorretor from "../pages/CorretorEImobiliaria/Corretor/CadastroC";
import CadastroPessoaFisica from "../pages/PessoaFIsicaJuridica/PessoaFisica/CadastroPF";
import CadastroImobiliaria from "../pages/CorretorEImobiliaria/Imobiliaria/CadastroI";
import CadastroPessoaJuridica from "../pages/PessoaFIsicaJuridica/PessoaJuridica/CadastroPJ";
import TelaPrincipal2 from "../pages/PessoaFIsicaJuridica/TelaPrincipal2";
import TelaPrincipal1 from "../pages/CorretorEImobiliaria/TelaPrincipal1";
import AcessoAlugueis from "../pages/CorretorEImobiliaria/AcessoAlugueis";
import AcessoVendas from "../pages/CorretorEImobiliaria/AcessoVendas";
import AcessoDetalhesImovel from "../pages/AcessoDetalhesImovel";
import AcessoMeusImoveis from '../pages/PessoaFIsicaJuridica/AcessoMeusImoveis';
import CadastrarImovel from "../pages/PessoaFIsicaJuridica/CadastrarImovel"; 
import CadastrarImovel2 from "../pages/PessoaFIsicaJuridica/CadastrarImovel2";
import EditarImovel from "../pages/PessoaFIsicaJuridica/EditarImovel";
import AcessoFavoritos from "../pages/CorretorEImobiliaria/AcessoFavoritos";
import Perfil from "../pages/Perfil";
import EditarPerfil from "../pages/EditarPerfil"; 
import Tutorial from "../pages/Tutorial";
import ImagensImovel from "../pages/ImagensImovel"


const Stack = createNativeStackNavigator();

export default function MyStack() {
  
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="LoginECadastro"
          component={LoginECadastro}
          options={{ title: "LoginECadastro", headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="SelecaoCadastro"
          component={SelecaoCadastro}
          options={{ title: "SelecaoCadastro", headerShown: false  }}
        />
        <Stack.Screen
          name="CadastroCorretor"
          component={CadastroCorretor}
          options={{ title: "cadastroCorretor", headerShown: false }}
        />
        <Stack.Screen
          name="CadastroPessoaFisica"
          component={CadastroPessoaFisica}
          options={{ title: "CadastroPF", headerShown: false }}
        />
        <Stack.Screen
          name="CadastroPessoaJuridica"
          component={CadastroPessoaJuridica}
          options={{ title: "CadastroPessoaJuridica", headerShown: false }}
        />
        
        <Stack.Screen
          name="CadastroImobiliaria"
          component={CadastroImobiliaria}
          options={{ title: "CadastroI", headerShown: false }}
        />
        
        <Stack.Screen
        name="TelaPrincipal2"
        component={TelaPrincipal2}
        options={{ title: "TelaPrincipal2", headerShown: false }}
       />
       <Stack.Screen
        name="TelaPrincipal1"
        component={TelaPrincipal1}
        options={{ title: "TelaPrincipal1", headerShown: false }}
       />

        <Stack.Screen
          name="AcessoMeusImoveis"
          component={AcessoMeusImoveis}
          options={{ title: "AcessoMeusImoveis", headerShown: false }}
        />
        <Stack.Screen
          name="AcessoVendas"
          component={AcessoVendas}
          options={{ title: "AcessoVendas", headerShown: false  }}
        />
        <Stack.Screen
          name="AcessoAlugueis"
          component={AcessoAlugueis}
          options={{ title: "AcessoAlugueis", headerShown: false  }}
        />
        <Stack.Screen
        name="AcessoFavoritos"
        component={AcessoFavoritos}
        options={{ title: "AcessoFavoritos" }}
      />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil", headerShown: false }}
        />
        <Stack.Screen
          name="EditarPerfil"
          component={EditarPerfil}
          options={{ title: "EditarPerfil" }}
        />
        <Stack.Screen
          name="AcessoDetalhesImovel"
          component={AcessoDetalhesImovel}
          options={{ title: "AcessoDetalhesImovel", headerShown: false }}
        />
        <Stack.Screen
          name="CadastrarImovel"
          component={CadastrarImovel}
          options={{ title: "CadastrarImovel", headerShown: false }}
        />
        <Stack.Screen
          name="CadastrarImovel2"
          component={CadastrarImovel2}
          options={{ title: "CadastrarImovel2", headerShown: false }}
        />        
        <Stack.Screen
          name="EditarImovel"
          component={EditarImovel}
          options={{ title: "EditarImovel", headerShown: false }}
        />
         <Stack.Screen
          name="ImagensImovel"
          component={ImagensImovel}
          options={{ title: "ImagensImovel", headerShown: false }}
        />
{/*     ------------------------------------------
        ******************************************
        ------------------------------------------
*/}
        <Stack.Screen
          name="Duvidas"
          component={Duvidas}
          options={{ title: "Duvidas", headerShown: false }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: "Sobre" }}
        />
        <Stack.Screen
        name="Tutorial"
        component={Tutorial}
        options={{ title: "Tutorial" }}
        />
      </Stack.Navigator>


      
        
      
    </NavigationContainer>
  );
};
