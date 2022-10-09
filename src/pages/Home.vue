<template>
  <q-page q-layout view="hHh lpR fFf" class="q-pt-md q-pl-md q-pr-md">
    <v-tour name="myTour" :steps="steps"></v-tour>

    <q-card flat class="shadow-25 q-pb-sm">
      <q-card-section class="row">
        <div class="col-md-2 ">
          <q-item class="cursor-pointer q-pa-none q-pt-sm v-step-1">
            <q-item-section avatar>
              <q-btn flat round size="lg" icon="groups" class="bg-deep-purple-2 text-deep-purple-9  " />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6 text-bold">25</q-item-label>
              <q-item-label class="text-grey-6 font-13">Tüm Hastalar</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-2 ">
          <q-item class="cursor-pointer q-pa-none q-pt-sm v-step-2">
            <q-item-section avatar>
              <q-btn flat round size="lg" icon="pending_actions" class="bg-yellow-2 text-yellow-9 " />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6 text-bold">10</q-item-label>
              <q-item-label class="text-grey-6 font-13">Bekleyen İstekler &nbsp;&nbsp;</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-2">
          <q-item class="cursor-pointer q-pa-none q-pt-sm v-step-3">
            <q-item-section avatar>
              <q-btn flat round size="lg" icon="pending" class="bg-red-2 text-red-9 " />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6 text-bold">3</q-item-label>
              <q-item-label class="text-grey-6 font-13">İşlem Bekleyen Hastalar</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-2">
          <q-item class="cursor-pointer q-pa-none q-pt-sm">
            <q-item-section avatar>
              <q-btn flat round size="lg" icon="edit" class="bg-orange-2 text-orange-9" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6 text-bold">2</q-item-label>
              <q-item-label class="text-grey-6 font-13">İşlem Yapan Hastalar</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-2">
          <q-item class="cursor-pointer q-pa-none q-pt-sm">
            <q-item-section avatar>
              <q-btn flat round size="lg" icon="check" class="bg-green-2 text-green-9" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6 text-bold">2</q-item-label>
              <q-item-label class="text-grey-6 font-13">İşlemi Bitiren Hastalar</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-2">
          <q-item class="cursor-pointer q-pa-none q-pt-sm">
            <q-item-section avatar>
              <q-btn flat round size="lg" icon="event" class="bg-cyan-2 text-cyan-9" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6 text-bold">5</q-item-label>
              <q-item-label class="text-grey-6 font-13">Bekleyen Randevular</q-item-label>
            </q-item-section>
          </q-item>
        </div>


      </q-card-section>


    </q-card>

    <div class="q-pt-md" v-bind:class="{ 'row' : $q.screen.gt.sm}" >

      <div class="col-md-4" v-bind:class="{ 'q-pr-md' : $q.screen.gt.sm}">
        <q-card class="shadow-25" style="min-height: 486px">
          <img height="158" class="image-bg" src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/email.de935b8f.svg">
          <!-- <img height="158" class="image-bg" src="~/assets/meeting.svg"> -->

          <q-card-section class="row">
            <q-item class="col-md-1 cursor-pointer q-pa-none" style="border-right: 1px solid #d8d6de; width:60px;">
              <q-item-section>
                <q-item-label class="font-16 text-grey-8 text-bold text-center">11</q-item-label>
                <q-item-label class="font-16 text-grey-8 text-bold text-center">TEM</q-item-label>
              </q-item-section>
            </q-item>


            <q-item class="col-md-10 cursor-pointer q-pa-none q-pl-md">
              <q-item-section>
                <q-item-label class="font-18 card-text-color text-bold">Hasta ile Randevu</q-item-label>
                <q-item-label class="font-14 card-text-color">Planlanan görüşme randevusu</q-item-label>
              </q-item-section>
            </q-item>

          </q-card-section>

          <q-card-section class="row q-pt-none q-ml-sm">
            <q-item class="col-md-1 cursor-pointer q-pa-none q-pt-sm">
              <q-item-section>
                <q-btn flat size="md" icon="person" class="image-bg text-deep-purple-5" style="width:40px" />
              </q-item-section>


            </q-item>

            <q-item class="col-md-10 cursor-pointer q-pa-none q-pl-md q-pt-sm">
              <q-item-section>
                <q-item-label class="card-text-color font-15">Fatih Çerçi</q-item-label>
                <q-item-label class="card-text-color font-12">0(507) 216 5824</q-item-label>
              </q-item-section>
            </q-item>

          </q-card-section>

          <q-card-section class="row q-pt-none q-ml-sm">
            <q-item class="col-md-1 cursor-pointer q-pa-none q-pt-sm">
              <q-item-section>
                <q-btn flat size="md" icon="event" class="image-bg text-deep-purple-5" style="width:40px" />
              </q-item-section>


            </q-item>

            <q-item class="col-md-10 cursor-pointer q-pa-none q-pl-md q-pt-sm">
              <q-item-section>
                <q-item-label class="card-text-color font-15">Pzt, Tem 11, 2022</q-item-label>
                <q-item-label class="card-text-color font-12">10:00 - 12:00</q-item-label>
              </q-item-section>
            </q-item>

          </q-card-section>

          <q-card-section class="row q-pt-none q-ml-sm">
            <q-item class="col-md-1 cursor-pointer q-pa-none q-pt-sm">
              <q-item-section>
                <q-btn flat size="md" icon="place" class="image-bg text-deep-purple-5" style="width:40px" />
              </q-item-section>


            </q-item>

            <q-item class="col-md-10 cursor-pointer q-pa-none q-pl-md q-pt-sm">
              <q-item-section>
                <q-item-label class="card-text-color font-15">Ofis</q-item-label>
                <q-item-label class="card-text-color font-12">Çankaya, Ankara</q-item-label>
              </q-item-section>
            </q-item>

          </q-card-section>
        </q-card>

      </div>

      <div class="col-md-4" v-bind:class="{ 'q-pr-md' : $q.screen.gt.sm, 'q-pt-md' : !$q.screen.gt.sm}">
        <q-card class="shadow-25" style="min-height: 486px">

          <q-card-section>
            <q-item class="cursor-pointer q-pa-none q-pt-sm">
              <q-item-section avatar>
                <q-btn flat round size="md" icon="view_timeline" class="bg-deep-purple-2 text-deep-purple-9" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="font-18 card-text-color text-bold">Son Aktiviteler</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label class=""><q-btn color="deep-purple-5" unelevated glossy label="Tümünü Görüntüle" size="sm" /></q-item-label>
              </q-item-section>

            </q-item>
          </q-card-section>

          <q-scroll-area
            :thumb-style="thumbStyle"
            style="height: 405px;"
          >
            <q-timeline color="primary" class="q-pl-sm">
              <q-timeline-entry
                title="Yeni Randevu İsteği"
                subtitle="12.07.2022 12:32"
              >
                <div>
                  Fatih Çerçi tarafından yeni bir istek iletildi
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                title="İşlem Tamamlama"
                subtitle="10.07.2022 19:28"
              >
                <div>
                  Meryem Çerçi fonksiyonel tıp formunu doldurdu
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                title="Dosya yükleme"
                subtitle="10.07.2022 12:57"
              >
                <div>
                  Ali Veli RND232524 nolu işlem için dosya yükledi
                </div>
              </q-timeline-entry>



            </q-timeline>
          </q-scroll-area>


        </q-card>
      </div>


      <div class="col-md-4" v-bind:class="{ 'q-pt-md' : !$q.screen.gt.sm}">
        <q-card class="shadow-25" style="min-height: 486px">

          <q-card-section>
            <q-item class="cursor-pointer q-pa-none q-pt-sm">
              <q-item-section avatar>
                <q-btn flat round size="md" icon="edit" class="bg-cyan-2 text-cyan-9" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="font-18 card-text-color text-bold">Yapılacaklar</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label class=""><q-btn color="cyan-5" unelevated glossy label="Yeni Ekle" size="sm" /></q-item-label>
              </q-item-section>

            </q-item>

          </q-card-section>

          <q-list bordered class="tasks">

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="selection" val="id1" color="cyan-7" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-grey-5 text-strike">Task 1</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption class="text-bold"><q-badge color="red-5">High</q-badge> </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="selection" val="id2" color="cyan-7" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Task 2</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption class="text-bold"><q-badge color="green-5">Low</q-badge> </q-item-label>
              </q-item-section>

            </q-item>



            <q-separator />

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="selection" val="id3" color="cyan-7" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Task 3</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption class="text-bold"><q-badge color="orange-5">Medium</q-badge> </q-item-label>
              </q-item-section>

            </q-item>

            <q-separator />

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="selection" val="id4" color="cyan-7" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-grey-5 text-strike">Task 4</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption class="text-bold"><q-badge color="orange-5">Medium</q-badge> </q-item-label>
              </q-item-section>

            </q-item>

            <q-separator />

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="selection" val="id5" color="cyan-7" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Task 5</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption class="text-bold"><q-badge color="red-5">High</q-badge> </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="selection" val="id6" color="cyan-7" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Task 6</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption class="text-bold"><q-badge color="green-5">Low</q-badge> </q-item-label>
              </q-item-section>

            </q-item>

            <q-separator />

             <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="selection" val="id7" color="cyan-7" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Task 7</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption class="text-bold"><q-badge color="green-5">Low</q-badge> </q-item-label>
              </q-item-section>
            </q-item>


          </q-list>


        </q-card>
      </div>



    </div>

    <div class="q-pt-md q-pb-md" v-bind:class="{ 'row' : $q.screen.gt.sm}" >

      <div class="col-md-4" v-bind:class="{ 'q-pr-md' : $q.screen.gt.sm}">
        <q-card class="shadow-25" style="min-height: 420px">

          <q-card-section>
            <q-item class="cursor-pointer q-pa-none q-pt-sm">
              <q-item-section avatar>
                <q-btn flat round size="md" icon="feed" class="bg-orange-2 text-orange-9" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="font-18 card-text-color text-bold">Bloglar</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label class=""><q-btn color="orange-5" unelevated glossy label="Tümünü Görüntüle" size="sm" /></q-item-label>
              </q-item-section>
            </q-item>

          </q-card-section>

          <q-list bordered class="blog">

            <q-item clickable ripple class="q-pa-md">
              <q-item-section top thumbnail class="q-pl-sm">
                <img src="https://placeimg.com/500/300/p23241">
              </q-item-section>

              <q-item-section>
                <q-item-label class="font-16 text-bold card-text-color">Blog 1</q-item-label>
                <q-item-label caption class="text-bold">Secondary line text. Lorem ipsum dolor sit amet...</q-item-label>
                <q-item-label caption class="text-bold font-13">Prof.Dr.Fatih Çerçi</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption class="text-bold">12.07.2022</q-item-label>
              </q-item-section>

            </q-item>

            <q-separator />

            <q-item clickable ripple class="q-pa-md">
              <q-item-section top thumbnail class="q-pl-sm">
                <img src="https://placeimg.com/500/300/p2425252">
              </q-item-section>

              <q-item-section>
                <q-item-label class="font-16 text-bold card-text-color">Blog 2</q-item-label>
                <q-item-label caption class="text-bold">Secondary line text. Lorem ipsum dolor sit amet</q-item-label>
                <q-item-label caption class="text-bold font-13">Prof.Dr.Fatih Çerçi</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption class="text-bold">10.07.2022</q-item-label>
              </q-item-section>

            </q-item>

            <q-separator />

            <q-item clickable ripple class="q-pa-md">
              <q-item-section top thumbnail class="q-pl-sm">
                <img src="https://placeimg.com/500/300/p125213331">
              </q-item-section>

              <q-item-section>
                <q-item-label class="font-16 text-bold card-text-color">Blog 3</q-item-label>
                <q-item-label caption class="text-bold">Secondary line text. Lorem ipsum dolor sit amet</q-item-label>
                <q-item-label caption class="text-bold font-13">Prof.Dr.Fatih Çerçi</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption class="text-bold">09.07.2022</q-item-label>
              </q-item-section>

            </q-item>

            <q-separator />

            <q-item clickable ripple class="q-pa-md">
              <q-item-section top thumbnail class="q-pl-sm">
                <img src="https://placeimg.com/500/300/p125252">
              </q-item-section>

              <q-item-section>
                <q-item-label class="font-16 text-bold card-text-color">Blog 4</q-item-label>
                <q-item-label caption class="text-bold">Secondary line text. Lorem ipsum dolor sit amet</q-item-label>
                <q-item-label caption class="text-bold font-13">Prof.Dr.Fatih Çerçi</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption class="text-bold">26.06.2022</q-item-label>
              </q-item-section>

            </q-item>

            <q-separator />
          </q-list>


        </q-card>
      </div>

      <div class="col-md-8" v-bind:class="{ 'q-pt-md' : !$q.screen.gt.sm}"  >
        <q-card flat class="shadow-25 q-pb-sm" >
          <q-card-section>
            <q-item class="cursor-pointer q-pa-none q-pt-sm">
              <q-item-section avatar>
                <q-btn flat round size="md" icon="bar_chart" class="bg-deep-purple-2 text-deep-purple-9" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="font-18 card-text-color text-bold">Hasta Sayısı</q-item-label>
              </q-item-section>
            </q-item>

          </q-card-section>

          <q-card-section>
            <apexchart type="bar" height="350" :options="options" :series="series"></apexchart>
          </q-card-section>
        </q-card>
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
