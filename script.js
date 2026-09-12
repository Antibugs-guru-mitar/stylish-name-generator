/* =========================================
   STYLISH NAME GENERATOR
   PHASE TWO — PROFESSIONAL JAVASCRIPT
   ========================================= */


/* ---------- ELEMENTS ---------- */

const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const resultsGrid = document.getElementById("resultsGrid");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");


/* ---------- OPTIONAL NEW ELEMENTS ---------- */

const styleSearch =
    document.getElementById("styleSearch") ||
    document.getElementById("styleNameSearch");

const moreBtn =
    document.getElementById("moreBtn") ||
    document.getElementById("loadMoreBtn");

const loadingScreen =
    document.getElementById("loadingScreen") ||
    document.getElementById("loadingOverlay");

const loadingText =
    document.getElementById("loadingText");


/* =========================================
   BASIC UNICODE MAPS
   ========================================= */


/* ---------- BOLD ---------- */

const boldMap = {
    A:"𝐀",B:"𝐁",C:"𝐂",D:"𝐃",E:"𝐄",F:"𝐅",G:"𝐆",H:"𝐇",I:"𝐈",J:"𝐉",
    K:"𝐊",L:"𝐋",M:"𝐌",N:"𝐍",O:"𝐎",P:"𝐏",Q:"𝐐",R:"𝐑",S:"𝐒",T:"𝐓",
    U:"𝐔",V:"𝐕",W:"𝐖",X:"𝐗",Y:"𝐘",Z:"𝐙",

    a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",j:"𝐣",
    k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",
    u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳",

    0:"𝟎",1:"𝟏",2:"𝟐",3:"𝟑",4:"𝟒",
    5:"𝟓",6:"𝟔",7:"𝟕",8:"𝟖",9:"𝟗"
};


/* ---------- ITALIC ---------- */

const italicMap = {
    A:"𝘈",B:"𝘉",C:"𝘊",D:"𝘋",E:"𝘌",F:"𝘍",G:"𝘎",H:"𝘏",I:"𝘐",J:"𝘑",
    K:"𝘒",L:"𝘓",M:"𝘔",N:"𝘕",O:"𝘖",P:"𝘗",Q:"𝘘",R:"𝘙",S:"𝘚",T:"𝘛",
    U:"𝘜",V:"𝘝",W:"𝘞",X:"𝘟",Y:"𝘠",Z:"𝘡",

    a:"𝘢",b:"𝘣",c:"𝘤",d:"𝘥",e:"𝘦",f:"𝘧",g:"𝘨",h:"𝘩",i:"𝘪",j:"𝘫",
    k:"𝘬",l:"𝘭",m:"𝘮",n:"𝘯",o:"𝘰",p:"𝘱",q:"𝘲",r:"𝘳",s:"𝘴",t:"𝘵",
    u:"𝘶",v:"𝘷",w:"𝘸",x:"𝘹",y:"𝘺",z:"𝘻"
};


/* ---------- BOLD ITALIC ---------- */

const boldItalicMap = {
    A:"𝑨",B:"𝑩",C:"𝑪",D:"𝑫",E:"𝑬",F:"𝑭",G:"𝑮",H:"𝑯",I:"𝑰",J:"𝑱",
    K:"𝑲",L:"𝑳",M:"𝑴",N:"𝑵",O:"𝑶",P:"𝑷",Q:"𝑸",R:"𝑹",S:"𝑺",T:"𝑻",
    U:"𝑼",V:"𝑽",W:"𝑾",X:"𝑿",Y:"𝒀",Z:"𝒁",

    a:"𝒂",b:"𝒃",c:"𝒄",d:"𝒅",e:"𝒆",f:"𝒇",g:"𝒈",h:"𝒉",i:"𝒊",j:"𝒋",
    k:"𝒌",l:"𝒍",m:"𝒎",n:"𝒏",o:"𝒐",p:"𝒑",q:"𝒒",r:"𝒓",s:"𝒔",t:"𝒕",
    u:"𝒖",v:"𝒗",w:"𝒘",x:"𝒙",y:"𝒚",z:"𝒛"
};


