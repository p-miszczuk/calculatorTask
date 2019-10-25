import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ResultScreen = () => (
  <View style={styles.resultContainer}>
    <Text style={styles.result}>Result</Text>
    <Text style={styles.sign}>=</Text>
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
