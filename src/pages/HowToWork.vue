<template>
    <q-page>
        <router-view />


        <div>
            <q-parallax style="height:500px;">
                <template v-slot:media>
                    <img src="~/assets/htw.jpg">
                </template>

                <template v-slot:content="scope">
                    <div class="row" :style="{
                      opacity: 0.65 + (1 - scope.percentScrolled) * 0.75,
                      top: (scope.percentScrolled * 60) + '%',
                      left: 0,
                      right: 0
                    }">

                        <div class="col text-white">

                            <div class="font-16 q-pb-md">NASIL ÇALIŞIR?
                            </div>
                            <q-separator color="secondary" style="height:2px; width:48%" />
                            <div class="font-30">Avukattan Hızlı Bir Şekilde<br> Yasal Tavsiye Alın
                                <strong class="text-secondary">.</strong>
                            </div>
                            <div class="font-14 q-pt-sm ">
                                İhtiyacınız Olan Tüm Yasal Yardımı,İstediğini Zaman İstediğiniz Yerden
                                Alın.
                            </div>
                        </div>

                    </div>
                </template>
            </q-parallax>

            <div class="row justify-center flex-center items-center ">
                <div class="col-md-8 justify-center items-center flex-center">
                    <div class="row justify-center  bg-white " style="position:relative; top:-100px;  height: 1300px;">
                        <div class="col-10 text-center text-primary q-pt-xs">
                            <h5 class="text-bold font-25">Nitelikli Avukatlardan Hızlı Cevaplar Alın.
                            </h5>
                        </div>

                        <div class="row" style="top:-90px;">
                            <div class="col vl">
                            </div>
                        </div>


                        <div class="row  items-center  flex flex-center  ">
                            <div class="col-sm-8 " style="position:relative;">
                                <div class="row">
                                    <div class="col q-pb-xl">

                                        <q-card square class="a2 text-white q-mb-xl q-pa-md ">
                                            <q-card-section horizontal>
                                                <q-card-section class="col-2 flex flex-center">
                                                    <span class="material-icons"
                                                        style="color:#c8930d; font-size:50px; opacity: 0.7;">
                                                        quiz
                                                    </span>
                                                </q-card-section>


                                                <q-card-section class="q-pt-xs">
                                                    <div class="col q-mt-md">
                                                        <div class="text-h5 q-pa-md ">Yasal Tavsiye Alın.</div>
                                                        <div class="text-white q-pa-md " style="opacity:0.7 ;">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </div>
                                                    </div>
                                                </q-card-section>
                                            </q-card-section>
                                        </q-card>
                                        <div class="col items-center flex flex-center">
                                            <q-card-section style="background: #fff;height: 30px;padding:0px">
                                                <span class="material-icons" style="color:#12415d; font-size: 30px;">
                                                    expand_circle_down
                                                </span>
                                            </q-card-section>

                                        </div>
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col q-pb-xl">
                                        <q-card square class="a1 text-white q-mb-xl q-pa-md ">
                                            <q-card-section horizontal>
                                                <q-card-section class="col-2 flex flex-center">
                                                    <span class="material-icons"
                                                        style="color:#c8930d; font-size:50px; opacity: 0.7;">
                                                        file_copy
                                                    </span>
                                                </q-card-section>


                                                <q-card-section class="q-pt-xs">
                                                    <div class="col q-mt-md">
                                                        <div class="text-h5 q-pa-md ">Belge İncelemesi.</div>
                                                        <div class="text-whited q-pa-md " style="opacity:0.7 ;">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </div>
                                                    </div>
                                                </q-card-section>
                                            </q-card-section>
                                        </q-card>
                                        <div class="col items-center flex flex-center">
                                            <q-card-section style="background: #fff;height: 30px;padding:0px">
                                                <span class="material-icons" style="color:#12415d; font-size: 30px;">
                                                    expand_circle_down
                                                </span>
                                            </q-card-section>

                                        </div>
                                    </div>
                                </div>



                                <div class="row">
                                    <div class="col">
                                        <q-card square class="a3 text-white q-mb-xl q-pa-md ">
                                            <q-card-section horizontal>
                                                <q-card-section class="col-2 flex flex-center">
                                                    <span class="material-icons"
                                                        style="color:#c8930d; font-size:50px; opacity: 0.7;">
                                                        <span class="material-icons-round">
                                                            verified_user
                                                        </span>
                                                    </span>
                                                </q-card-section>


                                                <q-card-section class="q-pt-xs">
                                                    <div class="col q-mt-md">
                                                        <div class="text-h5 q-pa-md ">Korunmaya Devam Edin.</div>
                                                        <div class="text-whited q-pa-md " style="opacity:0.7 ;">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        </div>
                                                    </div>
                                                </q-card-section>
                                            </q-card-section>
                                        </q-card>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>





            <div class="row offset-2  q-pb-md  justify-center flex flex-center ">
                <div class="col-sm-4 bg-white q-pa-lg">
                    <div class="font-30 q-pb-md  q-pa-lg">Üst Düzey Hizmet Kalitesi
                    </div>
                    <q-separator class="q-ml-lg"  color="secondary" style="height:2px; width:48%" />
                    <div class="font-14 q-pa-lg">
                        <p class="font-15">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
                            dolorem
                            voluptatibus earum assumenda temporibus veritatis mollitia quis, magnam rerum.
                            Repellat, quos tempora. Cumque eligendi ea necessitatibus. Minima, eum officia.
                            Quidem!</p>
                    </div>

                </div>
                <div class="col-sm-4 border">
                    <q-parallax src="~/assets/home-parallax3.jpg" style="height: 270px; border-left: 0cm;">
                        <h5 class="text-white text-center">Hadi Sorunuzu Sormaya Başlayın. </h5>

                        <q-btn class="shadow-0" color="secondary" label="Hemen Danışın" />
                    </q-parallax>
                </div>
            </div>




            <div class="row justify-center text-white flex-center items-center q-pt-xl q-pb-0 "
                style="position:relative; ">
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
                        <q-separator color="grey-3" style="height:2px; width:80%;" />
                    </div>

                    <div class="row q-pt-md text-grey-7" style="padding-left:9.4%">
                        <div class="font-13">
                            Copyright © 2022 Erciyas Avukatlık Bürosu. Her hakkı saklıdır. <u>Kişisel Verilerin
                                Korunması Hakkında Bilgilendirme</u>



                        </div>

                        <div class="font-13 q-pt-lg" style="width:90%">
                            Telif Hakkı © 2022 Erciyas Avukatlık Bürosu. Erciyas Online Avukatlık sistemi yalnızca bilgi
                            ve yazılım sağlar.
                            Erciyas Online Avukatlık sistemi Avukatı "avukat sevk hizmeti" değildir ve yasal tavsiye
                            vermez veya herhangi bir yasal temsilciliğe katılmaz.
                            Erciyas Online Avukatlık sistemi Avukatı bir hukuk firması ya da avukat veya hukuk
                            firmmasının yerini almaz. Erciyas Oline Avukatlık sistemi Avukatının
                            Kullanımı Hizmet Şartlarımıza ve Gizlilik Politikamıza tabidir.
                        </div>
                    </div>


                    <div class="row q-pt-md text-grey-7 text-right justify-end">
                        <img src="~/assets/iyzico-footer.svg" style="width:550px;padding-right: 150px;"
                            class="cursor-pointer" />
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
    name: "HowToWork",

}

</script>

<style>
.vl {
    border-left: 1px solid #12415d;
    height: 1100px;
    position: absolute;
    left: 50%;
    top: 150px;
    opacity: 0.5;
}

.v2 {
    color: #12415d;
    position: absolute;

    opacity: 0.5;
    font-size: 20px;
}

.a1 {
    background-image: url(../assets/a1.png);
}

.a2 {
    background-image: url(../assets/a2.png);
}

.a3 {
    background-image: url(../assets/a3.png);
}
</style>

