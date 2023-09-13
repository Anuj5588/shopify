document.addEventListener("DOMContentLoaded", function () {
  const addButtons = document.querySelectorAll(".add-button");
  const selectedItemsList = document.getElementById("selected-items");
  const totalPriceElement = document.getElementById("total-price");

  let selectedItems = [];
  let totalPrice = 0;

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemName = button.previousElementSibling.innerText;
      const itemPrice = parseFloat(button.getAttribute("data-price"));

      if (selectedItems.length < 8) {
        selectedItems.push({ name: itemName, price: itemPrice });
        totalPrice += itemPrice;
        updateSelectedItemsList();
        updateTotalPrice();
      } else {
        alert("You can select up to 8 items.");
      }
    });
  });

  function updateSelectedItemsList() {
    selectedItemsList.innerHTML = "";
    selectedItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - ${item.price.toFixed(2)}`;
      selectedItemsList.appendChild(listItem);
    });
  }

  function updateTotalPrice() {
    totalPriceElement.textContent = `${totalPrice.toFixed(2)}`;
  }
});
