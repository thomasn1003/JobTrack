import './App.css'
import type { Transaction } from './types/transaction'

function App() {
  const transactions: Transaction[] = [
  {
    id: 1,
    name: 'Chipotle',
    category: 'Food & Dining',
    amount: 14.82,
    date: '2026-09-29',
    type: 'expense',
  },
  {
    id: 2,
    name: 'Paycheck',
    category: 'Income',
    amount: 1750,
    date: '2026-09-27',
    type: 'income',
  },
  {
    id: 3,
    name: 'Steam',
    category: 'Entertainment',
    amount: 39.99,
    date: '2026-09-25',
    type: 'expense',
  },
]
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">$</div>
          <span>FinanceFlow</span>
        </div>

        <nav className="nav">
          <a className="nav-item active" href="#">
            <span>▦</span>
            Dashboard
          </a>

          <a className="nav-item" href="#">
            <span>↕</span>
            Transactions
          </a>

          <a className="nav-item" href="#">
            <span>◎</span>
            Budgets
          </a>

          <a className="nav-item" href="#">
            <span>◷</span>
            Reports
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a className="nav-item" href="#">
            <span>⚙</span>
            Settings
          </a>

          <div className="user">
            <div className="avatar">TN</div>
            <div>
              <strong>Thomas</strong>
              <small>Personal Account</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">
        <header className="topbar">
          <div className="mobile-brand">
            <div className="brand-icon">$</div>
            <span>FinanceFlow</span>
          </div>

          <button className="add-button">
            <span>+</span>
            Add Transaction
          </button>
        </header>

        <div className="content">
          <section className="welcome">
            <div>
              <p className="eyebrow">OVERVIEW</p>
              <h1>Welcome back, Thomas</h1>
              <p className="subtitle">
                Here's what's happening with your money.
              </p>
            </div>

            <select className="month-select" defaultValue="September">
              <option>September</option>
              <option>August</option>
              <option>July</option>
              <option>June</option>
            </select>
          </section>

          {/* Summary Cards */}
          <section className="summary-grid">
            <div className="summary-card">
              <div className="card-top">
                <span className="card-label">Total Balance</span>
                <span className="card-icon balance-icon">$</span>
              </div>

              <h2>$4,280.50</h2>
              <p className="positive">↑ 8.2% <span>from last month</span></p>
            </div>

            <div className="summary-card">
              <div className="card-top">
                <span className="card-label">Income</span>
                <span className="card-icon income-icon">↗</span>
              </div>

              <h2>$3,500.00</h2>
              <p className="positive">↑ 5.4% <span>from last month</span></p>
            </div>

            <div className="summary-card">
              <div className="card-top">
                <span className="card-label">Expenses</span>
                <span className="card-icon expense-icon">↘</span>
              </div>

              <h2>$2,146.32</h2>
              <p className="negative">↑ 3.1% <span>from last month</span></p>
            </div>
          </section>

          {/* Charts */}
          <section className="dashboard-grid">
            <div className="panel spending-panel">
              <div className="panel-header">
                <div>
                  <h3>Spending Overview</h3>
                  <p>Your expenses over the last 6 months</p>
                </div>

                <select defaultValue="6 months">
                  <option>6 months</option>
                  <option>12 months</option>
                </select>
              </div>

              <div className="chart">
                <div className="chart-y">
                  <span>$1,000</span>
                  <span>$750</span>
                  <span>$500</span>
                  <span>$250</span>
                  <span>$0</span>
                </div>

                <div className="chart-area">
                  <div className="grid-line line-1"></div>
                  <div className="grid-line line-2"></div>
                  <div className="grid-line line-3"></div>
                  <div className="grid-line line-4"></div>

                  <svg
                    className="chart-line"
                    viewBox="0 0 600 220"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="areaGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopOpacity="0.2" />
                        <stop offset="100%" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <path
                      className="chart-fill"
                      d="M0,150 C50,120 70,145 120,105 C170,65 190,125 240,100 C290,75 310,115 360,85 C410,55 430,95 480,70 C530,45 560,70 600,40 L600,220 L0,220 Z"
                    />

                    <path
                      className="chart-path"
                      d="M0,150 C50,120 70,145 120,105 C170,65 190,125 240,100 C290,75 310,115 360,85 C410,55 430,95 480,70 C530,45 560,70 600,40"
                    />

                    <circle cx="120" cy="105" r="5" />
                    <circle cx="240" cy="100" r="5" />
                    <circle cx="360" cy="85" r="5" />
                    <circle cx="480" cy="70" r="5" />
                    <circle cx="600" cy="40" r="5" />
                  </svg>

                  <div className="chart-months">
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel categories-panel">
              <div className="panel-header">
                <div>
                  <h3>Spending by Category</h3>
                  <p>This month</p>
                </div>
              </div>

              <div className="category-list">
                <Category
                  icon="🍔"
                  name="Food & Dining"
                  amount="$420.18"
                  percent="28%"
                  width="72%"
                />

                <Category
                  icon="🏠"
                  name="Bills & Utilities"
                  amount="$386.40"
                  percent="25%"
                  width="64%"
                />

                <Category
                  icon="🚗"
                  name="Transportation"
                  amount="$264.75"
                  percent="18%"
                  width="48%"
                />

                <Category
                  icon="🎮"
                  name="Entertainment"
                  amount="$215.32"
                  percent="14%"
                  width="38%"
                />

                <Category
                  icon="🛍️"
                  name="Shopping"
                  amount="$178.50"
                  percent="12%"
                  width="31%"
                />
              </div>
            </div>
          </section>

          {/* Transactions */}
          <section className="panel transactions-panel">
            <div className="panel-header">
              <div>
                <h3>Recent Transactions</h3>
                <p>Your latest income and expenses</p>
              </div>

              <button className="view-all">View all →</button>
            </div>

            <div className="transactions">
  {transactions.map((transaction) => (
    <Transaction
      key={transaction.id}
      name={transaction.name}
      category={transaction.category}
      date={transaction.date}
      amount={transaction.amount}
      type={transaction.type}
    />
  ))}
</div>
          </section>
        </div>
      </main>
    </div>
  )
}

type CategoryProps = {
  icon: string
  name: string
  amount: string
  percent: string
  width: string
}

function Category({ icon, name, amount, percent, width }: CategoryProps) {
  return (
    <div className="category">
      <div className="category-info">
        <div className="category-name">
          <span className="category-icon">{icon}</span>
          <span>{name}</span>
        </div>

        <div className="category-amount">
          <strong>{amount}</strong>
          <span>{percent}</span>
        </div>
      </div>

      <div className="progress">
        <div className="progress-bar" style={{ width }}></div>
      </div>
    </div>
  )
}

type TransactionProps = {
  name: string
  category: string
  date: string
  amount: number
  type: 'income' | 'expense'
}

function Transaction({
  name,
  category,
  date,
  amount,
  type,
}: TransactionProps) {
  return (
    <div className="transaction">
      <div className="transaction-left">
        <div className="transaction-icon">{type === 'income' ? '💰' : '💳'}
          <strong>{name}</strong>
          <span>
            {category} • {date}
          </span>
        </div>
      </div>

      <strong className={`transaction-amount ${type}`}>{type === 'income' ? '+' : '-'}${amount.toFixed(2)}</strong>
    </div>
  )
}

export default App

