import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils'

const ErrorFetch = () => {
  return (
    <View>
      <Text>ErrorFetch</Text>
    </View>
  )
}

export default ErrorFetch

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.white
  },
})