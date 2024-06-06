import { Text, Image, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native'
import Voltar from '../../assets/Icons/voltar.svg'
import Editar from '../../assets/Icons/Editar.svg'
import LogoBackground from '../../assets/Icons/LogoBackground.svg'

const Perfil = () => {
    return (

        <View style={styles.container}>

            <ImageBackground style = {{position:'Fixed', left:-55, top: 150}}>
                <LogoBackground/>
            </ImageBackground>

            <TouchableOpacity style={styles.btn_retun_menu}>
                <Voltar />
            </TouchableOpacity>
            <View style={styles.header}>

                <View style={styles.ellipse}>
                    <View style={styles.ellipse_image}>
                        <Image
                            styles={styles.imagem_perfil}
                            source={require('../../assets/Image/Image Perfil .png')}
                        />
                    </View>

                    <View style={styles.area_bnt_editar}>
                        <TouchableOpacity style={styles.button_editar}>
                            <Editar />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.area_dados}>
                    <Text style={styles.text_name}> Maria Eduarda </Text>

                    <TouchableOpacity style={styles.text_alterar_senha}>  Editar Perfil </TouchableOpacity>

                    <Text style={styles.text_dados}> Login </Text>
                    <Text style={styles.text_info}> eduardamaria@gmail.com </Text>

                    <Text style={styles.text_dados}> Endereço </Text>
                    <Text style={styles.text_info}> Avenida Paulista, 2374 - São Paulo </Text>

                    <Text style={styles.text_dados}> Telefone </Text>
                    <Text style={styles.text_info}> (11) 96473-9034 </Text>

                    <Text style={styles.text_dados}> Data  de nascimento </Text>
                    <Text style={styles.text_info}> 28.05.1991 </Text>

                    <Text style={styles.text_dados}> Número do CRECI </Text>
                    <Text style={styles.text_info}> 182361 </Text>

                    <Text style={styles.text_dados}> Profissão </Text>
                    <Text style={styles.text_info}> Corretora  </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 31,
        paddingTop: 54,
        paddingVertical: 15,
        backgroundColor:"#BEBEBE"
    
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    btn_retun_menu: {
        width: '100%',
        paddingTop: 30,
    },
    ellipse_image: {
        width: 125,
        height: 125,
        borderRadius: 125 / 2, // Metade da largura e altura para manter a forma circular
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: 17,
        backgroundColor: "#BEBEBE",
        overflow: 'hidden',// Garantir que a imagem não saia da elipse

    },
    ellipse: {
        width: 160,
        height: 160,
        borderRadius: 160 / 2, // Metade da largura e altura para manter a forma circular
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#BEBEBE",
        overflow: 'hidden',// Garantir que a imagem não saia da elipse
        shadowOffset: {
            width: 0, // deslocamento horizontal da sombra
            height: 0, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.1, // opacidade da sombra
        shadowRadius: 7, // raio da sombra
        elevation: 2, // elevação da sombra (apenas Android)

    },
    button_editar: {
        width: 32.45,
        height: 32.45,
        borderRadius: 32.45 / 2, // Metade da largura e altura para manter a forma circular
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E3E3E3",
        overflow: 'hidden',// Garantir que a imagem não saia da elipse
        shadowOffset: {
            width: 0, // deslocamento horizontal da sombra
            height: 0, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.1, // opacidade da sombra
        shadowRadius: 7, // raio da sombra
        elevation: 2, // elevação da sombra (apenas Android)

    },
    area_bnt_editar: {
        width: '100%',
        height: 200,
        position: 'relative',
        left: 30,
        top: -13,
        alignItems: 'center',

    },
    area_dados: {
        width: '96%',
        height: 575,
        alignItems: 'flex-start',
        backgroundColor: "#BEBEBE",
        borderRadius: 40,
        marginTop: 10,
        marginBottom: 50,
        shadowOffset: {
            width: 2, // deslocamento horizontal da sombra
            height: 2, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.2, // opacidade da sombra
        shadowRadius: 5, // raio da sombra
        elevation: 2, // elevação da sombra (apenas Android)
    },
    text_name: {
        marginTop: 18,
        marginLeft: 45,
        fontWeight: 'bold',
        fontSize: 30,
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    text_alterar_senha: {
        marginTop: 40,
        marginLeft: 200,
        marginRight: 10,
        fontSize: 12,
        fontWeight: '700',
        color: "#1F7DC1"
    },
    text_dados: {
        marginTop: 30,
        marginLeft: 34,
        fontSize: 15,
        fontWeight: '600',
        color: "#000",
        opacity: 0.4
    },
    text_info: {
        marginTop: 0,
        marginLeft: 34,
        fontSize: 14,
        color: "#000",

    }

})

export default Perfil;