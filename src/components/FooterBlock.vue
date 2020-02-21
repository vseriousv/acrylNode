<template>
    <section class="footer-block">
        <v-container class="Container mxw1200">
            <v-row class="d-flex rowMenuItems">
                <div class="d-none d-md-flex">
                    <div class="d-flex align-center pr-3" v-for="(item, i) in getFooterItems" :key="`footerItem${i}`">
                        <a href={item.link} class="elHover">{{item.text}}</a>
                    </div>
                </div>
                <div class="d-flex align-center pl-3">
                    <v-btn rounded color="primary" >Заказать</v-btn>
                </div>
            </v-row>
            <v-row>
                <v-col>
                    <div class="footerSocialBlock">
                        <div class="logo-footer d-flex align-end gridLogo">
                            <img src="/img/acryl-logo-white.svg" alt="logo-acryl">
                        </div>
                        <div class="address gridAddress">
                            <div class="d-flex addressSection">
                                <p>{{addressItems.city}}</p>
                                <p>{{addressItems.address}}</p>
                                <p><b>{{addressItems.number}}</b></p>
                                <p>{{addressItems.email}}</p>
                            </div>
                        </div>
                        <div class="gridSocial">
                            <div class="social">
                                <a v-for="(item, i) in iconItems" :key="`iconSocial${i}`" :href="`${item.link}`"> 
                                    <img :src="`/img/social/icon_social_${item.icon}.svg`" :alt="`${item.icon}`">
                                </a>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
  name: 'FooterBlock',
  props: ['footerItems', 'addressItems'],
  computed: {
    getFooterItems(){
      return this.footerItems
    }
  },
  data(){
      return {
          iconItems: [
              {id: 1, icon: "ins", link: "#ins"},
              {id: 2, icon: "fb", link: "#fb"},
              {id: 3, icon: "tw", link: "#tw"},
              {id: 4, icon: "vk", link: "#vk"},
              {id: 5, icon: "tg", link: "#tg"},
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.footer-block{
    display: flex;
    width: 100%;
    padding: 20px 10px;
    height: 425px;
    background-color: $secondaryColor;
    .Container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
    }
    .gridLogo{ 
        grid-area: gridLogo;
        justify-content: center;
        @include respond-to(large-screens) { justify-content: flex-start;}
    }
    .gridAddress{ 
        grid-area: gridAddress; 
        display: flex; 
        justify-content: center;
        align-items: flex-end;
        @include respond-to(large-screens) {justify-content: flex-end;}
    }
    .gridSocial{ 
        grid-area: gridSocial; 
        display: flex; 
        justify-content: center; 
        align-items: flex-end;
    }
    .rowMenuItems{
        justify-content: center;
        margin: 20px 10px;
        @include respond-to(large-screens) { 
            justify-content: space-between;
        }
        .elHover{
            color: white !important;
        }
    }
    .footerSocialBlock{
        display: grid;
        grid-gap: 30px;
        grid-template-areas: 
            "gridLogo gridLogo gridLogo"
            "gridAddress gridAddress gridAddress"
            "gridSocial gridSocial gridSocial";
        @include respond-to(large-screens) {
            grid-template-areas: 
                "gridLogo gridSocial gridAddress";       
        }
        .address{
            .addressSection{
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 20px;
                @include respond-to(large-screens) { 
                    align-items: flex-end;
                    justify-content: flex-end;
                }
                p{
                    text-align: center;
                    color: white;
                    padding: 0;
                    margin: 0;
                }
            }
        }
        .social{
            a{margin: 45px 10px 10px;}
        }
    }
}
</style>