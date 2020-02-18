<template>
  <v-app id="inspire">
    <AppHeader></AppHeader>
    <HeaderBlock></HeaderBlock>
    
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import HeaderBlock from '@/components/HeaderBlock'
export default {
  name: 'App',

  components: {
    AppHeader,
    HeaderBlock
  },

  data: () => ({
    //
  }),
};
</script>
