// netlifyfunctions/zapier-response.js

// Globale variabele om de laatst ontvangen data op te slaan
let latestData = null;

exports.handler = async function (event, context) {
  // Als het een POST-verzoek is, verwerken en opslaan van de data
  if (event.httpMethod === "POST") {
    try {
      const data = JSON.parse(event.body);
      latestData = data;  // Sla de ontvangen data op (voor demonstratiedoeleinden)
      console.log("Ontvangen data via POST:", data);
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Data succesvol ontvangen",
          receivedData: data
        }),
      };
    } catch (error) {
      console.error("Fout bij verwerken POST:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Interne serverfout" }),
      };
    }
  }
  // Als het een GET-verzoek is, geef de laatst opgeslagen data terug
  else if (event.httpMethod === "GET") {
    if (latestData) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Laatste opgeslagen data",
          receivedData: latestData
        }),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Geen data gevonden" }),
      };
    }
  }
  // Voor andere HTTP-methoden geven we een 405 foutmelding
  else {
    return {
      statusCode: 405,
      body: JSON.stringify({
        error: "Method not allowed. Gebruik POST voor opslag en GET voor ophalen."
      }),
    };
  }
};
