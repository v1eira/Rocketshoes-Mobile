import React from 'react';
import { connect } from 'react-redux';
import { Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/logo.png';

import { Header, CartInfo, CartCounter } from './styles';

function CustomHeader({ navigation, cartSize }) {
  return (
    <Header>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Image
          source={logo}
          style={{ width: 200, height: 26, resizeMode: 'cover' }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <CartInfo>
          <Icon name="shopping-basket" size={28} color="#fff" />
          <CartCounter>{cartSize || 0}</CartCounter>
        </CartInfo>
      </TouchableOpacity>
    </Header>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(CustomHeader);
