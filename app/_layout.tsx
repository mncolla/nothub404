import { Slot } from 'expo-router'
import { View, StyleSheet } from 'react-native'
const RootLayout = () => {
  return (
    <View style={rootLayoutStyles.container}>
      <Slot />
    </View>
  )
}

export default RootLayout

const rootLayoutStyles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1
    }
})