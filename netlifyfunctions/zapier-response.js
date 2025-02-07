// netlify/functions/zapier-response.js

exports.handler = async function (event, context) {
    // Sta alleen POST-verzoeken toe
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed. Gebruik een POST-verzoek." }),
      };
    }
  
    try {
      // Probeer de binnenkomende JSON te parsen
      const data = JSON.parse(event.body);
      console.log("Ontvangen data:", data);
  
      // Hier kun je eventueel extra logica toevoegen, zoals de data opslaan of transformeren.
      // In dit voorbeeld sturen we de ontvangen data terug met een bevestigingsbericht.
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Data succesvol ontvangen",
          receivedData: data,
        }),
      };
    } catch (error) {
      console.error("Fout bij het verwerken van de request:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Interne serverfout" }),
      };
    }
  };
  