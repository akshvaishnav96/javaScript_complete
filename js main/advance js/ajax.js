console.log("hello");
const xhr = new XMLHttpRequest();

const url = "https://api.github.com/users/demo";
xhr.open("GET", url);

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    let userdata = this.responseText;

    userdata = JSON.parse(userdata);

    let btn = document.getElementById("show");
    let hide = document.getElementById("hide");

    btn.addEventListener("click", () => {

      let card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";
      let cardimg = document.createElement("img");
      cardimg.setAttribute("src", userdata.avatar_url);

      cardimg.classList.add("card-img-top");

      let cardinsidediv = document.createElement("div");
      cardinsidediv.classList.add("card-body");
      let heading = document.createElement("h5");
      heading.classList.add("card-title");
      heading.innerText = userdata.followers;

      card.appendChild(cardimg);
      card.appendChild(cardinsidediv);
      cardinsidediv.appendChild(heading);
      let div = document.querySelector(".hjas");
      div.appendChild(card);
    });

    hide.addEventListener("click", () => {
      document.querySelector(".card").remove();
    })

  }
};

xhr.send();



console.log("end");
