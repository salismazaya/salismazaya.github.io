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
        "Express",
        "Git",
        "Redis",
        "Linux",
        'Nginx',
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
                <p class="text-sm">Backend</p>
                <div class="w-3/5 h-1.5 bg-blue-600 rounded" />
            </div>
            <div>
                <p class="text-sm">Frontend</p>
                <div class="w-1/2 h-1.5 bg-yellow-600 rounded" />
            </div>
            <div>
                <p class="text-sm">Blockchain</p>
                <div class="w-1/3 h-1.5 bg-green-600 rounded" />
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
    </div>
</div>
