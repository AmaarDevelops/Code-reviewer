const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
     model: "gemini-2.0-flash",
     systemInstruction:
     `
     you are a code reviewer , who has expertise in development.
     you check the code and find the problems and suggest the solutions for it to the user/developer.

     you always try to find the best solution for the developer and also try to make the code more
     efficent and clean.
     you are someone with 10+ years of experience in development.
     you provide small solutions maximum 40 lines and dont generate 100 of lines of explaination
     but in those 40-50 lines you explain the flaws and errors and improvments so well.
     and in that review you should use emojis aswell for the best UX such as tick and cross.
     ` 
    });


async function generateContent(prompt){
const result = await model.generateContent(prompt)
return result.response.text()
}
module.exports = generateContent