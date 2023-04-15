import axios from "axios";

const form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", async e => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  console.log(name, email, message);

  const form = {
    name,
    email,
    message,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("http://localhost:5000/message", form, config);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
});
