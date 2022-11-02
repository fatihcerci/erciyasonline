<template>
  <q-page q-layout view="hHh lpR fFf" class="">

    <div style="height:500px;">


      <div class="col-md-12">
        <q-parallax
          src="~/assets/home-parallax3.jpg"
        >
            <div class="col-md-6 bg-transparent">
              <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                transition-duration="1000"
                transition="100"
                swipeable
                animated
                infinite
                :autoplay="autoplay"
                control-type="regular"
                control-color="accent"
                control-text-color="white"
                padding
                arrows
                height="300px"
                class="bg-transparent text-white rounded-borders"
                :style="{
                  width: getWidth()}"
              >
                <q-carousel-slide name="style" class="column no-wrap flex-center">
                  <q-icon name="help" size="56px" />
                  <div class="q-mt-md text-center font-30">
                    Gerçek Avukatlara Soru Sorun
                    <q-separator color="secondary" style="height:2px;"/>
                  </div>
                  <div class="q-mt-md text-center font-20">
                    Hemen sormak istediğiniz sorunuzu sorun. Uzman avukatlardan dilediğiniz desteği alın.
                    <br />
                    <br />
                    <q-btn color="secondary" unelevated glossy label="SORU SOR" icon="help" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="tv" class="column no-wrap flex-center">
                  <q-icon name="event_available" size="56px" />
                  <div class="q-mt-md text-center font-30">
                    Randevu Talep Edin
                    <q-separator color="secondary" style="height:2px;"/>
                  </div>
                  <div class="q-mt-md text-center font-20">
                    Hemen bir randevu talebi oluşturun. Uzman avukatlardan dilediğiniz desteği yüz yüze görüşerek alın.
                    <br />
                    <br />
                    <q-btn color="secondary" unelevated glossy label="RANDEVU TALEP ET" icon="event_available" />
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>


      </q-parallax>
      </div>


      <div class="row q-pt-md justify-center items-center q-gutter-md">
        <div class="col-md-2">
          <q-card square class="bg-primary text-white q-pa-none shadow-0">
            <q-card-section>
              <q-icon name="help" color="secondary" size="2.5rem" />
            </q-card-section>
            <q-card-section class="q-pt-none">
              Yasal sorunuzu hemen sorun, hemen cevabını alın
            </q-card-section>
            <q-separator dark />
          </q-card>
        </div>

        <div class="col-md-2">
          <q-card square class="bg-primary text-white q-pa-none shadow-0" style="opacity:0.9">
            <q-card-section>
              <q-icon name="event_available" color="secondary" size="2.5rem" />
            </q-card-section>
            <q-card-section class="q-pt-none">
              Randevu talebinizi oluşturun, birebir görüşmeye başlayın
            </q-card-section>
            <q-separator dark />
          </q-card>
        </div>

        <div class="col-md-2">
          <q-card square class="bg-primary text-white q-pa-none shadow-0" style="opacity:0.8">
            <q-card-section>
              <q-icon name="thumb_up" color="secondary" size="2.5rem" />
            </q-card-section>
            <q-card-section class="q-pt-none">
              Sorununuzu çözün ve yolunuza devam edin
            </q-card-section>
            <q-separator dark />
          </q-card>
        </div>
      </div>

      <div class="row q-pt-xl justify-center items-center q-gutter-md text-primary text-center ">
        <h5 class="text-bold">
          İhtiyacınız Olan Tüm Yasal Yardımı, <br>
          İstediğiniz Zaman İstediğiniz Yerden Alın!
        </h5>
      </div>


      <div class="row justify-center items-center q-gutter-sm">
        <div class="col-md-2">
          <q-item class="bg-grey-2 text-primary font-16 text-bold shadow-0" clickable>
            <q-item-section class="q-pa-lg">
              <q-item-label><q-icon name="expand_circle_down" color="secondary" style="transform: rotate(270deg);" size="1.8rem" /> Ticaret Hukuku</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-2">
          <q-item class="bg-grey-2 text-primary font-16 text-bold shadow-0" clickable>
            <q-item-section class="q-pa-lg">
              <q-item-label><q-icon name="expand_circle_down" color="secondary" style="transform: rotate(270deg);" size="1.8rem" /> Sözleşme Hukuku</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-2">
          <q-item class="bg-grey-2 text-primary font-16 text-bold shadow-0" clickable>
            <q-item-section class="q-pa-lg">
              <q-item-label><q-icon name="expand_circle_down" color="secondary" style="transform: rotate(270deg);" size="1.8rem" /> Fikri Haklar Hukuku</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-2">
          <q-item class="bg-grey-2 text-primary font-16 text-bold shadow-0" clickable>
            <q-item-section class="q-pa-lg">
              <q-item-label><q-icon name="expand_circle_down" color="secondary" style="transform: rotate(270deg);" size="1.8rem" /> İcra ve İflas Hukuku</q-item-label>
            </q-item-section>
          </q-item>
        </div>

      </div>

      <div class="row q-pt-md justify-center items-center q-gutter-sm">
        <div class="col-md-2">
          <q-item class="bg-grey-2 text-primary font-16 text-bold shadow-0" clickable>
            <q-item-section class="q-pa-lg">
              <q-item-label><q-icon name="expand_circle_down" color="secondary" style="transform: rotate(270deg);" size="1.8rem" /> İş Hukuku</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-2">
          <q-item class="bg-grey-2 text-primary font-16 text-bold shadow-0" clickable>
            <q-item-section class="q-pa-lg">
              <q-item-label><q-icon name="expand_circle_down" color="secondary" style="transform: rotate(270deg);" size="1.8rem" /> Kira Hukuku</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-2">
          <q-item class="bg-grey-2 text-primary font-16 text-bold shadow-0" clickable>
            <q-item-section class="q-pa-lg">
              <q-item-label><q-icon name="expand_circle_down" color="secondary" style="transform: rotate(270deg);" size="1.8rem" /> Aile Hukuku</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-2">
          <q-item class="bg-grey-2 text-primary font-16 text-bold shadow-0" clickable>
            <q-item-section class="q-pa-lg">
              <q-item-label><q-icon name="expand_circle_down" color="secondary" style="transform: rotate(270deg);" size="1.8rem" /> Tüketici Hukuku</q-item-label>
            </q-item-section>
          </q-item>
        </div>

      </div>

      <div class="row q-pt-md justify-center items-center">
          <q-item class="bg-grey-2 text-primary font-16 text-bold shadow-0" clickable>
            <q-item-section class="q-pa-lg">
              <q-item-label><q-icon name="expand_circle_down" color="secondary" style="transform: rotate(270deg);" size="1.8rem" /> Yukarıdakilerden hiçbiri değil. Derdimi anlatmak istiyorum.</q-item-label>
            </q-item-section>
          </q-item>
      </div>

      <div class="row q-pt-xl justify-center items-center">
        <div class="col-md-8">
          <q-toolbar class="bg-primary text-white shadow-0 q-pl-md q-pr-none">
            <h4 class="q-pl-xl bg-primary text-white font-18 shadow-0 q-pa-md">
                  Barolar Birliğinin Uygulamış Olduğu<br>
                  Asgari Tutardan Ücretlendirilmektedir.
            </h4>
            <q-space />

            <q-img src="~/assets/ucretlendirme.jpg" style="width:50%" />
          </q-toolbar>
        </div>

      </div>


      <div class="q-mt-md q-gutter-md">
        <q-parallax style="height:700px;">
          <template v-slot:media>
            <img src="~/assets/home-parallax4.jpg">
          </template>

          <template v-slot:content="scope">
            <div
              class="row justify-center text-white flex-center"
              :style="{
                opacity: 0.65 + (1 - scope.percentScrolled) * 0.75,
                top: (scope.percentScrolled * 60) + '%',
                left: 0,
                right: 0
              }"
            >


              <div class="col-md-5">
                  <div class="font-22">Üst Düzey Hizmet Kalitesi

                  </div>
                  <q-separator color="secondary" style="height:2px; width:48%"/>

                  <div class="font-14 q-pt-sm">
                      Hizmetimizin güvenli olduğunu garanti ediyoruz.<br>
                      Erciyas Avukatlık Bürosu online uygulamamıza<br>
                      ücretsiz üye olup kullanın ve istediğiniz zaman iptal edin.
                  </div>

              </div>

              <div class="col-md-7">
                <q-carousel
                  v-model="slideComment"
                  transition-prev="slide-right"
                  transition-next="slide-left"
                  transition-duration="1000"
                  transition="100"
                  swipeable
                  animated
                  infinite
                  :autoplay="autoplay"
                  control-type="regular"
                  control-color="accent"
                  control-text-color="white"
                  padding
                  arrows
                  height="300px"
                  class="bg-transparent text-white rounded-borders"
                >
                  <q-carousel-slide name="comment1" class="column no-wrap flex-center text-grey-9">
                    <q-card class="bg-white">
                      <div class="row">
                        <div class="col-md-6 text-left text-bold font-16 q-pt-xl q-pl-md">
                          Fatih Ç.
                        </div>
                        <div class="col-md-6 text-right text-bold font-16 q-pt-xl q-pr-md">
                          10.10.2022
                        </div>
                      </div>

                      <q-card-section horizontal>
                        <q-card-section class="q-pb-xl">
                          {{ lorem }}
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                  </q-carousel-slide>

                  <q-carousel-slide name="comment2" class="column no-wrap flex-center text-grey-9">
                    <q-card class="bg-white">
                      <div class="row">
                        <div class="col-md-6 text-left text-bold font-16 q-pt-xl q-pl-md">
                          Meryem Ç.
                        </div>
                        <div class="col-md-6 text-right text-bold font-16 q-pt-xl q-pr-md">
                          24.09.2022
                        </div>
                      </div>

                      <q-card-section horizontal>
                        <q-card-section class="q-pb-xl">
                          {{ lorem }}
                        </q-card-section>
                      </q-card-section>
                    </q-card>
                  </q-carousel-slide>

                </q-carousel>
              </div>

              <q-separator color="dark" style="height:2px; width:100%; opacity:0.5"/>

            </div>

            <div class="row q-pt-xl justify-center text-white flex-center items-center">
                <div class="font-22">
                  Hizmetinizi Seçin ve Hemen Başlayın
                </div>
            </div>

            <div class="row q-pt-md q-pb-md justify-center text-white flex-center items-center">
                <q-select dense color="primary" bg-color="white" filled v-model="serviceType" :options="serviceOptions" style="min-width:300px; min-height: 50px !important;">
                </q-select>
            </div>

            <q-btn unelevated glossy color="secondary" label="HEMEN BAŞLAYIN" icon="expand_circle_down" class="q-pl-md q-pr-md q-pt-sm q-pb-sm transform270" />

          </template>
        </q-parallax>
      </div>

      <div class="row justify-center text-white flex-center items-center" style="position:relative; top:-30px; z-index:99999; height: 100%;">
          <div class="col-md-10 bg-white" style="min-height:500px;">
            <div class="row q-pt-xl justify-center text-grey-9 flex-center items-center">
              <div class="font-22">
                <img src="~/assets//logo1.png" style="width:220px ;" >
              </div>
            </div>

            <div class="row q-pt-xl justify-center text-grey-9 flex-center items-center q-gutter-lg text-bold">
              <div class="font-14">
                Nasıl Çalışır?
              </div>
              <div class="font-14">
                Hakkımızda
              </div>
              <div class="font-14">
                Sıkça Sorulan Sorular
              </div>
              <div class="font-14">
                Blog
              </div>
              <div class="font-14">
                İletişim
              </div>
            </div>

            <div class="row q-pt-xl justify-center text-grey-9 flex-center items-center q-gutter-lg text-bold">
              <div class="font-20">
                <q-img src="~/assets/linkedin.png" style="width:30px" class="cursor-pointer" />
              </div>
              <div class="font-20">
                <q-img src="~/assets/email.png" style="width:30px" class="cursor-pointer" />
              </div>
            </div>

            <div class="row q-pt-xl justify-center text-grey-9 flex-center items-center q-gutter-lg text-bold">
              <q-separator color="grey-3" style="height:2px; width:80%;"/>
            </div>

            <div class="row q-pt-md text-grey-7" style="padding-left:9.4%">
              <div class="font-13">
                  Copyright © 2022 Erciyas Avukatlık Bürosu. Her hakkı saklıdır. <u>Kişisel Verilerin Korunması Hakkında Bilgilendirme</u>



              </div>

              <div class="font-13 q-pt-lg" style="width:90%">
                  Telif Hakkı © 2022 Erciyas Avukatlık Bürosu. Erciyas Online Avukatlık sistemi yalnızca bilgi ve yazılım sağlar.
                  Erciyas Online Avukatlık sistemi Avukatı "avukat sevk hizmeti" değildir ve yasal tavsiye vermez veya herhangi bir yasal temsilciliğe katılmaz.
                  Erciyas Online Avukatlık sistemi Avukatı bir hukuk firması ya da avukat veya hukuk firmmasının yerini almaz. Erciyas Oline Avukatlık sistemi Avukatının
                  Kullanımı Hizmet Şartlarımıza ve Gizlilik Politikamıza tabidir.
              </div>
            </div>


            <div class="row q-pt-md text-grey-7 text-right justify-end">
              <img src="~/assets/iyzico-footer.svg" style="width:550px;padding-right: 150px;" class="cursor-pointer" />
            </div>



          </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineAsyncComponent, onMounted, ref, toRefs, reactive } from "vue"
