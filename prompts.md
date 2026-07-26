# AI Prompt History

### Prompt 1: Initial Requirements Review
**Prompt:**
> I have a project I need to do, go through requirements.md and read it. Once you've completed this task, and understand, let me know.

**Goal/Context:** 
Initial project brief review to ensure full understanding of constraints, stack (HTML/CSS/JS), Git requirements, and deliverables.

---

### Prompt 2: Project Setup & Homepage Design Brief
**Prompt:**
> We are going to take it one step at a time. I am thinking of creating a loan calculator application to help people with finance. Let's begin with a home page. I want a professional feel to it while being modern and cool. To keep the professional look, we should use color blue and maintain a monochromatic palette. Do not include requirements.md when pushing commits to GitHub. Create a .gitignore file and add DS_Store file to it.

**Goal/Context:** 
Setup `.gitignore` for workspace privacy/cleanliness, establish monochromatic blue visual identity, and build the initial homepage UI.

---

### Prompt 3: Design Rationale & Code Explanation
**Prompt:**
> Why did you choose this font-size? (`styles.css` line 502)

**Goal/Context:** 
Questioning design decisions and asking AI to explain typography choices (`0.75rem`), visual hierarchy, and uppercase letter-spacing balance in financial card UI design.

---

### Prompt 4: Typography Adjustment & Browser DevTools Iteration
**Prompt:**
> In this line, the font-size is too small. We need to make it 2rem to match the dollar sign in `.monthly-payment-amount span.currency`. I used the inspect option on my browser and played with the font-size a bit, it looks better as 2rem.

**Goal/Context:** 
Iterating on UI layout based on browser DevTools testing to align header label size (`2rem`) with the dollar sign currency symbol.

---

### Prompt 5: Loan Category Separation Inquiry
**Prompt:**
> Is there a reason you chose to separate personal, mortgage, auto, and student? They all have the same inputs.

**Goal/Context:** 
Inquiring about why loan tabs exist when they all share identical input sliders and calculation formulas under the hood.

---

### Prompt 6: Dynamic & Distinct Loan Categories Feature
**Prompt:**
> Make each tab truly distinct & dynamic.

**Goal/Context:** 
Transforming loan category tabs (Personal, Mortgage, Auto, Student) into distinct, dynamic calculator modes with custom ranges, tailored preset chips, term units (Years vs. Months), and down payment input fields.

---

### Prompt 7: Mortgage Disclaimer Addition
**Prompt:**
> Include a disclaimer in the mortgage tab. It should say that calculations do not include property taxes and insurance costs since these change depending on location.

**Goal/Context:** 
Adding a location-based tax and insurance disclaimer box to the Mortgage tab for transparency and financial accuracy.

---

### Prompt 8: Comprehensive Financial Literacy Tab Disclaimers
**Prompt:**
> Yes, let's add them. I would like this application to be as helpful as possible when it is being used to help people with financial literacy.

**Goal/Context:** 
Expanding disclaimers dynamically across all loan tabs (Personal, Mortgage, Auto, Student) to educate users on real-world expenses like origination fees, sales tax/registration, property taxes/PMI, and in-school interest capitalization.

---

### Prompt 9: IntersectionObserver Scroll Animations
**Prompt:**
> Let's use JavaScript IntersectionObserver to animate and liven up our application, so it looks more modern and cool.

**Goal/Context:** 
Integrating JavaScript `IntersectionObserver` to trigger hardware-accelerated CSS scroll-reveal entrance animations and scale transitions as hero elements, calculator cards, feature grids, and guide items scroll into view.

---

### Prompt 10: Continuous Scroll Animation & Increased Delay
**Prompt:**
> Let's increase the delay, and let's make it so that the items leave the screen when not in view.

**Goal/Context:** 
Increasing transition duration (`0.85s`) and staggered delays (`0.15s`–`0.6s`), and removing one-shot unobserving so items exit (`is-visible` removed) and re-animate continuously as users scroll up and down.

---

### Prompt 11: Transition Performance Tuning & Initial Load Delay
**Prompt:**
> Revert the delay to .75s from 0.85s, the screen became laggy. Introduce the .85s delay at initial load of the application. The rest of the time it should be .75s.

**Goal/Context:** 
Reverting standard scroll reveal duration back to snappy `0.75s` to eliminate scroll lagginess, while reserving `0.85s` duration exclusively for the initial application hero load via `.initial-load`.

---