/* ---------- DOUBLE ---------- */

const doubleMap = {
    A:"𝔸",B:"𝔹",C:"ℂ",D:"𝔻",E:"𝔼",F:"𝔽",G:"𝔾",H:"ℍ",I:"𝕀",J:"𝕁",
    K:"𝕂",L:"𝕃",M:"𝕄",N:"ℕ",O:"𝕆",P:"ℙ",Q:"ℚ",R:"ℝ",S:"𝕊",T:"𝕋",
    U:"𝕌",V:"𝕍",W:"𝕎",X:"𝕏",Y:"𝕐",Z:"ℤ",

    a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",j:"𝕛",
    k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",
    u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫",

    0:"𝟘",1:"𝟙",2:"𝟚",3:"𝟛",4:"𝟜",
    5:"𝟝",6:"𝟞",7:"𝟟",8:"𝟠",9:"𝟡"
};


/* ---------- GOTHIC ---------- */

const gothicMap = {
    A:"𝕬",B:"𝕭",C:"𝕮",D:"𝕯",E:"𝕰",F:"𝕱",G:"𝕲",H:"𝕳",I:"𝕴",J:"𝕵",
    K:"𝕶",L:"𝕷",M:"𝕸",N:"𝕹",O:"𝕺",P:"𝕻",Q:"𝕼",R:"𝕽",S:"𝕾",T:"𝕿",
    U:"𝖀",V:"𝖁",W:"𝖂",X:"𝖃",Y:"𝖄",Z:"𝖅",

    a:"𝖆",b:"𝖇",c:"𝖈",d:"𝖉",e:"𝖊",f:"𝖋",g:"𝖌",h:"𝖍",i:"𝖎",j:"𝖏",
    k:"𝖐",l:"𝖑",m:"𝖒",n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",s:"𝖘",t:"𝖙",
    u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟"
};


/* ---------- SANS ---------- */

const sansMap = {
    A:"𝖠",B:"𝖡",C:"𝖢",D:"𝖣",E:"𝖤",F:"𝖥",G:"𝖦",H:"𝖧",I:"𝖨",J:"𝖩",
    K:"𝖪",L:"𝖫",M:"𝖬",N:"𝖭",O:"𝖮",P:"𝖯",Q:"𝖰",R:"𝖱",S:"𝖲",T:"𝖳",
    U:"𝖴",V:"𝖵",W:"𝖶",X:"𝖷",Y:"𝖸",Z:"𝖹",

    a:"𝖺",b:"𝖻",c:"𝖼",d:"𝖽",e:"𝖾",f:"𝖿",g:"𝗀",h:"𝗁",i:"𝗂",j:"𝗃",
    k:"𝗄",l:"𝗅",m:"𝗆",n:"𝗇",o:"𝗈",p:"𝗉",q:"𝗊",r:"𝗋",s:"𝗌",t:"𝗍",
    u:"𝗎",v:"𝗏",w:"𝗐",x:"𝗑",y:"𝗒",z:"𝗓",

    0:"𝟢",1:"𝟣",2:"𝟤",3:"𝟥",4:"𝟦",
    5:"𝟧",6:"𝟨",7:"𝟩",8:"𝟪",9:"𝟫"
};


/* ---------- MONOSPACE ---------- */

