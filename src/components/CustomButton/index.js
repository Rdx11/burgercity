import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

class CustomButton extends Component {
  render () {
    const { titleButton } = this.props
    return (
      <TouchableOpacity
        underlayColor='#ED941A'
        style={this.buildButtonStyle()}
        {...this.props}
      >
        <Text style={this.buildTitleStyle()}>
          {titleButton}
        </Text>
      </TouchableOpacity>
    )
  }

  buildButtonStyle = () => {
    const { disabled, buttonStyle } = this.props
    return disabled
      ? [
        styles['button'],
        styles['button--inactive'],
        buttonStyle
      ]
      : [
        styles['button'],
        styles['button-active'],
        buttonStyle
      ]
  }

  buildTitleStyle = () => {
    const { disabled } = this.props
    return disabled
      ? [
        styles['text'],
        styles['text--inactive']
      ]
      : [
        styles['text'],
        styles['text-active']
      ]
  }
}

CustomButton.propTypes = {
  disabled: PropTypes.bool,
  titleButton: PropTypes.string,
  buttonStyle: PropTypes.object
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#ff9f1c',
    paddingVertical: 15,
    marginTop: 50
  },
  'button--active': {
    backgroundColor: '#ff9f1c'
  },
  'button--inactive': {
    borderWidth: 1,
    borderColor: '#ff9f1c',
    backgroundColor: 'transparent'
  },
  text: {
    fontFamily: 'Nunito-Black',
    fontSize: 16,
    color: '#ffffff',
    includeFontPadding: false
  },
  'text--active': {
    color: '#ffffff'
  },
  'text--inactive': {
    color: '#ff9f1c'
  }
})

export default CustomButton
