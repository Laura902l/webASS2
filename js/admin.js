document.addEventListener('DOMContentLoaded', function () {
  displayUserList();

  // Add click event listeners to each "Edit User" button
  const editButtons = document.querySelectorAll('.edit-user-button');
  editButtons.forEach(function (button) {
    button.addEventListener('click', handleEditButtonClick);
  });

  // Function to handle "Edit" button click
  function handleEditButtonClick() {
    const index = this.getAttribute('data-index');
    const userBlock = this.parentElement;

    // Enable input fields for editing
    const inputs = userBlock.querySelectorAll('input');
    inputs.forEach(function (input) {
      input.disabled = false;
    });

    // Replace "Edit" button with "Save" button
    const saveButton = createButton('Save Changes', 'save-user-button', index, handleSaveButtonClick);
    replaceButton(this, saveButton);
  }

  // Function to handle "Save" button click
  function handleSaveButtonClick(index) {
    const userAccounts = getUserAccounts();
    const userBlock = document.querySelector(`.user-block[data-index="${index}"]`);
    const inputs = userBlock.querySelectorAll('input');

    // Create a new object to avoid modifying the original user object directly
    const updatedUser = {};
    
    inputs.forEach(function (input) {
      const fieldName = input.getAttribute('data-field');
      updatedUser[fieldName] = input.value;
    });

    // Update the userAccounts array with the modified user data
    userAccounts[index] = updatedUser;
    localStorage.setItem('userAccounts', JSON.stringify(userAccounts));

    // Disable input fields after saving changes
    inputs.forEach(function (input) {
      input.disabled = true;
    });

    // Replace "Save" button with "Edit" button
    const editButton = createButton('Edit', 'edit-user-button', index, handleEditButtonClick);
    replaceButton(document.querySelector(`.save-user-button[data-index="${index}"]`), editButton);

    // Display the updated user list
    displayUserList();
  }

  // Function to create a button with attributes
  function createButton(text, className, dataIndex, clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    button.setAttribute('data-index', dataIndex);
    button.addEventListener('click', function () {
      clickHandler(dataIndex);
    });
    return button;
  }

  // Function to replace a button in the user block
  function replaceButton(oldButton, newButton) {
    const userBlock = oldButton.parentElement;
    userBlock.removeChild(oldButton);
    userBlock.appendChild(newButton);
  }

  // Function to display the user list
  function displayUserList() {
    const userAccounts = getUserAccounts();
    const userListContainer = document.getElementById('userList');
    userListContainer.innerHTML = '<h3>User List:</h3>';

    userAccounts.forEach(function (user, index) {
      const userBlock = createUserBlock(user, index);
      userListContainer.appendChild(userBlock);
    });
  }

  // Function to create a user block with input fields
  function createUserBlock(user, index) {
    const userBlock = document.createElement('div');
    userBlock.className = 'user-block';
    userBlock.setAttribute('data-index', index); // Add this line to store the index
  
    // Create input fields for each user property
    for (const property in user) {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = user[property];
      input.disabled = true; // Initially disabled
      input.setAttribute('data-field', property);
      userBlock.appendChild(input);
    }
  
    // Add an "Edit" button
    const editButton = createButton('Edit', 'edit-user-button', index, handleEditButtonClick);
  
    // Add a "Delete" button
    const deleteButton = createButton('Delete User', 'delete-user-button', index, function () {
      if (confirm('Are you sure you want to delete this user?')) {
        deleteUser(index);
      }
    });
  
    // Append buttons to the user block
    userBlock.appendChild(editButton);
    userBlock.appendChild(deleteButton);
  
    return userBlock;
  }
  // Function to delete a user
  function deleteUser(index) {
    const userAccounts = getUserAccounts();
    userAccounts.splice(index, 1);
    localStorage.setItem('userAccounts', JSON.stringify(userAccounts));
    displayUserList();
    alert('User data deleted.');
  }

  // Function to get user accounts from Local Storage
  function getUserAccounts() {
    return JSON.parse(localStorage.getItem('userAccounts')) || [];
  }
});
