import { Slot, Stack } from 'expo-router'
import { View, StyleSheet } from 'react-native'

const RootLayout = () => {
  return (
    <View style={rootLayoutStyles.container}>
      <Slot/>
    </View>
  )
}

const rootLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default RootLayout