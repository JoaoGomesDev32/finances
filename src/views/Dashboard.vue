<template>
    <v-container>
      <h1>Dashboard</h1>
      <v-row>
        <v-col cols="12" md="6">
          <ExpenseChart />
        </v-col>
        <v-col cols="12" md="6">
          <ExpenseForm />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts" setup>
  import ExpenseChart from '@/components/ExpenseChart.vue'
  import ExpenseForm from '@/components/ExpenseForm.vue'
  </script>