const themeSwitch = document.getElementById('theme-switch');

// Load saved mode
let darkmode = localStorage.getItem('darkmode');
if (darkmode === 'active') {
  document.body.classList.add('darkmode');
  themeSwitch.innerHTML = "<i class='bx bx-sun'></i>";
}

// Toggle dark mode on click
themeSwitch.addEventListener('click', () => {
  if (!document.body.classList.contains('darkmode')) {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    themeSwitch.innerHTML = "<i class='bx bx-sun'></i>"; // show sun
  } else {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
    themeSwitch.innerHTML = "<i class='bx bx-moon'></i>"; // show moon
  }
});