const monoMap = {
    A:"𝙰",B:"𝙱",C:"𝙲",D:"𝙳",E:"𝙴",F:"𝙵",G:"𝙶",H:"𝙷",I:"𝙸",J:"𝙹",
    K:"𝙺",L:"𝙻",M:"𝙼",N:"𝙽",O:"𝙾",P:"𝙿",Q:"𝚀",R:"𝚁",S:"𝚂",T:"𝚃",
    U:"𝚄",V:"𝚅",W:"𝚆",X:"𝚇",Y:"𝚈",Z:"𝚉",

    a:"𝚊",b:"𝚋",c:"𝚌",d:"𝚍",e:"𝚎",f:"𝚏",g:"𝚐",h:"𝚑",i:"𝚒",j:"𝚓",
    k:"𝚔",l:"𝚕",m:"𝚖",n:"𝚗",o:"𝚘",p:"𝚙",q:"𝚚",r:"𝚛",s:"𝚜",t:"𝚝",
    u:"𝚞",v:"𝚟",w:"𝚠",x:"𝚡",y:"𝚢",z:"𝚣",

    0:"𝟶",1:"𝟷",2:"𝟸",3:"𝟹",4:"𝟺",
    5:"𝟻",6:"𝟼",7:"𝟽",8:"𝟾",9:"𝟿"
};


/* ---------- FULL WIDTH ---------- */

const fullwidthMap = {
    A:"Ａ",B:"Ｂ",C:"Ｃ",D:"Ｄ",E:"Ｅ",F:"Ｆ",G:"Ｇ",H:"Ｈ",I:"Ｉ",J:"Ｊ",
    K:"Ｋ",L:"Ｌ",M:"Ｍ",N:"Ｎ",O:"Ｏ",P:"Ｐ",Q:"Ｑ",R:"Ｒ",S:"Ｓ",T:"Ｔ",
    U:"Ｕ",V:"Ｖ",W:"Ｗ",X:"Ｘ",Y:"Ｙ",Z:"Ｚ",

    a:"ａ",b:"ｂ",c:"ｃ",d:"ｄ",e:"ｅ",f:"ｆ",g:"ｇ",h:"ｈ",i:"ｉ",j:"ｊ",
    k:"ｋ",l:"ｌ",m:"ｍ",n:"ｎ",o:"ｏ",p:"ｐ",q:"ｑ",r:"ｒ",s:"ｓ",t:"ｔ",
    u:"ｕ",v:"ｖ",w:"ｗ",x:"ｘ",y:"ｙ",z:"ｚ",

    0:"０",1:"１",2:"２",3:"３",4:"４",
    5:"５",6:"６",7:"７",8:"８",9:"９"
};


/* ---------- SMALL CAPS ---------- */

const smallCapsMap = {
    a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ꜰ",g:"ɢ",h:"ʜ",i:"ɪ",j:"ᴊ",
    k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",q:"ǫ",r:"ʀ",s:"s",t:"ᴛ",
    u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ",

    A:"ᴀ",B:"ʙ",C:"ᴄ",D:"ᴅ",E:"ᴇ",F:"ꜰ",G:"ɢ",H:"ʜ",I:"ɪ",J:"ᴊ",
    K:"ᴋ",L:"ʟ",M:"ᴍ",N:"ɴ",O:"ᴏ",P:"ᴘ",Q:"ǫ",R:"ʀ",S:"s",T:"ᴛ",
    U:"ᴜ",V:"ᴠ",W:"ᴡ",X:"x",Y:"ʏ",Z:"ᴢ"
};


/* =========================================
   STYLE DEFINITIONS
   ========================================= */

const fontStyles = [

    { name:"Bold", map:boldMap },
    { name:"Italic", map:italicMap },
    { name:"Bold Italic", map:boldItalicMap },
    { name:"Double Struck", map:doubleMap },
    { name:"Gothic", map:gothicMap },
    { name:"Sans Serif", map:sansMap },
    { name:"Monospace", map:monoMap },
    { name:"Full Width", map:fullwidthMap },
    { name:"Small Caps", map:smallCapsMap }

];


/* =========================================
   DECORATED / GAMING STYLES
   ========================================= */

