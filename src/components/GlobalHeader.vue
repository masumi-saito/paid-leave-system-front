<template>
    <v-app-bar
    class= "ma-0 pa-0"
    color="#212121"
    >
    <v-row>
      <v-col class="mx-auto">
        <span class="user-name">USER NAME</span>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <router-link to="/summary">
          <v-btn>
            <span>サマリー</span>
          </v-btn>
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/apply">
          <v-btn>
            <span>休暇/休日出勤申請</span>
          </v-btn>
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/permmision">
          <v-btn>
            <span>休暇承認</span>
          </v-btn>
        </router-link>
      </v-col>
      <v-col>
        <router-link to="/admin">
          <v-btn>
            <span>管理者用</span>
          </v-btn>
        </router-link>
      </v-col>

      <v-spacer></v-spacer>
      <v-col>
        <v-btn>
          <span>ログアウト</span>
        </v-btn>
      </v-col>
    </v-row>
    </v-app-bar>
</template>

<script>
export default {
  name: 'GlobalHEader',

  data() {
    return {
      menues:[
        {name: 'サマリー', link: '/summary'},
        {name: '休暇/休日出勤申請', link: '/apply'},
        {name: '休暇/休日出勤承認', link: '/permmision'},
        {name: '管理者用', link: '/admin'}
      ]
    }
  },
}
</script>

<style lang="scss">
.user-name {
  color: white;
}
</style>