### Prompt 12: Dynamic Cents Formatting
**Prompt:**
> I went over the calculations you make for loan. Although they are correct, they do not show decimals. Why did you choose that? Yes, let's update to display decimals, but keep the number itself when decimals are 0, i.e., 15,000 versus 15,000.00.

**Goal/Context:** 
Updating number and currency formatters to display decimal places for cents while omitting `.00` on whole integer amounts.

---

### Prompt 13: Cents Trailing Zero Precision (.90 formatting)
**Prompt:**
> I noticed that if the decimal is .90 it only displays .9, let's change it so that it displays .90 and so on for any other numbers that have trailing zeroes.

**Goal/Context:** 
Updating currency formatters to dynamically set `minimumFractionDigits: 2` whenever cents exist so values like `.90` display as `$489.90` instead of `$489.9`.

---

### Prompt 14: Sliding Active Tab Indicator & GitHub Sync
**Prompt:**
> I would like the transition for the personal, mortgage, auto, student loan tabs to be animated.

**Goal/Context:** 
Adding a responsive sliding background pill indicator (`.tab-indicator`) that glides smoothly beneath Personal, Mortgage, Auto, and Student tabs when clicked, combined with input container cross-fade slide transitions (`.tab-change-anim`), and pushing all commits to GitHub.

---

### Prompt 15: Dynamic Navbar Active Link & Scroll Spy
**Prompt:**
> Links in navbar do not show what link is active when clicked on. Only calculator remains active.

**Goal/Context:** 
Adding click handlers and an `IntersectionObserver` scroll-spy in JavaScript to dynamically update `.active` state on header navbar links (Calculator, Features, Guide) as users click links or scroll through page sections.

---

### Prompt 16: Accordion Text Fade-in Animation
**Prompt:**
> When clicking on an accordion, I would like the text to fade in.

**Goal/Context:** 
Adding smooth CSS `opacity` (fade-in) and `transform` transitions to `.accordion-content` so that text gracefully fades in when opening any Financial Literacy Guide accordion item.

---

### Prompt 17: Architectural Rationale for DOMContentLoaded Wrapper
**Prompt:**
> Why did you choose to use only one function, document.addEventListener('DOMContentLoaded')?

**Goal/Context:** 
Explaining the architectural advantages of wrapping application initialization inside `DOMContentLoaded` for guaranteed DOM node availability, closure encapsulation, one-time DOM element caching, and coordinated bootstrapping.

---

### Prompt 18: Architectural Rationale for Tab Event Dispatch
**Prompt:**
> Why did you choose to do this in this particular manner? Can you explain? (referencing tabBtns.forEach and dataset.type in app.js)

**Goal/Context:** 
Explaining the design pattern behind iterative listener binding, mutually exclusive active class toggling, decoupled indicator updates, and HTML data-attribute (`data-type`) configuration dispatch.

---

### Prompt 19: Architectural Rationale for Window Resize Listener
**Prompt:**
> Why use a window event listener as opposed to another type? (referencing window.addEventListener('resize'))

**Goal/Context:** 
Explaining why `window` is the only standard DOM entity emitting viewport `resize` events, and how recalculating pixel-based `translateX` offsets on window resize prevents responsive UI misalignment.

---

### Prompt 20: Technical Rationale for Default Function Parameters
**Prompt:**
> On this function, why did you include isFloat = false? Just in case there is no value we have a default?

**Goal/Context:** 
Explaining how default parameter `isFloat = false` differentiates between integer parsing (`parseInt`) for loan amounts/terms and floating-point parsing (`parseFloat`) for interest rates.

---

### Prompt 21: Refactoring Redundant Function Call Arguments
**Prompt:**
> So why is the false included when calling the function on lines 186, 187, and 189 then?

**Goal/Context:** 
Refactoring `syncControlPair` function calls to remove redundant `false` arguments and rely directly on ES6 default parameter syntax.

---

### Prompt 22: Hero Active State & FinPulse Brand Underline
**Prompt:**
> For the navbar, when page loads, calculator is active when it should not be, FinPulse should be. For this let's just have the word FinPulse underlined when active.

**Goal/Context:** 
Setting `FinPulse` (brand logo) as the active navigation item when viewing the top/hero section (`id="hero"`), removing hardcoded active state on Calculator on page load, and adding CSS text-decoration underline formatting to the word `FinPulse` when active.

---

### Prompt 23: Financial Literacy Product Enhancements & GitHub Sync
**Prompt:**
> What suggestions would you have to improve this application as a financial literacy product?
> Let's push to GitHub first and then give me the options again, so that if the changes are too much we can go back to the current state we are in. Update prompts.md.

