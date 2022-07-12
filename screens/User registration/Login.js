import {
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {HandlerPassword, HandlerEmail, AlertHandler} from './Handlerinput';

const {width, height} = Dimensions.get('window');

const Login = ({navigation, route}) => {
  const {setuser} = route.params;

  const [inputEmail, changeInputEmail] = useState({
    valueEmail: '',
    isValidEmail: '',
    touched: false,
  });

  const [inputPassword, changeInputPassword] = useState({
    valuePassword: '',
    isValidPassword: '',
    touched: false,
  });

  const submitHandler = (types, inputVal) => {
    if (types == 'email') {
      changeInputEmail({
        valueEmail: inputVal,
        touched: true,
        isValidEmail: HandlerEmail(inputVal),
      });
    }
    if (types == 'password') {
      changeInputPassword({
        valuePassword: inputVal,
        touched: true,
        isValidPassword: HandlerPassword(inputVal),
      });
    }
  };
  const onPressRegister = () => {
    AlertHandler(
      true,
      inputEmail.isValidEmail,
      inputPassword.isValidPassword,
      true,
      inputEmail.touched,
      inputPassword.touched,
    )
      ? (setuser(inputEmail.isValidEmail),
        navigation.navigate('TabNavigatorApp'))
      : null;
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={'#1E7145'} />
      <ScrollView>
        <View style={styles.viewImage}>
          <Image
            source={require('../../img/Login/Login.png')}
            style={[styles.image]}
          />
          <Text style={styles.titleScreen}>تسجيل الدخول</Text>
        </View>
        <View style={styles.viewInput}>
          <Text style={styles.titleInput}>الدخول بالبريد الالكتروني</Text>
          <TextInput
            placeholder="اكتب البريد الاكلتروني"
            style={styles.input}
            autoComplete={'email'}
            onChangeText={x => {
              submitHandler('email', x);
            }}
          />
          {inputEmail.touched == true && inputEmail.isValidEmail == false ? (
            <Text style={styles.alertHandler}>
              أدخل عنوان بريد إلكتروني صحيح
            </Text>
          ) : null}

          <Text style={styles.titleInput}>كلمة المرور</Text>
          <TextInput
            placeholder="كلمة المرور"
            style={styles.input}
            autoComplete={'password'}
            secureTextEntry
            onChangeText={x => {
              submitHandler('password', x);
            }}
          />

          {inputPassword.touched == true &&
          inputPassword.isValidPassword == false ? (
            <Text style={styles.alertHandler}>
              ادخل كلمة مرور صحيحة لا تقل عن 6 أحرف
            </Text>
          ) : null}
        </View>
        <View style={styles.viewFooter}>
          <Text style={styles.textFooter}>نسيت كلمة المرور؟</Text>
        </View>
        <View style={styles.viewbtn}>
          <TouchableOpacity
            style={[styles.btn]}
            onPress={() => {
              onPressRegister();
            }}>
            <Text style={styles.textBtn}>تسجيل الدخول</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerWrapperview3}>
          <View style={styles.horiaon} />
          <Text style={{fontSize: 20, margin: 10}}>أو</Text>
          <View style={styles.horiaon} />
        </View>
        <View style={styles.viewIcon}>
          <TouchableOpacity>
            <Image
              source={require('../../img/Login/facebook.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../img/Login/google.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  viewImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  titleScreen: {
    color: '#1E7145',
    fontSize: 25,
  },
  viewInput: {
    margin: 10,
  },
  input: {
    backgroundColor: '#EEEEEE',
    fontSize: 20,
    borderRadius: 30,
  },
  titleInput: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  viewFooter: {
    alignItems: 'flex-end',
  },
  textFooter: {
    color: '#1E7145',
    fontSize: 15,
    margin: 10,
  },
  viewbtn: {
    height: 50,
    margin: 10,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#1e7145',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  innerWrapperview3: {
    //margin: 10,
    //marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horiaon: {
    // margin: 10,
    //marginHorizontal: 20,
    height: 1,
    width: width * 0.4,
    backgroundColor: '#bbb',
  },
  viewIcon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    width: width * 0.13,
    height: height * 0.13,
    resizeMode: 'contain',
  },
  alertHandler: {
    color: 'red',
    margin: 5,
    fontSize: 15,
  },
});
