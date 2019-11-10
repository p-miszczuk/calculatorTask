import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ResultScreen from '../../components/ResultScreen'
import ButtonsScreen from '../../components/ButtonsScreen'
import OptionsScreen from '../../components/OptionsScreen'

const Calc = () => {
  const [display, setDisplay] = useState({ num: '', sign: '' })
  const [value, setValue] = useState('')
  const [count, setCount] = useState(false)

  const handlePressButton = val => {
    if (val === 'C') {
      setDisplay({ num: '', sign: '' })
    } else if (val === 'del') {
      if (display.num.length > 0 && count)
        setDisplay({
          ...display,
          num: display.num.substring(display.num.length - 1, 1)
        })
    } else if (val === '+' || val === '-' || val === '/' || val === 'x') {
      if (display.num.length > 0) {
        if (val === 'x') val = '*'
        const values = value + display.num
        // eslint-disable-next-line no-eval
        const score = eval(values)
        setValue(score + val)

        setDisplay({ num: score, sign: val })
        setCount(false)
      } else {
        setDisplay({ ...display, sign: val })
      }
    } else {
      if (count) {
        setDisplay({ ...display, num: display.num + val })
      } else {
        setDisplay({ ...display, num: val })
        setCount(true)
      }
    }
  }

  const handleChangeView = val => {
    console.log(val)
  }

  return (
    <View style={styles.calcContainer}>
      <View style={styles.calc}>
        <ResultScreen display={display} />
        <ButtonsScreen onPress={handlePressButton} />
        <OptionsScreen onPress={handleChangeView} />
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
