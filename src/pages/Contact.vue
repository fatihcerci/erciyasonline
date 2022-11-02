<template>
    <q-page>
        <div style="height:500px;">
            <q-parallax style="height:500px; ">
                <template v-slot:media>
                    <img src="~/assets/contact/c1a.jpg">
                </template>

                <template v-slot:content="scope">
                    <div class="row" :style="{
                        opacity: 0.65 + (1 - scope.percentScrolled) * 0.75,
                        top: (scope.percentScrolled * 60) + '%',
                        left: 0,
                        right: 0
                    
                    }">


                    </div>
                </template>

            </q-parallax>

            <div style="position:relative; top: -250px;">

                <div class="row items-center justify-center  offset-2">

                    <div class=" col-sm-12 col-md-10 items-center justify-center flex flex-center ">

                        <div class=" row items-center justify-center flex flex-center">
                            <div class="col-sm-6" style="padding-bottom:20%">
                                <div class="text-white">
                                    <div class="font-18 q-pb-md text-white">İLETİŞİM
                                    </div>
                                    <q-separator color="secondary" style="height:2px; width:45%" />
                                    <div class="font-30">Dilediğiniz Zaman <br> Bize Ulaşabilirsiniz
                                        <strong class="text-secondary">.</strong>
                                    </div>
                                    <div class="font-14 q-pt-sm ">
                                        Yardım etmek için buradayız. Daha fazla cevap için <br> lütfen
                                        <strong class="text-secondary">Sık Sorulan Sorular</strong> bölümünü ziyaret
                                        edin.
                                    </div>
                                </div>
                                <div class="row  q-pt-xl">
                                    <div class="col-12 q-pt-lg">
                                        <h4 class="font-24" style="line-height:1rem">Adres</h4>
                                        <h4 class="font-16" style="line-height:1.5rem">
                                            Oğuzlar Mahallesi 1364.Sokak No:4 Kat:2 Balgat<br>
                                            Çankaya/ANKARA
                                        </h4> 

                                        <q-btn class="q-mt-xs q-pa-sm" color="secondary" style="min-width:250px" unelevated glossy label="Haritada Gör"
                                            icon="navigate_next" />
                                        <div class="row">
                                            <div class="col">
                                                <h4 class="font-24" style="line-height:1rem">Telefon / Fax</h4>
                                                <h4 class="font-16" style="line-height:1.5rem">
                                                    <span>T:+90 312 905 50 50 </span>
                                                    <p>T:+90 312 230 09 13</p>
                                                </h4> 
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h4 class="font-24" style="line-height:1rem">E-Posta</h4>
                                                <h4 class="font-16" style="line-height:1.5rem">
                                                    erciyas@erciyas.av.tr
                                                </h4> 
                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>



                            <div class="col-sm-12 col-md-6">
                                <div class="row" >
                                    <q-card style="width: 500px;">
                                        <div class="q-pr-xl q-pl-xl q-pb-lg q-mt-0 justify-center items-center">

                                            <div>
                                                <h5 class="font-26">İletişim Formu</h5>

                                                <q-form @submit="onSubmit" @reset="onReset">
                                                    <p>Adınız Soyadınız <strong class="text-secondary">*</strong></p>
                                                    <q-input filled v-model="name" label="Adınızı Soyadınızı Girin"
                                                        lazy-rules
                                                        :rules="[val => val && val.length > 0 || 'Boş Geçilemez']" />

                                                    <p>E-posta Adresiniz <strong class="text-secondary">*</strong></p>
                                                    <q-input filled type="email" v-model="eposta"
                                                        label="E-posta Adresinizi Girin " 
                                                        lazy-rules 
                                                        :rules="[val => val && val.length > 0 || 'Boş Geçilemez']" 
                                                    />

                                                    <p>Konu <strong class="text-secondary">*</strong></p>
                                                    <q-select filled color="primary" v-model="serviceType" :options="serviceOptions"
                                                        lazy-rules
                                                        :rules="[val => val && val != 'Konu Seçiniz' && val.length > 0 || 'Boş Geçilemez']" >
                                                    </q-select>
                                                    <!--
                                                    <q-input filled v-model="konu" label="Konu Seçiniz" 
                                                        lazy-rules
                                                        :rules="[val => val && val.length > 0 || 'Boş Geçilemez']" 
                                                    />
                                                    -->



                                                    <p>Mesajınız <strong class="text-secondary">*</strong></p>
                                                    <q-input filled type="textarea" v-model="mesaj"
                                                        label="Bir mesaj Yazın" 
                                                        lazy-rules 
                                                        :rules="[val => val && val.length > 0 || 'Boş Geçilemez']" 
                                                    />

                                                    <div>
                                                        <q-btn icon="navigate_next" class="q-pa-sm" unelevated glossy label="Gönder"
                                                            type="submit" color="secondary" style="width: 400px" />

                                                    </div>
                                                </q-form>

                                            </div>

                                        </div>



                                    </q-card>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>



            <div class="row justify-center text-white flex-center items-center q-pb-0 "
                style="position:relative; top:-250px;">
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

import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
    name: "contact",
    setup() {
        const $q = useQuasar()

        const name = ref(null)
        const eposta = ref(null)
        const konu = ref(null)
        const mesaj = ref(null)

        const accept = ref(false)

        return {
            name,
            eposta,
            konu,
            mesaj,

            serviceType: ref('Konu Seçiniz'),
            serviceOptions: [
                'Soru Sormak İstiyorum', 'Randevu Almak İstiyorum'
            ],

            onSubmit() {
                if (accept.value !== true) {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'You need to accept the license and terms first'
                    })
                }
                else {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Submitted'
                    })
                }
            },

            onReset() {
                name.value = null
                age.value = null
                accept.value = false
            }
        }
    }
}

</script>