**Goal/Context:** 
Formulating product enhancement options (Extra Payment Simulator, Amortization Schedule Chart, Financial Health DTI/PMI Indicators, Scenario Comparisons, and Inline Glossary Tooltips), updating prompt history, and syncing all commits to GitHub as a baseline checkpoint.

---

### Prompt 24: Option 5 Educational Tooltips & Responsive Clamp Scaling (320px, 375px, 425px)
**Prompt:**
> I would like to implement option 5 to see how it works for now, then decide on the other ones. Show me options again afterward. I have issues with responsiveness at 320px, 375px, and 425px. Let's implement for example: font-size: clamp(1.8rem, calc(), 5rem) in CSS to help with font scaling and zooming as well.

**Goal/Context:** 
Implementing Option 5 in-line educational glossary tooltips (`?` icons) on key financial terms, implementing fluid CSS `clamp(...)` typography and card padding rules, and adding responsive media query overrides for 320px, 375px, and 425px mobile viewports.

---

### Prompt 25: Multi-Page Architecture & 4-Option Financial Literacy Expansion
**Prompt:**
> I want to implement all 4 options, but I want to use the print/save calculation button to go to another page where all these options would be. I just don't know what to label this button as. This new page is the one that should have the print/save calculation button. I also want a button on this new page as well to come back to the calculator, but with a caveat. I want the button to come back to the calculator to be able to return to the calculator with the inputs the user left in the calculator before moving to the new page where we are going to implement these 4 options. Let me organize the directory in this project as well. Let's create a css and javascript folder, move the proper files there, and update the HTML pages to reflect these changes.

**Goal/Context:** 
Re-organizing project files into `css/styles.css` and `js/app.js`, relabeling the primary action button to "View Detailed Analysis & Report", persisting calculator state via `localStorage`, creating `report.html` & `js/report.js` with all 4 financial literacy options (Extra Payment Simulator, Amortization Schedule, DTI & 20% PMI Health Ratios, and Side-by-Side Scenario Comparisons), and providing a seamless "Return to Calculator" button that restores inputs.

---

### Prompt 26: Relocate report.html to html/ Directory
**Prompt:**
> Put report.html in an HTML folder, update links to css and js files.

**Goal/Context:** 
Moving `report.html` into `html/report.html`, updating relative paths for CSS (`../css/styles.css`), JS (`../js/report.js`), and return links (`../index.html#calculator`), and updating `js/app.js` navigation target.

---

### Prompt 27: Report Title Contrast & Full Month/Months Wording
**Prompt:**
> In report.html file, change text mo to month and mos to months. The text Auto Financing Loan Detailed Breakdown is too dark, I need it to be lighter, but remain in line with the monochromatic theme we have.

**Goal/Context:** 
Replacing all `mo`/`mos` abbreviations with full `month`/`months` words in `html/report.html` and `js/report.js`, and adjusting `#reportTitle` to crisp white (`#ffffff`) and card section titles to vibrant monochromatic blue (`var(--blue-800)`) for high-contrast readability.

---

### Prompt 28: Extract Report Styles to External css/report.css File
**Prompt:**
> The CSS styles for report.html should be in its own CSS file in css folder, not inline within the HTML file.

**Goal/Context:** 
Extracting all inline `<style>` block rules from `html/report.html` into a new dedicated stylesheet `css/report.css`, linking `<link rel="stylesheet" href="../css/report.css">` inside `html/report.html`, and keeping modular CSS architecture.

---

### Prompt 29: Fix Scenario B Term Unit Calculation Anomaly
**Prompt:**
> Scenario B (shorter term / lower rate) shows $10,108.53/month at a 6.5 rate when it should be $919.47. Why is that? What kind of calculation are you using here?

**Goal/Context:** 
Diagnosing and fixing Scenario B term duration math in `js/report.js`. When the primary loan used `months` as its term unit, Scenario B mistakenly evaluated option values (e.g. `value="1"`) as 1 month instead of 12 months (1 year), causing the monthly payment to compute as paying off the entire principal in a single month ($10,108.53) instead of over 12 months ($919.47). Updated `updateScenarioB()` to convert dropdown years directly into months (`scenBTermYears * 12`).

---

### Prompt 30: Optimize Scenario B Select Box Options & Flex Layout
**Prompt:**
> 1 Year (12 Months) and so on do not fit well in its box.

