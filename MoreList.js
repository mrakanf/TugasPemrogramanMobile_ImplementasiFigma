import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const MoreList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.moreList}>
      <View
        style={[
          styles.appVersion50HakCipta20Wrapper,
          styles.wrapperFlexBox,
          styles.navigationListParentPosition,
        ]}
      >
        <Text style={styles.appVersion50HakCipta20}>
          <Text style={styles.appVersion50}>
            <Text style={styles.appVersion501}>
              <Text style={styles.appVersion502}>App Version 5.0</Text>
            </Text>
          </Text>
          <Text style={styles.appVersion50}>
            <Text style={styles.appVersion501}>
              <Text style={styles.blankLine2}> </Text>
            </Text>
          </Text>
          <Text style={styles.appVersion50}>
            <Text style={styles.appVersion501}>
              <Text style={styles.hakCipta}>{`Hak Cipta © 2023 `}</Text>
            </Text>
          </Text>
          <Text style={styles.appVersion50}>
            <Text style={styles.dinasKebudayaanDanPariwista1}>
              <Text style={styles.appVersion502}>
                Dinas Kebudayaan Dan Pariwista Kabupaten Banyuwangi
              </Text>
            </Text>
          </Text>
          <Text style={styles.appVersion50}>
            <Text style={styles.dinasKebudayaanDanPariwista1}>
              <Text style={styles.blankLine2}> </Text>
            </Text>
          </Text>
          <Text style={styles.wwwdisbudparbanyuwangikabgo}>
            <Text style={styles.wwwdisbudparbanyuwangikabgo1}>
              www.disbudpar.banyuwangikab.go.id
            </Text>
          </Text>
        </Text>
      </View>
      <Image
        style={styles.revisiLogoInspiringBig2}
        resizeMode="cover"
        source={require("../assets/revisi-logo-inspiring-big-2.png")}
      />
      <View
        style={[
          styles.navigationListParent,
          styles.navigationListParentPosition,
        ]}
      >
        <Pressable
          style={styles.navigationList}
          onPress={() => navigation.navigate("MoreTentang")}
        >
          <Image
            style={styles.navigationListChild}
            resizeMode="cover"
            source={require("../assets/line-3.png")}
          />
          <View
            style={[
              styles.navigationWrapper,
              styles.mt16,
              styles.wrapperFlexBox,
            ]}
          >
            <Text style={[styles.navigation, styles.gTypo]}>Tentang</Text>
          </View>
          <Image
            style={[styles.navigationListChild, styles.mt16]}
            resizeMode="cover"
            source={require("../assets/line-3.png")}
          />
        </Pressable>
        <Pressable
          style={styles.navigationList}
          onPress={() => navigation.navigate("WisataFavoritEmpty")}
        >
          <Image
            style={styles.navigationListChild}
            resizeMode="cover"
            source={require("../assets/line-3.png")}
          />
          <View
            style={[
              styles.navigationWrapper,
              styles.mt16,
              styles.wrapperFlexBox,
            ]}
          >
            <Text style={[styles.navigation, styles.gTypo]}>
              Favorit destinasi
            </Text>
          </View>
          <Image
            style={[styles.navigationListChild, styles.mt16]}
            resizeMode="cover"
            source={require("../assets/line-3.png")}
          />
        </Pressable>
        <View style={styles.navigationList}>
          <Image
            style={styles.navigationListChild}
            resizeMode="cover"
            source={require("../assets/line-3.png")}
          />
          <View
            style={[
              styles.navigationWrapper,
              styles.mt16,
              styles.wrapperFlexBox,
            ]}
          >
            <Text style={[styles.navigation, styles.gTypo]}>
              Kritik dan Saran
            </Text>
          </View>
          <Image
            style={[styles.navigationListChild, styles.mt16]}
            resizeMode="cover"
            source={require("../assets/line-3.png")}
          />
        </View>
        <View style={styles.navigationList}>
          <Image
            style={styles.navigationListChild}
            resizeMode="cover"
            source={require("../assets/line-3.png")}
          />
          <View
            style={[
              styles.navigationWrapper,
              styles.mt16,
              styles.wrapperFlexBox,
            ]}
          >
            <Text style={[styles.navigation, styles.gTypo]}>
              Nilai Aplikasi
            </Text>
          </View>
          <Image
            style={[styles.navigationListChild, styles.mt16]}
            resizeMode="cover"
            source={require("../assets/line-3.png")}
          />
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
            styles.interfaceIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/interface-essentialwifi1.png")}
        />
        <Text style={[styles.text, styles.amTypo]}>100%</Text>
        <Text style={[styles.g, styles.gTypo]}>4G</Text>
        <Text style={[styles.am, styles.amTypo]}>15:00 AM</Text>
      </View>
      <Image
        style={styles.img20161128Wa00041728874RIcon}
        resizeMode="cover"
        source={require("../assets/img20161128wa00041728874removebgpreview-1.png")}
      />
      <View style={[styles.navbarBottom, styles.navIconBg]}>
        <Pressable
          style={[styles.navIcon, styles.navIconBg]}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Image
            style={styles.iconHome}
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
        <Pressable
          style={[styles.navIcon, styles.navIconBg]}
          onPress={() => navigation.navigate("WisataThumbnailList")}
        >
          <Image
            style={styles.iconHome}
            resizeMode="cover"
            source={require("../assets/icon-explore.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.beranda, styles.berandaTypo]}>Destinasi</Text>
        </Pressable>
        <Pressable
          style={[styles.navIcon, styles.navIconBg]}
          onPress={() => navigation.navigate("InformasiBeritaList")}
        >
          <Image
            style={styles.iconHome}
            resizeMode="cover"
            source={require("../assets/icon-news.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.beranda, styles.berandaTypo]}>Informasi</Text>
        </Pressable>
        <View style={[styles.navIcon, styles.navIconBg]}>
          <Image
            style={styles.iconHome}
            resizeMode="cover"
            source={require("../assets/icon-more.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Text style={[styles.beranda3, styles.berandaTypo]}>Lainnya</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: GlobalStyles.Margin.margin_xl,
  },
  wrapperFlexBox: {
    paddingHorizontal: GlobalStyles.Padding.padding_2xl,
    alignItems: "center",
    flexDirection: "row",
    width: 360,
  },
  navigationListParentPosition: {
    left: 0,
    position: "absolute",
  },
  gTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
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
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    position: "absolute",
  },
  navIconBg: {
    backgroundColor: GlobalStyles.Color.tan,
    height: 56,
  },
  berandaTypo: {
    fontSize: GlobalStyles.FontSize.size_sm,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
    textAlign: "center",
  },
  appVersion502: {
    color: GlobalStyles.Color.gray600,
  },
  appVersion501: {
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
  },
  appVersion50: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLine2: {
    color: GlobalStyles.Color.gray_500,
  },
  hakCipta: {
    color: GlobalStyles.Color.gray400,
  },
  dinasKebudayaanDanPariwista1: {
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
  },
  wwwdisbudparbanyuwangikabgo1: {
    color: GlobalStyles.Color.colBlitimBluePrimary,
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
  },
  wwwdisbudparbanyuwangikabgo: {
    margin: GlobalStyles.Margin.margin_2xs,
  },
  appVersion50HakCipta20: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
  },
  appVersion50HakCipta20Wrapper: {
    top: 341,
    paddingTop: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  revisiLogoInspiringBig2: {
    top: 34,
    width: 142,
    height: 67,
    display: "none",
    left: 17,
    position: "absolute",
  },
  navigationListChild: {
    height: 1,
    width: 360,
  },
  navigation: {
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
    color: GlobalStyles.Color.gray800,
    fontWeight: "500",
  },
  navigationWrapper: {
    paddingVertical: 0,
    height: 24,
    alignItems: "center",
  },
  navigationList: {
    height: 56,
  },
  navigationListParent: {
    top: 117,
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
    display: "none",
    color: GlobalStyles.Color.gray600,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    position: "absolute",
  },
  am: {
    color: GlobalStyles.Color.black,
    left: 17,
    fontWeight: "500",
  },
  statusbar: {
    backgroundColor: GlobalStyles.Color.teal_100,
    top: 0,
    height: 24,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  img20161128Wa00041728874RIcon: {
    top: 24,
    left: 95,
    width: 170,
    height: 93,
    position: "absolute",
  },
  iconHome: {
    width: 24,
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
    alignItems: "center",
  },
  beranda3: {
    color: GlobalStyles.Color.colBlitimBluePrimary,
  },
  navbarBottom: {
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    flexDirection: "row",
    backgroundColor: GlobalStyles.Color.tan,
    width: 360,
    left: 0,
    position: "absolute",
  },
  moreList: {
    backgroundColor: GlobalStyles.Color.beige,
    flex: 1,
    width: "100%",
    height: 792,
    overflow: "hidden",
  },
});

export default MoreList;
