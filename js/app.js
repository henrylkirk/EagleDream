const BASE_URL = "https://us.api.battle.net/wow";
const API_KEY = "czfaxfymsqtcf84fdy7f784qkpfxjkh3";
const CHARACTER_NAME = "Regex";
const CHARACTER_REALM = "Dalaran";
// const url = `${BASE_URL}/character/${CHARACTER_REALM}/${CHARACTER_NAME}`;


function buildUrl(name, realm) {
    return `${BASE_URL}/character/${realm}/${name}`;
}

var app = new Vue({
  el: '#app',
  data: {
    items: [],
    stats: [],
    character: {
      name: "Regex",
      realm: "Dalaran"
    }
  },
  methods: {
      search: function() {
          let url = buildUrl(this.character.name, this.character.realm);
          axios.get(url,{
              params: {
                  apiKey: API_KEY,
                  fields: "items, stats"
              }
          })
          .then((response) => {
              this.items = response.data.items;
              this.stats = response.data.stats;
              this.name = response.data.name;
              // this.items = response.data.items;
              // console.log(this.data.stats);
              console.log(this.items);
              console.log(this.stats);
          })
          .catch((error) => {
              console.log(error);
          });
      }
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
