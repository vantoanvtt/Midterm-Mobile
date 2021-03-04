import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions
  } from 'react-native';

  const Card = (props) => {
      return (
        <View>
            <View>
                <Image 
                    source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                    style={{
                        width:"100%",
                        height:200
                    }}
                />
            </View>
            <View style={styles.titleGroup}>
                <View>
                    <Icon
                        name="user"
                        size={30}
                        color="white"
                    />
                </View>
                <View>
                    <Text
                        style={{
                            fontSize:20,
                            width:Dimensions.get("screen").width - 50,
                            //color:textcolor
           
                        }}
                        ellipsizeMode="tail"
                        numberOfLines={2}
                    >{props.title}</Text>
                    <Text>{props.chanel}</Text>
                </View>
            </View>
        </View>
      )
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
      },
      titleGroup: {
          flexDirection: 'row',
          margin:5
      }
  })

  export default Card;