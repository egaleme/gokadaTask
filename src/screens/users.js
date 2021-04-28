import * as React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ListItem, Avatar} from 'react-native-elements';

import {fetchUsers, usersSelector} from '../slices/users';
import Hambuger from '../component/hambuger';

export default function users(props) {
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigation.toggleDrawer();
  };
  // initialize the redux hook
  const dispatch = useDispatch();
  const {users, loading, hasErrors} = useSelector(usersSelector);

  // dispatch our thunk when component first mounts
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.root}>
        <ActivityIndicator animating size={20} color="red" />
      </View>
    );
  }

  if (hasErrors) {
    return (
      <View style={styles.root}>
        <Text>Cannot display users...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{height: 50, marginTop: 20}}>
        <Hambuger toggleDrawer={toggleDrawer} />
      </View>
      <View style={{flex: 1, marginHorizontal: 20}}>
        {users.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={{uri: l.avatar}} rounded />
            <ListItem.Content>
              <ListItem.Title>
                {l.first_name} {l.last_name}
              </ListItem.Title>
              <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
