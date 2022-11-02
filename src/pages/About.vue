<template>
    <router-view />
    <div>

        <q-parallax style="height:500px;">
            <template v-slot:media>
                <img src="~/assets/aboutban.jpg">
            </template>

            <template v-slot:content="scope">
                <div class="row" :style="{
                  opacity: 0.65 + (1 - scope.percentScrolled) * 0.75,
                  top: (scope.percentScrolled * 60) + '%',
                  left: 0,
                  right: 0,
                  width: '50%'
                }">

                    <div class="col text-white">

                        <div class="font-18 q-pb-md">HAKKIMIZDA
                        </div>
                        <q-separator color="secondary" style="height:2px; width:48%" />
                        <div class="font-32">Erciyas Avukatlık Bürosu
                            <strong class="text-secondary">.</strong>
                        </div>
                        <div class="font-16 q-pt-sm ">
                            <p> 
                                <strong>
                                    1980 yılından beri özel hukuk ve kamu hukuku alanlarında Türk ve uluslararası bir çok firmaya <br>
                                    hizmet vermekte olan modern bir hukuk bürosudur.
                                </strong>
                            </p>

                        </div>
                        <div class="font-16 q-pt-sm ">
                            <p>
                                Bir taraftan bireysel müvekkillerimize özel ihtiyaçlarına uygun hukuki çözümler konusunda<br>
                                danışmanlık yaparken diğer taraftan kurumsal müvekkillerimizin ihtiyaçlarına uygun olacak<br>
                                şekilde kurumsal hukuk hizmetleri sunmaktayız.
                            </p>

                        </div>
                    </div>

                </div>

            </template>
        </q-parallax>






    </div>




    <div class="row justify-center flex-center " style="position:relative; top:-100px;">
        <div class=" col-sm-6">
            <div class="row ">
                <div class="col-sm-7">
                    <img src="~/assets/ab1.jpg">
                </div>
                <div class=" col-sm-5 flex flex-center items-start q-pt-xl q-pl-none">
                    <p class="font-17 text-grey-9 q-pl-xl" style="line-height:30px ;"> 
                        <strong>
                            Sunduğumuz hukuki çözümlerin etkin ve pratik olması yanında, efektif olmasına da özen gösteriyoruz.
                        </strong> Müvekkillerimize avukatlık hizmeti sunarken enerjimizi sadece yasal düzenleme ve 
                        regülasyonlarca değil temel olarak hizmet sunduğumuz sektörü anlamaya harcıyoruz.<br><br>
                        
                        Böylece en zor hukuki sorunların cevaplarını yine bizzat sektörlerin içinden bulmaktayız.

                    </p>


                </div>
            </div>



        </div>


    </div>


    <div class="row justify-center text-white flex-center items-center q-pt-xl q-pb-0 " style="position:relative; ">
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













</template>


<script>
export default {
    name: "about",
}
</script>