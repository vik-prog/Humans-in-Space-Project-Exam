/* Getting present humans in space data */
const presentData = (presentArray) => {
   const presentContainer = document.querySelector(".present");
   let resultsHTML = " ";
   for (let i = 0; i < presentArray.people.length; i++) {
      resultsHTML += ` <section class="flexbox">           
                       <p class="bold">Who: ${presentArray.people[i].name}</p>
                       <p>Nationality: ${presentArray.people[i].country}</p>
                       <p>Craft: ${presentArray.people[i].where}</p>
                       <p>About: ${presentArray.people[i].about}</p>
                       </section>
                        `;
   }
   presentContainer.innerHTML = resultsHTML;
};

/* Getting past humans in space data */
const pastData = (pastArray) => {
   const pastContainer = document.querySelector(".past");
   let resultsHTML = " ";
   for (let i = 0; i < pastArray.people.length; i++) {
      resultsHTML += ` <section class="flexbox">                 
                      <p class="bold">Who: ${pastArray.people[i].name}</p>
                      <p>Nationality: ${pastArray.people[i].country}</p>
                      <p>Craft: ${pastArray.people[i].craft}</p>     
                      </section>
                       `;
   }
   pastContainer.innerHTML = resultsHTML;
};
/* Mobile menu */
let topNav = document.getElementById("mobile");
let topNavMobile = document.getElementById("mobile-bars");

topNavMobile.addEventListener("click", function () {
   topNav.classList.toggle("mobile-menu");
});
/* Validate email */
function validateEmail(email) {
   const regEx = /\S+@\S+\.\S+/;
   return regEx.test(email);
}
