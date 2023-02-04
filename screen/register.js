import { StyleSheet, Text, View, Image, useColorScheme, SafeAreaView, Platform, StatusBar } from "react-native";
import InputTextAuth from "../components/InputTextAuth";
import CustomBtnAuth from "../components/ButtonAuth";

export default function RegisterScreen() {
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const textDesc ="Akses materi, latihan soal, dan beragam fitur menarik lainnya sekarang";
  const textDaftar = "Yuk, daftar di KOSA. Gratis!";

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "white", margin: 24 }}>
          <View style={{ flex: 1, alignItems: "center"}}>
            <Text style={{ color: "#3C3C43", fontWeight: "500", fontSize: 16 }}>
              {textDaftar}
            </Text>
            <Text
              style={{
                marginTop: 8,
                textAlign: "center",
                maxWidth: 300,
                color: "#3C3C43",
                fontSize: 13,
                fontWeight: "400",
              }}
            >
              {textDesc}
            </Text>
            <Image
              source={require("../assets/signup.png")}
              style={{ marginTop: 48 }}
            />

            <View style={{ marginTop: 24 }}>
              <InputTextAuth plch="Email" secure={false} />
              <InputTextAuth plch="Password" secure={true} />
              <InputTextAuth plch="Confirmation password" secure={true} />

              <CustomBtnAuth txt="Sign up" />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 24
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#FFFFFF',
  },
  lightThemeText: {
    color: '#FFFFFF',
  },
  darkThemeText: {
    color: '#FFFFFF',
  },
});