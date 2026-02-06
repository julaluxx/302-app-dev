import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { users } from '../data/users';
import UserProfileCard from './UserProfileCard';
import { typoStyles, spaceStyles } from '../sharedStyles';

export default function UserProfileCardExample() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={[typoStyles.textCenter, spaceStyles.paddingM]}>ผู้ใช้ทั้งหมด</Text>
      {users.map(user => (
        <UserProfileCard key={user.id} user={user} />
      ))}
    </ScrollView>
  );
}