**Goal/Context:** 
Optimizing Scenario B select box option text to concise labels (`1 Year (12m)`, `2 Years (24m)`, etc.) and configuring flex layout (`flex: 1; min-width: 0; text-overflow: ellipsis`) so option text fits cleanly without clipping or pushing inputs off-screen.

---

### Prompt 31: Add Percent Suffix Badge to Scenario B Rate Input
**Prompt:**
> Add a % symbol for the rate input box like it is in the index.html file. Don't push to GitHub.

**Goal/Context:** 
Wrapping Scenario B `#scenBRateInput` in `.input-number-wrapper` with `<span class="input-suffix">%</span>` matching the interest rate input design on `index.html`. Holding Git commit locally without pushing to remote GitHub as requested.

---

### Prompt 32: Print & PDF Pagination Optimization
**Prompt:**
> When I click to print / save PDF, on the preview the document does not look right. The first section at the top is all by itself with a lot of white space under it. The amortization is cut off at the end of each page, and the other sections are by themselves as well with a lot of white space too. Can you explain why that is?

**Goal/Context:** 
Explaining CSS print pagination mechanics and updating `@media print` rules in `css/report.css`. Replaced rigid `break-inside: avoid` on outer section cards with natural `break-inside: auto` to eliminate large white gaps. Added `overflow: visible` to table wrapper and `break-inside: avoid` to table rows (`tr`) to prevent amortization table truncation across page breaks.

---

### Prompt 33: Remove Stray Trailing HTML Characters (l>)
**Prompt:**
> Why does it show this l> on the preview at the end? Can you explain?

**Goal/Context:** 
Explaining how stray text characters outside `</html>` get parsed by browser DOM engines as visible text nodes. Removed accidental trailing `l>` typo from line 258 of `html/report.html`.

---

### Prompt 34: Complete Inline CSS Refactoring across HTML Pages
**Prompt:**
> On index.html and report.html I see inline CSS styles. Is there a reason for that?

**Goal/Context:** 
Explaining the background behind rapid prototyping inline CSS and performing a total cleanup. Extracted all `style="..."` inline declarations from `index.html` into `css/styles.css` and from `html/report.html` into `css/report.css` using clean, semantic component classes.

---

### Prompt 35: Fix Tooltip Stacking Context & Z-Index Layering
**Prompt:**
> This tooltip goes behind the Personal, Mortgage tabs.

**Goal/Context:** 
Fixing CSS stacking context layering in `css/styles.css`. Updated `.form-group` with `position: relative; z-index: 5` and `.form-group:hover` / `:focus-within` with `z-index: 50`. Updated `.tooltip-icon` to `z-index: 100` (`z-index: 1000` on hover/focus) and `.tooltip-box` to `z-index: 9999` so tooltips pop smoothly over tabs and headers.

---

### Prompt 36: Add Credit Card Payoff Option to Calculator & Financial Literacy Report
**Prompt:**
> Let's add all 4 options, but go through report.html so that the text that is there already does not change too drastically to accommodate these new changes.

**Goal/Context:** 
Integrating Credit Card payoff as a 5th active loan type (`credit`) across `index.html`, `js/app.js`, `html/report.html`, and `js/report.js`. Added the 5th Credit Card tab, configured credit card payoff ranges (Default: $5,000 at 21.99% APR over 3 years), updated `typeLabels` and added Credit Card utilization guidance in Section 3 of `html/report.html` without altering existing text or layouts.

---

### Prompt 37: Fix Active Tab Indicator Alignment Offset on Reload
**Prompt:**
> I have an issue with the active state of the tabs for the loan calculator. Once selected it looks like it has a white box around it and the text looks blue right? If I refresh the page, when it reloads the white box is offset to the left somehow and if I re-click the tab again it goes back to centered the way it should be. Can you explain to me what went wrong?

**Goal/Context:** 
Explaining how premature DOM element measurement (`getBoundingClientRect()`) before web fonts and stylesheets finish layout paint causes initial pixel offsets. Implemented multi-pass indicator alignment (`requestAnimationFrame`, `setTimeout`, and `window.onload`) in `js/app.js` to ensure perfect centering when pages reload.

---

### Prompt 38: Optimize Scenario B Rate Input Width for Two-Decimal Rates
**Prompt:**
> The interest rate in scenario b does not fit in its input box when it has two decimals. We should give it a bit more padding.

**Goal/Context:** 
Increasing Scenario B rate input box container width from 90px to 104px and refining input padding in `css/report.css` so numbers with two decimal places (e.g. 21.99%) fit comfortably alongside the percentage suffix badge.
