/* =========================================
   STYLISH NAME GENERATOR
   PHASE TWO — FINAL PROFESSIONAL JAVASCRIPT
   ========================================= */


/* =====================================================
   ELEMENTS
   ===================================================== */

const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");

const resultsGrid = document.getElementById("resultsGrid");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");

const resultsSection = document.getElementById("resultsSection");
const resultsLoading = document.getElementById("resultsLoading");

const styleSearch =
    document.getElementById("styleSearch") ||
    document.getElementById("styleNameSearch");

const clearSearchBtn =
    document.getElementById("clearSearchBtn");

const searchLoading =
    document.getElementById("searchLoading");

const styleSearchResults =
    document.getElementById("styleSearchResults");

const noSearchResults =
    document.getElementById("noSearchResults");

const moreBtn =
    document.getElementById("moreBtn") ||
    document.getElementById("loadMoreBtn");

const loadingScreen =
    document.getElementById("loadingScreen") ||
    document.getElementById("loadingOverlay");

const loadingText =
    document.getElementById("loadingText");

const activeFilter =
    document.getElementById("activeFilter");

const activeFilterName =
    document.getElementById("activeFilterName");

const resetFilterBtn =
    document.getElementById("resetFilterBtn");

const categoryTabs =
    document.querySelectorAll(".category-tab");


/* =====================================================
   BASIC UNICODE MAPS
   ===================================================== */


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


/* ---------- DOUBLE STRUCK ---------- */

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


/* ---------- SANS SERIF ---------- */

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


/* =====================================================
   FONT STYLES
   ===================================================== */

const fontStyles = [

    { name:"Bold", map:boldMap, category:"fancy" },

    { name:"Italic", map:italicMap, category:"fancy" },

    { name:"Bold Italic", map:boldItalicMap, category:"fancy" },

    { name:"Double Struck", map:doubleMap, category:"unicode" },

    { name:"Gothic", map:gothicMap, category:"dark" },

    { name:"Sans Serif", map:sansMap, category:"fancy" },

    { name:"Monospace", map:monoMap, category:"gaming" },

    { name:"Full Width", map:fullwidthMap, category:"fancy" },

    { name:"Small Caps", map:smallCapsMap, category:"fancy" }

];


/* =====================================================
   DECORATED / GAMING / PREMIUM STYLES
   ===================================================== */

