import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Another from '../screens/another';
import Users from '../screens/users';

const DrawerStack = createDrawerNavigator();

export default function Route(props) {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="Users" component={Users} />
      <DrawerStack.Screen name="Another" component={Another} />
    </DrawerStack.Navigator>
  );
}
