$('body').click(function (e) { const hamburger = document.querySelector(".header-hamburger"); const hamburgerDropdown = document.querySelector(".header-hamburger-dropdown"); if (e.target.classList == "header-hamburger") { if (hamburger.classList.contains("active")) { hamburger.classList.remove("active"); hamburgerDropdown.classList.remove("active"); } else { hamburger.classList.add("active"); hamburgerDropdown.classList.add("active"); } return; } if ($(e.target).closest('.header-hamburger').length) { if (hamburger.classList.contains("active")) { hamburger.classList.remove("active"); hamburgerDropdown.classList.remove("active"); } else { hamburger.classList.add("active"); hamburgerDropdown.classList.add("active"); } return; } if (hamburger.classList.contains("active")) { hamburger.classList.remove("active"); hamburgerDropdown.classList.remove("active"); return; } });

// const express = require('express');
// const client = require("@mailchimp/mailchimp_marketing");

// const app = express();

// client.setConfig({
//     apiKey: "YOUR_API_KEY",
//     server: "YOUR_SERVER_PREFIX",
// });


// app.post()
// const run = async () => {
//     const response = await client.lists.addListMember("list_id", {
//         email_address: "Ebony_Brekke@gmail.com",
//         status: "pending",
//     });
//     console.log(response);
// };