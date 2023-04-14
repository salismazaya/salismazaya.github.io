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
        "Django",
        "Flask",
        "PHP",
        "Express",
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
        <p
            class="my-3 text-center font-bold text-white transition-opacity ease-in-out duration-[2000ms] {opacity}"
        >
            {texts[textIndex % texts.length]}
        </p>

        <div class="p-3 bg-gray-100 mx-3 rounded drop-shadow-md">
            <span class="border-b border-red-500 mb-3 inline-block"
                >My Skills</span
            ><br />

            <div>
                <p class="text-sm">Web Development</p>
                <div class="w-2/3 h-1.5 bg-blue-600 rounded" />
            </div>
            <div>
                <p class="text-sm">Web Scraping</p>
                <div class="w-2/3 h-1.5 bg-red-600 rounded" />
            </div>
            <div>
                <p class="text-sm">Bot Development</p>
                <div class="w-3/5 h-1.5 bg-purple-600 rounded" />
            </div>
            <div>
                <p class="text-sm">Android Development</p>
                <div class="w-1/3 h-1.5 bg-yellow-600 rounded" />
            </div>
            <div>
                <p class="text-sm">DApps Development</p>
                <div class="w-1/4 h-1.5 bg-green-600 rounded" />
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

        <div class="mx-3 mt-3 drop-shadow-md">
            <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=salismazaya&theme=light"
                alt=""
                class="w-full"
            />
        </div>

        <div class="mx-3 mt-3 drop-shadow-md">
            <img
                src="https://github-readme-stats.vercel.app/api?username=salismazaya&show_icons=true&theme=light"
                alt=""
                class="w-full"
            />
        </div>
    </div>
</div>

<div
    class="fixed bottom-0 right-0 -translate-x-4 -translate-y-4 p-1 bg-white rounded-full shadow-lg shadow-red-200"
>
    <a href="https://github.com/salismazaya" target="_blank">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="w-12 h-12"
            ><path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            /></svg
        >
    </a>
</div>
