<template>
  <q-page q-layout view="hHh lpR fFf" class="">



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
              >
                <q-carousel-slide name="style" class="column no-wrap flex-center">
                  <q-icon name="help" size="56px" />
                  <div class="q-mt-md text-center font-30">
                    &nbsp;&nbsp;&nbsp;Gerçek Avukatlara Soru Sorun&nbsp;&nbsp;&nbsp;
                    <q-separator color="secondary" style="height:2px;"/>
                  </div>
                  <div class="q-mt-md text-center font-20">
                    {{ lorem }}
                    <br />
                    <br />
                    <q-btn color="secondary" label="SORU SOR" icon="help" />
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="tv" class="column no-wrap flex-center">
                  <q-icon name="event_available" size="56px" />
                  <div class="q-mt-md text-center font-30">
                    &nbsp;&nbsp;&nbsp;Randevu Talep Edin&nbsp;&nbsp;&nbsp;
                    <q-separator color="secondary" style="height:2px;"/>
                  </div>
                  <div class="q-mt-md text-center font-20">
                    {{ lorem }}
                    <br />
                    <br />
                    <q-btn color="secondary" label="RANDEVU TALEP ET" icon="event_available" />
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
              Sorununuzu çözün ve yolunuza devam Edin
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





      <div class="row q-pt-md justify-center items-center" style="min-height:500px;">


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
    debugger
    try {
      const { fetch } = apiService()

      const bodyData = {
      }
      await fetch("users/test_connection", bodyData, true)

      //this.$tours['myTour'].start()
    } catch (e) {
    }
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

      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      autoplay: ref(true),


      selection: ref(['id1', 'id4']),
      options: {
        chart: {
          id: 'toplamRandevuSayilari',
        },
        colors:['rgba(115, 103, 240, 0.85)'],
        dataLabels: {
          style: {
            colors: ['#4527a0']
          }
        },
        xaxis: {
          categories: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
        }
      },
      series: [{
        name: 'Toplam Randevu',
        data: [10, 15, 5, 7, 8, 10, 20, 10, 9, 25, 18, 12]
      }],

      steps: [
        {
          target: '.v-step-0',
          header: {
            title: 'Step 1',
          },
          content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
        },
        {
          target: '.v-step-1',
          header: {
            title: 'Step 2',
          },
          content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
        },
        {
          target: '.v-step-2',
          header: {
            title: 'Step 3',
          },
          content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
        },
        {
          target: '.v-step-3',
          header: {
            title: 'Step 4',
          },
          content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
        },
        {
          target: '.v-step-4',
          header: {
            title: 'Step 5',
          },
          content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
        }
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
</style>
