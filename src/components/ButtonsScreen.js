import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from './Buttons/Button'

const ButtonsScreen = () => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.row}>
        <Button text="C" />
        <Button />
        <Button text="del" />
        <Button text="=" />
      </View>
      <View style={styles.row}>
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="+" />
      </View>
      <View style={styles.row}>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" />
      </View>
      <View style={styles.row}>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="/" />
      </View>
      <View style={styles.row}>
        <Button />
        <Button text="0" />
        <Button />
        <Button text="=" />
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
