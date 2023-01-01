import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const WisataSearchFavorite = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wisataSearchFavorite}>
      <View style={styles.appbar}>
        <View style={[styles.appbarChild, styles.childBorder]} />
        <View
          style={[
            styles.arrowsChevronarrowLeftParent,
            styles.maskGroupFlexBox,
            styles.statusbarPosition,
          ]}
        >
          <Pressable
            style={styles.arrowsChevronarrowLeft}
            onPress={() => navigation.navigate("Homepage")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowschevronarrowleft1.png")}
            />
          </Pressable>
          <Text style={[styles.resultText, styles.ml16, styles.resultTextTypo]}>
            Result text
          </Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.maskGroupParent, styles.maskGroupFlexBox]}>
            <Image
              style={styles.maskGroupIcon}
              resizeMode="cover"
              source={require("../assets/mask-group1.png")}
            />
            <View style={styles.frameWrapper}>
              <View style={styles.frameContainer}>
                <View>
                  <Text style={[styles.deDjawatan, styles.resultTextTypo]}>
                    De Djawatan
                  </Text>
                  <Text style={[styles.wisataAlam, styles.wisataAlamTypo]}>
                    Wisata Alam
                  </Text>
                </View>
                <Text
                  style={[
                    styles.jlPurwosariBenculukKec,
                    styles.mt8,
                    styles.wisataAlamTypo,
                  ]}
                >
                  Jl. Purwosari, Benculuk, Kec. Cluring, Kabupaten Banyuwangi,
                  Jawa Timur
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameChild, styles.mt16, styles.childBorder]} />
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.maskGroupGroup, styles.maskGroupFlexBox]}>
            <Image
              style={styles.maskGroupIcon1}
              resizeMode="cover"
              source={require("../assets/mask-group2.png")}
            />
            <View style={styles.frameWrapper}>
              <View style={styles.frameParent1}>
                <View>
                  <Text style={[styles.deDjawatan, styles.resultTextTypo]}>
                    Teluk Ijo
                  </Text>
                  <Text style={[styles.wisataAlam, styles.wisataAlamTypo]}>
                    Pantai
                  </Text>
                </View>
                <Text
                  style={[
                    styles.jlPurwosariBenculukKec,
                    styles.mt8,
                    styles.wisataAlamTypo,
                  ]}
                >
                  Jl. Dusun Krajan, Sarongan, Kec. Pesanggaran, Kabupaten
                  Banyuwangi, Jawa Timur
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameChild, styles.mt16, styles.childBorder]} />
        </View>
      </View>
      <View style={[styles.statusbar, styles.statusbarPosition]}>
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
            styles.gPosition,
            styles.interfaceIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/interface-essentialwifi1.png")}
        />
        <Text style={[styles.text, styles.amTypo]}>100%</Text>
        <Text style={[styles.g, styles.gPosition]}>4G</Text>
        <Text style={[styles.am, styles.amTypo]}>15:00 AM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  mt8: {
    marginTop: GlobalStyles.Margin.margin_md,
  },
  mt16: {
    marginTop: GlobalStyles.Margin.margin_xl,
  },
  childBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
    borderStyle: "solid",
  },
  maskGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  statusbarPosition: {
    top: 0,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  resultTextTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
  },
  wisataAlamTypo: {
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    textAlign: "left",
  },
  interfaceIconLayout: {
    height: 20,
    top: 2,
    width: "5.56%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  gPosition: {
    display: "none",
    position: "absolute",
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
    width: 361,
    left: 0,
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
    borderStyle: "solid",
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
  resultText: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    width: 240,
    color: GlobalStyles.Color.gray600,
    fontWeight: "500",
  },
  arrowsChevronarrowLeftParent: {
    backgroundColor: GlobalStyles.Color.tan,
    paddingHorizontal: GlobalStyles.Padding.padding_2xl,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    height: 56,
  },
  appbar: {
    top: 24,
    height: 56,
    width: 360,
    left: 0,
    position: "absolute",
  },
  maskGroupIcon: {
    height: 61,
    width: 50,
  },
  deDjawatan: {
    fontSize: GlobalStyles.FontSize.subtitleS1Regular_size,
    color: GlobalStyles.Color.gray800,
    width: 210,
  },
  wisataAlam: {
    color: GlobalStyles.Color.gray400,
  },
  jlPurwosariBenculukKec: {
    width: 234,
    color: GlobalStyles.Color.gray600,
  },
  frameContainer: {
    width: 262,
  },
  frameWrapper: {
    width: 278,
    height: 60,
    paddingLeft: GlobalStyles.Padding.padding_2xl,
    justifyContent: "center",
  },
  maskGroupParent: {
    width: 326,
  },
  frameChild: {
    width: 327,
  },
  frameGroup: {
    paddingTop: GlobalStyles.Padding.padding_2xl,
    width: 326,
  },
  maskGroupIcon1: {
    height: 62,
    width: 50,
  },
  frameParent1: {
    width: 250,
  },
  maskGroupGroup: {
    width: 343,
  },
  frameParent: {
    top: 80,
    left: 17,
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
    position: "absolute",
  },
  interfaceEssentialwiFiIcon1: {
    right: "29.17%",
    left: "65.28%",
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
  },
  am: {
    left: 17,
    fontWeight: "500",
  },
  statusbar: {
    backgroundColor: GlobalStyles.Color.teal_100,
    height: 24,
  },
  wisataSearchFavorite: {
    backgroundColor: GlobalStyles.Color.beige,
    flex: 1,
    height: 728,
    overflow: "hidden",
    width: "100%",
  },
});

export default WisataSearchFavorite;
