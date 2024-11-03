import { View, StyleSheet, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { Repository } from '../src/domain/entities/github-repository.entity'
import GithubCard from '../src/presentation/components/GithubCard'
import SearchInput from '../src/presentation/components/ui/SearchInput'
import useFavoritesStore from '../src/presentation/store/favorites.store'

const HomeScreen = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const favoriteRepositories = useFavoritesStore(state => state.favorites)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
      const filteredRepositories = favoriteRepositories.filter(favorite => {
        const matchName = favorite.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchDescription = favorite.description?.toLowerCase().includes(searchQuery.toLowerCase())
        const matchTags = favorite.tags?.some(tag => tag.includes(searchQuery.toLowerCase()))
        const matchLang = favorite.language?.toLowerCase().includes(searchQuery.toLowerCase())
        return matchName || matchDescription || matchTags || matchLang
      });
      setRepositories(filteredRepositories)
  }, [searchQuery, favoriteRepositories])

  return (
    <View style={homeScreenStyles.container}>
      <SearchInput value={searchQuery} onChangeText={setSearchQuery}/>
      <FlatList
        data={repositories.flat()}
        keyExtractor={repository => `${repository.id}`}
        numColumns={1}
        renderItem={({item}) => <GithubCard repository={item} />}
        style={{ width: "100%", gap:3 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
      />
    </View>
  )
}

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10
  }
})

export default HomeScreen