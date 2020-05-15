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
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="開始日"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
              </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col>
              <span>〜</span>
            </v-col>
            <v-col>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="290px"
              >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="終了日"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
              </v-date-picker>
              </v-dialog>
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
      modal: false,
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
