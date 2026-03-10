
---

### **Exercise 1: Basic Counter**
**Task:**  
Create a `Counter` component that:
- Displays a number starting at `0`.
- Increases the count by 1 when a "Increment" button is clicked.
- Decreases the count by 1 when a "Decrement" button is clicked.

**Hints:**  
- Use `useState` to manage the count state.

---

### **Exercise 2: Toggle Button**
**Task:**  
Create a `Toggle` component with a button that:
- Toggles between "ON" and "OFF" states when clicked.
- Changes the background color (e.g., green for "ON" and red for "OFF").

**Hints:**  
- Use `useState` to manage the toggle state.

---

### **Exercise 3: Dynamic Input Field**
**Task:**  
Create a component with an input field that:
- Updates a displayed text (e.g., "Hello, [name]!") in real-time as the user types.

**Hints:**  
- Use `useState` to track the value of the input field.

---

### **Exercise 4: Show/Hide Content**
**Task:**  
Build a component with a "Show/Hide" button that:
- Toggles the visibility of a paragraph (`<p>`).
- Displays "Content is hidden" when the content is hidden.

**Hints:**  
- Use a boolean state to manage visibility.

---

### **Exercise 5: Form State Management**
**Task:**  
Create a registration form with fields for:
- Name
- Email
- Password  
Display the form data in real-time below the form as the user types.

**Hints:**  
- Use `useState` to manage each field’s state or a single object for all fields.

---

### **Exercise 6: Multiple Counters**
**Task:**  
Build a component with:
- Two counters (`counter1` and `counter2`).
- Buttons to increment or decrement each counter separately.
- A "Reset All" button to reset both counters to `0`.

**Hints:**  
- Use separate state variables or an object for both counters.

---

### **Exercise 7: Todo List**
**Task:**  
Create a `TodoList` component that:
- Allows the user to add tasks to a list.
- Displays the list of tasks.
- Removes a task when a "Remove" button next to it is clicked.

**Hints:**  
- Use an array state to manage the list of tasks.

---

### **Exercise 8: Like/Dislike Buttons**
**Task:**  
Create a component with:
- A "Like" button that increments a `likes` state.
- A "Dislike" button that increments a `dislikes` state.
- Display the count for both likes and dislikes.

**Hints:**  
- Use separate state variables for `likes` and `dislikes`.

---

### **Exercise 9: Tab Navigation**
**Task:**  
Build a component with three tabs: "Home," "About," and "Contact."  
- Clicking a tab updates the content displayed below it.
- Highlight the active tab visually.

**Hints:**  
- Use state to track the active tab.

---

### **Exercise 10: Dynamic Background Color**
**Task:**  
Create a component where:
- A dropdown menu allows the user to select a color (e.g., "Red," "Blue," "Green").
- The background color of the component changes to the selected color.

**Hints:**  
- Use `useState` to manage the selected color.

---

### **Exercise 11: Counter with Limits**
**Task:**  
Create a counter component that:
- Increments and decrements the count.
- Disables the "Increment" button when the count reaches a maximum (e.g., 10).
- Disables the "Decrement" button when the count reaches a minimum (e.g., 0).

**Hints:**  
- Use conditions to enable/disable buttons based on state.

---

### **Exercise 12: Timer**
**Task:**  
Create a timer component that:
- Starts at `0` and increments by `1` every second when a "Start" button is clicked.
- Stops when a "Stop" button is clicked.
- Resets to `0` when a "Reset" button is clicked.

**Hints:**  
- Use `useState` for the timer and `useEffect` for timing logic.

---

### **Exercise 13: Shopping Cart**
**Task:**  
Build a component where:
- A list of products is displayed with "Add to Cart" buttons.
- Clicking a button adds the product to a shopping cart.
- The cart displays the total number of items and the total cost.

**Hints:**  
- Use state to manage the cart as an array or object.

---

### **Exercise 14: Derived State**
**Task:**  
Create a component that:
- Allows the user to input a price and a discount percentage.
- Calculates and displays the discounted price.

**Hints:**  
- Use state for the input fields and derived calculations.

---

### **Exercise 15: Counter with History**
**Task:**  
Create a counter component that:
- Tracks the current count.
- Maintains a history of all previous counts in an array.

**Hints:**  
- Use an array state to store the history and append each count update.

---

