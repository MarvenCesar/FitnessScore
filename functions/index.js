// index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
admin.initializeApp();

exports.ask = functions.https.onRequest(async (req, res) => {
  // Set CORS headers
  res.set("Access-Control-Allow-Origin", req.get("origin"));
  res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  // Return on options preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).send();
  }

  // Check request method
  if (req.method !== "POST") {
    return res.status(400).send("Please send a POST request");
  }

  const prompt = req.body.prompt;

  // Run OpenAI chat completion
  try {
    const completion = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "You are a knowledgeable health expert. You are a coach.",
      }, {
        role: "user",
        content: prompt,
      }],
      max_tokens: 999,
    }, {
      headers: {
        "Authorization": `Bearer ${functions.config().openai.key}`,
        "Content-Type": "application/json",
      },
    });

    // Send the result back as a response
    return res.send(completion.data.choices[0].message.content.trim());
  } catch (error) {
    console.error("Error when calling OpenAI API: ", error);
    return res.status(500).send("Error when calling OpenAI API");
  }
});