const decoratedStyles = [

    {
        name:"Royal Crown",
        create:n => `꧁༺ ${n} ༻꧂`
    },

    {
        name:"King",
        create:n => `♛ ${n} ♛`
    },

    {
        name:"Queen",
        create:n => `♕ ${n} ♕`
    },

    {
        name:"Star Warrior",
        create:n => `★彡 ${n} 彡★`
    },

    {
        name:"Shadow Wings",
        create:n => `乂 ${n} 乂`
    },

    {
        name:"Diamond Frame",
        create:n => `『 ${n} 』`
    },

    {
        name:"Warrior",
        create:n => `⚔️ ${n} ⚔️`
    },

    {
        name:"Fire",
        create:n => `꧁🔥 ${n} 🔥꧂`
    },

    {
        name:"Dark Shadow",
        create:n => `☾ ${n} ☽`
    },

    {
        name:"Elite",
        create:n => `亗 ${n} 亗`
    },

    {
        name:"Heart",
        create:n => `♡ ${n} ♡`
    },

    {
        name:"Arrow",
        create:n => `➳ ${n} ➳`
    },

    {
        name:"Mystic",
        create:n => `༒ ${n} ༒`
    },

    {
        name:"Dragon",
        create:n => `𒆜 ${n} 𒆜`
    },

    {
        name:"Dark King",
        create:n => `♚ 『${n}』 ♚`
    },

    {
        name:"Golden",
        create:n => `✦ ${n} ✦`
    },

    {
        name:"Night",
        create:n => `☽ ${n} ☾`
    },

    {
        name:"Lightning",
        create:n => `ϟ ${n} ϟ`
    },

    {
        name:"Danger",
        create:n => `☠ ${n} ☠`
    },

    {
        name:"Skull",
        create:n => `☠︎︎ ${n} ☠︎︎`
    },

    {
        name:"Devil",
        create:n => `😈 ${n} 😈`
    },

    {
        name:"Angel",
        create:n => `☁️ ${n} ☁️`
    },

    {
        name:"Love",
        create:n => `♥ ${n} ♥`
    },

    {
        name:"Broken Heart",
        create:n => `💔 ${n} 💔`
    },

    {
        name:"Spark",
        create:n => `✧･ﾟ ${n} ﾟ･✧`
    },

    {
        name:"Galaxy",
        create:n => `✦⋆｡ﾟ ${n} ﾟ｡⋆✦`
    },

    {
        name:"Cosmic",
        create:n => `⋆｡°✩ ${n} ✩°｡⋆`
    },

    {
        name:"Ocean",
        create:n => `≋≋ ${n} ≋≋`
    },

    {
        name:"Wave",
        create:n => `〰 ${n} 〰`
    },

    {
        name:"Storm",
        create:n => `⚡ ${n} ⚡`
    },

    {
        name:"Sword",
        create:n => `⚔ ${n} ⚔`
    },

    {
        name:"Cross",
        create:n => `✞ ${n} ✞`
    },

    {
        name:"Sacred",
        create:n => `☬ ${n} ☬`
    },

    {
        name:"Royal Diamond",
        create:n => `♢ ${n} ♢`
    },

    {
        name:"Circle",
        create:n => `◉ ${n} ◉`
    },

    {
        name:"Target",
        create:n => `◎ ${n} ◎`
    },

    {
        name:"Minimal",
        create:n => `• ${n} •`
    },

    {
        name:"Line",
        create:n => `─ ${n} ─`
    },

    {
        name:"Double Line",
        create:n => `═ ${n} ═`
    },

    {
        name:"Brackets",
        create:n => `【${n}】`
    },

    {
        name:"Japanese Frame",
        create:n => `『${n}』`
    },

    {
        name:"Black Box",
        create:n => `【★${n}★】`
    },

    {
        name:"Arrow King",
        create:n => `➶ ${n} ➷`
    },

    {
        name:"Royal Arrow",
        create:n => `༺➳ ${n} ➳༻`
    },

    {
        name:"Fire King",
        create:n => `♛🔥 ${n} 🔥♛`
    },

    {
        name:"Dark Fire",
        create:n => `☠︎ ${n} ☠︎`
    },

    {
        name:"Red Zone",
        create:n => `『亗 ${n} 亗』`
    },

    {
        name:"Pro Gamer",
        create:n => `亗『${n}』亗`
    },

    {
        name:"Game Master",
        create:n => `乂⚔ ${n} ⚔乂`
    },

    {
        name:"Legend",
        create:n => `꧁༒ ${n} ༒꧂`
    },

    {
        name:"Immortal",
        create:n => `꧁☬ ${n} ☬꧂`
    },

    {
        name:"God Mode",
        create:n => `『♛』${n}『♛』`
    },

    {
        name:"Boss",
        create:n => `♚ ${n} ♚`
    },

    {
        name:"Kingdom",
        create:n => `♔━━ ${n} ━━♔`
    },

    {
        name:"Emperor",
        create:n => `♛━━ ${n} ━━♛`
    },

    {
        name:"Champion",
        create:n => `🏆 ${n} 🏆`
    },

    {
        name:"Winner",
        create:n => `🏆『${n}』🏆`
    },

    {
        name:"VIP",
        create:n => `♛VIP ${n} VIP♛`
    },

    {
        name:"Premium",
        create:n => `✦『${n}』✦`
    },

    {
        name:"Luxury",
        create:n => `༺✦ ${n} ✦༻`
    },

    {
        name:"Diamond King",
        create:n => `♦ ${n} ♦`
    },

    {
        name:"Dark Diamond",
        create:n => `◆ ${n} ◆`
    },

    {
        name:"Black Star",
        create:n => `★ ${n} ★`
    },

    {
        name:"White Star",
        create:n => `☆ ${n} ☆`
    },

    {
        name:"Four Stars",
        create:n => `✦✧ ${n} ✧✦`
    },

    {
        name:"Mystic Star",
        create:n => `★༒ ${n} ༒★`
    },

    {
        name:"Moon King",
        create:n => `☾♛ ${n} ♛☽`
    },

    {
        name:"Moon Light",
        create:n => `☾⋆ ${n} ⋆☽`
    },

    {
        name:"Night King",
        create:n => `☽亗 ${n} 亗☾`
    },

    {
        name:"Ghost",
        create:n => `𓆩 ${n} 𓆪`
    },

    {
        name:"Phantom",
        create:n => `𓆩༒${n}༒𓆪`
    },

    {
        name:"Demon",
        create:n => `𒁍 ${n} 𒁍`
    },

    {
        name:"Dark Lord",
        create:n => `༒☬ ${n} ☬༒`
    },

    {
        name:"Hell",
        create:n => `⛧ ${n} ⛧`
    },

    {
        name:"Venom",
        create:n => `☣ ${n} ☣`
    },

    {
        name:"Poison",
        create:n => `☠︎☣ ${n} ☣☠︎`
    },

    {
        name:"Hunter",
        create:n => `亗⚔ ${n} ⚔亗`
    },

    {
        name:"Sniper",
        create:n => `⌁〘 ${n} 〙⌁`
    },

    {
        name:"Assassin",
        create:n => `乂☠ ${n} ☠乂`
    },

    {
        name:"Ninja",
        create:n => `々 ${n} 々`
    },

    {
        name:"Samurai",
        create:n => `彡 ${n} 彡`
    },

    {
        name:"War Lord",
        create:n => `⚔༒ ${n} ༒⚔`
    },

    {
        name:"Battle",
        create:n => `⚔︎『${n}』⚔︎`
    },

    {
        name:"Power",
        create:n => `ϟ『${n}』ϟ`
    },

    {
        name:"Energy",
        create:n => `⚡『${n}』⚡`
    },

    {
        name:"Electric",
        create:n => `ϟ⚡ ${n} ⚡ϟ`
    },

    {
        name:"Blaze",
        create:n => `🔥『${n}』🔥`
    },

    {
        name:"Inferno",
        create:n => `༒🔥 ${n} 🔥༒`
    },

    {
        name:"Ice",
        create:n => `❄ ${n} ❄`
    },

    {
        name:"Frozen",
        create:n => `❄️『${n}』❄️`
    },

    {
        name:"Snow",
        create:n => `☃ ${n} ☃`
    },

    {
        name:"Nature",
        create:n => `༄ ${n} ༄`
    },

    {
        name:"Leaf",
        create:n => `❧ ${n} ❧`
    },

    {
        name:"Flower",
        create:n => `❀ ${n} ❀`
    },

    {
        name:"Butterfly",
        create:n => `🦋 ${n} 🦋`
    },

    {
        name:"Rose",
        create:n => `🌹 ${n} 🌹`
    },

    {
        name:"Cute",
        create:n => `♡₊˚ ${n} ˚₊♡`
    },

    {
        name:"Sweet",
        create:n => `꒰ ${n} ꒱`
    },

    {
        name:"Soft",
        create:n => `୨୧ ${n} ୨୧`
    },

    {
        name:"Aesthetic",
        create:n => `⋆｡ﾟ✶ ${n} ✶ﾟ｡⋆`
    },

    {
        name:"Dream",
        create:n => `☁︎⋆ ${n} ⋆☁︎`
    },

    {
        name:"Magic",
        create:n => `✧༺ ${n} ༻✧`
    },

    {
        name:"Fantasy",
        create:n => `꧁✧ ${n} ✧꧂`
    },

    {
        name:"Mystery",
        create:n => `༒『${n}』༒`
    },

    {
        name:"Secret",
        create:n => `⌁ ${n} ⌁`
    },

    {
        name:"Hidden",
        create:n => `◈ ${n} ◈`
    },

    {
        name:"Elite Shadow",
        create:n => `☾亗 ${n} 亗☽`
    },

    {
        name:"Dark Elite",
        create:n => `亗☠ ${n} ☠亗`
    },

    {
        name:"Royal Shadow",
        create:n => `♛☾ ${n} ☽♛`
    },

    {
        name:"Ultimate",
        create:n => `꧁༺⚡ ${n} ⚡༻꧂`
    },

    {
        name:"Ultimate King",
        create:n => `꧁♛ ${n} ♛꧂`
    },

    {
        name:"Ultimate Warrior",
        create:n => `꧁⚔ ${n} ⚔꧂`
    },

    {
        name:"Ultimate Fire",
        create:n => `꧁🔥⚔ ${n} ⚔🔥꧂`
    }

];


