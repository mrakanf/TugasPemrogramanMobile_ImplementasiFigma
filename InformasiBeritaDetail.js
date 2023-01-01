import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../GlobalStyles";

const InformasiBeritaDetail = () => {
  return (
    <View style={styles.informasiBeritaDetail}>
      <Image
        style={[styles.gandrungSewu1, styles.frameParentPosition]}
        resizeMode="cover"
        source={require("../assets/gandrung-sewu-11.png")}
      />
      <View
        style={[
          styles.revisiLogoInspiringBig3Parent,
          styles.parentFlexBox,
          styles.parentPosition,
        ]}
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
            styles.parentFlexBox,
          ]}
        >
          <Image
            style={styles.interfaceEssentialmagnifier}
            resizeMode="cover"
            source={require("../assets/interface-essentialmagnifier1.png")}
          />
          <Text style={[styles.cariWisata, styles.ml10, styles.cariWisataTypo]}>
            Cari wisata
          </Text>
        </View>
        <Image
          style={[styles.interfaceIconLayout1, styles.ml16]}
          resizeMode="cover"
          source={require("../assets/interface-essentialheart.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View>
          <Text
            style={[styles.gandrungSewuBanyuwangi2022, styles.banyuwangiColor]}
          >
            Gandrung Sewu Banyuwangi 2022 Pukau Ribuan Wisatawan
          </Text>
          <Text style={[styles.oktober2022, styles.mt4, styles.cariWisataTypo]}>
            29 Oktober 2022
          </Text>
        </View>
        <Text
          style={[
            styles.banyuwangiPertunjukanTari,
            styles.mt16,
            styles.banyuwangiColor,
          ]}
        >
          <Text style={styles.banyuwangiPertunjukan}>
            Banyuwangi - Pertunjukan tari kolosal Gandrung Sewu Banyuwangi
            menuai decak kagum ribuan penonton, yang memadati Pantai Marina Boom
            Banyuwangi, Sabtu (29/10/2022).
          </Text>
          <Text style={styles.banyuwangiPertunjukan}></Text>
          <Text style={styles.banyuwangiPertunjukan}>
            Penampilan 1.284 pelajar Banyuwangi dengan latar Selat Bali, mampu
            memukau ribuan penonton yang hadir.
          </Text>
          <Text style={styles.banyuwangiPertunjukan}></Text>
          <Text style={styles.banyuwangiPertunjukan}>
            Antusias penonton yang hadir untuk menyaksikan Gandrung Sewu sangat
            tinggi. Penonton telah memadati Pantai Boom bahkan dua jam sebelum
            pertunjukan dimulai. Kepadatan kendaraan telah terlihat sejak pintu
            gerbang Pantai Boom.
          </Text>
          <Text style={styles.banyuwangiPertunjukan}></Text>
          <Text style={styles.banyuwangiPertunjukan}>
            Turut hadir pada atraksi budaya tersebut, Menteri Pemberdayaan
            Aparatur Negara dan Reformasi Birokrasi (Menpan-RB) Abdullah Azwar
            Anas, beserta para pejabat Kemenpan-RB. Dari Kementerian Pariwisata
            dihadiri Staf Ahli Menteri Bidang Reformasi Birokrasi dan Regulasi,
            R Kurleni Ukar.
          </Text>
          <Text style={styles.banyuwangiPertunjukan}></Text>
          <Text style={styles.banyuwangiPertunjukan}>
            Tampak pula Plt Kepala BKN Indonesia Bima Haria Wibisana, Kepala
            Badan Strategi Kebijakan Dalam Negeri Eko Prasetyanto, Kepala Arsip
            Nasional RI Imam Gunarto, dan tamu undangan lainnya.
          </Text>
          <Text style={styles.banyuwangiPertunjukan}></Text>
          <Text style={styles.banyuwangiPertunjukan}>
            Bupati Banyuwangi Ipuk Fiestiandani mengatakan, event tahunan
            Festival Gandrung Sewu adalah upaya mengangkat pamor budaya tari
            gandrung. Ia menilai Gandrung Sewu menjadi perekat kecintaan pemuda
            terhadap budaya lokal.
          </Text>
          <Text style={styles.banyuwangiPertunjukan}></Text>
          <Text style={styles.banyuwangiPertunjukan}>
            "Meski banyak budaya barat dan K-Pop Korea yang masuk ke negeri ini,
            ternyata tidak menyurutkan kecintaan anak-anak muda Banyuwangi
            terhadap seni budaya asli daerahnya. Kalian luar biasa," kata Ipuk.
          </Text>
          <Text style={styles.text6}></Text>
        </Text>
      </View>
      <View
        style={[
          styles.arrowsChevronarrowLeftParent,
          styles.parentFlexBox,
          styles.parentPosition,
        ]}
      >
        <Image
          style={styles.interfaceIconLayout1}
          resizeMode="cover"
          source={require("../assets/arrowschevronarrowleft.png")}
        />
        <Text style={[styles.informasiDanBerita, styles.ml16]}>
          Informasi dan Berita
        </Text>
        <Image
          style={[
            styles.interfaceEssentialshareIcon,
            styles.ml16,
            styles.interfaceIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/interface-essentialshare.png")}
        />
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
        <Text style={[styles.text7, styles.amTypo]}>100%</Text>
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
  frameParentPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  parentPosition: {
    paddingHorizontal: GlobalStyles.Padding.padding_2xl,
    alignItems: "center",
    flexDirection: "row",
    width: 360,
    left: 0,
    top: 24,
    position: "absolute",
    overflow: "hidden",
  },
  cariWisataTypo: {
    color: GlobalStyles.Color.gray400,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
  },
  banyuwangiColor: {
    color: GlobalStyles.Color.gray800,
    textAlign: "left",
  },
  interfaceIconLayout1: {
    height: 24,
    width: 24,
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
  gandrungSewu1: {
    height: 270,
    top: 24,
    left: 0,
    position: "absolute",
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
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 1,
    width: 238,
    height: 37,
    paddingHorizontal: GlobalStyles.Padding.padding_lg,
    paddingVertical: GlobalStyles.Padding.padding_xs,
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: GlobalStyles.Border.br_lg,
    alignItems: "center",
    flexDirection: "row",
  },
  revisiLogoInspiringBig3Parent: {
    paddingVertical: GlobalStyles.Padding.padding_sm,
    display: "none",
  },
  gandrungSewuBanyuwangi2022: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 32,
    width: 327,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
  },
  oktober2022: {
    width: 212,
    textAlign: "left",
    height: 14,
  },
  banyuwangiPertunjukan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text6: {
    margin: GlobalStyles.Margin.margin_2xs,
  },
  banyuwangiPertunjukanTari: {
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
    lineHeight: 18,
    width: 326,
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    color: GlobalStyles.Color.gray800,
  },
  frameParent: {
    top: 294,
    padding: GlobalStyles.Padding.padding_2xl,
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    position: "absolute",
  },
  informasiDanBerita: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    width: 246,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
    textAlign: "left",
  },
  interfaceEssentialshareIcon: {
    borderRadius: GlobalStyles.Border.br_lg,
  },
  arrowsChevronarrowLeftParent: {
    paddingVertical: GlobalStyles.Padding.padding_xl,
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
  text7: {
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
    top: 0,
    height: 24,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  informasiBeritaDetail: {
    backgroundColor: GlobalStyles.Color.beige,
    flex: 1,
    width: "100%",
    height: 1171,
    overflow: "hidden",
  },
});

export default InformasiBeritaDetail;
