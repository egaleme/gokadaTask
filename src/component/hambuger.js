import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Hambuger(props) {
  return (
    <TouchableOpacity
      style={{position: 'absolute', left: 20}}
      onPress={props.toggleDrawer}>
      <FontAwesome name="align-left" size={30} color="#000" />
    </TouchableOpacity>
  );
}
