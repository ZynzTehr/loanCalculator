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
> is there a reason you chose to separate personal, mortgage, auto and student? they all have the same inputs. 

**Goal/Context:** 
Inquiring about why loan tabs exist when they all share identical input sliders and calculation formulas under the hood.

---

### Prompt 6: Dynamic & Distinct Loan Categories Feature
**Prompt:**
> Make each tab truly distinct & dynamic

**Goal/Context:** 
Transforming loan category tabs (Personal, Mortgage, Auto, Student) into distinct, dynamic calculator modes with custom ranges, tailored preset chips, term units (Years vs Months), and down payment input fields.

---

### Prompt 7: Mortgage Disclaimer Addition
**Prompt:**
> Include a disclaimer in the mortgage tab. It should say that calculations do not include property taxes and insurance costs since these change depending on location.

**Goal/Context:** 
Adding a location-based tax and insurance disclaimer box to the Mortgage tab for transparency and financial accuracy.

---

### Prompt 8: Comprehensive Financial Literacy Tab Disclaimers
**Prompt:**
> yes lets add them, i would like this application to be as helpful as posible when it is being used to help people with finantial leteracy.

**Goal/Context:** 
Expanding disclaimers dynamically across all loan tabs (Personal, Mortgage, Auto, Student) to educate users on real-world expenses like origination fees, sales tax/registration, property taxes/PMI, and in-school interest capitalization.

---

### Prompt 9: IntersectionObserver Scroll Animations
**Prompt:**
> lets use javascript intersction observer to animate and liven up our application, so it looks more modern and cool.

**Goal/Context:** 
Integrating JavaScript `IntersectionObserver` to trigger hardware-accelerated CSS scroll-reveal entrance animations and scale transitions as hero elements, calculator cards, feature grids, and guide items scroll into view.

---

### Prompt 10: Continuous Scroll Animation & Increased Delay
**Prompt:**
> lets increase the delay, and lets make it so that the items leave the screen when not in view

**Goal/Context:** 
Increasing transition duration (`0.85s`) and staggered delays (`0.15s`–`0.6s`), and removing one-shot unobserving so items exit (`is-visible` removed) and re-animate continuously as users scroll up and down.

---

### Prompt 11: Transition Performance Tuning & Initial Load Delay
**Prompt:**
> revert the delay to .75s from 0.85s, the screen became laggy. introduce the .85s delay at initial load of the application. the rest of the time it should be .75s

**Goal/Context:** 
Reverting standard scroll reveal duration back to snappy `0.75s` to eliminate scroll lagginess, while reserving `0.85s` duration exclusively for the initial application hero load via `.initial-load`.

---

### Prompt 12: Dynamic Cents Formatting
**Prompt:**
> I went over the calculations you make for loan. although the are correct they do not show decimals. why did you choose that?
> yes lets update to display decimals. but keep the number itself when decimals are 0, i.e 15,000 versus 15,000.00

**Goal/Context:** 
Updating number and currency formatters to display decimal places for cents while omitting `.00` on whole integer amounts.

---

### Prompt 13: Cents Trailing Zero Precision (.90 formatting)
**Prompt:**
> i noticed that if the decimal is .90 it only displays .9, lets change it so that it displays .90 and so on for any other numbers that have trailing zeroes.

**Goal/Context:** 
Updating currency formatters to dynamically set `minimumFractionDigits: 2` whenever cents exist so values like `.90` display as `$489.90` instead of `$489.9`.

---

### Prompt 14: Sliding Active Tab Indicator & GitHub Sync
**Prompt:**
> i would like the transition for the personal, mortgage, auto, student loan tabs to be animated.

**Goal/Context:** 
Adding a responsive sliding background pill indicator (`.tab-indicator`) that glides smoothly beneath Personal, Mortgage, Auto, and Student tabs when clicked, combined with input container cross-fade slide transitions (`.tab-change-anim`), and pushing all commits to GitHub.

---

### Prompt 15: Dynamic Navbar Active Link & Scroll Spy
**Prompt:**
> links in navbar do not show what link is active when clicked on. only calculator remains active.

**Goal/Context:** 
Adding click handlers and an `IntersectionObserver` scroll-spy in JavaScript to dynamically update `.active` state on header navbar links (Calculator, Features, Guide) as users click links or scroll through page sections.

---

### Prompt 16: Accordion Text Fade-in Animation
**Prompt:**
> when clicking on an accordion, i would like the text to fade in.

**Goal/Context:** 
Adding smooth CSS `opacity` (fade-in) and `transform` transitions to `.accordion-content` so that text gracefully fades in when opening any Financial Literacy Guide accordion item.

---

### Prompt 17: Architectural Rationale for DOMContentLoaded Wrapper
**Prompt:**
> why did you choose to use only one function. document.addEventlistener('DOMContentLoaded')?

