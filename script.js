const backgroundWords = [
    "chaotic", "everchanging", "all over the place", "online", // 4
    "a few freaks", "three fans of 90s Japanese movies", "a passion project", // 7
    "experimental", "just average people with unaverage music taste", "NOT for the weak", // 10
    "not something you should suggest to friends without a fair warning", "weird", //12
    "definitely some band", "visceral", "Y2K horror", "B-horror", "maybe a little bit unconventional", // 17
    "in fact not one girl", "hard to describe if you haven't listened to it" // 19
];

const keywords = {
    "Matthew \"Matt\" Stephenson": [
        "Joined: 2012 (Founder)",
        "Role: Producer, Lead Vocalist, Main Songwriter, Madlad #1",
        "Background: Matt started Machine Girl as a solo electronic bedroom project on Long Island, New York. Originally operating as an instrumental electronic act heavily rooted in breakcore, footwork, and rave genres, he slowly transitioned the project into a \"fucked - up electronic punk\" vehicle. In recent eras like MG Ultra and PsychoWarrior, Stephenson has pushed his raw, shouted vocals and analytical, anti-algorithmic themes directly to the forefront of the music."
    ],
    "Sean Kelly": [
        "Joined: 2015",
        "Role: Live Drummer, Percussionist, Madlad #2",
        "Background: Also a Long Island native like Matt Stephenson, Sean Kelly joined the project in 2015, transforming Machine Girl from a traditional DJ laptop set into an explosive live band. He layers chaotic, breakneck acoustic and electronic drum kit beats over Stephenson's rapid productions. His inclusion defined the heavy, physical metal and grindcore-infused crossover energy that has made their mosh pits completely bonkers."
    ],
    "Lucy Caputi": [
        "Joined: 2024",
        "Role: Live Guitarist, Vocalist, Madlad #3",
        "Background: Lucy officially joined Machine Girl in 2024, completing the band's evolution into a three-piece touring trio. Her distortion-heavy guitar riffs fortify the \"punk exoskeleton\" of the band's electronic alchemy. Beyond playing guitar, she expanded her role to include lead vocals on tracks like \"Ignore the Vore\" for the band's 2025 PsychoWarrior record."
    ],
    "in Neon White": [
        "The Neon White OST (2022)",
        "The Project: Machine Girl composed the complete, multi-hour original soundtrack for Neon White, a fast-paced, first-person speedrunning and action-platformer game.",
        "The Sonic Style: Shifting away from their usual abrasive punk vocals, the band used the game as a love letter to Y2K-era electronic music. It heavily features atmospheric liquid drum 'n bass, frantic breakcore, jungle, and nostalgic PlayStation-1-inspired rave textures."]
};

const wordPositions = [
    [18, 18], [43, 14], [74, 18], [86, 35],
    [18, 38], [43, 24], [25, 30], [17, 68],
    [20, 52], [53, 48], [55, 62], [86, 68],
    [18, 80], [40, 72], [70, 80], [80, 88],
    [82, 49], [72, 30], [50, 38], [29, 91],
    [73, 73], [61, 91], [49, 80]
];

const wordColors = ["#40442c", "#585F36", "#697a0f"];
const wordCloud = document.querySelector(".word-cloud");

if (wordCloud) {
    const wordInfo = document.createElement("div");
    wordInfo.className = "word-info";
    wordInfo.setAttribute("aria-live", "polite");
    wordCloud.appendChild(wordInfo);

    function addWord(word, index, paragraphs) {
        const keyword = Boolean(paragraphs);
        const wordElement = document.createElement(keyword ? "button" : "span");
        const position = wordPositions[index];

        wordElement.className = keyword ? "cloud-word keyword keyword-glow" : "cloud-word";
        wordElement.textContent = word;
        wordElement.style.left = position[0] + "%";
        wordElement.style.top = position[1] + "%";
        wordElement.style.color = wordColors[Math.floor(Math.random() * wordColors.length)];
        wordElement.style.setProperty("--delay", index * 35 + "ms");

        if (keyword) {
            wordElement.type = "button";
            wordElement.addEventListener("mouseenter", showInfo);
            wordElement.addEventListener("mouseleave", hideInfo);
            wordElement.addEventListener("focus", showInfo);
            wordElement.addEventListener("blur", hideInfo);
            wordElement.addEventListener("click", showInfo);
        } else {
            wordElement.setAttribute("aria-hidden", "true");
        }

        function showInfo() {
            wordCloud.classList.add("has-info");
            wordCloud.querySelectorAll(".keyword").forEach(item => {
                item.classList.toggle("active", item === wordElement);
            });

            wordInfo.replaceChildren();
            paragraphs.forEach(text => {
                const paragraph = document.createElement("p");
                paragraph.textContent = text;
                wordInfo.appendChild(paragraph);
            });
        }

        function hideInfo() {
            wordCloud.classList.remove("has-info");
            wordElement.classList.remove("active");
            wordInfo.replaceChildren();
        }

        wordCloud.appendChild(wordElement);
    }

    backgroundWords.forEach((word, index) => addWord(word, index));
    Object.entries(keywords).forEach(([word, paragraphs], index) => {
        addWord(word, backgroundWords.length + index, paragraphs);
    });

    const wordObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            wordCloud.classList.add("visible");
            wordObserver.disconnect();
        }
    }, { threshold: 0.15 });

    wordObserver.observe(wordCloud);
}

