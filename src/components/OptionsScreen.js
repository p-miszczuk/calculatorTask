import React from 'react'
import { View } from 'react-native'
import Button from './Buttons/Button'

const OptionsScreen = ({ onPress }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Button text="Calculator" options={true} onPress={onPress} />
      <Button text="History" options={true} onPress={onPress} />
    </View>
  )
}

export default OptionsScreen
