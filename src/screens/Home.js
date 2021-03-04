import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    FlatList
  } from 'react-native';
  import {useSelector} from 'react-redux'
import Header from '../components/Header';
const Home = () => {
    const scrollY = new Animated.Value(0)
    const diffClamp = Animated.diffClamp(scrollY,0,45)
    const translateY = diffClamp.interpolate({
        inputRange:[0,45],
        outputRange:[0,-45]
    })
  const cardData = useSelector(state=>{
    return state.cardData
  })
  return (
    <View style={{flex:1}}>
      <Animated.View
      style={{
        transform:[
          {translateY:translateY }
        ],
        elevation:4,
        zIndex:100,
      }}
      >
        <Header />
      </Animated.View>
         
       <FlatList
      data={cardData}
      renderItem={({item})=>{
        return <Card
        videoId={item.id.videoId}
        title={item.snippet.title}
        channel={item.snippet.channelTitle}
        />
      }}
    
      keyExtractor={item=>item.id.videoId}
      onScroll={(e)=>{
          scrollY.setValue(e.nativeEvent.contentOffset.y) 
      }}
      /> 
    </View>
  );
}

export default Home;