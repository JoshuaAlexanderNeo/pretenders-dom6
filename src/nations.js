import {getPretenders} from './pretenders';
import {putPretendersToNations} from './nationsPretenders';

export function getNations() {
  const nationsData = {
    0:   { era: null, label: "Any nation",
      realms: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      cheapgods20: [],
      cheapgods40: []},
    5:   { era: 0, label: "EA Arcoscephale - Golden Era",
      realms: [10,3],
      cheapgods20: [1343/*Titan of Love*/, 1230/*Forge Lord*/, 602/*Titan of Heaven*/, 600 /*Titan of War and Wisdom*/,2783/*Drakon*/, 3053 /*Grand Hierophant*/],
      cheapgods40: []},
    6:   { era: 0, label: "EA Ermor - New Faith",
      realms: [10,3],
      cheapgods20: [2463/*Statue of War*/, 1343/*Titan of Love*/, 874 /*Divine Emperor*/],
      cheapgods40: []},
    7:   { era: 0, label: "EA Ulm - Enigma of Steel", heat: -1,
      realms: [10, 1, 2],
      cheapgods20: [2234/*Irminsul*/, 1340/*Tiwaz of War*/, 1370/*Volla of the Bountiful Forest*/, 606/*Great Mother*/,1230/*Forge Lord*/, 266/*Dragon(N)*/],
      cheapgods40: []},
    8:   { era: 0, label: "EA Marverni - Time of Druids",
      realms: [10,2],
      cheapgods20: [3080/*Duiu of Farming*/,3079/*Duiu of Thunder*/,3081/*Duiu of War*/,266/*Dragon(N)*/,2930/*Hooded Spirit*/,2784/*Thrice Horned Boar*/,779/*Rams-Headed Serpent*/,1378/*Lord of the Forest*/,2450/*Horned One*/,3082/*Matrona of the Healing Spring*/,],
      cheapgods40: []},
    9:   { era: 0, label: "EA Sauromatia - Amazon Queens",
      realms: [10,3],
      cheapgods20: [157/*Mother of Monsters*/,266/*Dragon(N)*/,],
      cheapgods40: []},
    10:  { era: 0, label: "EA T’ien Ch’i - Spring and Autumn",
      realms: [10, 4],
      cheapgods20: [2556/*Celestial Carp*/,1345/*Celestial General*/,3088/*Dharmapala of the Underworld*/,2457/*Bodhisattva of Mercy*/,3060/*Master*/,],
      cheapgods40: []},
    11:  { era: 0, label: "EA Machaka - Lion Kings", heat: 2,
      realms: [10, 7],
      cheapgods20: [1346/*Colossal Fetish*/,1025/*Divine Glyph*/,957/*Lord of The Desert Sun*/,2787/*Celestial Lion*/,2958/*Golden Lion*/,2792/*Solar Serpent*/,2790/*Myrmecoleon*/,216/*Dragon(F)*/,2426/*Bouda Father*/,],
      cheapgods40: []},
    12:  { era: 0, label: "EA Mictlan - Reign of Blood", heat: 1, blessF: 1, blessB: 2,
      realms: [10,6],
      cheapgods20: [2442/*Teotl of War*/,],
      cheapgods40: []},
    13:  { era: 0, label: "EA Abysia - Children of Flame", heat: 3, blessF: 2,
      realms: [10,7],
      cheapgods20: [1025/*Divine Glyph*/,2792/*Solar Serpent*/,655/*Scorpion King*/,216/*Dragon(F)*/,486/*Great Warlock*/,],
      cheapgods40: []},
    14:  { era: 0, label: "EA Caelum - Eagle Kings", heat: -2,
      realms: [10, 5, 8],
      cheapgods20: [2552/*Ahura of Wisdom*/,2578/*Yazad King*/,2785/*Solar Eagle*/,],
      cheapgods40: []},
    15:  { era: 0, label: "EA C’tis - Lizard Kings", heat: 2,
      realms: [10,7],
      cheapgods20: [2445/*Neter of the Underworld*/,1349/*Devourer of Souls*/,320/*Saurolich*/,2793/*Serpent of Chaos*/,2799/*Wadjet*/,2205/*Great Sauromancer*/,],
      cheapgods40: []},
    16:  { era: 0, label: "EA Pangaea - Age of Revelry",
      realms: [10,3],
      cheapgods20: [1343/*Titan of Love*/,812/*Lord of the Wild*/,978/*Great Black Bull*/,979/*Great White Bull*/,2783/*Drakon*/,138/*Gorgon*/,2961/*Centauride Enchantress*/],
      cheapgods40: []},
    17:  { era: 0, label: "EA Agartha - Pale Ones", blessE: 2,
      realms: [10],
      cheapgods20: [2503/*Golden Pillar*/,2502/*Earth made Flesh*/,2791/*Earth Serpent*/,1590/*Ageless Olm*/,2955/*Leader of the Closed Council*/,],
      cheapgods40: []},
    18:  { era: 0, label: "EA Tir na n'Og - Land of the Ever Young",
      realms: [10,2],
      cheapgods20: [2856/*Son of the Sea*/,266/*Dragon(N)*/,1905/*Great Sorceress*/,],
      cheapgods40: []},
    19:  { era: 0, label: "EA Fomoria - The Cursed Ones",
      realms: [10,2],
      cheapgods20: [1899/*Fomorian God King*/,1898/*Fomorian Sorcerer*/,3076/*Morrigna*/,2856/*Son of the Sea*/,2795/*Dog of the Underworld*/,2789/*Raven of the Underworld*/,],
      cheapgods40: []},
    20:  { era: 0, label: "EA Vanheim - Age of Vanir", heat: -1,
      realms: [10, 1],
      cheapgods20: [1098/*Asynja*/,501/*Allfather*/,2206/*Eldest Dwarf*/,],
      cheapgods40: []},
    21:  { era: 0, label: "EA Helheim - Dusk and Death", heat: -1,
      realms: [10,1],
      cheapgods20: [501/*Allfather*/,2801/*Linnormr*/,2789/*Raven of the Underworld*/,],
      cheapgods40: []},
    22:  { era: 0, label: "EA Niefelheim - Sons of Winter", heat: -3,
      realms: [10,1],
      cheapgods20: [605/*Son of Niefel*/,644/*Dracolich*/,2801/*Linnormr*/,643/*Bog Mummy*/,1229/*Son of Fenrer*/,265/*Dragon(W)*/,],
      cheapgods40: []},
    24:  { era: 0, label: "EA Rus - Sons of Heaven", heat: -2,
      realms: [10,1],
      cheapgods20: [1591/*Father of Winters*/,3086/*Deives of the Sun*/,],
      cheapgods40: []},
    25:  { era: 0, label: "EA Kailasa - Rise of the Ape Kings", heat: 2,
      realms: [10,8],
      cheapgods20: [1344/*Devi of Good Fortunes*/,2466/*Kamadhenu*/,2202/*Great Siddha*/,2549/*Maharishi*/,],
      cheapgods40: []},
    26:  { era: 0, label: "EA Lanka - Land of Demons", heat: 2,
      realms: [10,8],
      cheapgods20: [1341/*Devi of Darkness*/,1096/*Destroyer of Worlds*/,2550/*Raksharani*/,],
      cheapgods40: []},
    27:  { era: 0, label: "EA Yomi - Oni Kings",
      realms: [10,4],
      cheapgods20: [2203/*Oni Kunshu*/,3074/*Kami of Storms*/,3073/*Kami of the Moon*/,2978/*Master Sorcerer*/,],
      cheapgods40: []},
    28:  { era: 0, label: "EA Hinnom - Sons of the Fallen", heat: 2,
      realms: [10,5],
      cheapgods20: [1025/*Divine Glyph*/,2462/*Golden Idol*/,2083/*Son of the Fallen*/,120/*Moloch*/,216/*Dragon(F)*/,],
      cheapgods40: []},
    29:  { era: 0, label: "EA Ur - The First City", heat: 1,
      realms: [10,5],
      cheapgods20: [2437/*Annunaki of Growth and Rebirth*/,1373/*Annunaki of Sweet Waters*/,1372/*Annunaki of the Sky*/,2435/*Annunaki of Love and War*/,2960/*Apkallu*/,661/*Shedu*/,2137/*Urmahlullu*/,],
      cheapgods40: []},
    30:  { era: 0, label: "EA Berytos - Phoenix Empire", heat: 1,
      realms: [10,3,5,7],
      cheapgods20: [2462/*Golden Idol*/,2315/*Melqart*/,120/*Moloch*/,2792/*Solar Serpent*/,],
      cheapgods40: []},
    31:  { era: 0, label: "EA Xibalba - Vigil of the Sun", heat: 1,
      realms: [10,6],
      cheapgods20: [604/*Teotl of the Night*/,2755/*Hun Came*/,2756/*Bolon-ti-ku*/,],
      cheapgods40: []},
    32:  { era: 0, label: "EA Mekone - Brazen Giants",
      realms: [3],
      cheapgods20: [2463/*Statue of War*/,3124/*Titan of Forethough*/,3121/*Eldest Cyclops*/,],
      cheapgods40: []},
    36:  { era: 0, label: "EA Atlantis - Emergence of the Deep Ones",
      realms: [9],
      cheapgods20: [109/*Dagon*/,2853/*Ghost King*/,],
      cheapgods40: []},
    37:  { era: 0, label: "EA R’lyeh - Time of Aboleths",
      realms: [9],
      cheapgods20: [1402/*Polypal Queen*/,546/*Void Lurker*/,3098/*First Spawn*/,2855/*Floating Mind*/,],
      cheapgods40: []},
    38:  { era: 0, label: "EA Pelagia - Pearl Kings",
      realms: [9],
      cheapgods20: [1233/*Lord of the Waves*/,1232/*Old Man of the Sea*/,],
      cheapgods40: []},
    39:  { era: 0, label: "EA Oceania - Coming of the Capricorns",
      realms: [9],
      cheapgods20: [2849/*Father of Monsters*/,294/*Nerid*/,3056/*Aphroi Sage*/,],
      cheapgods40: []},
    40:  { era: 0, label: "EA Therodos - Telkhine Spectre",
      realms: [9],
      cheapgods20: [2850/*Statue of the Underworld*/,872/*Ghost King*/,],
      cheapgods40: [2881/*Telkhine God-King*/,]},
    43:  { era: 1, label: "MA Arcoscephale - The Old Kingdom",
      realms: [10,3],
      cheapgods20: [1343/*Titan of Love*/,158/*Oracle*/,1230/*Forge Lord*/, 602/*Titan of Heaven*/, 600 /*Titan of War and Wisdom*/,3053 /*Grand Hierophant*/],
      cheapgods40: []},
    44:  { era: 1, label: "MA Ermor - Ashen Empire", growth: -3,
      realms: [10,3,7],
      cheapgods20: [2850/*Statue of the Underworld*/,],
      cheapgods40: []},
    45:  { era: 1, label: "MA Sceleria - Reformed Empire",
      realms: [10,3],
      cheapgods20: [2850/*Statue of the Underworld*/,874/*Divine Emperor*/,383/*Prince of Death*/,],
      cheapgods40: []},
    46:  { era: 1, label: "MA Pythium - Emerald Empire",
      realms: [10,3,7],
      cheapgods20: [158/*Oracle*/,874/*Divine Emperor*/,],
      cheapgods40: []},
    47:  { era: 1, label: "MA Man - Tower of Avalon",
      realms: [10,2],
      cheapgods20: [2234/*Irminsul*/,2856/*Son of the Sea*/,3079/*Duiu of Thunder*/,3076/*Morrigna*/,1378/*Lord of the Forest*/,2930/*Hooded Spirit*/,266/*Dragon(N)*/,],
      cheapgods40: []},
    48:  { era: 1, label: "MA Eriu - Last of the Tuatha",
      realms: [10,2],
      cheapgods20: [3076/*Morrigna*/,2856/*Son of the Sea*/,266/*Dragon(N)*/,],
      cheapgods40: []},
    49:  { era: 1, label: "MA Ulm - Forges of Ulm",
      realms: [10,1, 2],
      cheapgods20: [1340/*Tiwaz of War*/,1230/*Forge Lord*/,550/*Master Alchemist*/,],
      cheapgods40: []},
    50:  { era: 1, label: "MA Marignon - Fiery Justice", blessF: 2, blessS: 2,
      realms: [10,2, 3],
      cheapgods20: [607/*Baphomet*/,3080/*Duiu of Farming*/,3079/*Duiu of Thunder*/,215/*Virtue*/,2787/*Celestial Lion*/,216/*Dragon(F)*/,],
      cheapgods40: []},
    51:  { era: 1, label: "MA Mictlan - Reign of the Lawgiver", heat: 1, blessA: 1, blessN: 2,
      realms: [10,6],
      cheapgods20: [2443/*Teotl of the Sky*/,1896/*Lawgiver*/,],
      cheapgods40: []},
    52:  { era: 1, label: "MA T’ien Ch’i - Imperial Bureaucracy",
      realms: [10,4],
      cheapgods20: [2556/*Celestial Carp*/,905/*Jade Emperor*/,1345/*Celestial General*/,3088/*Dharmapala of the Underworld*/,2457/*Bodhisattva of Mercy*/,3060/*Master*/,],
      cheapgods40: []},
    53:  { era: 1, label: "MA Machaka - Reign of Sorcerors", heat: 2,
      realms: [10,7],
      cheapgods20: [1346/*Colossal Fetish*/,1025/*Divine Glyph*/,957/*Lord of The Desert Sun*/,2793/*Serpent of Chaos*/,2792/*Solar Serpent*/,216/*Dragon(F)*/,2207/*Great Sorcerer*/,],
      cheapgods40: []},
    54:  { era: 1, label: "MA Agartha - Golem Cult", blessE: 1,
      realms: [10],
      cheapgods20: [2503/*Golden Pillar*/,2791/*Earth Serpent*/,1590/*Ageless Olm*/,2955/*Leader of the Closed Council*/,],
      cheapgods40: []},
    55:  { era: 1, label: "MA Abysia - Blood and Fire", heat: 3, blessF: 1,
      realms: [10,7],
      cheapgods20: [1025/*Divine Glyph*/,120/*Moloch*/,2792/*Solar Serpent*/,216/*Dragon(F)*/,486/*Great Warlock*/,],
      cheapgods40: []},
    56:  { era: 1, label: "MA Caelum - Reign of the Seraphim", heat: -3,
      realms: [10,5,8],
      cheapgods20: [2552/*Ahura of Wisdom*/,2578/*Yazad King*/,265/*Dragon(W)*/,509/*Arch Seraph*/,],
      cheapgods40: []},
    57:  { era: 1, label: "MA C’tis - Miasma", heat: 2,
      realms: [10,7],
      cheapgods20: [2445/*Neter of the Underworld*/,1349/*Devourer of Souls*/,320/*Saurolich*/,2793/*Serpent of Chaos*/,2799/*Wadjet*/,266/*Dragon(N)*/,],
      cheapgods40: []},
    58:  { era: 1, label: "MA Pangaea - Age of Bronze",
      realms: [10,3],
      cheapgods20: [1343/*Titan of Love*/,812/*Lord of the Wild*/,978/*Great Black Bull*/,979/*Great White Bull*/,2783/*Drakon*/,138/*Gorgon*/,2977/*Centaur Great Sage*/,2961/*Centauride Enchantress*/],
      cheapgods40: []},
    59:  { era: 1, label: "MA Asphodel - Carrion Woods",
      realms: [10,3],
      cheapgods20: [1026/*Carrion Dragon*/,],
      cheapgods40: []},
    60:  { era: 1, label: "MA Vanheim - Arrival of Man", heat: -1,
      realms: [10,1],
      cheapgods20: [1098/*Asynja*/,501/*Allfather*/,2206/*Eldest Dwarf*/,],
      cheapgods40: []},
    61:  { era: 1, label: "MA Jotunheim - Iron Woods", heat: -2,
      realms: [10,1],
      cheapgods20: [],
      cheapgods40: []},
    62:  { era: 1, label: "MA Vanarus - Land of the Chuds", heat: -2,
      realms: [10,1],
      cheapgods20: [],
      cheapgods40: []},
    63:  { era: 1, label: "MA Bandar Log - Land of the Apes", heat: 2,
      realms: [10,8],
      cheapgods20: [],
      cheapgods40: []},
    64:  { era: 1, label: "MA Shinuyama - Land of the Bakemono",
      realms: [10,4],
      cheapgods20: [],
      cheapgods40: []},
    65:  { era: 1, label: "MA Ashdod - Reign of the Anakim", heat: 2,
      realms: [10,5],
      cheapgods20: [],
      cheapgods40: []},
    66:  { era: 1, label: "MA Uruk - City States", heat: 1,
      realms: [10,5],
      cheapgods20: [],
      cheapgods40: []},
    67:  { era: 1, label: "MA Nazca - Kingdom of the Sun", heat: -1,
      realms: [10,6],
      cheapgods20: [],
      cheapgods40: []},
    68:  { era: 1, label: "MA Xibalba - Flooded Caves", heat: 1,
      realms: [10,6],
      cheapgods20: [],
      cheapgods40: []},
    73:  { era: 1, label: "MA Atlantis - Kings of the Deep",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    74:  { era: 1, label: "MA R’lyeh - Fallen Star",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    75:  { era: 1, label: "MA Pelagia - Triton Kings",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    76:  { era: 1, label: "MA Oceania - Mermidons",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    77:  { era: 1, label: "MA Ys - Morgen Queens",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    80:  { era: 2, label: "LA Arcoscephale - Sibylline Guidance",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    81:  { era: 2, label: "LA Pythium - Serpent Cult",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    82:  { era: 2, label: "LA Lemuria - Soul Gate", growth: -3,
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    83:  { era: 2, label: "LA Man - Towers of Chelms",
      realms: [2],
      cheapgods20: [],
      cheapgods40: []},
    84:  { era: 2, label: "LA Ulm - Black Forest",
      realms: [1, 2],
      cheapgods20: [],
      cheapgods40: []},
    85:  { era: 2, label: "LA Marignon - Conquerors of the Sea", blessF: 1, blessS: 1, blessB: 1,
      realms: [2, 3, 6],
      cheapgods20: [],
      cheapgods40: []},
    86:  { era: 2, label: "LA Mictlan - Blood and Rain", heat: 1, blessW: 1, blessB: 2,
      realms: [6],
      cheapgods20: [],
      cheapgods40: []},
    87:  { era: 2, label: "LA T’ien Ch’i - Barbarian Kings",
      realms: [4],
      cheapgods20: [],
      cheapgods40: []},
    89:  { era: 2, label: "LA Jomon - Human Daimyos",
      realms: [4],
      cheapgods20: [],
      cheapgods40: []},
    90:  { era: 2, label: "LA Agartha - Ktonian Dead",
      realms: [10],
      cheapgods20: [],
      cheapgods40: []},
    91:  { era: 2, label: "LA Abysia - Blood of Humans", heat: 2,
      realms: [7],
      cheapgods20: [],
      cheapgods40: []},
    92:  { era: 2, label: "LA Caelum - Return of the Raptors", heat: -1,
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    93:  { era: 2, label: "LA C’tis - Desert Tombs", heat: 2,
      realms: [7],
      cheapgods20: [],
      cheapgods40: []},
    94:  { era: 2, label: "LA Pangaea - New Era",
      realms: [3],
      cheapgods20: [],
      cheapgods40: []},
    95:  { era: 2, label: "LA Midgård - Age of Men", heat: -1,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    96:  { era: 2, label: "LA Utgård - Well of Urd", heat: -1,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    97:  { era: 2, label: "LA Bogarus - Age of Heroes", heat: -2,
      realms: [1],
      cheapgods20: [],
      cheapgods40: []},
    98:  { era: 2, label: "LA Patala - Reign of the Nagas", heat: 2,
      realms: [8],
      cheapgods20: [],
      cheapgods40: []},
    99:  { era: 2, label: "LA Gath - Last of the Giants", heat: 1,
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    100: { era: 2, label: "LA Ragha - Dual Kingdom",
      realms: [5],
      cheapgods20: [],
      cheapgods40: []},
    101: { era: 2, label: "LA Xibalba - Return of the Zotz", heat: 1,
      realms: [6],
      cheapgods20: [],
      cheapgods40: []},
    106: { era: 2, label: "LA Atlantis - Frozen Sea", heat: -2,
      realms: [10],
      cheapgods20: [],
      cheapgods40: []},
    107: { era: 2, label: "LA R’lyeh - Dreamlands",
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
    108: { era: 2, label: "LA Erytheia - Kingdom of Two Worlds", heat: 1,
      realms: [9],
      cheapgods20: [],
      cheapgods40: []},
  };

  Object.keys(nationsData).forEach(nationId => {
    if (!nationsData[nationId].heat) {
      nationsData[nationId].heat = 0;
    }
    if (!nationsData[nationId].growth) {
      nationsData[nationId].growth = 0;
    }
    if (!nationsData[nationId].blessF) {
      nationsData[nationId].blessF = 0;
    }
    if (!nationsData[nationId].blessA) {
      nationsData[nationId].blessA = 0;
    }
    if (!nationsData[nationId].blessW) {
      nationsData[nationId].blessW = 0;
    }
    if (!nationsData[nationId].blessE) {
      nationsData[nationId].blessE = 0;
    }
    if (!nationsData[nationId].blessS) {
      nationsData[nationId].blessS = 0;
    }
    if (!nationsData[nationId].blessD) {
      nationsData[nationId].blessD = 0;
    }
    if (!nationsData[nationId].blessN) {
      nationsData[nationId].blessN = 0;
    }
    if (!nationsData[nationId].blessB) {
      nationsData[nationId].blessB = 0;
    }
    nationsData[nationId].pretenders = [];
  });

  putPretendersToNations(nationsData, getPretenders());

  return nationsData;

};
