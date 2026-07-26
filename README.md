# FinPulse - Loan Calculator and Financial Literacy Platform

## Live Demo

[View the FinPulse Live Demo on GitHub Pages](https://zynztehr.github.io/loanCalculator/)

---

## Problem

Many borrowers face significant confusion when evaluating loan options and revolving credit balances. Traditional online calculators often display a single static monthly payment number without helping users understand:

- How total interest compounds over long repayment terms.
- How small extra monthly principal payments can shorten loan durations and save thousands of dollars.
- Key personal finance guardrails such as Debt-to-Income (DTI) thresholds and down payment equity requirements.
- How to evaluate alternative financing offers side-by-side before making major financial commitments.

---

## Value

FinPulse transforms basic loan math into an interactive financial literacy platform. It empowers users to make informed borrowing decisions through transparent calculations, visual principal versus interest breakdowns, payoff acceleration simulators, and exportable financial analysis reports.

---

## Project Plan

The project was planned and executed using a modular, progressive enhancement approach:

1. **Core Infrastructure**: Established a clean file architecture (`css/`, `js/`, `html/`) and implemented standard amortization math algorithms.
2. **Interactive Calculator Interface**: Built real-time synchronized number inputs and range sliders for primary loan parameters across five distinct financing categories.
3. **State Persistence**: Created a bidirectional `localStorage` synchronization pipeline to maintain user inputs between the main calculator and detailed analysis pages.
4. **Financial Literacy Report Engine**: Developed a dedicated analysis report (`html/report.html`) featuring payoff acceleration simulation, full amortization schedules, DTI/PMI guardrails, and scenario comparison tools.
5. **Print and PDF Export Optimization**: Tailored dedicated print media style rules to ensure reports generate clean multi-page PDF documents.

---

## Features

### Completed Features

- **Multi-Category Debt Calculator**: Supports Personal Loans, Home Mortgages, Auto Financing, Student Loans, and Credit Card Payoff.
- **Real-Time Input Synchronization**: Bidirectional syncing between numerical text inputs and interactive range sliders.
- **Visual Interest vs. Principal Breakdown**: Dynamic visual progress bars illustrating the percentage allocation of principal versus total interest.
- **Extra Payment Payoff Simulator**: Simulates monthly extra principal contributions, calculating exact interest savings and shortened loan timelines.
- **Interactive Amortization Schedule**: Generates full year-by-year balance reduction and interest allocation tables.
- **Financial Health Indicators**: Evaluates Debt-to-Income (DTI) ratios and down payment equity guardrails.
- **Side-by-Side Scenario Comparison**: Allows users to test lower interest rates or shorter loan terms against their current baseline.
- **State Persistence**: Automatically remembers user selections when navigating between the calculator and detailed report.
- **Exportable PDF Reports**: Specialized print layouts for saving and sharing detailed calculation reports.

### Future Enhancements

- **Multi-Debt Payoff Planner**: Integration of debt snowball and avalanche repayment strategies for managing multiple loans simultaneously.
- **Localized Tax and Insurance Estimator**: State-specific property tax, homeowners insurance, and sales tax estimation modules.
- **Data Export Options**: Ability to export amortization schedules directly to CSV and Excel formats.

---

## Technologies Used

- **HTML5**: Semantic web structure and accessible form controls.
- **CSS3**: Custom properties (CSS variables), Flexbox, CSS Grid layouts, and print media queries (`@media print`).
- **JavaScript (ES6+)**: Modular client-side application logic, DOM manipulation, and dynamic event listeners.
- **Web Storage API**: `localStorage` implementation for cross-page state persistence.

---

## AI Tools Used

- **Google DeepMind Antigravity AI**: Used as an AI pair programmer for architectural design, debugging calculation edge cases, refactoring modular CSS, and optimizing print pagination.

---

## Running the Project Locally

No build tools or server dependencies are required to run FinPulse locally.

1. Clone the repository:
   ```bash
   git clone https://github.com/ZynzTehr/loanCalculator.git
   ```
2. Navigate into the project directory:
   ```bash
   cd loanCalculator
   ```
3. Open `index.html` directly in any modern web browser, or serve using any standard local development server (such as Python HTTP server):
   ```bash
   python3 -m http.server 8000
   ```