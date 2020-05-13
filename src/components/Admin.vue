<template>
  <div id="app">
        <v-container>
          <v-row>
            <router-link to="/#">社員の追加/削除</router-link>
          </v-row>
          <v-row>
            <router-link to="/#">特別休暇の付与</router-link>
          </v-row>
          <v-row>
            <router-link to="/#">有給管理簿の出力</router-link>
          </v-row>
        </v-container>
  </div>
</template>

<style lang="scss">
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 340px;
    text-align: center;

    .row {
      align-items: center;
    }
  }
</style>
