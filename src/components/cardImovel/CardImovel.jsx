import { View, Text, Touchable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import imgDisponivel from '../../images/icons/cardImovel/ativado.jpg';
import imgIndisponivel from '../../images/icons/cardImovel/desativado.jpg';

const cardImovel = ({ imovel }) => {


    return (
        <View style={styles.card}>
            <View style={styles.parte1}>
                <Image
                    source={require('../../images/ImagensImoveis/imovelexemplo.png')}
                    style={styles.imagemImovel}
                />
                <View style={styles.detalhesPart1}>

                    <Text style={styles.texto1}>R$ {imovel.valorTotal}</Text>
                    <Text style={styles.texto}>{imovel.tipo}</Text>
                    <Text style={styles.texto}>{imovel.local}</Text>

                    <View style={styles.detalhesEspecificos}>
                        <View style={styles.conjunto}>
                            <View style={styles.iconLargura}>
                                <Image
                                    source={require('../../images/icons/cardImovel/largura.png')}
                                    style={styles.iconimg} />
                            </View>
                            <Text style={styles.texticons}>{imovel.tamanho} m²</Text>
                        </View>

                        <View style={styles.conjunto}>
                            <View style={styles.iconCama}>
                                <Image
                                    source={require('../../images/icons/cardImovel/cama.png')}
                                    style={styles.iconimg} />
                            </View>

                            <Text style={styles.texticons}>{imovel.quartos}</Text>
                        </View>

                        <View style={styles.conjunto}>
                            <View style={styles.iconChuveiro}>
                                <Image
                                    source={require('../../images/icons/cardImovel/Chuveiro.png')}
                                    style={styles.iconimg} />
                            </View>

                            <Text style={styles.texticons}>{imovel.banheiros}</Text>
                        </View>

                        <View style={styles.conjunto}>
                            <View style={styles.iconSofa}>
                                <Image
                                    source={require('../../images/icons/cardImovel/Sofa.png')}
                                    style={styles.iconimg} />
                            </View>

                            <Text style={styles.texticons}>{imovel.salas}</Text>
                        </View>

                    </View>

                    <View style={styles.row}>
                        <View style={styles.iconMais}>
                            <Image
                                source={require('../../images/icons/cardImovel/Mais.png')}
                                style={styles.iconimg2} />
                        </View>

                        <Text style={styles.detalhesImoveisTxt} >Detalhes</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.iconMais}>
                            <Image
                                source={require('../../images/icons/pessoinha.png')}
                                style={styles.iconimg2} />
                        </View>

                        <Text style={styles.detalhesImoveisTxt} >proprietario</Text>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.iconMais}>
                            <Image
                                source={imovel.ativo ? imgDisponivel : imgIndisponivel}
                                style={styles.iconimg2} />
                        </View>

                        <Text style={styles.detalhesImoveisTxt} >{imovel.ativo ? "Disponível" : "Indisponível"}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default cardImovel;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: '35%',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20vh',
        borderColor: 'black',
        borderWidth: 1
    },
    texto1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.2em'
    },
    texto: {
        textAlign: 'center'
    },
    parte1: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 5, // Raio de 30 para o canto superior esquerdo
        borderTopRightRadius: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    imagemImovel: {
        width: '50%',
        height: '100%'
    },
    detalhesPart1: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        paddingLeft: '5%'
    },
    detalhesEspecificos: {
        width: '90%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    conjunto: {
        marginLeft: 1,
        display: 'flex',
        flexDirection: 'row',

    },
    iconLargura: {
        width: '15px',
        height: '15px'

    },
    iconCama: {
        width: '18px',
        height: '15px'

    },
    iconChuveiro: {
        width: '18px',
        height: '15px'

    },
    iconSofa: {
        width: '21px',
        height: '10.5px'

    },
    iconimg: {
        width: '100%',
        height: '100%'
    },
    iconimg2: {
        width: '100%',
        height: '100%',
        borderRadius: '1vh',
        borderWidth: '0.1vh',
        borderColor: 'Black'
    },
    texticons: {
        fontSize: '0.7em',
        color: 'rgb(150,170,255)',
        paddingLeft: '2px',
        fontWeight: 'bold'
    },
    icon: {
        width: '100%',
        height: '100%'
    },
    iconMais: {
        width: '3.1vw',
        height: '1.5vh'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'

    },
    detalhesImoveisTxt: {
        paddingLeft: '2vw'
    }
})