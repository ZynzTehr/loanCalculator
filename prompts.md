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

### Prompt 5: Color Restoration & CSS Selector Refinement
**Prompt:**
> The color blue it had is gone now, it's white right now. Change the color back to the blue it was before, but keep the 2rem font-size.

**Goal/Context:** 
Refining CSS targeting with an explicit class (`.results-label`) to ensure `color: var(--blue-300)` (`#93c5fd`) blue text color is preserved while retaining the `2rem` font size.
