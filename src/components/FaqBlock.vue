<template>
    <section class="faq-block mxw1200">
        <v-container>
            <v-row class="height100">
                <v-col cols="12" sm="5" class="d-none d-sm-flex"> 
                    <div class="mapImage"></div>
                </v-col>
                <v-col cols="12" sm="7">
                    <h2 class="headSection pb-3 secondaryColor">{{headSection}}</h2>
                    <v-expansion-panels value="1" flat class="px-0">
                        <v-expansion-panel v-for="(item, i) in answers" :key="`answer${i}`" active-class="active-primary" >
                            <v-expansion-panel-header class="px-0" >{{item.text}}</v-expansion-panel-header>
                            <v-expansion-panel-content class="px-0">
                                <div class="contentAnswer">
                                    <v-card class="mx-auto pa-2">
                                        {{item.answer}}
                                    </v-card>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
  name: 'FaqBlock',
  data(){
      return {
            headSection: `FAQ`,
            answers: [
                {id: 0, text: `Какова доходность и цена устройства?`, 
                        answer: `В среднем вознаграждение за размещение устройства составляет $140 ежемесячно. 
                                Цена устройства на данный момент около $1500. То есть окупаемость наступает примерно на 10ый месяц.
                                Также доходность можно увеличить несколькими способами. Свяжись с нашим представителем для получения 
                                более развернутой информации: 8-800-511-3715`},
                {id: 1, text: `Если мне не понравится, могу ли я вернуть устройство?`, 
                        answer: `Да, возврат устройства возможен. Условия обсуждаются с представителями компании. 
                                Но пока ни одного возврата у нас не было.`},
                {id: 2, text: `Я хочу стать представителем Acryl в своем городе. Это возможно?`, 
                        answer: `Да, конечно. Мы рассматриваем возможность открытия новых дилерских центров в городах, где еще не имеем представительства. 
                                Об условиях подробную информацию можно получить, позвонив нам по номеру 8-800-511-3715.`},
                {id: 3, text: `Какие условия для дилеров вы предоставляете? `, 
                        answer: `В среднем вознаграждение за размещение устройства составляет $140 ежемесячно. 
                                Цена устройства на данный момент около $1500. То есть окупаемость наступает примерно на 10ый месяц.
                                Также доходность можно увеличить несколькими способами. Свяжись с нашим представителем для получения 
                                более развернутой информации: 8-800-511-3715`},
                {id: 4, text: `Я являюсь представителем бизнеса. Могу ли я совершить запись данных в вашей сети?`, 
                        answer: `Да, конечно. Чтобы узнать подробности, необходимо связаться с нашим представителем b2b направления по номеру +7-967-8888-555. 
                                Также информацию можно получить на сайте Acryl Enterprise.`},
            ]
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.faq-block{
    width: 100%;
    display: flex;
    padding: 20px 10px;
    .mapImage{
        background-image: url(/img/FAQ_Node.png);
        width: 100%;
        min-height: 250px;
        @include respond-to(medium-screens) { 
            max-height: 300px;
            min-height: 300px;
        }
        height: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        background-size: contain; 
    }
}
.contentAnswer{
    margin-left: -24px;
    margin-right: -24px;
}
.active-primary{
    button{
        color: $primaryColor
    }
}
.height100{
    height: 100%;
}
</style>