import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <LinearGradient
        style={styles.homepageChild}
        locations={[0, 1]}
        colors={["#ebf5ff", "#fff"]}
        useAngle={true}
        angle={180}
      />
      <View
        style={[
          styles.homepageItem,
          styles.lineViewLayout,
          styles.groupInnerBorder,
        ]}
      />
      <View style={[styles.maskGroup, styles.maskGroupPosition]}>
        <Image
          style={styles.lumutW6441Icon}
          resizeMode="cover"
          source={require("../assets/lumut-w644-11.png")}
        />
        <Image
          style={[styles.patungGandrung1, styles.maskGroupPosition]}
          resizeMode="cover"
          source={require("../assets/patung-gandrung-11.png")}
        />
        <LinearGradient
          style={[styles.maskGroupChild, styles.ellipseIconPosition]}
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
          <View style={[styles.watuDodolParent, styles.frameContainerPosition]}>
            <Text
              style={[
                styles.watuDodol,
                styles.watuDodolTypo,
                styles.lineViewPosition,
              ]}
            >
              WATU DODOL
            </Text>
            <Text style={styles.wisata}>Wisata</Text>
          </View>
        </View>
      </View>
      <View style={[styles.maskGroup, styles.maskGroupPosition]}>
        <Image
          style={styles.lumutW6441Icon}
          resizeMode="cover"
          source={require("../assets/lumut-w644-11.png")}
        />
        <Image
          style={[styles.patungGandrung1, styles.maskGroupPosition]}
          resizeMode="cover"
          source={require("../assets/patung-gandrung-11.png")}
        />
        <LinearGradient
          style={[styles.maskGroupChild, styles.ellipseIconPosition]}
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
          <View style={[styles.watuDodolParent, styles.frameContainerPosition]}>
            <Text
              style={[
                styles.watuDodol,
                styles.watuDodolTypo,
                styles.lineViewPosition,
              ]}
            >
              WATU DODOL
            </Text>
            <Text style={styles.wisata}>Wisata</Text>
          </View>
        </View>
      </View>
      <View style={styles.statusbarParent}>
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
              styles.interfaceIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/interface-essentialwifi1.png")}
          />
          <Text style={[styles.text, styles.amTypo]}>100%</Text>
          <Text style={[styles.g, styles.gColor]}>4G</Text>
          <Text style={[styles.am, styles.amTypo]}>15:00 AM</Text>
        </View>
        <View style={styles.frameParent}>
          <View
            style={[styles.img20161128Wa00041728874RParent, styles.navIconBg]}
          >
            <Image
              style={styles.img20161128Wa00041728874RIcon}
              resizeMode="cover"
              source={require("../assets/img20161128wa00041728874removebgpreview-2.png")}
            />
            <Pressable
              style={[styles.interfaceEssentialmagnifierParent, styles.ml16]}
              onPress={() => navigation.navigate("WisataSearchResult")}
            >
              <Image
                style={styles.keyboardArrowRightIconLayout}
                resizeMode="cover"
                source={require("../assets/interface-essentialmagnifier5.png")}
              />
              <Text
                style={[styles.cariWisata, styles.ml8, styles.cariWisataColor]}
              >
                Cari wisata
              </Text>
            </Pressable>
            <Pressable
              style={[styles.interfaceEssentialheart, styles.ml16]}
              onPress={() => navigation.navigate("WisataSearchFavorite")}
            >
              <View
                style={[
                  styles.destinationChildPosition,
                  styles.destinationList2col2Position,
                ]}
              />
              <Image
                style={[styles.heartIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/heart.png")}
              />
            </Pressable>
          </View>
          <View
            style={[
              styles.groupInner,
              styles.lineViewLayout,
              styles.groupInnerBorder,
            ]}
          />
        </View>
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
            styles.interfaceIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/interface-essentialwifi1.png")}
        />
        <Text style={[styles.text, styles.amTypo]}>100%</Text>
        <Text style={[styles.g, styles.gColor]}>4G</Text>
        <Text style={[styles.am, styles.amTypo]}>15:00 AM</Text>
      </View>
      <View style={styles.kategori}>
        <View style={styles.lineParent}>
          <View
            style={[
              styles.lineView,
              styles.lineViewPosition,
              styles.lineViewLayout,
            ]}
          />
          <View style={styles.rectangleView} />
          <Text style={[styles.kategori1, styles.gColor]}>Kategori</Text>
        </View>
        <View style={styles.mt24}>
          <Text style={[styles.jelajahiSekarang, styles.gColor]}>
            Jelajahi Sekarang
          </Text>
          <Text
            style={[styles.pilihKategoriYangDiminati, styles.cariWisataColor]}
          >
            Pilih kategori yang diminati
          </Text>
        </View>
        <View style={styles.mt24}>
          <View style={styles.categoryPortraitLargeParent}>
            <View
              style={[
                styles.categoryPortraitLarge,
                styles.buttonOutlineTextFlexBox,
              ]}
            >
              <Image
                style={styles.categoryPortraitLargeChild}
                resizeMode="cover"
                source={require("../assets/group-27.png")}
              />
              <Text style={[styles.wisataAlam, styles.mt2, styles.gColor]}>
                <Text style={styles.wisata2}>Wisata</Text>
                <Text style={styles.alam}>Alam</Text>
              </Text>
            </View>
            <View
              style={[
                styles.categoryPortraitLarge,
                styles.buttonOutlineTextFlexBox,
              ]}
            >
              <Image
                style={styles.categoryPortraitLargeChild}
                resizeMode="cover"
                source={require("../assets/group-271.png")}
              />
              <Text style={[styles.wisataAlam, styles.mt2, styles.gColor]}>
                <Text style={styles.wisata2}>Wisata</Text>
                <Text style={styles.alam}>Air</Text>
              </Text>
            </View>
            <View
              style={[
                styles.categoryPortraitLarge,
                styles.buttonOutlineTextFlexBox,
              ]}
            >
              <Image
                style={styles.categoryPortraitLargeChild}
                resizeMode="cover"
                source={require("../assets/group-272.png")}
              />
              <Text style={[styles.wisataAlam, styles.mt2, styles.gColor]}>
                <Text style={styles.wisata2}>Wisata</Text>
                <Text style={styles.alam}>Kuliner</Text>
              </Text>
            </View>
            <View
              style={[
                styles.categoryPortraitLarge,
                styles.buttonOutlineTextFlexBox,
              ]}
            >
              <Image
                style={styles.categoryPortraitLargeChild}
                resizeMode="cover"
                source={require("../assets/group-273.png")}
              />
              <Text style={[styles.wisataAlam, styles.mt2, styles.gColor]}>
                <Text style={styles.wisata2}>Wisata</Text>
                <Text style={styles.alam}>Sejarah</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.categoryPortraitLargeParent, styles.mt24]}>
            <View
              style={[
                styles.categoryPortraitLarge,
                styles.buttonOutlineTextFlexBox,
              ]}
            >
              <Image
                style={styles.categoryPortraitLargeChild}
                resizeMode="cover"
                source={require("../assets/group-274.png")}
              />
              <Text style={[styles.wisataAlam, styles.mt2, styles.gColor]}>
                <Text style={styles.wisata2}>Hotel</Text>
                <Text style={styles.alam}>Penginapan</Text>
              </Text>
            </View>
            <View
              style={[
                styles.categoryPortraitLarge,
                styles.buttonOutlineTextFlexBox,
              ]}
            >
              <Image
                style={styles.categoryPortraitLargeChild}
                resizeMode="cover"
                source={require("../assets/group-275.png")}
              />
              <Text style={[styles.wisataAlam, styles.mt2, styles.gColor]}>
                <Text style={styles.wisata2}>Layanan</Text>
                <Text style={styles.alam}>Publik</Text>
              </Text>
            </View>
            <View
              style={[
                styles.categoryPortraitLarge,
                styles.buttonOutlineTextFlexBox,
              ]}
            >
              <Image
                style={styles.categoryPortraitLargeChild}
                resizeMode="cover"
                source={require("../assets/group-276.png")}
              />
              <Text style={[styles.wisataAlam, styles.mt2, styles.gColor]}>
                <Text style={styles.wisata2}>Travel</Text>
                <Text style={styles.alam}>Transportasi</Text>
              </Text>
            </View>
            <View
              style={[
                styles.categoryPortraitLarge,
                styles.buttonOutlineTextFlexBox,
              ]}
            >
              <Image
                style={styles.categoryPortraitLargeChild}
                resizeMode="cover"
                source={require("../assets/group-277.png")}
              />
              <Text style={[styles.wisataAlam, styles.mt2, styles.gColor]}>
                <Text style={styles.wisata2}>Belanja</Text>
                <Text style={styles.alam}>Oleh-oleh</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.informasi}>
        <View>
          <Text style={[styles.jelajahiSekarang, styles.gColor]}>
            Informasi dan Berita
          </Text>
          <Text
            style={[styles.pilihKategoriYangDiminati, styles.cariWisataColor]}
          >
            Seputar Belitung Timur
          </Text>
        </View>
        <View style={styles.mt24}>
          <View>
            <Image
              style={styles.articleListChild}
              resizeMode="cover"
              source={require("../assets/line-1.png")}
            />
            <View style={[styles.categoryPortraitLargeParent, styles.mt16]}>
              <Image
                style={styles.keboKeboanIcon}
                resizeMode="cover"
                source={require("../assets/kebo-keboan.png")}
              />
              <View style={styles.ml16}>
                <Text
                  style={[
                    styles.upacaraAdatKeboKeboan202,
                    styles.oktober2022Layout,
                    styles.upacaraAdatKeboKeboan202Color,
                  ]}
                >
                  Upacara Adat Kebo - Keboan 2022
                </Text>
                <Text
                  style={[
                    styles.oktober2022,
                    styles.mt4,
                    styles.oktober2022Layout,
                    styles.cariWisataColor,
                  ]}
                >
                  04 Oktober 2022
                </Text>
                <Text
                  style={[
                    styles.ketuaKoniBeltimKamarudinMe,
                    styles.mt4,
                    styles.oktober2022Layout,
                    styles.upacaraAdatKeboKeboan202Color,
                  ]}
                >
                  Ketua KONI Beltim Kamarudin mengucapkan selamat atas
                  pelantikan pengurus PERTINA ...
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
            <View style={[styles.categoryPortraitLargeParent, styles.mt16]}>
              <Image
                style={styles.keboKeboanIcon}
                resizeMode="cover"
                source={require("../assets/tour-de-ijen.png")}
              />
              <View style={styles.ml16}>
                <Text
                  style={[
                    styles.upacaraAdatKeboKeboan202,
                    styles.oktober2022Layout,
                    styles.upacaraAdatKeboKeboan202Color,
                  ]}
                >
                  Banyuwangi Adakan Tour de Ijen 2022
                </Text>
                <Text
                  style={[
                    styles.oktober2022,
                    styles.mt4,
                    styles.oktober2022Layout,
                    styles.cariWisataColor,
                  ]}
                >
                  04 Oktober 2022
                </Text>
                <Text
                  style={[
                    styles.ketuaKoniBeltimKamarudinMe,
                    styles.mt4,
                    styles.oktober2022Layout,
                    styles.upacaraAdatKeboKeboan202Color,
                  ]}
                >
                  Ketua KONI Beltim Kamarudin mengucapkan selamat atas
                  pelantikan pengurus PERTINA ...
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
            <View style={[styles.categoryPortraitLargeParent, styles.mt16]}>
              <Image
                style={styles.keboKeboanIcon}
                resizeMode="cover"
                source={require("../assets/bec.png")}
              />
              <View style={styles.ml16}>
                <Text
                  style={[
                    styles.upacaraAdatKeboKeboan202,
                    styles.oktober2022Layout,
                    styles.upacaraAdatKeboKeboan202Color,
                  ]}
                >
                  Banyuwangi Ethno Carnival 2022
                </Text>
                <Text
                  style={[
                    styles.oktober2022,
                    styles.mt4,
                    styles.oktober2022Layout,
                    styles.cariWisataColor,
                  ]}
                >
                  04 Oktober 2022
                </Text>
                <Text
                  style={[
                    styles.ketuaKoniBeltimKamarudinMe,
                    styles.mt4,
                    styles.oktober2022Layout,
                    styles.upacaraAdatKeboKeboan202Color,
                  ]}
                >
                  Ketua KONI Beltim Kamarudin mengucapkan selamat atas
                  pelantikan pengurus PERTINA ...
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
        <Pressable
          style={styles.mt24}
          onPress={() => navigation.navigate("InformasiBeritaList")}
        >
          <Text style={styles.informasiLainnya1}>Informasi lainnya</Text>
        </Pressable>
      </View>
      <View style={[styles.maskGroupWrapper, styles.maskGroupLayout]}>
        <View style={[styles.maskGroup2, styles.maskGroupLayout]}>
          <View style={[styles.maskGroupInner, styles.maskGroupLayout]} />
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Image
            style={styles.maskGroupChild1}
            resizeMode="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={styles.maskGroupChild2}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <Image
            style={styles.groupIcon3}
            resizeMode="cover"
            source={require("../assets/group2.png")}
          />
          <Image
            style={styles.groupIcon4}
            resizeMode="cover"
            source={require("../assets/group3.png")}
          />
          <Text
            style={[styles.jagaKesehatanDanKeselamatan, styles.telukHijauColor]}
          >
            <Text style={styles.wisata2}>
              <Text style={[styles.jagaKesehatanDan, styles.watuDodolTypo]}>
                Jaga kesehatan dan keselamatan dari virus Covid-19
              </Text>
            </Text>
            <Text style={styles.wisata2}>
              <Text style={[styles.jagaKesehatanDan, styles.watuDodolTypo]}>
                {" "}
              </Text>
            </Text>
            <Text style={styles.alam}>
              <Text style={styles.selengkapnya1}>Selengkapnya</Text>
            </Text>
          </Text>
          <Image
            style={[
              styles.keyboardArrowRightIcon,
              styles.keyboardArrowRightIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/keyboard-arrow-right.png")}
          />
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameContainerPosition]}>
        <View>
          <Text style={[styles.jelajahiSekarang, styles.gColor]}>
            Destinasi Wisata
          </Text>
          <Text
            style={[styles.pilihKategoriYangDiminati, styles.cariWisataColor]}
          >
            Pilihan terbaik
          </Text>
        </View>
        <View style={[styles.destinationList2colParent, styles.mt24]}>
          <View
            style={[
              styles.destinationList2col,
              styles.destinationIconLayout,
              styles.destinationShadowBox,
              styles.destinationShadowBox1,
            ]}
          >
            <Image
              style={[
                styles.pantaiTelukHijau1Icon,
                styles.destinationIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/pantaitelukhijau-1.png")}
            />
            <LinearGradient
              style={[
                styles.destinationList2colChild,
                styles.destinationChildPosition,
              ]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
            />
            <View style={styles.telukHijauWrapper}>
              <Text style={[styles.telukHijau, styles.telukHijauColor]}>
                Teluk Hijau
              </Text>
            </View>
            <Text style={[styles.wisata6, styles.wisataTypo]}>Wisata</Text>
          </View>
          <View
            style={[
              styles.destinationList2col1,
              styles.destinationPosition,
              styles.destinationShadowBox,
              styles.destinationShadowBox1,
            ]}
          >
            <Image
              style={[
                styles.hargaTiketMasukPantaiPulauIcon,
                styles.destinationIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/hargatiketmasukpantaipulaumerahterbarudibanyuwangijawatimur2019-1.png")}
            />
            <LinearGradient
              style={[
                styles.destinationList2colChild,
                styles.destinationChildPosition,
              ]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
            />
            <View style={styles.telukHijauWrapper}>
              <Text style={[styles.telukHijau, styles.telukHijauColor]}>
                Pulau Merah
              </Text>
            </View>
            <Text style={[styles.wisata6, styles.wisataTypo]}>Wisata</Text>
          </View>
          <View
            style={[styles.destinationListPortrait, styles.destinationPosition]}
          >
            <View
              style={[
                styles.destinationShadowBox,
                styles.destinationShadowBox1,
                styles.destinationChildPosition,
                styles.destinationList2col2Position,
              ]}
            >
              <Image
                style={[
                  styles.hargaTiketMasukPantaiPulauIcon,
                  styles.destinationIconLayout,
                ]}
                resizeMode="cover"
                source={require("../assets/bangsring-underwater-1.png")}
              />
              <LinearGradient
                style={[
                  styles.destinationList2colChild,
                  styles.destinationChildPosition,
                ]}
                locations={[0, 1]}
                colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
              />
              <View style={styles.telukHijauWrapper}>
                <Text style={[styles.telukHijau, styles.telukHijauColor]}>
                  Bangsring Underwater
                </Text>
              </View>
              <Text style={[styles.wisata8, styles.wisataTypo]}>Wisata</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={[
            styles.buttonOutlineText,
            styles.mt24,
            styles.buttonOutlineTextFlexBox,
          ]}
          onPress={() => navigation.navigate("WisataThumbnailList")}
        >
          <Text style={styles.buttonName}>Lihat lainnya</Text>
        </Pressable>
        <Text style={[styles.rekomendasiLainnya, styles.mt24]}>
          Rekomendasi lainnya
        </Text>
      </View>
      <Pressable
        style={[styles.destinationListPortrait1, styles.destinationIconLayout]}
        onPress={() => navigation.navigate("WisataDetailDestination")}
      >
        <View
          style={[
            styles.destinationShadowBox1,
            styles.destinationChildPosition,
            styles.destinationList2col2Position,
          ]}
        >
          <Image
            style={[
              styles.hargaTiketMasukPantaiPulauIcon,
              styles.destinationIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/kawah-ijen-1.png")}
          />
          <LinearGradient
            style={[
              styles.destinationList2colChild,
              styles.destinationChildPosition,
            ]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.85)", "rgba(0, 0, 0, 0)"]}
          />
          <View style={styles.telukHijauWrapper}>
            <Text style={[styles.telukHijau, styles.telukHijauColor]}>
              Kawah Ijen
            </Text>
          </View>
          <Text style={[styles.wisata6, styles.wisataTypo]}>Wisata</Text>
        </View>
      </Pressable>
      <View style={[styles.navbarBottom, styles.destinationShadowBox]}>
        <View style={[styles.navIcon, styles.navIconBg]}>
          <Image
            style={styles.interfaceEssentialheart}
            resizeMode="cover"
            source={require("../assets/icon-home3.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-13.png")}
          />
          <Text style={[styles.beranda, styles.berandaTypo]}>Beranda</Text>
        </View>
        <Pressable
          style={[styles.navIcon, styles.navIconBg]}
          onPress={() => navigation.navigate("WisataThumbnailList")}
        >
          <Image
            style={styles.interfaceEssentialheart}
            resizeMode="cover"
            source={require("../assets/icon-explore3.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.beranda1, styles.berandaTypo]}>Destinasi</Text>
        </Pressable>
        <Pressable
          style={[styles.navIcon, styles.navIconBg]}
          onPress={() => navigation.navigate("InformasiBeritaList")}
        >
          <Image
            style={styles.interfaceEssentialheart}
            resizeMode="cover"
            source={require("../assets/icon-news2.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.beranda1, styles.berandaTypo]}>Informasi</Text>
        </Pressable>
        <Pressable
          style={[styles.navIcon, styles.navIconBg]}
          onPress={() => navigation.navigate("MoreList")}
        >
          <Image
            style={styles.interfaceEssentialheart}
            resizeMode="cover"
            source={require("../assets/icon-more2.png")}
          />
          <Image
            style={styles.navIconChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.beranda1, styles.berandaTypo]}>Lainnya</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: GlobalStyles.Margin.margin_md,
  },
  ml16: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_xs,
  },
  mt24: {
    marginTop: GlobalStyles.Margin.margin_2xl,
  },
  mt4: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  mt16: {
    marginTop: GlobalStyles.Margin.margin_xl,
  },
  lineViewLayout: {
    borderTopWidth: 1,
    height: 1,
    borderStyle: "solid",
  },
  groupInnerBorder: {
    borderColor: "#e0e0e0",
    borderTopWidth: 1,
    position: "absolute",
  },
  maskGroupPosition: {
    height: 360,
    left: 0,
    position: "absolute",
  },
  ellipseIconPosition: {
    top: 63,
    position: "absolute",
  },
  groupChildLayout: {
    height: 130,
    width: 360,
    left: 0,
    position: "absolute",
  },
  frameContainerPosition: {
    left: 16,
    position: "absolute",
  },
  watuDodolTypo: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontWeight: "500",
  },
  lineViewPosition: {
    top: 11,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    position: "absolute",
  },
  gColor: {
    color: GlobalStyles.Color.gray600,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
  },
  navIconBg: {
    backgroundColor: GlobalStyles.Color.tan,
    alignItems: "center",
  },
  cariWisataColor: {
    color: GlobalStyles.Color.gray400,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
  },
  destinationList2col2Position: {
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
  },
  buttonOutlineTextFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  oktober2022Layout: {
    width: 246,
    textAlign: "left",
  },
  upacaraAdatKeboKeboan202Color: {
    color: GlobalStyles.Color.gray800,
    width: 246,
  },
  maskGroupLayout: {
    height: 183,
    width: 326,
    position: "absolute",
  },
  telukHijauColor: {
    color: GlobalStyles.Color.gray050,
    textAlign: "left",
  },
  keyboardArrowRightIconLayout: {
    height: 18,
    width: 18,
  },
  destinationIconLayout: {
    height: 175,
    position: "absolute",
  },
  destinationShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  destinationShadowBox1: {
    elevation: 1,
    shadowRadius: 1,
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: GlobalStyles.Border.br_sm,
  },
  destinationChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  wisataTypo: {
    left: "5.81%",
    width: "39.6%",
    height: "8.33%",
    color: GlobalStyles.Color.gray050,
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    textAlign: "left",
    position: "absolute",
  },
  destinationPosition: {
    top: 191,
    height: 175,
    width: 155,
    position: "absolute",
  },
  berandaTypo: {
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
  },
  homepageChild: {
    height: 291,
    backgroundColor: "transparent",
    display: "none",
    width: 360,
    left: 0,
    top: 1010,
    position: "absolute",
  },
  homepageItem: {
    height: 1,
    width: 326,
    left: 17,
    top: 1010,
  },
  lumutW6441Icon: {
    top: 10,
    height: 563,
    display: "none",
    width: 360,
    left: 0,
    position: "absolute",
  },
  patungGandrung1: {
    width: 387,
    top: 0,
  },
  maskGroupChild: {
    left: 360,
    height: 63,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    backgroundColor: "transparent",
    display: "none",
    width: 360,
  },
  groupChild: {
    top: 0,
    backgroundColor: "transparent",
  },
  watuDodol: {
    lineHeight: 31,
    color: GlobalStyles.Color.white,
    height: 32,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
    width: 269,
  },
  wisata: {
    color: GlobalStyles.Color.gray300,
    width: 212,
    height: 14,
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    textAlign: "left",
    fontWeight: "500",
    top: 0,
    left: 0,
    position: "absolute",
  },
  watuDodolParent: {
    top: 72,
    height: 43,
    width: 269,
  },
  rectangleParent: {
    top: 230,
  },
  maskGroup: {
    top: 80,
    width: 360,
  },
  devicesbatteryFullIcon: {
    width: "6.67%",
    right: "4.72%",
    left: "88.61%",
    height: 24,
    top: 0,
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
  },
  g: {
    top: 6,
    left: 216,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    textAlign: "left",
    display: "none",
    position: "absolute",
  },
  am: {
    fontWeight: "500",
    left: 17,
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
  img20161128Wa00041728874RIcon: {
    width: 48,
    height: 28,
  },
  cariWisata: {
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    textAlign: "left",
  },
  interfaceEssentialmagnifierParent: {
    borderRadius: GlobalStyles.Border.br_lg,
    borderColor: "#9096a0",
    borderWidth: 1,
    width: 238,
    height: 37,
    paddingHorizontal: GlobalStyles.Padding.padding_md,
    paddingVertical: GlobalStyles.Padding.padding_xs,
    backgroundColor: GlobalStyles.Color.white,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
  },
  heartIcon: {
    height: "74.17%",
    width: "84.58%",
    top: "12.5%",
    right: "7.08%",
    bottom: "13.33%",
    left: "8.33%",
    maxHeight: "100%",
  },
  interfaceEssentialheart: {
    width: 24,
    height: 24,
  },
  img20161128Wa00041728874RParent: {
    paddingHorizontal: GlobalStyles.Padding.padding_2xl,
    paddingVertical: GlobalStyles.Padding.padding_sm,
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    top: 56,
    width: 361,
    height: 1,
    left: 0,
  },
  frameParent: {
    top: 24,
    height: 56,
    width: 360,
    left: 0,
    position: "absolute",
  },
  statusbarParent: {
    height: 80,
    top: 0,
    width: 360,
    left: 0,
    position: "absolute",
  },
  lineView: {
    borderColor: "#e5e7eb",
    width: 327,
    height: 1,
  },
  rectangleView: {
    left: 118,
    width: 90,
    height: 23,
    backgroundColor: GlobalStyles.Color.white,
    top: 0,
    position: "absolute",
  },
  kategori1: {
    left: 85,
    height: 21,
    width: 155,
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  lineParent: {
    height: 23,
    width: 326,
    display: "none",
  },
  jelajahiSekarang: {
    fontSize: GlobalStyles.FontSize.headingH6Medium_size,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "500",
    width: 326,
  },
  pilihKategoriYangDiminati: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    width: 326,
  },
  categoryPortraitLargeChild: {
    width: 42,
    height: 42,
    borderRadius: GlobalStyles.Border.br_sm,
  },
  wisata2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  alam: {
    margin: GlobalStyles.Margin.margin_2xs,
  },
  wisataAlam: {
    alignSelf: "stretch",
    fontSize: GlobalStyles.FontSize.size_xs,
    lineHeight: 12,
    textAlign: "center",
    fontWeight: "500",
  },
  categoryPortraitLarge: {
    width: 81,
    paddingHorizontal: GlobalStyles.Padding.padding_xs,
    paddingVertical: 0,
  },
  categoryPortraitLargeParent: {
    flexDirection: "row",
  },
  kategori: {
    top: 1042,
    left: 15,
    position: "absolute",
  },
  articleListChild: {
    height: 1,
    width: 326,
  },
  keboKeboanIcon: {
    width: 64,
    height: 64,
    borderRadius: GlobalStyles.Border.br_sm,
  },
  upacaraAdatKeboKeboan202: {
    fontSize: GlobalStyles.FontSize.subtitleS1Regular_size,
    lineHeight: 21,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
  },
  oktober2022: {
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
  },
  ketuaKoniBeltimKamarudinMe: {
    lineHeight: 16,
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    fontSize: GlobalStyles.FontSize.captionCaptionRegular_size,
    display: "none",
  },
  informasiLainnya1: {
    color: GlobalStyles.Color.colBlitimBluePrimary,
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
    width: 326,
  },
  informasi: {
    top: 1566,
    left: 17,
    position: "absolute",
  },
  maskGroupInner: {
    backgroundColor: GlobalStyles.Color.colBlitimBluePrimary,
    top: 0,
    left: 0,
  },
  ellipseIcon: {
    left: 168,
    width: 174,
    height: 174,
  },
  maskGroupChild1: {
    top: 147,
    width: 66,
    height: 66,
    left: 0,
    position: "absolute",
  },
  maskGroupChild2: {
    left: 256,
    width: 36,
    height: 36,
    top: 0,
    position: "absolute",
  },
  groupIcon1: {
    top: 60,
    left: 285,
    width: 34,
    height: 38,
    position: "absolute",
  },
  groupIcon2: {
    top: 79,
    left: 155,
    width: 50,
    height: 56,
    position: "absolute",
  },
  groupIcon3: {
    top: 86,
    width: 87,
    height: 97,
    left: 0,
    position: "absolute",
  },
  groupIcon4: {
    left: 151,
    width: 41,
    height: 46,
    top: 0,
    position: "absolute",
  },
  jagaKesehatanDan: {
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
    fontWeight: "500",
  },
  selengkapnya1: {
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
    fontFamily: GlobalStyles.FontFamily.captionCaptionRegular,
  },
  jagaKesehatanDanKeselamatan: {
    top: 15,
    width: 252,
    height: 131,
    textShadowColor: "rgba(0, 0, 0, 0.35)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 0,
    left: 17,
    position: "absolute",
  },
  keyboardArrowRightIcon: {
    top: 124,
    left: 106,
    position: "absolute",
    overflow: "hidden",
  },
  maskGroup2: {
    top: 0,
    left: 0,
  },
  maskGroupWrapper: {
    top: 1335,
    left: 17,
  },
  pantaiTelukHijau1Icon: {
    width: 389,
    top: 0,
    left: 0,
  },
  destinationList2colChild: {
    height: "45.71%",
    top: "54.29%",
    backgroundColor: "transparent",
  },
  telukHijau: {
    lineHeight: 18,
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
    flex: 1,
    color: GlobalStyles.Color.gray050,
  },
  telukHijauWrapper: {
    top: 117,
    height: 58,
    paddingHorizontal: GlobalStyles.Padding.padding_sm,
    paddingVertical: GlobalStyles.Padding.padding_md,
    alignItems: "flex-end",
    width: 155,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  wisata6: {
    top: "76.57%",
  },
  destinationList2col: {
    left: 171,
    width: 155,
    top: 0,
  },
  hargaTiketMasukPantaiPulauIcon: {
    width: 155,
    top: 0,
    left: 0,
  },
  destinationList2col1: {
    left: 0,
  },
  wisata8: {
    top: "65.71%",
  },
  destinationListPortrait: {
    left: 171,
  },
  destinationList2colParent: {
    height: 366,
    width: 326,
  },
  buttonName: {
    color: GlobalStyles.Color.colBlitimBluePrimary,
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
  },
  buttonOutlineText: {
    height: 48,
    borderRadius: GlobalStyles.Border.br_sm,
    flexDirection: "row",
    width: 326,
  },
  rekomendasiLainnya: {
    color: GlobalStyles.Color.colBlitimBluePrimary,
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.subtitleS2Medium_size,
    fontFamily: GlobalStyles.FontFamily.subtitleS2Medium,
    fontWeight: "500",
    width: 326,
    display: "none",
  },
  frameContainer: {
    top: 472,
  },
  destinationListPortrait1: {
    top: 540,
    left: 24,
    width: 155,
  },
  navIconChild: {
    width: 4,
    height: 4,
    display: "none",
  },
  beranda: {
    color: GlobalStyles.Color.colBlitimBluePrimary,
  },
  navIcon: {
    paddingBottom: GlobalStyles.Padding.padding_2xs,
    justifyContent: "flex-end",
    width: 90,
    alignItems: "center",
    height: 56,
  },
  beranda1: {
    color: GlobalStyles.Color.gray_800,
  },
  navbarBottom: {
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    flexDirection: "row",
    backgroundColor: GlobalStyles.Color.tan,
    height: 56,
    width: 360,
    left: 0,
    position: "absolute",
  },
  homepage: {
    backgroundColor: GlobalStyles.Color.beige,
    height: 2067,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Homepage;
