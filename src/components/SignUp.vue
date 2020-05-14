<template>
  <v-container>
    <v-row>
      <img src="../assets/logo.png" alt="logo">
    </v-row>
    <v-row>
      <v-form class="login-form">
        <v-text-field
        v-model="name"
        :rules="nameRules"
        label="氏名"
        required
        ></v-text-field>
        <v-text-field
        v-model="number"
        :rules="numberRules"
        label="社員番号"
        required
        ></v-text-field>
        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="メールアドレス"
        required
        ></v-text-field>
        <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="希望パスワード"
        required
        ></v-text-field>
        <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="希望パスワード(確認)"
        required
        ></v-text-field>
      </v-form>
      </v-row>
      <v-row>
      <v-btn class="btn" @click="login()">アカウント作成</v-btn>
      </v-row>
  </v-container>
</template>

<style lang="scss">
.container {
  
}
img {
  width: 250px;
  height: 60px;
  margin-bottom: 20px;
}

.login-form{
  position: relative;
  width: 400px;
  height: 260px;
}

.btn {
  position: relative;
}
</style>
