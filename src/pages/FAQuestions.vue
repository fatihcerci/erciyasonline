// eslint-disable-next-line vue/valid-template-root
<template>

    <q-page>
        <router-view />

        <div>
            <q-parallax style="height:400px;">
                <template v-slot:media>
                    <img src="~/assets/faq2.jpg">
                </template>

                <template v-slot:content="scope">
                    <div class="row" :style="{
                      opacity: 0.65 + (1 - scope.percentScrolled) * 0.75,
                      top: (scope.percentScrolled * 60) + '%',
                      left: 0,
                      right: 0,
                      width: '50%'
                    }">

                        <div class="text-white">

                            <div class="font-16 q-pb-md">SIK SORULAN SORULAR
                            </div>
                            <q-separator color="secondary" style="height:2px; width:45%" />
                            <div class="font-32">Tavsiye,Yanıt ve Bilgi Alın
                                <strong class="text-secondary">.</strong>
                            </div>
                            <div class="font-14 q-pt-sm ">
                                Bu sayfada merak ettiğiniz sık sorulan sorulara cevap bulabilirsiniz.
                            </div>
                        </div>

                    </div>
                </template>
            </q-parallax>




            <div class="row justify-center flex-center items-center ">
                <div class="col-md-6 justify-center items-center flex-center">
                    <div class="row  bg-white " style="position:relative; top:-60px;  ">
                        <div class="col-10  text-primary ">
                            <h4 class="text-bold font-24 q-pl-lg" style="line-height:1rem;">Kullanıcı İşlemleri <strong
                                    class="text-secondary">.</strong>
                            </h4>

                        </div>



                        <div class="col-sm-12">
                            <q-list>
                                <div>
                                    <q-expansion-item group="usergroup"
                                        label="Hesabımı Nasıl Kapatabilirim ?" 
                                        icon="help_outline"
                                        expand-icon="add_circle_outline"
                                        expanded-icon="remove_circle_outline" 
                                        header-class="text-white bg-primary font-20 col-sm-10 q-pa-lg
                                         ">

                                        <q-card>
                                            <q-card-section class="font-18 text-grey-9">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dicta
                                                iste tenetur magnam sunt vitae itaque! Incidunt laborum, veritatis
                                                quo,
                                                consequatur ab numquam nihil alias libero quaerat, sequi modi
                                                debitis.
                                            </q-card-section>
                                        </q-card>
                                    </q-expansion-item>
                                </div>
                                <q-separator />

                                <q-expansion-item group="usergroup" icon="add_circle_outline"
                                    label="Nasıl Soru Sorabilirim ?"
                                    header-class="text-white bg-primary font-20 col-sm-10 q-pa-lg ">
                                    <q-card>
                                        <q-card-section>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius
                                            reprehenderit eos corrupti
                                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
                                            architecto suscipit iste
                                            eveniet doloribus ullam aliquid.
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>

                                <q-separator />

                                <q-expansion-item group="usergroup" icon="add_circle_outline"
                                    label="Üyeliğimi Nasıl İptal Edebilirim?"
                                    header-class="text-white bg-primary font-20 col-sm-10 q-pa-lg">
                                    <q-card>
                                        <q-card-section>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius
                                            reprehenderit eos corrupti
                                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
                                            architecto suscipit iste
                                            eveniet doloribus ullam aliquid.
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>

                                <q-separator />

                            </q-list>


                        </div>
                    </div>
                </div>


            </div>


            <div class="row justify-center flex-center items-center  q-pt-xs">
                <div class="col-md-6 justify-center items-center flex-center">
                    <div class="row  bg-white " style="position:relative; ">
                        <div class="col-10  text-primary ">
                            <h4 class="text-bold font-24 q-pl-lg" style="line-height:1rem;">Teknik Konular <strong
                                    class="text-secondary">.</strong>
                            </h4>

                        </div>


                        <div class="col-sm-12">
                            <q-list>
                                <div>
                                    <q-expansion-item group="technicgroup" label="Hesabımı Nasıl Kapatabilirim ?"
                                        icon=" add_circle_outline" 
                                        header-class="text-white bg-primary font-20 col-sm-10 q-pa-lg ">

                                        <q-card>
                                            <q-card-section class="font-18 text-grey-9">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, dicta
                                                iste tenetur magnam sunt vitae itaque! Incidunt laborum, veritatis
                                                quo,
                                                consequatur ab numquam nihil alias libero quaerat, sequi modi
                                                debitis.
                                            </q-card-section>
                                        </q-card>
                                    </q-expansion-item>
                                </div>
                                <q-separator />

                                <q-expansion-item group="technicgroup" icon="add_circle_outline"
                                    label="Nasıl Soru Sorabilirim ?"
                                    header-class="text-white bg-primary font-20 col-sm-10 q-pa-lg ">
                                    <q-card>
                                        <q-card-section>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius
                                            reprehenderit eos corrupti
                                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
                                            architecto suscipit iste
                                            eveniet doloribus ullam aliquid.
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>

                                <q-separator />

                                <q-expansion-item group="technicgroup" icon="add_circle_outline"
                                    label="Üyeliğimi Nasıl İptal Edebilirim?"
                                    header-class="text-white bg-primary font-20 col-sm-10 q-pa-lg">
                                    <q-card>
                                        <q-card-section>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius
                                            reprehenderit eos corrupti
                                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
                                            architecto suscipit iste
                                            eveniet doloribus ullam aliquid.
                                        </q-card-section>
                                    </q-card>
                                </q-expansion-item>

                                <q-separator />

                            </q-list>


                        </div>

























                    </div>
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

import { ref } from 'vue'

export default {
    name: "faquestions",




    setup() {
        return {
            expanded: ref(false)
        }
    }
}

</script>