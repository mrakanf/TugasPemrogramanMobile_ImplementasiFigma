import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const WisataMapList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wisataMapList}>
      <Image
        style={[styles.wisataMapListChild, styles.appbarPosition]}
        resizeMode="cover"
        source={require("../assets/frame-431.png")}
      />
      <View style={[styles.appbar, styles.appbarPosition]}>
        <View style={styles.appbarChild} />
        <View style={styles.arrowsChevronarrowLeftParent}>
          <Pressable
            style={styles.arrowsChevronarrowLeft}
            onPress={() => navigation.navigate("WisataThumbnailList")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowschevronarrowleft5.png")}
            />
          </Pressable>
          <Text style={[styles.petaDestinasi, styles.ml16]}>
            Peta destinasi
          </Text>
        </View>
      </View>
      <View style={styles.labelNewParent}>
        <View style={[styles.labelNew, styles.labelSpaceBlock]}>
          <Text style={[styles.label, styles.labelTypo]}>Semua</Text>
        </View>
        <View style={[styles.labelNew1, styles.ml8, styles.labelSpaceBlock]}>
          <Text style={[styles.label1, styles.labelTypo]}>Wisata Alam</Text>
        </View>
        <View style={[styles.labelNew1, styles.ml8, styles.labelSpaceBlock]}>
          <Text style={[styles.label1, styles.labelTypo]}>Wisata Air</Text>
        </View>
        <View style={[styles.labelNew1, styles.ml8, styles.labelSpaceBlock]}>
          <Text style={[styles.label1, styles.labelTypo]}>Wisata Kuliner</Text>
        </View>
      </View>
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
            styles.gPosition,
            styles.interfaceIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/interface-essentialwifi1.png")}
        />
        <Text style={[styles.text, styles.amTypo]}>100%</Text>
        <Text style={[styles.g, styles.gPosition, styles.labelTypo]}>4G</Text>
        <Text style={[styles.am, styles.amTypo]}>15:00 AM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  ml8: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  appbarPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  labelSpaceBlock: {
    paddingVertical: GlobalStyles.Padding.padding_3xs,
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    borderRadius: GlobalStyles.Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo: {
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
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
  wisataMapListChild: {
    top: 80,
    height: 648,
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
  petaDestinasi: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    width: 240,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    color: GlobalStyles.Color.gray600,
    fontWeight: "500",
  },
  arrowsChevronarrowLeftParent: {
    paddingHorizontal: GlobalStyles.Padding.padding_2xl,
    paddingVertical: GlobalStyles.Padding.padding_xl,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    backgroundColor: GlobalStyles.Color.tan,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  appbar: {
    top: 24,
    height: 56,
  },
  label: {
    color: GlobalStyles.Color.colBlitimBluePrimary,
    fontWeight: "500",
  },
  labelNew: {
    backgroundColor: GlobalStyles.Color.blue050,
  },
  label1: {
    color: GlobalStyles.Color.gray800,
  },
  labelNew1: {
    backgroundColor: GlobalStyles.Color.white,
  },
  labelNewParent: {
    top: 92,
    left: 18,
    flexDirection: "row",
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
    height: 20,
    top: 2,
    width: "5.56%",
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
    color: GlobalStyles.Color.gray600,
    display: "none",
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
  },
  am: {
    left: 17,
    fontWeight: "500",
  },
  statusbar: {
    backgroundColor: GlobalStyles.Color.teal_100,
    height: 24,
    top: 0,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  wisataMapList: {
    backgroundColor: GlobalStyles.Color.beige,
    flex: 1,
    height: 728,
    overflow: "hidden",
    width: "100%",
  },
});

export default WisataMapList;
