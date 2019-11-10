import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ResultScreen = ({ display }) => (
  <View style={styles.resultContainer}>
    <Text style={styles.result}>{display.num}</Text>
    <Text style={styles.sign}>{display.sign}</Text>
  </View>
)

const styles = StyleSheet.create({
  resultContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    padding: 2
  },
  result: {
    flex: 1,
    textAlign: 'right',
    fontSize: 16
  },
  sign: {
    paddingLeft: 5,
    fontSize: 16,
    color: '#ccc'
  }
})

export default ResultScreen