const decoratedStyles = [

    { name:"Royal Crown", create:n=>`꧁༺ ${n} ༻꧂`, category:"royal" },

    { name:"King", create:n=>`♛ ${n} ♛`, category:"royal" },

    { name:"Queen", create:n=>`♕ ${n} ♕`, category:"royal" },

    { name:"Star Warrior", create:n=>`★彡 ${n} 彡★`, category:"warrior" },

    { name:"Shadow Wings", create:n=>`乂 ${n} 乂`, category:"dark" },

    { name:"Diamond Frame", create:n=>`『 ${n} 』`, category:"fancy" },

    { name:"Warrior", create:n=>`⚔️ ${n} ⚔️`, category:"warrior" },

    { name:"Fire", create:n=>`꧁🔥 ${n} 🔥꧂`, category:"fire" },

    { name:"Dark Shadow", create:n=>`☾ ${n} ☽`, category:"dark" },

    { name:"Elite", create:n=>`亗 ${n} 亗`, category:"gaming" },

    { name:"Heart", create:n=>`♡ ${n} ♡`, category:"love" },

    { name:"Arrow", create:n=>`➳ ${n} ➳`, category:"fancy" },

    { name:"Mystic", create:n=>`༒ ${n} ༒`, category:"mystic" },

    { name:"Dragon", create:n=>`𒆜 ${n} 𒆜`, category:"warrior" },

    { name:"Dark King", create:n=>`♚ 『${n}』 ♚`, category:"royal" },

    { name:"Golden", create:n=>`✦ ${n} ✦`, category:"royal" },

    { name:"Night", create:n=>`☽ ${n} ☾`, category:"dark" },

    { name:"Lightning", create:n=>`ϟ ${n} ϟ`, category:"fire" },

    { name:"Danger", create:n=>`☠ ${n} ☠`, category:"dark" },

    { name:"Skull", create:n=>`☠︎︎ ${n} ☠︎︎`, category:"dark" },

    { name:"Devil", create:n=>`😈 ${n} 😈`, category:"dark" },

    { name:"Angel", create:n=>`☁️ ${n} ☁️`, category:"love" },

    { name:"Love", create:n=>`♥ ${n} ♥`, category:"love" },

    { name:"Broken Heart", create:n=>`💔 ${n} 💔`, category:"love" },

    { name:"Spark", create:n=>`✧･ﾟ ${n} ﾟ･✧`, category:"fancy" },

    { name:"Galaxy", create:n=>`✦⋆｡ﾟ ${n} ﾟ｡⋆✦`, category:"mystic" },

    { name:"Cosmic", create:n=>`⋆｡°✩ ${n} ✩°｡⋆`, category:"mystic" },

    { name:"Ocean", create:n=>`≋≋ ${n} ≋≋`, category:"fancy" },

    { name:"Wave", create:n=>`〰 ${n} 〰`, category:"fancy" },

    { name:"Storm", create:n=>`⚡ ${n} ⚡`, category:"fire" },

    { name:"Sword", create:n=>`⚔ ${n} ⚔`, category:"warrior" },

    { name:"Cross", create:n=>`✞ ${n} ✞`, category:"mystic" },

    { name:"Sacred", create:n=>`☬ ${n} ☬`, category:"mystic" },

    { name:"Royal Diamond", create:n=>`♢ ${n} ♢`, category:"royal" },

    { name:"Circle", create:n=>`◉ ${n} ◉`, category:"fancy" },

    { name:"Target", create:n=>`◎ ${n} ◎`, category:"gaming" },

    { name:"Minimal", create:n=>`• ${n} •`, category:"fancy" },

    { name:"Line", create:n=>`─ ${n} ─`, category:"fancy" },

    { name:"Double Line", create:n=>`═ ${n} ═`, category:"fancy" },

    { name:"Brackets", create:n=>`【${n}】`, category:"fancy" },

    { name:"Japanese Frame", create:n=>`『${n}』`, category:"fancy" },

    { name:"Black Box", create:n=>`【★${n}★】`, category:"dark" },

    { name:"Arrow King", create:n=>`➶ ${n} ➷`, category:"royal" },

    { name:"Royal Arrow", create:n=>`༺➳ ${n} ➳༻`, category:"royal" },

    { name:"Fire King", create:n=>`♛🔥 ${n} 🔥♛`, category:"fire" },

    { name:"Dark Fire", create:n=>`☠︎ ${n} ☠︎`, category:"dark" },

    { name:"Red Zone", create:n=>`『亗 ${n} 亗』`, category:"gaming" },

    { name:"Pro Gamer", create:n=>`亗『${n}』亗`, category:"gaming" },

    { name:"Game Master", create:n=>`乂⚔ ${n} ⚔乂`, category:"gaming" },

    { name:"Legend", create:n=>`꧁༒ ${n} ༒꧂`, category:"royal" },

    { name:"Immortal", create:n=>`꧁☬ ${n} ☬꧂`, category:"mystic" },

    { name:"God Mode", create:n=>`『♛』${n}『♛』`, category:"gaming" },

    { name:"Boss", create:n=>`♚ ${n} ♚`, category:"royal" },

    { name:"Kingdom", create:n=>`♔━━ ${n} ━━♔`, category:"royal" },

    { name:"Emperor", create:n=>`♛━━ ${n} ━━♛`, category:"royal" },

    { name:"Champion", create:n=>`🏆 ${n} 🏆`, category:"gaming" },

    { name:"Winner", create:n=>`🏆『${n}』🏆`, category:"gaming" },

    { name:"VIP", create:n=>`♛VIP ${n} VIP♛`, category:"royal" },

    { name:"Premium", create:n=>`✦『${n}』✦`, category:"fancy" },

    { name:"Luxury", create:n=>`༺✦ ${n} ✦༻`, category:"royal" },

    { name:"Diamond King", create:n=>`♦ ${n} ♦`, category:"royal" },

    { name:"Dark Diamond", create:n=>`◆ ${n} ◆`, category:"dark" },

    { name:"Black Star", create:n=>`★ ${n} ★`, category:"dark" },

    { name:"White Star", create:n=>`☆ ${n} ☆`, category:"fancy" },

    { name:"Four Stars", create:n=>`✦✧ ${n} ✧✦`, category:"fancy" },

    { name:"Mystic Star", create:n=>`★༒ ${n} ༒★`, category:"mystic" },

    { name:"Moon King", create:n=>`☾♛ ${n} ♛☽`, category:"royal" },

    { name:"Moon Light", create:n=>`☾⋆ ${n} ⋆☽`, category:"mystic" },

    { name:"Night King", create:n=>`☽亗 ${n} 亗☾`, category:"dark" },

    { name:"Ghost", create:n=>`𓆩 ${n} 𓆪`, category:"dark" },

    { name:"Phantom", create:n=>`𓆩༒${n}༒𓆪`, category:"dark" },

    { name:"Demon", create:n=>`𒁍 ${n} 𒁍`, category:"dark" },

    { name:"Dark Lord", create:n=>`༒☬ ${n} ☬༒`, category:"dark" },

    { name:"Hell", create:n=>`⛧ ${n} ⛧`, category:"dark" },

    { name:"Venom", create:n=>`☣ ${n} ☣`, category:"dark" },

    { name:"Poison", create:n=>`☠︎☣ ${n} ☣☠︎`, category:"dark" },

    { name:"Hunter", create:n=>`亗⚔ ${n} ⚔亗`, category:"warrior" },

    { name:"Sniper", create:n=>`⌁〘 ${n} 〙⌁`, category:"gaming" },

    { name:"Assassin", create:n=>`乂☠ ${n} ☠乂`, category:"warrior" },

    { name:"Ninja", create:n=>`々 ${n} 々`, category:"warrior" },

    { name:"Samurai", create:n=>`彡 ${n} 彡`, category:"warrior" },

    { name:"War Lord", create:n=>`⚔༒ ${n} ༒⚔`, category:"warrior" },

    { name:"Battle", create:n=>`⚔︎『${n}』⚔︎`, category:"warrior" },

    { name:"Power", create:n=>`ϟ『${n}』ϟ`, category:"gaming" },

    { name:"Energy", create:n=>`⚡『${n}』⚡`, category:"fire" },

    { name:"Electric", create:n=>`ϟ⚡ ${n} ⚡ϟ`, category:"fire" },

    { name:"Blaze", create:n=>`🔥『${n}』🔥`, category:"fire" },

    { name:"Inferno", create:n=>`༒🔥 ${n} 🔥༒`, category:"fire" },

    { name:"Ice", create:n=>`❄ ${n} ❄`, category:"mystic" },

    { name:"Frozen", create:n=>`❄️『${n}』❄️`, category:"mystic" },

    { name:"Snow", create:n=>`☃ ${n} ☃`, category:"mystic" },

    { name:"Nature", create:n=>`༄ ${n} ༄`, category:"mystic" },

    { name:"Leaf", create:n=>`❧ ${n} ❧`, category:"love" },

    { name:"Flower", create:n=>`❀ ${n} ❀`, category:"love" },

    { name:"Butterfly", create:n=>`🦋 ${n} 🦋`, category:"love" },

    { name:"Rose", create:n=>`🌹 ${n} 🌹`, category:"love" },

    { name:"Cute", create:n=>`♡₊˚ ${n} ˚₊♡`, category:"love" },

    { name:"Sweet", create:n=>`꒰ ${n} ꒱`, category:"love" },

    { name:"Soft", create:n=>`୨୧ ${n} ୨୧`, category:"love" },

    { name:"Aesthetic", create:n=>`⋆｡ﾟ✶ ${n} ✶ﾟ｡⋆`, category:"fancy" },

    { name:"Dream", create:n=>`☁︎⋆ ${n} ⋆☁︎`, category:"mystic" },

    { name:"Magic", create:n=>`✧༺ ${n} ༻✧`, category:"mystic" },

    { name:"Fantasy", create:n=>`꧁✧ ${n} ✧꧂`, category:"mystic" },

    { name:"Mystery", create:n=>`༒『${n}』༒`, category:"mystic" },

    { name:"Secret", create:n=>`⌁ ${n} ⌁`, category:"dark" },

    { name:"Hidden", create:n=>`◈ ${n} ◈`, category:"dark" },

    { name:"Elite Shadow", create:n=>`☾亗 ${n} 亗☽`, category:"dark" },

    { name:"Dark Elite", create:n=>`亗☠ ${n} ☠亗`, category:"dark" },

    { name:"Royal Shadow", create:n=>`♛☾ ${n} ☽♛`, category:"royal" },

    { name:"Ultimate", create:n=>`꧁༺⚡ ${n} ⚡༻꧂`, category:"gaming" },

    { name:"Ultimate King", create:n=>`꧁♛ ${n} ♛꧂`, category:"royal" },

    { name:"Ultimate Warrior", create:n=>`꧁⚔ ${n} ⚔꧂`, category:"warrior" },

    { name:"Ultimate Fire", create:n=>`꧁🔥⚔ ${n} ⚔🔥꧂`, category:"fire" }

];


