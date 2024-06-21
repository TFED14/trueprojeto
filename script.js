function store(){
    var Name = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var currentDate = new Date();
  
    if(Name.length == 0){
      alert('Informe um username');
    }else if(!Name.match(upperCaseLetters)){
      alert('Deve conter uma letra maiuscula');
    }else if(!Name.match(lowerCaseLetters)){
      alert('Deve conter uma letra minúscula');
    }else{
      var newItem = {
        Name: Name,
        Email: Email,
        RegistrationDate: currentDate
      };
  
      var key = 'user_' + Date.now();
      localStorage.setItem(key, JSON.stringify(newItem));
    
      alert('sua conta foi criada');
    
      updateList();
      document.getElementById('Name').value = "";
      document.getElementById('Email').value = "";    
    }
  }
  
  function updateList(){
    var cadastroLista = document.getElementById('cadastroLista');
    cadastroLista.innerHTML = '';
  
    for(var i = 0; i < localStorage.length; i++){
      var key = localStorage.key(i);
      var item = JSON.parse(localStorage.getItem(key));
  
      var li = document.createElement("li");
      var usernamePara = document.createElement("p");
      usernamePara.textContent = "Username: " + item.Name;
      li.appendChild(usernamePara);
  
      var emailPara = document.createElement("p");
      emailPara.textContent = "Email: " + item.Email;
      li.appendChild(emailPara);
  
      var registrationPara = document.createElement("p");
      registrationPara.textContent = "Data de Inscrição: " + item.RegistrationDate;
      li.appendChild(registrationPara);
  
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Excluir item";
      deleteButton.setAttribute("data-key", key);
      deleteButton.className = "delete-item-btn";
  
      deleteButton.onclick = function(){
        var keyToDelete = this.getAttribute("data-key");
        localStorage.removeItem(keyToDelete);
        updateList();
      }
      li.appendChild(deleteButton);
      cadastroLista.appendChild(li)
    }
  }
  
  function search() {
      var searchTerm = document.getElementById('searchTerm').value.toLowerCase();
      var cadastroLista = document.getElementById('cadastroLista');
      cadastroLista.innerHTML = '';
    
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var item = JSON.parse(localStorage.getItem(key));
    
        if (item.Name.toLowerCase().includes(searchTerm) || item.Email.toLowerCase().includes(searchTerm)) {
          var li = document.createElement("li");
          var usernamePara = document.createElement("p");
          usernamePara.textContent = "Username: " + item.Name;
          li.appendChild(usernamePara);
    
          var emailPara = document.createElement("p");
          emailPara.textContent = "Email: " + item.Email;
          li.appendChild(emailPara);
    
          var registrationPara = document.createElement("p");
          registrationPara.textContent = "Data de Inscrição: " + item.RegistrationDate;
          li.appendChild(registrationPara);
    
          var deleteButton = document.createElement("button");
          deleteButton.textContent = "Excluir item";
          deleteButton.setAttribute("data-key", key);
          deleteButton.className = "delete-item-btn";
    
          deleteButton.onclick = function() {
            var keyToDelete = this.getAttribute("data-key");
            localStorage.removeItem(keyToDelete);
            updateList();
          }
          li.appendChild(deleteButton);
          cadastroLista.appendChild(li)
        }
      }
    }
  
  function deleteAll() {
    localStorage.clear();
    updateList();
    alert('Todos os itens foram excluídos da lista e do local Storage.');
  }
  
  function check(){
      var storedName = localStorage.getItem('Name');
      var storedEmail = localStorage.getItem('Email');
  
      var userName = document.getElementById('userName');
      var userEmail = document.getElementById('userEmail');
  
    if(userName.value == storedName && userEmail.value == storedEmail){
      alert('Login realizado.');
    }else{
      alert('Erro ao fazer login');
    }
  }