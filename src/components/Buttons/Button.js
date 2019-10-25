import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({ text, onPress, options }) => {
  return (
    <TouchableOpacity
      style={options ? styles.buttonOptions : styles.button}
      onPress={onPress}>
      <Text style={options ? styles.buttonsOptionsText : styles.btnText}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: 70,
    height: 50
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center'
  },
  buttonOptions: {
    flex: 1,
    padding: 8
  },
  buttonsOptionsText: {
    fontSize: 11,
    textAlign: 'center'
  }
})

export default Button