/* =========================================
   SPECIAL CRAZY UNICODE STYLES
   ========================================= */

const specialStyles = [

    {
        name:"Evil Mark",
        create:n => `𝅥⃝${convertText(n, boldMap)}͜͡`
    },

    {
        name:"Evil Crown",
        create:n => `𝅥⃝${convertText(n, boldMap)}͜͡亗`
    },

    {
        name:"Crazy Glitch",
        create:n => `̷${n}̷`
    },

    {
        name:"Glitch Shadow",
        create:n => `̸${n}̸`
    },

    {
        name:"Overline",
        create:n => [...n].map(c => c + "̅").join("")
    },

    {
        name:"Underline",
        create:n => [...n].map(c => c + "̲").join("")
    },

    {
        name:"Double Underline",
        create:n => [...n].map(c => c + "̳").join("")
    },

    {
        name:"Strike",
        create:n => [...n].map(c => c + "̶").join("")
    },

    {
        name:"Crazy Dots",
        create:n => [...n].map(c => c + "͘").join("")
    },

    {
        name:"Cursed",
        create:n => [...n].map(c => c + "̴").join("")
    },

    {
        name:"Distorted",
        create:n => [...n].map(c => c + "̷").join("")
    },

    {
        name:"Dark Glitch",
        create:n => `༒${[...n].map(c => c + "̴").join("")}༒`
    }

];


