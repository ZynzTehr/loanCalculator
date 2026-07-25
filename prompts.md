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





