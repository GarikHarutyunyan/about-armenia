var regions = [
  {
    region_name: "Aragatzotn",
    region_code: "AG",
    capital: "Ashtarak",
    population: 168100,
    area: 2753,
  },
  {
    region_name: "Armavir",
    region_code: "AV",
    capital: "Armavir",
    population: 323300,
    area: 1242,
  },
  {
    region_name: "Shirak",
    region_code: "SH",
    capital: "Gyumri",
    population: 282300,
    area: 2681,
  },
  {
    region_name: "Tavush",
    region_code: "TV",
    capital: "Ijevan",
    population: 134100,
    area: 2704,
  },
  {
    region_name: "Ararat",
    region_code: "AR",
    capital: "Artashat",
    population: 260367,
    area: 2096,
  },
  {
    region_name: "Kotayq",
    region_code: "KT",
    capital: "Hrazdan",
    population: 254397,
    area: 2089,
  },
  {
    region_name: "Lori",
    region_code: "LO",
    capital: "Vanadzor",
    population: 213300,
    area: 3799,
  },
  {
    region_name: "Yerevan",
    region_code: "ER",
    population: 1100000,
    area: 223,
  },
  {
    region_name: "Syunik",
    region_code: "SU",
    capital: "Kapan",
    population: 135800,
    area: 4506,
  },
  {
    region_name: "Vayots Dzor",
    region_code: "VD",
    capital: "Yeghegnadzor",
    population: 49000,
    area: 2308,
  },
  {
    region_name: "Gegharkunik",
    region_code: "GR",
    capital: "Gavar",
    population: 278600,
    area: 5348,
  },
];

var temp_array = regions.map(function (item) {
  return item.population;
});
var highest_value = Math.max.apply(Math, temp_array);

regions.forEach((region) => {
  const regionElement = document.getElementById(region.region_code);

  regionElement.style.fill =
    "rgba(11, 104, 170," + region.population / highest_value + ")";
  regionElement.onmouseover = function () {
    const infoPanel = document.createElement("div");
    const br = document.createElement("br");

    infoPanel.classList.add("info_panel");
    infoPanel.append(region.region_name);
    infoPanel.append(br);
    infoPanel.append(
      "Population: " + region.population.toLocaleString("en-UK")
    );

    document.body.appendChild(infoPanel);
  };

  regionElement.onmouseout = function () {
    const infoPanel = document.querySelector(".info_panel");

    infoPanel.remove();
  };

  regionElement.onmousemove = function (e) {
    const infoPanel = document.querySelector(".info_panel");
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    infoPanel.style.top = mouseY - 50 + "px";
    infoPanel.style.left = mouseX - infoPanel.style.width / 2 + "px";
  };
});
