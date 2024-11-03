import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from '../../../config/theme/colors';

interface SearchInputProps {
  value: string | undefined,
  onChangeText: (value: string) => void
}

const SearchInput = ({ value, onChangeText }: SearchInputProps) => {

  return (
    <View style={styles.container} >
      <TextInput
        value={value}
        style={styles.input}
        placeholder='Type to search'
        placeholderTextColor={COLORS.muted}
        onChangeText={onChangeText}
      />
      <AntDesign
        name="search1"
        size={16}
        color={COLORS.muted}
        style={{ paddingLeft: 8, userSelect: "none" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderColor: COLORS.muted,
    color: COLORS.default,
    paddingLeft: 30,
    borderWidth: 1,
    borderRadius: 5,
  },
})

export default SearchInput