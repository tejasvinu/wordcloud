import React from 'react';
import ReactWordcloud from 'react-wordcloud';
const size = [1000, 800];

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};
 
function wordSeperator(){
  const atext = "The sun was shining brightly in the sky as I walked down the street. I couldn't help but feel a sense of joy and happiness as the sun's warm rays bathed my face. I had always loved the feeling of the sun on my skin, and today was no different.As I walked, I couldn't help but notice the beautiful flowers that lined the sidewalks. The flowers were in full bloom, their vibrant colors a testament to the power of nature. I stopped to smell a few of them, taking in their sweet, floral aroma.I continued on my walk, taking in the sights and sounds of the city. The city was bustling with activity, with people rushing to and fro, going about their daily lives. I couldn't help but feel a sense of excitement as I watched them, wondering where they were headed and what they were doing.Eventually, I reached my destination - a small park nestled in the heart of the city. I sat down on a bench and watched the children playing on the swings, their laughter and screams filling the air. I couldn't help but smile at their joy, feeling grateful for the simple pleasures in life.As I sat there, I couldn't help but think about how much I loved the city and all it had to offer. From the bright lights of the skyscrapers to the beauty of the parks, there was always something new and exciting to discover. I couldn't wait to see what the future held for me here, and I knew that I would always cherish the memories I had made in this wonderful place.";

  const text = atext.toUpperCase();
  // Split the text into an array of words
  const words = text.split(' ');

  // Create an object to store the frequency of each word
  const frequency = {};

  // Create an array of stop words
  const astopWords = ["the", "a", "an", "and", "but", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very"];

  const stopWords = astopWords.map(word => word.toUpperCase());
  // Remove the stop words
  const filteredWords = words.filter(word => !stopWords.includes(word));

  


  // Count the frequency of each word
  filteredWords.forEach(filteredWords => {
    if (frequency[filteredWords]) {
      frequency[filteredWords]++;
    } else {
      frequency[filteredWords] = 1;
    }
  });

  // Get an array of the unique words and their frequency
  const uniqueWords = Object.keys(frequency);
  const frequencies = Object.values(frequency);

  // Create an array of objects with the word and its frequency
  const data = uniqueWords.map((filteredWords, i) => ({
    text: filteredWords,
    value: frequencies[i]
  }));

  console.log(data);
  return data

}
function App() {
  const words = wordSeperator()
  console.log(words)
  return <ReactWordcloud size={size} options={options} words={words} />
}

export default App;
