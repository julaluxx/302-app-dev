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

export default function ProductCard({ product }) {
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
        <Text style={typoStyles.productTitle}>{product.name}</Text>
        <Text style={typoStyles.textSubtitle}>{product.price} บาท</Text>
      </View>
      
      <Text style={[typoStyles.textDescription, spaceStyles.marginTopS]}>
        {product.description}
      </Text>

      {!!product.imageUrl && (
        <Image
          source={{ uri: product.imageUrl }}
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
