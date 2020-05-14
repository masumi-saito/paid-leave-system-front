<template>
  <v-container>
  <div class="d-flex align-center">
    <v-img
      alt="Vuetify Logo"
      class="shrink mr-2"
      contain
      src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
      transition="scale-transition"
      width="40"
    />
  </div>
  <div class="user-name">
    USER NAME
  </div>
  <v-spacer></v-spacer>
  <div class="menu">
    <v-btn>
      <router-link to="/summary">
        <span class="mr-2">サマリー</span>
      </router-link>
    </v-btn>

    <v-btn>
      <span class="mr-2">休暇申請</span>
    </v-btn>

    <v-btn>
      <span class="mr-2">休暇承認</span>
    </v-btn>

    <v-btn>
      <span class="mr-2">管理者用</span>
    </v-btn>
  </div>

  <v-spacer></v-spacer>

  <v-btn>
    <span class="mr-2">ログアウト</span>
  </v-btn>
  </v-container>
</template>
