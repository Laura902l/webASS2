document.addEventListener('DOMContentLoaded', function () {

    const allUserData = JSON.parse(localStorage.getItem('userAccounts')) || [];
  

    const userList = document.getElementById('userList');
  

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
  

    const deleteButtons = document.querySelectorAll('.delete-user-button');
    deleteButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const index = button.getAttribute('data-index');
        if (confirm('Are you sure you want to delete this user?')) {

          allUserData.splice(index, 1);

          localStorage.setItem('userAccounts', JSON.stringify(allUserData));
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
