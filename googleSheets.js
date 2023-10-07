const CLIENT_ID = '409868868162-ok50hbhs6dtngua5hmtae7u5ofkg5396.apps.googleusercontent.com'

const API_KEY = 'AIzaSyDCCEwkn3jEf1EN2U1eLuk3eUbZdJ69VW4';

const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"]; 

const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

gapi.load('client', () =>{
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(()=>{
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1PvWKBunwEl2UyOvloZbNJXprBO2h5ygnn8Dz-rp7h-A',
            range: 'A1:C1'
    }).then((response) => {
        const values = response.result.values;
        if (values) {
            console.log(values);
        }
        else {
            console.log('No data found.');
        }
    }).catch((error) => {
        console.error('Error Fetching Data: ', error);
    });
}).catch((error) => {
    console.error('Error Loading Client: ', error);
    });
});