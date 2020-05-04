import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import logo from '../../assets/icons/logo.png'
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
      <View style={styles['header']}>
        <LeftButton withBack={props.withBack} />

        <View style={styles['logo']}>
          <Image
            source={logo}
            resizeMode='contain'
          />
        </View>

        <TouchableOpacity
          onPress={() => {}}
          style={styles['btn']}
        >
          <FontAwesome
            name='shopping-cart'
            color='#ff9f1c'
            size={20}
          />
        </TouchableOpacity>
      </View>
    )
}

const LeftButton = ({ withBack }) => {
  let button = (
    <View style={styles['lang_btn']}>
      <Text style={styles['text']}>
                  EN
      </Text>
      <Feather
        name='chevron-down'
        color='#ff9f1c'
        size={20}
        style={{ marginLeft: 2 }}
      />
    </View>
  )
  
  if (withBack) {
    button = (
      <Feather 
        name='chevron-left'
        color='#ff9f1c'
        size={28}
        style={{ marginLeft: -5 }}
      />
    )
  }
  return (
    <TouchableOpacity
      onPress={() => {} }
      style={styles['btn']}
    >
      {button}
    </TouchableOpacity>
  )
}

Header.propTypes = {
  withBack: PropTypes.bool
}

LeftButton.propTypes = {
  withBack: PropTypes.bool
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  lang_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
})