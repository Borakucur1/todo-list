// 1. Start with an array of grocery items
let todoItems = [
    'milk',
    'bread',
    'eggs',
    'apples',
    'rice'
];

// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
const input = document.getElementById('text');
const list = document.getElementById('list');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');

// 3. Display all items in the list
function updateList() {
    list.innerHTML = '';

    for (let i = 0; i < todoItems.length; i++) {
        const item = document.createElement('li');
        item.innerText = todoItems[i];

        // Remove an item when it is clicked
        item.addEventListener('click', function () {
            todoItems.splice(i, 1);
            updateList();
        });

        list.appendChild(item);
    }
}

updateList();

// 4. Add a new item when the Add button is clicked
addItemButton.addEventListener('click', function () {
    const newItem = input.value.trim().toLowerCase();

    if (newItem !== '') {
        todoItems.push(newItem);
        input.value = '';
        updateList();
    }
});

// 5. Sort items alphabetically
sortBtn.addEventListener('click', () => {
    todoItems.sort();
    updateList();
});

// 6. Clear all items
clearBtn.addEventListener('click', () => {
    todoItems = [];
    updateList();
});
