import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Pressable,
    Alert,
    ScrollView,
} from "react-native";
import {
    bgStyles,
    typoStyles,
    spaceStyles,
    layoutStyles,
    borderStyles,
    sizeStyles,
} from "../sharedStyles";
import { users } from "../data/users";
import App from "../App";

export default function LoginUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        if (!username || !password) {
            Alert.alert("Error", "กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }

        const foundUser = users.find(
            (u) => (u.name === username || u.email === username) && u.password === password
        );

        if (foundUser) {
            if (!foundUser.isActive) {
                Alert.alert("Error", "บัญชีนี้ถูกปิดใช้งาน");
                return;
            }
            setUser(foundUser);
            setIsLoggedIn(true);
            Alert.alert("Success", `ยินดีต้อนรับ, ${foundUser.name}!`);
        } else {
            Alert.alert("Error", "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        }
    };

    if (isLoggedIn) {
        return <App user={user} />;
    }

    return (
        <View style={[layoutStyles.container, layoutStyles.justifyCenter, bgStyles.screenBackground, spaceStyles.paddingL]}>
            <Text style={[typoStyles.textTitle, typoStyles.textCenter, spaceStyles.marginBottomM]}>ลงชื่อเข้าใช้</Text>
            <Text style={[typoStyles.textRegular, spaceStyles.marginBottomM, typoStyles.textCenter]}>โปรแกรมเมอร์: จุฬาลักษณ์ กินรา</Text>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={[
                typoStyles.textInput,
                bgStyles.cardBackground,
                spaceStyles.paddingM,
                spaceStyles.marginBottomM,
                borderStyles.borderThin,
                borderStyles.roundedS,
                borderStyles.shadowS,
                sizeStyles.widthFull,
            ]} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={[
                typoStyles.textInput,
                bgStyles.cardBackground,
                spaceStyles.paddingM,
                spaceStyles.marginBottomM,
                borderStyles.borderThin,
                borderStyles.roundedS,
                borderStyles.shadowS,
                sizeStyles.widthFull,
            ]} />
            <Pressable onPress={handleLogin} style={[
                bgStyles.highlightBackground,
                borderStyles.roundedM,
                spaceStyles.paddingM,
                layoutStyles.center,
                sizeStyles.widthFull,
                borderStyles.shadowM,
            ]}>
                <Text style={[
                    typoStyles.textButton,
                ]}>เข้าสู่ระบบ</Text>
            </Pressable>
        </View>
    );
}