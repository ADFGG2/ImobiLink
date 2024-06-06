import react from 'react'
import Voltar from '../../assets/Icons/voltar.svg'
import Menu from '../../assets/Icons/Menu.svg'
import { View, StyleSheet } from 'react-native'

const HeaderSection = ({ type }) => {
    return (

        <>
            {type === 'header' && (
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Voltar />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Menu />
                    </TouchableOpacity>
                </View>
            )}
        </>
    )
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default HeaderSection; 