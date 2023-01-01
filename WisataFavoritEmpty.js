import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const WisataFavoritEmpty = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.wisataFavoritEmpty, styles.wisataFavoritEmptyFlexBox]}>
      <View style={[styles.appbar, styles.appbarLayout]}>
        <View style={[styles.appbarChild, styles.appbarChildBg]} />
        <View
          style={[
            styles.arrowsChevronarrowLeftParent,
            styles.arrowsChevronarrowLeftParentFlexBox,
            styles.appbarChildBg,
            styles.appbarLayout,
          ]}
        >
          <Pressable
            style={styles.arrowsChevronarrowLeft}
            onPress={() => navigation.navigate("MoreList")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowschevronarrowleft2.png")}
            />
          </Pressable>
          <Text style={[styles.favoritDestinasi, styles.ml16]}>
            Favorit destinasi
          </Text>
        </View>
      </View>
      <Text style={[styles.tidakAdaLokasi, styles.gTypo]}>
        Tidak ada lokasi
      </Text>
      <View
        style={[
          styles.beachIslandSvgrepoCom1Wrapper,
          styles.arrowsChevronarrowLeftParentFlexBox,
        ]}
      >
        <Image
          style={[
            styles.beachIslandSvgrepoCom1Icon,
            styles.iconLayout,
            styles.wisataFavoritEmptyFlexBox,
          ]}
          resizeMode="cover"
          source={require("../assets/beachislandsvgrepocom-1.png")}
        />
      </View>
      <View style={styles.statusbar}>
        <Image
          style={[styles.devicesbatteryFullIcon, styles.iconLayout]}
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
        <Text style={[styles.g, styles.gPosition, styles.gTypo]}>4G</Text>
        <Text style={[styles.am, styles.amTypo]}>15:00 AM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  wisataFavoritEmptyFlexBox: {
    flex: 1,
    width: "100%",
  },
  appbarLayout: {
    height: 56,
    width: 360,
  },
  appbarChildBg: {
    backgroundColor: GlobalStyles.Color.tan,
    left: 0,
  },
  arrowsChevronarrowLeftParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  gTypo: {
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    color: GlobalStyles.Color.gray600,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
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
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderTopWidth: 1,
    width: 361,
    height: 1,
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
  favoritDestinasi: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    width: 240,
    textAlign: "left",
    color: GlobalStyles.Color.gray600,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
  },
  arrowsChevronarrowLeftParent: {
    paddingHorizontal: GlobalStyles.Padding.padding_2xl,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    top: 0,
    overflow: "hidden",
  },
  appbar: {
    top: 24,
    left: 0,
    height: 56,
    position: "absolute",
  },
  tidakAdaLokasi: {
    top: 331,
    left: 131,
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
  },
  beachIslandSvgrepoCom1Icon: {
    alignSelf: "stretch",
    maxHeight: "100%",
    width: "100%",
  },
  beachIslandSvgrepoCom1Wrapper: {
    top: 283,
    left: 156,
    width: 48,
    height: 48,
    padding: 2,
    justifyContent: "center",
  },
  devicesbatteryFullIcon: {
    width: "6.67%",
    right: "4.72%",
    left: "88.61%",
    height: 24,
    top: 0,
    position: "absolute",
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
    textAlign: "left",
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
  wisataFavoritEmpty: {
    backgroundColor: GlobalStyles.Color.beige,
    height: 728,
    overflow: "hidden",
    width: "100%",
  },
});

export default WisataFavoritEmpty;
