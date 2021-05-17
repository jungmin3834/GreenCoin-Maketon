import * as React from 'react';
import { Text,Image, View, Dimensions,ScrollView,StyleSheet,TouchableOpacity, Alert } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
  
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default function DetailOption({item}){

  const getSizeByCount = () =>{
    switch(item.rev_personal3){
      case "0" : return 'XS';
      case "1" : return 'S';
      case "2" : return 'M';
      case "3" : return 'L';
      case "4" : return 'XL';
    }
  }

  const getSizeOpinion = () =>{
    switch(item.rev_additional1){
      case "0" : return '많이 작아요';
      case "1" : return '조금 작아요';
      case "2" : return '잘 맞아요';
      case "3" : return '조금 커요';
      case "4" : return '많이 커요';
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.labelMargin,styles.title]}>키</Text>
        <Text style={[styles.labelMargin,styles.title]}>몸무게</Text>
        <Text style={[styles.labelMargin,styles.title]}>평소사이즈</Text>
        <Text style={[styles.labelMargin,styles.title]}>착용감</Text>
        <Text style={[styles.labelMargin,styles.title]}>사이즈 한줄평</Text>
      </View>
      <View>
        <Text style={[styles.labelMargin,styles.price]}>{item.rev_personal1}cm</Text>
        <Text style={[styles.labelMargin,styles.price]}>{item.rev_personal2}Kg</Text>
        <Text style={[styles.labelMargin,styles.price]}>{getSizeByCount(item.rev_additional1)}</Text>
        <Text style={[styles.labelMargin,styles.price]}>{getSizeOpinion(item.rev_additional3)}</Text>
        <Text style={[styles.labelMargin,styles.price]}>{item.rev_title}</Text>
      </View>
    </View>
  )
};


const styles = EStyleSheet.create({
  container:{
    width:"100%",
    flexDirection: 'row',
    paddingBottom:"10rem",
    borderBottomWidth :1,
    borderBottomColor:"#efefef",
  },
  title:{
    color:"black",
    fontSize:"13.873rem",
    marginRight:"30rem",
  },
  price:{
    color:"black",
    fontSize:"13.873rem",
    marginRight:"auto",
  },
  point:{
    color:"#26CBFF",
    fontSize:"13.873rem",
    marginRight:"auto",
  },
  labelMargin:{
    marginTop:"5rem",
  },

 
});