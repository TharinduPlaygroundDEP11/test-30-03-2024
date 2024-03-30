const imgElm = document.getElementById("user-image");
const nameElm = document.getElementById("name");
const addressElm = document.getElementById("address");
const birthdayElm = document.getElementById("birthday");
const phoneElm = document.getElementById("phone-number");
const emailElm = document.getElementById("email");
const cardElm = document.querySelector(".profile-card");
const genderElm = document.getElementsByName("gender");

document.getElementById("btn-generate").addEventListener("click", function () {
  let gender = "";
  for (i = 0; i < genderElm.length; i++) {
    if (genderElm[i].checked) gender = genderElm[i].value;
  }

  fetch(`https://randomuser.me/api?nat=ca&gender=${gender}`)
    .then((response) => {
      response.json().then((data) => {
        const responseObj = data.results[0];

        const imgUrl = `${responseObj.picture.large}`;

        const name =
          responseObj.name.title +
          " " +
          responseObj.name.first +
          " " +
          responseObj.name.last;

        const address =
          responseObj.location.street.number +
          "-" +
          responseObj.location.street.name +
          ", " +
          responseObj.location.city +
          ", " +
          responseObj.location.state +
          ", " +
          responseObj.location.country +
          ", PC: " +
          responseObj.location.postcode;

        const birthday = responseObj.dob.date.substring(0, 10);

        const phoneNumber = responseObj.cell;

        const email = responseObj.email;

        nameElm.innerHTML = name;
        addressElm.innerHTML = `Address : ${address}`;
        birthdayElm.innerHTML = `Birthday : ${birthday}`;
        (phoneElm.innerHTML = `Mobile : ${phoneNumber}`),
          (emailElm.innerHTML = `Email: ${email}`);
        imgElm.src = imgUrl;
        cardElm.classList.add("show-card");
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
