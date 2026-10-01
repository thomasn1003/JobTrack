export type TransactionType = 'income' | 'expense'

export type Transaction = {
  id: number
  name: string
  category: string
  amount: number
  date: string
  type: TransactionType
}