/* =====================================================
   SPECIAL UNICODE / COMBINING STYLES
   ===================================================== */

const specialStyles = [

    {
        name:"Evil Mark",
        create:n => `𝅥⃝${convertText(n,boldMap)}͜͡`,
        category:"unicode"
    },

    {
        name:"Evil Crown",
        create:n => `𝅥⃝${convertText(n,boldMap)}͜͡亗`,
        category:"unicode"
    },

    {
        name:"Crazy Glitch",
        create:n => `̷${n}̷`,
        category:"unicode"
    },

    {
        name:"Glitch Shadow",
        create:n => `̸${n}̸`,
        category:"unicode"
    },

    {
        name:"Overline",
        create:n => [...n].map(c=>c+"̅").join(""),
        category:"unicode"
    },

    {
        name:"Underline",
        create:n => [...n].map(c=>c+"̲").join(""),
        category:"unicode"
    },

    {
        name:"Double Underline",
        create:n => [...n].map(c=>c+"̳").join(""),
        category:"unicode"
    },

    {
        name:"Strike",
        create:n => [...n].map(c=>c+"̶").join(""),
        category:"unicode"
    },

    {
        name:"Crazy Dots",
        create:n => [...n].map(c=>c+"͘").join(""),
        category:"unicode"
    },

    {
        name:"Cursed",
        create:n => [...n].map(c=>c+"̴").join(""),
        category:"unicode"
    },

    {
        name:"Distorted",
        create:n => [...n].map(c=>c+"̷").join(""),
        category:"unicode"
    },

    {
        name:"Dark Glitch",
        create:n => `༒${[...n].map(c=>c+"̴").join("")}༒`,
        category:"unicode"
    }

];


