<template>
  <v-app>
    <v-container class="permission">
      <v-row>
        <v-col>
          <h2>承認依頼一覧</h2>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-center white--text">申請者</th>
                <th class="text-center white--text">休暇種別</th>
                <th class="text-center white--text">取得予定日</th>
                <th class="text-center white--text">備考</th>
                <th class="text-center white--text">承認</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in permmisons" :key="item.name">
                <td class="text-center">{{ item.name }}</td>
                <td class="text-center">{{ item.type }}</td>
                <td class="text-center">{{ item.startDate }} 〜 {{ item.endDate }}</td>
                <td class="text-center">{{ item.remarks }}</td>
                <td class="text-center">
                  <v-btn class="btn">承認</v-btn>
                  <v-btn class="btn">却下</v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        permmisons: [ ]
      }
    },

    created() {
      this.permmison()
    },

    methods: {
      permmison() {
        this.axios.get('http://127.0.0.1:3000/permmision')
        .then((responce) => {
          console.log(responce)
          this.permmisons = responce.data
        })
      }
    }
  }
</script>

<style lang="scss">
.permission {
  h2 {
    padding-top: 60px;
    padding-bottom: 30px;
    text-align: center;
  }

  thead {
    background-color: #616161;
  }
}
</style>
