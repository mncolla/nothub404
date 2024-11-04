import { GestureResponderEvent, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from '../../../config/theme/colors'

interface CancelButtonProps {
    label: string,
    style?: StyleProp<ViewStyle>, 
    onPress?: (event: GestureResponderEvent) => void,
}

const CancelButton = ({ style, onPress, label }: CancelButtonProps) => {
  return (
    <View style={[styles.button, style]}>
        <TouchableOpacity onPress={onPress}>
            <AntDesign name="close" size={14} color={COLORS.default} />
        </TouchableOpacity>
        <Text style={{ color: COLORS.default }}>{label}</Text>
    </View>
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

export default CancelButton