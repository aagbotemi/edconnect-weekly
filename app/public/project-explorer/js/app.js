/*var user = null;
let url = window.location.href.split('/').pop();
function programs() {
    let programDropdown = document.getElementById('Program');
    programDropdown.length = 0;
    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose...';
    programDropdown.add(defaultOption);
    programDropdown.selectedIndex = 0;
    fetch('/api/programs')
        .then(response => response.json())
        .then(data => {
            let option;
            for (let i = 0; i < data.length; i++) {
                option = document.createElement('option');
                option.text = data[i];
                option.value = data[i];
                programDropdown.add(option);
            }
        });
};

function graduationYears() {
    let graduationYearsDropdown = document.getElementById('GraduationYear');
    graduationYearsDropdown.length = 0;
    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose...';
    graduationYearsDropdown.add(defaultOption);
    graduationYearsDropdown.selectedIndex = 0;
    fetch('/api/graduationYears')
        .then(response => response.json())
        .then(data => {
            let option2;
            for (let i = 0; i < data.length; i++) {
                option2 = document.createElement('option');
                option2.text = data[i];
                option2.value = data[i];
                graduationYearsDropdown.add(option2);
            };
        });
};

function registerPost() {
    const data = {};
    let regBtn = document.getElementById('registrationButton');
    regBtn.addEventListener("click", function (event) {
        data['firstname'] = document.getElementById('firstName').value;
        data['lastname'] = document.getElementById('LastName').value;
        data['email'] = document.getElementById('Email').value;
        data['password'] = document.getElementById('passWord').value;
        data['matricNumber'] = document.getElementById('MatricNumber').value;
        data['program'] = document.getElementById('Program').value;
        data['graduationYear'] = document.getElementById('GraduationYear').value;
        event.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(async function (response) {
                const resp = await response.json()
                if (response.status == 200) {
                    document.cookie = `uid=${resp.data.id}; max-age=${60 * 60 * 24 * 7}; path=/`;
                    window.location = "index.html";
                } else {
                    errorAlert = document.createElement('div');
                    errorAlert.setAttribute('id', 'erroralert');
                    errorAlert.className = 'alert alert-danger';
                    document.getElementById('signupForm').prepend(errorAlert);
                    let err = document.getElementById('erroralert');
                    for (let i = 0; i < resp.errors.length; i++) {
                        errorText = document.createElement('h6');
                        errorText.innerText = resp.errors[i];
                        err.append(errorText);
                    }
                }
            });
    });
};

function logInPost() {
    const data2 = {};
    let loginBtn = document.getElementById('loginButton');
    loginBtn.addEventListener('click', function (event) {
        data2['email'] = document.getElementById('logInEmail').value;
        data2['password'] = document.getElementById('logInpassWord').value;
        event.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2)
        })
            .then(async function (response) {
                const resp = await response.json()
                if (response.status == 200) {
                    document.cookie = `uid=${resp.data.id}; max-age=${60 * 60 * 24 * 7}; path=/`;
                    window.location = "index.html";
                } else {
                    errorAlert2 = document.createElement('div');
                    errorAlert2.setAttribute('id', 'erroralert2');
                    errorAlert2.className = 'alert alert-danger';
                    document.getElementById('loginForm').prepend(errorAlert2);
                    let err = document.getElementById('erroralert2');
                    errorText = document.createElement('h6');
                    errorText.innerText = "Invalid email/password";
                    err.append(errorText);

                }
            });
    });
};

function projectPost() {
    const data3 = {};
    let projectBtn = document.getElementById('projectButton');
    projectBtn.addEventListener("click", function (event) {
        data3['name'] = document.getElementById('projectName').value;
        data3['abstract'] = document.getElementById('projectAbstract').value;
        data3['authors'] = document.getElementById('author').value.split(',');
        data3['tags'] = document.getElementById('tag').value.split(',');
        event.preventDefault();
        fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data3)
        })
            .then(async function (response) {
                const resp = await response.json()
                if (response.status == 200) {
                    window.location = "index.html";
                } else {
                    errorAlert = document.createElement('div');
                    errorAlert.setAttribute('id', 'erroralert');
                    errorAlert.className = 'alert alert-danger';
                    document.getElementById('createProjectForm').prepend(errorAlert);
                    let err = document.getElementById('erroralert');
                    for (let i = 0; i < resp.errors.length; i++) {
                        errorText = document.createElement('h6');
                        errorText.innerText = resp.errors[i];
                        err.append(errorText);
                    }
                }
            });
    });
};

function projectList() {
    fetch('/api/projects')
        .then(response => response.json())
        .then(data => {
            projectData = data.slice(0, 4);
            projectData.forEach(value => {
                showCase = document.getElementsByClassName('showcase');
                projectDisplay = document.createElement('div');
                projectDisplay.className = 'col-md-3';
                showCase[0].append(projectDisplay);
                projectCard = document.createElement('div');
                projectCard.className = 'card';
                projectDisplay.append(projectCard);
                projectCardBody = document.createElement('div');
                projectCardBody.className = 'card-body';
                projectCard.append(projectCardBody);
                cardTitle = document.createElement('a');
                cardTitle.className = 'card-title text-primary';
                cardTitle.href = 'viewProject.html?id=' + value.id;
                cardTitle.innerText = value.name
                projectCardBody.append(cardTitle);
                authorTitle = document.createElement('p');
                authorTitle.className = 'card-subtitle text-muted';
                authorTitle.innerText = value.authors;
                projectCardBody.append(authorTitle);
                abstractTitle = document.createElement('p');
                abstractTitle.innerText = value.abstract;
                projectCardBody.append(abstractTitle);
                tagLink = document.createElement('a');
                tagLink.className = 'card-link';
                tagLink.href = '#';
                tagLink.innerText = value.tags
                projectCardBody.append(tagLink);
            })

        })
}

function projectView() {
    const queryString = window.location.search;
    const urlP = new URLSearchParams(queryString);
    urlId = urlP.get('id');
    fetch('/api/projects/' + urlId)
        .then(response => response.json())
        .then(data => {
            if (data != null) {
                Title = document.getElementById('project_name');
                Title.innerText = data.name;
                abstract = document.getElementById('project_abstract');
                abstract.innerText = data.abstract;
                author = document.getElementById('project_authors');
                author.innerText = data.authors
                tags = document.getElementById('project_tags');
                tags.innerText = data.tags;
                fetch('/api/users/' + data.createdBy)
                    .then(response => response.json())
                    .then(data2 => {
                        projectAuthor = document.getElementById('project_author');
                        projectAuthor.innerHTML = 'Created By' + '<br>' + data2.firstname + ' ' + data2.lastname;
                    })
            }
        })
}

function logOut() {
    let logOutBtn = document.getElementById('logout')
    logOutBtn.addEventListener('click', function (event) {
        document.cookie = `uid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        window.location = "index.html";
    });
};

function getCookieId() {
    if (document.cookie.includes('uid')) {
        let uidRow = document.cookie.split(';').find(row => row.startsWith('uid'));
        if (uidRow != -1) {
            return uidRow.split('=')[1];
        }
    }
    return false;
};

function showLoggedInUser() {
    let authElements = document.querySelectorAll('.auth-buttons');
    if (user) {
        authElements[1].classList.toggle('hidden')
        document.getElementById("username").textContent = 'Hi ' + user.firstname;
    } else {
        authElements[0].classList.toggle('hidden')
    }
};

async function initUser() {
    let userId = getCookieId()
    if (userId) {
        let response = await fetch('/api/users/' + userId)
        user = await response.json();
    } else if (!user && url.startsWith('createProject.html')) {
        window.location = 'login.html';
    }
    showLoggedInUser();
};

window.addEventListener('DOMContentLoaded', (event) => {
    initUser();
    if (url.startsWith('register.html')) {
        graduationYears();
        programs();
        registerPost();
    } else if (url.startsWith('login.html')) {
        logInPost();
    } else if (url.startsWith('createProject.html')) {
        projectPost();
        logOut();
    } else if (url.startsWith('index.html')) {
        projectList()
        logOut();
    } else if (url.startsWith('viewProject.html')) {
        projectView();
        logOut();
    }
    else if ((url.startsWith('search.html') || url.startsWith('profile.html') || url.startsWith('editProject.html'))) {
        logOut();
    }
});
*/
if (window.location.href.includes('register.html')) {
  // check if window.location. is on register page

  let program = document.getElementById('program')
  fetch('/api/programs', {
    // use the fetch api to get program data

    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let options = data.map((item) => `<option value=${item}>${item}</option>`)
      return options
    })
    .then((options) => options.join(' ')) // map returns a ner array so we need to join them as string
    .then((options) => (program.innerHTML = options))

  // step 4 (2)
  let graduationYear = document.getElementById('graduationYear')
  fetch('/api/graduationYears', {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let gradYears = data.map((item) => `<option ${item}}>${item}</option>`)
      return gradYears
    })
    .then((data) => data.join(' '))
    .then((years) => (graduationYear.innerHTML = years))
    .catch((e) => console.log(e.message))

  // step 4 (3)
  // This should handle form submissions and validation

  const signupForm = document.getElementById('signupForm')
  const errorAlert = document.getElementById('danger-alert')
  errorAlert.style.display = 'none' // hide the div display

  function postData(event) {
    // form submit handler

    event.preventDefault()

    let regInfo = {
      firstname: document.getElementById('firstname').value,
      lastname: document.getElementById('lastname').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      matricNumber: document.getElementById('matricNumber').value,
      program: document.getElementById('program').value,
      graduationYear: document.getElementById('graduationYear').value,
    }

    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(regInfo), // All form data // turn values to json format
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        //step 4 [3c]
        if (res.status === 'ok') {
          document.cookie = `uid=${res.data.id}; path=/` // store the id in a cookie named uid.
          window.location.replace('index.html') // redirect user to index.html page
        } else if (res.status !== 'ok') {
          // step 4 [3d]
          let errors = res.errors.map((error) => error)
          errors.forEach((error) => {
            errorAlert.innerHTML += `<strong>${error}</strong><br>` // loop through returned array, append answer to error div
          })
        }
        errorAlert.className = 'alert alert-danger'
        errorAlert.style.display = 'block'

        setTimeout(function () {
          // hide the error div and clear the contents
          errorAlert.style.display = 'none'
          errorAlert.textContent = ''
        }, 3000)
      })
  }

  signupForm.addEventListener('submit', postData) // call the function to post the form
}

