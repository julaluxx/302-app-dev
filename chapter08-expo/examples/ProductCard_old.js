import React from "react";
import { View, Text, Image } from "react-native";

import {
  bgStyles,
  typoStyles,
  spaceStyles,
  sizeStyles,
  layoutStyles,
  borderStyles,
} from "../sharedStyles";

export default function ProductCard({ product }) {
  return (
    <View
      style={[
        bgStyles.cardBackground,
        spaceStyles.paddingM,
        borderStyles.roundedM,
        borderStyles.shadowM,
      ]}
    >
      <View
        style={[
          layoutStyles.row,
          layoutStyles.alignCenter,
          layoutStyles.justifyBetween,
        ]}
      >
        <Text style={[typoStyles.textTitle]}>{product.name}</Text>
        <Text style={[typoStyles.textSubtitle]}>{product.price} บาท</Text>
      </View>

      <Text style={[typoStyles.textDescription, spaceStyles.marginTopS]}>
        {product.description}
      </Text>

      <Image
        source={{ uri: product.imageUrl }}
        style={[
          sizeStyles.widthFull,
          sizeStyles.ratio16by9,
          spaceStyles.marginTopM,
          borderStyles.roundedS,
        ]}
        resizeMode="cover"
      />
    </View>
  );
}
