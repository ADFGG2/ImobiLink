import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaPrincipal2 from './pages/PessoaFIsicaJuridica/TelaPrincipal2';
import EditarImovel from './pages/ImagensImovel'
import Duvidas from './pages/Duvidas';
import CadastrarImovel from './pages/PessoaFIsicaJuridica/CadastrarImovel';
import AcessoMeusImoveis from './pages/PessoaFIsicaJuridica/AcessoMeusImoveis';

import ButtonNewImovel from './Components/Buttons/Button_New_Imovel';

import { Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#202020',
          borderTopColor: 'transparent',
          boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.30)',
        },
        tabBarActiveTintColor: "#C1C5CE",
        tabStyle: {
          paddinBottom: 5,
          paddingTop: 5,
        }

      }}
    >
      <Tab.Screen
        name="Home"
        component={TelaPrincipal2}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Editar Cadastro"
        component={EditarImovel}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="file-document-edit" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Novo Imovel"
        component={CadastrarImovel}
        options={{
          tabBarLabel:'',
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <ButtonNewImovel size={size} color={color} focused={focused}/>
          )
        }}
      />

      <Tab.Screen
        name="Meus Imoveis"
        component={AcessoMeusImoveis}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Dúvidas"
        component={Duvidas}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="question" size={21} color={color} />
          )
        }}

      />
    </Tab.Navigator>
  )
}
