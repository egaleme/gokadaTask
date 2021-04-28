import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props} style={{marginTop: 30}}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
