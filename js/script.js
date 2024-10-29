const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

let card = `
<div class="col-4">
  <div class="d-flex text-bg-dark">
    <figure class="m-0 pe-2">
      <img class="img-fluid" src="./img/male1.png" alt="" />
    </figure>
    <div class="d-flex flex-column justify-content-center">
      <span class="d-flex">NOME COGNOME</span>
      <span class="d-flex">Ruolo</span>
      <span class="d-flex">email@email.com</span>
    </div>
  </div>
</div>`;

const cardsContainerHtml = document.getElementById("cards-container");

const getElementFromArray = () => {
  let cardsHtml = ``;
  teamMembers.forEach((member) => {
    const fullName = member.name.toUpperCase();
    let card = `
    <div class="col-4">
    <div class="d-flex text-bg-dark">
    <figure class="m-0 pe-2">
    <img class="img-fluid" src=${member.img} alt="" />
    </figure>
    <div class="d-flex flex-column justify-content-center">
    <span class="d-flex fw-bold">${fullName}</span>
    <span class="d-flex role">${member.role}</span>
    <span class="d-flex"><a href="mailto:${member.email}">${member.email}</a></span>
    </div>
    </div>
    </div>`;
    cardsHtml += card;
  });
  cardsContainerHtml.innerHTML = cardsHtml;
};

getElementFromArray();
