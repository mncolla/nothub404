import { Slot } from 'expo-router'
import { View, StyleSheet } from 'react-native'
import { COLORS } from '../src/config/theme/colors'

const RootLayout = () => {
  return (
    <View style={rootLayoutStyles.container}>
      <Slot />
    </View>
  )
}

const rootLayoutStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: COLORS.background
  }
})

export default RootLayout