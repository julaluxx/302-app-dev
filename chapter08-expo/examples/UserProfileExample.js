// UserProfileExample.js
import { View, ScrollView, Text } from 'react-native';
import { users } from '../data/users';
import UserProfileCard from './UserProfileCard';
import { typoStyles, spaceStyles, layoutStyles } from '../sharedStyles';

export default function UserProfileExample() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={[typoStyles.textTitle, typoStyles.textCenter, spaceStyles.paddingM]}>ผู้ใช้ทั้งหมด</Text>
      <Text style={[typoStyles.textRegular, spaceStyles.marginBottomM, typoStyles.textCenter]}>โปรแกรมเมอร์: จุฬาลักษณ์ กินรา</Text>
      {users.map(user => (
        <UserProfileCard key={user.id} user={user} />
      ))}
    </ScrollView>
  );
}
