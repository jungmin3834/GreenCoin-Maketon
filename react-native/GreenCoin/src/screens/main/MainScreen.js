import React, { Component,useState ,useEffect } from "react";
import { Dimensions, View,BackHandler,ScrollView,TouchableOpacity,Image } from "react-native";


import MainTitle from '../../components/mains/main/MainTitle';
import MainAreaTitle from '../../components/mains/main/MainAreaTitle';
import MainCuponBanner from '../../components/mains/main/MainCuponBanner';
import MainEnvironment from '../../components/mains/main/MainEnvironment';
import MainEnvironmentResult from '../../components/mains/main/MainEnvironmentResult';
import MainLikeInfo from '../../components/mains/main/MainLikeInfo';
// import MainDoubleClick from '../../components/mains/main/MainDoubleClick';
import EStyleSheet from 'react-native-extended-stylesheet';
import OrderFindBar from "../../components/comm/OrderFindBar";

const Data = [
  {
    title:"환경을 지키는 쓰레기 줄이기 운동 dsafew  ",
    date :"2020.00.00",
    type : 0,
  },
  {
    title:"환경을 운동",
    date :"2020.11.00",
    type : 1,
  },
  {
    title:"쓰레기 줄이기 운동",
    date :"2020.333.00",
    type : 2,
  },
]

const CommunityList = [
  {
    title:"탄소줄이고 다이어트도 같이했어요!",
    date :"2020.00.00",
    type : 0,
  },
  {
    title:"Title place here, long title will be shorten when text reac… 운동",
    date :"2020.11.00",
    type : 1,
  },
  {
    title:"Title place here, long title will be shorten when text reac…",
    date :"2020.33.00",
    type : 2,
  },
  {
    title:"탄소줄이고 다이어트도 같이했어요!",
    date :"2020.00.00",
    type : 0,
  },
  {
    title:"Title place here, long title will be shorten when text reac… 운동",
    date :"2020.11.00",
    type : 1,
  },
  {
    title:"Title place here, long title will be shorten when text reac…",
    date :"2020.33.00",
    type : 2,
  },
]

const MainScreen = () => {
 
  const [couponList,setCouponList] = useState([]);


  return (
    <View style={styles.container}>
      <MainTitle/>
      <ScrollView>
        <MainAreaTitle/>
        <MainLikeInfo list={Data} title={"미세먼지"} icon={"dust"}/>
        <MainEnvironment/>
        <MainCuponBanner couponList={couponList}/>
        <MainLikeInfo list={CommunityList} title={"우리지역 커뮤니티"} icon={"community"}/>
        <MainEnvironmentResult/>
        {/* <MainDoubrleClick></MainDoubrleClick> */}
      </ScrollView>
      <OrderFindBar/>
    </View>
  );
}

export default MainScreen;


const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });


const styles = EStyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    backgroundColor: 'white'
  },
  blackRectBox : {
    width:"414rem",
    height:"63rem",
    backgroundColor:"#2E3541",
  },
  commonPaddingBox: {
    height :"44.42rem",
  },
  imageContainer:{
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left:"76%",
    top:"84%",
  },
  image:{

  }
});