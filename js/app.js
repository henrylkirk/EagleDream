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
        }
    },
    filters: {
        percent: function (value) { // Display a number as a percent
            value = value.toFixed(2)
            return value+"%"
        },
        capitalize: function (value) { // Capitalize string
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    methods: {
        search: function() { // Get data from Blizzard API
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
        close: function() { // Close character area
            var characterArea = document.getElementById("character-area");
            characterArea.style.display = 'none';
        },
        open: function() { // Open character area
            var characterArea = document.getElementById("character-area");
            characterArea.style.display = '';
        }
    }
});
