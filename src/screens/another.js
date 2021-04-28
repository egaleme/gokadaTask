import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Hambuger from '../component/hambuger';

export default function home(props) {
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigation.toggleDrawer();
  };
  return (
    <View style={styles.root}>
      <View style={{height: 50, marginTop: 20}}>
        <Hambuger toggleDrawer={toggleDrawer} />
      </View>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <Text>Another Page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
