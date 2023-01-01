import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const InformasiBeritaList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.informasiBeritaList}>
      <View style={[styles.appbar, styles.appbarLayout]}>
        <View style={[styles.appbarChild, styles.appbarChildPosition]} />
        <View
          style={[
            styles.informasiDanBeritaParent,
            styles.navIconFlexBox,
            styles.statusbarPosition,
          ]}
        >
          <Text
            style={[styles.informasiDanBerita, styles.informasiDanBeritaTypo]}
          >
            Informasi dan Berita
          </Text>
          <Image
            style={[
              styles.interfaceEssentialmagnifier,
              styles.ml16,
              styles.iconHomeLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/interface-essentialmagnifier.png")}
          />
        </View>
      </View>
      <View style={styles.articleListParent}>
        <View>
          <Image
            style={styles.articleListChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <View style={[styles.keboKeboanParent, styles.mt16]}>
            <Image
              style={styles.keboKeboanIcon}
              resizeMode="cover"
              source={require("../assets/kebo-keboan.png")}
            />
            <View style={styles.ml16}>
              <Text
                style={[
                  styles.upacaraAdatKeboKeboan202,
                  styles.upacaraAdatKeboKeboan202Color,
                  styles.informasiDanBeritaTypo,
                ]}
              >
                Upacara Adat Kebo - Keboan 2022
              </Text>
              <Text
                style={[
                  styles.oktober2022,
                  styles.mt4,
                  styles.gTypo,
                  styles.gTypo1,
                ]}
              >
                04 Oktober 2022
              </Text>
              <Text
                style={[
                  styles.ketuaKoniBeltimKamarudinMe,
                  styles.mt4,
                  styles.gTypo,
                  styles.upacaraAdatKeboKeboan202Color,
                ]}
              >
                Ketua KONI Beltim Kamarudin mengucapkan selamat atas pelantikan
                pengurus PERTINA ...
              </Text>
            </View>
          </View>
          <Image
            style={[styles.articleListChild, styles.mt16]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View>
          <Image
            style={styles.articleListChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <View style={[styles.keboKeboanParent, styles.mt16]}>
            <Image
              style={styles.keboKeboanIcon}
              resizeMode="cover"
              source={require("../assets/tour-de-ijen.png")}
            />
            <View style={styles.ml16}>
              <Text
                style={[
                  styles.upacaraAdatKeboKeboan202,
                  styles.upacaraAdatKeboKeboan202Color,
                  styles.informasiDanBeritaTypo,
                ]}
              >
                Banyuwangi Adakan Tour de Ijen 2022
              </Text>
              <Text
                style={[
                  styles.oktober2022,
                  styles.mt4,
                  styles.gTypo,
                  styles.gTypo1,
                ]}
              >
                04 Oktober 2022
              </Text>
              <Text
                style={[
                  styles.ketuaKoniBeltimKamarudinMe,
                  styles.mt4,
                  styles.gTypo,
                  styles.upacaraAdatKeboKeboan202Color,
                ]}
              >
                Ketua KONI Beltim Kamarudin mengucapkan selamat atas pelantikan
                pengurus PERTINA ...
              </Text>
            </View>
          </View>
          <Image
            style={[styles.articleListChild, styles.mt16]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View>
          <Image
            style={styles.articleListChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <View style={[styles.keboKeboanParent, styles.mt16]}>
            <Image
              style={styles.keboKeboanIcon}
              resizeMode="cover"
              source={require("../assets/bec.png")}
            />
            <View style={styles.ml16}>
              <Text
                style={[
                  styles.upacaraAdatKeboKeboan202,
                  styles.upacaraAdatKeboKeboan202Color,
                  styles.informasiDanBeritaTypo,
                ]}
              >
                Banyuwangi Ethno Carnival 2022
              </Text>
              <Text
                style={[
                  styles.oktober2022,
                  styles.mt4,
                  styles.gTypo,
                  styles.gTypo1,
                ]}
              >
                04 Oktober 2022
              </Text>
              <Text
                style={[
                  styles.ketuaKoniBeltimKamarudinMe,
                  styles.mt4,
                  styles.gTypo,
                  styles.upacaraAdatKeboKeboan202Color,
                ]}
              >
                Ketua KONI Beltim Kamarudin mengucapkan selamat atas pelantikan
                pengurus PERTINA ...
              </Text>
            </View>
          </View>
          <Image
            style={[styles.articleListChild, styles.mt16]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
      </View>
      <View style={styles.articleList3}>
        <Image
          style={styles.articleListChild}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
        <View style={[styles.keboKeboanParent, styles.mt16]}>
          <Image
            style={styles.keboKeboanIcon}
            resizeMode="cover"
            source={require("../assets/gandrung-sewu-1.png")}
          />
          <View style={styles.ml16}>
            <Text
              style={[
                styles.upacaraAdatKeboKeboan202,
                styles.upacaraAdatKeboKeboan202Color,
                styles.informasiDanBeritaTypo,
              ]}
            >
              Adakan Gandrung Sewu 2022
            </Text>
            <Text
              style={[
                styles.oktober2022,
                styles.mt4,
                styles.gTypo,
                styles.gTypo1,
              ]}
            >
              04 Oktober 2022
            </Text>
            <Text
              style={[
                styles.ketuaKoniBeltimKamarudinMe,
                styles.mt4,
                styles.gTypo,
                styles.upacaraAdatKeboKeboan202Color,
              ]}
            >
              Ketua KONI Beltim Kamarudin mengucapkan selamat atas pelantikan
              pengurus PERTINA ...
            </Text>
          </View>
        </View>
        <Image
          style={[styles.articleListChild, styles.mt16]}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
      </View>
      <View style={styles.articleList4}>
        <Image
          style={styles.articleListChild}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
        <View style={[styles.keboKeboanParent, styles.mt16]}>
          <Image
            style={styles.keboKeboanIcon}
            resizeMode="cover"
            source={require("../assets/kebo-keboan.png")}
          />
          <View style={styles.ml16}>
            <Text
              style={[
                styles.upacaraAdatKeboKeboan202,
                styles.upacaraAdatKeboKeboan202Color,
                styles.informasiDanBeritaTypo,
              ]}
            >
              Upacara Adat Kebo - Keboan 2022
            </Text>
            <Text
              style={[
                styles.oktober2022,
                styles.mt4,
                styles.gTypo,
                styles.gTypo1,
              ]}
            >
              04 Oktober 2022
            </Text>
            <Text
              style={[
                styles.ketuaKoniBeltimKamarudinMe,
                styles.mt4,
                styles.gTypo,
                styles.upacaraAdatKeboKeboan202Color,
              ]}
            >
              Ketua KONI Beltim Kamarudin mengucapkan selamat atas pelantikan
              pengurus PERTINA ...
            </Text>
          </View>
        </View>
        <Image
          style={[styles.articleListChild, styles.mt16]}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
      </View>
      <View style={styles.articleList5}>
        <Image
          style={styles.articleListChild}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
        <View style={[styles.keboKeboanParent, styles.mt16]}>
          <Image
            style={styles.keboKeboanIcon}
            resizeMode="cover"
            source={require("../assets/tour-de-ijen.png")}
          />
          <View style={styles.ml16}>
            <Text
              style={[
                styles.upacaraAdatKeboKeboan202,
                styles.upacaraAdatKeboKeboan202Color,
                styles.informasiDanBeritaTypo,
              ]}
            >
              Banyuwangi Adakan Tour de Ijen 2022
            </Text>
            <Text
              style={[
                styles.oktober2022,
                styles.mt4,
                styles.gTypo,
                styles.gTypo1,
              ]}
            >
              04 Oktober 2022
            </Text>
            <Text
              style={[
                styles.ketuaKoniBeltimKamarudinMe,
                styles.mt4,
                styles.gTypo,
                styles.upacaraAdatKeboKeboan202Color,
              ]}
            >
              Ketua KONI Beltim Kamarudin mengucapkan selamat atas pelantikan
              pengurus PERTINA ...
            </Text>
          </View>
        </View>
        <Image
          style={[styles.articleListChild, styles.mt16]}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
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
        <Text style={[styles.text, styles.amTypo]}>100%</Text>
        <Text style={[styles.g, styles.gTypo, styles.gTypo1]}>4G</Text>
        <Text style={[styles.am, styles.amTypo]}>15:00 AM</Text>
      </View>
      <View
        style={[
          styles.navbarBottom,
          styles.appbarChildPosition,
          styles.appbarLayout,
        ]}
      >
        <Pressable
          style={[styles.navIcon, styles.navIconFlexBox]}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Image
            style={[styles.iconHome, styles.iconHomeLayout]}
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
          style={[styles.navIcon, styles.navIconFlexBox]}
          onPress={() => navigation.navigate("WisataThumbnailList")}
        >
          <Image
            style={[styles.iconHome, styles.iconHomeLayout]}
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
        <View style={[styles.navIcon, styles.navIconFlexBox]}>
          <Image
            style={[styles.iconHome, styles.iconHomeLayout]}
            resizeMode="cover"
            source={require("../assets/icon-news1.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Text style={[styles.beranda2, styles.berandaTypo]}>Informasi</Text>
        </View>
        <Pressable
          style={[styles.navIcon, styles.navIconFlexBox]}
          onPress={() => navigation.navigate("MoreList")}
        >
          <Image
            style={[styles.iconHome, styles.iconHomeLayout]}
            resizeMode="cover"
            source={require("../assets/icon-more1.png")}
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
  ml16: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  mt4: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  mt16: {
    marginTop: GlobalStyles.Margin.margin_xl,
  },
  appbarLayout: {
    width: 360,
    height: 56,
  },
  appbarChildPosition: {
    backgroundColor: GlobalStyles.Color.tan,
    left: 0,
    position: "absolute",
  },
  navIconFlexBox: {
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.tan,
  },
  statusbarPosition: {
    top: 0,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  informasiDanBeritaTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
  },
  iconHomeLayout: {
    width: 24,
    height: 24,
  },
  upacaraAdatKeboKeboan202Color: {
    color: GlobalStyles.Color.gray800,
    width: 246,
  },
  gTypo: {
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    textAlign: "left",
  },
  gTypo1: {
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
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
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    position: "absolute",
  },
  berandaTypo: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_sm,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
  },
  appbarChild: {
    top: 56,
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderTopWidth: 1,
    width: 361,
    height: 1,
  },
  informasiDanBerita: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    width: 287,
    color: GlobalStyles.Color.gray600,
    fontWeight: "500",
  },
  interfaceEssentialmagnifier: {
    borderRadius: GlobalStyles.Border.br_md,
    display: "none",
    height: 24,
  },
  informasiDanBeritaParent: {
    paddingHorizontal: GlobalStyles.Padding.padding_2xl,
    paddingVertical: GlobalStyles.Padding.padding_xl,
    flexDirection: "row",
  },
  appbar: {
    top: 24,
    height: 56,
    left: 0,
    width: 360,
    position: "absolute",
  },
  articleListChild: {
    width: 326,
    height: 1,
  },
  keboKeboanIcon: {
    borderRadius: GlobalStyles.Border.br_sm,
    width: 64,
    height: 64,
  },
  upacaraAdatKeboKeboan202: {
    fontSize: GlobalStyles.FontSize.subtitleS1Regular_size,
    lineHeight: 21,
    width: 246,
  },
  oktober2022: {
    color: GlobalStyles.Color.gray400,
    width: 246,
  },
  ketuaKoniBeltimKamarudinMe: {
    lineHeight: 16,
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    width: 246,
    display: "none",
  },
  keboKeboanParent: {
    flexDirection: "row",
  },
  articleListParent: {
    top: 80,
    left: 17,
    position: "absolute",
  },
  articleList3: {
    top: 368,
    left: 17,
    position: "absolute",
  },
  articleList4: {
    top: 464,
    left: 17,
    position: "absolute",
  },
  articleList5: {
    top: 560,
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
    position: "absolute",
  },
  am: {
    color: GlobalStyles.Color.black,
    left: 17,
    fontWeight: "500",
  },
  statusbar: {
    backgroundColor: GlobalStyles.Color.teal_100,
    height: 24,
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
    height: 56,
  },
  beranda2: {
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
    height: 56,
  },
  informasiBeritaList: {
    backgroundColor: GlobalStyles.Color.beige,
    flex: 1,
    width: "100%",
    height: 792,
    overflow: "hidden",
  },
});

export default InformasiBeritaList;
