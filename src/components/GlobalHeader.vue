<template>
  <v-app-bar
  class= "ma-0 pa-0"
  color="#212121"
  >
    <v-layout align-center>
    <v-row>
      <v-col class="mx-auto">
        <router-link to="/home">
          <span class="user-name">USER NAME</span>
        </router-link>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <router-link to="/summary">
          <v-btn>サマリー</v-btn>
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/apply">
          <v-btn>申請フォーム</v-btn>
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/permmision">
          <v-btn>承認一覧</v-btn>
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/admin">
          <v-btn>管理者用</v-btn>
        </router-link>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <v-btn @click="logout()">ログアウト</v-btn>
      </v-col>
    </v-row>
    </v-layout>
  </v-app-bar>
</template>

<script>
export default {
  name: 'GlobalHEader',

  data() {
    return {
      menues:[
        {name: 'サマリー', link: '/summary'},
        {name: '申請フォーム', link: '/apply'},
        {name: '承認一覧', link: '/permmision'},
        {name: '管理者用', link: '/admin'}
      ]
    }
  },
  methods: {
    logout() {
    }
  }
}
</script>

<style lang="scss">
.user-name {
  color: white;
}
</style>