/* =====================================================
   ALL STYLES
   ===================================================== */

const allStyles = [
    ...fontStyles,
    ...decoratedStyles,
    ...specialStyles
];


/* =====================================================
   TEXT CONVERTER
   ===================================================== */

function convertText(text,map) {

    return [...text]
        .map(character => map[character] || character)
        .join("");

}


/* =====================================================
   BUILD RESULTS
   ===================================================== */

function buildResults(originalName) {

    const results = [];

    allStyles.forEach(style => {

        let styledText = "";

        if (style.map) {

            styledText =
                convertText(
                    originalName,
                    style.map
                );

        } else if (style.create) {

            styledText =
                style.create(originalName);

        }

        if (styledText) {

            results.push({
                title:style.name,
                text:styledText,
                category:style.category || "fancy"
            });

        }

    });

    return results;

}


/* =====================================================
   STATE
   ===================================================== */

let allGeneratedResults = [];

let visibleResults = 30;

let currentSearch = "";

let currentCategory = "all";

let searchTimer = null;

let generationRunning = false;


/* =====================================================
   FULL SCREEN LOADING
   ===================================================== */

function showLoading(message="Creating your stylish names...") {

    if (!loadingScreen) return;

    loadingScreen.classList.add("active");

    loadingScreen.setAttribute(
        "aria-hidden",
        "false"
    );

    if (loadingText) {
        loadingText.textContent = message;
    }

}


function hideLoading() {

    if (!loadingScreen) return;

    setTimeout(() => {

        loadingScreen.classList.remove("active");

        loadingScreen.setAttribute(
            "aria-hidden",
            "true"
        );

    },150);

}


/* =====================================================
   RESULTS LOADING
   ===================================================== */

function showResultsLoading() {

    if (!resultsLoading) return;

    resultsLoading.style.display = "flex";

}


function hideResultsLoading() {

    if (!resultsLoading) return;

    resultsLoading.style.display = "none";

}


/* =====================================================
   GET FILTERED RESULTS
   ===================================================== */

function getFilteredResults() {

    let filtered =
        [...allGeneratedResults];


    /* ---------- CATEGORY ---------- */

    if (currentCategory !== "all") {

        filtered =
            filtered.filter(
                item =>
                    item.category === currentCategory
            );

    }


    /* ---------- STYLE SEARCH ---------- */

    if (currentSearch) {

        const search =
            currentSearch.toLowerCase();

        filtered =
            filtered.filter(item =>
                item.title
                    .toLowerCase()
                    .includes(search)
            );

    }


    return filtered;

}


