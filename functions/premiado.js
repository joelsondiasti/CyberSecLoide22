function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var comicImg = document.getElementById("comicImg");

var gifs = [
  {
    url: "../assets/gifs/aniversário-kiorin.gif",
    alt: "Muleque Animadão",
  },
  {
    url: "../assets/gifs/cat-computer.gif",
    alt: "Gatinho bolado",
  },
  {
    url: "../assets/gifs/crutches-dance.gif",
    alt: "É um milagre",
  },
  {
    url: "../assets/gifs/dancing-unicorn-unicorn.gif",
    alt: "unicorn dance",
  },
  {
    url: "../assets/gifs/despicable-me-minions.gif",
    alt: "minions",
  },
  {
    url: "../assets/gifs/fresh-prince.gif",
    alt: "um maluco no pedaço",
  },
  {
    url: "../assets/gifs/gifsoup-funny.gif",
    alt: "é sexta-feira",
  },
  {
    url: "../assets/gifs/hacker.gif",
    alt: "hacker",
  },
  {
    url: "../assets/gifs/happy-dancing-dancing-kid.gif",
    alt: "dança na cadeira",
  },
  {
    url: "../assets/gifs/happy-dancing.gif",
    alt: "Carlton Banks Dancing",
  },
  {
    url: "../assets/gifs/hhgf.gif",
    alt: "Num creio",
  },
  {
    url: "../assets/gifs/parrot-party.gif",
    alt: "Bird Dancing",
  },
  {
    url: "../assets/gifs/party-feestje.gif",
    alt: "Emoji Festa",
  },
  {
    url: "../assets/gifs/party-parrot-deal-with-it.gif",
    alt: "Bird Respect",
  },
  {
    url: "../assets/gifs/teletubbies-dancing.gif",
    alt: "Old School Telletubbies",
  },
  {
    url: "../assets/gifs/yay-yes.gif",
    alt: "Dancing Girl",
  },
];
var currentIndex = getRandomInt(gifs.length);

comicImg.setAttribute("src", gifs[currentIndex].url);
comicImg.setAttribute("alt", gifs[currentIndex].alt);
