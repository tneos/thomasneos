import axios from "axios";

const input = document.getElementById("submit");

input.addEventListener("click", e => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  const form = {
    name,
    email,
    message,
  };

  sentMessage(form);
});

const sentMessage = async function (data) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("http://localhost:5000/message", data, config);

    // Clear input after submitting data
    res.data && document.getElementById("form").reset();

    // Display confirmation for 1 sec
    document.getElementById("confirmation").style.display = "block";
    setTimeout(() => (document.getElementById("confirmation").style.display = "none"), 1000);
  } catch (err) {
    console.log(err);
  }
};
