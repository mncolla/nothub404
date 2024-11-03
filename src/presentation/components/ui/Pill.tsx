import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../config/theme/colors'
const Pill = ({ label }: { label: string }) => {
    return (
        <View style={styles.pill}>
            <Text style={{color: COLORS.accent}}>{label}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    pill: {
        backgroundColor: COLORS.accentMuted,
        borderRadius: 100,
        paddingHorizontal: 7,
        paddingVertical: 3
    }
})
export default Pill