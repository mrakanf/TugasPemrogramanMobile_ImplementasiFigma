import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splashScreen}>
      <View
        style={[styles.splashScreenChild, styles.splashScreenChildPosition]}
      />
      <Image
        style={styles.rm222batch3Mind031Icon}
        resizeMode="cover"
        source={require("../assets/rm222batch3mind03-1.png")}
      />
      <Text style={styles.didukungOleh}>Didukung oleh</Text>
      <View style={[styles.logoBeltimKecilCopy1Wrapper, styles.logoLayout]}>
        <Image
          style={[styles.logoBeltimKecilCopy1, styles.logoLayout]}
          resizeMode="cover"
          source={require("../assets/logobeltimkecil-copy-1.png")}
        />
      </View>
      <Pressable
        style={[
          styles.img20161128Wa00041728874R,
          styles.splashScreenChildPosition,
        ]}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/img20161128wa00041728874removebgpreview-11.png")}
        />
      </Pressable>
      <Image
        style={styles.logoBanyuwangi1}
        resizeMode="cover"
        source={require("../assets/logo-banyuwangi-1.png")}
      />
      <View style={styles.statusbar}>
        <Image
          style={styles.devicesbatteryFullIcon}
          resizeMode="cover"
          source={require("../assets/devicesbatteryfull.png")}
        />
        <Image
          style={[
            styles.interfaceEssentialwiFiIcon,
            styles.interfaceIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/interface-essentialwifi.png")}
        />
        <Image
          style={[
            styles.interfaceEssentialwiFiIcon1,
            styles.interfaceIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/interface-essentialwifi1.png")}
        />
        <Text style={[styles.text, styles.gTypo, styles.amTypo]}>100%</Text>
        <Text style={[styles.g, styles.gTypo]}>4G</Text>
        <Text style={[styles.am, styles.gTypo, styles.amTypo]}>15:00 AM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreenChildPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  logoLayout: {
    height: 4,
    width: 3,
    position: "absolute",
  },
  interfaceIconLayout: {
    height: 20,
    top: 2,
    width: "5.56%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    position: "absolute",
  },
  amTypo: {
    color: GlobalStyles.Color.black,
    top: 3,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
  },
  splashScreenChild: {
    top: 0,
    width: 360,
    height: 728,
    backgroundColor: GlobalStyles.Color.teal_100,
  },
  rm222batch3Mind031Icon: {
    top: 728,
    left: -63,
    width: 728,
    height: 486,
    display: "none",
    position: "absolute",
  },
  didukungOleh: {
    top: 594,
    left: 142,
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    color: GlobalStyles.Color.gray800,
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    position: "absolute",
  },
  logoBeltimKecilCopy1: {
    left: 0,
    width: 3,
    top: 0,
  },
  logoBeltimKecilCopy1Wrapper: {
    top: 943,
    left: -421,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  img20161128Wa00041728874R: {
    top: 192,
    height: 199,
  },
  logoBanyuwangi1: {
    top: 625,
    left: 158,
    width: 43,
    height: 57,
    position: "absolute",
  },
  devicesbatteryFullIcon: {
    width: "6.67%",
    right: "4.72%",
    left: "88.61%",
    maxWidth: "100%",
    height: 24,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  interfaceEssentialwiFiIcon: {
    right: "23.06%",
    left: "71.39%",
  },
  interfaceEssentialwiFiIcon1: {
    right: "29.17%",
    left: "65.28%",
    display: "none",
  },
  text: {
    left: 290,
  },
  g: {
    top: 6,
    left: 216,
    color: GlobalStyles.Color.gray600,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    display: "none",
  },
  am: {
    left: 17,
    fontWeight: "500",
  },
  statusbar: {
    height: 24,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: GlobalStyles.Color.teal_100,
  },
  splashScreen: {
    flex: 1,
    overflow: "hidden",
    height: 728,
    backgroundColor: GlobalStyles.Color.teal_100,
    width: "100%",
  },
});

export default SplashScreen;
