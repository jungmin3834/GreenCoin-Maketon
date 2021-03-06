import React, { Component,useState ,useEffect } from "react";
import {Dimensions, View,BackHandler,ScrollView,TouchableOpacity,Image } from "react-native";


import MainTitle from '../../components/mains/main/MainTitle';
import MainAreaTitle from '../../components/mains/main/MainAreaTitle';
import MainCuponBanner from '../../components/mains/main/MainCuponBanner';
import MainEnvironment from '../../components/mains/main/MainEnvironment';
import MainEnvironmentResult from '../../components/mains/main/MainEnvironmentResult';
import MainLikeInfo from '../../components/mains/main/MainLikeInfo';
// import MainDoubleClick from '../../components/mains/main/MainDoubleClick';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useNavigation } from "@react-navigation/core";
import appStaticInfomation from "../../db/appStaticInfomation";
import { useFocusEffect } from '@react-navigation/core';
import DateText from '../../components/commonsjh/dateText';

import userInfoSingleton from "../../db/userInfoSingleton";

// server 
import serverController from '../../server/serverController';
import ModalCommon from "../../components/comm/ModalCommon";

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


const MainScreen = () => {
  const navigation = useNavigation();
  const [couponList,setCouponList] = useState([]);
  const [communityList, setCommunityList] = useState([]);
  const [topicList, setTopicList] = useState([]);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if(!appStaticInfomation.getInstance()._interest)
      navigation.navigate("interest");
    else if(!appStaticInfomation.getInstance()._area)
      navigation.navigate("area");
  }, [])


  useFocusEffect(
    React.useCallback(() => {
      var dateType = new Date();
      dateType.setDate(dateType.getDate()-3);
  
      // 커뮤니티 글
      serverController.connectFetchController(`/posts?limit=6`,"GET",null,function(res){
        const dataArr = res.data.posts;
        let newArr = [];
        dataArr.map(item => {
          let type = 0;
          if(new Date(item.create_date) > dateType){
            type=2;
          }
          if(item.hot_post){
            type=1;
          }
          let newObj = {
            title:item.title,
            date:DateText(new Date(item.create_date), "."),
            type:type,
            no:item.no,
            isTopic:false,
          }
          newArr.push(newObj);
        })
        setCommunityList([...newArr]);
      },function(err){console.log(err);});
  
      // 토픽 글
      serverController.connectFetchController(`/pollutions/1/posts?limit=1`,"GET",null,function(res){
        if(res.success==1){
          const data = res.data.posts;
          let newTopicArr = [];
          data.map(item => {
            let type = 0;
            if(new Date(item.create_date) > dateType){
              type=2;
            }
            if(item.hot_post){
              type=1;
            }
            let newObj = {
              title:item.title,
              date:DateText(new Date(item.create_date), "."),
              type:type,
              no:item.no,
              isTopic:true,
            }
            newTopicArr.push(newObj);
          })
          setTopicList([...newTopicArr]);
        }
      },function(err){console.log(err);});

    }, [])
  );


  return (
    <View style={styles.container}>
      <MainTitle/>
      
      <ModalCommon isModalVisible={isModal} title={"아직 개발중입니다."} bottomType={"select"} setIsModalVisible={() => setIsModal(false)} submitClick={() => setIsModal(false)}/>
      <ScrollView>
        <MainAreaTitle/>
        <MainLikeInfo list={topicList} title={"미세먼지"} icon={"dust"} noBtn/>
        <MainEnvironment/>
        <MainCuponBanner couponList={couponList}/>
        <MainLikeInfo list={communityList} title={"우리지역 커뮤니티"} icon={"community"}/>
        <MainEnvironmentResult setIsModal={setIsModal}/>
        {/* <MainDoubrleClick></MainDoubrleClick> */}
      </ScrollView>
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