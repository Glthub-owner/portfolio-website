import Ecommerce from "../assets/Ecommerce.PNG";
import MemeGenerator from "../assets/MemeGenerator1.PNG";
import Movies from "../assets/Movies.PNG";
import Pokemon from "../assets/Pokemon.PNG";
import Tenzies from "../assets/Tenzies.PNG";
import Weather from "../assets/Weather.PNG";
import BreakingBad from "../assets/breaking-bad.PNG";

export const ProjectList = [
  {
    name: "Breaking bad",
    github: "https://github.com/IliaJaghmaidze/Breaking-bad",
    liveWebsite: "https://breaking-bad-ilia.netlify.app/",
    image: BreakingBad,
    technologies:
      "React, redux-toolkit, tailwindcss, react-bootstrap, redux-persist",
    Description:
      "View Breaking Bad characters info in card format and add them to favourites. All favourite characters will be saved in your local storage.",
  },

  {
    name: "Meme Generator",
    github: "https://github.com/Glthub-owner/meme-generator",
    liveWebsite: "https://meme-generator-ilia.netlify.app",
    image: MemeGenerator,
    technologies: "React, CSS",
    Description:
      "Meme Generator app, this app takes a random meme image from an API and allows you to add top and bottom text on that image.",
  },
  {
    name: "Movie App",
    github: "https://github.com/Glthub-owner/Movie-app",
    liveWebsite: "https://movie-app-ilia.netlify.app",
    image: Movies,
    technologies: " REACT, CSS, SCSS",
    Description:
      "Movie App : Fetches themoviedb Api And displays movies from most to least popular. Everytime you scroll to the bottom new set of movies get fetched and displayed. ",
  },
  {
    name: "Pokemon App",
    github: "https://github.com/Glthub-owner/Pokemon-app",
    liveWebsite: "https://pokemon-app-ilia.netlify.app",
    image: Pokemon,
    technologies: " REACT, CSS, SCSS",
    Description: "Pokemon app : Fetches and displays data about Pokemons.",
  },
  {
    name: "Tenzies",
    github: "https://github.com/Glthub-owner/Tenzies-game",
    liveWebsite: "https://tenzies-ilia.netlify.app",
    image: Tenzies,
    technologies: " REACT, CSS",
    Description:
      "Tenzies : The main objective of this game is to collect 10 same value dice. Click each die to freeze it at its current value between rolls.  Once you are done you will get a congratulations message. It also keeps track of your record by saving it in the local storage and displays your highscore in the top right corner.",
  },
  {
    name: "Weather App",
    github: "https://github.com/Glthub-owner/Weather-app",
    liveWebsite: "https://weather-app-ilia.netlify.app",
    image: Weather,
    technologies: " REACT, CSS",
    Description:
      "Weather App : it uses weatherapp.com api to display weather for your searched location.",
  },
  {
    name: "Ecommerce-App",
    github: "https://github.com/Glthub-owner/E-commerce",
    liveWebsite: "https://e-commerce-ilia.vercel.app/",
    image: Ecommerce,
    technologies: " React, Next.js, Javascript, CSS, Sanity, Stripe",
    Description:
      "Ecommerce app, I heavily relied on youtube tutorial doing this project, my mission was to understand and experience how front and backend work together.",
  },
];
