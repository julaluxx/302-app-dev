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
        bgStyles.cardBackground,
        borderStyles.shadowM,
        borderStyles.roundedM,
        spaceStyles.cardSpacing,
        spaceStyles.paddingM,
        layoutStyles.alignCenter,
      ]}
    >
      {!!user.imageUrl && (
        <Image
          source={{ uri: user.imageUrl }}
          style={[
            sizeStyles.sizeM,
            borderStyles.roundedL,
            spaceStyles.marginBottomM,
          ]}
          resizeMode="cover"
        />
      )}
      <View style={[layoutStyles.alignCenter]}>
        <Text style={[typoStyles.textTitle, spaceStyles.marginBottomS]}>{user.name}</Text>
        <Text style={[typoStyles.textRegular, spaceStyles.marginBottomXS]}>{user.email}</Text>
        <Text style={[typoStyles.textDescription, spaceStyles.marginBottomXS]}>{user.role}</Text>
        <Text style={[typoStyles.textLabel, { color: user.isActive ? 'green' : 'red' }]}>
          {user.isActive ? "Online 🟢" : "Offline 🔴"}
        </Text>
      </View>
    </View>
  );
}
