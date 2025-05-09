const NUM_CHECKOUTS = 3;
let queues = Array.from({ length: NUM_CHECKOUTS }, () => []);
let lastAssignedIndex = null; // Track last updated queue

const container = document.getElementById("checkoutContainer");
const button = document.getElementById("addCustomer");
const input = document.getElementById("itemInput");

button.addEventListener("click", () => {
  const items = parseInt(input.value);
  if (!items || items <= 0) {
    alert("Please enter a valid number of items.");
    return;
  }

  assignCustomer(items);
  renderQueues();
  input.value = "";
});

function assignCustomer(items) {
  let minTotal = Infinity;
  let indexToAssign = 0;

  queues.forEach((queue, index) => {
    const total = queue.reduce((acc, val) => acc + val, 0);
    if (total < minTotal) {
      minTotal = total;
      indexToAssign = index;
    }
  });

  queues[indexToAssign].push(items);
  lastAssignedIndex = indexToAssign; // store for highlighting
}

function removeItem(queueIndex, itemIndex) {
  queues[queueIndex].splice(itemIndex, 1);
  renderQueues();
}

function renderQueues() {
  container.innerHTML = "";
  queues.forEach((queue, i) => {
    const totalItems = queue.reduce((acc, val) => acc + val, 0);
    const numberOfCustomers = queue.length;

    const queueBox = document.createElement("div");
    queueBox.className = "checkout-box";
    if (i === lastAssignedIndex) {
      queueBox.classList.add("active");
      setTimeout(() => {
        queueBox.classList.remove("active");
      }, 1000);
    }

    queueBox.innerHTML = `
      <div class="content_wrapper">
        <div class="checkout-header">
          <h2 class="checkout-title">Counter ${i + 1}</h2>
          <div class="checkout-info">
            <svg class="custom-svg-class" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 13H16C17.7107 13 19.1506 14.2804 19.3505 15.9795L20 21.5M8 13C5.2421 12.3871 3.06717 10.2687 2.38197 7.52787L2 6M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
              <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"></circle>
            </svg>
            <strong>${numberOfCustomers}</strong>&nbsp;Customer${
      numberOfCustomers !== 1 ? "s" : ""
    }
          </div>
        </div>
        <div class="checkout-list">
          <div class="data">
            ${queue
              .map(
                (item, idx) => `
              <div class="items_wrapper">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.9-.55L20 9M7 13L5.4 5M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z"  />
                  </svg>
                  ${item} item${item !== 1 ? "s" : ""}
                </span>
                <button class="remove-item-btn" data-queue="${i}" data-item="${idx}">-</button>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        <div class="total-items">
          Total Items: <strong>${totalItems}</strong>
        </div>
      </div>
    `;
    container.appendChild(queueBox);
  });

  document.querySelectorAll(".remove-item-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const queueIndex = +e.target.getAttribute("data-queue");
      const itemIndex = +e.target.getAttribute("data-item");
      removeItem(queueIndex, itemIndex);
    });
  });
}

renderQueues();
