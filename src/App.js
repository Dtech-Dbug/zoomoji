import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

/*emojis dictionary database*/

var emojiDictionary = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕‍🦺": "Service Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat",
  "🐈‍": "Black Cat",
  "🦁": "Lion",
  "🐯": "Tiger Face",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐴": "Horse Face",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🦌": "Deer",
  "🐮": "Cow Face",
  "🐂": "Ox",
  "🐃": "Water Buffalo",
  "🐄": "Cow",
  "🐷": "Pig Face",
  "🐖": "Pig",
  "🐗": "Boar",
  "🐽": "Pig Nose",
  "🐏": "Ram",
  "🐑": "Ewe",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐫": "Two-Hump Camel",
  "🦙": "Llama",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  /*🦣 /Mammoth*/
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🐭": "Mouse Face",
  "🐁": "Mouse",
  "🐀": "Rat",
  "🐹": "Hamster",
  "🐰": "Rabbit Face",
  "🐇": "Rabbit",
  "🐿️": "Chipmunk",
  /*🦫 Beaver*/
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐻‍❄️": "Polar Bear",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🐾": "Paw Prints",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐓": "Rooster",
  "🐣": "Hatching Chick",
  "🐤": "Baby Chick",
  "🐥": "Front-Facing Baby Chick",
  "🐦": "Bird",
  "🐧": "Penguin",

  "🦅": "Eagle",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  /*🦤 Dodo
🪶 Feather*/
  "🦩": "Flamingo",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐲": "Dragon Face",
  "🐉": "Dragon",
  "🦕": "Sauropod",
  "🦖": "T-Rex",
  "🐳": "Spouting Whale",
  "🐋": "Whale",
  "🐬": "Dolphin",
  /*🦭 Seal*/
  "🐟": "Fish",
  "🐠": "Tropical Fish",
  "🐡": "Blowfish",
  "🦈": "Shar",
  "🐙": "Octopus",
  "🐚": "Spiral Shell",
  "🐌": "Snail",
  "🦋": "Butterfly",
  "🐛": "Bug",
  "🐜": "Ant",
  "🐝": "Honeybee",
  /*🪲 Beetle*/
  "🐞": "Lady Beetle",
  "🦗": "Cricket",
  /*🪳 Cockroach*/
  /*"🕷": ️"Spider",  
"🕸":️ "Spider Web", difficulty in reading the, errormessage showinh*/
  "🦂": "Scorpion",
  "🦟": "Mosquito"
  /*🪰 Fly
🪱 Worm*/
};

var zoomojis = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setEmojiMeaning] = useState("");
  var [count, setNewCounter] = useState(0);
  var [appState, changeState] = useState({
    activeObject: null,
    objects: zoomojis
  });

  /* toggle active status */
  /*function activeToggle(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }
  function toggleActivityStyle(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "box active";
    } else {
      return "box inactive";
    }
  }*/

  function likeClickHandler(clicked) {
    var likeCounter = count + 1;
    setNewCounter(likeCounter);
  }
  /*console.log(count): for viewing the counter on console.*/

  function changeHandler(event) {
    var userInput = event.target.value; /*reading the input*/

    var meaning = emojiDictionary[userInput]; /*matching the meaning*/

    if (meaning === undefined) {
      meaning = "Senator,sorry! we do not know about him.";
    }
    /*console.log(meaning)logging the meaning in console*/

    setEmojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "yellow", textDecoration: "underline" }}>Zoomojis</h1>
      <h2>Find out the names of our zoo-buds emoticons.</h2>

      <input onChange={changeHandler}></input>
      <h2>
        This is our friend:{" "}
        <span style={{ color: "white" }}> Mr.{meaning}</span>
      </h2>
      <div>
        <h3 style={{ textDecoration: "underline" }}>Click On Us</h3>
        <ul>
          {zoomojis.map(function (emoji, index) {
            return (
              <span
                key="index"
                /* className={toggleActivityStyle(index)}
                onClick={() => toggleActivityStyle(index)}*/
                onClick={() => emojiClickHandler(emoji)}
                style={{ cursor: "pointer" }}
              >
                {emoji}
              </span>
            );
          })}
        </ul>
      </div>

      <div className="info">
        <div className="intro-info">
          <h1> Did You Know?</h1>
          Overall, 82 percent of life on Earth is made up of plants, 13 percent
          is bacteria, and just five percent of life on Earth is animals
        </div>

        <div className="intro-info1">
          <h1>8.7 million species</h1>
          Even after centuries of effort, some 86 percent of Earth's species
          have yet to be fully described, according to new study that predicts
          our planet is home to 8.7 million species
        </div>

        <div className="intro-info2">
          <h1> What percent of the total animal lives in Earth is Humans?</h1>
          Humans comprise a very small share of life on Earth — 0.01% of the
          total, and 2.5% of animal biomass.<b>Can you believe that?</b>
        </div>

        <div className="end">
          <h2>
            <i>Dear Humans,</i>
          </h2>
          We know you are the most advanced species on Earth.The Earth is home
          to us,too. We share this biome with you.Can you please be a little
          considerate towards us? <b>Live and Let Live. </b>
          <br></br>
          <br></br>
          <br></br>
          Yours Lovingly,
          <br></br>
          Zoomoji,
          <br></br>
          0n behalf of the Union of other species.
        </div>
      </div>
      <hr></hr>
      <div className="like">
        Did you like zoomoji?
        <br></br>
        <button onClick={likeClickHandler}>Like</button>
        <h2> {count} Likes</h2>
        <span>
          <i class="fas fa-thumbs-up">hello</i>
        </span>
      </div>
      <hr></hr>
      <div className="footer">
        <h3>Dwaipayan Chakroborty | 2020</h3>
      </div>
    </div>
  );
}
