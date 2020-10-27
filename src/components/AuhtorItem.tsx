import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import { theme, globalStyles } from "../styles";
import { IAuthor } from "../state";
import { getInitials } from "../utils";

type IAuhtorItemProps = IAuthor & { numberOfPosts?: number };

export const AuhtorItem: React.FC<IAuhtorItemProps> = ({
  id,
  name,
  email,
  numberOfPosts = 0,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("Posts", { id, name, email, numberOfPosts })
      }
    >
      <View style={styles.container}>
        <Text style={[styles.initials, globalStyles.textNormal]}>
          {getInitials(name)}
        </Text>
        <View style={styles.nameEmailContainer}>
          <Text style={globalStyles.textNormal}>{name}</Text>
          <Text style={globalStyles.textSmall}>{email}</Text>
        </View>
        <View style={styles.postsArrowContainer}>
          <Text style={[styles.postsText, globalStyles.textNormal]}>
            {numberOfPosts}
          </Text>
          <Svg
            style={styles.arrowIcon}
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <Path
              d="M3.8147e-06 1.41L4.58 6L3.8147e-06 10.59L1.41 12L7.41 6L1.41 0L3.8147e-06 1.41Z"
              fill="#382A2C"
            />
          </Svg>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 28,
    flex: 1,
  },
  initials: {
    backgroundColor: theme.colors.green,
    fontWeight: theme.fontWeights[1],
    letterSpacing: 0.1,
    borderRadius: 50,
    width: 50,
    height: 50,
    textAlignVertical: "center",
    textAlign: "center",
    marginRight: 16,
  },
  nameEmailContainer: {
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  postsArrowContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "auto",
  },
  postsText: {
    marginRight: 12,
  },
  arrowIcon: {},
});
