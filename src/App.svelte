<script>
    const texts = [
        "I'M Salis Mazaya",
        "I'M Salis Mazaya",
        "I'M Python Enthusiast",
        "I'M Python Enthusiast",
        "I'M Blockchain Lovers",
        "I'M Blockchain Lovers",
        "I'M Backend Developer",
        "I'M Backend Developer",
        "I'M Telegram Bot Developer",
        "I'M Telegram Bot Developer",
        "I'M Orang Ganteng dan Baik",
        "I'M Orang Ganteng dan Baik",
    ];

    let opacity = "opacity-100";
    let textIndex = 0;

    let realFamiliarWiths = [
        "Python",
        "Javascript",
        "NodeJS",
        "Solidity",
        "Docker",
        "Django",
        "Flask",
        "PHP",
        "Express",
        "BeutifulSoup4",
        "MySQL",
        "Git",
        "Redis",
        "Linux",
        "Nginx",
        "Svelte",
        "Tailwind",
        "AlpineJS",
        "EtherJS",
        "Pillow",
        "OpenCV",
        "Java",
        "Flutter",
        "Selenium"
    ];
    let familiarWiths = [...realFamiliarWiths];

    let query = "";

    setInterval(() => {
        opacity = opacity == "opacity-100" ? "opacity-0" : "opacity-100";
        textIndex++;
    }, 2000);

    function toTitleCase(str) {
        return str.toLowerCase().replace(/(?:^|\s|-)\w/g, function (match) {
            return match.toUpperCase();
        });
    }
</script>

<div class="flex items-center min-h-screen">
    <div class="max-w-lg mx-auto">
        <div class="absolute -z-50 w-full right-0 top-0 lg:-translate-y-14">
            <img src="/img/blockchain.png" alt="" class="mx-auto block" />
        </div>

        <img src="/img/salis.png" alt="Salis Keren" class="w-2/3 mx-auto" />
        <div class="flex justify-center mt-2 gap-3 items-center">
            <a href="https://t.me/salismiftah" target="_blank">
                <img src="img/telegram.webp" alt="" class="w-7">
            </a>
            <a href="https://github.com/salismazaya" target="_blank" class="bg-white p-0.5 rounded-full">
                <img src="img/github.png" alt="" class="w-7">
            </a>
        </div>
        <p
            class="my-3 text-center font-bold text-white transition-opacity ease-in-out duration-[2000ms] {opacity}"
        >
            {texts[textIndex % texts.length]}
        </p>

        <div class="p-3 bg-gray-100 mx-3 rounded drop-shadow-md">
            <span class="border-b border-red-500 mb-3 inline-block"
                >About Me</span
            ><br />
            <p class="text-sm">My name is Salis Mazaya Miftah Malik, and I became interested in the IT world when I was 15 years old. My first love is blockchain. I am very ambitious, cheerful, and dream of becoming a highly skilled hacker.</p>
        </div>

        <div class="p-3 bg-gray-100 mx-3 rounded drop-shadow-md mt-3">
            <span class="border-b border-red-500 mb-3 inline-block"
                >My Skills</span
            ><br />

            <div>
                <p class="text-sm">Web Development</p>
            </div>
            <div>
                <p class="text-sm">Web Scraping</p>
            </div>
            <div>
                <p class="text-sm">Bot Development</p>
            </div>
            <div>
                <p class="text-sm">Android Development</p>
            </div>
            <div>
                <p class="text-sm">DApps Development</p>
            </div>
        </div>

        <div class="p-3 mt-3 bg-gray-100 mx-3 rounded drop-shadow-md">
            <div class="flex justify-between items-center">
                <span class="border-b border-red-500 mb-3 inline-block"
                    >Familiar With</span
                >
                <div
                    class="border border-red-500 w-1/2 -translate-y-1.5 rounded p-1 flex items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                    <input
                        type="text"
                        class="ml-2 bg-transparent outline-none w-full"
                        bind:value={query}
                        on:change={() => {
                            if (query == "") {
                                familiarWiths = [...realFamiliarWiths];
                            } else {
                                familiarWiths = [];
                                realFamiliarWiths
                                    .map((x) => x.toLowerCase())
                                    .forEach((e) => {
                                        if (e.includes(query.toLowerCase())) {
                                            familiarWiths.push(toTitleCase(e));
                                        }
                                    });
                            }
                        }}
                    />
                </div>
            </div>
            <div class="min-h-[280px]">
                <ol class="list-disc ml-10 grid gap-2 grid-cols-2">
                    {#each familiarWiths as familiarWith}
                        <li>{familiarWith}</li>
                    {/each}
                </ol>
            </div>
        </div>

        <div class="p-3 mt-3 bg-gray-100 mx-3 rounded drop-shadow-md">
            <span class="border-b border-red-500 mb-3 inline-block"
                >My Portofolio</span
            >

            <div>
                <div class="flex my-1">
                    <div class="w-2/12">
                        <img class="w-full" src="img/radtracker.jpg" alt="">
                    </div>
                    <div class="w-full ml-2 text-sm">
                        <a href="https://t.me/RadTracker_Bot" class="text-blue-500 hover:text-blue-400">RadTracker Bot</a>
                        <p>Notification bot for ALL coins, only on Radix Network.</p>
                    </div>
                </div>

                <div class="flex my-1">
                    <div class="w-2/12">
                        <img class="w-full" src="img/warungswap.jpg" alt="">
                    </div>
                    <div class="w-full ml-2 text-sm">
                        <a href="https://t.me/warungswap_bot" class="text-blue-500 hover:text-blue-400">WarungSwap Bot</a>
                        <p>WarungSwap merupakan bot yang menyediakan layanan transaksi Crypto dan PPOB dengan server yang aktif 24 jam Non-stop.</p>
                    </div>
                </div>

                <div class="flex my-1">
                    <div class="w-2/12">
                        <img class="w-full" src="img/tokosalis.jpg" alt="">
                    </div>
                    <div class="w-full ml-2 text-sm">
                        <a href="https://t.me/tokosalis_bot" class="text-blue-500 hover:text-blue-400">TokoSalis Bot</a>
                        <p>Bot untuk membeli crypto di jaringan EVM.</p>
                    </div>
                </div>

                <div class="flex my-1">
                    <div class="w-2/12">
                        <img class="w-full" src="img/ebridge.jpg" alt="">
                    </div>
                    <div class="w-full ml-2 text-sm">
                        <a href="https://t.me/EBridge_TGBOT" class="text-blue-500 hover:text-blue-400">EBridge Bot</a>
                        <p>Bridge your EVM coin easily</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
