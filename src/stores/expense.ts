import { defineStore } from 'pinia'
import type { Expense } from '../types/expense'

export const useExpenseStore = defineStore('expense', {
  state: () => ({
    expenses: [] as Expense[]
  }),
  actions: {
    addExpense(expense: Expense) {
      this.expenses.push(expense)
    }
  }
})