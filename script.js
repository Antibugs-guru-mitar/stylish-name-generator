/* =========================================
   STYLISH NAME GENERATOR
   Professional JavaScript
   ========================================= */


/* ---------- ELEMENTS ---------- */

const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const resultsGrid = document.getElementById("resultsGrid");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");


/* ---------- STYLE MAPS ---------- */

/*
   Unicode mathematical letters.
   Characters that do not have a Unicode
   version will automatically stay normal.
*/

const styles = {

    bold: {
        name: "Bold",
        map: {
            A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄",
            F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈", J: "𝐉",
            K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍", O: "𝐎",
            P: "𝐏", Q: "𝐐", R: "𝐑", S: "𝐒", T: "𝐓",
            U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙",

            a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞",
            f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣",
            k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨",
            p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭",
            u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳",

            0: "𝟎", 1: "𝟏", 2: "𝟐", 3: "𝟑", 4: "𝟒",
            5: "𝟓", 6: "𝟔", 7: "𝟕", 8: "𝟖", 9: "𝟗"
        }
    },


    italic: {
        name: "Italic",
        map: {
            A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌",
            F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
            K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖",
            P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
            U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",

            a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦",
            f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
            k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰",
            p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
            u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
        }
    },


    boldItalic: {
        name: "Bold Italic",
        map: {
            A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬",
            F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱",
            K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶",
            P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻",
            U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁",

            a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆",
            f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋",
            k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐",
            p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕",
            u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛"
        }
    },


    double: {
        name: "Double",
        map: {
            A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼",
            F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
            K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆",
            P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
            U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",

            a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖",
            f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
            k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠",
            p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
            u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",

            0: "𝟘", 1: "𝟙", 2: "𝟚", 3: "𝟛", 4: "𝟜",
            5: "𝟝", 6: "𝟞", 7: "𝟟", 8: "𝟠", 9: "𝟡"
        }
    },


    gothic: {
        name: "Gothic",
        map: {
            A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰",
            F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
            K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺",
            P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
            U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅",

            a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊",
            f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏",
            k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔",
            p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
            u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟"
        }
    },


    sans: {
        name: "Sans",
        map: {
            A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤",
            F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨", J: "𝖩",
            K: "𝖪", L: "𝖫", M: "𝖬", N: "𝖭", O: "𝖮",
            P: "𝖯", Q: "𝖰", R: "𝖱", S: "𝖲", T: "𝖳",
            U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹",

            a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾",
            f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂", j: "𝗃",
            k: "𝗄", l: "𝗅", m: "𝗆", n: "𝗇", o: "𝗈",
            p: "𝗉", q: "𝗊", r: "𝗋", s: "𝗌", t: "𝗍",
            u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓",

            0: "𝟢", 1: "𝟣", 2: "𝟤", 3: "𝟥", 4: "𝟦",
            5: "𝟧", 6: "𝟨", 7: "𝟩", 8: "𝟪", 9: "𝟫"
        }
    },


    monospace: {
        name: "Monospace",
        map: {
            A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴",
            F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
            K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾",
            P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
            U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",

            a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎",
            f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
            k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘",
            p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
            u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",

            0: "𝟶", 1: "𝟷", 2: "𝟸", 3: "𝟹", 4: "𝟺",
            5: "𝟻", 6: "𝟼", 7: "𝟽", 8: "𝟾", 9: "𝟿"
        }
    },


    fullwidth: {
        name: "Full Width",
        map: {
            A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ",
            F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ",
            K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ",
            P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
            U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ",

            a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ",
            f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ",
            k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ",
            p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
            u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ",

            0: "０", 1: "１", 2: "２", 3: "３", 4: "４",
            5: "５", 6: "６", 7: "７", 8: "８", 9: "９"
        }
    },


    smallCaps: {
        name: "Small Caps",
        map: {
            a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ",
            f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
            k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ",
            p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ",
            u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",

            A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ",
            F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
            K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ",
            P: "ᴘ", Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ",
            U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
        }
    }

};


/* ---------- EXTRA STYLES ---------- */

/*
   These decorations work with almost every
   English name because they simply surround it.
*/

