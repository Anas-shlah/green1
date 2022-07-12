import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = props => {
  const {types, setIndex, length, navigation, setuser} = props;
  const pressSkip = () => {
    setIndex(length - 1);
  };

  const pressGuest = () => {
    setuser('Guest');
    navigation.navigate('TabNavigatorApp');
  };
  return (
    <View style={styles.container}>
      {types == 'skip' ? (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            pressSkip();
          }}>
          <Text style={styles.text}>{`تخطي >>`}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            pressGuest();
          }}>
          <Text style={styles.text}>{`استمرار كزائر >`}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  btn: {
    backgroundColor: 'silver',
    padding: 5,
    borderRadius: 50,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
});

export default Header;
