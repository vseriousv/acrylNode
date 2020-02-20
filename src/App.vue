<template>
  <v-app id="inspire">
    <v-navigation-drawer absolute left temporary v-model="drawer">
        <div v-for="(item, i) in getmenuItems" :key="`drawerMenu${i}`">
            <a href={item.link} class="elHover">{{item.text}}</a>
        </div>
    </v-navigation-drawer>
    <app-header :menu-items="menuItems" v-on:changeDrawer="changeDrawerReverse"></app-header>
    <main-block></main-block>
    <project-info-block></project-info-block>
    <device-info-block></device-info-block>
    <how-it-work-block></how-it-work-block>
    <faq-block></faq-block>
    <form-block></form-block>
    <map-block :addressItems="addressItems"></map-block>
    <footer-block :footer-items="footerItems" :addressItems="addressItems"></footer-block>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import MainBlock from '@/components/MainBlock'
import ProjectInfoBlock from '@/components/ProjectInfoBlock'
import DeviceInfoBlock from '@/components/DeviceInfoBlock'
import HowItWorkBlock from '@/components/HowItWorkBlock'
import FaqBlock from '@/components/FaqBlock'
import FormBlock from '@/components/FormBlock'
import MapBlock from '@/components/MapBlock'
import FooterBlock from '@/components/FooterBlock'

export default {
  name: 'App',

  components: {
    AppHeader,
    MainBlock,
    ProjectInfoBlock,
    DeviceInfoBlock,
    HowItWorkBlock,
    FaqBlock,
    FormBlock,
    MapBlock,
    FooterBlock
  },

  data() {
    return {
      menuItems: [
        {id: 1, text: "Магазин", link: "#shop"},
        {id: 2, text: "Описание", link: "#describe"},
        {id: 3, text: "Поддержка", link: "#support"},
        {id: 4, text: "Блог", link: "#blog"},
        {id: 5, text: "Контакты", link: "#contacts"} 
      ],
      footerItems: [
        {id: 1, text: "Магазин", link: "#shop"},
        {id: 2, text: "Описание", link: "#describe"},
        {id: 3, text: "Поддержка", link: "#support"},
        {id: 4, text: "Блог", link: "#blog"},
        {id: 5, text: "Контакты", link: "#contacts"},
        {id: 6, text: "Инструкция", link: "#instr"},
      ],
      drawer: false,
      addressItems: {
        city: "г.Новосибирск",
        address: "ул. Фабричная 17/4 (12,13 этаж)",
        number: "8-800-511-3715",
        email: "sales@acrylplatform.com"
      }
    }
  },
  computed: {
    getmenuItems(){
      return this.menuItems
    }
  },
  methods: {
    changeDrawerReverse() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
