register = () => {
  userName = uname.value;
  first = fname.value;
  last = lname.value;
  pwd = pass.value;
  cpwd = cpass.value;
  if (cpwd == pwd) {
    passmatch.innerHTML = `<div class="alert alert-success"><i class="fa-solid fa-circle-check"></i> Successfully Registered</div>`;
    user = { userName, first, last, pwd };
    if (userName in localStorage) {
      passmatch.innerHTML = `<div class="alert alert-danger"><i class="fa-solid fa-circle-exclamation"></i> Username already taken!!!</div>`;
    } else {
      localStorage.setItem(userName, JSON.stringify(user));
      alert("Registered Successfully");
      window.location = "index.html";
    }
    // console.log(user);
  } else
    passmatch.innerHTML = `<div class="alert alert-danger"><i class="fa-solid fa-circle-exclamation"></i> Doesn't match!!!</div>`;
};

login = () => {
  username = uname.value;
  pwd = pword.value;

  if (username in localStorage) {
    valData = JSON.parse(localStorage.getItem(username));
    // console.log(valData); O/P: keys - userName, first, last, pwd
    if (pwd == valData.pwd) {
      window.location = "home.html";
      // uid.innerHTML = `${valData.userName}`;
      // namePoint.innerHTML = `${valData.first}`;
    } else {
      alertContent.innerHTML = `<div class="alert alert-danger"><i class="fa-solid fa-circle-exclamation"></i> Incorrect password.!!!</div>`;
    }
  } else {
    alertContent.innerHTML = `<div class="alert alert-danger"><i class="fa-solid fa-circle-exclamation"></i> Username doesn't exist. <a href='./signup.html' class='link-danger text-decoration-none'>Register first</a>!!!</div>`;
  }
};

addBook = () => {
  bookName = bname.value;
  authorName = author.value;
  bookCover = bimg.value;

  if (bookName in localStorage) {
    addBalert.innerHTML = `<div class="alert alert-danger"><i class="fa-solid fa-circle-exclamation"></i> Book with same title already</div>`;
  } else {
    book = { bookName, authorName, bookCover };
    localStorage.setItem(bookName, JSON.stringify(book));
    alert("Book Added Succesfully");
    window.location = "addBook.html";
  }
};

searchBook = () => {
  searchVal = search.value;
  if (searchVal in localStorage) {
    fetchVal = JSON.parse(localStorage.getItem(searchVal));
    searchResult.innerHTML += `<div class="col"><div class="card mb-3"><div class="m-0"><img class="card-img-top" src="${fetchVal.bookCover}"/></div><div class="card-body"><h3 class="text-primary">${fetchVal.bookName}</h3><h6 class="text-dark">${fetchVal.authorName}</h6></div></div ></div> `;
  } else {
    searchResult.innerHTML = `<div class="alert alert-danger"><i class="fa-solid fa-circle-exclamation"></i> Book Not Found </div>`;
  }
};
