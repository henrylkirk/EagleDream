const BASE_URL = "https://us.api.battle.net/wow";
const API_KEY = "czfaxfymsqtcf84fdy7f784qkpfxjkh3";
const CHARACTER_NAME = "Regex";
const CHARACTER_REALM = "Dalaran";
const url = `${BASE_URL}/character/${CHARACTER_REALM}/${CHARACTER_NAME}`;

var app = new Vue({
  el: '#app',
  data: {
    results: [],
    name: 4
  },
  mounted() {
      axios.get(url,{
          params: {
              apiKey: API_KEY
          }
      })
      .then((response) => {
          this.results = response.data;
          this.name = response.data.name;
          console.log(this.results);
      })
      .catch(function (error) {
          console.log(error);
      });
  }
});



// const vm = new Vue({
//   el: '#app',
//   data: {
//     results: [
//       {title: "the very first post", abstract: "lorem ipsum some test dimpsum"},
//       {title: "and then there was the second", abstract: "lorem ipsum some test dimsum"},
//       {title: "third time's a charm", abstract: "lorem ipsum some test dimsum"},
//       {title: "four the last time", abstract: "lorem ipsum some test dimsum"}
//     ]
//   }
// });
