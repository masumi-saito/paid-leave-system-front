<template>
  <v-app>
    <v-container>
      <v-row class="history">
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
      <v-row class="remaining">
        <v-col>
          <h2>休暇残日数</h2>
          <v-data-table
            :headers="remainingHeaders"
            :items="remainingItems"
            no-data-text="残日数データがありません。"
            class="elevation-1 tableheader"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.type }}</td>
            </template>
          </v-data-table>
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
            value: 'date'
          },
          { text: '休暇種別',
            align: 'center',
            value: 'type'
          },
        ],
        historyItems: [ ],
        remainingHeaders: [
          {
            text: '有給休暇',
            align: 'center',
            value: 'paidHoliday'
          },
          {
            text: '代休',
            align: 'center',
            value: 'substituteVacation'
          },
          {
            text: '夏季休日',
            align: 'center',
            value: 'summerVacation'
          },
          {
            text: '特別休暇',
            align: 'center',
            value: 'specialHoliday'
          }
        ],
        remainingItems: [ ]
      }
    },

  created() {
    this.history()
    this.remaining()
  },

  methods: {
    history() {
      this.axios.get('http://127.0.0.1:3000/history')
      .then((response) => {
        this.historyItems = response.data
          })
    },
    remaining() {
      this.axios.get('http://127.0.0.1:3000/remaining')
      .then((responce) => {
        this.remainingItems = responce.data
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
.history {
  .v-data-table-header {
    background-color: #616161;
  }
  span {
    color: white;
  }
}

.remaining {
  .v-data-table-header {
    background-color: #616161;
  }
  .v-data-footer {
    display: none;
  }
  span {
    color: white;
  }
}
</style>
