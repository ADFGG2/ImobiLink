import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground} from 'react-native';


export function ModelImage (){
    return(
        <View style={styles.container}>
           <View  style={styles.content}>
           <Image source={require('../../assets/Image/Imovel.jpeg')}
           style={styles.image_modal}/>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24,24,24,0.6)",
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    content:{
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 20
        
    },
    image_modal:{
        alignContent:'center',
        justifyContent:'center',
        width: 390,
        height: 390
    }
})