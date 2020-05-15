<template>
  <v-app>
    <v-container
    fill-height
    fluid
    class="d-flex align-center pa-0 ma-0"
    >
      <v-row
      justify="center"
      >
        <v-form
        width="700px"
        class="apply-form"
        >
          <v-row>
            <v-col>
              <h3>取得予定日(期間)</h3>
            </v-col>
            <v-col>
              <v-text-field
              v-model="date"
              :rules="emailRules"
              outlined
              label="休暇開始日"
              required
              ></v-text-field>
            </v-col>
            <v-col>
              <span>〜</span>
            </v-col>
            <v-col>
              <v-text-field
              v-model="date"
              :rules="emailRules"
              outlined
              label="休暇終了日"
              required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3>休暇種別</h3>
            </v-col>
            <v-col>
              <v-select
              :items="types"
              outlined
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3>備考</h3>
            </v-col>
            <v-col>
              <v-textarea
              v-model="password"
              :rules="passwordRules"
              label="備考"
              outlined
              required
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-btn class="btn" @click="apply()">申請する</v-btn>
          </v-row>
        </v-form>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
      types: ['有給(1日)', '有給(半日)', '代休', '夏季休日', '特別休暇'],
    }),
}
</script>

<style lang="scss">
.btn {
  
  position: relative;
  align-content: center;
  background-color: #E8008A;
}
</style>
