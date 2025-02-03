<template>
    <Pie :data="chartData" :options="chartOptions" />
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue'
  import { Pie } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { useExpenseStore } from '@/stores/expense'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  const expenseStore = useExpenseStore()
  
  const chartData = computed(() => {
    const categoryTotals = expenseStore.expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount
      return acc
    }, {} as Record<string, number>)
  
    return {
      labels: Object.keys(categoryTotals),
      datasets: [
        {
          data: Object.values(categoryTotals),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
        }
      ]
    }
  })
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  }
  </script>