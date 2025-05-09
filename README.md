# 🛒 Hypermart Checkout Assignment

A simple and interactive web-based simulation of customer checkout queue management in a supermarket. This application automatically assigns customers to the checkout counter with the fewest total items for optimal queue balancing.

---

## 📌 Features

- ✅ Add customers with a specified number of items.
- 🔁 Auto-assign customers to the checkout counter with the least total items.
- 🧾 Display total items and number of customers at each counter.
- ❌ Remove individual customers from a queue.
- 🟩 Highlights the active counter that receives a new customer.
- 📱 Fully responsive and lightweight UI using HTML, CSS, and JavaScript.

---

## 📁 File Structure

hypermart-checkout/
├── index.html # Main HTML structure
├── index.css # Styling for UI and layout
├── index.js # JavaScript for logic and interactivity
└── README.md # Project documentation

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

### 🔧 Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No installation required

### ▶️ Usage

1. Clone or download the repository.
2. Open the `index.html` file in your browser.
3. Enter a number of items in the input field.
4. Click **Add Customer** to simulate a customer joining the queue.
5. Remove customers by clicking the **minus (-)** button beside their entry.

---

## 🧠 How It Works

- There are **3 checkout counters** by default.
- Each customer has a number of items.
- The customer is automatically assigned to the counter with the **lowest total item count**.
- The active counter (that receives the customer) is highlighted with a **dark green border**.
- Each counter dynamically updates with the current queue and total item count.
