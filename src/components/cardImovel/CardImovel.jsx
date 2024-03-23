import { View, Text, Touchable, StyleSheet,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const cardImovel = ({ valorTotal, tipo, local, tamanho, quartos, banheiros, salas, ativo }) => {
    var atividade;
    if(ativo=="true"){
        atividade=`
                    <Image 
                        source={require("../../images/icons/cardImovel/ativo.png")}
                        style={styles.atividade}
                    />
                    <Text style={styles.ativo} >Ativo</Text>
        `;
        
    }
    else{
        atividade=`
                    <Image 
                        source={require("../../images/icons/cardImovel/desativo.png")}
                        style={styles.atividade}
                    />
                    <Text style={styles.desativo} >Inativo</Text>
        `;
        
    }   
  return (
    <View style={styles.card}>
        <View style={styles.parte1}>
            <Image 
                source={require('../../images/icons/cardImovel/imovelexemplo.png')}
                style={styles.imagemImovel}
            />
            <View style={styles.detalhesPart1}>
                <Text>Total: R$ {valorTotal}</Text>
                <Text>{tipo}</Text>
                <Text>{local}</Text>
                <View style={styles.detalhesEspecificos}>
                    <View style={styles.conjunto}>
                        <View style={styles.iconLargura}>
                        <Image 
                        source={require('../../images/icons/cardImovel/largura.png')}
                        style={styles.iconimg}/> 
                        </View>  
                        <Text style={styles.texticons}>{tamanho} m²</Text> 
                    </View>
                    
                    <View style={styles.conjunto}>
                        <View style={styles.iconCama}>
                        <Image 
                        source={require('../../images/icons/cardImovel/cama.png')}
                        style={styles.iconimg}/> 
                        </View>
                        
                        <Text style={styles.texticons}>{quartos}</Text> 
                    </View>
                    
                    <View style={styles.conjunto}>
                        <View style={styles.iconChuveiro}>
                        <Image 
                        source={require('../../images/icons/cardImovel/Chuveiro.png')}
                        style={styles.iconimg}/> 
                        </View>
                        
                        <Text style={styles.texticons}>{banheiros}</Text>
                    </View>
                    
                    <View style={styles.conjunto}>
                        <View style={styles.iconSofa}>
                        <Image 
                        source={require('../../images/icons/cardImovel/Sofa.png')}
                        style={styles.iconimg}/> 
                        </View>
                        
                        <Text style={styles.texticons}>{salas}</Text>
                    </View>
                    
                </View>
            </View>
        </View>
        <View style={styles.parte2}>

                

                <Image 
                    source={require("../../images/icons/cardImovel/Mais.png")}
                    style={styles.detalhes}
                />                    
                <Text style={styles.detalhesText} >Detalhes</Text>

                <Image 
                    source={require("../../images/icons/cardImovel/whatsapp.png")}
                    style={styles.whats}
                />                    
                <Text style={styles.detalhesText} >Contato</Text>
                
        </View>
       
        
        
    </View>
  )
}

export default cardImovel;

const styles =  StyleSheet.create({
    card:{
        width: '100%',
        height: '30%',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20vh',
        borderColor: 'black',
        borderWidth: 1
    },
    text:{
        color: 'green'
    },
    parte1:{
        width: '100%',
        height: '85%',
        borderTopLeftRadius: 5, // Raio de 30 para o canto superior esquerdo
        borderTopRightRadius: 5 ,
        display: 'flex',
        flexDirection: 'row'
    },    
    imagemImovel:{
        width: '50%',
        height: '100%'
    },
    detalhesPart1:{
        width: '50%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'left',
        paddingLeft: '5%'
    },    
    detalhesEspecificos:{
        width: '90%',
        height: '40%',
        display: 'flex',
        flexDirection:'row',        
        justifyContent: 'space-between',
        alignItems: 'center'
    },    
    conjunto:{
        marginLeft: 1,
        display: 'flex',
        flexDirection: 'row',

    },
    iconLargura:{
        width: '15px',
        height: '15px'

    },
    iconCama:{
        width: '18px',
        height: '15px'

    },
    iconChuveiro:{
        width: '18px',
        height: '15px'

    },
    iconSofa:{
        width: '21px',
        height: '10.5px'

    },
    iconimg:{
        width:'100%',
        height: '100%'
    },
    texticons:{
        fontSize: '0.7em',
        color: 'rgb(150,170,255)',
        paddingLeft: '2px',
        fontWeight: 'bold'
    },
    parte2:{
        width: '100%',
        height: '15%',
        borderBottomLeftRadius: 20, // Raio de 30 para o canto superior esquerdo
        borderBottomRightRadius: 20,
        display: 'flex',
        flexDirection: 'row',        
        borderColor: 'black',
        borderWidth: 1
    },
    icon:{
        width:'1vw',
        height: '1vh',

    }
})