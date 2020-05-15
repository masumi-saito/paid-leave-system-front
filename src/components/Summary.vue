<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h2>取得履歴</h2>
          <v-data-table
            :headers="historyHeaders"
            :items="historyItems"
            :items-per-page="5"
            no-data-text="履歴データがありません。"
            class="elevation-1 tableheader"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.type }}</td>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>休暇残日数</h2>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-center">有給休暇</th>
                <th class="text-center">代休</th>
                <th class="text-center">夏季休日</th>
                <th class="text-center">特別休暇</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in remainingItems" :key="item.name">
                <td class="text-center">{{ item.paidHoliday }}</td>
                <td class="text-center">{{ item.substituteVacation }}</td>
                <td class="text-center">{{ item.summerVacation }}</td>
                <td class="text-center">{{ item.specialHoliday }}</td>
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
        historyHeaders: [
          {
            text: '取得日',
            align: 'center',
            sortable: false,
            value: 'date'
          },
          { text: '休暇種別',
            align: 'center',
            value: 'type'
          },
        ],
        historyItems: [
          {
            value: false,
            date: '2019/04/01',
            type: '有給休暇'
          },
          {
            value: false,
            date: '2019/04/20',
            type: '代休'
          },
          {
            value: false,
            date: '2019/05/11',
            type: '有給休暇'
          },
          {
            value: false,
            date: '2019/06/01',
            type: '有給休暇(半日)'
          },
          {
            value: false,
            date: '2019/08/01',
            type: '夏季休日'
          },
          {
            value: false,
            date: '2019/10/24',
            type: '有給休暇'
          },
          {
            value: false,
            date: '2019/11/21',
            type: '有給休暇(半日)'
          },
          {
            value: false,
            date: '2020/02/01',
            type: '特別休暇'
          },
          {
            value: false,
            date: '2020/03/03',
            type: '有給休暇'
          },
          {
            value: false,
            date: '2020/04/14',
            type: '有給休暇'
          }
        ],
        remainingItems: [
          {
            value: false,
            paidHoliday: '1',
            substituteVacation: '2',
            summerVacation: '3',
            specialHoliday: '4'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">

h2 {
  padding-top: 60px;
  padding-bottom: 0px;
  text-align: center;
}

.tableheader {
  background-color: #616161;
}

</style>
