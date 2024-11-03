import { View, Text, Image, StyleSheet } from 'react-native'
const Avatar = ({ src }: { src: string }) => {
    return (
        <Image style={styles.avatar} src={src} />
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 100,
    }
})
export default Avatar