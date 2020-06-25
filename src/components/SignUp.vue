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
          v-model="hireDate"
          :rules="hireDateRules"
          label="入社日"
          required
          ></v-text-field>
          <v-text-field
          v-model="email"
          :rules="emailRules"
          label="メールアドレス"
          required
          ></v-text-field>
          <v-text-field
          v-model="slack"
          :rules="slackRules"
          label="Slackアカウント"
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
        <v-btn class="btn" @click="signup">アカウント作成</v-btn>
        </div>
      </section>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        hireDate: '',
        email: '',
        slack: '',
        password: ''
      }
    },

    methods: {
      signup: function () {
        this.axios.post('http://127.0.0.1:3000/users',{
          user_name: this.name, hire_date: this.hireDate, email: this.email, slack: this.slack, password: this.password
        })
        .then(responce => console.log(responce))
      }
    }
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
      margin-top: 200px;
    }

  }
</style>
