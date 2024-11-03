import { View, Text, StyleSheet } from 'react-native'
import { getGithubTechnologyColor } from '../../../config/helpers/getGithubTechnologyColor'
import { COLORS } from '../../../config/theme/colors'

const TechnologyLang = ({ language }: { language: string }) => {

  const languageColor = getGithubTechnologyColor(language)

  return (
    <View style={styles.container}>
      {languageColor && <View style={[styles.langColor, { backgroundColor: languageColor }]}></View>}
      <Text style={styles.language}>{language}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  langColor: {
    width: 13,
    height: 13,
    borderRadius: 100
  },
  language: {
    color: COLORS.muted
  }
})

export default TechnologyLang