/* =========================================
   COMBINE ALL STYLES
   ========================================= */

const allStyles = [
    ...fontStyles,
    ...decoratedStyles,
    ...specialStyles
];


/* =========================================
   TEXT CONVERTER
   ========================================= */

function convertText(text, map) {

    return [...text]
        .map(character => map[character] || character)
        .join("");

}


/* =========================================
   CREATE ALL GENERATED RESULTS
   ========================================= */

function buildResults(originalName) {

    const results = [];

    allStyles.forEach(style => {

        let styledText = "";

        if (style.map) {

            styledText = convertText(
                originalName,
                style.map
            );

        } else if (style.create) {

            styledText = style.create(
                originalName
            );

        }

        if (styledText) {

            results.push({
                title: style.name,
                text: styledText
            });

        }

    });

    return results;

}


/* =========================================
   STATE
   ========================================= */

let allGeneratedResults = [];

let visibleResults = 30;

let currentSearch = "";


/* =========================================
   LOADING
   ========================================= */

function showLoading() {

    if (!loadingScreen) return;

    loadingScreen.classList.add("active");

    if (loadingText) {
        loadingText.textContent =
            "Creating your stylish names...";
    }

}


function hideLoading() {

    if (!loadingScreen) return;

    setTimeout(() => {

        loadingScreen.classList.remove("active");

    }, 150);

}


