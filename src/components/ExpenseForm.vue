<template>
    <v-form @submit.prevent="addExpense">
      <v-text-field v-model="expense.description" label="Descrição"></v-text-field>
      <v-text-field v-model.number="expense.amount" label="Valor" type="number"></v-text-field>
      <v-select v-model="expense.category" :items="categories" label="Categoria"></v-select>
      <v-btn type="submit" color="primary">Adicionar Despesa</v-btn>
    </v-form>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useExpenseStore } from '@/stores/expense'
  import type { Expense } from '@/types/expense'
  
  const expenseStore = useExpenseStore()
  
  const expense = ref<Expense>({
    id: '',
    description: '',
    amount: 0,
    category: '',
    date: new Date()
  })
  
  const categories = ['Alimentação', 'Transporte', 'Lazer', 'Saúde', 'Outros']
  
  const addExpense = () => {
    expenseStore.addExpense({ ...expense.value, id: Date.now().toString() })
    expense.value = { id: '', description: '', amount: 0, category: '', date: new Date() }
  }
  </script>