// // step 5 - Update the Navbar.
if (document.cookie) {
  // check for a coookie

  const newNav = document.getElementById('newNav')

  let cookieValue = document.cookie.split('=')
  uid = cookieValue[1]

  fetch(`/api/users/${uid}`, {
    // get data from server
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((result) => result.json())
    .then((userDetails) => {
      let newDisplay = `<li class="nav-item"><a class="nav-link" id ="logout">Logout</a></li><li class="nav-item"><a class="nav-link" id ="username">Hi, ${userDetails.firstname}</a></li>`
      newNav.innerHTML = newDisplay

      // handle log out of user
      let logout = document.getElementById('logout')
      function handleLogout(event) {
        event.preventDefault()
        document.cookie = `uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        window.location.replace('index.html')
      }
      logout.addEventListener('click', handleLogout)
    })
    .catch((e) => console.log(e))
}

// // step 6 - Implement Login
if (window.location.href.includes('login.html')) {
  const logInForm = document.getElementById('loginForm')
  const alert = document.getElementById('alert')
  alert.style.display = 'none' // hide alert

  function logIn(event) {
    event.preventDefault()

    const data = new FormData(event.target)
    const value = Object.fromEntries(data.entries())

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(value), // All form data
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'ok') {
          document.cookie = `uid=${response.data.id}; path=/ ` //store the id in a cookie named uid.
          window.location.replace('index.html') // redirect user to index.html page
        } else if (response.status !== 'ok') {
          alert.className = 'alert alert-danger' // give cdd alert classes
          alert.style.display = 'block' // show div
          alert.innerHTML = 'Invalid email/password'
        }
      })
      .catch((e) => console.log(e))
  }

  logInForm.addEventListener('submit', logIn) // call the function to post the form
}

// // Step 7 - Implement CreateProject.
if (window.location.href.includes('createproject.html')) {
  let alertDiv = document.getElementById('alert')
  alertDiv.style.display = 'none'

  const createProject = document.getElementById('createProjectForm') // get id of the form

  // Step 8 - Restrict Project Submission to logged-in users.
  if (document.cookie) {
    let cookieValue = document.cookie
    cookieValue = cookieValue.split('=')
    cookieValue = cookieValue[1]

    if (cookieValue !== 'undefined' || cookieValue !== '') {
      function submitProject(event) {
        event.preventDefault()

        let tagsInput = document.getElementById('tags').value.split(',')
        let authorsInput = document.getElementById('authors').value.split(',')
        let projectInfo = {
          name: document.getElementById('name').value,
          abstract: document.getElementById('abstract').value,
          tags: tagsInput,
          authors: authorsInput,
        }

        fetch('/api/projects', {
          method: 'POST',
          body: JSON.stringify(projectInfo),
          headers: {
            'content-type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.status === 'ok') {
              window.location.replace('index.html')
            } else {
              let errorMessage = response.errors.map((error) => error)
              errorMessage.forEach((error) => {
                alertDiv.innerHTML += `<strong>${error}</strong><br>`
              })

              alertDiv.classList = 'alert alert-danger' // add css classes
              alertDiv.style.display = 'block'

              setTimeout(function () {
                // hide the error div and clear the contents
                alertDiv.style.display = 'none'
                alertDiv.textContent = ''
              }, 3000)
            }
          })
      }
    }
  } else {
    window.location.replace('login.html')
  }

  createProject.addEventListener('submit', submitProject)
}

// Step 9 - Update the project list on the Home Page.
if (window.location.href.includes('index.html')) {
  let projectList = document.getElementsByClassName('showcase')
  const project_authors = document.getElementById('project_authors')

  projectList[0].innerHTML = ''

  fetch('/api/projects', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => {
      let object = response.map((item) => item)

      for (let i = 0; i < 4; i++) {
        // populate div content
        // // create elements
        let col3Div = document.createElement('div')
        let card = document.createElement('div')
        let cardBody = document.createElement('div')
        let h5 = document.createElement('h5')
        let h6 = document.createElement('h6')
        let p = document.createElement('p')
        let a = document.createElement('a')

        // add class
        col3Div.className = 'col-3'
        card.className = 'card'
        cardBody.className = 'card-body'
        h5.className = 'card-title'
        h6.className = 'card-subtitle mb-2 text-muted'
        p.className = 'card-text'
        a.className = 'card-link'
        a.setAttribute('href', '#')

        //  // structure element
        col3Div.appendChild(card)
        card.appendChild(cardBody)
        cardBody.appendChild(h5)
        cardBody.appendChild(h6)
        cardBody.appendChild(p)
        cardBody.appendChild(a)

        for (const key in object[i]) {
          switch (key) {
            case 'id':
              h5.setAttribute('href', `“viewproject.html?id=${object[i][key]}”`)
            case 'name':
              h5.textContent = `${object[i][key]}`
              break
            case 'authors':
              key.split(',').forEach(function (item) {
                h6.innerText += ` ${object[i][item]} `
              })
              break
            case 'abstract':
              p.innerText = `${object[i][key]}`
              break
            case 'tags':
              if (object[i][key].length > 1) {
                key.split(',').forEach(function (item) {
                  a.innerText += ` ${object[i][item]}  `
                })
                break
              } else {
                a.innerText += `${object[i][key][0]} `
                break
              }
          }
        }

        document.getElementsByClassName('showcase')[0].appendChild(col3Div)
      }
    })
    .catch((e) => console.log(e))
}

// step 10 - Update ViewProject Page.
if (window.location.href.includes('viewproject.html')) {
  document.getElementById('project_tags').style.color = 'blue'

  const queryString = window.location.search // retrive the website link

  const urlParams = new URLSearchParams(queryString)

  const id = urlParams.get('id') // pass in the parameter to search for in the link

  fetch(`/api/projects/${id}`)
    .then((response) => response.json())
    .then((response) => {
      document.getElementById('project_name').textContent = response.name
      document.getElementById('project_abstract').textContent =
        response.abstract

      response.tags.forEach((tag) => {
        document.getElementById('project_tags').textContent = `${tag} `
      })

      let projectTags = response.tags
      document.getElementById('project_tags').innerHTML = projectTags

      // let authors = response.authors.map((item) => {
      //     return `<p class="card-text">${item}</p>`
      // }).join("");
      // project_authors.innerHTML = authors;

      let authors = response.authors
        .map((item) => {
          return `<p class="card-text">${item}</p>`
        })
        .join('')
      project_authors.innerHTML = authors

      //    update created by
      fetch(`/api/users/${response.createdBy}`)
        .then((response) => response.json())
        .then((response) => {
          document.getElementById(
            'project_author',
          ).innerHTML = ` <strong>Created by: <br> ${response.firstname} ${response.lastname} </strong>`
        })
        .catch((e) => console.log(e))
    })
}