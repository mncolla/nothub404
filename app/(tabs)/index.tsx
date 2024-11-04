import { View, Text, StyleSheet, FlatList, Linking, ScrollView, SafeAreaView, ActivityIndicator, Pressable } from 'react-native'
import GithubCard from '../../src/presentation/components/GithubCard'
import SearchInput from '../../src/presentation/components/ui/SearchInput'
import { COLORS } from '../../src/config/theme/colors'
import StarsCount from '../../src/presentation/components/ui/StarsCount'
import useGetRepositories from '../../src/presentation/hooks/useGetRepositories'
import useFavoritesStore from '../../src/presentation/store/favorites.store'
import CancelButton from '../../src/presentation/components/ui/CancelButton'

const HomeScreen = () => {

  const { searchValue, search, repositories, totalStars, isLoading, error } = useGetRepositories()

  const favorites = useFavoritesStore(state => state.favorites)
  const deleteAllFavorites = useFavoritesStore(state => state.deleteAllFavorites)

  const handleOpenURL = (url: string) => {
    Linking.openURL(url)
      .catch((err) => console.error("Error al abrir la URL:", err));
  }

  return (
    <SafeAreaView style={homeScreenStyles.screenContainer}>
      <View style={homeScreenStyles.viewContainer}>
        <SearchInput
          value={searchValue}
          onChangeText={search}
          error={searchValue.length < 3}
          errorText='At least 3 characters'
        />

        {isLoading ? <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator />
        </View> :
          <View style={{flex:1, gap: 10}}>
            <View style={homeScreenStyles.resultsTitle}>
              <Text style={{ color: "white", fontSize: 18 }}>{repositories.length}{" "}results</Text>
              {favorites.length > 0 && <CancelButton label={`Clear favs (${favorites.length})`} onPress={deleteAllFavorites}/>}
            </View>
            <FlatList
              data={repositories.flat()}
              keyExtractor={repository => `${repository.id}`}
              numColumns={1}
              renderItem={({ item }) => <GithubCard repository={item} onPress={() => handleOpenURL(item.url)} />}
              style={{ width: "100%", gap: 3 }}
              ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            />
          </View>}
      </View >
      {!isLoading && totalStars > 0 && <View style={homeScreenStyles.totalCounter}>
        <Text style={{ textAlign: "center", color: COLORS.muted, fontSize: 14 }}>Total</Text>
        <StarsCount count={totalStars} />
      </View>}
    </SafeAreaView>
  )
}

const homeScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.background, 
  },
  viewContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
    gap: 10,
  },
  resultsTitle: {
    display: "flex", 
    width: "100%", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "flex-end"
  },
  totalCounter: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: COLORS.background,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 5,
    gap: 5,
    borderTopWidth: 1,
    borderTopColor: COLORS.muted
  }
})

export default HomeScreen