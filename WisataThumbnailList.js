import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const WisataThumbnailList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wisataThumbnailList}>
      <View
        style={[styles.lineParent, styles.parentPosition1, styles.parentLayout]}
      >
        <View style={styles.frameChild} />
        <Image
          style={[styles.frameItem, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/group-21.png")}
        />
        <View
          style={[
            styles.interfaceEssentialmagnifierParent,
            styles.parentFlexBox,
            styles.parentPosition,
          ]}
        >
          <Image
            style={styles.interfaceEssentialmagnifier}
            resizeMode="cover"
            source={require("../assets/interface-essentialmagnifier1.png")}
          />
          <Text style={[styles.cariWisata, styles.ml10, styles.wisataTypo1]}>
            Cari wisata
          </Text>
        </View>
      </View>
      <View style={styles.destinationList2colParent}>
        <Pressable
          style={[
            styles.destinationList2col,
            styles.destinationPosition3,
            styles.destinationShadowBox1,
            styles.destinationShadowBox2,
          ]}
          onPress={() => navigation.navigate("WisataDetailDestination")}
        >
          <Image
            style={[styles.kawahIjen1, styles.destinationPosition3]}
            resizeMode="cover"
            source={require("../assets/kawah-ijen-1.png")}
          />
          <LinearGradient
            style={[
              styles.destinationList2colChild,
              styles.destinationPosition2,
            ]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
          />
          <View style={[styles.kawahIjenWrapper, styles.parentFlexBox]}>
            <Text style={styles.kawahIjen}>Kawah Ijen</Text>
          </View>
          <Text style={[styles.wisata, styles.wisataTypo]}>Wisata</Text>
        </Pressable>
        <View
          style={[
            styles.destinationList2col1,
            styles.destinationPosition3,
            styles.destinationShadowBox1,
            styles.destinationShadowBox2,
          ]}
        >
          <Image
            style={[styles.kawahIjen1, styles.destinationPosition3]}
            resizeMode="cover"
            source={require("../assets/hargatiketmasukpantaipulaumerahterbarudibanyuwangijawatimur2019-1.png")}
          />
          <LinearGradient
            style={[
              styles.destinationList2colChild,
              styles.destinationPosition2,
            ]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
          />
          <View style={[styles.kawahIjenWrapper, styles.parentFlexBox]}>
            <Text style={styles.kawahIjen}>Pulau Merah</Text>
          </View>
          <Text style={[styles.wisata, styles.wisataTypo]}>Wisata</Text>
        </View>
        <View
          style={[styles.destinationListPortrait, styles.destinationPosition1]}
        >
          <View
            style={[
              styles.destinationList2col2,
              styles.iconLayout,
              styles.destinationPosition2,
              styles.destinationShadowBox1,
              styles.destinationShadowBox2,
            ]}
          >
            <Image
              style={[styles.kawahIjen1, styles.destinationPosition3]}
              resizeMode="cover"
              source={require("../assets/bangsring-underwater-1.png")}
            />
            <LinearGradient
              style={[
                styles.destinationList2colChild,
                styles.destinationPosition2,
              ]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
            />
            <View style={[styles.kawahIjenWrapper, styles.parentFlexBox]}>
              <Text style={styles.kawahIjen}>Bangsring Underwater</Text>
            </View>
            <Text style={[styles.wisata2, styles.wisataTypo]}>Wisata</Text>
          </View>
        </View>
        <View
          style={[
            styles.destinationList2col3,
            styles.destinationPosition1,
            styles.destinationShadowBox1,
            styles.destinationShadowBox2,
          ]}
        >
          <Image
            style={[styles.pantaiTelukHijau1Icon, styles.destinationPosition3]}
            resizeMode="cover"
            source={require("../assets/pantaitelukhijau-1.png")}
          />
          <LinearGradient
            style={[
              styles.destinationList2colChild,
              styles.destinationPosition2,
            ]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
          />
          <View style={[styles.kawahIjenWrapper, styles.parentFlexBox]}>
            <Text style={styles.kawahIjen}>Teluk Hijau</Text>
          </View>
          <Text style={[styles.wisata, styles.wisataTypo]}>Wisata</Text>
        </View>
        <View
          style={[
            styles.destinationList2col4,
            styles.destinationPosition,
            styles.destinationShadowBox1,
            styles.destinationShadowBox2,
          ]}
        >
          <Image
            style={[styles.kawahIjen1, styles.destinationPosition3]}
            resizeMode="cover"
            source={require("../assets/djawatan.png")}
          />
          <LinearGradient
            style={[
              styles.destinationList2colChild,
              styles.destinationPosition2,
            ]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
          />
          <View style={[styles.kawahIjenWrapper, styles.parentFlexBox]}>
            <Text style={styles.kawahIjen}>De Djawatan</Text>
          </View>
          <Text style={[styles.wisata4, styles.wisataTypo]}>Wisata</Text>
        </View>
        <View
          style={[styles.destinationListPortrait1, styles.destinationPosition]}
        >
          <View
            style={[
              styles.destinationList2col2,
              styles.iconLayout,
              styles.destinationPosition2,
              styles.destinationShadowBox1,
              styles.destinationShadowBox2,
            ]}
          >
            <Image
              style={[styles.kawahIjen1, styles.destinationPosition3]}
              resizeMode="cover"
              source={require("../assets/airterjunlider.png")}
            />
            <LinearGradient
              style={[
                styles.destinationList2colChild,
                styles.destinationPosition2,
              ]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
            />
            <View style={[styles.kawahIjenWrapper, styles.parentFlexBox]}>
              <Text style={styles.kawahIjen}>Air Terjun Lider</Text>
            </View>
            <Text style={[styles.wisata4, styles.wisataTypo]}>Wisata</Text>
          </View>
        </View>
        <View
          style={[styles.destinationList2col6, styles.destinationShadowBox]}
        >
          <Image
            style={[styles.kawahIjen1, styles.destinationPosition3]}
            resizeMode="cover"
            source={require("../assets/alas-purwo.png")}
          />
          <LinearGradient
            style={[
              styles.destinationList2colChild,
              styles.destinationPosition2,
            ]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
          />
          <View style={[styles.kawahIjenWrapper, styles.parentFlexBox]}>
            <Text style={styles.kawahIjen}>TN Alas Purwo</Text>
          </View>
          <Text style={[styles.wisata4, styles.wisataTypo]}>Wisata</Text>
        </View>
        <View
          style={[styles.destinationList2col7, styles.destinationShadowBox]}
        >
          <View style={[styles.kawahIjen1, styles.destinationPosition3]}>
            <Image
              style={styles.lumutW6441Icon}
              resizeMode="cover"
              source={require("../assets/lumut-w644-1.png")}
            />
            <Image
              style={styles.patungGandrung1}
              resizeMode="cover"
              source={require("../assets/patung-gandrung-1.png")}
            />
            <LinearGradient
              style={styles.maskGroupChild}
              locations={[0, 1]}
              colors={["#fff", "rgba(255, 255, 255, 0)"]}
            />
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
              <LinearGradient
                style={[styles.groupChild, styles.groupChildLayout]}
                locations={[0, 1]}
                colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.85)"]}
                useAngle={true}
                angle={180}
              />
              <View style={[styles.watuDodolParent, styles.watuLayout]}>
                <Text
                  style={[
                    styles.watuDodol,
                    styles.watuLayout,
                    styles.labelTypo,
                  ]}
                >
                  WATU DODOL
                </Text>
                <Text style={[styles.wisata7, styles.wisataTypo1]}>Wisata</Text>
              </View>
            </View>
            <Image
              style={[styles.kawahIjen1, styles.destinationPosition3]}
              resizeMode="cover"
              source={require("../assets/patung-gandrung-2.png")}
            />
          </View>
          <LinearGradient
            style={[
              styles.destinationList2colChild,
              styles.destinationPosition2,
            ]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
          />
          <View style={[styles.kawahIjenWrapper, styles.parentFlexBox]}>
            <Text style={styles.kawahIjen}>Watu Dodol</Text>
          </View>
          <Text style={[styles.wisata4, styles.wisataTypo]}>Wisata</Text>
        </View>
      </View>
      <View
        style={[
          styles.labelNewParent,
          styles.parentFlexBox,
          styles.parentPosition,
        ]}
      >
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
      <View
        style={[
          styles.frameParent,
          styles.parentPosition1,
          styles.parentLayout,
        ]}
      >
        <View
          style={[styles.arrowsChevronarrowLeftParent, styles.parentFlexBox]}
        >
          <Image
            style={[styles.arrowsChevronarrowLeftIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/arrowschevronarrowleft7.png")}
          />
          <Text style={[styles.destinasi, styles.ml16, styles.gTypo]}>
            Destinasi
          </Text>
          <Image
            style={[
              styles.interfaceEssentialmagnifier1,
              styles.ml16,
              styles.iconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/interface-essentialmagnifier4.png")}
          />
          <Pressable
            style={[
              styles.interfaceEssentialmapbook,
              styles.ml16,
              styles.iconLayout1,
            ]}
            onPress={() => navigation.navigate("WisataMapList")}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/interface-essentialmapbook2.png")}
            />
          </Pressable>
        </View>
        <View style={styles.frameChild} />
      </View>
      <View style={[styles.statusbar, styles.parentPosition1]}>
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
        <Text style={[styles.text, styles.amTypo]}>100%</Text>
        <Text style={[styles.g, styles.gTypo]}>4G</Text>
        <Text style={[styles.am, styles.amTypo]}>15:00 AM</Text>
      </View>
      <View style={[styles.navbarBottom, styles.destinationShadowBox1]}>
        <Pressable
          style={styles.navIcon}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Image
            style={[styles.iconHome, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icon-home.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.beranda, styles.berandaTypo]}>Beranda</Text>
        </Pressable>
        <View style={styles.navIcon}>
          <Image
            style={[styles.iconHome, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icon-explore2.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Text style={[styles.beranda1, styles.berandaTypo]}>Destinasi</Text>
        </View>
        <Pressable
          style={styles.navIcon}
          onPress={() => navigation.navigate("InformasiBeritaList")}
        >
          <Image
            style={[styles.iconHome, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icon-news2.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.beranda, styles.berandaTypo]}>Informasi</Text>
        </Pressable>
        <Pressable
          style={styles.navIcon}
          onPress={() => navigation.navigate("MoreList")}
        >
          <Image
            style={[styles.iconHome, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icon-more2.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.beranda, styles.berandaTypo]}>Lainnya</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: GlobalStyles.Margin.margin_lg,
  },
  ml8: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  ml16: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  parentPosition1: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  parentLayout: {
    top: 24,
    height: 56,
    width: 360,
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  parentPosition: {
    left: 18,
    flexDirection: "row",
  },
  wisataTypo1: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
  },
  destinationPosition3: {
    height: 175,
    top: 0,
    position: "absolute",
  },
  destinationShadowBox1: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  destinationShadowBox2: {
    elevation: 1,
    shadowRadius: 1,
    shadowColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: GlobalStyles.Border.br_sm,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  destinationPosition2: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  wisataTypo: {
    left: "5.81%",
    width: "39.6%",
    height: "8.33%",
    color: GlobalStyles.Color.gray050,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    position: "absolute",
  },
  destinationPosition1: {
    top: 191,
    height: 175,
    width: 155,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  destinationPosition: {
    top: 382,
    height: 175,
    width: 155,
    position: "absolute",
  },
  destinationShadowBox: {
    top: 573,
    height: 175,
    width: 155,
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: GlobalStyles.Border.br_sm,
    position: "absolute",
  },
  groupChildLayout: {
    height: 63,
    width: 155,
    left: 0,
    position: "absolute",
  },
  watuLayout: {
    width: 116,
    position: "absolute",
  },
  labelTypo: {
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    textAlign: "left",
  },
  labelSpaceBlock: {
    paddingVertical: GlobalStyles.Padding.padding_3xs,
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    borderRadius: GlobalStyles.Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  gTypo: {
    color: GlobalStyles.Color.gray600,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    textAlign: "left",
  },
  interfaceIconLayout: {
    height: 20,
    top: 2,
    width: "5.56%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  amTypo: {
    top: 3,
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    position: "absolute",
  },
  berandaTypo: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_sm,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
  },
  frameChild: {
    top: 56,
    borderColor: "#e0e0e0",
    borderTopWidth: 1,
    width: 361,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  frameItem: {
    top: 16,
    left: 312,
    height: 24,
    position: "absolute",
  },
  interfaceEssentialmagnifier: {
    width: 14,
    height: 14,
  },
  cariWisata: {
    color: GlobalStyles.Color.gray400,
  },
  interfaceEssentialmagnifierParent: {
    top: 9,
    borderRadius: GlobalStyles.Border.br_lg,
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 1,
    width: 284,
    height: 37,
    paddingHorizontal: GlobalStyles.Padding.padding_lg,
    paddingVertical: GlobalStyles.Padding.padding_xs,
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
    borderStyle: "solid",
  },
  lineParent: {
    display: "none",
    height: 56,
    overflow: "hidden",
  },
  kawahIjen1: {
    width: 155,
    left: 0,
  },
  destinationList2colChild: {
    height: "45.71%",
    top: "54.29%",
    backgroundColor: "transparent",
    width: "100%",
  },
  kawahIjen: {
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
    lineHeight: 18,
    color: GlobalStyles.Color.gray050,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
    textAlign: "left",
    flex: 1,
  },
  kawahIjenWrapper: {
    top: 117,
    height: 58,
    paddingHorizontal: GlobalStyles.Padding.padding_sm,
    paddingVertical: GlobalStyles.Padding.padding_md,
    alignItems: "flex-end",
    width: 155,
    left: 0,
  },
  wisata: {
    top: "76.57%",
  },
  destinationList2col: {
    width: 155,
    left: 0,
  },
  destinationList2col1: {
    left: 171,
    width: 155,
  },
  wisata2: {
    top: "65.71%",
  },
  destinationList2col2: {
    top: "0%",
  },
  destinationListPortrait: {
    left: 0,
  },
  pantaiTelukHijau1Icon: {
    width: 389,
    left: 0,
  },
  destinationList2col3: {
    left: 171,
  },
  wisata4: {
    top: "76%",
  },
  destinationList2col4: {
    left: 0,
  },
  destinationListPortrait1: {
    left: 171,
  },
  destinationList2col6: {
    left: 0,
  },
  lumutW6441Icon: {
    top: -34,
    height: 273,
    width: 155,
    display: "none",
    left: 0,
    position: "absolute",
  },
  patungGandrung1: {
    width: 184,
    height: 243,
    top: 0,
    left: 0,
    position: "absolute",
  },
  maskGroupChild: {
    top: 30,
    left: 155,
    height: 30,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    backgroundColor: "transparent",
    width: 155,
    display: "none",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "transparent",
    top: 0,
  },
  watuDodol: {
    top: 5,
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 31,
    color: GlobalStyles.Color.white,
    height: 16,
    fontWeight: "500",
    left: 0,
  },
  wisata7: {
    color: GlobalStyles.Color.gray300,
    width: 91,
    height: 7,
    fontWeight: "500",
    top: 0,
    left: 0,
    position: "absolute",
  },
  watuDodolParent: {
    top: 35,
    left: 7,
    height: 21,
  },
  rectangleParent: {
    top: 112,
  },
  destinationList2col7: {
    left: 171,
  },
  destinationList2colParent: {
    top: 130,
    width: 326,
    height: 748,
    left: 17,
    position: "absolute",
  },
  label: {
    color: GlobalStyles.Color.colBlitimBluePrimary,
    fontWeight: "500",
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
  },
  labelNew: {
    backgroundColor: GlobalStyles.Color.blue050,
  },
  label1: {
    color: GlobalStyles.Color.gray800,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
  },
  labelNew1: {
    backgroundColor: GlobalStyles.Color.white,
  },
  labelNewParent: {
    top: 92,
  },
  arrowsChevronarrowLeftIcon: {
    borderRadius: 30,
    height: 24,
    display: "none",
  },
  destinasi: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    width: 248,
    fontWeight: "500",
  },
  interfaceEssentialmagnifier1: {
    borderRadius: GlobalStyles.Border.br_md,
    height: 24,
  },
  interfaceEssentialmapbook: {
    height: 24,
  },
  arrowsChevronarrowLeftParent: {
    paddingHorizontal: GlobalStyles.Padding.padding_2xl,
    paddingVertical: GlobalStyles.Padding.padding_xl,
    backgroundColor: GlobalStyles.Color.tan,
    top: 0,
    alignItems: "center",
    left: 0,
    overflow: "hidden",
  },
  frameParent: {
    height: 56,
  },
  devicesbatteryFullIcon: {
    width: "6.67%",
    right: "4.72%",
    left: "88.61%",
    maxWidth: "100%",
    top: 0,
    height: 24,
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
    color: GlobalStyles.Color.black,
  },
  g: {
    top: 6,
    left: 216,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    display: "none",
    position: "absolute",
  },
  am: {
    color: GlobalStyles.Color.black,
    fontWeight: "500",
    left: 17,
  },
  statusbar: {
    backgroundColor: GlobalStyles.Color.teal_100,
    top: 0,
    height: 24,
    overflow: "hidden",
  },
  iconHome: {
    height: 24,
  },
  navIconChild: {
    width: 4,
    height: 4,
    display: "none",
  },
  beranda: {
    color: GlobalStyles.Color.black,
  },
  navIcon: {
    width: 90,
    paddingBottom: GlobalStyles.Padding.padding_2xs,
    justifyContent: "flex-end",
    backgroundColor: GlobalStyles.Color.tan,
    alignItems: "center",
    height: 56,
  },
  beranda1: {
    color: GlobalStyles.Color.colBlitimBluePrimary,
  },
  navbarBottom: {
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: GlobalStyles.Color.tan,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    flexDirection: "row",
    height: 56,
    width: 360,
    left: 0,
    position: "absolute",
  },
  wisataThumbnailList: {
    backgroundColor: GlobalStyles.Color.beige,
    height: 970,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default WisataThumbnailList;
