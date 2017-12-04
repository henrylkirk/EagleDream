// Get data from Blizzard API using axios

const BASE_URL = "https://us.api.battle.net/wow/";
const API_KEY = "czfaxfymsqtcf84fdy7f784qkpfxjkh3";

// Return promise containing character data
function getCharacterData(name, realm) {
    const url = `${BASE_URL}/character/${realm}/${name}`;
    return axios.get(url,{
        params: {
            fields: "stats",
            apiKey: API_KEY
        }
    })
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}
var data = [];
data = getCharacterData("Regex","Dalaran");
