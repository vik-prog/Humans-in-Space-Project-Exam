const baseUrl = "https://testapi.io/api/gmjosund/humansinspace/";
const presentUrl = `${baseUrl}present`;
const pastUrl = `${baseUrl}past`;

fetch(presentUrl)
   .then(function (response) {
      return response.json();
   })
   .then(function (json) {
      presentData(json);
   })
   .catch(function (error) {
      console.dir(error);
   });

fetch(pastUrl)
   .then(function (response) {
      return response.json();
   })
   .then(function (json) {
      pastData(json);
   })
   .catch(function (error) {
      console.dir(error);
   });
