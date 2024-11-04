import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native'
import GithubCard from '../../src/presentation/components/GithubCard'
import useFavoritesStore from '../../src/presentation/store/favorites.store'
import { COLORS } from '../../src/config/theme/colors'
import { Tabs } from 'expo-router'


const HomeScreen = () => {
  const favoriteRepositories = useFavoritesStore(state => state.favorites)
  return (
    <SafeAreaView style={homeScreenStyles.screenContainer}>
      <View style={homeScreenStyles.container}>
      <View style={{ alignSelf: "flex-start" }}>
          <Text style={{ color: "white", fontSize: 24 }}>Favorites</Text>
        </View>
      <FlatList
        data={favoriteRepositories.flat()}
        keyExtractor={repository => `${repository.id}`}
        numColumns={1}
        renderItem={({item}) => <GithubCard repository={item} />}
        style={{ width: "100%", gap:3 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
      />
      </View>
    </SafeAreaView>
  )
}

const homeScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1, 
    backgroundColor: COLORS.background, 
    justifyContent: "center", 
    alignItems: "center"
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    backgroundColor: COLORS.background,
    paddingTop: 10,
  }
})

export default HomeScreen