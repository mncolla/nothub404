import { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from '../../../config/theme/colors';

interface SearchInputProps {
  value: string | undefined,
  onChangeText: (value: string) => void,
  error?: boolean,
  errorText?: string, 
}

const SearchInput = ({ value, onChangeText, error = true, errorText = "Min 3 characters" }: SearchInputProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <TextInput
          value={value}
          style={[styles.input, error && styles.inputError]}
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
      {error && errorText && <Text style={{color: "red"}}>{errorText}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 3
  },
  field: {
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
  inputError: {
    borderColor: "red"
  }
})

export default SearchInput