<template>
  <v-app>
    <v-container class="signup">
      <section>
        <div class="content">
        <img src="../assets/logo.png" alt="logo">
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
        <v-btn class="btn" @click="login()">アカウント作成</v-btn>
        </div>
      </section>
    </v-container>
  </v-app>
</template>

<style lang="scss">
  section {
    width: 100%;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 340px;
    text-align: center;

    img {
      margin-bottom: 60px;
      width: 250px;
      height: 60px;
    }

    .login-form{
      position: relative;
      width: 400px;
      height: 260px;
    }

    .btn {
      position: relative;
      margin-top: 120px;
    }

  }
</style>
