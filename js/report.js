/**
 * FinPulse Report & Detailed Financial Analysis Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const reportTypeBadge = document.getElementById('reportTypeBadge');
  const reportTitle = document.getElementById('reportTitle');
  const reportSubtitle = document.getElementById('reportSubtitle');
  const reportPrincipal = document.getElementById('reportPrincipal');
  const reportMonthlyPayment = document.getElementById('reportMonthlyPayment');
  const reportTotalInterest = document.getElementById('reportTotalInterest');
  const reportTotalCost = document.getElementById('reportTotalCost');

  const extraPaymentInput = document.getElementById('extraPaymentInput');
  const extraPaymentSlider = document.getElementById('extraPaymentSlider');
  const interestSavingsText = document.getElementById('interestSavingsText');
  const timeSavingsText = document.getElementById('timeSavingsText');
  const newTermText = document.getElementById('newTermText');

  const amortTableBody = document.getElementById('amortTableBody');
  const monthlyIncomeInput = document.getElementById('monthlyIncomeInput');
  const dtiRatioText = document.getElementById('dtiRatioText');
  const dtiStatusText = document.getElementById('dtiStatusText');

  const equityRatioText = document.getElementById('equityRatioText');
  const equityStatusText = document.getElementById('equityStatusText');

  const scenAPrincipal = document.getElementById('scenAPrincipal');
  const scenADetails = document.getElementById('scenADetails');
  const scenAPayment = document.getElementById('scenAPayment');
  const scenAInterest = document.getElementById('scenAInterest');

  const scenBTermSelect = document.getElementById('scenBTermSelect');
  const scenBRateInput = document.getElementById('scenBRateInput');
  const scenBPayment = document.getElementById('scenBPayment');
  const scenBInterest = document.getElementById('scenBInterest');
  const scenBDiffText = document.getElementById('scenBDiffText');

  const returnCalcBtn = document.getElementById('returnCalcBtn');
  const brandLogoBtn = document.getElementById('brandLogoBtn');
  const printReportBtn = document.getElementById('printReportBtn');

  // Format Helpers
  function formatCurrency(amount) {
    const rounded = Math.round((amount || 0) * 100) / 100;
    const hasCents = !Number.isInteger(rounded);
    const fractionDigits = hasCents ? 2 : 0;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits
    }).format(rounded);
  }

  function formatNumber(amount) {
    const rounded = Math.round((amount || 0) * 100) / 100;
    const hasCents = !Number.isInteger(rounded);
    const fractionDigits = hasCents ? 2 : 0;
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits
    }).format(rounded);
  }

  // Load Saved Calculator State from localStorage
  let calcState = {
    activeType: 'personal',
    loanAmount: 15000,
    downPayment: 0,
    interestRate: 7.5,
    loanTerm: 3,
    termUnit: 'years'
  };

  try {
    const saved = localStorage.getItem('finpulse_calculator_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.activeType) {
        calcState = { ...calcState, ...parsed };
      }
    }
  } catch (e) {
    console.warn('Could not read localStorage state:', e);
  }

  // Core Amortization Calculation Math
  function computeLoanMath(principal, annualRate, totalMonths) {
    const r = (annualRate / 100) / 12;
    let monthlyPayment = 0;
    let totalPayment = 0;
    let totalInterest = 0;

    if (principal > 0 && totalMonths > 0) {
      if (r === 0) {
        monthlyPayment = principal / totalMonths;
        totalPayment = principal;
        totalInterest = 0;
      } else {
        const factor = Math.pow(1 + r, totalMonths);
        monthlyPayment = principal * (r * factor) / (factor - 1);
        totalPayment = monthlyPayment * totalMonths;
        totalInterest = totalPayment - principal;
      }
    }

    return { monthlyPayment, totalPayment, totalInterest };
  }

  // Calculate Net Principal
  const isYears = calcState.termUnit === 'years';
  const totalMonths = isYears ? calcState.loanTerm * 12 : calcState.loanTerm;
  const grossAmount = calcState.loanAmount || 0;
  const downPayment = (calcState.activeType === 'mortgage' || calcState.activeType === 'auto') ? (calcState.downPayment || 0) : 0;
  const netPrincipal = Math.max(0, grossAmount - downPayment);

  const baseline = computeLoanMath(netPrincipal, calcState.interestRate, totalMonths);

  // Render Executive Summary
  const typeLabels = {
    personal: 'Personal Loan',
    mortgage: 'Home Mortgage Loan',
    auto: 'Auto Financing Loan',
    student: 'Student Loan'
  };

  if (reportTypeBadge) reportTypeBadge.textContent = typeLabels[calcState.activeType] || 'Loan Analysis';
  if (reportTitle) reportTitle.textContent = `${typeLabels[calcState.activeType] || 'Loan'} Detailed Breakdown`;
  if (reportSubtitle) reportSubtitle.textContent = `Analyzing ${formatCurrency(grossAmount)} purchase price with ${calcState.interestRate}% APR over ${calcState.loanTerm} ${calcState.termUnit}.`;

  if (reportPrincipal) reportPrincipal.textContent = formatCurrency(netPrincipal);
  if (reportMonthlyPayment) reportMonthlyPayment.textContent = formatCurrency(baseline.monthlyPayment);
  if (reportTotalInterest) reportTotalInterest.textContent = formatCurrency(baseline.totalInterest);
  if (reportTotalCost) reportTotalCost.textContent = formatCurrency(baseline.totalPayment);

  // --- Option 1: Extra Payment Simulator Logic ---
  function updateExtraPaymentSimulator() {
    const extraVal = parseFloat(extraPaymentInput.value) || 0;
    extraPaymentSlider.value = extraVal;

    if (extraVal <= 0) {
      interestSavingsText.textContent = 'Saves $0.00 in total interest';
      timeSavingsText.textContent = 'Standard payoff schedule.';
      newTermText.textContent = `Original term duration: ${calcState.loanTerm} ${calcState.termUnit}.`;
      return;
    }

    const r = (calcState.interestRate / 100) / 12;
    const targetMonthly = baseline.monthlyPayment + extraVal;

    let balance = netPrincipal;
    let monthsCount = 0;
    let accumInterest = 0;

    while (balance > 0.01 && monthsCount < 1200) {
      const monthInterest = balance * r;
      accumInterest += monthInterest;
      const monthPrincipal = Math.min(balance, targetMonthly - monthInterest);
      balance -= monthPrincipal;
      monthsCount++;
    }

    const interestSaved = Math.max(0, baseline.totalInterest - accumInterest);
    const monthsSaved = Math.max(0, totalMonths - monthsCount);

    const yearsSaved = Math.floor(monthsSaved / 12);
    const remMonthsSaved = monthsSaved % 12;

    let timeText = '';
    if (yearsSaved > 0 && remMonthsSaved > 0) {
      timeText = `Pays off loan ${yearsSaved} year${yearsSaved > 1 ? 's' : ''} & ${remMonthsSaved} month${remMonthsSaved > 1 ? 's' : ''} earlier!`;
    } else if (yearsSaved > 0) {
      timeText = `Pays off loan ${yearsSaved} year${yearsSaved > 1 ? 's' : ''} earlier!`;
    } else if (remMonthsSaved > 0) {
      timeText = `Pays off loan ${remMonthsSaved} month${remMonthsSaved > 1 ? 's' : ''} earlier!`;
    } else {
      timeText = 'Pays off loan earlier!';
    }

    const newYrs = Math.floor(monthsCount / 12);
    const newMos = monthsCount % 12;

    interestSavingsText.textContent = `Saves ${formatCurrency(interestSaved)} in total interest!`;
    timeSavingsText.textContent = timeText;
    newTermText.textContent = `New loan duration: ${newYrs > 0 ? `${newYrs} year${newYrs > 1 ? 's' : ''} ` : ''}${newMos > 0 ? `${newMos} month${newMos > 1 ? 's' : ''}` : ''} (instead of ${calcState.loanTerm} ${calcState.termUnit}).`;
  }

  if (extraPaymentInput && extraPaymentSlider) {
    extraPaymentInput.addEventListener('input', () => {
      extraPaymentSlider.value = extraPaymentInput.value;
      updateExtraPaymentSimulator();
    });
    extraPaymentSlider.addEventListener('input', () => {
      extraPaymentInput.value = extraPaymentSlider.value;
      updateExtraPaymentSimulator();
    });
    updateExtraPaymentSimulator();
  }

  // --- Option 2: Render Amortization Schedule Table ---
  function renderAmortizationTable() {
    if (!amortTableBody) return;
    amortTableBody.innerHTML = '';

    const r = (calcState.interestRate / 100) / 12;
    let balance = netPrincipal;

    const totalYearsCount = Math.ceil(totalMonths / 12);

    for (let yr = 1; yr <= totalYearsCount; yr++) {
      const begBalance = balance;
      let yrInterest = 0;
      let yrPrincipal = 0;

      const monthsInYr = Math.min(12, totalMonths - (yr - 1) * 12);

      for (let m = 0; m < monthsInYr; m++) {
        if (balance <= 0) break;
        const interestForM = balance * r;
        let principalForM = baseline.monthlyPayment - interestForM;
        if (principalForM > balance) principalForM = balance;

        yrInterest += interestForM;
        yrPrincipal += principalForM;
        balance -= principalForM;
      }

      const row = document.createElement('tr');
      row.innerHTML = `
        <td><strong>Year ${yr}</strong></td>
        <td>${formatCurrency(begBalance)}</td>
        <td style="color: var(--blue-700); font-weight: 600;">${formatCurrency(yrPrincipal)}</td>
        <td style="color: var(--text-light);">${formatCurrency(yrInterest)}</td>
        <td><strong>${formatCurrency(Math.max(0, balance))}</strong></td>
      `;
      amortTableBody.appendChild(row);
    }
  }

  renderAmortizationTable();

  // --- Option 3: Health Metrics (28/36 DTI & 20% PMI Guardrail) ---
  function updateDTI() {
    const income = parseFloat(monthlyIncomeInput.value) || 0;
    if (income <= 0) {
      dtiRatioText.textContent = 'N/A';
      dtiStatusText.textContent = 'Enter monthly income to compute DTI ratio.';
      return;
    }

    const ratio = (baseline.monthlyPayment / income) * 100;
    dtiRatioText.textContent = `${ratio.toFixed(1)}%`;

    if (ratio <= 28) {
      dtiStatusText.textContent = '✓ Healthy Range (< 28% housing ratio)';
      dtiStatusText.style.color = '#16a34a';
    } else if (ratio <= 36) {
      dtiStatusText.textContent = '⚠ Moderate Debt Burden (28% – 36%)';
      dtiStatusText.style.color = '#d97706';
    } else {
      dtiStatusText.textContent = '⚠ High Risk Debt Burden (> 36%)';
      dtiStatusText.style.color = '#dc2626';
    }
  }

  function updatePMIEquity() {
    if (grossAmount <= 0) {
      equityRatioText.textContent = '0.0%';
      equityStatusText.textContent = 'No down payment applied.';
      return;
    }

    const pct = (downPayment / grossAmount) * 100;
    equityRatioText.textContent = `${pct.toFixed(1)}%`;

    if (calcState.activeType === 'mortgage') {
      if (pct >= 20) {
        equityStatusText.textContent = '✓ 20%+ Down Payment Reached! Private Mortgage Insurance (PMI) Eliminated.';
        equityStatusText.style.color = '#16a34a';
      } else {
        equityStatusText.textContent = `⚠ Under 20% Equity (${(20 - pct).toFixed(1)}% short). PMI monthly fees required.`;
        equityStatusText.style.color = '#d97706';
      }
    } else if (calcState.activeType === 'auto') {
      if (pct >= 20) {
        equityStatusText.textContent = '✓ Healthy 20%+ Down Payment (Follows 20/4/10 Auto Rule).';
        equityStatusText.style.color = '#16a34a';
      } else {
        equityStatusText.textContent = '⚠ Below 20% Down Payment (Higher depreciation risk).';
        equityStatusText.style.color = '#d97706';
      }
    } else {
      equityStatusText.textContent = 'Down Payment applies to Mortgages & Auto Financing.';
      equityStatusText.style.color = 'var(--text-light)';
    }
  }

  if (monthlyIncomeInput) {
    monthlyIncomeInput.addEventListener('input', updateDTI);
    updateDTI();
  }
  updatePMIEquity();

  // --- Option 4: Side-by-Side Scenario Comparison ---
  if (scenAPrincipal) scenAPrincipal.textContent = formatCurrency(netPrincipal);
  if (scenADetails) scenADetails.textContent = `${calcState.interestRate}% Interest | ${calcState.loanTerm} ${calcState.termUnit}`;
  if (scenAPayment) scenAPayment.textContent = `${formatCurrency(baseline.monthlyPayment)} / month`;
  if (scenAInterest) scenAInterest.textContent = `Total Interest: ${formatCurrency(baseline.totalInterest)}`;

  function updateScenarioB() {
    const scenBTermYears = parseInt(scenBTermSelect.value, 10) || 1;
    const scenBRate = parseFloat(scenBRateInput.value) || calcState.interestRate;
    const scenBMonths = scenBTermYears * 12;

    const scenBMath = computeLoanMath(netPrincipal, scenBRate, scenBMonths);

    scenBPayment.textContent = `${formatCurrency(scenBMath.monthlyPayment)} / month`;
    scenBInterest.textContent = `Total Interest: ${formatCurrency(scenBMath.totalInterest)}`;

    const interestDiff = scenBMath.totalInterest - baseline.totalInterest;
    if (interestDiff < 0) {
      scenBDiffText.textContent = `Scenario B saves ${formatCurrency(Math.abs(interestDiff))} in total interest!`;
      scenBDiffText.style.color = '#16a34a';
    } else if (interestDiff > 0) {
      scenBDiffText.textContent = `Scenario B costs ${formatCurrency(interestDiff)} MORE in total interest.`;
      scenBDiffText.style.color = '#dc2626';
    } else {
      scenBDiffText.textContent = 'Scenario B costs identical total interest.';
      scenBDiffText.style.color = 'var(--blue-800)';
    }
  }

  if (scenBTermSelect && scenBRateInput) {
    scenBTermSelect.addEventListener('change', updateScenarioB);
    scenBRateInput.addEventListener('input', updateScenarioB);
    updateScenarioB();
  }

  // --- Return to Calculator & Print Navigation ---
  function returnToCalculator() {
    window.location.href = '../index.html#calculator';
  }

  if (returnCalcBtn) returnCalcBtn.addEventListener('click', returnToCalculator);
  if (brandLogoBtn) brandLogoBtn.addEventListener('click', returnToCalculator);

  if (printReportBtn) {
    printReportBtn.addEventListener('click', () => {
      window.print();
    });
  }
});
