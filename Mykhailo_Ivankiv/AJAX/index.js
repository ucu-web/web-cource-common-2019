const ajax = (url, callback, method = "GET", data = null) => {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(null, xhr.responseText);
      } else {
        callback(new Error("Aarm! Всьо пропало!!"), null);
      }
    }
  };

  xhr.send();
};

const _ajax = (url, method = "GET", data = null) =>
  new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          res(xhr.responseText);
        } else {
          rej(new Error("Aarm! Всьо пропало!!"));
        }
      }
    };

    xhr.send();
  });

document.querySelector("button").addEventListener("click", () => {
  fetch("http://localhost:5000/data.txt")
    .then(response => response.text())

    .then(data => console.log(data))

    .then(data => fetch("http://localhost:5000/data.json"))
    .then(response => response.json())

    .then(({ message }) => console.log(message))
    .catch(err => console.log(err));
});

document.querySelectorAll("button")[1].addEventListener("click", async () => {
  try {
    const firstResponse = await fetch("http://localhost:5000/data.txt");
    const data1 = await firstResponse.text();
    console.log(data1);

    const secondResponse = await fetch("http://localhost:5000/data.json");
    const { message } = await secondResponse.json();
    console.log(message);

  } catch (err) {
    console.log(err);
  }
});
