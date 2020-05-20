<template>
  <v-app>
      <v-container class="apply">
        <v-row>
          <h2>申請フォーム</h2>
        </v-row>
            <v-row>
              <v-col>
                <h3>取得予定日(期間)</h3>
              </v-col>
              <v-col>
                <v-dialog
                  ref="start_dialog"
                  v-model="start_modal"
                  :return-value.sync="start_date"
                  persistent
                  width="290px"
                >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="start_date"
                    label="開始日"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                v-model="start_date"
                locale="ja-jp"
                :day-format="date => new Date(date).getDate()"
                scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="start_modal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.start_dialog.save(start_date)">OK</v-btn>
                </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col>
                <span>〜</span>
              </v-col>
              <v-col>
                <v-dialog
                  ref="end_dialog"
                  v-model="end_modal"
                  :return-value.sync="end_date"
                  persistent
                  width="290px"
                >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="end_date"
                    label="終了日"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                v-model="end_date"
                locale="ja-jp"
                :day-format="date => new Date(date).getDate()"
                scrollable >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="end_modal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.end_dialog.save(end_date)">OK</v-btn>
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
                v-model="selectedType"
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
                v-model="remarks"
                auto-grow
                label="備考"
                outlined
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-btn class="btn" @click="apply()">申請する</v-btn>
            </v-row>
      </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
      types: ['有給(1日)', '有給(半日)','休日出勤', '代休', '夏季休日', '特別休暇'],
      start_modal: false,
      end_modal: false,
      start_date: '',
      end_date: '',
      selectedType: '',
      remarks: ''
    }),

  methods: {
    apply() {
      this.axios.post('http://127.0.0.1:3000/apply',{
        start_date: this.start_date,
        end_date: this.end_date,
        type: this.selectedType,
        remarks: this.remarks
      })
    }
  },
}
</script>

<style lang="scss">
h2 {
  padding-top: 100px;
  padding-bottom: 20px;
  text-align: center;
}
.v-date-picker-table.v-date-picker-table--date > table > tbody tr td:nth-child(7) .v-btn__content {
    color:blue
}
.v-date-picker-table.v-date-picker-table--date > table > tbody tr td:nth-child(1) .v-btn__content {
    color:red
}
.btn {
  position: relative;
  align-content: center;
  background-color: #E8008A;
}
</style>
