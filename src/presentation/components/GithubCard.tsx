import { ReactNode } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Repository } from "../../domain/entities/github-repository.entity";
import { getRelativeTime } from "../../config/helpers/getRelativeDay";
import Avatar from "./ui/Avatar";
import Pill from "./ui/Pill";
import StarsCount from "./ui/StarsCount";
import TechnologyLang from "./ui/TechnologyLang";
import { COLORS } from "../../config/theme/colors";

const GithubCard = (repositoryProps: Repository) => {
  const {
    id,
    name,
    avatar,
    description,
    tags,
    language,
    stars,
    activity,
  } = repositoryProps;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Avatar src={avatar}/>
        <Text style={styles.title}>{name}</Text>
      </View>
      {description && <Text style={styles.description}>{description}</Text>}
      {tags && <View style={styles.tagsContainer}>
        {tags.map(tag => <Pill label={tag} key={tag}/>)}
      </View>}
      <View style={styles.footer}>
        {language && <TechnologyLang language={language}/>}
        <StarsCount count={stars}/>
        <Text style={{ color: COLORS.muted }}>{getRelativeTime(activity)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.muted,
    borderRadius: 8,
    padding: 16,
    gap: 10
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  title: {
    color: COLORS.accent,
    fontWeight: "700"
  },
  description: {
    color: COLORS.default,
    fontWeight: "600"
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    gap: 10
  },
  
});

export default GithubCard;
