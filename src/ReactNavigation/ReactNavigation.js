import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginECadastro from "../pages/LoginECadastro";
import Login from "../pages/Login";
import SelecaoCadastro from "../pages/SelecaoCadastro";
import Duvidas from "../pages/Duvidas";

const Stack = createNativeStackNavigator();

export default function MyStack() {
  
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="LoginECadastro"
          component={LoginECadastro}
          options={{ title: "Inicial", headerShown: false }}
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

{/*     ------------------------------------------
        ******************************************
        ------------------------------------------
*/}
        <Stack.Screen
          name="Duvidas"
          component={Duvidas}
          options={{ title: "Duvidas", headerShown: false }}
        />
      </Stack.Navigator>


      {/* <Stack.Navigator>
        ------------------------------------------
        <Stack.Screen
          name="LoginECadastro"
          component={LoginECadastro}
          options={{ title: "Inicial" }}
        />
        ------------------------------------------
        <Stack.Screen
          name="SelecaoCadastro"
          component={SelecaoCadastro}
          options={{ title: "SelecaoCadastro" }}
        />
        <Stack.Screen
          name="CadastroPessoaFisica"
          component={CadastroPF}
          options={{ title: "CadastroPF" }}
        />
        <Stack.Screen
          name="CadastroPessoaJuridica"
          component={CadastroPJ}
          options={{ title: "CadastroPJ" }}
        />
        <Stack.Screen
          name="CadastroCorretora"
          component={CadastroC}
          options={{ title: "CadastroC" }}
        />
        <Stack.Screen
          name="CadastroImobiliaria"
          component={CadastroI}
          options={{ title: "CadastroI" }}
        />
        ------------------------------------------
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil" }}
        />
        <Stack.Screen
          name="EditarPerfil"
          component={EditarPerfil}
          options={{ title: "EditarPerfil" }}
        />
        ------------------------------------------
        ******************************************
        ------------------------------------------
        <Stack.Screen
          name="Tutorial"
          component={Tutorial}
          options={{ title: "Tutorial" }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: "Sobre" }}
        />
        
        ------------------------------------------
        ******************************************
        ------------------------------------------
        <Stack.Screen
          name="AcessoDetalhesImovel"
          component={AcessoDetalhesImovel}
          options={{ title: "AcessoDetalhesImovel" }}
        />
        ------------------Pessoa física jurídica------------------------
        <Stack.Screen
          name="AcessoMeusImoveis"
          component={AcessoMeusImoveis}
          options={{ title: "AcessoMeusImoveis" }}
        />
        <Stack.Screen
          name="CadastrarImovel"
          component={CadastrarImovel}
          options={{ title: "CadastrarImovel" }}
        />
        <Stack.Screen
          name="EditarImovel"
          component={EditarImovel}
          options={{ title: "EditarImovel" }}
        />
        <Stack.Screen
          name="TelaPrincipal2"
          component={TelaPrincipal2}
          options={{ title: "TelaPrincipal2" }}
        />
        ------------------Pessoa corretor imobiliaria------------------------
        <Stack.Screen
          name="TelaPrincipal1"
          component={TelaPrincipal1}
          options={{ title: "TelaPrincipal1" }}
        />
        <Stack.Screen
          name="AcessoVendas"
          component={AcessoVendas}
          options={{ title: "AcessoVendas" }}
        />
        <Stack.Screen
          name="AcessoAlugueis"
          component={AcessoAlugueis}
          options={{ title: "AcessoAlugueis" }}
        />
        -----------------------------------------------------------------
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};
