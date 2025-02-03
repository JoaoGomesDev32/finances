<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item to="/" prepend-icon="mdi-view-dashboard">Dashboard</v-list-item>
        <v-list-item to="/expenses" prepend-icon="mdi-currency-usd">Despesas</v-list-item>
        <v-list-item to="/reports" prepend-icon="mdi-chart-bar">Relatórios</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-title>Controle de Despesas</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
// Não é necessário código adicional aqui
</script>