const machineGirlReleases = [
    {
        "name": "WLFGRL",
        "type": "Album",
        "year": "2014",
        "embedUrl": "https://open.spotify.com/embed/album/2CFoMy95LPq4Mi4SMZJduV?utm_source=generator&theme=0&si=2c8fee8cc51b4da2"
    },
    {
        "name": "Gemini",
        "type": "Album",
        "year": "2015",
        "embedUrl": "https://open.spotify.com/embed/album/0AFCD7oeB76moqSEvfpTz0?utm_source=generator&theme=0&si=997320d466c84335"
    },
    {
        "name": "Machine Girl / Five Star Hotel",
        "type": "Album",
        "year": "2016",
        "embedUrl": "https://open.spotify.com/embed/album/113KYCkSBJ4wMa497lShYS?utm_source=generator&theme=0&si=09f2c7557b974b74"
    },
    {
        "name": "...Because I'm Young Arrogant and Hate Everything You Stand For",
        "type": "Album",
        "year": "2017",
        "embedUrl": "https://open.spotify.com/embed/album/6662pIcAdceTkBnv4dbebj?utm_source=generator&theme=0&si=b1595a3cc67c472c"
    },
    {
        "name": "Mrk90 MIX VOL1",
        "type": "Album",
        "year": "2017",
        "embedUrl": "https://open.spotify.com/embed/album/1XHwJZey4twScciIVvPavI?utm_source=generator&theme=0&si=0137e0125c99494b"
    },
    {
        "name": "The Ugly Art",
        "type": "Album",
        "year": "2018",
        "embedUrl": "https://open.spotify.com/embed/album/4TaRY3YEbSU7dC7WvYbbdI?utm_source=generator&theme=0&si=bcb78133ac7440de"
    },
    {
        "name": "U-Void Synthesizer",
        "type": "Album",
        "year": "2020",
        "embedUrl": "https://open.spotify.com/embed/album/6ErBHRj6OWW2bBwQ2MoBc4?utm_source=generator&theme=0&si=2423be8b2d724426"
    },
    {
        "name": "RePorpoised Phantasies",
        "type": "EP",
        "year": "2020",
        "embedUrl": "https://open.spotify.com/embed/album/4iXtbXgSemfqNTD7rMheXa?utm_source=generator&theme=0&si=97efbeb9426e4c4d"
    },
    {
        "name": "Club Anxious (Machine Girl Remix)",
        "type": "EP",
        "year": "2021",
        "embedUrl": "https://open.spotify.com/embed/album/5v7L4paSVmVWRsepu4e3XQ?utm_source=generator&theme=0&si=e4297b6c830d4e66"
    },
    {
        "name": "Neon White Soundtrack Part 1 \"The Wicked Heart\"",
        "type": "Album",
        "year": "2022",
        "embedUrl": "https://open.spotify.com/embed/album/0uYxgIHjLcufVqbvOAeGDb?utm_source=generator&theme=0&si=4ebb06f504c24316"
    },
    {
        "name": "Neon White Soundtrack Part 2 \"The Burn That Cures\"",
        "type": "Album",
        "year": "2022",
        "embedUrl": "https://open.spotify.com/embed/album/4ssvXCfePUn0EwwcUy10Pi?utm_source=generator&theme=0&si=795ffdd0e9fc4586"
    },
    {
        "name": "Tambaleo (Machine Girl Remix)",
        "type": "Single",
        "year": "2022",
        "embedUrl": "https://open.spotify.com/embed/album/0NmFLDEM7hhYB22K2qUjMU?utm_source=generator&theme=0&si=e099c888d05942c7"
    },
    {
        "name": "Yesterday (Machine Girl Remix)",
        "type": "Single",
        "year": "2023",
        "embedUrl": "https://open.spotify.com/embed/album/3xN2inUGaCiQE4Rdsvr6tu?utm_source=generator&theme=0&si=eb58ab9e1364436d"
    },
    {
        "name": "Concerning Peace (Machine Girl Remix)",
        "type": "Single",
        "year": "2023",
        "embedUrl": "https://open.spotify.com/embed/album/0m859FlbK8HvrxXYCFYu5R?utm_source=generator&theme=0&si=d607786294e24afc"
    },
    {
        "name": "SUPER FREQ",
        "type": "EP",
        "year": "2024",
        "embedUrl": "https://open.spotify.com/embed/album/4fpeEq1qtV52td9M7WcKrp?utm_source=generator&theme=0&si=06b5404c368c415c"
    },
    {
        "name": "Until I Die",
        "type": "Single",
        "year": "2024",
        "embedUrl": "https://open.spotify.com/embed/album/7EW3tdogFVthGZ4wXZEzQ5?utm_source=generator&theme=0&si=4b10f492d3344cef"
    },
    {
        "name": "Motherfather",
        "type": "Single",
        "year": "2024",
        "embedUrl": "https://open.spotify.com/embed/album/1duWk9TdCMIZxh5GZbnhgU?utm_source=generator&theme=0&si=210b47a32a794fb5"
    },
    {
        "name": "Psychic Attack",
        "type": "Single",
        "year": "2024",
        "embedUrl": "https://open.spotify.com/embed/album/7knrF1MSXLFQGs4tPv8RVQ?utm_source=generator&theme=0&si=a70fdae09f314c7c"
    },
    {
        "name": "MG Ultra",
        "type": "Album",
        "year": "2024",
        "embedUrl": "https://open.spotify.com/embed/album/3598AkUpAY95SA2t4JrotL?utm_source=generator&theme=0&si=32e5cb623d094e0b"
    },
    {
        "name": "Ass2Mars (Squarepusher Remix)",
        "type": "Single",
        "year": "2025",
        "embedUrl": "https://open.spotify.com/embed/album/3MHV5GvoCDnQWefNOP1jqW?utm_source=generator&theme=0&si=4b42927fd32b4c7e"
    },
    {
        "name": "Ass2Mars (LSDXOXO Remix)",
        "type": "Single",
        "year": "2025",
        "embedUrl": "https://open.spotify.com/embed/album/7yhug9E5TS07Yx0qJ76GXm?utm_source=generator&theme=0&si=c81f4e0050344879"
    },
    {
        "name": "MG Ultra (Remixes)",
        "type": "EP",
        "year": "2025",
        "embedUrl": "https://open.spotify.com/embed/album/57Dhen8PwQQNBSxhKvEDIs?utm_source=generator&theme=0&si=8a1e93155286473a"
    },
    {
        "name": "Come On Baby, Scrape My Data",
        "type": "Single",
        "year": "2025",
        "embedUrl": "https://open.spotify.com/embed/album/6fgrce0L4tegw7SaTw0WbT?utm_source=generator&theme=0&si=dfa4ae17c2cf4dcd"
    },
    {
        "name": "Rabbit Season",
        "type": "Single",
        "year": "2025",
        "embedUrl": "https://open.spotify.com/embed/album/4lL3Pc1eMeO0I3EnRwlPCk?utm_source=generator&theme=0&si=7ae3599853274b36"
    },
    {
        "name": "Dread Architect",
        "type": "Single",
        "year": "2025",
        "embedUrl": "https://open.spotify.com/embed/album/0xgMqx8GmpEzfKcvUQMFFL?utm_source=generator&theme=0&si=e9d8334b636a4236"
    },
    {
        "name": "PsychoWarrior: MG Ultra X",
        "type": "Album",
        "year": "2025",
        "embedUrl": "https://open.spotify.com/embed/album/1CjHj5Gs3eWmxCZ7HsHjOv?utm_source=generator&theme=0&si=4ac972888b3e4849"
    },
    {
        "name": "Come On Baby, Scrape My Data (Dj Smokey Remix)",
        "type": "Single",
        "year": "2026",
        "embedUrl": "https://open.spotify.com/embed/album/1Qg1Bz01saU5zXdnGM2LA1?utm_source=generator&theme=0&si=a0cc827ed1ae4708"
    },
    {
        "name": "Dual Wield (femtanyl Remix)",
        "type": "Single",
        "year": "2025",
        "embedUrl": "https://open.spotify.com/embed/album/6cjIv3IFP2s7dhz9tC7xZ8?utm_source=generator&theme=0&si=eba91b09b7594566"
    },
    {
        "name": "PsychoWarrior: MG Ultra X: The Remixes [Minus One]",
        "type": "Album",
        "year": "2026",
        "embedUrl": "https://open.spotify.com/embed/album/5ZMndhCJrdoY7zPQWov96U?utm_source=generator&theme=0&si=cdaac1c595fb4f5a"
    },
    {
        "name": "The Ugly Art (Reissue)",
        "type": "Album",
        "year": "2026",
        "embedUrl": "https://open.spotify.com/embed/album/1mRFxxNjKAWA5liB3AkEz7?utm_source=generator&theme=0&si=2516fca404fc48f7"
    }
];

