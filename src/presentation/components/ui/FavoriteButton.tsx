import { TouchableOpacity, StyleProp, ViewStyle, StyleSheet, GestureResponderEvent } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from '../../../config/theme/colors'

interface FavoriteButtonProps {
  checked?: boolean,
  style?: StyleProp<ViewStyle>, 
  onPress?: (event: GestureResponderEvent) => void,
}

const FavoriteButton = ({ style, onPress, checked = false }: FavoriteButtonProps) => {

  const iconName = checked ? "heart" : "hearto";

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} testID="favorite-button">
      <AntDesign name={iconName} size={14} color={checked ? "red" : COLORS.default} testID="favorite-button-icon"/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#212830",
    padding: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    borderWidth: 1,
    borderColor: COLORS.muted,
    borderRadius: 7,
    zIndex: 1
  }
})

export default FavoriteButton