/* =====================================================
   RENDER RESULTS
   ===================================================== */

function renderResults() {

    if (!resultsGrid) return;

    resultsGrid.innerHTML = "";

    const filteredResults =
        getFilteredResults();


    /* ---------- EMPTY ---------- */

    if (filteredResults.length === 0) {

        if (emptyState) {

            emptyState.style.display = "block";

            emptyState.innerHTML = `
                <div class="empty-icon">🔎</div>
                <h3>No styles found</h3>
                <p>Try another style name or category.</p>
            `;

        }

        if (resultCount) {
            resultCount.textContent = "0";
        }

        if (moreBtn) {
            moreBtn.style.display = "none";
        }

        return;

    }


    /* ---------- HIDE EMPTY ---------- */

    if (emptyState) {
        emptyState.style.display = "none";
    }


    /* ---------- VISIBLE RESULTS ---------- */

    const visible =
        filteredResults.slice(
            0,
            visibleResults
        );


    if (resultCount) {

        resultCount.textContent =
            visible.length;

    }


    /* =================================================
       CREATE CARDS
       ================================================= */

    visible.forEach((item,index) => {

        const card =
            document.createElement("article");

        card.className =
            "result-card";

        card.style.animationDelay =
            `${index * 0.025}s`;


        /* ---------- TITLE ---------- */

        const title =
            document.createElement("div");

        title.className =
            "style-title";

        title.textContent =
            item.title;


        /* ---------- NAME ---------- */

        const name =
            document.createElement("div");

        name.className =
            "result-name";

        name.textContent =
            item.text;


        /* ---------- COPY ---------- */

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


        /* ---------- CARD ---------- */

        card.appendChild(title);

        card.appendChild(name);

        card.appendChild(copyButton);

        resultsGrid.appendChild(card);

    });


    /* =================================================
       MORE BUTTON
       ================================================= */

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


/* =====================================================
   GENERATE NAMES
   ===================================================== */

function generateNames() {

    if (generationRunning) return;

    if (!nameInput) return;

    const originalName =
        nameInput.value.trim();


    /* ---------- EMPTY INPUT ---------- */

    if (!originalName) {

        nameInput.focus();

        nameInput.style.borderColor =
            "rgba(255,80,120,0.75)";

        setTimeout(() => {

            nameInput.style.borderColor = "";

        },900);

        return;

    }


    generationRunning = true;

    currentSearch = "";

    currentCategory = "all";

    visibleResults = 30;


    /* ---------- RESET SEARCH ---------- */

    if (styleSearch) {
        styleSearch.value = "";
    }

    updateClearButton();

    resetCategoryTabs();


    /* ---------- LOADING ---------- */

    showLoading(
        "Exploring premium name designs..."
    );


    /* =================================================
       PREMIUM 2.3 SECOND GENERATION
       ================================================= */

    setTimeout(() => {

        allGeneratedResults =
            buildResults(originalName);


        renderResults();


        if (resultCount) {

            resultCount.textContent =
                Math.min(
                    30,
                    allGeneratedResults.length
                );

        }


        /* ---------- SCROLL ---------- */

        setTimeout(() => {

            if (resultsSection) {

                resultsSection.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

            }

        },100);


        hideLoading();

        generationRunning = false;

    },2300);

}


/* =====================================================
   STYLE SEARCH
   ===================================================== */

function searchStyles() {

    if (!styleSearch) return;

    currentSearch =
        styleSearch.value.trim();

    visibleResults = 30;

    updateClearButton();


    /* ---------- NO GENERATED NAME YET ---------- */

    if (
        allGeneratedResults.length === 0
    ) {

        showStyleSearchPreview();

        return;

    }


    /* ---------- SEARCH LOADING ---------- */

    if (searchTimer) {
        clearTimeout(searchTimer);
    }

    if (searchLoading) {
        searchLoading.style.display = "flex";
    }


    searchTimer =
        setTimeout(() => {

            renderResults();

            if (searchLoading) {
                searchLoading.style.display =
                    "none";
            }

        },700);

}


/* =====================================================
   STYLE SEARCH PREVIEW
   ===================================================== */

function showStyleSearchPreview() {

    if (!styleSearchResults) return;

    const query =
        currentSearch.toLowerCase();


    styleSearchResults.innerHTML = "";


    if (!query) {

        styleSearchResults.style.display =
            "none";

        if (noSearchResults) {
            noSearchResults.style.display =
                "none";
        }

        return;

    }


    const matches =
        allStyles
            .filter(style =>
                style.name
                    .toLowerCase()
                    .includes(query)
            )
            .slice(0,12);


    if (matches.length === 0) {

        styleSearchResults.style.display =
            "none";

        if (noSearchResults) {
            noSearchResults.style.display =
                "block";
        }

        return;

    }


    if (noSearchResults) {
        noSearchResults.style.display =
            "none";
    }


    matches.forEach(style => {

        const item =
            document.createElement("button");

        item.type = "button";

        item.className =
            "style-search-result";

        item.textContent =
            style.name;

        item.addEventListener(
            "click",
            () => {

                styleSearch.value =
                    style.name;

                currentSearch =
                    style.name;

                updateClearButton();

                if (
                    allGeneratedResults.length
                ) {

                    renderResults();

                }

                if (styleSearchResults) {
                    styleSearchResults.style.display =
                        "none";
                }

            }
        );

        styleSearchResults.appendChild(item);

    });


    styleSearchResults.style.display =
        "block";

}


/* =====================================================
   CLEAR SEARCH
   ===================================================== */

function clearStyleSearch() {

    if (!styleSearch) return;

    styleSearch.value = "";

    currentSearch = "";

    visibleResults = 30;

    updateClearButton();


    if (searchLoading) {
        searchLoading.style.display =
            "none";
    }


    if (styleSearchResults) {
        styleSearchResults.style.display =
            "none";
    }


    if (noSearchResults) {
        noSearchResults.style.display =
            "none";
    }


    renderResults();

    styleSearch.focus();

}


function updateClearButton() {

    if (!clearSearchBtn) return;

    if (
        styleSearch &&
        styleSearch.value.trim()
    ) {

        clearSearchBtn.classList.add(
            "visible"
        );

    } else {

        clearSearchBtn.classList.remove(
            "visible"
        );

    }

}


/* =====================================================
   CATEGORY FILTER
   ===================================================== */

function filterByCategory(category) {

    currentCategory =
        category || "all";

    visibleResults = 30;


    /* ---------- ACTIVE TAB ---------- */

    categoryTabs.forEach(tab => {

        tab.classList.toggle(
            "active",
            tab.dataset.category ===
            currentCategory
        );

    });


    /* ---------- FILTER LABEL ---------- */

    const activeTab =
        [...categoryTabs].find(
            tab =>
                tab.dataset.category ===
                currentCategory
        );


    if (
        activeFilter &&
        activeFilterName
    ) {

        if (
            currentCategory !== "all"
        ) {

            activeFilter.style.display =
                "inline-flex";

            activeFilterName.textContent =
                activeTab
                    ? activeTab.textContent.trim()
                    : currentCategory;

        } else {

            activeFilter.style.display =
                "none";

        }

    }


    renderResults();


    /* ---------- SCROLL ---------- */

    if (
        currentCategory !== "all" &&
        resultsSection &&
        allGeneratedResults.length
    ) {

        setTimeout(() => {

            resultsSection.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        },80);

    }

}


/* =====================================================
   RESET CATEGORY
   ===================================================== */

function resetCategoryTabs() {

    currentCategory =
        "all";

    categoryTabs.forEach(tab => {

        tab.classList.toggle(
            "active",
            tab.dataset.category === "all"
        );

    });


    if (activeFilter) {
        activeFilter.style.display =
            "none";
    }

}


/* =====================================================
   RESET FILTER BUTTON
   ===================================================== */

function resetFilters() {

    currentCategory =
        "all";

    currentSearch =
        "";

    visibleResults =
        30;


    if (styleSearch) {
        styleSearch.value = "";
    }


    updateClearButton();


    if (styleSearchResults) {
        styleSearchResults.style.display =
            "none";
    }


    if (noSearchResults) {
        noSearchResults.style.display =
            "none";
    }


    resetCategoryTabs();

    renderResults();

}


/* =====================================================
   MORE STYLES
   ===================================================== */

function loadMoreStyles() {

    const filteredResults =
        getFilteredResults();


    if (
        visibleResults >=
        filteredResults.length
    ) {

        return;

    }


    visibleResults += 30;

    renderResults();

}


/* =====================================================
   COPY NAME
   ===================================================== */

async function copyName(text,button) {

    if (!button) return;

    try {

        if (
            navigator.clipboard &&
            window.isSecureContext
        ) {

            await navigator.clipboard.writeText(
                text
            );

        } else {

            throw new Error(
                "Clipboard API unavailable"
            );

        }

        showCopied(button);

    } catch (error) {

        const textarea =
            document.createElement("textarea");

        textarea.value =
            text;

        textarea.style.position =
            "fixed";

        textarea.style.left =
            "-9999px";

        textarea.style.top =
            "0";

        textarea.style.opacity =
            "0";

        document.body.appendChild(
            textarea
        );

        textarea.focus();

        textarea.select();


        try {

            const successful =
                document.execCommand("copy");

            if (successful) {

                showCopied(button);

            } else {

                button.textContent =
                    "❌ Failed";

            }

        } catch (copyError) {

            button.textContent =
                "❌ Failed";

        }


        document.body.removeChild(
            textarea
        );

    }

}


/* =====================================================
   COPIED STATE
   ===================================================== */

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

    },1600);

}