const decoratedStyles = [
    {
        name: "Royal",
        create: name => `꧁༺ ${name} ༻꧂`
    },

    {
        name: "Crown",
        create: name => `♛ ${name} ♛`
    },

    {
        name: "Stars",
        create: name => `★彡 ${name} 彡★`
    },

    {
        name: "Wings",
        create: name => `乂 ${name} 乂`
    },

    {
        name: "Diamond",
        create: name => `『 ${name} 』`
    },

    {
        name: "Warrior",
        create: name => `⚔️ ${name} ⚔️`
    },

    {
        name: "Fire",
        create: name => `꧁🔥 ${name} 🔥꧂`
    },

    {
        name: "Shadow",
        create: name => `☾ ${name} ☽`
    },

    {
        name: "Elite",
        create: name => `亗 ${name} 亗`
    },

    {
        name: "Heart",
        create: name => `♡ ${name} ♡`
    },

    {
        name: "Arrow",
        create: name => `➳ ${name} ➳`
    },

    {
        name: "Mystic",
        create: name => `༒ ${name} ༒`
    }

];


/* ---------- CONVERT FUNCTION ---------- */

function convertText(text, map) {

    return [...text]
        .map(character => {
            return map[character] || character;
        })
        .join("");

}


/* ---------- GENERATE RESULTS ---------- */

function generateNames() {

    const originalName = nameInput.value.trim();

    /* Empty input protection */

    if (!originalName) {

        nameInput.focus();

        nameInput.style.borderColor = "rgba(255, 80, 120, 0.75)";

        setTimeout(() => {
            nameInput.style.borderColor = "";
        }, 900);

        return;
    }


    /* Remove empty state */

    if (emptyState) {
        emptyState.style.display = "none";
    }


    /* Clear old results */

    resultsGrid.innerHTML = "";


    const generated = [];


    /* ---------- FONT STYLES ---------- */

    Object.values(styles).forEach(style => {

        generated.push({
            title: style.name,
            text: convertText(originalName, style.map)
        });

    });


    /* ---------- DECORATED STYLES ---------- */

    decoratedStyles.forEach(style => {

        generated.push({
            title: style.name,
            text: style.create(originalName)
        });

    });


    /* ---------- LIMIT TO 20 ---------- */

    const finalResults = generated.slice(0, 20);


    /* Update counter */

    resultCount.textContent = finalResults.length;


    /* ---------- CREATE CARDS ---------- */

    finalResults.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "result-card";

        card.style.animationDelay = `${index * 0.035}s`;


        const name = document.createElement("div");

        name.className = "result-name";

        name.textContent = item.text;


        const copyButton = document.createElement("button");

        copyButton.className = "copy-btn";

        copyButton.type = "button";

        copyButton.textContent = "📋 Copy";


        copyButton.addEventListener("click", () => {

            copyName(item.text, copyButton);

        });


        card.appendChild(name);

        card.appendChild(copyButton);

        resultsGrid.appendChild(card);

    });


    /* Scroll smoothly toward results */

    setTimeout(() => {

        document.getElementById("resultsSection")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }, 100);

}


/* ---------- COPY FUNCTION ---------- */

async function copyName(text, button) {

    try {

        await navigator.clipboard.writeText(text);

        showCopied(button);

    } catch (error) {

        /* Fallback for older browsers */

        const textarea = document.createElement("textarea");

        textarea.value = text;

        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        try {
            document.execCommand("copy");
            showCopied(button);
        } catch (copyError) {
            button.textContent = "❌ Failed";
        }

        document.body.removeChild(textarea);
    }

}


/* ---------- COPIED STATE ---------- */

function showCopied(button) {

    const oldText = button.textContent;

    button.textContent = "✓ Copied";

    button.classList.add("copied");

    setTimeout(() => {

        button.textContent = oldText;

        button.classList.remove("copied");

    }, 1600);

}


/* ---------- GENERATE BUTTON ---------- */

generateBtn.addEventListener("click", generateNames);


/* ---------- ENTER KEY ---------- */

nameInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        event.preventDefault();

        generateNames();

    }

});


/* ---------- INPUT CLEANUP ---------- */

nameInput.addEventListener("input", () => {

    /*
       Remove the red error border as soon
       as the user starts typing again.
    */

    nameInput.style.borderColor = "";

});


/* ---------- INITIAL STATE ---------- */

resultCount.textContent = "20";


/* =========================================
   OPTIONAL DEMO
   ========================================= */

/*
   We intentionally do NOT generate a name
   automatically when the page opens.

   The user should enter their own name.
*/
