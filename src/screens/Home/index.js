import React from 'react'
import Calc from '../Calc'
import { useNavigation } from 'react-navigation-hooks'
import { useDispatch, useSelector } from 'react-redux'
import { compose } from 'ramda'
import { login } from '../../redux/reducers/session/actions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const reduxState = useSelector(state => state)
  const { navigate } = useNavigation()
  const props = {
    login: compose(
      dispatch,
      login
    ),
    navigate,
    reduxState
  }
  return <Calc {...props} />
}

export default HomeScreen
