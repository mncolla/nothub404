import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../../config/theme/colors'
const Pill = ({ label }: { label: string }) => {
    return (
        <View style={styles.pill} testID='pill'>
            <Text style={{color: COLORS.accent}} testID='pill-label'>{label}</Text>
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