/* =====================================================
   GENERATE BUTTON
   ===================================================== */

if (generateBtn) {

    generateBtn.addEventListener(
        "click",
        generateNames
    );

}


/* =====================================================
   ENTER KEY
   ===================================================== */

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


    nameInput.addEventListener(
        "input",
        () => {

            nameInput.style.borderColor =
                "";

        }
    );

}


/* =====================================================
   STYLE SEARCH EVENTS
   ===================================================== */

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


/* =====================================================
   CLEAR SEARCH EVENT
   ===================================================== */

if (clearSearchBtn) {

    clearSearchBtn.addEventListener(
        "click",
        clearStyleSearch
    );

}


/* =====================================================
   MORE BUTTON
   ===================================================== */

if (moreBtn) {

    moreBtn.addEventListener(
        "click",
        loadMoreStyles
    );

}


/* =====================================================
   CATEGORY BUTTONS
   ===================================================== */

categoryTabs.forEach(tab => {

    tab.addEventListener(
        "click",
        () => {

            const category =
                tab.dataset.category || "all";

            filterByCategory(category);

        }
    );

});


/* =====================================================
   RESET FILTER
   ===================================================== */

if (resetFilterBtn) {

    resetFilterBtn.addEventListener(
        "click",
        resetFilters
    );

}


