import React from 'react';
import { View, Dimensions, Text, Image } from 'react-native';
import { Button, Icon, Left, Right } from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import ProgressiveImage from './ProgressiveImage';
import { defaultCover } from '../constants/app';

const CustomHeader = ({
  navigation,
  headerImage,
  right,
  left,
  leftText,
  rightText,
  hasOverlay,
}) => {
  const rightBtn = (
    <Button
      style={{
        height: 20,
        width: 83,
        backgroundColor: '#16A085',
        justifyContent: 'center',
        marginRight: 10,
        zIndex: 100,
      }}
      small
      success
      onPress={() => navigation.goBack()}
    >
      <Text style={{ color: 'white', fontSize: 10 }}>Follow</Text>
    </Button>
  );
  const leftBtn = (
    <Button transparent color="white" onPress={() => navigation.dismiss()}>
      <Icon name="arrow-back" style={{ color: 'white' }} />
      {leftText && <Text style={{ color: 'white', fontWeight: '600' }}>{leftText}</Text>}
    </Button>
  );
  const colors = [hasOverlay ? 'transparent' : '#0E0805', 'transparent'];
  return (
    <View style={styles.absolute}>
      <ProgressiveImage
        style={{
          width: Dimensions.get('window').width,
          height: 210,
        }}
        resizeMode="cover"
        source={{ uri: headerImage.uri || defaultCover }}
      />
      <LinearGradient colors={colors} style={{ ...styles.absolute, ...styles.header }}>
        <Left>
          {left || leftBtn}
        </Left>
        <Right>
          {right || rightBtn}
        </Right>
      </LinearGradient>
      {hasOverlay &&
        <View style={[styles.absolute, { backgroundColor: 'rgba(0,0,0,0.36)', height: 210 }]} />}
    </View>
  );
};

const styles = {
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    alignItems: 'flex-start',
    height: 65,
    paddingTop: 10,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    zIndex: 1,
  },
};
export default CustomHeader;