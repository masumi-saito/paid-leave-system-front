<template>
  <v-app>
    <v-content>
      <section>
        <div class="content">
        <img src="../assets/logo.png" alt="logo">
          <v-form class="login-form">
            <v-text-field
            v-model="email"
            type="email"
            label="メールアドレス"
            required
            ></v-text-field>
            <v-text-field
            v-model="password"
            type="password"
            label="パスワード"
            required
            ></v-text-field>
          </v-form>
          <v-btn class="btn" @click="login()">ログイン</v-btn>
        </div>
      </section>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('local', {
        email: this.email,
        password: this.password
      })
    }
  },
}
</script>

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
    }

  }
</style>