/* =========================================
   RENDER RESULTS
   ========================================= */

function renderResults() {

    if (!resultsGrid) return;

    resultsGrid.innerHTML = "";

    let filteredResults = allGeneratedResults;

    /* ---------- STYLE NAME SEARCH ---------- */

    if (currentSearch) {

        filteredResults =
            allGeneratedResults.filter(item =>
                item.title
                    .toLowerCase()
                    .includes(currentSearch.toLowerCase())
            );

    }


    /* ---------- VISIBLE LIMIT ---------- */

    const visible =
        filteredResults.slice(
            0,
            visibleResults
        );


    /* ---------- EMPTY SEARCH ---------- */

    if (
        filteredResults.length === 0
    ) {

        if (emptyState) {

            emptyState.style.display = "block";

            emptyState.innerHTML = `
                <div class="empty-icon">🔎</div>
                <h3>No style found</h3>
                <p>Try searching another style name.</p>
            `;

        }

        resultCount.textContent = "0";

        if (moreBtn) {
            moreBtn.style.display = "none";
        }

        return;

    }


    if (emptyState) {

        emptyState.style.display = "none";

    }


    /* ---------- COUNTER ---------- */

    resultCount.textContent =
        visible.length;


    /* =====================================
       CREATE CARDS
       ===================================== */

    visible.forEach((item, index) => {

        const card =
            document.createElement("article");

        card.className =
            "result-card";


        card.style.animationDelay =
            `${index * 0.025}s`;


        /* ---------- STYLE TITLE ---------- */

        const title =
            document.createElement("div");

        title.className =
            "style-title";

        title.textContent =
            item.title;


        /* ---------- RESULT NAME ---------- */

        const name =
            document.createElement("div");

        name.className =
            "result-name";

        name.textContent =
            item.text;


        /* ---------- COPY BUTTON ---------- */

        const copyButton =
            document.createElement("button");

        copyButton.className =
            "copy-btn";

        copyButton.type =
            "button";

        copyButton.textContent =
            "📋 Copy";


        copyButton.addEventListener(
            "click",
            () => {

                copyName(
                    item.text,
                    copyButton
                );

            }
        );


        /* ---------- APPEND ---------- */

        card.appendChild(title);

        card.appendChild(name);

        card.appendChild(copyButton);

        resultsGrid.appendChild(card);

    });


    /* =====================================
       MORE BUTTON
       ===================================== */

    if (moreBtn) {

        if (
            visible.length <
            filteredResults.length
        ) {

            moreBtn.style.display =
                "inline-flex";

            moreBtn.textContent =
                `✨ More Styles (${filteredResults.length - visible.length})`;

        } else {

            moreBtn.style.display =
                "none";

        }

    }

}


/* =========================================
   GENERATE NAMES
   ========================================= */

