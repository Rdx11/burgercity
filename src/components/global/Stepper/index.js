import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

import { BaseStyle } from '../../../constant'

class Stepper extends Component {
  constructor () {
    super()
    this.state = {
      countNumber: 1
    }
  }

  render () {
    const { countNumber } = this.state
    return (
      <View style={styles['container']}>
        <TouchableOpacity
          onPress={this.countDown}
          style={{ padding: 10 }}
        >
          <View style={styles['button']}>
            <Entypo
              name='minus'
              size={16}
              color={'#727C8E'}
            />
          </View>
        </TouchableOpacity>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--black']
          ]}
        >
          {countNumber}
        </Text>

        <TouchableOpacity
          onPress={this.countUp}
          style= {{ padding: 10 }}
        >
          <View style={styles['button']}>
            <Entypo
              name='plus'
              size={16}
              color={'#727C8E'}
            />

          </View>
        </TouchableOpacity>
      </View>
    )
  }

  countUp = () => {
    const { counter } = this.props
    this.setState(prevState => ({
      countNumber: prevState.countNumber + 1
    }), () => {
      counter(this.state.countNumber)
    })

    // cara ke 2
    // const plus = prevState => ({
    //   countNumber: prevState.countNumber + 1
    // })
    // const callback = () => {
    //   const { counter } = this.props
    //   counter(this.state.countNumber)
    // }
    // this.setState(plus, callback)
  }

  countDown = () => {
    const { counter } = this.props
    this.setState(prevState => {
      if (prevState.countNumber > 1) {
        return {
          countNumber: prevState.countNumber - 1
        }
      }
    }, () => {
      counter(this.state.countNumber)
    })
  }
}

Stepper.propTypes = {
  counter: PropTypes.func
}

export default Stepper

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 110,
    backgroundColor: '#FFFFFF'
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#E3E5E8'
  }
})