function setupDiscography() {
    const carouselElement = document.querySelector("#discographyCarousel");

    const slidesElement = document.querySelector("#discographySlides");
    const toggleButton = document.querySelector("#discographyToggle");
    const counter = document.querySelector("#discographyCounter");
    const status = document.querySelector("#discographyStatus");

    // create a slide for every release
    machineGirlReleases.forEach((release, index) => {
        const slide = document.createElement("div");
        slide.className = index === 0 ? "carousel-item active" : "carousel-item";

        const playerBox = document.createElement("div");
        playerBox.className = "spotify-player-box";
        playerBox.dataset.embedUrl = release.embedUrl;
        playerBox.dataset.releaseName = release.name;

        const details = document.createElement("div");
        details.className = "discography-item-info";

        const title = document.createElement("h3");
        title.textContent = release.name;
        details.append(title);

        const metaText = [release.type, release.year].filter(Boolean).join(" · ");

        if (metaText) {
            const meta = document.createElement("p");
            meta.className = "discography-meta";
            meta.textContent = metaText;
            details.append(meta);
        }

        slide.append(playerBox, details);
        slidesElement.append(slide);
    });

    const slides = slidesElement.querySelectorAll(".carousel-item");

    status.hidden = true;
    carouselElement.hidden = false;

    // create the Spotify player when its slide becomes active
    function loadPlayer(slide) {
        const playerBox = slide.querySelector(".spotify-player-box");

        const player = document.createElement("iframe");
        player.src = playerBox.dataset.embedUrl;
        player.title = `Spotify player for ${playerBox.dataset.releaseName}`;
        player.width = "100%";
        player.height = "352";
        player.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
        player.loading = "lazy";

        playerBox.append(player);
    }

    // remove the old player so its music stops
    function unloadPlayer(slide) {
        slide.querySelector("iframe").remove();
    }

    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 15000,
        keyboard: true,
        pause: false,
        ride: false,
        touch: true,
        wrap: true
    });

    let isPlaying = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function pauseCarousel() {
        carousel.pause();
        isPlaying = false;
        toggleButton.textContent = "▶";
    }

    function updateCounter(index) {
        counter.textContent = `${index + 1} / ${slides.length}`;
    }

    // remove the old player before changing slides
    carouselElement.addEventListener("slide.bs.carousel", event => {
        unloadPlayer(slides[event.from]);
    });

    // obviously, load the new player after changing slides
    carouselElement.addEventListener("slid.bs.carousel", event => {
        loadPlayer(event.relatedTarget);
        updateCounter(event.to);
    });

    carouselElement.querySelectorAll(".carousel-control-prev, .carousel-control-next").forEach(button => {
        button.addEventListener("click", pauseCarousel);
    });

    toggleButton.addEventListener("click", () => {
        if (isPlaying) {
            pauseCarousel();
        } else {
            carousel.cycle();
            isPlaying = true;
            toggleButton.textContent = "⏸";
        }
    });

    loadPlayer(slides[0]);
    updateCounter(0);
    toggleButton.textContent = isPlaying ? "⏸" : "▶";

    if (isPlaying && slides.length > 1) {
        carousel.cycle();
    } else {
        carousel.pause();
    }
}

