import { FC } from 'react'
import { Image, StyleSheet } from 'react-native'

type AvatarProps = {
    src: string
}

const Avatar: FC<AvatarProps> = ({ src }: AvatarProps) => {
    return (
        <Image 
            style={styles.avatar} 
            src={src} 
            source={{ uri: src }}
            accessibilityRole="image"
            testID="avatar-image"
        />
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