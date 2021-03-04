import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';
  import { useNavigation ,useTheme} from '@react-navigation/native';
  import {useDispatch,useSelector} from 'react-redux'

const Header = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {colors} =  useTheme()
    const currentTheme = useSelector(state=>{

      return state.myDarMode
    })
    const mycolor = colors.iconColor
    return(
        <View style={styles.container}>
            <View style={styles.group}>
                <Icon 
                    style={{marginTop: 3}}
                    name="youtube"
                    size={28}
                    color="red"
                />
                <Text
                    style={{fontSize:23,
                            marginLeft: -5,
                        //color:mycolor,
                        fontWeight:"bold"}}
                >youtube</Text>
            </View>
            
            <View style={styles.group}>
                
                <Icon 
                    style={{marginLeft: 35,marginTop: 4}}
                    name="search"
                    size={23}
                    color="black"
                    onPress={() => {navigation.navigate("search")}}
                />
                
                <Icon
                style={{marginTop: 4}}
                    name="user"
                    size={23}
                    color="black" 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //position:"absolute",
        //flex: 1,
        paddingTop: 10,
        flexDirection: 'row',
        height: 55,
        justifyContent: 'space-between',
        elevation:4,
        //backgroundColor: "red",
        width: "100%",
        //backgroundColor: colors.headerColor,
        
    },
     group: {
        flexDirection:"row",
        justifyContent:"space-around",
        width:150,
        margin:5
         
     },
     button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
})

export default Header;