setupDiscography();

const navbar = document.querySelector(".navbar");
const badApple = navbar?.querySelector(".navbar-bad-apple");

if (navbar && badApple) {
    const isContactPage = navbar.classList.contains("navbar-bg-contact");
    const videoSource = isContactPage ? "img/bad_apple-contact.mp4" : "img/bad_apple-home.mp4";

    function clearVideo() {
        badApple.pause();
        badApple.style.display = "none";
        badApple.removeAttribute("src");
        badApple.load();
    }

    function scheduleBadApple() {
        setTimeout(() => {
            if (Math.random() < 0.05) {
                showBadApple();
            } else {
                scheduleBadApple();
            }
        }, 4000);
    }

    function showBadApple() {
        const tileWidth = navbar.clientHeight * (532 / 306);
        const tileCount = Math.floor((navbar.clientWidth - 500) / tileWidth);

        if (tileCount < 1) {
            scheduleBadApple();
            return;
        }

        const tile = Math.floor(Math.random() * tileCount);
        badApple.style.width = tileWidth + "px";
        badApple.style.left = (250 + tile * tileWidth) + "px";
        badApple.style.display = "block";
        badApple.src = videoSource;
        badApple.play();
    }

    badApple.addEventListener("ended", () => {
        clearVideo();
        scheduleBadApple();
    });

    scheduleBadApple();
}