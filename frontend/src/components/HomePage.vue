<template>
  <div>
    <header-nav></header-nav>

    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->

    <!--<foot-nav></foot-nav>-->
  </div>
</template>

<script>
/* eslint-disable */
  import headerNav from './header-nav-main.vue'
  // import footNav from 'components/foot-nav.vue'
  // import firebase from 'firebase'

  export default {
    name: 'HomePage',
    components: {
      headerNav,
      // footNav
    },
    data () {
      return {
        // loginOn: firebase.auth().currentUser
      }
    }
  }
</script>

<style scoped>

</style>
