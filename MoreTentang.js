import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const MoreTentang = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.moreTentang}>
      <View style={[styles.appbar, styles.appbarPosition]}>
        <View style={styles.appbarChild} />
        <View
          style={[
            styles.arrowsChevronarrowLeftParent,
            styles.statusbarPosition,
          ]}
        >
          <Pressable
            style={styles.arrowsChevronarrowLeft}
            onPress={() => navigation.navigate("MoreList")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowschevronarrowleft1.png")}
            />
          </Pressable>
          <Text style={[styles.tentang, styles.ml16]}>Tentang</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.appbarPosition]}>
        <View>
          <Text
            style={[styles.majesticBanyuwangiSunriseO, styles.majesticColor]}
          >
            Majestic Banyuwangi, Sunrise of Java
          </Text>
        </View>
        <Text
          style={[
            styles.aplikasiMajesticMemudahkan,
            styles.mt16,
            styles.majesticColor,
          ]}
        >
          <Text
            style={styles.aplikasiMajesticMemudahkan1}
          >{`Aplikasi Majestic, memudahkan untuk menemukan wisata-wisata di Kabupaten Banyuwangi. `}</Text>
          <Text style={styles.aplikasiMajesticMemudahkan1}> </Text>
          <Text style={styles.sistemInformasiDan}>
            Sistem Informasi Dan Konten Promosi Multimedia Dinas Kebudayaan Dan
            Pariwisata Kabupaten Banyuwangi Timur 2023.
          </Text>
        </Text>
      </View>
      <View style={[styles.statusbar, styles.statusbarPosition]}>
        <Image
          style={styles.devicesbatteryFullIcon}
          resizeMode="cover"
          source={require("../assets/devicesbatteryfull.png")}
        />
        <Image
          style={styles.interfaceEssentialwiFiIcon}
          resizeMode="cover"
          source={require("../assets/interface-essentialwifi.png")}
        />
        <Image
          style={styles.interfaceEssentialwiFiIcon1}
          resizeMode="cover"
          source={require("../assets/interface-essentialwifi1.png")}
        />
        <Text style={[styles.text, styles.amTypo]}>100%</Text>
        <Text style={styles.g}>4G</Text>
        <Text style={[styles.am, styles.amTypo]}>15:00 AM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  mt16: {
    marginTop: GlobalStyles.Margin.margin_xl,
  },
  appbarPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  statusbarPosition: {
    top: 0,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  majesticColor: {
    color: GlobalStyles.Color.gray800,
    textAlign: "left",
  },
  amTypo: {
    color: GlobalStyles.Color.black,
    top: 3,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    position: "absolute",
  },
  appbarChild: {
    top: 56,
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderTopWidth: 1,
    width: 361,
    height: 1,
    backgroundColor: GlobalStyles.Color.tan,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowsChevronarrowLeft: {
    width: 24,
    height: 24,
  },
  tentang: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    width: 240,
    textAlign: "left",
    color: GlobalStyles.Color.gray600,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
  },
  arrowsChevronarrowLeftParent: {
    flexDirection: "row",
    paddingHorizontal: GlobalStyles.Padding.padding_2xl,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.tan,
    height: 56,
  },
  appbar: {
    top: 24,
    height: 56,
  },
  majesticBanyuwangiSunriseO: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 32,
    width: 327,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    color: GlobalStyles.Color.gray800,
    fontWeight: "500",
  },
  aplikasiMajesticMemudahkan1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  sistemInformasiDan: {
    margin: GlobalStyles.Margin.margin_2xs,
  },
  aplikasiMajesticMemudahkan: {
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
    lineHeight: 18,
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    width: 326,
  },
  frameParent: {
    top: 80,
    backgroundColor: GlobalStyles.Color.white,
    padding: GlobalStyles.Padding.padding_2xl,
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
    height: 20,
    top: 2,
    width: "5.56%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  interfaceEssentialwiFiIcon1: {
    right: "29.17%",
    left: "65.28%",
    display: "none",
    height: 20,
    top: 2,
    width: "5.56%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    left: 290,
  },
  g: {
    top: 6,
    left: 216,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    display: "none",
    textAlign: "left",
    color: GlobalStyles.Color.gray600,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    position: "absolute",
  },
  am: {
    left: 17,
    fontWeight: "500",
    top: 3,
  },
  statusbar: {
    backgroundColor: GlobalStyles.Color.teal_100,
    height: 24,
  },
  moreTentang: {
    backgroundColor: GlobalStyles.Color.beige,
    flex: 1,
    height: 792,
    overflow: "hidden",
    width: "100%",
  },
});

export default MoreTentang;
