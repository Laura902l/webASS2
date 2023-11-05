document.addEventListener('DOMContentLoaded', function () {
    // Get all user data from Local Storage
    const allUserData = JSON.parse(localStorage.getItem('userAccounts')) || [];
  
    // Get the user list container
    const userList = document.getElementById('userList');
  
    // Display each user account as a separate block
    allUserData.forEach(function (userData, index) {
      const userBlock = document.createElement('div');
      userBlock.className = 'user-block';
      userBlock.innerHTML = `
        <label>User Email:</label>
        <input type="text" value="${userData.email}" disabled>
        <label>User Password:</label>
        <input type="text" value="${userData.password}" disabled>
        <button class="delete-user-button" data-index="${index}">Delete User</button>
      `;
  
      userList.appendChild(userBlock);
    });
  
    // Add a click event listener to each "Delete User" button
    const deleteButtons = document.querySelectorAll('.delete-user-button');
    deleteButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const index = button.getAttribute('data-index');
        if (confirm('Are you sure you want to delete this user?')) {
          // Remove the user data from the array
          allUserData.splice(index, 1);
          // Update Local Storage with the modified user data
          localStorage.setItem('userAccounts', JSON.stringify(allUserData));
          // Remove the user block from the page
          userList.removeChild(button.parentElement);
          alert('User data deleted.');
        }
      });
    });
  });
  function displayUserList() {
    const userAccounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
  
    const userListContainer = document.getElementById('userList');
    userListContainer.innerHTML = '<h3>User List:</h3>';
    
    userAccounts.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.textContent = `Email: ${user.email}, Password: ${user.password}`;
      userListContainer.appendChild(userDiv);
    });
  }




  
  
  displayUserList();