function generateNames() {

    const originalName =
        nameInput.value.trim();


    /* ---------- EMPTY INPUT ---------- */

    if (!originalName) {

        nameInput.focus();

        nameInput.style.borderColor =
            "rgba(255,80,120,0.75)";

        setTimeout(() => {

            nameInput.style.borderColor =
                "";

        }, 900);

        return;

    }


    /* ---------- RESET SEARCH ---------- */

    currentSearch = "";

    visibleResults = 30;

    if (styleSearch) {

        styleSearch.value = "";

    }


    /* ---------- SHOW LOADING ---------- */

    showLoading();


    /* =====================================
       DELAY FOR PREMIUM LOADING EFFECT
       ===================================== */

    setTimeout(() => {

        allGeneratedResults =
            buildResults(originalName);


        renderResults();


        /* ---------- SCROLL ---------- */

        setTimeout(() => {

            const section =
                document.getElementById(
                    "resultsSection"
                );

            if (section) {

                section.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

            }

        }, 100);


        hideLoading();

    }, 2300);

}


/* =========================================
   STYLE NAME SEARCH
   ========================================= */

function searchStyles() {

    if (!styleSearch) return;

    currentSearch =
        styleSearch.value.trim();

    visibleResults = 30;

    renderResults();

}


/* =========================================
   MORE BUTTON
   ========================================= */

function loadMoreStyles() {

    visibleResults += 30;

    renderResults();

}


/* =========================================
   COPY FUNCTION
   ========================================= */

async function copyName(text, button) {

    try {

        await navigator.clipboard.writeText(text);

        showCopied(button);

    } catch (error) {

        /* ---------- FALLBACK ---------- */

        const textarea =
            document.createElement("textarea");

        textarea.value = text;

        textarea.style.position =
            "fixed";

        textarea.style.opacity =
            "0";

        document.body.appendChild(
            textarea
        );

        textarea.focus();

        textarea.select();


        try {

            document.execCommand("copy");

            showCopied(button);

        } catch (copyError) {

            button.textContent =
                "❌ Failed";

        }


        document.body.removeChild(
            textarea
        );

    }

}


/* =========================================
   COPIED STATE
   ========================================= */

function showCopied(button) {

    const oldText =
        button.textContent;

    button.textContent =
        "✓ Copied";

    button.classList.add(
        "copied"
    );


    setTimeout(() => {

        button.textContent =
            oldText;

        button.classList.remove(
            "copied"
        );

    }, 1600);

}


/* =========================================
   GENERATE BUTTON
   ========================================= */

if (generateBtn) {

    generateBtn.addEventListener(
        "click",
        generateNames
    );

}


/* =========================================
   ENTER KEY
   ========================================= */

if (nameInput) {

    nameInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                generateNames();

            }

        }
    );


    /* ---------- INPUT CLEANUP ---------- */

    nameInput.addEventListener(
        "input",
        () => {

            nameInput.style.borderColor =
                "";

        }
    );

}


/* =========================================
   STYLE SEARCH EVENTS
   ========================================= */

if (styleSearch) {

    styleSearch.addEventListener(
        "input",
        searchStyles
    );


    styleSearch.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                searchStyles();

            }

        }
    );

}


/* =========================================
   MORE BUTTON EVENT
   ========================================= */

if (moreBtn) {

    moreBtn.addEventListener(
        "click",
        loadMoreStyles
    );

}


/* =========================================
   INITIAL STATE
   ========================================= */

if (resultCount) {

    resultCount.textContent =
        "30";

}


/* =========================================
   DEBUG / INFO
   ========================================= */

/*
   Total styles available:
   Font styles
   + decorated styles
   + special Unicode styles
*/

console.log(
    `Stylish Name Generator loaded with ${allStyles.length}+ styles.`
);


/* =========================================
   OPTIONAL PUBLIC FUNCTIONS
   ========================================= */

window.generateNames =
    generateNames;

window.copyName =
    copyName;

window.loadMoreStyles =
    loadMoreStyles;

window.searchStyles =
    searchStyles;


/* =========================================
   END
   ========================================= */
