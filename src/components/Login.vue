<template>
  <div id="app">
    <section>
      <div class="content">
      <img src="../assets/logo.png" alt="logo">
        <v-form class="login-form">
          <v-text-field
          v-model="email"
          :rules="emailRules"
          label="メールアドレス"
          required
          ></v-text-field>
          <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="パスワード"
          required
          ></v-text-field>
        </v-form>
        <v-btn class="btn" @click="login()">ログイン</v-btn>
      </div>
    </section>
  </div>
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
    }

  }
</style>
