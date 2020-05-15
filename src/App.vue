<template>
  <div id="app">
    <v-app>
      <global-header/>
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader'

export default {
  name: 'App',

  components: {
    GlobalHeader
  },

  data: () => ({
    //
  }),
};
</script>
