<template>
    <v-list>
      <v-list-item v-for="expense in expenses" :key="expense.id">
        <v-list-item-title>{{ expense.description }}</v-list-item-title>
        <v-list-item-subtitle>
          {{ expense.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
          - {{ expense.category }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue'
  import { useExpenseStore } from '@/stores/expense'
  
  const expenseStore = useExpenseStore()
  const expenses = computed(() => expenseStore.expenses)
  </script>