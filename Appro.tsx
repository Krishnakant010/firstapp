import React from 'react'
import {
    View,Text,StyleSheet,useColorScheme
} from 'react-native'

function AppPro():JSX.Element{
    const isDarkMode = useColorScheme()=== 'dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ?styles.whitText: styles.darkText }>Hello</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whitText:{
        color:'#FFFFFF',
    },
    darkText:{
        color:'black',
    }

})
export default AppPro;