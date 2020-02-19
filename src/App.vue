<template>
  <v-app id="inspire">
    <v-navigation-drawer left absolute temporary v-model="drawer">
        <div v-for="(item, i) in getmenuItems" :key="`drawerMenu${i}`">
            <a href={item.link} class="elHover">{{item.text}}</a>
        </div>
    </v-navigation-drawer>
    <app-header :menu-items="menuItems" v-on:changeDrawer="changeDrawerReverse"></app-header>
    <main-block></main-block>
    <project-info-block></project-info-block>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import MainBlock from '@/components/MainBlock'
import ProjectInfoBlock from '@/components/ProjectInfoBlock'

export default {
  name: 'App',

  components: {
    AppHeader,
    MainBlock,
    ProjectInfoBlock
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
      drawer: false
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