/* =====================================================
   CLICK OUTSIDE SEARCH RESULTS
   ===================================================== */

document.addEventListener(
    "click",
    event => {

        if (
            !styleSearchResults ||
            !styleSearch
        ) return;


        const searchContainer =
            styleSearch.closest(
                ".search-input-wrap"
            );


        if (
            searchContainer &&
            !searchContainer.contains(event.target)
        ) {

            styleSearchResults.style.display =
                "none";

        }

    }
);


/* =====================================================
   ESCAPE KEY
   ===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            if (
                styleSearchResults
            ) {

                styleSearchResults.style.display =
                    "none";

            }

        }

    }
);


/* =====================================================
   INITIAL STATE
   ===================================================== */

if (resultCount) {

    resultCount.textContent =
        "0";

}


if (moreBtn) {

    moreBtn.style.display =
        "none";

}


if (activeFilter) {

    activeFilter.style.display =
        "none";

}


if (searchLoading) {

    searchLoading.style.display =
        "none";

}


if (noSearchResults) {

    noSearchResults.style.display =
        "none";

}


if (styleSearchResults) {

    styleSearchResults.style.display =
        "none";

}


hideResultsLoading();


/* =====================================================
   PUBLIC FUNCTIONS
   ===================================================== */

window.generateNames =
    generateNames;

window.copyName =
    copyName;

window.loadMoreStyles =
    loadMoreStyles;

window.searchStyles =
    searchStyles;

window.clearStyleSearch =
    clearStyleSearch;

window.filterByCategory =
    filterByCategory;

window.resetFilters =
    resetFilters;


/* =====================================================
   PROJECT INFORMATION
   ===================================================== */

console.log(
    `✨ Stylish Name Generator`
);

console.log(
    `🚀 ${allStyles.length} total styles loaded`
);

console.log(
    `🎨 Categories: Gaming, Royal, Dark, Warrior, Fire, Fancy, Unicode, Love, Mystic`
);

console.log(
    `⚡ Phase Two system ready`
);


/* =====================================================
   END
   ===================================================== */
