import React, {useState} from 'react';
import { TouchableOpacity, Text,Image, View, Dimensions,ScrollView,StyleSheet, Alert } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useNavigation ,useRoute } from '@react-navigation/native';
import userInfoSingleton from '../../../db/userInfoSingleton';
import { useFocusEffect } from '@react-navigation/core';

export default function MainAreaTitle() {
  const navigation = useNavigation();
  const routeInfo = useRoute();
  const [address,setAddress] = useState("");

  useFocusEffect(
    React.useCallback(() => {
        setAddress(userInfoSingleton.getInstance()._location_fullname);
    }, [])
  );

  const loginCheck = () =>{
    if(!userInfoSingleton.getInstance()._isLogin){
      navigation.navigate("kakaoLogin");
    }
    else
      navigation.navigate("selectArea");
  }

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.titleAreaBody} onPress={loginCheck}>
          <Text style={styles.titleLabel}>{address ? address : "주소를 선택해주세요!"}</Text>
          <Image style={styles.titleAddressPoint} source={require('../../../assets/img/label_point/rightClickPoint.png')}></Image>
        </TouchableOpacity>
      </View>
    );
  }
  

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });


const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    width :"380rem",
    paddingLeft:"20rem",
    backgroundColor:"#F8F7F7"
  },
  titleAreaBody:{
    flexDirection: 'row',
    width:"240rem",
    // padding:"10rem",
    height:"50.42rem",
    alignItems: "center",
    // justifyContent: "center",
  },
  titleLabel:{
    textAlign:"center",
    fontSize :"14rem",
    fontWeight:'bold',
    color:"#505050",
  },
  titleAddressPoint:{
    marginLeft:"5rem",
  },

});
