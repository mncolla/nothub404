import { View, Text, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from '../../../config/theme/colors';

const StarsCount = ({count}:{count: number}) => {
  return (
    <View style={styles.container}>
        <AntDesign name="staro" size={14} color={COLORS.muted} />
        <Text style={{color: COLORS.muted}}>{count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 3
    }
})

export default StarsCount