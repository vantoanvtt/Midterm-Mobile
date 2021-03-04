import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,FlatList,ActivityIndicator,Animated} from 'react-native';
import MiniCard from '../components/MiniCard'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from '@react-navigation/native'
import {useSelector,useDispatch} from 'react-redux'
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDtCWCduSedfthvh

const SearchScreen = ({navigation})=>{
    const {colors} =  useTheme()
    const mycolor = colors.iconColor

    const [value,setValue] = useState("")
    // const [miniCardData,setMiniCard] = useState([])
    const dispatch = useDispatch()
    const miniCardData = useSelector(state=>{
        return state.cardData
    })
    const [loading,setLoading] = useState(false)
    const fetchData = () =>{
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDtCWCduSedfthvh`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLoading(false)
            dispatch({type:"add",payload:data.items})
            //setMiniCard(data.items)
        })
    }
  return(
      <View style={{
          flex:1,
          marginTop:18,
          }}>
          <View style={{
              padding:5,
              flexDirection:"row",
              justifyContent:"space-around",
              elevation:5,
              backgroundColor:colors.headerColor
        
          }}>
             <Icon
             style={{color:mycolor}}
             name="arrow-left" size={32}
             onPress={()=>navigation.goBack()}
             />
             <TextInput
             style={{
                 width:"70%",
                 backgroundColor:"#e6e6e6"
                }}
             value={value}
             onChangeText={(text)=>setValue(text)}

             />
             <Icon
              style={{color:mycolor}}
             name="paper-plane"
             size={32}
             onPress={()=>fetchData()}
             />
          </View>
           {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null } 
          <FlatList
           data={miniCardData}
           renderItem={({item})=>{
               return <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
               />
           }}
           keyExtractor={item=>item.id.videoId}
          />
        
      </View>
  )
}

export default SearchScreen
