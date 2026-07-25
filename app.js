/**
 * Loan Calculator Interactive Logic
 * Dynamic & Distinct Loan Types (Personal, Mortgage, Auto, Student)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const loanAmountInput = document.getElementById('loanAmount');
  const loanAmountSlider = document.getElementById('loanAmountSlider');
  const loanAmountLabel = document.getElementById('loanAmountLabel');
  const loanAmountLimits = document.getElementById('loanAmountLimits');
  const presetChipsContainer = document.getElementById('presetChipsContainer');

  const downPaymentGroup = document.getElementById('downPaymentGroup');
  const downPaymentInput = document.getElementById('downPayment');
  const downPaymentSlider = document.getElementById('downPaymentSlider');
  const downPaymentLabel = document.getElementById('downPaymentLabel');
  const downPaymentLimits = document.getElementById('downPaymentLimits');
  const netLoanAmountText = document.getElementById('netLoanAmountText');
  const tabDisclaimer = document.getElementById('tabDisclaimer');
  const disclaimerText = document.getElementById('disclaimerText');

  const interestRateInput = document.getElementById('interestRate');
  const interestRateSlider = document.getElementById('interestRateSlider');
  const interestRateLimits = document.getElementById('interestRateLimits');

  const loanTermInput = document.getElementById('loanTerm');
  const loanTermSlider = document.getElementById('loanTermSlider');
  const loanTermLimits = document.getElementById('loanTermLimits');
  const termUnitSelect = document.getElementById('termUnit');
  const termPresetsContainer = document.getElementById('termPresetsContainer');

  const monthlyPaymentEl = document.getElementById('monthlyPayment');
  const totalPrincipalEl = document.getElementById('totalPrincipal');
  const totalInterestEl = document.getElementById('totalInterest');
  const totalPaymentEl = document.getElementById('totalPayment');

  const barPrincipal = document.getElementById('barPrincipal');
  const barInterest = document.getElementById('barInterest');
  const principalPercentText = document.getElementById('principalPercentText');
  const interestPercentText = document.getElementById('interestPercentText');

  const tabBtns = document.querySelectorAll('.tab-btn');
  let activeType = 'personal';

  // Loan Presets Configuration
  const loanConfigs = {
    personal: {
      amountLabel: 'Loan Amount',
      amountMin: 1000,
      amountMax: 50000,
      amountStep: 500,
      amountDefault: 15000,
      presets: [5000, 10000, 25000, 50000],

      hasDownPayment: false,

      rateMin: 3.0,
      rateMax: 36.0,
      rateStep: 0.1,
      rateDefault: 8.5,

      termMin: 1,
      termMax: 7,
      termStep: 1,
      termDefault: 3,
      unit: 'years',
      termPresets: [
        { label: '2 Yrs', value: 2 },
        { label: '3 Yrs', value: 3 },
        { label: '5 Yrs', value: 5 },
        { label: '7 Yrs', value: 7 }
      ],
      disclaimer: 'Note: Excludes potential upfront lender origination fees (typically 1%–8%) and credit score APR adjustments.'
    },
    mortgage: {
      amountLabel: 'Home Purchase Price',
      amountMin: 50000,
      amountMax: 2500000,
      amountStep: 5000,
      amountDefault: 400000,
      presets: [250000, 400000, 650000, 1000000],

      hasDownPayment: true,
      downPaymentLabel: 'Down Payment (Cash)',
      downPaymentMin: 0,
      downPaymentMax: 500000,
      downPaymentStep: 5000,
      downPaymentDefault: 80000,

      rateMin: 2.0,
      rateMax: 12.0,
      rateStep: 0.1,
      rateDefault: 6.5,

      termMin: 10,
      termMax: 30,
      termStep: 1,
      termDefault: 30,
      unit: 'years',
      termPresets: [
        { label: '15 Yrs', value: 15 },
        { label: '20 Yrs', value: 20 },
        { label: '30 Yrs', value: 30 }
      ],
      disclaimer: 'Note: Calculations do not include property taxes, home insurance, or PMI, which vary depending on location.'
    },
    auto: {
      amountLabel: 'Vehicle Price',
      amountMin: 5000,
      amountMax: 150000,
      amountStep: 1000,
      amountDefault: 35000,
      presets: [15000, 28000, 45000, 75000],

      hasDownPayment: true,
      downPaymentLabel: 'Down Payment / Trade-in Value',
      downPaymentMin: 0,
      downPaymentMax: 50000,
      downPaymentStep: 500,
      downPaymentDefault: 5000,

      rateMin: 1.0,
      rateMax: 20.0,
      rateStep: 0.1,
      rateDefault: 5.5,

      termMin: 12,
      termMax: 96,
      termStep: 6,
      termDefault: 60,
      unit: 'months',
      termPresets: [
        { label: '36 Mo', value: 36 },
        { label: '48 Mo', value: 48 },
        { label: '60 Mo', value: 60 },
        { label: '72 Mo', value: 72 }
      ],
      disclaimer: 'Note: Excludes state sales tax, title/registration fees, dealer doc fees, and mandatory full-coverage insurance.'
    },
    student: {
      amountLabel: 'Tuition / Borrowed Amount',
      amountMin: 2000,
      amountMax: 150000,
      amountStep: 1000,
      amountDefault: 35000,
      presets: [10000, 25000, 50000, 100000],

      hasDownPayment: false,

      rateMin: 2.5,
      rateMax: 15.0,
      rateStep: 0.1,
      rateDefault: 5.0,

      termMin: 5,
      termMax: 25,
      termStep: 1,
      termDefault: 10,
      unit: 'years',
      termPresets: [
        { label: '5 Yrs', value: 5 },
        { label: '10 Yrs', value: 10 },
        { label: '15 Yrs', value: 15 },
        { label: '20 Yrs', value: 20 }
      ],
      disclaimer: 'Note: Assumes immediate principal repayment. Does not include interest capitalization during in-school or grace periods.'
    }
  };

  // Sync Input and Slider Pair
  function syncControlPair(input, slider, isFloat = false) {
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

  syncControlPair(loanAmountInput, loanAmountSlider);
  syncControlPair(downPaymentInput, downPaymentSlider);
  syncControlPair(interestRateInput, interestRateSlider, true);
  syncControlPair(loanTermInput, loanTermSlider);

  if (termUnitSelect) {
    termUnitSelect.addEventListener('change', () => {
      calculateLoan();
    });
  }

  // Format Currency Helper (omits .00 on whole integers, displays 2 decimal places for cents e.g. .90)
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

  // Format Number Helper (without currency symbol, displays 2 decimal places for cents e.g. .90)
  function formatNumber(amount) {
    const rounded = Math.round((amount || 0) * 100) / 100;
    const hasCents = !Number.isInteger(rounded);
    const fractionDigits = hasCents ? 2 : 0;
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits
    }).format(rounded);
  }

  // Apply Selected Loan Tab Configuration
  function applyLoanConfig(type) {
    const config = loanConfigs[type];
    if (!config) return;

    activeType = type;

    // Trigger smooth tab transition animation on inputs container
    const calculatorInputs = document.querySelector('.calculator-inputs');
    if (calculatorInputs) {
      calculatorInputs.classList.remove('tab-change-anim');
      void calculatorInputs.offsetWidth; // Force reflow
      calculatorInputs.classList.add('tab-change-anim');
    }

    // 1. Amount Configuration
    if (loanAmountLabel) loanAmountLabel.textContent = config.amountLabel;
    
    loanAmountInput.min = config.amountMin;
    loanAmountInput.max = config.amountMax;
    loanAmountInput.step = config.amountStep;
    loanAmountInput.value = config.amountDefault;

    loanAmountSlider.min = config.amountMin;
    loanAmountSlider.max = config.amountMax;
    loanAmountSlider.step = config.amountStep;
    loanAmountSlider.value = config.amountDefault;

    if (loanAmountLimits) {
      loanAmountLimits.innerHTML = `<span>${formatCurrency(config.amountMin)}</span><span>${formatCurrency(config.amountMax)}</span>`;
    }

    // Amount Presets
    if (presetChipsContainer) {
      presetChipsContainer.innerHTML = '';
      config.presets.forEach(amt => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'preset-chip';
        chip.textContent = formatCurrency(amt);
        chip.addEventListener('click', () => {
          loanAmountInput.value = amt;
          loanAmountSlider.value = amt;
          calculateLoan();
        });
        presetChipsContainer.appendChild(chip);
      });
    }

    // 2. Down Payment Group Configuration
    if (config.hasDownPayment) {
      downPaymentGroup.style.display = 'block';
      if (downPaymentLabel) downPaymentLabel.textContent = config.downPaymentLabel;

      downPaymentInput.min = config.downPaymentMin;
      downPaymentInput.max = config.downPaymentMax;
      downPaymentInput.step = config.downPaymentStep;
      downPaymentInput.value = config.downPaymentDefault;

      downPaymentSlider.min = config.downPaymentMin;
      downPaymentSlider.max = config.downPaymentMax;
      downPaymentSlider.step = config.downPaymentStep;
      downPaymentSlider.value = config.downPaymentDefault;

      if (downPaymentLimits) {
        downPaymentLimits.innerHTML = `<span>${formatCurrency(config.downPaymentMin)}</span><span>${formatCurrency(config.downPaymentMax)}</span>`;
      }
    } else {
      downPaymentGroup.style.display = 'none';
      downPaymentInput.value = 0;
      downPaymentSlider.value = 0;
    }

    // 3. Rate Configuration
    interestRateInput.min = config.rateMin;
    interestRateInput.max = config.rateMax;
    interestRateInput.step = config.rateStep;
    interestRateInput.value = config.rateDefault;

    interestRateSlider.min = config.rateMin;
    interestRateSlider.max = config.rateMax;
    interestRateSlider.step = config.rateStep;
    interestRateSlider.value = config.rateDefault;

    if (interestRateLimits) {
      interestRateLimits.innerHTML = `<span>${config.rateMin}%</span><span>${config.rateMax}%</span>`;
    }

    // 4. Term Configuration
    if (termUnitSelect) {
      termUnitSelect.value = config.unit;
    }

    loanTermInput.min = config.termMin;
    loanTermInput.max = config.termMax;
    loanTermInput.step = config.termStep;
    loanTermInput.value = config.termDefault;

    loanTermSlider.min = config.termMin;
    loanTermSlider.max = config.termMax;
    loanTermSlider.step = config.termStep;
    loanTermSlider.value = config.termDefault;

    if (loanTermLimits) {
      const unitText = config.unit === 'months' ? 'Mo' : 'Yr';
      const unitTextPlural = config.unit === 'months' ? 'Mo' : 'Yrs';
      loanTermLimits.innerHTML = `<span>${config.termMin} ${unitText}</span><span>${config.termMax} ${unitTextPlural}</span>`;
    }

    // Term Presets
    if (termPresetsContainer) {
      termPresetsContainer.innerHTML = '';
      config.termPresets.forEach(preset => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'preset-chip';
        chip.textContent = preset.label;
        chip.addEventListener('click', () => {
          loanTermInput.value = preset.value;
          loanTermSlider.value = preset.value;
          calculateLoan();
        });
        termPresetsContainer.appendChild(chip);
      });
    }

    // 5. Dynamic Tab Disclaimer
    if (tabDisclaimer && disclaimerText) {
      if (config.disclaimer) {
        disclaimerText.textContent = config.disclaimer;
        tabDisclaimer.style.display = 'flex';
      } else {
        tabDisclaimer.style.display = 'none';
      }
    }

    calculateLoan();
  }

  // Core Calculation Formula
  function calculateLoan() {
    const grossAmount = parseFloat(loanAmountInput.value) || 0;
    const currentConfig = loanConfigs[activeType];

    let downPaymentVal = 0;
    if (currentConfig && currentConfig.hasDownPayment) {
      downPaymentVal = parseFloat(downPaymentInput.value) || 0;
      if (downPaymentVal > grossAmount) {
        downPaymentVal = grossAmount;
        downPaymentInput.value = grossAmount;
        downPaymentSlider.value = grossAmount;
      }
    }

    const netPrincipal = Math.max(0, grossAmount - downPaymentVal);

    if (currentConfig && currentConfig.hasDownPayment && netLoanAmountText) {
      netLoanAmountText.textContent = formatCurrency(netPrincipal);
    }

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

    if (netPrincipal > 0 && totalMonths > 0) {
      if (r === 0) {
        monthlyPayment = netPrincipal / totalMonths;
        totalPayment = netPrincipal;
        totalInterest = 0;
      } else {
        // Amortization Formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
        const factor = Math.pow(1 + r, totalMonths);
        monthlyPayment = netPrincipal * (r * factor) / (factor - 1);
        totalPayment = monthlyPayment * totalMonths;
        totalInterest = totalPayment - netPrincipal;
      }
    }

    // Update Results DOM
    monthlyPaymentEl.textContent = formatNumber(monthlyPayment);
    totalPrincipalEl.textContent = formatCurrency(netPrincipal);
    totalInterestEl.textContent = formatCurrency(Math.max(0, totalInterest));
    totalPaymentEl.textContent = formatCurrency(Math.max(0, totalPayment));

    // Update Visual Breakdown Progress Bar
    const safeTotal = totalPayment > 0 ? totalPayment : 1;
    const principalPct = Math.round((netPrincipal / safeTotal) * 100);
    const interestPct = Math.max(0, 100 - principalPct);

    barPrincipal.style.width = `${principalPct}%`;
    barInterest.style.width = `${interestPct}%`;

    principalPercentText.textContent = `Principal (${principalPct}%)`;
    interestPercentText.textContent = `Interest (${interestPct}%)`;
  }

  // Update Sliding Tab Indicator Position
  function updateTabIndicator(activeBtn) {
    const indicator = document.querySelector('.tab-indicator');
    const tabsContainer = document.querySelector('.loan-type-tabs');
    if (indicator && activeBtn && tabsContainer) {
      const containerRect = tabsContainer.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const offsetLeft = btnRect.left - containerRect.left;
      indicator.style.transform = `translateX(${offsetLeft}px)`;
      indicator.style.width = `${btnRect.width}px`;
    }
  }

  // Tab Switcher
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateTabIndicator(btn);
      const loanType = btn.dataset.type;
      applyLoanConfig(loanType);
    });
  });

  window.addEventListener('resize', () => {
    const activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn) updateTabIndicator(activeBtn);
  });

  // Accordion Interactive Logic for Guide Section
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close other accordion items
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // IntersectionObserver Scroll Reveal Animations (Continuous Viewport Monitoring)
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -200px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // Navbar Scroll Spy & Dynamic Active Link Updating
  const navLinks = document.querySelectorAll('.nav-links a');
  const brandLogo = document.querySelector('.brand-logo');
  const pageSections = document.querySelectorAll('section[id]');

  function setActiveNavLink(id) {
    // Reset active class on all nav links and brand logo
    navLinks.forEach(link => link.classList.remove('active'));
    if (brandLogo) brandLogo.classList.remove('active');

    if (id === 'hero' || !id) {
      if (brandLogo) brandLogo.classList.add('active');
    } else {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  }

  if (brandLogo) {
    brandLogo.addEventListener('click', () => {
      setActiveNavLink('hero');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href').replace('#', '');
      if (targetId) {
        setActiveNavLink(targetId);
      }
    });
  });

  if ('IntersectionObserver' in window && pageSections.length > 0) {
    const navSpyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveNavLink(entry.target.id);
        }
      });
    }, {
      threshold: 0.25,
      rootMargin: '-70px 0px -40% 0px'
    });

    pageSections.forEach(section => navSpyObserver.observe(section));
  }

  // Educational Glossary Tooltips Touch / Click Toggle
  const tooltipIcons = document.querySelectorAll('.tooltip-icon');
  tooltipIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = icon.classList.contains('active');
      tooltipIcons.forEach(i => i.classList.remove('active'));
      if (!isActive) icon.classList.add('active');
    });
  });

  document.addEventListener('click', () => {
    tooltipIcons.forEach(i => i.classList.remove('active'));
  });

  // Initialize Default Personal Loan Config
  applyLoanConfig('personal');
  const activeBtn = document.querySelector('.tab-btn.active');
  if (activeBtn) updateTabIndicator(activeBtn);
});
