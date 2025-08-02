class Car {
  constructor(NatPas_Num, password, Cus_Full_Name, Cus_PhoneNum, Cus_BDate, Cus_BPlace, License_Num, License_Validity, NatPas_Validity, Cus_Status) {
    this.NatPas_Num = NatPas_Num;
    this.password = password;
    this.Cus_Full_Name = Cus_Full_Name;
    this.Cus_PhoneNum = Cus_PhoneNum;
    this.Cus_BDate = Cus_BDate;
    this.Cus_BPlace = Cus_BPlace;
    this.License_Num = License_Num;
    this.License_Validity = License_Validity;
    this.NatPas_Validity = NatPas_Validity;
    this.Cus_Status = Cus_Status;
  }

  start() {
    console.log(`${this.NatPas_Num} logged in.`);
  }
}

let users = [];

function toggleForm() {
  const signUpForm = document.getElementById('userForm');
  const loginForm = document.getElementById('loginUserForm');
  const formTitle = document.getElementById('formTitle');
  const toggleBtn = document.getElementById('toggleBtn');
  const createBtn = document.getElementById('createAccountBtn');

  const isSignUp = !signUpForm.classList.contains('hidden');

  signUpForm.classList.toggle('hidden', isSignUp);
  loginForm.classList.toggle('hidden', !isSignUp);
  toggleBtn.classList.toggle('hidden', isSignUp);
  createBtn.classList.toggle('hidden', !isSignUp);
  formTitle.innerText = isSignUp ? 'Login' : 'Sign Up';
}

// Attach event listeners
document.getElementById('toggleBtn').addEventListener('click', toggleForm);
document.getElementById('createAccountBtn').addEventListener('click', toggleForm);

// Sign up
document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const NatPas_Num = document.getElementById('NatPas_Num').value;
  const Cus_Full_Name = document.getElementById('Cus_Full_Name').value;
  const Cus_PhoneNum = document.getElementById('Cus_PhoneNum').value;
  const Cus_BDate = document.getElementById('Cus_BDate').value;
  const Cus_BPlace = document.getElementById('Cus_BPlace').value;
  const License_Num = document.getElementById('License_Num').value;
  const License_Validity = document.getElementById('License_Validity').value;
  const NatPas_Validity = document.getElementById('NatPas_Validity').value;
  const Cus_Status = document.getElementById('Cus_Status').value;
  const Password = document.getElementById('Password').value;
  const Confirm_Password = document.getElementById('Confirm_Password').value;

  if (Password !== Confirm_Password) {
    alert("Passwords do not match.");
    return;
  }

  const existing = users.find(u => u.NatPas_Num === NatPas_Num);
  if (existing) {
    alert("User already exists.");
    return;
  }

  const user = new Car(NatPas_Num, Password, Cus_Full_Name, Cus_PhoneNum, Cus_BDate, Cus_BPlace, License_Num, License_Validity, NatPas_Validity, Cus_Status);
  users.push(user);
  alert("Account created! You can now login.");
  toggleForm();
});

// Login
document.getElementById('loginUserForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const NatPas_Num = document.getElementById('NatPas_Num_Login').value;
  const Password = document.getElementById('Password_Login').value;

  const user = users.find(u => u.NatPas_Num === NatPas_Num && u.password === Password);
  if (user) {
    user.start();
    alert("Logged in successfully!");
  } else {
    alert("Invalid credentials.");
  }
});
