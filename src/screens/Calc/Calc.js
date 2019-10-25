import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ResultScreen from '../../components/ResultScreen'
import ButtonsScreen from '../../components/ButtonsScreen'
import OptionsScreen from '../../components/OptionsScreen'

const Calc = () => {
  return (
    <View style={styles.calcContainer}>
      <View style={styles.calc}>
        <ResultScreen />
        <ButtonsScreen />
        <OptionsScreen />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  calcContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  calc: {
    width: 280
  }
})

export default Calc
