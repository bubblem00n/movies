const parent = document.querySelector(".parent");
const all = document.querySelector(".all");
const comedy = document.querySelector(".comedy");
const drama = document.querySelector(".drama");
const horror = document.querySelector(".horror");
const detective = document.querySelector(".detective");
const adventure = document.querySelector(".adventure");
const reset = document.querySelector(".reset");
const select = document.querySelector("#select");

data = [
  {
    img: "0.png",
    title: "1+1",
    genre: "comedy, drama",
    year: "2011",
    country: "France",
  },
  {
    img: "1.png",
    title: "Cruella",
    genre: "comedy",
    year: "2021",
    country: "USA",
  },
  {
    img: "2.png",
    title: "Free Guy",
    genre: "comedy, adventure",
    year: "2021",
    country: "USA",
  },
  {
    img: "3.png",
    title: "The Mask",
    genre: "comedy, crime",
    year: "2000",
    country: "USA",
  },
  {
    img: "4.png",
    title: "The Pursuit of Happyness",
    genre: "comedy, drama",
    year: "2006",
    country: "USA",
  },

  {
    img: "5.png",
    title: "Hachiko: A Dog's Story",
    genre: "drama",
    year: "2009",
    country: "USA",
  },
  {
    img: "6.png",
    title: "The Sky",
    genre: "drama, adventure",
    year: "2020",
    country: "Russia",
  },
  {
    img: "7.png",
    title: "Harry Potter",
    genre: "drama, comedy, adventure",
    year: "2011",
    country: "USA / Britain",
  },
  {
    img: "8.png",
    title: "The Notebook",
    genre: "drama",
    year: "2004",
    country: "USA",
  },
  {
    img: "9.png",
    title: "Hacksaw Ridge",
    genre: "drama",
    year: "2016",
    country: "USA",
  },

  {
    img: "10.png",
    title: "The Black Phone",
    genre: "horror",
    year: "2022",
    country: "USA",
  },
  {
    img: "11.png",
    title: "Train to Busan",
    genre: "horror",
    year: "2016",
    country: "South Korea",
  },
  {
    img: "12.png",
    title: "Silent Hill",
    genre: "horror",
    year: "2006",
    country: "France",
  },
  {
    img: "13.png",
    title: "Doomsday",
    genre: "horror",
    year: "2008",
    country: "Britain",
  },
  {
    img: "14.png",
    title: "The Conjuring 2",
    genre: "horror",
    year: "2016",
    country: "USA",
  },

  {
    img: "15.png",
    title: "Happy Death Day",
    genre: "horror, detective",
    year: "2017",
    country: "USA",
  },
  {
    img: "16.png",
    title: "It",
    genre: "horror, detective",
    year: "2014",
    coutry: "USA",
  },
  {
    img: "17.png",
    title: "Stiker",
    genre: "drama, detective",
    year: "2022",
    country: "Russia",
  },
  {
    img: "18.png",
    title: "Before I Go To Sleep",
    genre: "drama, detective",
    year: "2014",
    country: "Britain",
  },
  {
    img: "19.png",
    title: "Murder Party",
    genre: "comedy, detective",
    year: "2022",
    country: "France",
  },

  {
    img: "20.png",
    title: "Spider-Man: No way home",
    genre: "adventure, comedy",
    year: "2021",
    country: "USA",
  },
  {
    img: "21.png",
    title: "Sherlock Holmes",
    genre: "adventure, drama, detective",
    year: "2009",
    country: "Britain",
  },
  {
    img: "22.png",
    title: "The Iron Man",
    genre: "adventure, detective",
    year: "2008",
    country: "USA",
  },
  {
    img: "23.png",
    title: "The Encanto",
    genre: "adventure, drama",
    year: "2021",
    country: "USA",
  },
  {
    img: "24.png",
    title: "The Aladdin",
    genre: "adventure",
    year: "2019",
    country: "USA",
  },
];

const onDisplay = () => {
  let html = "";
  data.forEach((el) => {
    html += `<div class="card"><img src="./img/${el.img}" alt="">
        <div class="title">${el.title}</div>
        <div class="genre">${el.genre}</div>
        <div class="year">${el.year}</div>
        <div class="country">${el.country}</div></div>`;
  });
  parent.innerHTML = html;
};

onDisplay();