import { useQuasar } from 'quasar'
import apiService from "../services/apiService"


export default {
  name: "Home",
  components: {

  },
  mounted: async function () {
    //this.$tours['myTour'].start()
    /*
    try {
      const { fetch } = apiService()

      const bodyData = {
      }
      await fetch("users/test_connection", bodyData, true)

      //this.$tours['myTour'].start()
    } catch (e) {
    }
    */
  },
  setup() {
    onMounted(async () => {

    })

    return {
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#8855da',
        width: '5px',
        opacity: '0.75'
      },

      getWidth: () => {
        return (window.innerWidth - 300) + 'px'
      },

      slide: ref('style'),

      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum.',
      autoplay: ref(true),

      slideComment: ref('comment1'),

      serviceType: ref('Soru Sormak İstiyorum'),
      serviceOptions: [
        'Soru Sormak İstiyorum', 'Randevu Almak İstiyorum'
      ],


    }
  },
}
</script>

<style>
  .table-column {
    background: #f3f2f7 !important;
  }
  .image-bg {
    background: rgba(115,103,240,.25)!important;
  }

  .blog .q-hoverable:hover {
    color: #f8cc8b  !important;
  }

  .blog .q-hoverable:hover > .q-focus-helper {
    background-color: #f8cc8b  !important;
  }

  .tasks .q-hoverable:hover {
    color: #8bd0f8  !important;
  }

  .tasks .q-hoverable:hover > .q-focus-helper {
    background-color: #8bd0f8  !important;
  }

  .q-timeline__title {
    font-size: 1rem !important;
    font-weight: 600;
    color: #5e5873 !important
  }

  .q-field--filled .q-field__control {
    border-radius: unset !important;
  }

  .transform270 {
    border-radius: 0px !important;
  }

  .transform270 i {
    transform: rotate(270deg);
  }
</style>
