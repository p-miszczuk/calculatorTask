import React from 'react'
import { View } from 'react-native'
import Button from './Buttons/Button'

const OptionsScreen = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Button text="Calculator" options={true} />
      <Button text="History" options={true} />
    </View>
  )
}

export default OptionsScreen
