importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

// Force development builds
// workbox.setConfig({ debug: true });

// Force production builds
workbox.setConfig({ debug: false });

workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent);

workbox.precaching.precacheAndRoute([
  {
    "url": "404.tmpl.html",
    "revision": "07893c534efb046dd8140ff066c8c8c8"
  },
  {
    "url": "500.tmpl.html",
    "revision": "bde2c6006d6e90dc4e2348c1e938d42e"
  },
  {
    "url": "ads.html",
    "revision": "5b2cd37817a0d5955d138fae495cb290"
  },
  {
    "url": "ads2.html",
    "revision": "0ccbc6b3767bc5ec25b0d908e650e987"
  },
  {
    "url": "app/authentication/il8n/en.json",
    "revision": "c405f567e44b8902ec7f8e6cc4ba06ed"
  },
  {
    "url": "app/authentication/il8n/fr.json",
    "revision": "48c9d2446419a63d0a432501cb5de5fc"
  },
  {
    "url": "app/class-module/il8n/en.json",
    "revision": "cbdbcd302359e801a3aaa2c84b112fd4"
  },
  {
    "url": "app/class-module/il8n/fr.json",
    "revision": "bc0fd0baf44a41fa1e1ae92b4061a792"
  },
  {
    "url": "app/email/il8n/en.json",
    "revision": "6d8c05ff3ff414f1d617b081417d7a32"
  },
  {
    "url": "app/email/il8n/fr.json",
    "revision": "58ec96559b7e69027b208613e2f0b9e3"
  },
  {
    "url": "app/grammar-course/il8n/en.json",
    "revision": "ab96f2cb4612511c62db7060358e1b32"
  },
  {
    "url": "app/il8n/en.json",
    "revision": "671125b0634cd0264586ff6f17ca52af"
  },
  {
    "url": "app/il8n/fr.json",
    "revision": "75ff0b7456a3febc58be56bb1b337b1d"
  },
  {
    "url": "app/notice-module/il8n/en.json",
    "revision": "3d29a75fcf0ed7dfff86d3db8f92fc69"
  },
  {
    "url": "app/notice-module/il8n/fr.json",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "app/review-module/il8n/en.json",
    "revision": "6ca4b5bdd673b6ed11a8ddba6187835c"
  },
  {
    "url": "app/review-module/il8n/fr.json",
    "revision": "3d29a75fcf0ed7dfff86d3db8f92fc69"
  },
  {
    "url": "app/study-notes/il8n/en.json",
    "revision": "3d29a75fcf0ed7dfff86d3db8f92fc69"
  },
  {
    "url": "app/study-notes/il8n/fr.json",
    "revision": "3d29a75fcf0ed7dfff86d3db8f92fc69"
  },
  {
    "url": "app/word-module/il8n/en.json",
    "revision": "8985dd671e82e0bcbaa68a2f68781647"
  },
  {
    "url": "app/word-module/il8n/fr.json",
    "revision": "3d29a75fcf0ed7dfff86d3db8f92fc69"
  },
  {
    "url": "assets/images/avatars/avatar-1.png",
    "revision": "b40e2b856ae534f8c8ec66a23c7d3e0f"
  },
  {
    "url": "assets/images/avatars/avatar-2.png",
    "revision": "12cbcc540abe6af041f09269d052aff2"
  },
  {
    "url": "assets/images/avatars/avatar-3.png",
    "revision": "65727e170489408a818245f95904bf39"
  },
  {
    "url": "assets/images/avatars/avatar-4.png",
    "revision": "0182d2fb093b4b37f11489db2d646a0f"
  },
  {
    "url": "assets/images/avatars/avatar-5.png",
    "revision": "76f4d28dac34ac73b7938474e92ca24a"
  },
  {
    "url": "assets/images/avatars/avatar-6.png",
    "revision": "67daaeda2f47336fad53def215f463cc"
  },
  {
    "url": "assets/images/avatars/avatar-big.png",
    "revision": "fa1dc64b795db6a1cb7fa3eaebda1beb"
  },
  {
    "url": "assets/images/avatars/avatar-default.png",
    "revision": "06259238d23806b144d97526b9f3db7c"
  },
  {
    "url": "assets/images/avatars/default-img.png",
    "revision": "d3462ad1d2b33b0af3a13d39d45bf050"
  },
  {
    "url": "assets/images/avatars/hair-black-eyes-blue-green-skin-tanned.png",
    "revision": "46cc95d4af72db200367edee2fcdaff7"
  },
  {
    "url": "assets/images/avatars/hair-black-eyes-brown-skin-dark.png",
    "revision": "59ebc1f29cc5a6e5708e441bd0beaf37"
  },
  {
    "url": "assets/images/avatars/hair-black-eyes-brown-skin-tanned-2.png",
    "revision": "2996a9f7e9c88fa15668cc83c0f4dc14"
  },
  {
    "url": "assets/images/avatars/hair-black-eyes-brown-skin-tanned.png",
    "revision": "9ca290a4ddc89837fa3a51a35f61e756"
  },
  {
    "url": "assets/images/avatars/hair-black-eyes-dark-skin-dark.png",
    "revision": "0a2f6c538b1c267fa178ddb3ef4d327f"
  },
  {
    "url": "assets/images/avatars/hair-blonde-eyes-blue-green-skin-light.png",
    "revision": "5dab6fdd2deb55a30935c49dc59866fd"
  },
  {
    "url": "assets/images/avatars/hair-blonde-eyes-brown-skin-light.png",
    "revision": "1d7919a9be4f7b20d77060637e7187fb"
  },
  {
    "url": "assets/images/avatars/hair-blonde-eyes-brown-skin-tanned.png",
    "revision": "31e134538da36863b5839b06602e5f80"
  },
  {
    "url": "assets/images/avatars/hair-grey-eyes-dark-skin-tanned.png",
    "revision": "e33313b11c584dc070e8cb073389a5fa"
  },
  {
    "url": "assets/images/backgrounds/background-bak.jpg",
    "revision": "cede1dd4b8d021185130b8d73b1fd360"
  },
  {
    "url": "assets/images/backgrounds/background-bak1.jpg",
    "revision": "79e8e93e39bbee17d1aa624003f86c63"
  },
  {
    "url": "assets/images/backgrounds/background.jpg",
    "revision": "eb0d86ff5b809847e01bb95372aec431"
  },
  {
    "url": "assets/images/backgrounds/background.png",
    "revision": "7f0196e3e2742d7df0baf397cd73eaef"
  },
  {
    "url": "assets/images/backgrounds/bg-1.jpg",
    "revision": "6f2426cb2162cc1743143b0833b27e68"
  },
  {
    "url": "assets/images/backgrounds/bg-2.jpg",
    "revision": "335e9d01cae36c1b18f8709ed915889c"
  },
  {
    "url": "assets/images/backgrounds/bg-3.jpg",
    "revision": "6df274d2cca72be7f72ade98b5d7ae9a"
  },
  {
    "url": "assets/images/backgrounds/bg-4-small.jpg",
    "revision": "7d1af245bc5724a30c20085ee2aea728"
  },
  {
    "url": "assets/images/backgrounds/bg-4.jpg",
    "revision": "93e5abaa0e80d8aa259a81d9e04eb2cd"
  },
  {
    "url": "assets/images/backgrounds/bg-5.jpg",
    "revision": "fc40d1d8add84d1df1a4271b5bc949dd"
  },
  {
    "url": "assets/images/backgrounds/bg-6.jpg",
    "revision": "de5fa81a7c0b6345baeba511fa8470f1"
  },
  {
    "url": "assets/images/backgrounds/bg-7.jpg",
    "revision": "f0a5a82e07e4cdf99ad81532c2eb7fef"
  },
  {
    "url": "assets/images/backgrounds/bg-8.jpg",
    "revision": "b2b117847396287b95340b804f309d93"
  },
  {
    "url": "assets/images/backgrounds/bg-toolbar.jpg",
    "revision": "9347a6e79fceff5e3f156fd96bed535d"
  },
  {
    "url": "assets/images/backgrounds/mat-1.jpg",
    "revision": "4127837882ae1570c5854bc6be4358ba"
  },
  {
    "url": "assets/images/calendar/1.jpg",
    "revision": "89b4d9a9daf9bae1df975351f2b986c8"
  },
  {
    "url": "assets/images/calendar/10.jpg",
    "revision": "0fefeb24d89ebf07f7fbc670282b86bc"
  },
  {
    "url": "assets/images/calendar/11.jpg",
    "revision": "ca1650319eea2432c5509a86c7670cfb"
  },
  {
    "url": "assets/images/calendar/12.jpg",
    "revision": "a74bb6477f3ebc8cc22efb7f74572b72"
  },
  {
    "url": "assets/images/calendar/2.jpg",
    "revision": "c38aded093afa3a9dd46a22a9c0b2e3f"
  },
  {
    "url": "assets/images/calendar/3.jpg",
    "revision": "4ac4c510eeb3442f7eb40c8f64280e51"
  },
  {
    "url": "assets/images/calendar/4.jpg",
    "revision": "d3cc042a3cfe24bf4c02d3a271fe3476"
  },
  {
    "url": "assets/images/calendar/5.jpg",
    "revision": "d13e009476a72c30acf8dc83d14eef29"
  },
  {
    "url": "assets/images/calendar/6.jpg",
    "revision": "51f7849c6777eec769a6e39b25d98e69"
  },
  {
    "url": "assets/images/calendar/7.jpg",
    "revision": "ccc831f74022fa0794608929f4360168"
  },
  {
    "url": "assets/images/calendar/8.jpg",
    "revision": "70a07b2806e2d7026ee872e37c1e3148"
  },
  {
    "url": "assets/images/calendar/9.jpg",
    "revision": "2833d6b61bd467011a7c0d6e11462dd7"
  },
  {
    "url": "assets/images/cat.png",
    "revision": "05586ee7e6b69a3eba6512b578d340db"
  },
  {
    "url": "assets/images/css/addtohomescreen.css",
    "revision": "2f4367722276453b584cc0b9781475a8"
  },
  {
    "url": "assets/images/css/animate.min.css",
    "revision": "11ae4469d1b408cd98302ce01d8487e4"
  },
  {
    "url": "assets/images/css/animations-ie-fix.css",
    "revision": "2c206b1f3eb5315cc7939bdda325977c"
  },
  {
    "url": "assets/images/css/animations.css",
    "revision": "f0731558bb3e5f5aeebcd1176f6b2607"
  },
  {
    "url": "assets/images/css/Background_blur.jpg",
    "revision": "ad2504c71495121a658e0a361f20e2e1"
  },
  {
    "url": "assets/images/css/bootstrap.css",
    "revision": "5ba37ad9163643c32251366754f08b2a"
  },
  {
    "url": "assets/images/css/bootstrap.min.css",
    "revision": "8df2926014cffa83db88352e83516707"
  },
  {
    "url": "assets/images/css/chartist.css",
    "revision": "d00f638fd6b69839cb379d5e3b1f6c75"
  },
  {
    "url": "assets/images/css/creative.css",
    "revision": "a69b72e2be7557820aae3f06d65d9b61"
  },
  {
    "url": "assets/images/css/merge.css",
    "revision": "2fdc5fc5836f78e9831092122bbbccfe"
  },
  {
    "url": "assets/images/css/style.css",
    "revision": "83de7cfbeb9e7d680ec383c41dbb2d5b"
  },
  {
    "url": "assets/images/dashboards/tweet.jpg",
    "revision": "52e7028bbead70d8286e65459c26d45d"
  },
  {
    "url": "assets/images/dashboards/weather.jpg",
    "revision": "1821b88081808896d6d963503bf02646"
  },
  {
    "url": "assets/images/dashboards/Worksheet_logo.jpg",
    "revision": "204e70cb231ad50ae2e8d4bc5dc5a43a"
  },
  {
    "url": "assets/images/default-img.png",
    "revision": "d3462ad1d2b33b0af3a13d39d45bf050"
  },
  {
    "url": "assets/images/elements/fab.png",
    "revision": "87e65300466e71c64ce76bf862178c6d"
  },
  {
    "url": "assets/images/font-awesome/css/font-awesome.css",
    "revision": "3f05a51a1e5260f4179db8ca65307a6a"
  },
  {
    "url": "assets/images/font-awesome/css/font-awesome.min.css",
    "revision": "04425bbdc6243fc6e54bf8984fe50330"
  },
  {
    "url": "assets/images/font-awesome/fonts/fontawesome-webfont.eot",
    "revision": "f7c2b4b747b1a225eb8dee034134a1b0"
  },
  {
    "url": "assets/images/font-awesome/fonts/fontawesome-webfont.svg",
    "revision": "2980083682e94d33a66eef2e7d612519"
  },
  {
    "url": "assets/images/font-awesome/fonts/fontawesome-webfont.ttf",
    "revision": "706450d7bba6374ca02fe167d86685cb"
  },
  {
    "url": "assets/images/font-awesome/fonts/fontawesome-webfont.woff",
    "revision": "d9ee23d59d0e0e727b51368b458a0bff"
  },
  {
    "url": "assets/images/font-awesome/fonts/fontawesome-webfont.woff2",
    "revision": "97493d3f11c0a3bd5cbd959f5d19b699"
  },
  {
    "url": "assets/images/font-awesome/fonts/FontAwesome.otf",
    "revision": "0b462f5cc07779cab3bef252c0271f2b"
  },
  {
    "url": "assets/images/font-awesome/less/animated.less",
    "revision": "08baef05e05301cabc91599a54921081"
  },
  {
    "url": "assets/images/font-awesome/less/bordered-pulled.less",
    "revision": "5b3f3e1353ea7ab9d10fd7598fbd214b"
  },
  {
    "url": "assets/images/font-awesome/less/core.less",
    "revision": "483b97c7c5e4bc5e58c51a7c8dcf2452"
  },
  {
    "url": "assets/images/font-awesome/less/fixed-width.less",
    "revision": "5e07ec001f8d21bd279c12ee542813f7"
  },
  {
    "url": "assets/images/font-awesome/less/font-awesome.less",
    "revision": "a031a4e1505b74fc89d53e1b451070d8"
  },
  {
    "url": "assets/images/font-awesome/less/icons.less",
    "revision": "20ea652130cf1688cb31b2b9915b6feb"
  },
  {
    "url": "assets/images/font-awesome/less/larger.less",
    "revision": "8cb65280c0f889daf72626c21a7c8628"
  },
  {
    "url": "assets/images/font-awesome/less/list.less",
    "revision": "975571323cf880a4a30601998236b027"
  },
  {
    "url": "assets/images/font-awesome/less/mixins.less",
    "revision": "2db969adf253ac72874ae8efb396e045"
  },
  {
    "url": "assets/images/font-awesome/less/path.less",
    "revision": "3ae443e0386cc3a69ff47d641aefb74b"
  },
  {
    "url": "assets/images/font-awesome/less/rotated-flipped.less",
    "revision": "a8476cdc50c264abd11ff59d6a9dd025"
  },
  {
    "url": "assets/images/font-awesome/less/stacked.less",
    "revision": "518e2b2d263982d2caa1e6514b4b4eac"
  },
  {
    "url": "assets/images/font-awesome/less/variables.less",
    "revision": "f2f06e00c3e6faecfe1f6b7d4a4a5643"
  },
  {
    "url": "assets/images/font-awesome/scss/_animated.scss",
    "revision": "39ff4f359a7b81d6585075715f41e5dc"
  },
  {
    "url": "assets/images/font-awesome/scss/_bordered-pulled.scss",
    "revision": "e4f85472a1f6ed0e23a473b8e00ef071"
  },
  {
    "url": "assets/images/font-awesome/scss/_core.scss",
    "revision": "0a2608d157008ac6e08f52bbfab362f1"
  },
  {
    "url": "assets/images/font-awesome/scss/_fixed-width.scss",
    "revision": "9277ab6964a434d499873687b00be906"
  },
  {
    "url": "assets/images/font-awesome/scss/_icons.scss",
    "revision": "5bcd881d5f16bbe383db51679fa87cad"
  },
  {
    "url": "assets/images/font-awesome/scss/_larger.scss",
    "revision": "e95931566f6fc6ad5685c4fa9802e206"
  },
  {
    "url": "assets/images/font-awesome/scss/_list.scss",
    "revision": "7107e80b053928271d5fcf422dc29490"
  },
  {
    "url": "assets/images/font-awesome/scss/_mixins.scss",
    "revision": "cb30923e6315eea41a6fe44a469714b4"
  },
  {
    "url": "assets/images/font-awesome/scss/_path.scss",
    "revision": "ab5a9e8388563e097b5ce835601f01d2"
  },
  {
    "url": "assets/images/font-awesome/scss/_rotated-flipped.scss",
    "revision": "9f5d4bc6fadea89328d2aac26574a9d8"
  },
  {
    "url": "assets/images/font-awesome/scss/_stacked.scss",
    "revision": "5594237226aedfbca2fa1c7f4604c214"
  },
  {
    "url": "assets/images/font-awesome/scss/_variables.scss",
    "revision": "e2b60aa53e36271ec641c7efa93ec8aa"
  },
  {
    "url": "assets/images/font-awesome/scss/font-awesome.scss",
    "revision": "d2e25b243ec5c049cf838d3bfdb3afd0"
  },
  {
    "url": "assets/images/font/material-font-0.png",
    "revision": "80f368532605fe4ffcb5fa23a26a34e3"
  },
  {
    "url": "assets/images/font/material-font-4.png",
    "revision": "820f916b3d9f3b07216b08c90dcea46a"
  },
  {
    "url": "assets/images/font/material-font-5.png",
    "revision": "b7f43f567abefbf3d6fd2cb4f208b615"
  },
  {
    "url": "assets/images/fonts/glyphicons-halflings-regular.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "assets/images/fonts/glyphicons-halflings-regular.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "assets/images/fonts/glyphicons-halflings-regular.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "assets/images/fonts/glyphicons-halflings-regular.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "assets/images/fonts/glyphicons-halflings-regular.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "assets/images/game/Background_blur.jpg",
    "revision": "ad2504c71495121a658e0a361f20e2e1"
  },
  {
    "url": "assets/images/game/computer.png",
    "revision": "5228483fac230d3830f66fd5547a1f3c"
  },
  {
    "url": "assets/images/game/computer1.png",
    "revision": "81e6ed9b85225e5713a6d50355b4a525"
  },
  {
    "url": "assets/images/game/man-select.png",
    "revision": "28a39beafe0183d1d2eaa31cff1e6787"
  },
  {
    "url": "assets/images/game/man-select1.png",
    "revision": "309f323dca76751c7b76c6af6368821c"
  },
  {
    "url": "assets/images/game/man.png",
    "revision": "7ff7d04be3175d5facf3d8c4d8e54e9b"
  },
  {
    "url": "assets/images/game/man1.png",
    "revision": "524af477a9c4e61895b79fc0d98e9673"
  },
  {
    "url": "assets/images/game/wall.jpg",
    "revision": "26c5c98fb4304f96718e797fca474d73"
  },
  {
    "url": "assets/images/icons/apple-touch-icon-120x120.png",
    "revision": "a5f275f2676149718f2c8408a590eefa"
  },
  {
    "url": "assets/images/icons/apple-touch-icon-152x152.png",
    "revision": "16e0c4dd7f2b5727482256fb036f382f"
  },
  {
    "url": "assets/images/icons/apple-touch-icon-180x180.png",
    "revision": "bc0a815cea72003a903667e0f1de998c"
  },
  {
    "url": "assets/images/icons/apple-touch-icon-76x76.png",
    "revision": "18a9e419e4742c1e7772ef7a4472c03e"
  },
  {
    "url": "assets/images/icons/apple-touch-icon.png",
    "revision": "bc0a815cea72003a903667e0f1de998c"
  },
  {
    "url": "assets/images/icons/icon-hires.png",
    "revision": "bc0a815cea72003a903667e0f1de998c"
  },
  {
    "url": "assets/images/icons/icon-normal.png",
    "revision": "bc0a815cea72003a903667e0f1de998c"
  },
  {
    "url": "assets/images/img/-text.png",
    "revision": "6a907e0373eee544a8e42cc199aadf2c"
  },
  {
    "url": "assets/images/img/004.png",
    "revision": "759f8dac26775c37a2d86683ed903a7f"
  },
  {
    "url": "assets/images/img/150 (2).png",
    "revision": "0a4c8bd54c03f3c22530807f2c852644"
  },
  {
    "url": "assets/images/img/150.png",
    "revision": "859e5f4a60ca56f5df96f21e9262cdc3"
  },
  {
    "url": "assets/images/img/1B-01.jpg",
    "revision": "0d7bbbab0911d357cff151a840925658"
  },
  {
    "url": "assets/images/img/2A-01 (1).png",
    "revision": "749d2206e374af430f94aa280659c61b"
  },
  {
    "url": "assets/images/img/2A-01 (1)1.png",
    "revision": "93a7b03a25f9f9f82a8819d6706eedca"
  },
  {
    "url": "assets/images/img/2A-01.png",
    "revision": "68c306d345feb644ae961cf3db7c18d6"
  },
  {
    "url": "assets/images/img/2A-011.png",
    "revision": "db4b3d183ab233e4f13dca2ca6a66f58"
  },
  {
    "url": "assets/images/img/300 (2).png",
    "revision": "4423128cc63548e8e0bd76f3c3858632"
  },
  {
    "url": "assets/images/img/72 (2).png",
    "revision": "cf137d5051791dcf8b318be51eff52f6"
  },
  {
    "url": "assets/images/img/72.png",
    "revision": "8693a109e06049c379c21c93d17af2f8"
  },
  {
    "url": "assets/images/img/background.jpg",
    "revision": "c590011238128f313e5f5e2118d08dd6"
  },
  {
    "url": "assets/images/img/circle_play.png",
    "revision": "99233cfa67df945b46759117a8d8ee7f"
  },
  {
    "url": "assets/images/img/circle_print.png",
    "revision": "6046ad47d8a775c49500e8bb28fe3415"
  },
  {
    "url": "assets/images/img/circle_progress.png",
    "revision": "7631ca6c759b78f7b66ecfd397f9e342"
  },
  {
    "url": "assets/images/img/circle_study.png",
    "revision": "b08353f43beff62898d73db8acb5d56a"
  },
  {
    "url": "assets/images/img/circle_teach.png",
    "revision": "212942a8c0071da9fec5e50dff9d0560"
  },
  {
    "url": "assets/images/img/circle_test.png",
    "revision": "7e36f388aca541d6fcdc9bad8f66d5d2"
  },
  {
    "url": "assets/images/img/favicon.png",
    "revision": "537005427a3742a46dcbe8f53e48137f"
  },
  {
    "url": "assets/images/img/LOGO_150dpi.png",
    "revision": "cd76d0e11ff7338002d30e763cd04e36"
  },
  {
    "url": "assets/images/img/Untitled.png",
    "revision": "ced5ef0c10b466f3e0f2e64c082e69aa"
  },
  {
    "url": "assets/images/logo_print.png",
    "revision": "56172628c17fa5a40aa2b7e43c75ea5a"
  },
  {
    "url": "assets/images/logo-workshete.png",
    "revision": "a8e6a8279381f834beebaa1a25a77b9b"
  },
  {
    "url": "assets/images/logo.png",
    "revision": "e3bfdc01eef768d179ec477db488ae9d"
  },
  {
    "url": "assets/images/maps/blue_marker.png",
    "revision": "b0d11173a23556b4da3db3d5ab59f251"
  },
  {
    "url": "assets/images/worksheet_logo.jpg",
    "revision": "204e70cb231ad50ae2e8d4bc5dc5a43a"
  },
  {
    "url": "favicon.png",
    "revision": "537005427a3742a46dcbe8f53e48137f"
  },
  {
    "url": "fonts/fontawesome-webfont.eot",
    "revision": "f7c2b4b747b1a225eb8dee034134a1b0"
  },
  {
    "url": "fonts/fontawesome-webfont.svg",
    "revision": "2980083682e94d33a66eef2e7d612519"
  },
  {
    "url": "fonts/fontawesome-webfont.ttf",
    "revision": "706450d7bba6374ca02fe167d86685cb"
  },
  {
    "url": "fonts/fontawesome-webfont.woff",
    "revision": "d9ee23d59d0e0e727b51368b458a0bff"
  },
  {
    "url": "fonts/fontawesome-webfont.woff2",
    "revision": "97493d3f11c0a3bd5cbd959f5d19b699"
  },
  {
    "url": "fonts/FontAwesome.otf",
    "revision": "0b462f5cc07779cab3bef252c0271f2b"
  },
  {
    "url": "fonts/glyphicons-halflings-regular.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "fonts/glyphicons-halflings-regular.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "fonts/glyphicons-halflings-regular.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "fonts/glyphicons-halflings-regular.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "fonts/glyphicons-halflings-regular.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "fonts/Material-Design-Iconic-Font.eot",
    "revision": "83d896ed524d89eb7cb1273e26be3ea6"
  },
  {
    "url": "fonts/Material-Design-Iconic-Font.svg",
    "revision": "70871f7a0d91246a240238910a4f3074"
  },
  {
    "url": "fonts/Material-Design-Iconic-Font.ttf",
    "revision": "aa1af632841550199ebdf0c3cc1e47a6"
  },
  {
    "url": "fonts/Material-Design-Iconic-Font.woff",
    "revision": "a2a1ba89e7f9d29f7d5aee76e8b9f7ab"
  },
  {
    "url": "fonts/weathericons-regular-webfont.eot",
    "revision": "e7ef2b448d27cf5312a73ceb3e7841c4"
  },
  {
    "url": "fonts/weathericons-regular-webfont.svg",
    "revision": "b2233bc1525939550405c87cffede242"
  },
  {
    "url": "fonts/weathericons-regular-webfont.ttf",
    "revision": "2ca3df0981116e195ebc62dd1dcc8b9b"
  },
  {
    "url": "fonts/weathericons-regular-webfont.woff",
    "revision": "f5b0d0d9cb02e551003132e079435312"
  },
  {
    "url": "fonts/WeatherIcons-Regular.otf",
    "revision": "c3515971f93504a0e940990b1c7cbc1c"
  },
  {
    "url": "index.html",
    "revision": "6b18972459da74bc09a046b0b379ff7a"
  },
  {
    "url": "manifest.json",
    "revision": "c2c75ab0e96fffbefa02c9d292569696"
  },
  {
    "url": "styles/app-06604eaa.css",
    "revision": "0f895d621e3d4542dc10ac16ef9ce180"
  },
  {
    "url": "styles/vendor-1e518e16.css",
    "revision": "b44d3b91a0ebe684720a271b35a4fb28"
  },
  {
    "url": "test.html",
    "revision": "6e19cd645b9975c80b5dd5698570d468"
  }
]);

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
  // Use cache but update in the background ASAP
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName: 'css-cache',
  })
);


workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    // Use a custom cache name
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images
        maxEntries: 20,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);