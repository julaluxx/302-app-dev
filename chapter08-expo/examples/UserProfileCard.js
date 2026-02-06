import React from "react";
import { View, Text, Image } from "react-native";

import {
  bgStyles,
  typoStyles,
  spaceStyles,
  borderStyles,
  layoutStyles,
  sizeStyles,
} from "../sharedStyles";

export default function UserProfileCard({ user }) {
  return (
    <View
      style={[
        bgStyles.cardBackgroundLight,
        borderStyles.shadowM,
        borderStyles.roundedM,
        spaceStyles.cardSpacing,
        spaceStyles.paddingM,
      ]}
    >
      <View
        style={[
          layoutStyles.row,
          layoutStyles.alignCenter,
          layoutStyles.justifyBetween,
        ]}
      >
        <Text style={typoStyles.productTitle}>{user.name}</Text>
        <Text style={typoStyles.textSubtitle}>{user.email}</Text>
      </View>
      
      <Text style={[typoStyles.textDescription, spaceStyles.marginTopS]}>
        {user.description}
      </Text>

      {!!user.imageUrl && (
        <Image
          source={{ uri: user.imageUrl }}
          style={{
            width: "100%",
            height: 180,
            borderRadius: 12,
            marginTop: 10,
          }}
          resizeMode="cover"
        />
      )}
    </View>
  );
}
