<template>
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
            <td class="text-xs-right">{{ props.item.calories }}</td>
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
            date: 'Frozen Yogurt',
            type: 159
          },
          {
            value: false,
            date: 'Ice cream sandwich',
            type: 237
          },
          {
            value: false,
            date: 'Eclair',
            type: 262
          },
          {
            value: false,
            date: 'Cupcake',
            type: 111
          },
          {
            value: false,
            date: 'Gingerbread',
            type: 356
          },
          {
            value: false,
            date: 'Jelly bean',
            type: 375
          },
          {
            value: false,
            date: 'Lollipop',
            type: 392
          },
          {
            value: false,
            date: 'Honeycomb',
            type: 408
          },
          {
            value: false,
            date: 'Donut',
            type: 452
          },
          {
            value: false,
            date: 'KitKat',
            type: 111
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
