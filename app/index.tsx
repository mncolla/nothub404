import { View, Text, StyleSheet, FlatList } from 'react-native'
import { getRepositories } from '../src/actions/get-repositories.action'
import { useEffect, useState } from 'react'
import { Repository } from '../src/domain/entities/github-repository.entity'
import GithubCard from '../src/presentation/components/GithubCard'
import SearchInput from '../src/presentation/components/ui/SearchInput'
import useDebounceValue from '../src/presentation/hooks/useDebounceValue'

const HomeScreen = () => {

  const [repositories, setRepositories] = useState<Repository[]>([])
  const [searchQuery, setSearchQuery] = useState("javascript")

  const debounceValue = useDebounceValue(searchQuery, 1000)

  useEffect(() => {
    if (debounceValue.length > 3){
      getRepositories(debounceValue, 1, 10).then(data => setRepositories(data))
    }
  }, [debounceValue])

  return (
    <View style={homeScreenStyles.container}>
      <SearchInput value={searchQuery} onChangeText={setSearchQuery}/>
      <FlatList
        data={repositories.flat()}
        keyExtractor={repository => `${repository.id}`}
        numColumns={1}
        renderItem={item => <GithubCard {...item.item} />}
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