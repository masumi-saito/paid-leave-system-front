<template>
  <v-container>
      <v-form class="apply-form">
        <v-row>
          <h3>取得予定日(期間)</h3>
          <v-text-field
          v-model="date"
          :rules="emailRules"
          outlined
          label="休暇開始日"
          required
          ></v-text-field>
          <span>~</span>
          <v-text-field
          v-model="date"
          :rules="emailRules"
          outlined
          label="休暇終了日"
          required
          ></v-text-field>
        </v-row>
        <v-row>
          <h3>休暇種別</h3>
          <v-select
          :items="types"
          outlined
          ></v-select>
        </v-row>
        <v-row>
          <h3>備考</h3>
          <v-textarea
          v-model="password"
          :rules="passwordRules"
          label="備考"
          outlined
          required
          ></v-textarea>
        </v-row>
      </v-form>
      <v-btn class="btn" @click="login()">申請する</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
      types: ['有給(1日)', '有給(半日)', '代休', '夏季休日', '特別休暇'],
    }),
}
</script>

<style lang="scss">
.apply-form {
    align-items: center;
    width: 100%;
    height: 260px;
}

.btn {
  align-content: center;
}
</style>
