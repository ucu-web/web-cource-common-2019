import CourseCart from "../../components/course_cart";

const handle_registration = (e) => {
    e.preventDefault();
    console.log("trying")
};

const create_input_label = (label) => {
    const input = document.createElement("input");
    const label = document.createElement("label");
};
const registration = (data) => {


    const registration_root = document.createElement("div");

    const button = document.createElement("button");
    button.addEventListener("click", handle_registration);
    button.innerHTML = "register"
    registration_root.className = 'registration';
    registration_root.innerHTML = `
   <form>
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    <hr>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>
    `
    registration_root.appendChild(button);

    return registration_root

};
export default registration;
