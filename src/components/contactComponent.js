import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {updateFav} from '../slices/contacts.js';
import {contactsSelector} from '../slices/contacts.js';

const test = [
  {
    key: 'a1',
    icon: 'Mama akma',
    name: 'Mama akma',
    phone: '085236725506',
    is_fav: true,
  },
  {
    key: 'a2',
    icon: '',
    name: 'Mama Bapak',
    phone: '085236725501',
    is_fav: true,
  },
  {
    key: 'a6',
    icon: '',
    name: 'Ibu',
    phone: '085236725505',
    is_fav: true,
  },
  {
    key: 'a3',
    icon: '',
    name: 'Ivan',
    phone: '085236725502',
    is_fav: false,
  },
  {
    key: 'a4',
    icon: '',
    name: 'Unying',
    phone: '0852367255023',
    is_fav: false,
  },
  {
    key: 'a5',
    icon: '',
    name: 'A cecep',
    phone: '0852367255024',
    is_fav: false,
  },
];

const ContactComponent = (props) => {
  const dispatch = useDispatch();

  const {item} = props;
  const {contacts} = useSelector(contactsSelector);

  const pressFav = (key) => {
    dispatch(updateFav({contacts, key}));
  };

  return (
    <View
      style={{
        padding: 15,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
      }}>
      <View style={{marginRight: 9}}>
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 20}}>{item.name}</Text>
        <Text style={{color: 'rgba(0, 0, 0, .5)'}}>{item.phone}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => pressFav(item.key)}>
          {item.is_fav ? (
            <Ionicons
              name="ios-heart"
              size={50}
              color="#555"
              style={{textAlign: 'right'}}
            />
          ) : (
            <Ionicons
              name="ios-heart-empty"
              size={50}
              color="#aaa"
              style={{textAlign: 'right'}}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactComponent;
