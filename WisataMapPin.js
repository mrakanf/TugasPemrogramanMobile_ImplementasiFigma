import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const WisataMapPin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wisataMapPin}>
      <Image
        style={[styles.wisataMapPinChild, styles.appbarPosition]}
        resizeMode="cover"
        source={require("../assets/frame-43.png")}
      />
      <View style={[styles.appbar, styles.appbarPosition]}>
        <View style={styles.appbarChild} />
        <View style={styles.arrowsChevronarrowLeftParent}>
          <Pressable
            style={styles.arrowsChevronarrowLeft}
            onPress={() => navigation.navigate("WisataMapList")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowschevronarrowleft5.png")}
            />
          </Pressable>
          <Text style={[styles.petaDestinasi, styles.ml16, styles.gTypo]}>
            Peta destinasi
          </Text>
        </View>
      </View>
      <View style={styles.labelNewParent}>
        <View style={[styles.labelNew, styles.labelSpaceBlock]}>
          <Text style={[styles.label, styles.labelTypo]}>Semua</Text>
        </View>
        <View style={[styles.labelNew1, styles.ml8, styles.labelSpaceBlock]}>
          <Text style={[styles.label1, styles.label1Color]}>Wisata Alam</Text>
        </View>
        <View style={[styles.labelNew1, styles.ml8, styles.labelSpaceBlock]}>
          <Text style={[styles.label1, styles.label1Color]}>Wisata Air</Text>
        </View>
        <View style={[styles.labelNew1, styles.ml8, styles.labelSpaceBlock]}>
          <Text style={[styles.label1, styles.label1Color]}>
            Wisata Kuliner
          </Text>
        </View>
      </View>
      <View style={[styles.statusbar, styles.appbarPosition]}>
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
        <Text style={[styles.g, styles.gPosition, styles.gTypo]}>4G</Text>
        <Text style={[styles.am, styles.amTypo]}>15:00 AM</Text>
      </View>
      <View
        style={[
          styles.rectangleParent,
          styles.groupLayout,
          styles.groupChildLayout,
        ]}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupLayout,
            styles.groupChildLayout,
            styles.groupPosition,
          ]}
        />
        <View style={styles.frameParent}>
          <View style={styles.watuDodolParent}>
            <Text
              style={[
                styles.watuDodol,
                styles.watuDodolLayout,
                styles.label1Color,
              ]}
            >
              Watu Dodol
            </Text>
            <Text
              style={[
                styles.jlRayaBanyuwangiSitubondo,
                styles.mt2,
                styles.watuDodolLayout,
              ]}
            >
              Jl. Raya Banyuwangi Situbondo,...
            </Text>
          </View>
          <View style={[styles.buttonIconXsmall, styles.mt16]}>
            <Image
              style={styles.interfaceEssentialmapbookIcon}
              resizeMode="cover"
              source={require("../assets/interface-essentialmapbook1.png")}
            />
            <Text style={[styles.buttonXsmall, styles.ml4, styles.labelTypo]}>
              Arahkan ke lokasi
            </Text>
          </View>
        </View>
        <Image
          style={[
            styles.maskGroupIcon,
            styles.groupLayout,
            styles.groupPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/mask-group5.png")}
        />
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
  mt2: {
    marginTop: GlobalStyles.Margin.margin_xs,
  },
  ml4: {
    marginLeft: GlobalStyles.Margin.margin_sm,
  },
  mt16: {
    marginTop: GlobalStyles.Margin.margin_xl,
  },
  appbarPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  gTypo: {
    color: GlobalStyles.Color.gray600,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
  },
  labelSpaceBlock: {
    paddingVertical: GlobalStyles.Padding.padding_3xs,
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    borderRadius: GlobalStyles.Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo: {
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    fontWeight: "500",
  },
  label1Color: {
    color: GlobalStyles.Color.gray800,
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
  groupLayout: {
    height: 120,
    position: "absolute",
  },
  groupChildLayout: {
    width: 326,
    height: 120,
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  watuDodolLayout: {
    width: 198,
    textAlign: "left",
  },
  wisataMapPinChild: {
    top: 80,
    height: 648,
  },
  appbarChild: {
    top: 56,
    borderColor: "#e0e0e0",
    borderTopWidth: 1,
    width: 361,
    height: 1,
    borderStyle: "solid",
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
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    textAlign: "left",
  },
  labelNew: {
    backgroundColor: GlobalStyles.Color.blue050,
  },
  label1: {
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    textAlign: "left",
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
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: GlobalStyles.Border.br_sm,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    backgroundColor: GlobalStyles.Color.white,
    top: 0,
  },
  watuDodol: {
    fontSize: GlobalStyles.FontSize.subtitleS1Regular_size,
  },
  jlRayaBanyuwangiSitubondo: {
    fontSize: GlobalStyles.FontSize.size_xs,
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    color: GlobalStyles.Color.gray400,
  },
  watuDodolParent: {
    alignSelf: "stretch",
  },
  interfaceEssentialmapbookIcon: {
    width: 18,
    height: 18,
  },
  buttonXsmall: {
    color: GlobalStyles.Color.white,
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
  },
  buttonIconXsmall: {
    backgroundColor: GlobalStyles.Color.colBlitimBluePrimary,
    borderColor: "#0085cc",
    borderWidth: 1,
    width: 148,
    height: 29,
    paddingHorizontal: GlobalStyles.Padding.padding_sm,
    paddingVertical: GlobalStyles.Padding.padding_2xs,
    justifyContent: "center",
    borderRadius: GlobalStyles.Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
  },
  frameParent: {
    left: 96,
    width: 230,
    padding: GlobalStyles.Padding.padding_2xl,
    top: 0,
    position: "absolute",
  },
  maskGroupIcon: {
    width: 96,
    top: 0,
  },
  rectangleParent: {
    top: 591,
    left: 17,
  },
  wisataMapPin: {
    backgroundColor: GlobalStyles.Color.beige,
    flex: 1,
    height: 728,
    overflow: "hidden",
    width: "100%",
  },
});

export default WisataMapPin;
