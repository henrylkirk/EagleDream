const BASE_URL = "https://us.api.battle.net/wow";
const API_KEY = "czfaxfymsqtcf84fdy7f784qkpfxjkh3";

// Function to build a url from base
function buildUrl(suffix) {
    return `${BASE_URL}/${suffix}`;
}

// Vue.js App
var app = new Vue({
  el: '#app',
  data: {
    items: [],
    stats: [],
    character: {
      name: "Regex",
      realm: "Dalaran"
    },
    base_url: "https://us.api.battle.net/wow",
    api_key: "czfaxfymsqtcf84fdy7f784qkpfxjkh3"
},
    filters: {
      percent: function (value) {
        if (!value) return ''
        // value = value.toString()
        value = value.toFixed(2)
        return value+"%"
      }
    },
    methods: {
      search: function() {
          let url = buildUrl(`character/${this.character.realm}/${this.character.name}`);
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
              console.log(this.items);
              console.log(this.stats);
              this.open();
          })
          .catch((error) => {
              console.log(error);
          });
      },
      close: function() {
          var characterArea = document.getElementById("character-area");
          // characterArea.style.display = characterArea.style.display === 'none' ? '' : 'none';
          characterArea.style.display = 'none';
      },
      open: function() {
          var characterArea = document.getElementById("character-area");
          characterArea.style.display = '';
      }
    }
});
