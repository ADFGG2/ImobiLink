import { StatusBar } from 'expo-status-bar';
import { useState, React } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides =[
  {key:'1',
  title: 'O que você \nPrecisa',
  text: 'Melhor e mais completa plataforma \nde capitação para o seguimentos \nimobiliário ',
  
},
{ key:'2',
  title: 'O Imobilink Ajuda Você',
  text: 'Informações completas e detalhadas \ndos imóveis \n \n',
  image: require('../images/fundos/back4.2.png')
},
{key:'3',
  title: 'Mais Perto de \nVocê',
  text: 'Imoblink visa atender as busca por  \n imóveis dentro da região de atuação \n de cada corretor ou Imobiliária',
  image: require('../images/fundos/back4.3.png')
}
]
const Tutorial = ()=> {
  const [showHome, setShowHome] = useState(false)

  function renderSlides( {item} ){
    return(
      <View style={styles.container}>
        <ImageBackground 
            source={item.image}
            style={styles.back}
        >            

          <Text style={styles.titulo}>{item.title}</Text>
          <Text style={styles.texto}>{item.text}</Text>

        </ImageBackground>
      </View>
    )

  }

  if(showHome){
    return <Text>ENTROU NA HOME</Text>
  }else{
    return (
      <AppIntroSlider 
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#FFFFFF'
        }}
        dotStyle={{
          borderColor: '#FFFFFF',
          borderWidth: '0.01vw'
        }}

        renderNextButton={()=>{}}
        renderDoneButton={()=> {{
          return(
            <View style={styles.proxButton}> 
              <Text style={styles.buttonText}> Vamos Lá </Text>  
            </View>);
        }
          }
        }

        showDoneButton

      />
  );
  }
  
}

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0,0,0)'
  },
  back: {
    flex:1,  
    alignSelf: 'stretch',
    resizeMode: 'cover',
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0,0,0)'
  },
  titulo:{
    color: '#FFFFFF',
    fontSize: '2.5em',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: '20%'
    
  },
  texto:{
    color: '#FFFFFF',
    fontSize: '1.5em',
    textAlign: 'center',
    paddingTop:  '35%',
    paddingBottom: '115%'
  },
  proxButton:{
    display: 'flex',
    width: '7vw',
    height: '3vh',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '1.5vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: '1.5em',
    color: 'rgb(0,0,0)'
  }


});