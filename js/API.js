// Get data from Blizzard API using axios

const BASE_URL = "https://us.api.battle.net/wow/";
const API_KEY = "czfaxfymsqtcf84fdy7f784qkpfxjkh3";

// Return promise containing character data
function getCharacterData(name, realm) {
    const url = `${BASE_URL}/character/${realm}/${name}`;
    return axios.get(url,{
        params: {
          apiKey: API_KEY
        }
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

getCharacterData("Regex","Dalaran");