const comedySelector = () => {
  const comedyData = data.filter((el) => el.genre.includes("comedy"));
  let html = "";
  comedyData.forEach((el, index) => {
    html += `<div class="card"><img src="./img/${el.img}" alt="">
<div class="title">${el.title}</div>
<div class="genre">${el.genre}</div>
<div class="year">${el.year}</div>
<div class="country">${el.country}</div></div>`;
  });
  parent.innerHTML = html;
};

const dramaSelector = () => {
  const comedyData = data.filter((el) => el.genre.includes("drama"));
  let html = "";
  comedyData.forEach((el, index) => {
    html += `<div class="card"><img src="./img/${el.img}" alt="">
  <div class="title">${el.title}</div>
  <div class="genre">${el.genre}</div>
  <div class="year">${el.year}</div>
  <div class="country">${el.country}</div></div>`;
  });
  parent.innerHTML = html;
};
const horrorSelector = () => {
  const comedyData = data.filter((el) => el.genre.includes("horror"));
  let html = "";
  comedyData.forEach((el, index) => {
    html += `<div class="card"><img src="./img/${el.img}" alt="">
    <div class="title">${el.title}</div>
    <div class="genre">${el.genre}</div>
    <div class="year">${el.year}</div>
    <div class="country">${el.country}</div></div>`;
  });
  parent.innerHTML = html;
};
const detectiveSelector = () => {
  const comedyData = data.filter((el) => el.genre.includes("detective"));
  let html = "";
  comedyData.forEach((el, index) => {
    html += `<div class="card"><img src="./img/${el.img}" alt="">
    <div class="title">${el.title}</div>
    <div class="genre">${el.genre}</div>
    <div class="year">${el.year}</div>
    <div class="country">${el.country}</div></div>`;
  });
  parent.innerHTML = html;
};
const adventureSelector = () => {
  const comedyData = data.filter((el) => el.genre.includes("adventure"));
  let html = "";
  comedyData.forEach((el, index) => {
    html += `<div class="card"><img src="./img/${el.img}" alt="">
    <div class="title">${el.title}</div>
    <div class="genre">${el.genre}</div>
    <div class="year">${el.year}</div>
    <div class="country">${el.country}</div></div>`;
  });
  parent.innerHTML = html;
};

all.addEventListener("click", () => {
  onDisplay();
  select.value = "All";
});
reset.addEventListener("click", () => {
  onDisplay();
  select.value = "All";
});

comedy.addEventListener("click", () => {
  comedySelector();
});
drama.addEventListener("click", () => {
  dramaSelector();
});
horror.addEventListener("click", () => {
  horrorSelector();
});
detective.addEventListener("click", () => {
  detectiveSelector();
});
adventure.addEventListener("click", () => {
  adventureSelector();
});

const before2010 = () => {
  const comedyData = data.filter((el) => el.year <= 2010);
  let html = "";
  comedyData.forEach((el, index) => {
    html += `<div class="card"><<img src="./img/${el.img}" alt="">
      <div class="title">${el.title}</div>
      <div class="genre">${el.genre}</div>
      <div class="year">${el.year}</div>
      <div class="country">${el.country}</div></div>`;
  });
  parent.innerHTML = html;
};

const after2010 = () => {
  const comedyData = data.filter((el) => el.year > 2010 && el.year <= 2015);
  let html = "";
  comedyData.forEach((el, index) => {
    html += `<div class="card"><img src="./img/${el.img}" alt="">
        <div class="title">${el.title}</div>
        <div class="genre">${el.genre}</div>
        <div class="year">${el.year}</div>
        <div class="country">${el.country}</div></div>`;
  });
  parent.innerHTML = html;
};

const before2022 = () => {
  const comedyData = data.filter((el) => el.year > 2015 && el.year <= 2022);
  let html = "";
  comedyData.forEach((el, index) => {
    html += `<div class="card"><img src="./img/${el.img}" alt="">
        <div class="title">${el.title}</div>
        <div class="genre">${el.genre}</div>
        <div class="year">${el.year}</div>
        <div class="country">${el.country}</div></div>`;
  });
  parent.innerHTML = html;
};

select.addEventListener("change", () => {
  if (select.value == "All") {
    onDisplay();
  } else if (select.value == "2000-2010") {
    before2010();
  } else if (select.value == "2010-2015") {
    after2010();
  } else {
    before2022();
  }
});
