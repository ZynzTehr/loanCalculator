/**
 * Loan Calculator Interactive Logic
 * Monochromatic Blue Theme
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const loanAmountInput = document.getElementById('loanAmount');
  const loanAmountSlider = document.getElementById('loanAmountSlider');
  
  const interestRateInput = document.getElementById('interestRate');
  const interestRateSlider = document.getElementById('interestRateSlider');
  
  const loanTermInput = document.getElementById('loanTerm');
  const loanTermSlider = document.getElementById('loanTermSlider');
  const termUnitSelect = document.getElementById('termUnit');
  
  const monthlyPaymentEl = document.getElementById('monthlyPayment');
  const totalPrincipalEl = document.getElementById('totalPrincipal');
  const totalInterestEl = document.getElementById('totalInterest');
  const totalPaymentEl = document.getElementById('totalPayment');
  
  const barPrincipal = document.getElementById('barPrincipal');
  const barInterest = document.getElementById('barInterest');
  const principalPercentText = document.getElementById('principalPercentText');
  const interestPercentText = document.getElementById('interestPercentText');
  
  const tabBtns = document.querySelectorAll('.tab-btn');
  const presetChips = document.querySelectorAll('.preset-chip');

  // Loan Presets Configuration
  const presets = {
    personal: { amount: 15000, rate: 7.5, term: 3, unit: 'years' },
    mortgage: { amount: 350000, rate: 6.25, term: 30, unit: 'years' },
    auto: { amount: 28000, rate: 5.49, term: 5, unit: 'years' },
    student: { amount: 40000, rate: 4.8, term: 10, unit: 'years' }
  };

  // Sync Input and Slider
  function syncControlPair(input, slider, isCurrency = false, isFloat = false) {
    input.addEventListener('input', () => {
      let val = isFloat ? parseFloat(input.value) : parseInt(input.value, 10);
      if (isNaN(val)) val = 0;
      slider.value = val;
      calculateLoan();
    });

    slider.addEventListener('input', () => {
      input.value = slider.value;
      calculateLoan();
    });
  }

  syncControlPair(loanAmountInput, loanAmountSlider, true, false);
  syncControlPair(interestRateInput, interestRateSlider, false, true);
  syncControlPair(loanTermInput, loanTermSlider, false, false);

  if (termUnitSelect) {
    termUnitSelect.addEventListener('change', calculateLoan);
  }

  // Format Currency
  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  }

  // Core Calculation Formula
  function calculateLoan() {
    const P = parseFloat(loanAmountInput.value) || 0;
    const annualRate = parseFloat(interestRateInput.value) || 0;
    let termValue = parseInt(loanTermInput.value, 10) || 1;
    const isYears = termUnitSelect ? termUnitSelect.value === 'years' : true;

    // Convert term to total months
    const totalMonths = isYears ? termValue * 12 : termValue;
    
    // Monthly Interest Rate r = annual / 12 / 100
    const r = (annualRate / 100) / 12;

    let monthlyPayment = 0;
    let totalPayment = 0;
    let totalInterest = 0;

    if (P > 0 && totalMonths > 0) {
      if (r === 0) {
        monthlyPayment = P / totalMonths;
        totalPayment = P;
        totalInterest = 0;
      } else {
        // Amortization Formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
        const factor = Math.pow(1 + r, totalMonths);
        monthlyPayment = P * (r * factor) / (factor - 1);
        totalPayment = monthlyPayment * totalMonths;
        totalInterest = totalPayment - P;
      }
    }

    // Update Results DOM
    monthlyPaymentEl.textContent = Math.round(monthlyPayment).toLocaleString('en-US');
    totalPrincipalEl.textContent = formatCurrency(P);
    totalInterestEl.textContent = formatCurrency(Math.max(0, totalInterest));
    totalPaymentEl.textContent = formatCurrency(Math.max(0, totalPayment));

    // Update Visual Breakdown Progress Bar
    const safeTotal = totalPayment > 0 ? totalPayment : 1;
    const principalPct = Math.round((P / safeTotal) * 100);
    const interestPct = Math.max(0, 100 - principalPct);

    barPrincipal.style.width = `${principalPct}%`;
    barInterest.style.width = `${interestPct}%`;

    principalPercentText.textContent = `Principal (${principalPct}%)`;
    interestPercentText.textContent = `Interest (${interestPct}%)`;
  }

  // Tab Switcher
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const loanType = btn.dataset.type;
      if (presets[loanType]) {
        const config = presets[loanType];
        loanAmountInput.value = config.amount;
        loanAmountSlider.value = config.amount;

        interestRateInput.value = config.rate;
        interestRateSlider.value = config.rate;

        loanTermInput.value = config.term;
        loanTermSlider.value = config.term;

        if (termUnitSelect) termUnitSelect.value = config.unit;

        calculateLoan();
      }
    });
  });

  // Preset Chips
  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const amount = chip.dataset.amount;
      if (amount) {
        loanAmountInput.value = amount;
        loanAmountSlider.value = amount;
        calculateLoan();
      }
    });
  });

  // Initial Calculation
  calculateLoan();
});
