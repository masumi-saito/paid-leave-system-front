<template>
  <v-app>
    <v-container
    class="home"
    fluid
    >
      <v-row justify="center">
        <h2>アカウント情報</h2>
      </v-row>
      <v-row justify="center">
          <v-data-table
            :headers="accountHeaders"
            :items="accountItems"
            no-data-text="データがありません。"
            class="elevation-1 tableheader"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.id }}</td>
              <td class="text-xs-right">{{ props.item.role }}</td>
            </template>
          </v-data-table>
      </v-row>
      <v-row justify="center">
        <h2>お知らせ</h2>
      </v-row>
      <v-row justify="center">
        <ul>
        <li>1日以上処理されていない申請があります。 <router-link to="#">こちら</router-link></li>
        <li>夏季休日の失効期限が近づいています。取得申請をお願いします。 <router-link to="#">こちら</router-link></li>
        </ul>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      accountHeaders: [
        {
          text: '社員名',
          align: 'center',
          value: 'name'
        },
        {
          text: '社員番号',
          align: 'center',
          value: 'id'
        },
        {
          text: '権限',
          align: 'center',
          value: 'role'
        }
      ],
      accountItems: [
        {
        name: '齋藤 真純',
        id: '120046',
        role: '管理者',
      }
      ]
    }
  }
}
</script>

<style lang="scss">
.home {
    .v-data-table-header {
    background-color: #616161;

    span {
    color: white;
  }
  }

  .v-data-footer {
    display: none;
  }
}
</style>
