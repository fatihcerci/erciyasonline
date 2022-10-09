<template>
  <q-page q-layout view="hHh lpR fFf" class="">



      <div class="col-md-12">
        <q-card class="shadow-25 bg-primary" style="min-height: 340px; opacity:0.9; border-radius: 0px;">
          <q-card-section>
            <q-item>
              <q-item-section>
                <div class="q-pa-md q-gutter-sm text-center">
                  <q-btn color="accent" class="q-pa-md text-white" unelevated icon="help" label="SORU SOR" />
                  <q-btn color="accent" class="q-pa-md text-white" unelevated icon="event_available" label="RANDEVU TALEP ET" />
                </div>
              </q-item-section>
            </q-item>
          </q-card-section>

          <q-card-section>
            <q-carousel
              v-model="slide"
              transition-prev="scale"
              transition-next="scale"
              swipeable
              animated
              infinite
              :autoplay="autoplay"
              control-color="white"
              navigation
              padding
              arrows
              height="300px"
              class="bg-primary text-white rounded-borders"
            >
              <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="help" size="56px" />
                <div class="q-mt-md text-center font-30">
                  Gerçek Avukatlara Soru Sorun!
                  <q-separator color="secondary" style="height:2px;"/>
                </div>
                <div class="q-mt-md text-center font-20">
                  {{ lorem }}
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <q-icon name="help" size="56px" />
                <div class="q-mt-md text-center font-30">
                  Randevu Talep Edin
                  <q-separator color="secondary" style="height:2px;"/>
                </div>
                <div class="q-mt-md text-center font-20">
                  {{ lorem }}
                </div>
              </q-carousel-slide>
            </q-carousel>
          </q-card-section>

        </q-card>
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
