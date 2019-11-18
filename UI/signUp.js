const signUpForm = document.querySelector('.signUpForm');

const setLoading = (bool) => {
  const button = document.querySelector('.signUp-btn');
  if (bool) {
    button.disabled = true;
    button.textContent = 'Signing up ...';
    button.style.opacity = 0.5;
    button.style.cursor = 'default';
  } else {
    button.disabled = false;
    button.textContent = 'Sign Up';
    button.style.opacity = 1;
    button.style.cursor = 'pointer';
  }
};

const showMessage = (res) => {
  const msg = document.querySelector('.msg');
  const displayMsg = document.querySelector('.display-msg');
  if (res.status === 400) {
    msg.textContent = res.error;
    displayMsg.style.display = 'flex';
    setLoading(false);
  }

  if (res.status === 201) {
    signUpForm.reset();
    localStorage.setItem('token', res.data.token);
    window.location.href = './mentors.html';
  }
};

const post = async (data) => {
  try {
    const result = await fetch('http://localhost:8001/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    showMessage(await result.json());
  } catch (error) {
    console.log(error);
  }
};

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  setLoading(true);

  post({
    firstName: e.currentTarget.firstName.value,
    lastName: e.currentTarget.lastName.value,
    email: e.currentTarget.email.value,
    password: e.currentTarget.password.value,
  });
});

document.querySelector('.del-msg').addEventListener('click', (e) => {
  const displayMsg = document.querySelector('.display-msg');
  displayMsg.style.display = 'none';
});
