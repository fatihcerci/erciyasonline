<template>

    <router-view />


    <div>

        <q-parallax style="height:500px;">
            <template v-slot:media>
                <img src="~/assets/blog/b7.jpg">
            </template>

            <template v-slot:content="scope">
                <div class="row" :style="{
                  opacity: 0.65 + (1 - scope.percentScrolled) * 0.75,
                  top: (scope.percentScrolled * 60) + '%',
                  left: 0,
                  right: 0,
                  width: '57%'
                }">

                    <div class="col-sm-12 col text-white">

                        <div class="font-16 q-pb-md">BLOG
                        </div>
                        <q-separator color="secondary" style="height:2px; width:20%" />
                        <div class="font-30">Yararlı Konular
                            <strong class="text-secondary">.</strong>
                        </div>
                        <div class="font-18 q-pt-md ">
                            <p> Sizlere yararlı olabilecek yazıları bu başlık altında inceleyebilirsiniz.
                            </p>

                        </div>

                    </div>

                </div>

            </template>
        </q-parallax>

    </div>

<div class="container" style="position:relative; top: -100px;">

    <div class="row items-center justify-center q-gutter-md  offset-2" >

        <div class=" col-sm-12 col-md-7 ">

            <div class=" row items-center justify-center flex flex-center">


                <div class="col-sm-12 col-md  q-pa-md shadow-box">
                    <q-card>

                        <q-card-section>
                            <div class="text-h6 q-pt-md text-bold">Avukatlar İçin Etkin Zaman Yönetimi Nasıl
                                Planlanmalı? </div>
                            <div class="text-subtitle2 q-pt-md ">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Doloremque
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-btn flat color="primary" label="Devamını oku" icon="arrow_forward" />
                        </q-card-section>

                        <img src="~/assets/blog/b3.jpg">

                    </q-card>
                </div>

                <div class="col-sm-12 col-md  q-pa-md shadow-box">
                    <q-card>

                        <q-card-section>
                            <div class="text-h6 q-pt-md text-bold">Hukuk Bürolarında Finansal Yönetimin Kolay ve
                                Güvenilir Yolu </div>
                            <div class="text-subtitle2 q-pt-md ">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Doloremque
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-btn flat color="primary" label="Devamını oku" icon="arrow_forward" />
                        </q-card-section>

                        <img src="~/assets/blog/b6.jpg">

                    </q-card>
                </div>

                <div class="col-sm-12 col-md  q-pa-md shadow-box">
                    <q-card>

                        <q-card-section>
                            <div class="text-h6 q-pt-md text-bold">Serbest Meslek Makbuzu Hakkında Bilmeniz Gereken
                                Herşey </div>
                            <div class="text-subtitle2 q-pt-md ">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Doloremque
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-btn flat color="primary" label="Devamını oku" icon="arrow_forward" />
                        </q-card-section>

                        <img src="~/assets/blog/b1.jpg">

                    </q-card>
                </div>


            </div>
        </div>
    </div>


    <div class="row items-center justify-center q-gutter-y-lg q-pt-xl offset-2">

        <div class="col-sm-12 col-md-7 ">

            <div class="row items-center justify-center flex flex-center">

                <div class="col-sm-12 col-md-4  q-pa-md shadow-box">
                    <q-card>

                        <q-card-section>
                            <div class="text-h6 q-pt-md text-bold">Avukatlar İçin Etkin Zaman Yönetimi Nasıl
                                Planlanmalı? </div>
                            <div class="text-subtitle2 q-pt-md ">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Doloremque
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-btn flat color="primary" label="Devamını oku" icon="arrow_forward" />
                        </q-card-section>

                        <img src="~/assets/blog/b3.jpg">

                    </q-card>
                </div>


                <div class="col-sm-12 col-md-4  q-pa-md shadow-box">
                    <q-card>

                        <q-card-section>
                            <div class="text-h6 q-pt-md text-bold">Hukuk Bürolarında Finansal Yönetimin Kolay ve
                                Güvenilir Yolu </div>
                            <div class="text-subtitle2 q-pt-md ">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Doloremque
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-btn flat color="primary" label="Devamını oku" icon="arrow_forward" />
                        </q-card-section>

                        <img src="~/assets/blog/b6.jpg">

                    </q-card>
                </div>

                <div class="col-sm-12 col-md-4   q-pa-md shadow-box">
                    <q-card>

                        <q-card-section>
                            <div class="text-h6 q-pt-md text-bold">Serbest Meslek Makbuzu Hakkında Bilmeniz Gereken
                                Herşey </div>
                            <div class="text-subtitle2 q-pt-md ">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Doloremque
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-btn flat color="primary" label="Devamını oku" icon="arrow_forward" />
                        </q-card-section>

                        <img src="~/assets/blog/about.jpg">

                    </q-card>
                </div>


            </div>
        </div>
    </div>

    <div class="row items-center justify-center q-gutter-y-lg offset-2 q-pt-xl">

        <div class="col-sm-12 col-md-7 ">

            <div class="row items-center justify-center flex flex-center">

                <div class="col-sm-12 col-md-4  q-pa-md shadow-box">
                    <q-card>

                        <q-card-section>
                            <div class="text-h6 q-pt-md text-bold">Avukatlar İçin Etkin Zaman Yönetimi Nasıl
                                Planlanmalı? </div>
                            <div class="text-subtitle2 q-pt-md ">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Doloremque
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-btn flat color="primary" label="Devamını oku" icon="arrow_forward" />
                        </q-card-section>

                        <img src="~/assets/blog/b3.jpg">

                    </q-card>
                </div>


                <div class="col-sm-12 col-md-4  q-pa-md shadow-box">
                    <q-card>

                        <q-card-section>
                            <div class="text-h6 q-pt-md text-bold">Hukuk Bürolarında Finansal Yönetimin Kolay ve
                                Güvenilir Yolu </div>
                            <div class="text-subtitle2 q-pt-md ">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Doloremque
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-btn flat color="primary" label="Devamını oku" icon="arrow_forward" />
                        </q-card-section>

                        <img src="~/assets/blog/b6.jpg">

                    </q-card>
                </div>

                <div class="col-sm-12 col-md-4   q-pa-md shadow-box">
                    <q-card>

                        <q-card-section>
                            <div class="text-h6 q-pt-md text-bold">Serbest Meslek Makbuzu Hakkında Bilmeniz Gereken
                                Herşey </div>
                            <div class="text-subtitle2 q-pt-md ">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Doloremque
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                                voluptates optio dolores error consequatur quis ea fugiat? Quod temporibus soluta
                            </div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-btn flat color="primary" label="Devamını oku" icon="arrow_forward" />
                        </q-card-section>

                        <img src="~/assets/blog/about.jpg">

                    </q-card>
                </div>


            </div>
        </div>
    </div>


</div>

    <div class="row justify-center text-white flex-center items-center  q-pb-0 " style="position:relative; ">
        <div class="col-sm-12 col-md-10 bg-white" style="min-height:500px;">
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





</template>


<script>
export default {
    name: "blog",
}
</script>