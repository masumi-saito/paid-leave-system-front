<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>申請依頼一覧</h2>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-center">申請者</th>
              <th class="text-center">休暇種別</th>
              <th class="text-center">取得予定日</th>
              <th class="text-center">備考</th>
              <th class="text-center">承認</th>
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
</template>

<script>
  export default {
    data () {
      return {
        permmisons: [
          {
            value: false,
            name: '1',
            type: '2',
            startDate: '3',
            endDate: '4',
            remarks: '4'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">

h2 {
  padding-top: 60px;
  padding-bottom: 30px;
  text-align: center;
}

.tableheader {
  background-color: #616161;
}
</style>
