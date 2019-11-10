import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from './Buttons/Button'

// const arrayValues = ['C', 'empty', 'del', '=', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '/', 'empty', '0', 'empty']

const ButtonsScreen = ({ onPress }) => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.row}>
        <Button text="C" onPress={onPress} />
        <Button />
        <Button text="del" onPress={onPress} />
        <Button text="=" onPress={onPress} />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={onPress} />
        <Button text="8" onPress={onPress} />
        <Button text="9" onPress={onPress} />
        <Button text="+" onPress={onPress} />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={onPress} />
        <Button text="5" onPress={onPress} />
        <Button text="6" onPress={onPress} />
        <Button text="-" onPress={onPress} />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={onPress} />
        <Button text="2" onPress={onPress} />
        <Button text="3" onPress={onPress} />
        <Button text="/" onPress={onPress} />
      </View>
      <View style={styles.row}>
        <Button />
        <Button text="0" onPress={onPress} />
        <Button />
        <Button text="x" onPress={onPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  buttonsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
})

export default ButtonsScreen
