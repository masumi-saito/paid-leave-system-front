<template>
<v-app>
  <v-container
  fluid
  justify="center"
  align-content="center"
  >
    <v-layout>
      <h2>アカウント情報</h2>
    </v-layout>
    <v-layout>
      <v-flex>
        <table border="1">
          <tr>
            <th>社員名</th>
            <th>{{ account.name }}</th>
          </tr>
          <tr>
            <th>社員番号</th>
            <th>{{ account.number }}</th>
          </tr>
          <tr>
            <th>権限</th>
            <th>{{ account.role }}</th>
          </tr>
        </table>
      </v-flex>
    </v-layout>
    <v-layout>
      <h2>お知らせ</h2>
    </v-layout>
    <v-layout>
      <ul>
      <li>1日以上処理されていない申請があります。 <router-link to="#">こちら</router-link> </li>
      <li>夏季休日の失効期限が近づいています。取得申請をお願いします。 <router-link to="#">こちら</router-link> </li>
      </ul>
    </v-layout>
  </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      account: {
        name: '齋藤 真純',
        number: '120046',
        role: '管理者',
      }
    }
  }
}
</script>
