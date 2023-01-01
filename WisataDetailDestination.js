import * as React from "react";
import { Image, StyleSheet, Text, View, Linking } from "react-native";
import GlobalStyles from "../GlobalStyles";

const WisataDetailDestination = () => {
  return (
    <View style={styles.wisataDetailDestination}>
      <Image
        style={[styles.maskGroupIcon, styles.frameParentPosition]}
        resizeMode="cover"
        source={require("../assets/mask-group.png")}
      />
      <View
        style={[styles.revisiLogoInspiringBig3Parent, styles.parentPosition]}
      >
        <Image
          style={styles.revisiLogoInspiringBig3}
          resizeMode="cover"
          source={require("../assets/revisi-logo-inspiring-big-3.png")}
        />
        <View
          style={[
            styles.interfaceEssentialmagnifierParent,
            styles.ml16,
            styles.buttonIconXsmallBorder,
          ]}
        >
          <Image
            style={styles.interfaceEssentialmagnifier}
            resizeMode="cover"
            source={require("../assets/interface-essentialmagnifier1.png")}
          />
          <Text style={[styles.cariWisata, styles.ml10, styles.wisataTypo]}>
            Cari wisata
          </Text>
        </View>
        <Image
          style={[styles.interfaceEssentialheartIcon, styles.ml16]}
          resizeMode="cover"
          source={require("../assets/interface-essentialheart.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <Image
          style={styles.childLayout}
          resizeMode="cover"
          source={require("../assets/group-39.png")}
        />
        <Text style={[styles.pageTitle, styles.ml16]}>Page Title</Text>
        <View style={[styles.childLayout, styles.ml16]}>
          <View
            style={[
              styles.groupChild,
              styles.statusbarPosition,
              styles.childLayout,
            ]}
          />
          <View style={styles.interfaceEssentialheart}>
            <View style={styles.interfaceEssentialheartChild} />
            <Image
              style={[styles.heartIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/heart.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.childLayout, styles.ml16]}
          resizeMode="cover"
          source={require("../assets/group-41.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View>
          <Text style={[styles.kawahIjen, styles.kawahColor]}>Kawah Ijen</Text>
          <Text style={[styles.wisataAlam, styles.mt4, styles.wisataTypo]}>
            Wisata Alam
          </Text>
        </View>
        <Text
          style={[
            styles.kawahIjenAdalahSebuahDanau,
            styles.mt16,
            styles.kawahColor,
            styles.textTypo,
          ]}
        >
          {`Kawah Ijen adalah sebuah `}
          <Text>danau</Text>
          {` kawah yang bersifat asam yang berada di puncak Gunung Ijen. `}
          <Text>Danau kawah</Text> Ijen dikenal merupakan danau air asam kuat
          terbesar di dunia
        </Text>
        <Image
          style={[styles.frameInner, styles.mt16]}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
        <View style={styles.mt16}>
          <View>
            <Text style={[styles.telepon, styles.wisataTypo]}>Telepon</Text>
            <Text
              style={[
                styles.text,
                styles.mt4,
                styles.kawahColor,
                styles.textTypo,
              ]}
            >
              0812-3456-7890
            </Text>
          </View>
          <View style={styles.mt16}>
            <Text style={[styles.telepon, styles.wisataTypo]}>Instagram</Text>
            <Text
              style={[
                styles.text,
                styles.mt4,
                styles.kawahColor,
                styles.textTypo,
              ]}
            >
              @kawah_ijen
            </Text>
          </View>
        </View>
        <Image
          style={[styles.frameInner, styles.mt16]}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
        <View style={styles.mt16}>
          <Text style={[styles.telepon, styles.wisataTypo]}>Galeri</Text>
          <View style={[styles.ijenParent, styles.mt4]}>
            <Image
              style={[styles.ijenIcon, styles.ijenLayout]}
              resizeMode="cover"
              source={require("../assets/ijen.png")}
            />
            <Image
              style={[styles.blueFireIjen, styles.ml8, styles.ijenLayout]}
              resizeMode="cover"
              source={require("../assets/blue-fire-ijen.png")}
            />
            <Image
              style={[styles.ijenIcon, styles.ml8, styles.ijenLayout]}
              resizeMode="cover"
              source={require("../assets/ijen1.png")}
            />
            <Image
              style={[styles.blueFireIjen, styles.ml8, styles.ijenLayout]}
              resizeMode="cover"
              source={require("../assets/blue-fire-ijen1.png")}
            />
            <Image
              style={[styles.blueFireIjen, styles.ml8, styles.ijenLayout]}
              resizeMode="cover"
              source={require("../assets/unsplash-req6gsqsam.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.frameInner, styles.mt16]}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
        <View style={styles.mt16}>
          <Text style={[styles.telepon, styles.wisataTypo]}>Lokasi</Text>
          <Text
            style={[
              styles.banyuwangiJawaTimur,
              styles.mt4,
              styles.kawahColor,
              styles.textTypo,
            ]}
          >
            Banyuwangi, Jawa Timur
          </Text>
        </View>
      </View>
      <View style={styles.maskGroup}>
        <Image
          style={[styles.image1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={styles.maskGroupChild}
          resizeMode="cover"
          source={require("../assets/group-32.png")}
        />
        <View style={styles.buttonIconText}>
          <View
            style={[styles.buttonIconXsmall, styles.buttonIconXsmallBorder]}
          >
            <Image
              style={styles.interfaceEssentialheartIcon}
              resizeMode="cover"
              source={require("../assets/interface-essentialmapbook.png")}
            />
            <Text style={[styles.buttonIcon, styles.ml4]}>
              Arahkan ke Lokasi
            </Text>
          </View>
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
            styles.interfaceIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/interface-essentialwifi1.png")}
        />
        <Text style={[styles.text1, styles.amTypo]}>100%</Text>
        <Text style={styles.g}>4G</Text>
        <Text style={[styles.am, styles.amTypo]}>15:00 AM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: GlobalStyles.Margin.margin_lg,
  },
  ml16: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  mt4: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  mt16: {
    marginTop: GlobalStyles.Margin.margin_xl,
  },
  ml8: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  ml4: {
    marginLeft: GlobalStyles.Margin.margin_sm,
  },
  frameParentPosition: {
    left: 0,
    width: 360,
    position: "absolute",
  },
  parentPosition: {
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 24,
    position: "absolute",
    overflow: "hidden",
  },
  buttonIconXsmallBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  wisataTypo: {
    color: GlobalStyles.Color.gray400,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
  },
  statusbarPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  childLayout: {
    height: 36,
    width: 36,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kawahColor: {
    color: GlobalStyles.Color.gray800,
    textAlign: "left",
  },
  textTypo: {
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    width: 326,
    color: GlobalStyles.Color.gray800,
  },
  ijenLayout: {
    height: 60,
    borderRadius: GlobalStyles.Border.br_xs,
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
    color: GlobalStyles.Color.black,
    top: 3,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    position: "absolute",
  },
  maskGroupIcon: {
    height: 360,
    width: 360,
    top: 24,
    left: 0,
  },
  revisiLogoInspiringBig3: {
    width: 28,
    height: 32,
  },
  interfaceEssentialmagnifier: {
    width: 14,
    height: 14,
  },
  cariWisata: {
    textAlign: "left",
  },
  interfaceEssentialmagnifierParent: {
    borderColor: "rgba(0, 0, 0, 0.15)",
    width: 238,
    height: 37,
    paddingHorizontal: GlobalStyles.Padding.padding_lg,
    paddingVertical: GlobalStyles.Padding.padding_xs,
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
  },
  interfaceEssentialheartIcon: {
    width: 24,
    height: 24,
  },
  revisiLogoInspiringBig3Parent: {
    paddingHorizontal: GlobalStyles.Padding.padding_2xl,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    display: "none",
    width: 360,
  },
  pageTitle: {
    fontSize: GlobalStyles.FontSize.subtitleS1Regular_size,
    width: 184,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
    textAlign: "left",
  },
  groupChild: {
    borderRadius: 57,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  interfaceEssentialheartChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  heartIcon: {
    height: "74.17%",
    width: "84.58%",
    top: "12.5%",
    right: "7.08%",
    bottom: "13.33%",
    left: "8.33%",
  },
  interfaceEssentialheart: {
    height: "66.67%",
    width: "66.67%",
    top: "16.67%",
    right: "16.67%",
    bottom: "16.67%",
    left: "16.67%",
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  groupParent: {
    padding: GlobalStyles.Padding.padding_sm,
  },
  kawahIjen: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 32,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
  },
  wisataAlam: {
    width: 212,
    textAlign: "left",
    height: 14,
  },
  kawahIjenAdalahSebuahDanau: {
    lineHeight: 18,
    width: 326,
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
  },
  frameInner: {
    height: 1,
    width: 326,
  },
  telepon: {
    width: 326,
    textAlign: "left",
  },
  text: {
    width: 326,
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
  },
  ijenIcon: {
    width: 57,
  },
  blueFireIjen: {
    width: 60,
  },
  ijenParent: {
    flexDirection: "row",
  },
  banyuwangiJawaTimur: {
    width: 326,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
  },
  frameParent: {
    top: 384,
    padding: GlobalStyles.Padding.padding_2xl,
    backgroundColor: GlobalStyles.Color.white,
    width: 360,
  },
  image1Icon: {
    height: "86.07%",
    width: "99.41%",
    top: "13.93%",
    right: "-13.47%",
    left: "14.06%",
    bottom: "0%",
  },
  maskGroupChild: {
    top: 60,
    left: 196,
    width: 40,
    height: 41,
    position: "absolute",
  },
  buttonIcon: {
    color: GlobalStyles.Color.white,
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
  },
  buttonIconXsmall: {
    height: "102.08%",
    width: "147.33%",
    top: "-1.04%",
    right: "-23.66%",
    bottom: "-1.04%",
    left: "-23.66%",
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.colBlitimBluePrimary,
    borderColor: "#0085cc",
    paddingHorizontal: 18,
    paddingVertical: GlobalStyles.Padding.padding_md,
    justifyContent: "center",
    position: "absolute",
  },
  buttonIconText: {
    top: 186,
    left: 188,
    width: 131,
    height: 48,
    position: "absolute",
  },
  maskGroup: {
    height: "41.95%",
    width: "140.28%",
    top: "75%",
    right: "-20.56%",
    bottom: "-16.95%",
    left: "-19.72%",
    position: "absolute",
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
  text1: {
    left: 290,
  },
  g: {
    top: 6,
    left: 216,
    color: GlobalStyles.Color.gray600,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    display: "none",
    position: "absolute",
  },
  am: {
    left: 17,
    fontWeight: "500",
  },
  statusbar: {
    backgroundColor: GlobalStyles.Color.teal_100,
    height: 24,
    width: 360,
    overflow: "hidden",
  },
  wisataDetailDestination: {
    backgroundColor: GlobalStyles.Color.beige,
    flex: 1,
    height: 1044,
    overflow: "hidden",
    width: "100%",
  },
});

export default WisataDetailDestination;
