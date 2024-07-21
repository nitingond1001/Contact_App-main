import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {contactsSelector} from '../slices/contacts.js';
import ContactComponent from '../components/contactComponent.js';

const HomeScreen = () => {
  const {contacts, loading, hasErrors} = useSelector(contactsSelector);

  const renderContact = () => {
    if (loading) {
      return <Text>Loading...</Text>;
    }
    if (hasErrors) {
      return <Text>contact tidak ditemukan...</Text>;
    }

    return (
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => <ContactComponent key={item.key} item={item} />}
      />
    );
  };

  return <View style={{flex: 1}}>{renderContact()}</View>;
};

export default HomeScreen;
