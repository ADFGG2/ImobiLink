import { Text, Image, StyleSheet, View, TouchableOpacity, ImageBackground, Modal } from 'react-native'
import Voltar from '../../assets/Icons/voltar.svg'
import Menu from '../../assets/Icons/Menu.svg'
import Mais from '../../assets/Icons/Mais.svg'
import Maximize from '../../assets/Icons/Maximize.svg'
import Excluir from '../../assets/Icons/Excluir.svg'
import { useState } from 'react'
import { ModelImage } from '../../../src/Components/Modal/image_ampliada'


const EditarImovel = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleMaximizeClick = () => {
        setModalIsOpen(true);

    };

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Voltar />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Menu />
                </TouchableOpacity>
            </View>

            <View style={styles.textline}>
                <Text style={styles.text}> Imagens </Text>
                <View style={styles.linha}></View>
            </View>

            <View style={styles.area}>
                
                <View style={styles.retangulo}>
                    <View style={styles.bnt_area}>
                            <Image source={require('../../assets/Image/Imovel.jpeg')} style={styles.imageimovel} />
                        <View style={styles.bnt_max_exclud}>
                            <TouchableOpacity  onPress={handleMaximizeClick} >
                                <Maximize/>
                            </TouchableOpacity>

                            <Modal >
                                <ModelImage/>
                            </Modal>
                    
                            <TouchableOpacity>
                                <Excluir />
                            </TouchableOpacity>
                        </View>
                    </View>
                        <View style={styles.textinicon}>
                            <Text style={styles.textdescrition}> Deck da Piscina </Text>
                        </View>
                </View>

                <View style={styles.retangulo}>
                    <View style={styles.bnt_area}>
                            <Image source={require('../../../src/assets/Image/SaladeEsta.jpeg')} style={styles.imageimovel} />
                        <View style={styles.bnt_max_exclud}>
                            <TouchableOpacity >
                                <Maximize />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Excluir />
                            </TouchableOpacity>
                        </View>
                    </View>
                        <View style={styles.textinicon}>
                            <Text style={styles.textdescrition}> Sala de Estar </Text>
                        </View>
                </View>

            </View>

            <View style={styles.area}>
                
                <View style={styles.retangulo}>
                    <View style={styles.bnt_area}>
                            <Image source={require('../../assets/Image/Suit.jpeg')} style={styles.imageimovel} />
                        <View style={styles.bnt_max_exclud}>
                            <TouchableOpacity >
                                <Maximize />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Excluir />
                            </TouchableOpacity>
                        </View>
                    </View>
                        <View style={styles.textinicon}>
                            <Text style={styles.textdescrition}> Suit Principal </Text>
                        </View>
                </View>

                <View style={styles.retangulo}>
                    <View style={styles.bnt_area}>
                            <Image source={require('../../assets/Image/Quarto.jpeg')} style={styles.imageimovel} />
                        <View style={styles.bnt_max_exclud}>
                            <TouchableOpacity >
                                <Maximize />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Excluir />
                            </TouchableOpacity>
                        </View>
                    </View>
                        <View style={styles.textinicon}>
                            <Text style={styles.textdescrition}> Quanto de Visita </Text>
                        </View>
                </View>

            </View>

            <View style={styles.area}>
                
                <View style={styles.retangulo}>
                    <View style={styles.bnt_area}>
                            <Image source={require('../../assets/Image/SaladeJantar.jpeg')} style={styles.imageimovel} />
                        <View style={styles.bnt_max_exclud}>
                            <TouchableOpacity >
                                <Maximize />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Excluir />
                            </TouchableOpacity>
                        </View>
                    </View>
                        <View style={styles.textinicon}>
                            <Text style={styles.textdescrition}> Sala de Jantar </Text>
                        </View>
                </View>

                <View style={styles.retangulo}>
                    <View style={styles.bnt_area}>
                            <Image source={require('../../../src/assets/Image/Cozinha.jpeg')} style={styles.imageimovel} />
                        <View style={styles.bnt_max_exclud}>
                            <TouchableOpacity >
                                <Maximize />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Excluir />
                            </TouchableOpacity>
                        </View>
                    </View>
                        <View style={styles.textinicon}>
                            <Text style={styles.textdescrition}> Cozinha </Text>
                        </View>
                </View>

            </View>

            <View style={styles.area}>
            <View style={styles.retangulo}>
                    <View style={styles.bnt_area}>
                            <Image source={require('../../../src/assets/Image/Garagem.jpeg')} style={styles.imageimovel} />
                        <View style={styles.bnt_max_exclud}>
                            <TouchableOpacity >
                                <Maximize />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Excluir />
                            </TouchableOpacity>
                        </View>
                    </View>
                        <View style={styles.textinicon}>
                            <Text style={styles.textdescrition}> Garagem </Text>
                        </View>
                </View>

                <View style={styles.retanguloadd}>
                    <View style={{
                        width: 180,
                        height: 113,
                        alignItems: 'center',
                        backgroundColor: "#C4C4C4",
                        borderRadius: 12,
                    }}>
                        <TouchableOpacity>
                            <Mais  style={{ width: 40, height: 40, opacity: 0.3, marginTop: 40 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text style={styles.textadddescrition}> Descrição </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 31,
        paddingTop: 54,
        paddingVertical: 15
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textline: {
        width: '100%',
        marginTop: 10,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: "#777777",
        fontSize: 38,
        fontWeight: 'bold',
    },
    linha: {
        width: '100%',
        height: 1,
        marginTop: 15,
        backgroundColor: 'black',
        opacity: 0.4
    },
    area: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 73,
    },
    retangulo: {
        width: 180,
        height: 136,
        alignItems: 'center',
        backgroundColor: "#BEBEBE",
        margin: 4,
        borderRadius: 12,
        shadowOffset: {
            width: 0, // deslocamento horizontal da sombra
            height: 0, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.5, // opacidade da sombra
        shadowRadius: 3, // raio da sombra
        elevation: 4, // elevação da sombra (apenas Android)
    },
    imageimovel: {
        width: 180,
        height: 113,
        alignItems: 'center',
        borderRadius: 12,
        position: 'absolute'
    },

    textdescrition: {
        fontSize: 12,
        marginTop: 3,
        fontStyle: 'italic'

    },
    retanguloadd: {
        width: 180,
        height: 136,
        alignItems: 'center',
        backgroundColor: "#BEBEBE",
        margin: 4,
        borderRadius: 12,
        shadowOffset: {
            width: 0, // deslocamento horizontal da sombra
            height: 0, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.5, // opacidade da sombra
        shadowRadius: 3, // raio da sombra
        elevation: 4, // elevação da sombra (apenas Android)
    },
    textadddescrition: {
        fontSize: 12,
        marginTop: 34,
        fontStyle: 'italic',
        opacity: 0.5
    },
    bnt_max_exclud: {
        width: 180,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 7,
        paddingVertical: 7

    },
    textinicon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 88
    },
    bnt_area: {
        alignItems: 'center',
        alignContent: 'center',

    }
})

export default EditarImovel;