**Goal/Context:** 
Explaining the architectural advantages of wrapping application initialization inside `DOMContentLoaded` for guaranteed DOM node availability, closure encapsulation, one-time DOM element caching, and coordinated bootstrapping.

---

### Prompt 18: Architectural Rationale for Tab Event Dispatch
**Prompt:**
> why did you choose to do this in this particular manner? can you explain. (referencing tabBtns.forEach and dataset.type in app.js)

**Goal/Context:** 
Explaining the design pattern behind iterative listener binding, mutually exclusive active class toggling, decoupled indicator updates, and HTML data-attribute (`data-type`) configuration dispatch.

---

### Prompt 19: Architectural Rationale for Window Resize Listener
**Prompt:**
> why use a window event listener as supposed to another type? (referencing window.addEventListener('resize'))

**Goal/Context:** 
Explaining why `window` is the only standard DOM entity emitting viewport `resize` events, and how recalculating pixel-based `translateX` offsets on window resize prevents responsive UI misalignment.

---

### Prompt 20: Technical Rationale for Default Function Parameters
**Prompt:**
> @[/Users/zynztehr/Desktop/loanCalculator/app.js:L172-L184] on this function, why did you include isFloat = false? just in case there is no value we have a default?

**Goal/Context:** 
Explaining how default parameter `isFloat = false` differentiates between integer parsing (`parseInt`) for loan amounts/terms and floating-point parsing (`parseFloat`) for interest rates.

---

### Prompt 21: Refactoring Redundant Function Call Arguments
**Prompt:**
> so why is the false included when calling teh function on line 186, 187 and 189 then?

**Goal/Context:** 
Refactoring `syncControlPair` function calls to remove redundant `false` arguments and rely directly on ES6 default parameter syntax.

---

### Prompt 22: Hero Active State & FinPulse Brand Underline
**Prompt:**
> for the navbar, when page loads, calculator is active when it should not be, FinPulse should be. for this lets just have the word FinPulse underlined when active

**Goal/Context:** 
Setting `FinPulse` (brand logo) as the active navigation item when viewing the top/hero section (`id="hero"`), removing hardcoded active state on Calculator on page load, and adding CSS text-decoration underline formatting to the word `FinPulse` when active.

---

### Prompt 23: Financial Literacy Product Enhancements & GitHub Sync
**Prompt:**
> what suggestions would you have to improve this application as a financial literacy product?
> lets push to github first and then give me the options again, so that if the changes are too much we can go back to the current state we are in. update prompts.md

**Goal/Context:** 
Formulating product enhancement options (Extra Payment Simulator, Amortization Schedule Chart, Financial Health DTI/PMI Indicators, Scenario Comparisons, and Inline Glossary Tooltips), updating prompt history, and syncing all commits to GitHub as a baseline checkpoint.

---

### Prompt 24: Option 5 Educational Tooltips & Responsive Clamp Scaling (320px, 375px, 425px)
**Prompt:**
> i would like to implement option 5 to see how it works for now, then decide on the other ones. show me options again afterward. i have issues with responsiveness at 320px, 375px, and 425px. lets implement for example: font-size: clamp(1.8rem, calc(), 5rem) in CSS to help with font scaling and zooming as well.

**Goal/Context:** 
Implementing Option 5 in-line educational glossary tooltips (`?` icons) on key financial terms, implementing fluid CSS `clamp(...)` typography and card padding rules, and adding responsive media query overrides for 320px, 375px, and 425px mobile viewports.

---

### Prompt 25: Multi-Page Architecture & 4-Option Financial Literacy Expansion
**Prompt:**
> i want to implement all 4 options, but i want to use the print/ save calculation button to go to another page where all this options would be, i just don't know what to label this button as, this new page is the one that should have the print save calculation button. i also want a button on this new page as well to come back to the calculator, but with a caviat. i want the button to come back to the calculator to be able to return to the calculator with the inputs the user left in the calculator befor moving to the new page where we are going to implement this 4 option. lets organize the directory in this project as well. let create a css and javascript folder, move the proper files there, and update the HTML pages to reflect these changes.

**Goal/Context:** 
Re-organizing project files into `css/styles.css` and `js/app.js`, relabeling the primary action button to "View Detailed Analysis & Report", persisting calculator state via `localStorage`, creating `report.html` & `js/report.js` with all 4 financial literacy options (Extra Payment Simulator, Amortization Schedule, DTI & 20% PMI Health Ratios, and Side-by-Side Scenario Comparisons), and providing a seamless "Return to Calculator" button that restores inputs.

---

### Prompt 26: Relocate report.html to html/ Directory
**Prompt:**
> put report.html in an HTML folder, update links to css and js files

**Goal/Context:** 
Moving `report.html` into `html/report.html`, updating relative paths for CSS (`../css/styles.css`), JS (`../js/report.js`), and return links (`../index.html#calculator`), and updating `js/app.js` navigation target.



















