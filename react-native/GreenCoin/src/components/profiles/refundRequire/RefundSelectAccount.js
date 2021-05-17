import React,{useState,useEffect} from 'react';
import { Text, View, Dimensions,TextInput ,Image,TouchableOpacity,Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ModalContent from '../../comm/ModalContent';
import RefundDescription from '../profileSetting/RefundDescription';
import loginRegisterController from '../../../server/loginRegisterController';
import userInfoSingleton from '../../../db/userInfoSingleton';

const DATA = [
  {title: "농협", code : "011"},{title: "KB국민", code : "004"},{title: "SC제일", code : "023"},{title: "경남", code : "039"},
  {title: "광주", code : "034"},{title: "기업", code : "003"},{title: "대구", code : "031"},{title: "부산", code : "032"},
  {title: "산업", code : "002"},{title: "새마을", code : "045"},{title: "수협", code : "007"},{title: "신한", code : "088"},{title: "신협", code : "048"},
  {title: "외환", code : "005"},{title: "우리", code : "020"},{title: "우체국", code : "071"},{title: "전북", code : "037"},{title: "카카오", code : "090"},
  {title: "케이뱅크", code : "089"},{title: "한국", code : "081"},{title: "씨티", code : "027"}
];

export default function RefundInformation({setRefundInfo}) {

  const [name ,setName] = useState(userInfoSingleton.getInstance()._refund_name);
  const [bank ,setBank] = useState(userInfoSingleton.getInstance()._mem_refund_bank);
  const [account ,setAccount] = useState(userInfoSingleton.getInstance()._mem_refund_account);

  const [isModalVisible,setIsModalVisible] =useState(false);
  const [modalType,setModalType] = useState("");
  const [dropDown,setDropDown] = useState(true);

  const moveNext = (data) =>{
    if(data == 1)
      Alert.alert(' ','적용 완료되었습니다.');
    else{
        setModalType("FailSearchAccount");
        setIsModalVisible(true);
    } 
  }

  const saveData = () =>{
    var formData = new FormData();
    formData.append('mem_id', userInfoSingleton.getInstance()._userId);
    formData.append('mem_refund_name', name);
    formData.append('mem_refund_bank', bank);
    formData.append('mem_refund_account', account);
    //setModalType("FailSearchAccount");
    //setModalType("BankTimeOut");
    //setIsModalVisible(true);
    loginRegisterController.updateRefundInfomation(formData,moveNext);
    //setModalType("FailSearchAccount");
    //setModalType("BankTimeOut");
    //setIsModalVisible(true);
  }


  useEffect(() => {
    
    var accountInfo = {
      name : name,
      bank : bank,
      account : account,
    }

    setRefundInfo(accountInfo);

  }, [name,bank,account])



    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.itemContainer} onPress={()=>{setDropDown(!dropDown)}}>
            <Text style={styles.title}>환불계좌 등록</Text>
            <TouchableOpacity style={styles.question} onPress={()=>{setModalType("InformationAboutAccount");  setIsModalVisible(true);}}> 
              <Image source={require('../../../assets/img/settingIcon/question.png')} ></Image>
            </TouchableOpacity>
            {
                  dropDown ?
                  <Image style={styles.image} source={require('../../../assets/img/label_point/dropUpPoint.png')}></Image>
                  :
                  <Image style={styles.image} source={require('../../../assets/img/label_point/dropDownPoint.png')}></Image>
            }
        </TouchableOpacity>
        {
          dropDown ?
          <View style={styles.contentContainer}>
            <TextInput 
              style={styles.nameInputBox}
              value={name}
              placeholder="이름"
              onChangeText={text=>{setName(text)}}
            />
            <View style={styles.tagContainer}>
            {
              DATA.map((item)=>{ 
                return  <View style={styles.accountTag}>
                          <TouchableOpacity  activeOpacity={1}  style={bank == item.code ? styles.tagActive : styles.tag} onPress={()=>{setBank(item.code)}}>
                            <Text style={styles.tagLabel}>{item.title}</Text>
                          </TouchableOpacity>
                        </View>
              })
            }
            </View>
            <TextInput 
              style={styles.accountInputBox}
              value={account}
              placeholder="계좌번호"
              onChangeText={text=>{setAccount(text)}}
              keyboardType={'numeric'}
            />
            <RefundDescription></RefundDescription>
            <TouchableOpacity style={styles.infoColum} onPress={saveData}>
              <Text style={styles.label}>동의하고 환불계좌 저장</Text>
            </TouchableOpacity>   
          </View>
          :
          null
        }
        <ModalContent modalType={modalType} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}></ModalContent>
      </View>
    );
  }
  


const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });


const styles = EStyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer:{
    width:"86%",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    height:'59.457rem',
  },
  contentContainer:{
    width:"100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    marginRight:"10rem",
    fontSize:"14.864rem",
  },
  question:{
    marginRight:"auto",
  },
  nameInputBox:{
    width:"100%",
    height:"48.556rem",
    backgroundColor:"#efefef",
    borderColor:"grey",
    borderWidth:1,
    borderRadius:5,
    width:"86%",
  },
  tagContainer:{   
    width:"90%",
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop:"12rem",
    marginBottom:"15rem",
    left:"4rem",
  },
  tag:{
    width:"100%",
    height:"29.728rem",
    borderColor:"#efefef",
    borderWidth:1,
    alignItems: "center",
    justifyContent: "center",
    padding:"4rem",
  },
  tagActive:{
    width:"100%",
    height:"29.728rem",
    borderColor:"black",
    borderWidth:"2rem",
    alignItems: "center",
    justifyContent: "center",
    padding:"4rem",
  },
  tagLabel:{
    fontSize:"12.882rem",
  },
  accountTag:{
    margin:"4rem",
  },
  accountInputBox:{
    width:"100%",
    height:"48.556rem",
    backgroundColor:"#efefef",
    borderColor:"grey",
    borderWidth:1,
    width:"86%",
    borderRadius:5,
  },
  hr:{
    marginTop:"auto",
    width:"86%",
    borderBottomColor: '#efefef',
    borderBottomWidth: 1.2,
  }, 
  infoColum:{
    width:"347.645rem",
    height:"58.448rem",   
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#0D2141",
    borderRadius:50,
    marginTop:"30rem",
    marginBottom:"30rem",

  },
  label:{
    color:"white",
    fontSize:"13.873rem",
  }
});