function formatTitleForFilename(title) {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const cardsData = [
        // 1
        {
            id: '1',
            title: 'Menyusuri Keindahan Alam Indonesia: Surga Tropis di Setiap Sudut Nusantara',
            desc: 'Indonesia menawarkan keindahan alam yang luar biasa, dari pegunungan hingga pantai tropis. Artikel ini mengeksplorasi destinasi wisata alam terbaik, mulai dari Gunung Bromo yang megah hingga kepulauan Raja Ampat yang terkenal dengan keindahan bawah lautnya. Wisatawan dapat menikmati petualangan alam yang memanjakan mata dan jiwa di berbagai daerah Indonesia.',
            type: 'Wisata',
            type2: 'Wisata',
            membaca: 'belum membaca',
            imgBesar: 'https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=2540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

            img1: 'https://i.pinimg.com/736x/c0/61/9f/c0619ffe5a8d829a683a56c9425df09c.jpg',
            img2: 'https://i.pinimg.com/564x/da/87/61/da8761fc780343410d31ee0b62547e2d.jpg',

            text1: 'Indonesia, negeri yang dikenal sebagai zamrud khatulistiwa, menyimpan keindahan alam yang tiada tara. Dengan ribuan pulau yang tersebar dari Sabang hingga Merauke, pesona alam tropis Indonesia tak hanya memesona wisatawan lokal, tetapi juga mengundang decak kagum pelancong mancanegara. Dari pantai berpasir putih, hutan tropis yang lebat, hingga gunung-gunung yang menjulang tinggi, Indonesia menawarkan keindahan alam yang tak akan habis untuk dijelajahi.',
            text2: 'Pertama, mari kita singgah di Pulau Bali, destinasi yang menjadi ikon pariwisata Indonesia. Selain pantai-pantainya yang indah, Bali juga menawarkan pesona alam pegunungan seperti Gunung Batur yang memukau dengan pemandangan danau kaldera yang mengelilinginya. Desa-desa di sekitar Bali menyimpan kekayaan budaya dan alam yang berpadu harmonis, menjadikan Bali sebagai salah satu destinasi alam dan budaya terbaik di dunia.',
            text3: 'Melangkah ke wilayah timur Indonesia, terdapat Pulau Komodo yang menjadi rumah bagi hewan purba Komodo. Di sinilah wisatawan dapat merasakan petualangan alam yang unik, dari trekking di padang savana hingga menyelam di perairan jernih yang dihuni oleh terumbu karang berwarna-warni. Keindahan bawah laut di sini sungguh luar biasa, menjadikannya destinasi impian bagi para penyelam.',
            text4: 'Selanjutnya, kita menuju ke Raja Ampat, sebuah kepulauan di Papua Barat yang dijuluki surga bagi penyelam. Dengan lebih dari 600 pulau, Raja Ampat menawarkan keanekaragaman hayati laut yang luar biasa. Terumbu karang yang masih alami, ikan-ikan tropis beraneka warna, serta hamparan pasir putih yang seolah tak tersentuh membuat tempat ini bak surga tersembunyi.',
            text5: 'Tidak hanya pesisir yang menawarkan keindahan, dataran tinggi Indonesia juga menyimpan harta karun alam yang menakjubkan. Pegunungan Dieng di Jawa Tengah, misalnya, menawarkan pemandangan yang magis dengan hamparan ladang kentang, telaga berwarna-warni, serta kawah-kawah vulkanik yang masih aktif. Dieng juga dikenal sebagai tempat dengan udara yang sejuk dan suasana mistis, terutama saat matahari terbit di Bukit Sikunir.',
            text6: 'Di bagian barat Indonesia, kita dapat menemukan Taman Nasional Gunung Leuser di Aceh. Hutan tropis yang lebat di taman ini menjadi rumah bagi orangutan sumatra yang terancam punah. Trekking di Gunung Leuser memberikan pengalaman yang tak terlupakan, terutama bagi para pecinta alam yang ingin merasakan keasrian hutan hujan tropis.',
            text7: 'Kita tak boleh melupakan pesona Danau Toba, danau vulkanik terbesar di Asia Tenggara yang terletak di Sumatra Utara. Dengan pulau Samosir di tengahnya, Danau Toba menawarkan pemandangan alam yang tenang dan memikat. Di sini, wisatawan bisa bersantai menikmati keindahan danau sambil menikmati budaya Batak yang khas dan ramah.',
            text8: 'Pulau Lombok tak kalah menawan dengan Gunung Rinjani yang menjulang sebagai salah satu gunung tertinggi di Indonesia. Pendakian Gunung Rinjani menawarkan pemandangan luar biasa, mulai dari savana, air terjun, hingga Danau Segara Anak yang terletak di kawah gunung. Bagi pecinta alam dan pendaki, Rinjani merupakan tantangan sekaligus pengalaman yang memuaskan.',
            text9: 'Salah satu permata tersembunyi di Indonesia adalah Kepulauan Derawan di Kalimantan Timur. Pantai-pantainya yang masih asri, air laut yang jernih, serta keberagaman biota laut menjadikan Derawan sebagai salah satu destinasi wisata bahari yang harus dikunjungi. Tidak hanya itu, di sini wisatawan dapat menyaksikan penyu hijau yang bertelur di pantai-pantainya.',
            text10: 'Akhirnya, kita sampai di Sulawesi, tepatnya di Tana Toraja. Wilayah ini terkenal dengan keindahan alamnya yang dramatis, mulai dari bukit-bukit hijau hingga lembah-lembah subur. Selain keindahan alamnya, Tana Toraja juga memiliki budaya yang sangat unik, terutama dalam hal upacara pemakaman tradisional yang sering menarik perhatian wisatawan mancanegara.',

            pfp: '/img/lensV2.png',
            nama: 'Oggie',
            dibuat: '10 Oktober 2024',
            jam: '11:20 WIB',



            card1: 
            `
            <a href="/src/html/detail.html?id=1" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=2540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/lensV2.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Oggie</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">2 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Menyusuri Keindahan Alam Indonesia: Surga Tropis di Setiap Sudut Nusantara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia menawarkan keindahan alam yang luar biasa, dari pegunungan hingga pantai tropis. Artikel ini mengeksplorasi destinasi wisata alam terbaik, mulai dari Gunung Bromo yang megah hingga kepulauan Raja Ampat yang terkenal dengan keindahan bawah lautnya. Wisatawan dapat menikmati petualangan alam yang memanjakan mata dan jiwa di berbagai daerah Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Wisata</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=2" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/17/7a/68/177a6899ddaaa3cabdd6de4350a531e7.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Wisata Budaya Indonesia: Menelusuri Jejak Tradisi dan Sejarah Nusantara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia tidak hanya kaya akan keindahan alam, tetapi juga memiliki warisan budaya yang kuat. Artikel ini membahas wisata budaya yang membawa pengunjung pada perjalanan sejarah, seni, dan tradisi lokal. Dari Candi Borobudur yang megah hingga upacara adat di Toraja, wisata budaya Indonesia menawarkan pengalaman yang mendalam tentang kehidupan masyarakat lokal dan nilai-nilai yang dijaga turun-temurun.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Wisata</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=3" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://images.unsplash.com/photo-1523810804307-760585ed63cd?q=80&w=2837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/amar.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">ammar</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">4hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Pesona Pulau Tersembunyi: Destinasi Wisata Indonesia yang Belum Banyak Dijamah</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Artikel ini mengajak pembaca untuk mengeksplorasi pulau-pulau tersembunyi di Indonesia yang jarang dikunjungi wisatawan. Dari Pulau Weh di ujung barat hingga Kepulauan Kei di timur, artikel ini menyoroti keindahan alam yang masih alami, pantai yang sepi, dan kehidupan lokal yang autentik. Ideal untuk wisatawan yang ingin merasakan ketenangan dan keindahan tersembunyi Indonesia. Apakah tema ini sudah sesuai, atau ada yang ingin disesuaikan lebih lanjut?
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Wisata</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `
        },
        // 2
        {
            id: '2',
            title: 'Wisata Budaya Indonesia: Menelusuri Jejak Tradisi dan Sejarah Nusantara',
            desc: 'Indonesia tidak hanya kaya akan keindahan alam, tetapi juga memiliki warisan budaya yang kuat. Artikel ini membahas wisata budaya yang membawa pengunjung pada perjalanan sejarah, seni, dan tradisi lokal. Dari Candi Borobudur yang megah hingga upacara adat di Toraja, wisata budaya Indonesia menawarkan pengalaman yang mendalam tentang kehidupan masyarakat lokal dan nilai-nilai yang dijaga turun-temurun.',
            type: 'Wisata',
            type2: 'Wisata',

            membaca: 'belum membaca',
            imgBesar: 'https://images.unsplash.com/photo-1542897643-cfccd88c7127?q=80&w=2605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

            img1: 'https://i.pinimg.com/564x/93/32/24/93322466c1bddfc717c04b29c9d66bd3.jpg',
            img2: 'https://i.pinimg.com/564x/14/af/85/14af850bc7000b28f08ae1ef3a8b0891.jpg',

            text1: 'Indonesia, negeri dengan ribuan pulau dan suku bangsa, memiliki kekayaan budaya yang luar biasa. Setiap daerah di Nusantara menyimpan tradisi, adat istiadat, serta warisan sejarah yang masih terjaga hingga kini. Wisata budaya di Indonesia menjadi salah satu cara terbaik untuk memahami keragaman dan kekayaan yang dimiliki bangsa ini, sekaligus menjelajahi keindahan tradisi yang telah diwariskan dari generasi ke generasi.',
            text2: 'Salah satu tujuan wisata budaya yang paling terkenal adalah Yogyakarta, kota yang dikenal sebagai pusat kebudayaan Jawa. Di sini, wisatawan dapat mengunjungi Keraton Yogyakarta, istana raja yang masih berdiri megah dan menjadi saksi sejarah panjang kerajaan Mataram. Tak jauh dari keraton, Candi Borobudur dan Candi Prambanan menampilkan kejayaan seni arsitektur Hindu-Buddha yang mengagumkan, dan masih menjadi pusat ritual keagamaan hingga kini.',
            text3: 'Selain Yogyakarta, Bali juga menawarkan kekayaan budaya yang sangat kuat. Meskipun dikenal sebagai destinasi wisata pantai, Bali memiliki tradisi Hindu yang kental, seperti upacara keagamaan dan tarian-tarian sakral yang masih dilestarikan. Desa Ubud, misalnya, merupakan pusat seni dan budaya di mana wisatawan dapat menyaksikan pertunjukan tari Kecak, Barong, dan Legong yang memukau. Setiap tarian menceritakan kisah-kisah mitologi yang sarat makna dan nilai-nilai spiritual.',
            text4: 'Di Tanah Toraja, Sulawesi Selatan, wisatawan dapat melihat upacara kematian Rambu Solo yang terkenal di seluruh dunia. Bagi masyarakat Toraja, kematian bukanlah akhir, melainkan awal dari perjalanan menuju alam baka. Upacara pemakaman mereka dilakukan dengan sangat meriah dan penuh tradisi, menampilkan berbagai prosesi adat, rumah tongkonan yang ikonik, serta patung-patung tau-tau yang dipercaya sebagai representasi arwah leluhur.',
            text5: 'Tidak hanya di pulau besar, di Pulau Sumba, Nusa Tenggara Timur, wisatawan dapat melihat perayaan adat Pasola, sebuah tradisi perang berkuda yang dilakukan sebagai bagian dari ritual panen. Perang adat ini melibatkan dua kelompok pemuda yang saling melempar lembing dari atas kuda dengan kecepatan tinggi. Pasola bukan hanya sebuah pertunjukan, tetapi juga upacara yang sarat dengan makna spiritual untuk memohon kesuburan tanah.',
            text6: 'Pulau Kalimantan juga memiliki kekayaan budaya yang unik. Salah satunya adalah budaya Dayak yang masih terjaga di pedalaman. Suku Dayak terkenal dengan rumah panjang mereka, seni tato yang mendalam, serta tari-tarian yang menggambarkan kehidupan mereka yang menyatu dengan alam. Selain itu, Tiwah, upacara adat suku Dayak Ngaju, merupakan salah satu ritual besar yang bertujuan untuk menghantar arwah leluhur ke alam baka.',
            text7: 'Di Sumatra Barat, Minangkabau menawarkan warisan budaya matrilineal yang unik. Salah satu tradisi budaya yang bisa disaksikan adalah upacara adat pernikahan Minangkabau yang sarat dengan simbolisme. Selain itu, Rumah Gadang, rumah adat Minangkabau dengan atap bergonjong melengkung menyerupai tanduk kerbau, menjadi salah satu ciri khas arsitektur tradisional yang megah dan menakjubkan.',
            text8: 'Kepulauan Maluku juga memiliki jejak sejarah budaya yang kuat, terutama pada masa kejayaan perdagangan rempah-rempah. Di sini, wisatawan dapat mengunjungi berbagai benteng tua yang dibangun oleh bangsa Eropa, seperti Benteng Belgica di Banda Neira. Selain itu, masyarakat Maluku juga terkenal dengan musik dan tarian tradisional mereka, seperti tari Cakalele yang penuh semangat dan tarian perang yang menggetarkan.',
            text9: 'Tidak kalah menarik, Papua menawarkan wisata budaya yang sangat khas dan berbeda dari daerah lain. Suku Dani di Lembah Baliem terkenal dengan festival perang adat yang menjadi daya tarik tersendiri bagi wisatawan. Selain itu, rumah tradisional honai dan pakaian adat mereka yang terbuat dari kulit kayu dan anyaman menjadi simbol dari kehidupan masyarakat yang sederhana namun kaya akan nilai budaya.',
            text10: 'Setiap sudut Indonesia menyimpan kekayaan tradisi dan sejarah yang berbeda-beda, mencerminkan keragaman budaya Nusantara yang sangat luas. Wisata budaya tidak hanya sekadar menyaksikan upacara atau bangunan bersejarah, tetapi juga merasakan kehidupan masyarakat lokal yang masih memegang teguh warisan nenek moyang mereka. Melalui wisata budaya, kita diajak untuk menelusuri jejak-jejak sejarah dan tradisi yang membentuk identitas bangsa Indonesia yang beragam, namun tetap satu.',

            pfp: '/img/azka.png',
            nama: 'azka',
            dibuat: '7 Oktober 2024',
            jam: '09:23 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=1" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=2540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/lensV2.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Oggie</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">2 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Menyusuri Keindahan Alam Indonesia: Surga Tropis di Setiap Sudut Nusantara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia menawarkan keindahan alam yang luar biasa, dari pegunungan hingga pantai tropis. Artikel ini mengeksplorasi destinasi wisata alam terbaik, mulai dari Gunung Bromo yang megah hingga kepulauan Raja Ampat yang terkenal dengan keindahan bawah lautnya. Wisatawan dapat menikmati petualangan alam yang memanjakan mata dan jiwa di berbagai daerah Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Wisata</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=2" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/17/7a/68/177a6899ddaaa3cabdd6de4350a531e7.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Wisata Budaya Indonesia: Menelusuri Jejak Tradisi dan Sejarah Nusantara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia tidak hanya kaya akan keindahan alam, tetapi juga memiliki warisan budaya yang kuat. Artikel ini membahas wisata budaya yang membawa pengunjung pada perjalanan sejarah, seni, dan tradisi lokal. Dari Candi Borobudur yang megah hingga upacara adat di Toraja, wisata budaya Indonesia menawarkan pengalaman yang mendalam tentang kehidupan masyarakat lokal dan nilai-nilai yang dijaga turun-temurun.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Wisata</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=3" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://images.unsplash.com/photo-1523810804307-760585ed63cd?q=80&w=2837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/amar.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">ammar</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">4hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Pesona Pulau Tersembunyi: Destinasi Wisata Indonesia yang Belum Banyak Dijamah</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Artikel ini mengajak pembaca untuk mengeksplorasi pulau-pulau tersembunyi di Indonesia yang jarang dikunjungi wisatawan. Dari Pulau Weh di ujung barat hingga Kepulauan Kei di timur, artikel ini menyoroti keindahan alam yang masih alami, pantai yang sepi, dan kehidupan lokal yang autentik. Ideal untuk wisatawan yang ingin merasakan ketenangan dan keindahan tersembunyi Indonesia. Apakah tema ini sudah sesuai, atau ada yang ingin disesuaikan lebih lanjut?
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Wisata</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `



   
            
        },
        // 3
        {
            id: '3',
            title: 'Pesona Pulau Tersembunyi: Destinasi Wisata Indonesia yang Belum Banyak Dijamah',
            desc: 'Artikel ini mengajak pembaca untuk mengeksplorasi pulau-pulau tersembunyi di Indonesia yang jarang dikunjungi wisatawan. Dari Pulau Weh di ujung barat hingga Kepulauan Kei di timur, artikel ini menyoroti keindahan alam yang masih alami, pantai yang sepi, dan kehidupan lokal yang autentik. Ideal untuk wisatawan yang ingin merasakan ketenangan dan keindahan tersembunyi Indonesia. Apakah tema ini sudah sesuai, atau ada yang ingin disesuaikan lebih lanjut?',
            type: 'Wisata',
            type2: 'Wisata',

            membaca: 'belum membaca',
            imgBesar: 'https://images.unsplash.com/photo-1523810804307-760585ed63cd?q=80&w=2837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

            img1: 'https://i.pinimg.com/564x/cc/dc/4d/ccdc4d810158e9e750a11629c753c4ff.jpg',
            img2: 'https://i.pinimg.com/564x/52/1d/27/521d27e690547e5fb6a41b50253e59c8.jpg',

            text1: 'Indonesia, dengan lebih dari 17.000 pulau, menyimpan keindahan alam yang tak terhitung jumlahnya. Beberapa pulau telah menjadi destinasi wisata terkenal, seperti Bali, Lombok, atau Raja Ampat. Namun, di antara ribuan pulau tersebut, masih ada banyak permata tersembunyi yang belum banyak dijamah wisatawan. Pulau-pulau ini menawarkan keindahan alam yang tak kalah memukau, dengan suasana tenang dan alami, jauh dari keramaian turis.',
            text2: 'Salah satu pulau yang layak untuk dikunjungi adalah Pulau Sumba di Nusa Tenggara Timur. Meski mulai dikenal, Sumba tetap menyimpan pesona alam yang alami dan tradisi budaya yang kental. Pantai-pantainya yang sepi, seperti Pantai Nihiwatu, dianggap sebagai salah satu pantai terbaik di dunia. Selain itu, air terjun yang tersembunyi di pedalaman, seperti Air Terjun Lapopu, menawarkan pemandangan spektakuler bagi para penikmat alam.',
            text3: 'Berpindah ke timur, Pulau Alor di Nusa Tenggara Timur menawarkan keindahan bawah laut yang luar biasa. Pulau ini dikenal sebagai surga bagi para penyelam, dengan terumbu karang yang masih sangat terjaga dan air yang begitu jernih. Belum banyak wisatawan yang datang ke sini, membuat Alor menjadi tempat ideal untuk merasakan ketenangan sambil menikmati keindahan laut tanpa gangguan.',
            text4: 'Pulau Bawean di Jawa Timur merupakan salah satu destinasi tersembunyi yang menawarkan pesona alam yang memikat. Pulau ini memiliki danau air tawar yang indah, Danau Kastoba, yang dikelilingi hutan tropis. Selain itu, Pantai Gili Noko yang terletak di sekitar pulau ini menawarkan pasir putih yang lembut dan air laut yang jernih. Bawean juga terkenal dengan rusa endemik, yaitu Rusa Bawean, yang hidup bebas di pulau ini.',
            text5: 'Pulau Seram di Maluku menjadi tempat yang sempurna untuk para pecinta petualangan. Pulau ini menawarkan hutan lebat yang masih alami, sungai-sungai jernih, serta pantai-pantai eksotis. Salah satu destinasi yang paling menakjubkan di Seram adalah Teluk Sawai, sebuah teluk tenang yang dikelilingi oleh tebing-tebing curam dan laut biru. Selain itu, Pulau Seram juga dikenal dengan Taman Nasional Manusela, habitat dari berbagai satwa liar endemik.',
            text6: 'Bagi wisatawan yang mencari ketenangan dan keindahan alam bawah laut, Pulau Derawan di Kalimantan Timur adalah pilihan tepat. Pulau ini terkenal dengan keberagaman hayati lautnya, seperti penyu hijau dan ubur-ubur yang tidak menyengat. Selain itu, wisatawan juga dapat menyaksikan ikan pari manta raksasa di perairan sekitar pulau. Dengan jumlah pengunjung yang masih terbatas, Derawan menawarkan pengalaman yang eksklusif dan menenangkan.',
            text7: 'Tidak jauh dari Flores, terdapat Pulau Lembata yang juga belum banyak dijamah wisatawan. Pulau ini menawarkan pemandangan alam yang memukau, dengan pegunungan yang menjulang tinggi dan pantai-pantai yang masih alami. Salah satu daya tarik utama di Lembata adalah tradisi berburu paus secara tradisional di Desa Lamalera, yang telah dilakukan secara turun-temurun. Tradisi ini menjadi saksi dari hubungan erat masyarakat Lembata dengan laut.',
            text8: 'Pulau Morotai di Maluku Utara adalah destinasi lain yang penuh dengan sejarah dan keindahan alam. Pulau ini pernah menjadi pangkalan militer selama Perang Dunia II, sehingga wisatawan dapat menjelajahi bangkai pesawat dan bunker-bunker tua. Selain itu, Pantai Pulau Dodola yang terletak di sekitar Morotai menawarkan pasir putih yang membentang luas dan air laut yang biru jernih. Morotai adalah surga tersembunyi yang menyimpan jejak sejarah dan keindahan alam yang mempesona.',
            text9: 'Pulau Kei di Maluku Tenggara adalah destinasi tersembunyi yang masih sangat alami. Pantai Ngurtafur di Pulau Kei menawarkan fenomena alam yang unik, di mana pasir putih membentuk daratan sepanjang dua kilometer yang membelah lautan. Pulau-pulau kecil di sekitar Kei juga menawarkan keindahan bawah laut yang luar biasa, dengan terumbu karang yang masih alami dan ikan-ikan tropis yang berwarna-warni.',
            text10: 'Tidak kalah indah, Pulau Banyak di Aceh menjadi destinasi yang sempurna bagi wisatawan yang mencari ketenangan dan privasi. Pulau-pulau kecil yang tersebar di sekitar Kepulauan Banyak menawarkan pantai-pantai yang sepi, pasir putih lembut, dan perairan biru yang jernih. Pulau Banyak juga merupakan tempat yang tepat untuk snorkeling dan menyaksikan keindahan terumbu karang yang masih terjaga.',

            pfp: '/img/amar.png',
            nama: 'ammar',
            dibuat: '7 Oktober 2024',
            jam: '09:23 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=1" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=2540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/lensV2.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Oggie</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">2 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Menyusuri Keindahan Alam Indonesia: Surga Tropis di Setiap Sudut Nusantara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia menawarkan keindahan alam yang luar biasa, dari pegunungan hingga pantai tropis. Artikel ini mengeksplorasi destinasi wisata alam terbaik, mulai dari Gunung Bromo yang megah hingga kepulauan Raja Ampat yang terkenal dengan keindahan bawah lautnya. Wisatawan dapat menikmati petualangan alam yang memanjakan mata dan jiwa di berbagai daerah Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Wisata</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=2" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/17/7a/68/177a6899ddaaa3cabdd6de4350a531e7.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Wisata Budaya Indonesia: Menelusuri Jejak Tradisi dan Sejarah Nusantara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia tidak hanya kaya akan keindahan alam, tetapi juga memiliki warisan budaya yang kuat. Artikel ini membahas wisata budaya yang membawa pengunjung pada perjalanan sejarah, seni, dan tradisi lokal. Dari Candi Borobudur yang megah hingga upacara adat di Toraja, wisata budaya Indonesia menawarkan pengalaman yang mendalam tentang kehidupan masyarakat lokal dan nilai-nilai yang dijaga turun-temurun.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Wisata</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=3" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://images.unsplash.com/photo-1523810804307-760585ed63cd?q=80&w=2837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/amar.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">ammar</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">4hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Pesona Pulau Tersembunyi: Destinasi Wisata Indonesia yang Belum Banyak Dijamah</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Artikel ini mengajak pembaca untuk mengeksplorasi pulau-pulau tersembunyi di Indonesia yang jarang dikunjungi wisatawan. Dari Pulau Weh di ujung barat hingga Kepulauan Kei di timur, artikel ini menyoroti keindahan alam yang masih alami, pantai yang sepi, dan kehidupan lokal yang autentik. Ideal untuk wisatawan yang ingin merasakan ketenangan dan keindahan tersembunyi Indonesia. Apakah tema ini sudah sesuai, atau ada yang ingin disesuaikan lebih lanjut?
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Wisata</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `

  


        },
        // 4
        {
            id: '4',
            title: 'Warisan Kuliner Nusantara: Rasa dan Tradisi yang Mengikat Generasi',
            desc: 'mengeksplorasi pulau-pulau tersembunyi di Indonesia yang jarang dikunjungi wisatawan. Dari Pulau Weh di ujung barat hingga Kepulauan Kei di timur, artikel ini menyoroti keindahan alam yang masih alami, pantai yang sepi, dan kehidupan lokal yang autentik. Ideal untuk wisatawan yang ingin merasakan ketenangan dan keindahan tersembunyi Indonesia. Apakah tema ini sudah sesuai, atau ada yang ingin disesuaikan lebih lanjut?',
            type: 'Kuliner',
            type2: 'Kuliner',

            membaca: 'belum membaca',
            imgBesar: 'https://i.pinimg.com/564x/c4/b0/82/c4b082d6eb09cc8fb99b0418422805e6.jpg',

            img1: 'https://i.pinimg.com/736x/fe/cf/39/fecf3979d5db81044338ceaeced2fc02.jpg',
            img2: 'https://i.pinimg.com/564x/80/29/d0/8029d06311c5931cc792d9dd1d2cb956.jpg',

            text1: 'Indonesia bukan hanya kaya akan budaya dan tradisi, tetapi juga memiliki kekayaan kuliner yang tak ternilai harganya. Setiap daerah di Nusantara memiliki makanan khas yang mencerminkan identitas dan warisan budaya mereka. Lebih dari sekadar memuaskan selera, kuliner Nusantara juga sarat dengan nilai-nilai tradisi yang diwariskan dari generasi ke generasi. Dari Sabang sampai Merauke, berbagai hidangan khas menyimpan cerita, filosofi, dan rasa yang unik, menjadikannya salah satu harta nasional yang mengikat semua orang.',
            text2: 'Salah satu contoh kuliner legendaris Indonesia adalah Rendang, makanan khas Minangkabau yang terkenal ke seluruh penjuru dunia. Hidangan daging sapi yang dimasak perlahan dengan santan dan rempah-rempah ini memiliki makna filosofi mendalam tentang kesabaran dan ketekunan. Di Minangkabau, rendang tidak hanya menjadi hidangan untuk acara spesial, tetapi juga simbol kebersamaan dan keberanian dalam menghadapi tantangan hidup. Teknik memasaknya yang rumit juga mencerminkan kedalaman tradisi kuliner Indonesia yang sarat dengan keahlian dan kesabaran.',
            text3: 'Dari tanah Jawa, kita mengenal Gudeg dari Yogyakarta, makanan manis yang terbuat dari nangka muda yang dimasak dengan santan dan gula aren. Kuliner ini melambangkan kearifan lokal dalam mengolah bahan pangan yang sederhana menjadi makanan lezat. Selain itu, gudeg menjadi bagian tak terpisahkan dari identitas budaya Jawa yang penuh dengan kehalusan dan rasa manis dalam setiap lapisan sosial budayanya. Hidangan ini biasanya disajikan dengan nasi, ayam opor, telur pindang, dan sambal krecek, menciptakan harmoni rasa yang memanjakan lidah.',
            text4: 'Berpindah ke Bali, kita menemukan Babi Guling, hidangan yang sangat populer di kalangan masyarakat Hindu Bali. Hidangan ini umumnya disajikan dalam upacara keagamaan dan ritual adat, menjadikannya salah satu makanan yang sarat makna spiritual. Babi yang dipanggang secara perlahan dengan bumbu khas Bali ini menghasilkan rasa gurih yang tak tertandingi. Tradisi menyantap babi guling dalam perayaan besar mencerminkan betapa eratnya hubungan masyarakat Bali dengan adat istiadat dan agama yang mereka anut.',
            text5: 'Selain itu, Papeda dari Maluku dan Papua juga menjadi contoh kuliner yang sangat berakar pada kehidupan masyarakat lokal. Bubur sagu yang biasanya disajikan dengan ikan kuah kuning ini merupakan makanan pokok di daerah tersebut. Papeda bukan hanya simbol ketahanan pangan di wilayah timur Indonesia, tetapi juga mencerminkan keanekaragaman budaya dan kearifan lokal dalam memanfaatkan sumber daya alam setempat. Meski terlihat sederhana, papeda menyimpan filosofi kebersamaan, di mana cara makannya dilakukan secara kolektif dan meriah.',
            text6: 'Pulau Sumatra juga menawarkan kuliner kaya rempah, salah satunya adalah Pempek dari Palembang. Makanan berbahan dasar ikan tenggiri ini dihidangkan dengan kuah cuka yang asam dan pedas, menciptakan kombinasi rasa yang tajam dan menyegarkan. Pempek menjadi simbol kreativitas masyarakat Palembang dalam mengolah hasil laut yang melimpah menjadi makanan yang berkelas. Selain itu, makanan ini juga menjadi bagian dari tradisi kuliner yang terus berkembang seiring waktu, namun tetap mempertahankan resep asli yang diwariskan.',
            text7: 'Sate, hidangan sederhana yang terdiri dari daging yang ditusuk dan dibakar, juga memiliki banyak variasi di seluruh Indonesia. Dari Sate Madura dengan bumbu kacangnya yang gurih, hingga Sate Padang yang disajikan dengan saus kental pedas, setiap versi sate mencerminkan keanekaragaman budaya dan rasa di setiap daerah. Sate adalah bukti nyata bagaimana warisan kuliner Nusantara mampu beradaptasi dan berkembang sesuai dengan karakteristik bahan dan selera masyarakat lokal.',
            text8: 'Di Sulawesi, kita mengenal Coto Makassar, sup daging yang dimasak dengan aneka rempah dan disajikan dengan buras (sejenis lontong). Hidangan ini mencerminkan keahlian masyarakat Makassar dalam mengolah daging dengan rasa yang kaya. Coto Makassar juga sering menjadi menu andalan dalam acara-acara besar, seperti pernikahan atau perayaan keagamaan, menegaskan peran penting kuliner dalam kehidupan sosial masyarakat.',
            text9: 'Selain itu, Kerak Telor dari Betawi adalah salah satu makanan yang penuh sejarah. Makanan ini kerap disajikan dalam perayaan ulang tahun kota Jakarta, dan menjadi simbol perjuangan dan kreativitas masyarakat Betawi di tengah perubahan zaman. Terbuat dari beras ketan dan telur bebek yang dipanggang dengan arang, kerak telor memiliki rasa gurih dan tekstur yang renyah, menjadikannya salah satu kuliner yang tak lekang oleh waktu.',
            text10: 'Terakhir, kuliner dari Ternate dan Tidore seperti Gohu Ikan juga mencerminkan keanekaragaman rasa Indonesia. Gohu Ikan, yang sering disebut “sashimi dari Maluku,” adalah hidangan ikan mentah yang dibumbui dengan rempah-rempah lokal, seperti cabai, bawang merah, dan jeruk nipis. Makanan ini menonjolkan kesegaran bahan-bahan lokal dan teknik pengolahan sederhana yang tetap menjaga kualitas rasa.',

            pfp: '/img/amar.png',
            nama: 'ammar',
            dibuat: '10 Oktober 2024',
            jam: '10:22 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=4" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/c4/b0/82/c4b082d6eb09cc8fb99b0418422805e6.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/lensV2.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Oggie</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">2 menit yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Warisan Kuliner Nusantara: Rasa dan Tradisi yang Mengikat Generasi</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    mengeksplorasi pulau-pulau tersembunyi di Indonesia yang jarang dikunjungi wisatawan. Dari Pulau Weh di ujung barat hingga Kepulauan Kei di timur, artikel ini menyoroti keindahan alam yang masih alami, pantai yang sepi, dan kehidupan lokal yang autentik. Ideal untuk wisatawan yang ingin merasakan ketenangan dan keindahan tersembunyi Indonesia. Apakah tema ini sudah sesuai, atau ada yang ingin disesuaikan lebih lanjut?
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Kuliner</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=5" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/4b/d2/9a/4bd29a33347b4f1cab2254e8dff54046.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://asianwiki.com/images/3/32/Sweet_Home_3-Choi-Go.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Choi Go</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">14 hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Rempah-rempah: Harta Karun di Balik Kejayaan Kuliner Indonesia</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Menyusuri sejarah rempah-rempah Indonesia yang menjadi kunci kelezatan banyak hidangan Nusantara. Artikel ini mengeksplorasi bagaimana Indonesia menjadi pusat perdagangan rempah dunia pada masa lampau dan bagaimana rempah-rempah seperti kunyit, cengkeh, pala, dan kayu manis masih menjadi elemen penting dalam menciptakan kelezatan kuliner modern.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Kuliner</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=6" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/a1/b7/71/a1b7718c18e2afe299187e6986d18fcf.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://asianwiki.com/images/3/32/Sweet_Home_3-Choi-Go.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Choi Go</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">7 hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Street Food Indonesia: Eksplorasi Rasa dari Pinggir Jalan Hingga Ke Mancanegara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia terkenal dengan ragam makanan kaki lima yang menggugah selera. Dari nasi goreng hingga sate, artikel ini membahas fenomena street food di Indonesia yang tak hanya menjadi favorit lokal, tetapi juga semakin dikenal di dunia internasional. Berbagai cerita di balik pedagang kecil dan kreativitas dalam menciptakan menu unik menjadi bagian penting dari pengalaman kuliner Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Kuliner</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `
        },
        // 5
        {
            id: '5',
            title: 'Rempah-rempah: Harta Karun di Balik Kejayaan Kuliner Indonesia',
            desc: 'Menyusuri sejarah rempah-rempah Indonesia yang menjadi kunci kelezatan banyak hidangan Nusantara. Artikel ini mengeksplorasi bagaimana Indonesia menjadi pusat perdagangan rempah dunia pada masa lampau dan bagaimana rempah-rempah seperti kunyit, cengkeh, pala, dan kayu manis masih menjadi elemen penting dalam menciptakan kelezatan kuliner modern.',
            type: 'Kuliner',
            type2: 'Kuliner',

            membaca: '2 menit membaca',
            imgBesar: 'https://i.pinimg.com/564x/4b/d2/9a/4bd29a33347b4f1cab2254e8dff54046.jpg',

            img1: 'https://i.pinimg.com/564x/00/6a/bb/006abbf13bae11f6cbc77e2172310ab1.jpg',
            img2: 'https://i.pinimg.com/564x/b8/8f/ee/b88fee148a7812a5888f22a34030879b.jpg',

            text1: 'Rempah-rempah telah lama menjadi bagian penting dari sejarah, budaya, dan kuliner Indonesia. Sejak zaman dahulu, Nusantara dikenal sebagai "Kepulauan Rempah-Rempah" yang menjadi daya tarik utama bagi para pedagang dari berbagai belahan dunia, termasuk Arab, Tiongkok, India, hingga Eropa. Keberagaman rempah-rempah di Indonesia tidak hanya memperkaya rasa dalam setiap hidangan, tetapi juga membawa pengaruh besar dalam perekonomian dan kebudayaan Nusantara. Hingga kini, rempah-rempah tetap menjadi harta karun di balik kejayaan kuliner Indonesia.',
            text2: 'Di antara banyaknya jenis rempah yang ada, cengkih dan pala merupakan dua rempah paling berharga yang pernah mengubah sejarah dunia. Kedua rempah ini banyak ditemukan di Kepulauan Maluku dan pada masa lalu menjadi salah satu komoditas yang diperebutkan oleh bangsa-bangsa Eropa. Mereka rela menjelajah ribuan kilometer demi memperoleh rempah-rempah ini, yang kala itu setara dengan emas. Cengkih dan pala tidak hanya berfungsi sebagai penyedap makanan, tetapi juga sebagai bahan obat-obatan, parfum, dan pengawet makanan.',
            text3: 'Lada, atau yang sering disebut sebagai "King of Spices," juga memiliki peran penting dalam perdagangan rempah-rempah dunia. Lada hitam dan lada putih dari Sumatra dan Kalimantan sangat diminati oleh pasar internasional. Dalam masakan Indonesia, lada sering digunakan untuk memberikan rasa pedas yang hangat dan menggigit. Sifatnya yang serbaguna membuat lada menjadi rempah andalan dalam banyak masakan Nusantara, seperti sup, tumisan, dan bahkan sambal.',
            text4: 'Rempah lain yang tidak kalah penting adalah kunyit, yang memberi warna kuning cerah pada banyak hidangan tradisional Indonesia. Selain sebagai pewarna alami, kunyit juga memberikan rasa yang khas dan memiliki manfaat kesehatan, seperti antiinflamasi dan antiseptik. Kunyit sering digunakan dalam masakan seperti gulai, rendang, dan soto, memberikan kedalaman rasa yang kaya dan aromatik.',
            text5: 'Jahe, dengan rasa pedas dan hangatnya, juga menjadi salah satu rempah yang paling sering digunakan dalam kuliner Indonesia. Jahe tidak hanya memberikan rasa unik pada masakan, tetapi juga dikenal karena khasiatnya yang dapat menghangatkan tubuh, mengobati masuk angin, dan meningkatkan sistem kekebalan tubuh. Jahe biasa digunakan dalam minuman tradisional seperti wedang jahe dan dalam masakan seperti semur atau opor.',
            text6: 'Selain jahe, lengkuas juga sering ditemukan dalam masakan Nusantara, terutama dalam hidangan berkuah atau yang berbahan dasar santan. Lengkuas memiliki rasa yang lebih tajam dibanding jahe, memberikan kehangatan dan keharuman tersendiri pada masakan. Lengkuas biasanya digunakan dalam masakan seperti sayur lodeh, ayam bumbu rujak, atau opor ayam.',
            text7: 'Kencur, yang sering kali dianggap sebagai bumbu wajib dalam beberapa masakan Jawa dan Sunda, memiliki aroma dan rasa yang khas, sedikit pahit dan pedas. Kencur biasanya digunakan dalam masakan seperti urap, pecel, dan sambal kencur. Selain itu, kencur juga sering digunakan dalam ramuan tradisional atau jamu karena dipercaya memiliki khasiat untuk mengobati batuk dan meningkatkan stamina.',
            text8: 'Di wilayah Sumatra, khususnya dalam masakan Padang, penggunaan asam kandis dan asam gelugur memberikan rasa asam yang segar dan seimbang pada masakan seperti gulai atau asam padeh. Kedua jenis asam ini menjadi ciri khas yang memberikan dimensi rasa berbeda pada masakan berbahan dasar daging dan ikan di daerah tersebut.',
            text9: 'Penggunaan kapulaga dan kayu manis juga menjadi bagian integral dari beberapa hidangan manis dan gurih Nusantara. Kapulaga sering ditemukan dalam masakan Aceh dan masakan Timur Tengah yang diperkenalkan oleh pedagang Arab, sementara kayu manis banyak digunakan dalam masakan tradisional Jawa, seperti gudeg dan jenang. Kedua rempah ini memberikan rasa manis alami dan aroma wangi yang membuat makanan semakin lezat.',
            text10: 'Di Sulawesi dan Maluku, ada rempah unik yang sering digunakan dalam hidangan khas, yaitu daun pandan dan daun jeruk purut. Kedua daun ini memberikan aroma segar dan wangi yang khas, sering digunakan dalam masakan berkuah atau makanan penutup seperti kue-kue tradisional. Aromanya yang khas menambah dimensi kelezatan dalam hidangan, memberikan kesan yang mendalam bagi siapa pun yang mencicipinya.',

            pfp: 'https://asianwiki.com/images/3/32/Sweet_Home_3-Choi-Go.jpg',
            nama: 'Choi Go',
            dibuat: '10 Oktober 2024',
            jam: '10:22 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=4" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/c4/b0/82/c4b082d6eb09cc8fb99b0418422805e6.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/lensV2.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Oggie</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">2 menit yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Warisan Kuliner Nusantara: Rasa dan Tradisi yang Mengikat Generasi</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    mengeksplorasi pulau-pulau tersembunyi di Indonesia yang jarang dikunjungi wisatawan. Dari Pulau Weh di ujung barat hingga Kepulauan Kei di timur, artikel ini menyoroti keindahan alam yang masih alami, pantai yang sepi, dan kehidupan lokal yang autentik. Ideal untuk wisatawan yang ingin merasakan ketenangan dan keindahan tersembunyi Indonesia. Apakah tema ini sudah sesuai, atau ada yang ingin disesuaikan lebih lanjut?
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Kuliner</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=5" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/4b/d2/9a/4bd29a33347b4f1cab2254e8dff54046.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://asianwiki.com/images/3/32/Sweet_Home_3-Choi-Go.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Choi Go</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">14 hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Rempah-rempah: Harta Karun di Balik Kejayaan Kuliner Indonesia</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Menyusuri sejarah rempah-rempah Indonesia yang menjadi kunci kelezatan banyak hidangan Nusantara. Artikel ini mengeksplorasi bagaimana Indonesia menjadi pusat perdagangan rempah dunia pada masa lampau dan bagaimana rempah-rempah seperti kunyit, cengkeh, pala, dan kayu manis masih menjadi elemen penting dalam menciptakan kelezatan kuliner modern.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Kuliner</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=6" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/a1/b7/71/a1b7718c18e2afe299187e6986d18fcf.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://asianwiki.com/images/3/32/Sweet_Home_3-Choi-Go.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Choi Go</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">7 hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Street Food Indonesia: Eksplorasi Rasa dari Pinggir Jalan Hingga Ke Mancanegara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia terkenal dengan ragam makanan kaki lima yang menggugah selera. Dari nasi goreng hingga sate, artikel ini membahas fenomena street food di Indonesia yang tak hanya menjadi favorit lokal, tetapi juga semakin dikenal di dunia internasional. Berbagai cerita di balik pedagang kecil dan kreativitas dalam menciptakan menu unik menjadi bagian penting dari pengalaman kuliner Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Kuliner</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `


        },
        // 6
        {
            id: '6',
            title: 'Street Food Indonesia: Eksplorasi Rasa dari Pinggir Jalan Hingga Ke Mancanegara',
            desc: 'Indonesia terkenal dengan ragam makanan kaki lima yang menggugah selera. Dari nasi goreng hingga sate, artikel ini membahas fenomena street food di Indonesia yang tak hanya menjadi favorit lokal, tetapi juga semakin dikenal di dunia internasional. Berbagai cerita di balik pedagang kecil dan kreativitas dalam menciptakan menu unik menjadi bagian penting dari pengalaman kuliner Indonesia.',
            type: 'Kuliner',
            type2: 'Kuliner',

            membaca: '2 menit membaca',
            imgBesar: 'https://i.pinimg.com/564x/a1/b7/71/a1b7718c18e2afe299187e6986d18fcf.jpg',

            img1: 'https://i.pinimg.com/564x/b1/ca/f9/b1caf9ee21b8d6c638c82f50c2123194.jpg',
            img2: 'https://i.pinimg.com/736x/e7/10/38/e71038db5de647fd92969d36b1615b52.jpg',

            text1: 'Indonesia terkenal dengan keanekaragaman budaya dan kuliner yang melimpah, dan salah satu aspek paling menarik dari kuliner Tanah Air adalah street food atau makanan kaki lima. Makanan ini tidak hanya sekadar hidangan yang dijual di pinggir jalan, tetapi juga merupakan representasi dari tradisi, kreativitas, dan kehidupan sehari-hari masyarakat Indonesia. Dari Sabang sampai Merauke, setiap daerah memiliki sajian khas yang menawarkan eksplorasi rasa yang kaya, menjadikan street food Indonesia layak diperkenalkan ke kancah internasional.',
            text2: 'Salah satu makanan kaki lima yang paling terkenal di Indonesia adalah Nasi Goreng. Dengan campuran nasi yang digoreng bersama bumbu, sayuran, dan protein seperti ayam, telur, atau udang, nasi goreng menjadi hidangan yang mudah dijumpai di mana saja. Variasi nasi goreng yang berbeda dari setiap daerah menambah daya tariknya. Misalnya, Nasi Goreng Kambing dari Jakarta atau Nasi Goreng Kampung yang lebih sederhana namun kaya rasa. Menikmati nasi goreng di pinggir jalan sambil menikmati suasana malam merupakan pengalaman yang tidak terlupakan.',
            text3: 'Sate adalah street food lainnya yang sangat populer di Indonesia. Tersedia dalam berbagai variasi daging, seperti ayam, sapi, kambing, dan ikan, sate biasanya disajikan dengan bumbu kacang atau sambal kecap. Setiap daerah memiliki ciri khas sate masing-masing, seperti Sate Madura yang terkenal dengan bumbu kacangnya yang kental dan manis, serta Sate Padang yang disajikan dengan kuah kental berwarna kuning. Keberadaan pedagang sate yang menggunakan arang untuk membakar dagingnya memberikan aroma yang menggugah selera, menjadikannya hidangan yang selalu dinanti-nanti.',
            text4: 'Di sisi lain, Bakso juga menjadi favorit di kalangan pecinta street food. Bola daging yang terbuat dari campuran daging sapi, tepung tapioka, dan bumbu ini biasanya disajikan dalam kuah kaldu yang hangat. Bakso dapat ditemukan di berbagai tempat, mulai dari gerobak kaki lima hingga restoran. Pelengkap seperti mie, tofu, dan sambal memberikan variasi rasa yang lebih kaya. Bakso bukan hanya sekadar makanan, tetapi juga menjadi simbol persahabatan, di mana seringkali orang berkumpul dan berbagi mangkuk bakso bersama.',
            text5: 'Sementara itu, Gado-Gado adalah salad khas Indonesia yang kaya akan sayuran segar, tahu, tempe, dan telur, disajikan dengan saus kacang yang kental dan gurih. Makanan ini mencerminkan gaya hidup sehat dan kreatif dalam mengolah sayuran. Gado-gado biasanya dijual di gerobak atau warung, dan menjadi pilihan yang populer untuk makan siang. Setiap suapan gado-gado memberikan perpaduan rasa manis, pedas, dan segar yang menyegarkan.',
            text6: 'Tidak ketinggalan, Martabak menjadi salah satu street food yang sangat dicari, baik dalam versi manis maupun gurih. Martabak manis diisi dengan cokelat, keju, dan kacang, sedangkan martabak gurih biasanya diisi dengan telur, daging, dan bumbu rempah. Keduanya dimasak di atas teflon hingga renyah dan disajikan hangat. Martabak seringkali menjadi teman nongkrong yang asyik, terutama di malam hari, dan menjadi simbol kebersamaan di kalangan teman-teman.',
            text7: 'Pempek, makanan khas Palembang, adalah hidangan yang terbuat dari ikan tenggiri dan sagu. Pempek biasanya disajikan dengan kuah cuka yang asam, memberikan kombinasi rasa yang unik. Pempek hadir dalam berbagai bentuk, seperti pempek kapal selam yang diisi dengan telur, atau pempek lenjer yang lebih sederhana. Keberadaan pempek di pinggir jalan menjadi daya tarik tersendiri bagi wisatawan yang ingin mencicipi makanan khas daerah.',
            text8: 'Di Bali, Anda akan menemukan Babi Guling, hidangan yang sering disajikan dalam acara-acara spesial. Daging babi yang dipanggang hingga kulitnya menjadi renyah ini, disajikan dengan nasi, sayur, dan sambal. Makanan ini tidak hanya merupakan kuliner, tetapi juga bagian dari tradisi dan budaya masyarakat Bali. Menikmati babi guling di pinggir jalan sambil menikmati pemandangan alam Bali adalah pengalaman yang sangat menarik.',
            text9: 'Makanan penutup khas street food Indonesia juga tidak kalah menggoda, seperti Es Campur dan Rujak. Es campur adalah minuman segar yang terdiri dari campuran buah-buahan, jelly, dan sirup manis, cocok dinikmati saat cuaca panas. Rujak, di sisi lain, adalah salad buah yang disajikan dengan bumbu pedas manis, memberikan sensasi rasa yang unik. Keduanya menjadi penutup yang sempurna setelah menikmati hidangan utama.',
            text10: 'Dengan keberagaman dan kekayaan rasa yang ditawarkan, street food Indonesia telah menarik perhatian dunia. Banyak turis yang rela berkeliling kota untuk mencicipi setiap hidangan kaki lima yang ada. Street food bukan hanya soal makan, tetapi juga tentang pengalaman, cerita, dan budaya. Melalui setiap suapan, kita dapat merasakan getaran kehidupan masyarakat Indonesia, yang penuh warna dan rasa.',

            pfp: 'https://asianwiki.com/images/3/32/Sweet_Home_3-Choi-Go.jpg',
            nama: 'Choi Go',
            dibuat: '4 Oktober 2024',
            jam: '04:08 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=4" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/c4/b0/82/c4b082d6eb09cc8fb99b0418422805e6.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/lensV2.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Oggie</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">2 menit yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Warisan Kuliner Nusantara: Rasa dan Tradisi yang Mengikat Generasi</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    mengeksplorasi pulau-pulau tersembunyi di Indonesia yang jarang dikunjungi wisatawan. Dari Pulau Weh di ujung barat hingga Kepulauan Kei di timur, artikel ini menyoroti keindahan alam yang masih alami, pantai yang sepi, dan kehidupan lokal yang autentik. Ideal untuk wisatawan yang ingin merasakan ketenangan dan keindahan tersembunyi Indonesia. Apakah tema ini sudah sesuai, atau ada yang ingin disesuaikan lebih lanjut?
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Kuliner</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=5" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/4b/d2/9a/4bd29a33347b4f1cab2254e8dff54046.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://asianwiki.com/images/3/32/Sweet_Home_3-Choi-Go.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Choi Go</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">14 hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Rempah-rempah: Harta Karun di Balik Kejayaan Kuliner Indonesia</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Menyusuri sejarah rempah-rempah Indonesia yang menjadi kunci kelezatan banyak hidangan Nusantara. Artikel ini mengeksplorasi bagaimana Indonesia menjadi pusat perdagangan rempah dunia pada masa lampau dan bagaimana rempah-rempah seperti kunyit, cengkeh, pala, dan kayu manis masih menjadi elemen penting dalam menciptakan kelezatan kuliner modern.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Kuliner</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=6" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/a1/b7/71/a1b7718c18e2afe299187e6986d18fcf.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://asianwiki.com/images/3/32/Sweet_Home_3-Choi-Go.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Choi Go</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">7 hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Street Food Indonesia: Eksplorasi Rasa dari Pinggir Jalan Hingga Ke Mancanegara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia terkenal dengan ragam makanan kaki lima yang menggugah selera. Dari nasi goreng hingga sate, artikel ini membahas fenomena street food di Indonesia yang tak hanya menjadi favorit lokal, tetapi juga semakin dikenal di dunia internasional. Berbagai cerita di balik pedagang kecil dan kreativitas dalam menciptakan menu unik menjadi bagian penting dari pengalaman kuliner Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Kuliner</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `


        },
        // 7
        {
            id: '7',
            title: 'Eksplorasi Batik Nusantara: Warna, Motif, dan Filosofi di Setiap Guratan',
            desc: 'Batik bukan sekadar kain, melainkan seni yang penuh makna dan simbolisme di setiap motifnya. Artikel ini menggali keindahan dan keunikan batik dari berbagai daerah di Indonesia, seperti Batik Parang dari Yogyakarta dan Batik Mega Mendung dari Cirebon. Di balik keindahan visualnya, setiap pola batik mengandung cerita tentang filosofi hidup, alam, dan budaya setempat, yang terus lestari dan diakui dunia.',
            type: 'Seni & Kerajinan',
            type2: 'Seni & Kerajinan',

            membaca: 'belum membaca',
            imgBesar: 'https://i.pinimg.com/564x/1d/e2/fa/1de2fa25c21fb53c0d609a8fa285a3ab.jpg',

            img1: 'https://i.pinimg.com/564x/b4/26/12/b42612c59dab52584e3abf28f781c1a1.jpg',
            img2: 'https://i.pinimg.com/564x/4e/76/30/4e763023b4cff914853f24ba10fdcee0.jpg',

            text1: 'Batik, sebagai salah satu warisan budaya Indonesia yang diakui oleh UNESCO, memiliki makna dan nilai yang mendalam. Seni melukis dan mencetak pola pada kain ini bukan hanya sekadar kerajinan tangan, tetapi juga sebuah bentuk ekspresi budaya yang kaya akan sejarah dan filosofi. Dari Sabang hingga Merauke, setiap daerah di Indonesia memiliki ciri khas batik yang unik, baik dari segi warna, motif, maupun makna yang terkandung di dalamnya. Melalui eksplorasi batik Nusantara, kita akan menemukan keindahan dan kedalaman budaya yang terjalin dalam setiap guratan.',
            text2: 'Warna dalam batik memiliki peran yang sangat penting. Setiap warna memiliki makna tersendiri yang bisa merefleksikan suasana hati atau karakter pemakainya. Misalnya, warna merah seringkali melambangkan keberanian dan semangat, sementara biru melambangkan ketenangan dan kedamaian. Hijau mewakili kesuburan dan harapan, sedangkan kuning biasanya diasosiasikan dengan kebijaksanaan dan kemakmuran. Penggunaan warna ini tidak hanya sekadar untuk keindahan visual, tetapi juga sebagai simbol yang mencerminkan nilai-nilai dan kepercayaan masyarakat.',
            text3: 'Motif batik pun bervariasi dari satu daerah ke daerah lainnya. Setiap motif tidak hanya indah dilihat, tetapi juga memiliki cerita dan filosofi yang mendalam. Contohnya, motif Parang yang berasal dari Yogyakarta melambangkan kekuatan dan ketahanan. Motif ini menggambarkan gelombang laut yang tak pernah berhenti, mencerminkan semangat perjuangan dan kehidupan yang terus mengalir. Di sisi lain, motif Kawung yang terinspirasi dari bentuk buah aren ini melambangkan keadilan dan kesucian. Motif-motif ini menjadi representasi dari nilai-nilai yang dijunjung tinggi oleh masyarakat di setiap daerah.',
            text4: 'Batik Batik Solo dan Batik Yogyakarta dikenal dengan corak klasik dan elegan. Batik Solo biasanya menggunakan warna-warna alami dan memiliki motif yang lebih halus, sementara batik Yogyakarta seringkali lebih berani dalam warna dan motifnya. Batik Yogyakarta juga kerap memadukan unsur-unsur tradisi dengan inovasi modern, menjadikannya sangat menarik bagi generasi muda. Sementara itu, batik dari Cirebon terkenal dengan motif yang ceria dan penuh warna, seperti motif Mega Mendung, yang menggambarkan awan mendung dan melambangkan harapan akan hujan yang membawa berkah.',
            text5: 'Di Sumatra, batik Palembang memiliki ciri khas dengan penggunaan warna-warna cerah dan motif yang terinspirasi dari budaya lokal. Batik Palembang biasanya menggunakan motif Siti Hinggil yang menggambarkan keindahan alam sekitar, serta kekayaan budaya yang dimiliki oleh masyarakat. Motif ini tidak hanya menjadi hiasan, tetapi juga mengisahkan keindahan dan kearifan lokal.',
            text6: 'Batik juga memainkan peran penting dalam berbagai upacara dan perayaan. Di Jawa, misalnya, batik sering dikenakan dalam acara-acara adat, pernikahan, dan upacara resmi. Setiap motif dan warna yang dipilih tidak sembarangan; ada makna yang mendalam di baliknya. Pemilihan batik yang tepat dalam sebuah acara mencerminkan penghormatan kepada tradisi dan nilai-nilai yang dijunjung oleh masyarakat. Dalam konteks ini, batik tidak hanya berfungsi sebagai pakaian, tetapi juga sebagai simbol identitas dan kebanggaan.',
            text7: 'Pembuatan batik merupakan proses yang memerlukan ketelatenan dan keahlian tinggi. Proses ini dimulai dengan pemilihan kain, biasanya menggunakan kain katun atau silk, yang kemudian dilukis atau dicetak dengan lilin malam. Setelah itu, kain akan dicelupkan ke dalam pewarna. Proses pencelupan dan penghilangan lilin akan menciptakan pola yang khas. Teknik batik tulis, di mana setiap motif digambar tangan, memerlukan waktu dan ketelitian yang sangat tinggi, sedangkan teknik batik cap menggunakan stempel untuk mencetak motif yang lebih cepat.',
            text8: 'Dengan perkembangan zaman, batik juga mulai berinovasi. Banyak desainer muda yang mengadopsi elemen-elemen batik dalam fashion modern, menciptakan pakaian yang stylish namun tetap menghormati tradisi. Batik kini tidak hanya terbatas pada pakaian formal, tetapi juga digunakan dalam busana kasual, aksesori, hingga interior rumah. Hal ini menunjukkan bahwa batik tetap relevan dan dapat beradaptasi dengan tren fashion global, tanpa kehilangan esensinya sebagai warisan budaya.',
            text9: 'Kesadaran akan pentingnya melestarikan batik semakin meningkat di kalangan masyarakat. Banyak komunitas yang berupaya untuk mengajarkan generasi muda tentang teknik pembuatan batik dan makna di balik setiap motif. Selain itu, berbagai festival batik dan pameran seni diadakan untuk memperkenalkan keindahan batik kepada dunia luar. Inisiatif ini tidak hanya bertujuan untuk menjaga warisan budaya, tetapi juga untuk memberikan kesempatan bagi para perajin batik untuk memperluas pasar dan meningkatkan kesejahteraan mereka.',
            text10: 'Eksplorasi batik Nusantara adalah perjalanan yang tak hanya mengungkap keindahan visual, tetapi juga kedalaman makna yang terkandung di dalamnya. Setiap motif, warna, dan filosofi yang ada dalam batik mencerminkan kehidupan, nilai, dan kebijaksanaan masyarakat Indonesia. Dengan melestarikan dan mengembangkan seni batik, kita turut serta dalam menjaga identitas budaya yang kaya dan berharga, serta mengenalkan keindahan batik kepada dunia. Batik bukan hanya sekadar kain, tetapi juga sebuah cerita yang hidup, menggambarkan perjalanan panjang budaya Nusantara.',

            pfp: '/img/azka.png',
            nama: 'azka',
            dibuat: '20 Oktober 2024',
            jam: '04:08 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=7" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/1d/e2/fa/1de2fa25c21fb53c0d609a8fa285a3ab.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">4 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Eksplorasi Batik Nusantara: Warna, Motif, dan Filosofi di Setiap Guratan
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Batik bukan sekadar kain, melainkan seni yang penuh makna dan simbolisme di setiap motifnya. Artikel ini menggali keindahan dan keunikan batik dari berbagai daerah di Indonesia, seperti Batik Parang dari Yogyakarta dan Batik Mega Mendung dari Cirebon. Di balik keindahan visualnya, setiap pola batik mengandung cerita tentang filosofi hidup, alam, dan budaya setempat, yang terus lestari dan diakui dunia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Seni & Kerajina</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=8" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/736x/48/66/ae/4866ae94a99902d7351dfa79bb8a3fa4.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/amar.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">ammar</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Tenun Ikat: Kain Tradisional yang Merajut Warna dan Sejarah Nusantara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Tenun ikat adalah salah satu kerajinan tangan tradisional yang paling rumit dan penuh nilai artistik di Indonesia. Artikel ini mengeksplorasi seni pembuatan tenun ikat dari berbagai daerah, seperti Sumba dan Flores. Dengan teknik yang diwariskan turun-temurun, kain tenun ini memadukan warna alami dan motif yang menceritakan sejarah, kepercayaan, dan kehidupan sehari-hari masyarakat lokal.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Seni & Kerajinan</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=9" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/37/ed/3b/37ed3b1d8a1dcb6bd85839ae7bcff142.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://i.pinimg.com/736x/47/8a/89/478a89cdd089bee40a85842323d16199.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Seo ah-yi</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">10hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Kerajinan Tangan Indonesia: Dari Anyaman Bambu hingga Ukiran Kayu Jepara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia kaya akan kerajinan tangan yang mencerminkan keahlian dan kreativitas masyarakat lokal. Artikel ini membahas beragam kerajinan tradisional seperti anyaman bambu dari Kalimantan, perak dari Yogyakarta, hingga ukiran kayu Jepara yang terkenal. Setiap kerajinan ini tidak hanya memiliki nilai estetika tinggi, tetapi juga menjadi cerminan dari kearifan lokal yang terus dipertahankan dan dikembangkan oleh para pengrajin.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Seni & Kerajinar</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `
        },
        // 8
        {
            id: '8',
            title: 'Tenun Ikat: Kain Tradisional yang Merajut Warna dan Sejarah Nusantara',
            desc: 'Tenun ikat adalah salah satu kerajinan tangan tradisional yang paling rumit dan penuh nilai artistik di Indonesia. Artikel ini mengeksplorasi seni pembuatan tenun ikat dari berbagai daerah, seperti Sumba dan Flores. Dengan teknik yang diwariskan turun-temurun, kain tenun ini memadukan warna alami dan motif yang menceritakan sejarah, kepercayaan, dan kehidupan sehari-hari masyarakat lokal.',
            type: 'Seni & Kerajinan',
            type2: 'Seni & Kerajinan',

            membaca: 'belum membaca',
            imgBesar: 'https://i.pinimg.com/736x/48/66/ae/4866ae94a99902d7351dfa79bb8a3fa4.jpg',

            img1: 'https://i.pinimg.com/564x/05/f7/c2/05f7c2d4cb40ba0d451c21a1adac4c96.jpg',
            img2: 'https://i.pinimg.com/564x/af/e6/7e/afe67eff786520901e15037ec24e2fd7.jpg',

            text1: 'Tenun ikat merupakan salah satu bentuk warisan budaya yang kaya dan penuh makna di Indonesia. Kain ini tidak hanya berfungsi sebagai busana, tetapi juga menyimpan cerita tentang sejarah, kepercayaan, dan kehidupan masyarakat lokal. Setiap helai tenun ikat memadukan keahlian tinggi dan nilai artistik yang diturunkan dari generasi ke generasi, menjadikannya salah satu kerajinan tangan paling rumit di Nusantara.',
            text2: 'Berbagai daerah di Indonesia memiliki gaya dan teknik tenun ikat yang berbeda, terutama di Sumba dan Flores. Di Sumba, misalnya, motif tenun ikat sering kali menggambarkan simbol-simbol alam dan nenek moyang, yang mencerminkan hubungan spiritual masyarakat dengan alam dan leluhur mereka. Sementara itu, tenun ikat dari Flores dikenal dengan penggunaan warna-warna alami yang diambil dari tumbuhan dan tanah, memberikan kesan harmonis dan alami pada kain.',
            text3: 'Teknik pembuatan tenun ikat sangat rumit, dimulai dengan proses pewarnaan benang yang diikat pada pola tertentu sebelum ditenun. Setiap tahap pembuatan memerlukan ketelitian dan kesabaran, terutama karena motif yang dihasilkan harus tepat dan simetris. Proses ini memakan waktu lama, namun hasil akhirnya adalah kain yang memiliki keindahan luar biasa serta sarat dengan makna simbolis.',
            text4: 'Tenun ikat tidak hanya sekadar kain, tetapi juga media ekspresi budaya dan identitas daerah. Setiap motif dan warna yang digunakan memiliki arti tersendiri, mencerminkan adat istiadat dan filosofi hidup masyarakat setempat. Kain ini juga sering kali dipakai dalam upacara adat, pernikahan, dan acara penting lainnya, menambah nilai sakral dan simbolis pada setiap tenun ikat yang dihasilkan.',
            text5: 'Dalam perkembangan zaman modern, tenun ikat kini juga menjadi bagian dari fashion kontemporer. Banyak desainer Indonesia yang menggabungkan elemen-elemen tradisional dari tenun ikat ke dalam karya-karya mereka, menjadikannya lebih relevan bagi masyarakat urban dan internasional. Inovasi ini tidak hanya menjaga keberlangsungan kerajinan tangan ini, tetapi juga memperkenalkan kekayaan budaya Indonesia kepada dunia luar.',
            text6: 'Tenun ikat bukan sekadar produk budaya, melainkan representasi kekayaan tradisi dan kearifan lokal yang terus hidup di tengah arus modernisasi. Dengan semakin banyaknya dukungan terhadap industri kerajinan tradisional ini, diharapkan bahwa tenun ikat akan terus lestari dan memberikan manfaat ekonomi bagi masyarakat pengrajin, sambil tetap memelihara nilai-nilai yang diwariskan turun-temurun.',
            text7: 'Kita tak boleh melupakan pesona Danau Toba, danau vulkanik terbesar di Asia Tenggara yang terletak di Sumatra Utara. Dengan pulau Samosir di tengahnya, Danau Toba menawarkan pemandangan alam yang tenang dan memikat. Di sini, wisatawan bisa bersantai menikmati keindahan danau sambil menikmati budaya Batak yang khas dan ramah.',
            text8: 'Tenun ikat merupakan salah satu kekayaan budaya Indonesia yang memiliki keunikan tersendiri. Setiap daerah di Nusantara memiliki teknik dan motif tenun ikat yang berbeda, menjadikannya karya seni yang tak ternilai harganya. Keindahan kain ini tidak hanya terletak pada warna dan motif yang beragam, tetapi juga pada nilai historis dan tradisi yang terkandung di dalamnya. Melalui tenun ikat, kita dapat menyaksikan perjalanan panjang budaya dan kehidupan masyarakat lokal yang terjalin dalam setiap benangnya.',
            text9: 'Setiap daerah yang menghasilkan tenun ikat memiliki filosofi unik yang tercermin dari motif-motifnya. Di Nusa Tenggara Timur, misalnya, motif-motif geometris yang kerap ditemukan dalam tenun ikat melambangkan harmoni dan keseimbangan. Sementara di Kalimantan, motif flora dan fauna kerap digunakan untuk merepresentasikan hubungan yang erat antara manusia dan alam. Setiap motif ini tidak hanya berfungsi sebagai hiasan, tetapi juga mencerminkan kepercayaan dan nilai-nilai yang dijunjung tinggi oleh masyarakat setempat.',
            text10: 'Penggunaan pewarna alami dalam tenun ikat adalah salah satu ciri khas yang membedakan kain ini dari produk tekstil modern. Warna-warna seperti merah, cokelat, dan biru seringkali berasal dari tumbuhan dan mineral yang ditemukan di lingkungan sekitar. Di Flores, misalnya, pewarna merah berasal dari kulit kayu mengkudu, sementara di Sumba, daun tarum digunakan untuk menghasilkan warna biru. Pewarnaan alami ini memberikan sentuhan autentik pada setiap kain, mencerminkan kekayaan alam dan kearifan lokal.',

            pfp: '/img/amar.png',
            nama: 'ammar',
            dibuat: '6 Oktober 2024',
            jam: '05:22 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=7" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/1d/e2/fa/1de2fa25c21fb53c0d609a8fa285a3ab.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">4 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Eksplorasi Batik Nusantara: Warna, Motif, dan Filosofi di Setiap Guratan
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Batik bukan sekadar kain, melainkan seni yang penuh makna dan simbolisme di setiap motifnya. Artikel ini menggali keindahan dan keunikan batik dari berbagai daerah di Indonesia, seperti Batik Parang dari Yogyakarta dan Batik Mega Mendung dari Cirebon. Di balik keindahan visualnya, setiap pola batik mengandung cerita tentang filosofi hidup, alam, dan budaya setempat, yang terus lestari dan diakui dunia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Seni & Kerajina</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=8" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/736x/48/66/ae/4866ae94a99902d7351dfa79bb8a3fa4.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/amar.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">ammar</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Tenun Ikat: Kain Tradisional yang Merajut Warna dan Sejarah Nusantara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Tenun ikat adalah salah satu kerajinan tangan tradisional yang paling rumit dan penuh nilai artistik di Indonesia. Artikel ini mengeksplorasi seni pembuatan tenun ikat dari berbagai daerah, seperti Sumba dan Flores. Dengan teknik yang diwariskan turun-temurun, kain tenun ini memadukan warna alami dan motif yang menceritakan sejarah, kepercayaan, dan kehidupan sehari-hari masyarakat lokal.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Seni & Kerajinan</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=9" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/37/ed/3b/37ed3b1d8a1dcb6bd85839ae7bcff142.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://i.pinimg.com/736x/47/8a/89/478a89cdd089bee40a85842323d16199.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Seo ah-yi</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">10hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Kerajinan Tangan Indonesia: Dari Anyaman Bambu hingga Ukiran Kayu Jepara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia kaya akan kerajinan tangan yang mencerminkan keahlian dan kreativitas masyarakat lokal. Artikel ini membahas beragam kerajinan tradisional seperti anyaman bambu dari Kalimantan, perak dari Yogyakarta, hingga ukiran kayu Jepara yang terkenal. Setiap kerajinan ini tidak hanya memiliki nilai estetika tinggi, tetapi juga menjadi cerminan dari kearifan lokal yang terus dipertahankan dan dikembangkan oleh para pengrajin.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Seni & Kerajinar</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `


        },
        // 9
        {
            id: '9',
            title: 'Kerajinan Tangan Indonesia: Dari Anyaman Bambu hingga Ukiran Kayu Jepara',
            desc: 'Indonesia kaya akan kerajinan tangan yang mencerminkan keahlian dan kreativitas masyarakat lokal. Artikel ini membahas beragam kerajinan tradisional seperti anyaman bambu dari Kalimantan, perak dari Yogyakarta, hingga ukiran kayu Jepara yang terkenal. Setiap kerajinan ini tidak hanya memiliki nilai estetika tinggi, tetapi juga menjadi cerminan dari kearifan lokal yang terus dipertahankan dan dikembangkan oleh para pengrajin.',
            type: 'Seni & Kerajinan',
            type2: 'Seni & Kerajinan',

            membaca: 'belum membaca',
            imgBesar: 'https://i.pinimg.com/564x/37/ed/3b/37ed3b1d8a1dcb6bd85839ae7bcff142.jpg',

            img1: 'https://i.pinimg.com/736x/44/3c/54/443c5475c3a5bd9d56740e33ac7987d5.jpg',
            img2: 'https://i.pinimg.com/564x/1c/7a/1e/1c7a1e57575007ec78a5f5324b53c4b2.jpg',

            text1: 'Indonesia dikenal dengan kekayaan budaya yang beragam, dan salah satu bentuk kekayaan tersebut adalah kerajinan tangan tradisional yang diwariskan turun-temurun. Dari Sabang hingga Merauke, setiap daerah memiliki kearifan lokal yang tercermin dalam hasil karya seni dan kerajinan tangan mereka. Beberapa di antaranya yang paling terkenal adalah anyaman bambu dan ukiran kayu Jepara, yang tidak hanya indah secara estetika tetapi juga sarat dengan makna budaya.',
            text2: 'Anyaman bambu adalah salah satu kerajinan tangan yang paling umum ditemukan di berbagai daerah di Indonesia. Terbuat dari serat bambu yang dianyam menjadi berbagai bentuk seperti keranjang, tikar, hingga perabot rumah tangga, anyaman bambu mencerminkan kehidupan masyarakat agraris Indonesia. Keterampilan menganyam ini diajarkan dari generasi ke generasi dan sering kali menjadi sumber penghidupan utama bagi banyak keluarga di pedesaan.',
            text3: 'Tidak hanya sebagai produk fungsional, anyaman bambu juga sering dihiasi dengan motif-motif tradisional yang memiliki makna tertentu. Di beberapa daerah, motif anyaman bambu merefleksikan kepercayaan masyarakat setempat terhadap alam dan leluhur. Misalnya, motif geometris sering melambangkan keseimbangan dan harmoni, sementara motif flora dan fauna menggambarkan hubungan erat manusia dengan alam.',
            text4: 'Bambu adalah bahan yang mudah ditemukan di berbagai wilayah Indonesia, menjadikannya salah satu bahan utama dalam kerajinan tangan. Selain digunakan untuk membuat kerajinan anyaman, bambu juga dimanfaatkan sebagai bahan bangunan, alat musik, hingga barang-barang dekoratif. Sifatnya yang ringan, kuat, dan fleksibel membuat bambu menjadi bahan serbaguna yang sangat dihargai dalam kehidupan masyarakat.',
            text5: 'Di sisi lain, seni ukiran kayu Jepara telah dikenal hingga ke mancanegara. Berasal dari kota kecil di Jawa Tengah, ukiran kayu Jepara terkenal dengan detail dan kehalusan pengerjaannya. Produk-produk ukiran ini sering kali berupa perabotan rumah tangga seperti lemari, kursi, dan meja, yang diberi sentuhan seni melalui motif-motif khas seperti bunga, daun, dan bentuk-bentuk alam lainnya. Keindahan ukiran ini mencerminkan tingkat keahlian yang tinggi dari para pengrajinnya.',
            text6: 'Membuat ukiran kayu Jepara memerlukan keahlian khusus yang tidak bisa dikuasai secara instan. Prosesnya dimulai dari pemilihan kayu berkualitas tinggi, seperti kayu jati, yang kemudian dipahat dengan sangat hati-hati. Setiap goresan pada kayu harus presisi, karena motif yang dihasilkan harus simetris dan indah. Para pengrajin biasanya memiliki keahlian ini sejak muda, meneruskan tradisi yang sudah ada sejak ratusan tahun lalu.',
            text7: 'Motif-motif yang ada dalam ukiran kayu Jepara tidak hanya indah dipandang mata, tetapi juga memiliki filosofi mendalam. Misalnya, motif bunga melambangkan kehidupan dan pertumbuhan, sementara motif naga atau burung sering kali dikaitkan dengan kekuatan dan keberanian. Banyak dari ukiran ini digunakan dalam dekorasi rumah-rumah adat dan istana kerajaan, menunjukkan betapa pentingnya seni ini dalam budaya Indonesia.',
            text8: 'Kerajinan tangan seperti anyaman bambu dan ukiran kayu Jepara tidak hanya berfungsi sebagai warisan budaya, tetapi juga memainkan peran penting dalam perekonomian lokal. Banyak desa yang bergantung pada industri kerajinan tangan sebagai sumber pendapatan utama mereka. Dengan adanya pasar internasional yang terus berkembang, produk-produk kerajinan Indonesia kini diekspor ke berbagai negara, memperkenalkan kekayaan budaya Nusantara kepada dunia luar.',
            text9: 'Namun, meskipun memiliki potensi ekonomi yang besar, pelestarian kerajinan tangan tradisional menghadapi banyak tantangan. Modernisasi dan industrialisasi telah menyebabkan penurunan minat generasi muda untuk melanjutkan tradisi ini. Oleh karena itu, upaya-upaya untuk melestarikan dan mengembangkan kerajinan tangan, seperti melalui pendidikan dan pelatihan, menjadi sangat penting agar warisan budaya ini tidak hilang ditelan zaman.',
            text10: 'Untuk mendukung keberlanjutan kerajinan tangan tradisional, pemerintah Indonesia bersama berbagai komunitas pengrajin terus berupaya memperkenalkan dan mempromosikan produk-produk lokal. Pameran-pameran kerajinan, pelatihan, serta bantuan untuk pengrajin lokal menjadi beberapa bentuk dukungan yang diberikan. Selain itu, munculnya platform online juga membuka peluang baru bagi para pengrajin untuk memasarkan produk mereka secara lebih luas.',

            pfp: 'https://i.pinimg.com/736x/47/8a/89/478a89cdd089bee40a85842323d16199.jpg',
            nama: 'Seo ah-yi',
            dibuat: '6 September 2024',
            jam: '05:22 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=7" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/1d/e2/fa/1de2fa25c21fb53c0d609a8fa285a3ab.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">4 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Eksplorasi Batik Nusantara: Warna, Motif, dan Filosofi di Setiap Guratan
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Batik bukan sekadar kain, melainkan seni yang penuh makna dan simbolisme di setiap motifnya. Artikel ini menggali keindahan dan keunikan batik dari berbagai daerah di Indonesia, seperti Batik Parang dari Yogyakarta dan Batik Mega Mendung dari Cirebon. Di balik keindahan visualnya, setiap pola batik mengandung cerita tentang filosofi hidup, alam, dan budaya setempat, yang terus lestari dan diakui dunia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Seni & Kerajina</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=8" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/736x/48/66/ae/4866ae94a99902d7351dfa79bb8a3fa4.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/amar.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">ammar</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Tenun Ikat: Kain Tradisional yang Merajut Warna dan Sejarah Nusantara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Tenun ikat adalah salah satu kerajinan tangan tradisional yang paling rumit dan penuh nilai artistik di Indonesia. Artikel ini mengeksplorasi seni pembuatan tenun ikat dari berbagai daerah, seperti Sumba dan Flores. Dengan teknik yang diwariskan turun-temurun, kain tenun ini memadukan warna alami dan motif yang menceritakan sejarah, kepercayaan, dan kehidupan sehari-hari masyarakat lokal.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Seni & Kerajinan</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=9" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/37/ed/3b/37ed3b1d8a1dcb6bd85839ae7bcff142.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://i.pinimg.com/736x/47/8a/89/478a89cdd089bee40a85842323d16199.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Seo ah-yi</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">10hari yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Kerajinan Tangan Indonesia: Dari Anyaman Bambu hingga Ukiran Kayu Jepara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia kaya akan kerajinan tangan yang mencerminkan keahlian dan kreativitas masyarakat lokal. Artikel ini membahas beragam kerajinan tradisional seperti anyaman bambu dari Kalimantan, perak dari Yogyakarta, hingga ukiran kayu Jepara yang terkenal. Setiap kerajinan ini tidak hanya memiliki nilai estetika tinggi, tetapi juga menjadi cerminan dari kearifan lokal yang terus dipertahankan dan dikembangkan oleh para pengrajin.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Seni & Kerajinar</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `


        },
        // 10
        {
            id: '10',
            title: 'Ekonomi Kreatif Indonesia: Potensi Tak Terbatas di Era Digital',
            desc: 'Artikel ini membahas perkembangan pesat sektor ekonomi kreatif di Indonesia yang dipicu oleh inovasi digital. Mulai dari startup teknologi hingga konten kreator di media sosial, ekonomi kreatif telah menjadi kekuatan baru yang mendorong pertumbuhan ekonomi. Dengan dukungan pemerintah dan meningkatnya akses teknologi, sektor ini terus membuka peluang baru bagi generasi muda untuk mengembangkan ide-ide kreatif dan memonetisasi karya mereka di pasar global.',
            type: 'Ekonomi Kreatif',
            type2: 'Ekonomi Kreatif',

            membaca: '2 menit membaca',
            imgBesar: 'https://i.pinimg.com/564x/89/6d/e8/896de82d07b5cf78b203039e043f1c41.jpg',

            img1: 'https://i.pinimg.com/564x/c4/c4/e7/c4c4e77815346583bcf14d5e5b6d555a.jpg',
            img2: 'https://i.pinimg.com/564x/7f/b2/28/7fb22827b24db9337be834294a6a717c.jpg',

            text1: 'Ekonomi kreatif telah menjadi salah satu sektor yang tumbuh pesat di Indonesia dalam beberapa tahun terakhir. Dengan kekayaan budaya, seni, dan tradisi yang dimiliki bangsa ini, ekonomi kreatif memberikan peluang tak terbatas untuk menghasilkan inovasi dan produk bernilai tinggi. Di era digital, sektor ini semakin berkembang pesat, menghubungkan kreativitas lokal dengan pasar global melalui teknologi dan platform digital.',
            text2: 'Sektor ekonomi kreatif memberikan kontribusi yang signifikan terhadap perekonomian nasional. Menurut data pemerintah, sektor ini menyumbang lebih dari 7% dari total Produk Domestik Bruto (PDB) Indonesia. Dengan subsektor seperti fesyen, kuliner, dan seni pertunjukan yang menjadi andalan, ekonomi kreatif menciptakan lapangan pekerjaan bagi jutaan orang di seluruh negeri, menjadikannya salah satu penggerak utama perekonomian Indonesia di abad ke-21.',
            text3: 'Indonesia dikenal dengan industri fesyen yang berkembang pesat, terutama dalam hal busana muslim dan batik. Selain itu, kuliner juga menjadi salah satu subsektor unggulan, dengan kekayaan rempah dan variasi masakan tradisional yang membuatnya diminati baik di dalam maupun luar negeri. Kriya atau kerajinan tangan, seperti tenun dan anyaman, turut menyumbang dalam menciptakan produk yang memadukan seni dan keahlian tradisional dengan desain kontemporer.',
            text4: 'Era digital membuka peluang besar bagi pelaku ekonomi kreatif untuk memperluas jangkauan pasar mereka. Platform digital, seperti marketplace, media sosial, dan e-commerce, memungkinkan produk-produk kreatif Indonesia untuk dikenal secara global. Namun, tantangan juga muncul, terutama dalam hal literasi digital, keamanan siber, dan peningkatan keterampilan teknologi bagi pelaku usaha kreatif di daerah terpencil yang masih tertinggal dari segi infrastruktur.',
            text5: 'Kolaborasi antar pelaku industri kreatif juga menjadi kunci penting dalam perkembangan sektor ini. Desainer fesyen, pembuat film, musisi, dan seniman dapat bekerja sama untuk menciptakan produk-produk inovatif yang dapat diterima oleh pasar yang lebih luas. Selain itu, pemerintah, akademisi, dan sektor swasta juga memainkan peran penting dalam membangun ekosistem kreatif yang mendukung pertumbuhan ekonomi berbasis inovasi.',
            text6: 'Pemerintah Indonesia telah menunjukkan komitmen yang kuat untuk mengembangkan ekonomi kreatif melalui pembentukan Badan Ekonomi Kreatif (Bekraf), yang kini menjadi bagian dari Kementerian Pariwisata dan Ekonomi Kreatif. Berbagai program, seperti pendanaan, pelatihan, dan pameran internasional, diinisiasi untuk mendukung pengusaha kreatif lokal dalam menghadapi persaingan global. Kebijakan ini bertujuan untuk mendorong lebih banyak inovasi dan memberikan akses yang lebih besar bagi produk kreatif ke pasar internasional.',
            text7: 'Industri film dan musik Indonesia juga memiliki potensi besar dalam ekonomi kreatif. Film-film Indonesia semakin dikenal di kancah internasional, dengan beberapa karya yang berhasil masuk festival film dunia. Musik Indonesia juga tidak kalah berkembang, terutama dengan munculnya musisi independen yang menggunakan platform digital untuk memperkenalkan karya mereka. Digitalisasi telah memudahkan distribusi dan akses, memberikan peluang baru bagi musisi dan pembuat film lokal untuk bersaing di pasar global.',
            text8: 'Pariwisata dan ekonomi kreatif sering kali berjalan seiring. Destinasi wisata di Indonesia kini tidak hanya menawarkan keindahan alam, tetapi juga pengalaman budaya dan kreatif. Berbagai festival seni, seperti Ubud Writers & Readers Festival dan Jakarta Fashion Week, menjadi daya tarik wisata sekaligus ajang promosi produk kreatif Indonesia. Pariwisata berbasis kreativitas ini menjadi salah satu strategi untuk menarik wisatawan mancanegara dan memperkenalkan kekayaan budaya Indonesia kepada dunia.',
            text9: 'Generasi muda Indonesia memegang peranan penting dalam pengembangan ekonomi kreatif. Dengan kreativitas yang tinggi dan pemahaman akan teknologi digital, mereka menjadi penggerak utama dalam menciptakan inovasi di berbagai sektor kreatif. Banyak pengusaha muda yang memanfaatkan platform online untuk memasarkan produk mereka, mulai dari fesyen, kuliner, hingga konten digital. Keterlibatan mereka dalam ekonomi kreatif menjadi bukti bahwa masa depan sektor ini sangat cerah.',
            text10: 'Dengan potensi yang besar dan dukungan yang terus meningkat, masa depan ekonomi kreatif di Indonesia sangat menjanjikan. Sektor ini diharapkan dapat menjadi tulang punggung ekonomi nasional di masa mendatang, dengan produk-produk kreatif Indonesia yang semakin diakui dan dihargai di panggung internasional. Kuncinya terletak pada kemampuan untuk terus berinovasi, menjaga kualitas, dan memanfaatkan teknologi digital untuk menjangkau pasar yang lebih luas.',

            pfp: '/img/lensV2.png',
            nama: 'Oggie',
            dibuat: '6 September 2024',
            jam: '04:21 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=10" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/89/6d/e8/896de82d07b5cf78b203039e043f1c41.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/lensV2.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Oggie</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Ekonomi Kreatif Indonesia: Potensi Tak Terbatas di Era Digital
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Artikel ini membahas perkembangan pesat sektor ekonomi kreatif di Indonesia yang dipicu oleh inovasi digital. Mulai dari startup teknologi hingga konten kreator di media sosial, ekonomi kreatif telah menjadi kekuatan baru yang mendorong pertumbuhan ekonomi. Dengan dukungan pemerintah dan meningkatnya akses teknologi, sektor ini terus membuka peluang baru bagi generasi muda untuk mengembangkan ide-ide kreatif dan memonetisasi karya mereka di pasar global.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Ekonomi Kreatif</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=11" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/52/09/be/5209be383be388b6237ec51ca4c2ee5d.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">3 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Sejarah dan Nilai Filosofis Budaya Sunda</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Sektor Usaha Mikro, Kecil, dan Menengah (UMKM) berperan penting dalam menggerakkan ekonomi kreatif di Indonesia. Artikel ini mengeksplorasi bagaimana pengrajin lokal, pengusaha kuliner, dan kreator produk unik dapat memanfaatkan platform digital untuk mengembangkan usaha mereka. Dengan semakin banyaknya akses ke teknologi dan pasar global, UMKM menjadi motor penggerak ekonomi yang tidak hanya menghasilkan produk, tetapi juga mengangkat budaya lokal.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Ekonomi Kreatif</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=12" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/96/3d/86/963d86ac58e19ad7e659ef4dc0847466.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://i.pinimg.com/736x/0f/78/2f/0f782f57cf87f3b54535319a81ced227.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Lee Eun-yu</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Dari Film hingga Fashion: Sub-sektor Ekonomi Kreatif yang Mengharumkan Nama Indonesia</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia memiliki banyak sub-sektor ekonomi kreatif yang bersinar di panggung internasional, mulai dari industri film, musik, hingga fashion. Artikel ini membahas kisah sukses beberapa pelaku industri kreatif Indonesia yang berhasil mencuri perhatian dunia. Dari desainer muda hingga sutradara film independen, mereka menunjukkan bahwa kreatifitas Indonesia mampu bersaing dan diterima oleh pasar global.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Ekonomi Kreatif</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `
        },
        // 11
        {
            id: '11',
            title: 'Sejarah dan Nilai Filosofis Budaya Sunda',
            desc: 'Sektor Usaha Mikro, Kecil, dan Menengah (UMKM) berperan penting dalam menggerakkan ekonomi kreatif di Indonesia. Artikel ini mengeksplorasi bagaimana pengrajin lokal, pengusaha kuliner, dan kreator produk unik dapat memanfaatkan platform digital untuk mengembangkan usaha mereka. Dengan semakin banyaknya akses ke teknologi dan pasar global, UMKM menjadi motor penggerak ekonomi yang tidak hanya menghasilkan produk, tetapi juga mengangkat budaya lokal.',
            type: 'Ekonomi Kreatif',
            type2: 'Ekonomi Kreatif',

            membaca: 'belum membaca',
            imgBesar: 'https://i.pinimg.com/564x/52/09/be/5209be383be388b6237ec51ca4c2ee5d.jpg',

            img1: 'https://i.pinimg.com/564x/4f/74/47/4f7447e8669fc75a11bb46bde1e33e75.jpg',
            img2: 'https://i.pinimg.com/564x/a2/21/18/a22118eb60a2c462cd34fb65bca74414.jpg',

            text1: 'Budaya Sunda merupakan salah satu kekayaan budaya Indonesia yang memiliki sejarah panjang dan nilai-nilai filosofis yang mendalam. Terletak di bagian barat pulau Jawa, suku Sunda dikenal dengan tradisi yang lekat dengan keindahan alam, kesederhanaan, keramah-tamahan, serta kearifan lokal yang terus dilestarikan hingga kini.',
            text2: 'Sejarah budaya Sunda berakar pada peradaban Kerajaan Sunda yang diperkirakan mulai berkembang sejak abad ke-7 Masehi. Kerajaan Tarumanegara dan Pajajaran adalah dua kerajaan besar yang menjadi pusat peradaban Sunda. Tarumanegara (358-669 M) merupakan kerajaan tertua di wilayah Sunda dan salah satu kerajaan Hindu-Buddha terbesar di Indonesia. Di masa ini, pengaruh agama Hindu dan Buddha mulai masuk ke masyarakat Sunda melalui perdagangan dan interaksi budaya dengan India.',
            text3: 'Setelah runtuhnya Tarumanegara, berdirilah Kerajaan Sunda dan Pajajaran yang lebih mengakar pada budaya lokal. Pusat Kerajaan Sunda berada di wilayah Pakuan Pajajaran (sekarang Bogor). Pada masa Kerajaan Sunda dan Pajajaran, nilai-nilai kebudayaan lokal berkembang pesat, termasuk tradisi pertanian, arsitektur, seni, dan bahasa Sunda. Meski pengaruh Hindu masih terasa, budaya Sunda pada masa ini mulai menonjolkan identitas sendiri yang bercirikan kesederhanaan, harmoni dengan alam, serta rasa hormat kepada leluhur.',
            text4: 'Runtuhnya Pajajaran pada abad ke-16 Masehi akibat ekspansi Kesultanan Banten menandai berakhirnya kerajaan Hindu Sunda, dan sebagian besar masyarakat Sunda mulai menganut Islam. Meskipun demikian, banyak nilai dan tradisi Hindu-Buddha yang masih bertahan dan menjadi bagian integral dari kehidupan masyarakat Sunda hingga kini.',
            text5: 'Budaya Sunda mengandung berbagai nilai filosofis yang terwujud dalam kehidupan sehari-hari masyarakatnya. Berikut adalah beberapa nilai utama dalam budaya Sunda: Silih Asah, Silih Asih, Silih Asuh Prinsip ini merupakan panduan hidup orang Sunda dalam berinteraksi satu sama lain. Silih asah berarti saling mengasah atau belajar satu sama lain, silih asih berarti saling menyayangi, dan silih asuh bermakna saling menjaga dan mengayomi. Nilai ini menekankan pentingnya hidup dalam kebersamaan dan solidaritas, serta saling membantu dalam kebaikan.',
            text6: 'Filosofi ini merujuk pada tiga harmoni utama yang harus dijaga dalam kehidupan, yaitu harmoni antara manusia dengan Tuhan, manusia dengan manusia, dan manusia dengan alam. Prinsip ini mencerminkan hubungan erat antara masyarakat Sunda dengan alam, serta keyakinan mereka bahwa keseimbangan harus dijaga untuk mencapai kehidupan yang damai dan sejahtera.',
            text7: 'Bagi masyarakat Sunda, menghormati leluhur merupakan nilai yang sangat penting. Kabuyutan atau tempat suci bagi leluhur dianggap sebagai pusat spiritual yang memelihara harmoni antara manusia, leluhur, dan alam. Tradisi ini mencerminkan penghargaan mendalam terhadap warisan nenek moyang dan nilai-nilai kebijaksanaan yang mereka tinggalkan.',
            text8: 'Dalam budaya Sunda, hutan (leuweung) dianggap sebagai sumber kehidupan. Pepatah leuweung hejo, masyarakat beunghar (hutan hijau, masyarakat makmur) menggambarkan keyakinan bahwa menjaga kelestarian alam akan membawa kemakmuran bagi masyarakat. Nilai ini mendorong masyarakat Sunda untuk hidup harmonis dengan alam dan memanfaatkan sumber daya alam secara bijaksana.',
            text9: '',
            text10: '',

            pfp: '/img/azka.png',
            nama: 'azka',
            dibuat: '6 September 2024',
            jam: '04:21 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=10" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/89/6d/e8/896de82d07b5cf78b203039e043f1c41.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/lensV2.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Oggie</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Ekonomi Kreatif Indonesia: Potensi Tak Terbatas di Era Digital
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Artikel ini membahas perkembangan pesat sektor ekonomi kreatif di Indonesia yang dipicu oleh inovasi digital. Mulai dari startup teknologi hingga konten kreator di media sosial, ekonomi kreatif telah menjadi kekuatan baru yang mendorong pertumbuhan ekonomi. Dengan dukungan pemerintah dan meningkatnya akses teknologi, sektor ini terus membuka peluang baru bagi generasi muda untuk mengembangkan ide-ide kreatif dan memonetisasi karya mereka di pasar global.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Ekonomi Kreatif</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=11" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/52/09/be/5209be383be388b6237ec51ca4c2ee5d.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">3 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Sejarah dan Nilai Filosofis Budaya Sunda</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Sektor Usaha Mikro, Kecil, dan Menengah (UMKM) berperan penting dalam menggerakkan ekonomi kreatif di Indonesia. Artikel ini mengeksplorasi bagaimana pengrajin lokal, pengusaha kuliner, dan kreator produk unik dapat memanfaatkan platform digital untuk mengembangkan usaha mereka. Dengan semakin banyaknya akses ke teknologi dan pasar global, UMKM menjadi motor penggerak ekonomi yang tidak hanya menghasilkan produk, tetapi juga mengangkat budaya lokal.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Ekonomi Kreatif</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=12" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/96/3d/86/963d86ac58e19ad7e659ef4dc0847466.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://i.pinimg.com/736x/0f/78/2f/0f782f57cf87f3b54535319a81ced227.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Lee Eun-yu</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Dari Film hingga Fashion: Sub-sektor Ekonomi Kreatif yang Mengharumkan Nama Indonesia</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia memiliki banyak sub-sektor ekonomi kreatif yang bersinar di panggung internasional, mulai dari industri film, musik, hingga fashion. Artikel ini membahas kisah sukses beberapa pelaku industri kreatif Indonesia yang berhasil mencuri perhatian dunia. Dari desainer muda hingga sutradara film independen, mereka menunjukkan bahwa kreatifitas Indonesia mampu bersaing dan diterima oleh pasar global.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Ekonomi Kreatif</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `


        },
        // 12
        {
            id: '12',
            title: 'Dari Film hingga Fashion: Sub-sektor Ekonomi Kreatif yang Mengharumkan Nama Indonesia',
            desc: 'Indonesia memiliki banyak sub-sektor ekonomi kreatif yang bersinar di panggung internasional, mulai dari industri film, musik, hingga fashion. Artikel ini membahas kisah sukses beberapa pelaku industri kreatif Indonesia yang berhasil mencuri perhatian dunia. Dari desainer muda hingga sutradara film independen, mereka menunjukkan bahwa kreatifitas Indonesia mampu bersaing dan diterima oleh pasar global.',
            type: 'Ekonomi Kreatif',
            type2: 'Ekonomi Kreatif',

            membaca: '2 menit membaca',
            imgBesar: 'https://i.pinimg.com/564x/96/3d/86/963d86ac58e19ad7e659ef4dc0847466.jpg',

            img1: 'https://i.pinimg.com/564x/a8/55/9c/a8559c24d7b363f4506e334e0041649d.jpg',
            img2: 'https://i.pinimg.com/564x/a7/bd/2f/a7bd2f0aedbec8d47c1312f10937e391.jpg',

            text1: 'Indonesia tidak hanya dikenal dengan keindahan alam dan kekayaan budayanya, tetapi juga semakin diakui di kancah global berkat berbagai sub-sektor ekonomi kreatif yang tumbuh pesat. Dari industri film hingga fashion, sektor ini memberikan kontribusi yang signifikan terhadap perekonomian nasional dan mengangkat nama Indonesia di dunia internasional. Melalui kreativitas dan inovasi, para pelaku ekonomi kreatif mampu menciptakan produk-produk berkualitas tinggi yang merefleksikan identitas budaya lokal dengan sentuhan modern. Berikut adalah beberapa sub-sektor ekonomi kreatif Indonesia yang tengah bersinar.',
            text2: 'Industri film Indonesia telah mengalami perkembangan pesat dalam beberapa dekade terakhir. Film-film lokal seperti Laskar Pelangi, Pengabdi Setan, dan Marlina Si Pembunuh dalam Empat Babak tidak hanya sukses di dalam negeri tetapi juga mendapatkan apresiasi internasional. Festival film seperti Cannes, Sundance, dan Venice telah menjadi saksi atas kualitas dan kreativitas sineas Indonesia. Film Indonesia kini tidak hanya sekadar hiburan, tetapi juga alat diplomasi budaya yang mampu memperkenalkan kisah-kisah dari berbagai sudut Nusantara kepada dunia.',
            text3: 'Fashion menjadi salah satu sub-sektor yang paling berkembang dalam ekonomi kreatif Indonesia. Desainer lokal seperti Didiet Maulana, Anne Avantie, dan Ivan Gunawan berhasil menggabungkan kearifan lokal seperti batik, tenun, dan songket dengan tren fashion modern. Koleksi mereka sering kali ditampilkan di ajang internasional, seperti New York Fashion Week dan Paris Fashion Week, menjadikan kain tradisional Indonesia semakin dikenal di dunia. Fashion Indonesia kini menjadi kebanggaan nasional yang menampilkan identitas dan keragaman budaya Indonesia di kancah global.',
            text4: 'Kuliner merupakan salah satu sektor yang sangat potensial dalam ekonomi kreatif Indonesia. Makanan khas Indonesia seperti rendang, nasi goreng, dan sate semakin populer di berbagai negara. Restoran-restoran yang menyajikan kuliner Nusantara mulai bermunculan di kota-kota besar dunia seperti London, New York, dan Tokyo. Selain itu, chef-chef Indonesia juga berhasil memperkenalkan makanan tradisional dengan gaya modern di berbagai kompetisi kuliner internasional. Melalui kuliner, Indonesia berhasil menyampaikan identitas budaya yang kaya dan beragam kepada dunia.',
            text5: 'Musik Indonesia terus mengalami evolusi, memadukan unsur-unsur tradisional dengan genre musik modern. Grup musik seperti Gigi, Slank, dan Raisa mewakili potensi besar musik populer Indonesia, sementara musisi seperti Alffy Rev dan seniman gamelan modern seperti Kuno Kini memadukan musik tradisional dengan elemen-elemen elektronik. Musik tradisional seperti angklung, gamelan, dan keroncong juga terus diangkat di panggung internasional, mengukuhkan posisi Indonesia sebagai negara dengan warisan musik yang kaya.',
            text6: 'Industri animasi Indonesia mulai menarik perhatian dunia dengan karya-karya berkualitas tinggi. Film animasi seperti Si Juki the Movie dan Nussa menjadi bukti bahwa Indonesia mampu bersaing dalam industri kreatif digital. Selain itu, animator Indonesia banyak yang berkiprah di industri animasi global, bahkan terlibat dalam produksi film-film besar Hollywood seperti Frozen dan Moana. Dengan meningkatnya minat terhadap animasi lokal, industri ini diprediksi akan terus berkembang dan menjadi salah satu pilar ekonomi kreatif yang penting.',
            text7: 'Sub-sektor desain produk juga memainkan peran penting dalam ekonomi kreatif Indonesia. Produk-produk kerajinan tangan yang dibuat oleh pengrajin lokal dari berbagai daerah seperti Yogyakarta, Bali, dan Lombok semakin diminati baik di dalam negeri maupun luar negeri. Desain produk ini tidak hanya fokus pada fungsionalitas, tetapi juga estetika yang mengandung nilai budaya. Penggunaan bahan-bahan alami dan teknik tradisional, seperti anyaman bambu, ukiran kayu, dan batik tulis, menjadi nilai tambah yang membuat produk-produk ini unik dan berharga di pasar global.',
            text8: 'Dalam era digital, industri game dan aplikasi lokal Indonesia mulai menunjukkan potensi yang besar. Developer Indonesia telah menciptakan berbagai game yang tidak hanya sukses di pasar lokal tetapi juga meraih popularitas di luar negeri. Game seperti DreadOut dan Valthirian Arc berhasil menarik perhatian gamer global. Selain itu, aplikasi-aplikasi karya anak bangsa juga terus berkembang, menyediakan solusi kreatif bagi kebutuhan masyarakat modern dan menciptakan dampak positif bagi perekonomian digital.',
            text9: 'Fotografi tidak hanya berfungsi sebagai media dokumentasi, tetapi juga sebagai sarana ekspresi kreatif yang mampu menyampaikan cerita. Fotografer Indonesia seperti Rio Wibowo dan Nicoline Patricia Malina telah dikenal secara internasional karena karya-karya mereka yang kreatif dan inspiratif. Dalam era media sosial, fotografi menjadi semakin penting dalam mempromosikan budaya dan pariwisata Indonesia. Melalui gambar-gambar yang menakjubkan, fotografer Indonesia mampu mengajak orang dari berbagai belahan dunia untuk mengenal lebih dekat kekayaan alam dan budaya Indonesia.',
            text10: 'Seni pertunjukan, mulai dari teater, tari, hingga musik tradisional, juga menjadi bagian penting dari ekonomi kreatif Indonesia. Berbagai festival seni pertunjukan seperti Java Jazz Festival dan Jakarta International Performing Arts Festival menjadi platform bagi seniman lokal untuk memperlihatkan bakat mereka kepada dunia. Seni pertunjukan ini tidak hanya menghibur tetapi juga menjadi media untuk menjaga dan melestarikan warisan budaya Indonesia, menjadikannya lebih relevan dengan perkembangan zaman.',

            pfp: 'https://i.pinimg.com/736x/0f/78/2f/0f782f57cf87f3b54535319a81ced227.jpg',
            nama: 'Lee Eun-yu',
            dibuat: '6 September 2024',
            jam: '03:21 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=10" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/89/6d/e8/896de82d07b5cf78b203039e043f1c41.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/lensV2.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Oggie</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Ekonomi Kreatif Indonesia: Potensi Tak Terbatas di Era Digital
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Artikel ini membahas perkembangan pesat sektor ekonomi kreatif di Indonesia yang dipicu oleh inovasi digital. Mulai dari startup teknologi hingga konten kreator di media sosial, ekonomi kreatif telah menjadi kekuatan baru yang mendorong pertumbuhan ekonomi. Dengan dukungan pemerintah dan meningkatnya akses teknologi, sektor ini terus membuka peluang baru bagi generasi muda untuk mengembangkan ide-ide kreatif dan memonetisasi karya mereka di pasar global.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Ekonomi Kreatif</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=11" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/52/09/be/5209be383be388b6237ec51ca4c2ee5d.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">3 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Sejarah dan Nilai Filosofis Budaya Sunda</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Sektor Usaha Mikro, Kecil, dan Menengah (UMKM) berperan penting dalam menggerakkan ekonomi kreatif di Indonesia. Artikel ini mengeksplorasi bagaimana pengrajin lokal, pengusaha kuliner, dan kreator produk unik dapat memanfaatkan platform digital untuk mengembangkan usaha mereka. Dengan semakin banyaknya akses ke teknologi dan pasar global, UMKM menjadi motor penggerak ekonomi yang tidak hanya menghasilkan produk, tetapi juga mengangkat budaya lokal.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Ekonomi Kreatif</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=12" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/96/3d/86/963d86ac58e19ad7e659ef4dc0847466.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://i.pinimg.com/736x/0f/78/2f/0f782f57cf87f3b54535319a81ced227.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Lee Eun-yu</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1 jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Dari Film hingga Fashion: Sub-sektor Ekonomi Kreatif yang Mengharumkan Nama Indonesia</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia memiliki banyak sub-sektor ekonomi kreatif yang bersinar di panggung internasional, mulai dari industri film, musik, hingga fashion. Artikel ini membahas kisah sukses beberapa pelaku industri kreatif Indonesia yang berhasil mencuri perhatian dunia. Dari desainer muda hingga sutradara film independen, mereka menunjukkan bahwa kreatifitas Indonesia mampu bersaing dan diterima oleh pasar global.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Ekonomi Kreatif</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">2 menit membaca</p>
                                </div>
                            </div>
            </a>
             `

        },
        // 13
        {
            id: '13',
            title: 'Bahasa Nusantara: Kekayaan Linguistik yang Menjaga Identitas Bangsa',
            desc: 'Indonesia dikenal sebagai negara dengan keragaman bahasa yang luar biasa. Artikel ini mengeksplorasi kekayaan bahasa daerah di Nusantara, mulai dari bahasa Jawa, Sunda, hingga Toraja, serta peran pentingnya dalam menjaga identitas budaya setiap suku bangsa. Di tengah arus globalisasi, bahasa-bahasa ini menghadapi tantangan, namun upaya pelestariannya menjadi simbol penting dalam menjaga keanekaragaman dan warisan budaya Indonesia.',
            type: 'Bahasa & Sastra',
            type2: 'Bahasa & Sastra',

            membaca: 'belum membaca',
            imgBesar: 'https://i.pinimg.com/564x/4e/e8/14/4ee81419918e99fa81f858bec9db224f.jpg',

            img1: 'https://i.pinimg.com/564x/3f/89/7d/3f897dde0b3aac2f1708357634a41a32.jpg',
            img2: 'https://i.pinimg.com/564x/ed/fa/79/edfa795218b917a979c0dd7868013ed5.jpg',

            text1: 'Indonesia dikenal sebagai negara dengan kekayaan bahasa yang luar biasa. Dengan lebih dari 700 bahasa daerah yang tersebar di seluruh Nusantara, setiap suku dan daerah di Indonesia memiliki cara unik untuk berkomunikasi dan menyampaikan budayanya. Bahasa-bahasa ini bukan hanya alat komunikasi, tetapi juga simbol identitas, sejarah, dan kekayaan intelektual yang diwariskan dari generasi ke generasi. Bahasa Nusantara memainkan peran penting dalam menjaga keragaman budaya yang menjadi fondasi kekuatan bangsa.',
            text2: 'Setiap bahasa daerah di Indonesia menyimpan sejarah panjang yang merefleksikan kehidupan masyarakatnya. Bahasa Jawa, Sunda, Batak, Bugis, dan banyak lainnya tidak hanya berfungsi sebagai media komunikasi, tetapi juga sebagai bentuk ekspresi budaya yang kompleks. Melalui bahasa, nilai-nilai tradisi, mitos, dan kearifan lokal diteruskan dari satu generasi ke generasi berikutnya.',
            text3: 'Bahasa memiliki peran krusial dalam membentuk identitas suatu kelompok masyarakat. Di berbagai daerah di Indonesia, bahasa tidak hanya sekadar alat komunikasi, tetapi juga pembeda antara satu suku dengan yang lain. Dengan berbicara dalam bahasa daerah, seseorang dapat menunjukkan rasa kebanggaan dan keterikatan mereka pada suku, wilayah, atau budaya tertentu.',
            text4: 'Selain sebagai simbol identitas, bahasa Nusantara juga berfungsi sebagai pengikat sosial. Bahasa daerah membangun rasa kebersamaan dan solidaritas di dalam kelompok masyarakat yang berbicara dengan bahasa yang sama. Dalam situasi adat, upacara keagamaan, dan kegiatan sosial, bahasa sering kali menjadi faktor penting yang memperkuat ikatan sosial di antara anggota masyarakat.',
            text5: 'Setiap bahasa membawa cara pandang yang berbeda terhadap dunia. Bahasa Melayu Riau, misalnya, memiliki banyak kosakata yang menggambarkan kehidupan di atas air, sedangkan bahasa-bahasa di Papua lebih banyak mencerminkan kehidupan di alam pegunungan dan hutan. Keragaman bahasa ini menggambarkan betapa kayanya perspektif masyarakat Indonesia dalam melihat dan berinteraksi dengan lingkungan sekitar mereka.',
            text6: 'Sayangnya, banyak bahasa daerah di Indonesia kini berada di ambang kepunahan. Globalisasi, urbanisasi, dan dominasi bahasa Indonesia sebagai bahasa nasional menyebabkan penggunaan bahasa daerah semakin menurun, terutama di kalangan generasi muda. Data menunjukkan bahwa banyak bahasa daerah hanya dipertuturkan oleh segelintir orang tua, yang membuatnya rentan hilang jika tidak ada upaya pelestarian yang signifikan.',
            text7: 'Untuk mencegah kepunahan bahasa-bahasa daerah, pendidikan menjadi salah satu solusi utama. Pengajaran bahasa daerah di sekolah-sekolah dapat menjadi langkah awal dalam memperkenalkan kembali bahasa tersebut kepada generasi muda. Selain itu, penggunaan bahasa daerah dalam kegiatan-kegiatan sosial dan budaya juga dapat menguatkan kembali eksistensinya di tengah masyarakat modern.',
            text8: 'Di era digital, pelestarian bahasa daerah juga dapat dilakukan melalui platform online. Banyak komunitas yang menggunakan media sosial, aplikasi, dan situs web untuk mengajarkan dan mempromosikan bahasa daerah mereka. Ini memberi harapan baru bagi pelestarian bahasa Nusantara, karena teknologi memungkinkan aksesibilitas dan penyebaran bahasa lebih luas.',
            text9: 'Pemerintah Indonesia juga telah menyadari pentingnya pelestarian bahasa daerah. Melalui program-program kebudayaan dan pendidikan, pemerintah berupaya mendorong penggunaan bahasa daerah di berbagai aspek kehidupan. Salah satu inisiatif penting adalah memasukkan bahasa daerah sebagai bagian dari kurikulum di sekolah-sekolah di daerah-daerah tertentu.',
            text10: 'Meski penting untuk melestarikan bahasa-bahasa daerah, bahasa Indonesia tetap berperan sebagai bahasa pemersatu bangsa. Sebagai bahasa nasional, bahasa Indonesia memungkinkan komunikasi yang lancar di seluruh penjuru Nusantara yang terdiri dari ribuan pulau dan suku bangsa. Bahasa Indonesia juga menjadi simbol identitas nasional yang melampaui perbedaan suku, agama, dan budaya.',

            pfp: '/img/azka.png',
            nama: 'azka',
            dibuat: '5 Oktober 2024',
            jam: '02:21 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=13" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/4e/e8/14/4ee81419918e99fa81f858bec9db224f.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Bahasa Nusantara: Kekayaan Linguistik yang Menjaga Identitas Bangsa
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia dikenal sebagai negara dengan keragaman bahasa yang luar biasa. Artikel ini mengeksplorasi kekayaan bahasa daerah di Nusantara, mulai dari bahasa Jawa, Sunda, hingga Toraja, serta peran pentingnya dalam menjaga identitas budaya setiap suku bangsa. Di tengah arus globalisasi, bahasa-bahasa ini menghadapi tantangan, namun upaya pelestariannya menjadi simbol penting dalam menjaga keanekaragaman dan warisan budaya Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Bahasa & Sastra</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=14" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/0d/5d/1f/0d5d1f302c87ec8f3ac6626e44a7e82f.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/amar.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">ammar</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Sastra Indonesia: Jejak Karya yang Membentuk Wacana Sosial dan Budaya</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Sastra Indonesia telah melahirkan banyak karya besar yang tak hanya berfungsi sebagai hiburan, tetapi juga refleksi atas keadaan sosial dan budaya di setiap zamannya. Artikel ini menyoroti evolusi sastra Indonesia, mulai dari puisi-puisi Chairil Anwar hingga novel-novel kontemporer seperti karya Eka Kurniawan. Karya sastra ini menggambarkan pergeseran pandangan hidup masyarakat, nilai-nilai sosial, serta perjuangan identitas di era modern.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Bahasa & Sastra</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=15" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/f5/21/0b/f5210be3e8de71e11b26b4e9c498f6b3.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://i.pinimg.com/736x/47/8a/89/478a89cdd089bee40a85842323d16199.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Seo Ah-yi</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Puisi dan Prosa Lintas Generasi: Dinamika Bahasa dalam Karya Sastra Modern</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                   Artikel ini mengeksplorasi bagaimana puisi dan prosa Indonesia berkembang dari masa ke masa, serta bagaimana bahasa terus bertransformasi dalam karya-karya sastra modern. Generasi baru penulis Indonesia memadukan bahasa formal dan bahasa sehari-hari dengan luwes, menciptakan karya yang relevan dengan kehidupan urban dan digital. Dinamika ini mencerminkan perubahan dalam masyarakat dan memberikan cerminan yang segar pada identitas Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Bahasa & Sastra</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `
        },
        // 14
        {
            id: '14',
            title: 'Sastra Indonesia: Jejak Karya yang Membentuk Wacana Sosial dan Budaya',
            desc: 'Sastra Indonesia telah melahirkan banyak karya besar yang tak hanya berfungsi sebagai hiburan, tetapi juga refleksi atas keadaan sosial dan budaya di setiap zamannya. Artikel ini menyoroti evolusi sastra Indonesia, mulai dari puisi-puisi Chairil Anwar hingga novel-novel kontemporer seperti karya Eka Kurniawan. Karya sastra ini menggambarkan pergeseran pandangan hidup masyarakat, nilai-nilai sosial, serta perjuangan identitas di era modern.',
            type: 'Bahasa & Sastra',
            type2: 'Bahasa & Sastra',

            membaca: 'belum membaca',
            imgBesar: 'https://i.pinimg.com/564x/0d/5d/1f/0d5d1f302c87ec8f3ac6626e44a7e82f.jpg',

            img1: 'https://i.pinimg.com/564x/ec/d7/be/ecd7be7e8150b61c6eccdab8ab8e3818.jpg',
            img2: 'https://i.pinimg.com/564x/10/ef/85/10ef85392c9f29cdbceabebc134090c9.jpg',

            text1: 'Sastra Indonesia memiliki sejarah panjang yang kaya akan nilai-nilai budaya, sosial, dan politik. Karya-karya sastra Indonesia tidak hanya berfungsi sebagai hiburan, tetapi juga sebagai medium untuk menyuarakan permasalahan sosial dan budaya yang dihadapi masyarakat pada zamannya. Dari masa kolonial hingga era modern, sastra Indonesia telah menjadi cerminan perubahan sosial dan alat perlawanan terhadap ketidakadilan.',
            text2: 'Sastra Indonesia mencerminkan dinamika sejarah bangsa yang terus berubah. Karya-karya seperti "Hikayat" dan "Serat" di masa lalu, banyak ditulis untuk merekam sejarah kerajaan dan budaya masyarakat lokal. Sastra pada masa ini masih kental dengan unsur mistik dan mitos yang erat hubungannya dengan kepercayaan tradisional, seperti dalam "Hikayat Hang Tuah" yang menonjolkan nilai kepahlawanan dan kesetiaan.',
            text3: 'Pada masa kolonial, sastra Indonesia berkembang lebih jauh sebagai alat perlawanan terhadap penjajah. Karya-karya seperti "Max Havelaar" oleh Multatuli mulai mengkritik ketidakadilan kolonialisme Belanda terhadap rakyat Indonesia. Karya ini membuka mata dunia terhadap penderitaan rakyat pribumi. Di sisi lain, para sastrawan pribumi seperti Abdul Muis dan Sutan Takdir Alisjahbana menggunakan novel dan puisi untuk menyuarakan gagasan nasionalisme dan kemerdekaan.',
            text4: 'Selanjutnya, kita menuju ke Raja Ampat, sebuah kepulauan di Papua Barat yang dijuluki surga bagi penyelam. Dengan lebih dari 600 pulau, Raja Ampat menawarkan keanekaragaman hayati laut yang luar biasa. Terumbu karang yang masih alami, ikan-ikan tropis beraneka warna, serta hamparan pasir putih yang seolah tak tersentuh membuat tempat ini bak surga tersembunyi.',
            text5: 'Tidak hanya pesisir yang menawarkan keindahan, dataran tinggi Indonesia juga menyimpan harta karun alam yang menakjubkan. Pegunungan Dieng di Jawa Tengah, misalnya, menawarkan pemandangan yang magis dengan hamparan ladang kentang, telaga berwarna-warni, serta kawah-kawah vulkanik yang masih aktif. Dieng juga dikenal sebagai tempat dengan udara yang sejuk dan suasana mistis, terutama saat matahari terbit di Bukit Sikunir.',
            text6: 'Sastra Indonesia di era kemerdekaan adalah periode yang kaya dan dinamis, di mana para sastrawan menggali identitas baru bangsa yang baru saja merdeka. Karya-karya sastra pada masa ini tidak hanya berfungsi sebagai hiburan, tetapi juga sebagai sarana untuk menyuarakan aspirasi, harapan, dan tantangan yang dihadapi masyarakat Indonesia. Berikut adalah beberapa aspek penting mengenai sastra di era kemerdekaan.',
            text7: 'Setelah Proklamasi Kemerdekaan pada 17 Agustus 1945, sastra menjadi alat yang ampuh untuk membangkitkan semangat nasionalisme di kalangan rakyat. Banyak sastrawan yang menggunakan karya mereka untuk mengekspresikan kebanggaan akan identitas bangsa dan mengajak masyarakat untuk bersatu dalam membangun negara. Puisi-puisi dari Chairil Anwar yang berapi-api, misalnya, sering kali mengandung semangat perjuangan dan kebangkitan.',
            text8: 'Karya sastra pada era ini banyak menggambarkan realitas sosial yang dihadapi masyarakat Indonesia, mulai dari kemiskinan, ketidakadilan, hingga perjuangan untuk mencapai kehidupan yang lebih baik. Novel "Bumi Manusia" karya Pramoedya Ananta Toer misalnya, memberikan gambaran mendalam tentang kehidupan masyarakat pribumi di bawah penjajahan Belanda dan perjuangan mereka untuk meraih kebebasan.',
            text9: 'Sastra di era kemerdekaan juga sering kali mengangkat tema perjuangan dan keberanian. Karya-karya sastrawan seperti Sutan Takdir Alisjahbana dan Taufiq Ismail menyoroti semangat perlawanan terhadap penjajahan dan penindasan. Dalam puisi dan prosa mereka, tercermin nilai-nilai keberanian, kejujuran, dan keinginan untuk menciptakan masa depan yang lebih baik bagi bangsa.',
            text10: 'Di era kemerdekaan, perempuan mulai mendapatkan tempat yang lebih signifikan dalam sastra. Sastrawan perempuan seperti R.A. Kartini melalui karya-karya dan pemikirannya berkontribusi pada pergerakan emansipasi perempuan. Mereka mengangkat suara perempuan dan isu-isu yang dihadapi, mendorong perubahan sosial dan memperjuangkan hak-hak mereka dalam masyarakat.',

            pfp: '/img/amar.png',
            nama: 'ammar',
            dibuat: '5 Oktober 2024',
            jam: '02:21 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=13" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/4e/e8/14/4ee81419918e99fa81f858bec9db224f.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Bahasa Nusantara: Kekayaan Linguistik yang Menjaga Identitas Bangsa
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia dikenal sebagai negara dengan keragaman bahasa yang luar biasa. Artikel ini mengeksplorasi kekayaan bahasa daerah di Nusantara, mulai dari bahasa Jawa, Sunda, hingga Toraja, serta peran pentingnya dalam menjaga identitas budaya setiap suku bangsa. Di tengah arus globalisasi, bahasa-bahasa ini menghadapi tantangan, namun upaya pelestariannya menjadi simbol penting dalam menjaga keanekaragaman dan warisan budaya Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Bahasa & Sastra</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=14" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/0d/5d/1f/0d5d1f302c87ec8f3ac6626e44a7e82f.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/amar.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">ammar</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Sastra Indonesia: Jejak Karya yang Membentuk Wacana Sosial dan Budaya</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Sastra Indonesia telah melahirkan banyak karya besar yang tak hanya berfungsi sebagai hiburan, tetapi juga refleksi atas keadaan sosial dan budaya di setiap zamannya. Artikel ini menyoroti evolusi sastra Indonesia, mulai dari puisi-puisi Chairil Anwar hingga novel-novel kontemporer seperti karya Eka Kurniawan. Karya sastra ini menggambarkan pergeseran pandangan hidup masyarakat, nilai-nilai sosial, serta perjuangan identitas di era modern.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Bahasa & Sastra</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=15" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/f5/21/0b/f5210be3e8de71e11b26b4e9c498f6b3.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://i.pinimg.com/736x/47/8a/89/478a89cdd089bee40a85842323d16199.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Seo Ah-yi</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Puisi dan Prosa Lintas Generasi: Dinamika Bahasa dalam Karya Sastra Modern</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                   Artikel ini mengeksplorasi bagaimana puisi dan prosa Indonesia berkembang dari masa ke masa, serta bagaimana bahasa terus bertransformasi dalam karya-karya sastra modern. Generasi baru penulis Indonesia memadukan bahasa formal dan bahasa sehari-hari dengan luwes, menciptakan karya yang relevan dengan kehidupan urban dan digital. Dinamika ini mencerminkan perubahan dalam masyarakat dan memberikan cerminan yang segar pada identitas Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Bahasa & Sastra</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `


        },
        // 15
        {
            id: '15',
            title: 'Puisi dan Prosa Lintas Generasi: Dinamika Bahasa dalam Karya Sastra Modern',
            desc: 'Artikel ini mengeksplorasi bagaimana puisi dan prosa Indonesia berkembang dari masa ke masa, serta bagaimana bahasa terus bertransformasi dalam karya-karya sastra modern. Generasi baru penulis Indonesia memadukan bahasa formal dan bahasa sehari-hari dengan luwes, menciptakan karya yang relevan dengan kehidupan urban dan digital. Dinamika ini mencerminkan perubahan dalam masyarakat dan memberikan cerminan yang segar pada identitas Indonesia.',
            type: 'Bahasa & Sastra',
            type2: 'Bahasa & Sastra',

            membaca: 'belum membaca',
            imgBesar: 'https://i.pinimg.com/564x/f5/21/0b/f5210be3e8de71e11b26b4e9c498f6b3.jpg',

            img1: 'https://i.pinimg.com/564x/fa/af/33/faaf3379163165e239cf47953712051c.jpg',
            img2: 'https://i.pinimg.com/564x/02/e4/83/02e4837d7e4f0e181a5cda700eb0e856.jpg',

            text1: 'Sastra modern Indonesia merupakan cermin dari perjalanan budaya, pemikiran, dan dinamika bahasa yang terus berkembang. Puisi dan prosa, sebagai dua bentuk utama karya sastra, menyimpan kekayaan bahasa yang mencerminkan identitas dan keunikan masyarakat Indonesia. Dalam konteks ini, dinamika bahasa dalam puisi dan prosa lintas generasi menjadi tema yang menarik untuk dieksplorasi.',
            text2: 'Bahasa adalah alat utama yang digunakan sastrawan untuk mengekspresikan ide dan emosi. Dalam sastra modern, terutama sejak awal abad ke-20, terjadi evolusi bahasa yang mencerminkan perubahan sosial dan budaya. Penggunaan bahasa baku mulai menggeser bahasa daerah dan dialek lokal, meskipun banyak sastrawan tetap berusaha mempertahankan kekayaan bahasa daerah mereka.',
            text3: 'Puisi sering kali menjadi medium untuk menyampaikan emosi yang mendalam. Sastrawan seperti Sapardi Djoko Damono dan Chairil Anwar menggunakan bahasa yang padat dan penuh makna dalam puisi mereka. Dalam karyanya, mereka menciptakan imaji yang kuat melalui pilihan kata yang tepat, menciptakan resonansi emosional yang mendalam bagi pembaca.',
            text4: 'Prosa, di sisi lain, lebih cenderung mencerminkan realitas sosial dan kehidupan sehari-hari. Karya-karya seperti "Laut Bercerita" karya Leila S. Chudori menggambarkan dinamika kehidupan masyarakat Indonesia dengan bahasa yang lugas dan realistis. Melalui prosa, sastrawan mampu merangkai narasi yang kompleks dan menggambarkan konteks sosial yang lebih luas.',
            text5: 'Dalam beberapa dekade terakhir, munculnya bahasa gaul dan penggunaan dialek lokal dalam sastra modern menjadi fenomena menarik. Penulis muda, seperti Tere Liye dan Raditya Dika, sering kali menggabungkan bahasa sehari-hari dengan gaya bahasa yang lebih santai. Hal ini menciptakan kedekatan dengan pembaca, terutama generasi muda, dan menambah kekayaan bahasa dalam sastra.',
            text6: 'Perkembangan teknologi dan media sosial juga memengaruhi bahasa dalam sastra modern. Penulis kini dapat dengan cepat menyebarluaskan karya mereka melalui platform digital, yang juga mendorong eksperimen bahasa dan bentuk. Puisi dan prosa pendek yang dibagikan di Instagram atau Twitter menjadi populer, menciptakan dinamika baru dalam penyampaian karya sastra.',
            text7: 'Bahasa tidak terlepas dari konteks budaya di mana ia digunakan. Dalam puisi dan prosa modern, pengaruh budaya lokal sering kali tercermin dalam pilihan kata dan tema yang diangkat. Sastrawan dari berbagai daerah membawa keunikan bahasa dan tradisi lokal, menjadikan karya mereka kaya akan makna dan nuansa.',
            text8: 'Seiring dengan berjalannya waktu, gaya bahasa dalam puisi dan prosa juga mengalami transisi. Sastrawan generasi sebelumnya sering kali menggunakan gaya bahasa yang lebih formal dan puitis, sementara sastrawan masa kini lebih cenderung menggunakan bahasa yang lebih bebas dan ekspresif. Perbedaan ini mencerminkan perubahan nilai dan cara pandang terhadap sastra.',
            text9: 'Sastra modern tidak hanya berfungsi sebagai hiburan, tetapi juga berperan dalam mempertahankan dan melestarikan bahasa. Karya-karya sastrawan yang menggunakan bahasa daerah dan melibatkan elemen budaya lokal membantu memperkenalkan dan mempertahankan kekayaan bahasa yang ada. Ini menjadi penting di tengah arus globalisasi yang dapat mengancam keberadaan bahasa-bahasa daerah.',
            text10: 'Dinamika bahasa dalam sastra modern juga terlihat dalam kolaborasi antara sastrawan dari berbagai generasi. Diskusi dan pertukaran ide antara penulis muda dan senior menghasilkan karya-karya yang lebih kaya dan beragam. Karya-karya ini sering kali mencerminkan perpaduan gaya dan perspektif yang berbeda, memberikan warna baru dalam dunia sastra.',

            pfp: 'https://i.pinimg.com/736x/47/8a/89/478a89cdd089bee40a85842323d16199.jpg',
            nama: 'Seo ah-yi',
            dibuat: '5 Oktober 2024',
            jam: '02:21 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=13" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/4e/e8/14/4ee81419918e99fa81f858bec9db224f.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/azka.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">azka</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Bahasa Nusantara: Kekayaan Linguistik yang Menjaga Identitas Bangsa
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Indonesia dikenal sebagai negara dengan keragaman bahasa yang luar biasa. Artikel ini mengeksplorasi kekayaan bahasa daerah di Nusantara, mulai dari bahasa Jawa, Sunda, hingga Toraja, serta peran pentingnya dalam menjaga identitas budaya setiap suku bangsa. Di tengah arus globalisasi, bahasa-bahasa ini menghadapi tantangan, namun upaya pelestariannya menjadi simbol penting dalam menjaga keanekaragaman dan warisan budaya Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Bahasa & Sastra</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=14" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/0d/5d/1f/0d5d1f302c87ec8f3ac6626e44a7e82f.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="/img/amar.png" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">ammar</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Sastra Indonesia: Jejak Karya yang Membentuk Wacana Sosial dan Budaya</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                    Sastra Indonesia telah melahirkan banyak karya besar yang tak hanya berfungsi sebagai hiburan, tetapi juga refleksi atas keadaan sosial dan budaya di setiap zamannya. Artikel ini menyoroti evolusi sastra Indonesia, mulai dari puisi-puisi Chairil Anwar hingga novel-novel kontemporer seperti karya Eka Kurniawan. Karya sastra ini menggambarkan pergeseran pandangan hidup masyarakat, nilai-nilai sosial, serta perjuangan identitas di era modern.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Bahasa & Sastra</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=15" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/f5/21/0b/f5210be3e8de71e11b26b4e9c498f6b3.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://i.pinimg.com/736x/47/8a/89/478a89cdd089bee40a85842323d16199.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Seo Ah-yi</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Puisi dan Prosa Lintas Generasi: Dinamika Bahasa dalam Karya Sastra Modern</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                   Artikel ini mengeksplorasi bagaimana puisi dan prosa Indonesia berkembang dari masa ke masa, serta bagaimana bahasa terus bertransformasi dalam karya-karya sastra modern. Generasi baru penulis Indonesia memadukan bahasa formal dan bahasa sehari-hari dengan luwes, menciptakan karya yang relevan dengan kehidupan urban dan digital. Dinamika ini mencerminkan perubahan dalam masyarakat dan memberikan cerminan yang segar pada identitas Indonesia.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Bahasa & Sastra</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `

   
        },
        // 16
        {
            id: '16',
            title: 'Festival Budaya Nusantara: Merayakan Keberagaman Melalui Seni dan Tradisi',
            desc: 'Festival budaya di Indonesia adalah cara yang luar biasa untuk merayakan keberagaman suku, adat, dan tradisi di Nusantara. Artikel ini mengulas beberapa festival budaya terkenal, seperti Festival Danau Toba, Festival Lembah Baliem, dan Jember Fashion Carnaval. Setiap festival menampilkan keindahan seni tari, musik, serta kerajinan khas daerah, sekaligus menjadi ajang pelestarian budaya yang mendekatkan masyarakat pada akar tradisi mereka.',
            type: 'Acara & Festival',
            type2: 'Acara & Festival',

            membaca: 'belum membaca',
            imgBesar: 'https://i.pinimg.com/736x/2d/4a/35/2d4a35a0a95ff4d632d69be7728cf2fb.jpg',


            img1: 'https://i.pinimg.com/564x/ce/b8/dd/ceb8ddd703a3aa981a4a13fc8fc1d67d.jpg',
            img2: 'https://i.pinimg.com/564x/6c/28/d0/6c28d05d7697b2b245d879a99c931e90.jpg',

            text1: 'Indonesia, sebagai negara dengan ribuan pulau dan lebih dari seribu suku, memiliki keragaman budaya yang sangat kaya. Festival budaya Nusantara menjadi salah satu wadah untuk merayakan dan melestarikan keberagaman ini. Dalam setiap festival, seni, tradisi, dan nilai-nilai budaya ditampilkan dengan semarak, menciptakan pengalaman yang mendalam bagi masyarakat dan pengunjung.',
            text2: 'Festival budaya memiliki peran penting dalam menjaga dan mempromosikan warisan budaya Indonesia. Dengan adanya festival ini, masyarakat diingatkan akan nilai-nilai sejarah dan tradisi yang diwariskan oleh nenek moyang. Selain itu, festival ini juga menjadi ajang untuk memperkenalkan budaya Indonesia kepada dunia internasional.',
            text3: 'Di Indonesia, terdapat berbagai jenis festival budaya yang diadakan di berbagai daerah. Setiap festival memiliki keunikan dan ciri khasnya masing-masing. Misalnya, Festival Bali Jani menampilkan pertunjukan seni dan ritual adat Bali, sementara Festival Danau Toba mengangkat budaya Batak dengan tarian dan lagu-lagu tradisional.',
            text4: 'Seni pertunjukan, seperti tari, musik, dan teater, menjadi daya tarik utama dalam festival budaya. Tarian daerah, seperti Tari Kecak dari Bali dan Tari Saman dari Aceh, sering kali dipertunjukkan untuk menghibur pengunjung. Melalui seni pertunjukan, pengunjung dapat merasakan keindahan dan kedalaman makna budaya yang diwakili.',
            text5: 'Festival budaya juga sering kali diisi dengan pameran kerajinan tangan dan kuliner tradisional. Pengunjung dapat melihat dan membeli berbagai produk lokal, seperti tenun ikat, keramik, dan anyaman bambu. Selain itu, makanan khas dari berbagai daerah disajikan, memberikan kesempatan bagi pengunjung untuk mencicipi cita rasa Nusantara.',
            text6: 'Selain merayakan budaya, festival budaya juga memiliki dampak sosial dan ekonomi yang signifikan. Festival ini menarik wisatawan domestik dan mancanegara, yang berdampak pada peningkatan ekonomi lokal. Masyarakat setempat mendapatkan peluang usaha baru, baik dalam sektor pariwisata maupun perdagangan.',
            text7: 'Festival budaya sering kali menjadi ajang pendidikan bagi generasi muda. Dengan mengajak anak-anak dan remaja untuk berpartisipasi, mereka dapat belajar tentang sejarah dan budaya mereka sendiri. Ini penting untuk memastikan bahwa warisan budaya tetap hidup di tengah arus modernisasi.',
            text8: 'Dalam beberapa tahun terakhir, inovasi dalam pelaksanaan festival budaya mulai terlihat. Penggunaan teknologi, seperti media sosial dan aplikasi, memungkinkan festival untuk menjangkau audiens yang lebih luas. Hal ini juga membuka peluang untuk memperkenalkan budaya Indonesia ke khalayak internasional dengan lebih efektif.',
            text9: 'Peran pemerintah dan komunitas lokal sangat penting dalam penyelenggaraan festival budaya. Dukungan dari pemerintah dalam bentuk dana, promosi, dan fasilitas sangat membantu kelangsungan festival. Sementara itu, partisipasi aktif dari komunitas lokal memastikan bahwa festival mencerminkan keaslian dan kekayaan budaya daerah.',
            text10: 'Di era globalisasi, festival budaya juga menghadapi tantangan. Budaya asing yang masuk dapat mengancam keberadaan budaya lokal. Oleh karena itu, festival budaya berfungsi sebagai benteng untuk melestarikan dan menguatkan identitas budaya Indonesia. Melalui festival, masyarakat diingatkan untuk bangga dengan budaya mereka.',

            pfp: 'https://awsimages.detik.net.id/community/media/visual/2024/02/06/sweet-home-3-2026_11.jpeg?w=500&q=90',
            nama: 'Cha Hyun So',
            dibuat: '5 Oktober 2024',
            jam: '02:21 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=16" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/736x/2d/4a/35/2d4a35a0a95ff4d632d69be7728cf2fb.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://awsimages.detik.net.id/community/media/visual/2024/02/06/sweet-home-3-2026_11.jpeg?w=500&q=90" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Cha Hyun So</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Festival Budaya Nusantara: Merayakan Keberagaman Melalui Seni dan Tradisi
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                   Festival budaya di Indonesia adalah cara yang luar biasa untuk merayakan keberagaman suku, adat, dan tradisi di Nusantara. Artikel ini mengulas beberapa festival budaya terkenal, seperti Festival Danau Toba, Festival Lembah Baliem, dan Jember Fashion Carnaval. Setiap festival menampilkan keindahan seni tari, musik, serta kerajinan khas daerah, sekaligus menjadi ajang pelestarian budaya yang mendekatkan masyarakat pada akar tradisi mereka.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Acara & Festival</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=17" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/ae/cc/74/aecc744a94b5f5af736b97376970827a.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/sweet-home-season-one-eun-hyeok-headphones.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Lee Eun-hyuk</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Karnaval Nusantara: Pesta Rakyat yang Menghidupkan Warna-warni Tradisi</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                   Indonesia kaya akan karnaval-karnaval yang memamerkan seni dan budaya lokal, mulai dari Karnaval Batik Solo hingga Karnaval Karawo di Gorontalo. Artikel ini membahas bagaimana acara-acara karnaval menjadi platform untuk menampilkan kreativitas dalam busana, tarian, dan seni rupa, serta menjadi daya tarik wisata yang menarik perhatian internasional. Karnaval ini tidak hanya hiburan, tetapi juga cerminan identitas budaya yang penuh warna dan semangat kebersamaan.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Acara & Festival</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=18" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/f2/e9/f0/f2e9f0efff2dfd584644ef61b9b0abbe.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/sweet-home-season-one-eun-hyeok-headphones.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Lee Eun-hyuk</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1bulan yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Festival Indonesia: Festival di Danau Toba bersama seluruh rakyat yang menghadiri acara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                 Festival Danau Toba adalah festival tahunan yang diadakan di sekitar Danau Toba, Sumatera Utara. Festival ini merayakan keindahan alam dan budaya Batak, menampilkan pertunjukan seni, perlombaan, dan pameran kuliner lokal. Acara ini menarik banyak wisatawan, baik domestik maupun internasional.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Acara & Festival</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `
        },
        // 15
        {
            id: '17',
            title: 'Karnaval Nusantara: Pesta Rakyat yang Menghidupkan Warna-warni Tradisi',
            desc: 'Indonesia kaya akan karnaval-karnaval yang memamerkan seni dan budaya lokal, mulai dari Karnaval Batik Solo hingga Karnaval Karawo di Gorontalo. Artikel ini membahas bagaimana acara-acara karnaval menjadi platform untuk menampilkan kreativitas dalam busana, tarian, dan seni rupa, serta menjadi daya tarik wisata yang menarik perhatian internasional. Karnaval ini tidak hanya hiburan, tetapi juga cerminan identitas budaya yang penuh warna dan semangat kebersamaan.',
            type: 'Acara & Festival',
            type2: 'Acara & Festival',

            membaca: 'belum membaca',
            imgBesar: 'https://i.pinimg.com/564x/ae/cc/74/aecc744a94b5f5af736b97376970827a.jpg',

            img1: 'https://i.pinimg.com/736x/01/8f/4d/018f4ddd8f99f4d52c74822f2316d1b1.jpg',
            img2: 'https://i.pinimg.com/736x/0e/3d/77/0e3d776d8ad216a1ef54683d89b45265.jpg',

            text1: 'Karnaval Nusantara adalah salah satu perayaan yang sangat ditunggu-tunggu di Indonesia, di mana keragaman budaya, seni, dan tradisi ditampilkan dalam bentuk pertunjukan yang megah. Setiap tahun, karnaval ini menarik perhatian ribuan pengunjung dari dalam dan luar negeri, memberikan kesempatan bagi masyarakat untuk merayakan dan melestarikan kekayaan budaya yang dimiliki. Dengan beragam atraksi, mulai dari parade hingga pertunjukan seni, karnaval ini tidak hanya menjadi ajang hiburan, tetapi juga menjadi sarana edukasi tentang budaya Indonesia.',
            text2: 'Karnaval Nusantara memiliki akar yang dalam dalam tradisi masyarakat Indonesia. Perayaan ini sering kali diadakan untuk merayakan hari besar, festival panen, atau untuk menghormati tradisi dan leluhur. Setiap daerah di Indonesia memiliki cara tersendiri dalam menyelenggarakan karnaval, menciptakan nuansa yang unik dan khas.',
            text3: 'Karnaval ini diikuti oleh berbagai kelompok masyarakat, mulai dari pelajar, komunitas seni, hingga para seniman profesional. Setiap peserta menampilkan kostum yang mencolok dan atraktif, merepresentasikan budaya masing-masing daerah. Atraksi yang ditampilkan meliputi tarian tradisional, musik, dan pertunjukan seni lainnya yang menggugah semangat.',
            text4: 'Setiap karnaval menampilkan ragam budaya yang kaya dan bervariasi. Misalnya, karnaval di Bali sering kali menampilkan tarian Kecak dan gamelan, sedangkan karnaval di Sumatra menampilkan tari Saman dan alat musik tradisional. Ini memberikan kesempatan bagi pengunjung untuk merasakan keanekaragaman budaya Indonesia dalam satu perayaan.',
            text5: 'Salah satu daya tarik utama karnaval adalah kostum yang dikenakan oleh para peserta. Kostum ini biasanya dirancang dengan penuh kreativitas, menggunakan warna-warna cerah dan bahan yang beragam. Setiap kostum memiliki makna dan filosofi tersendiri, mencerminkan budaya dan tradisi dari daerah asalnya.',
            text6: 'Karnaval Nusantara tidak hanya melibatkan peserta dari luar, tetapi juga masyarakat lokal. Partisipasi masyarakat dalam karnaval memberikan warna tersendiri dan menciptakan rasa memiliki terhadap budaya yang ditampilkan. Masyarakat lokal sering kali menjadi panitia penyelenggara, menciptakan suasana yang hangat dan akrab.',
            text7: 'Karnaval ini memiliki dampak positif terhadap ekonomi lokal dan pariwisata. Kehadiran ribuan pengunjung dari luar daerah meningkatkan kunjungan ke tempat-tempat wisata di sekitar lokasi karnaval. Usaha kecil dan menengah juga mendapatkan manfaat dari penjualan makanan, minuman, dan kerajinan tangan selama acara berlangsung.',
            text8: 'Karnaval Nusantara juga berfungsi sebagai ajang edukasi bagi pengunjung. Melalui pertunjukan seni dan budaya, pengunjung diajak untuk mengenal lebih dalam tentang warisan budaya Indonesia. Ini penting, terutama bagi generasi muda, agar mereka menghargai dan melestarikan budaya yang dimiliki bangsa.',
            text9: 'Seiring dengan perkembangan zaman, karnaval Nusantara juga mengalami inovasi dalam pelaksanaannya. Penggunaan teknologi, seperti media sosial dan aplikasi, memungkinkan penyelenggaraan karnaval untuk lebih interaktif dan menarik. Hal ini juga membantu dalam mempromosikan acara dan menjangkau lebih banyak audiens.',
            text10: 'Di tengah arus globalisasi, karnaval Nusantara menjadi salah satu cara untuk melestarikan dan memperkuat identitas budaya lokal. Dengan mengenalkan budaya melalui karnaval, masyarakat diingatkan akan pentingnya menjaga warisan budaya dari pengaruh budaya asing yang mungkin mengancam keberadaan budaya lokal.',

            pfp: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/sweet-home-season-one-eun-hyeok-headphones.jpg',
            nama: 'Lee Eun-hyuk',
            dibuat: '5 Oktober 2024',
            jam: '02:21 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=16" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/736x/2d/4a/35/2d4a35a0a95ff4d632d69be7728cf2fb.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://awsimages.detik.net.id/community/media/visual/2024/02/06/sweet-home-3-2026_11.jpeg?w=500&q=90" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Cha Hyun So</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Festival Budaya Nusantara: Merayakan Keberagaman Melalui Seni dan Tradisi
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                   Festival budaya di Indonesia adalah cara yang luar biasa untuk merayakan keberagaman suku, adat, dan tradisi di Nusantara. Artikel ini mengulas beberapa festival budaya terkenal, seperti Festival Danau Toba, Festival Lembah Baliem, dan Jember Fashion Carnaval. Setiap festival menampilkan keindahan seni tari, musik, serta kerajinan khas daerah, sekaligus menjadi ajang pelestarian budaya yang mendekatkan masyarakat pada akar tradisi mereka.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Acara & Festival</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=17" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/ae/cc/74/aecc744a94b5f5af736b97376970827a.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/sweet-home-season-one-eun-hyeok-headphones.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Lee Eun-hyuk</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Karnaval Nusantara: Pesta Rakyat yang Menghidupkan Warna-warni Tradisi</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                   Indonesia kaya akan karnaval-karnaval yang memamerkan seni dan budaya lokal, mulai dari Karnaval Batik Solo hingga Karnaval Karawo di Gorontalo. Artikel ini membahas bagaimana acara-acara karnaval menjadi platform untuk menampilkan kreativitas dalam busana, tarian, dan seni rupa, serta menjadi daya tarik wisata yang menarik perhatian internasional. Karnaval ini tidak hanya hiburan, tetapi juga cerminan identitas budaya yang penuh warna dan semangat kebersamaan.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Acara & Festival</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=18" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/f2/e9/f0/f2e9f0efff2dfd584644ef61b9b0abbe.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/sweet-home-season-one-eun-hyeok-headphones.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Lee Eun-hyuk</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1bulan yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Festival Indonesia: Festival di Danau Toba bersama seluruh rakyat yang menghadiri acara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                 Festival Danau Toba adalah festival tahunan yang diadakan di sekitar Danau Toba, Sumatera Utara. Festival ini merayakan keindahan alam dan budaya Batak, menampilkan pertunjukan seni, perlombaan, dan pameran kuliner lokal. Acara ini menarik banyak wisatawan, baik domestik maupun internasional.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Acara & Festival</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `

        },
        // 18
        {
            id: '18',
            title: 'Festival Indonesia:  Festival di Danau Toba bersama seluruh rakyat yang menghadiri acara',
            desc: 'Festival Danau Toba adalah festival tahunan yang diadakan di sekitar Danau Toba, Sumatera Utara. Festival ini merayakan keindahan alam dan budaya Batak, menampilkan pertunjukan seni, perlombaan, dan pameran kuliner lokal. Acara ini menarik banyak wisatawan, baik domestik maupun internasional.',
            type: 'Acara & Festival',
            type2: 'Acara & Festival',

            membaca: 'belum membaca',
            imgBesar: 'https://i.pinimg.com/564x/f2/e9/f0/f2e9f0efff2dfd584644ef61b9b0abbe.jpg',

            img1: 'https://i.pinimg.com/564x/f7/6e/31/f76e31e81c37ce337ae1663abf89f8bb.jpg',
            img2: 'https://i.pinimg.com/564x/16/14/b9/1614b9b961f2accaed70f8fb87cc07c9.jpg',

            text1: 'Festival di Danau Toba merupakan salah satu perayaan terbesar dan paling dinantikan di Indonesia, yang menampilkan keindahan alam dan budaya masyarakat Batak. Dengan latar belakang danau vulkanik terbesar di dunia, festival ini menarik perhatian ribuan pengunjung setiap tahunnya. Dalam artikel ini, kita akan menjelajahi pesona festival ini, dari berbagai atraksi yang disajikan hingga keterlibatan masyarakat lokal.',
            text2: 'Festival Danau Toba telah diadakan selama bertahun-tahun untuk merayakan kekayaan budaya dan tradisi masyarakat Batak. Acara ini tidak hanya bertujuan untuk mempromosikan pariwisata, tetapi juga untuk melestarikan warisan budaya yang telah diwariskan dari generasi ke generasi. Dengan tema yang berbeda setiap tahunnya, festival ini selalu menghadirkan hal-hal baru yang menarik bagi pengunjung.',
            text3: 'Salah satu daya tarik utama dari Festival Danau Toba adalah berbagai atraksi budaya yang disajikan. Mulai dari tarian tradisional, musik Batak, hingga pertunjukan seni yang memukau. Pengunjung dapat menikmati pertunjukan Tari Tor-Tor, sebuah tarian yang melambangkan kebersamaan dan rasa syukur masyarakat Batak. Selain itu, musik tradisional seperti Gondang Sabangunan juga menjadi bagian tak terpisahkan dari festival ini.',
            text4: 'Selama festival, pengunjung juga dimanjakan dengan berbagai sajian kuliner khas Batak. Makanan seperti ikan bakar, saksang, dan naniura menjadi menu andalan yang wajib dicoba. Selain itu, pengunjung dapat menikmati camilan tradisional seperti lemang dan bika ambon. Dengan cita rasa yang kaya, kuliner Batak menjadi daya tarik tersendiri bagi wisatawan yang hadir.',
            text5: 'Festival Danau Toba juga menghadirkan pasar seni yang menampilkan kerajinan tangan khas Batak. Di sini, pengunjung dapat menemukan berbagai produk kerajinan, seperti ukiran kayu, tenun, dan perhiasan tradisional. Ini adalah kesempatan bagi pengunjung untuk membawa pulang kenang-kenangan dari festival sekaligus mendukung pengrajin lokal.',
            text6: 'Selain pertunjukan seni, festival ini juga menyelenggarakan berbagai kompetisi dan lomba tradisional. Dari lomba memasak makanan khas Batak hingga lomba tarik tambang, kompetisi ini melibatkan masyarakat dan pengunjung untuk berpartisipasi. Hal ini menciptakan suasana yang meriah dan penuh semangat, di mana semua orang dapat bersenang-senang bersama.',
            text7: 'Festival ini juga dilengkapi dengan pameran yang menampilkan sejarah dan budaya masyarakat Batak. Melalui foto, artefak, dan narasi, pengunjung dapat lebih memahami latar belakang budaya yang kaya ini. Pameran ini menjadi sarana edukasi bagi generasi muda untuk menghargai dan melestarikan budaya lokal.',
            text8: 'Keterlibatan masyarakat lokal dalam festival ini sangatlah penting. Mereka tidak hanya menjadi penonton, tetapi juga berperan aktif dalam berbagai kegiatan. Mulai dari penyelenggaraan acara hingga penampilan seni, masyarakat lokal berkontribusi dalam menjadikan festival ini sukses dan meriah. Ini juga menjadi momen untuk memperkuat rasa kebersamaan di antara mereka.',
            text9: 'Festival ini tidak hanya menjadi ajang perayaan budaya, tetapi juga promosi pariwisata Danau Toba. Dengan keindahan alamnya yang menakjubkan, Danau Toba menjadi salah satu destinasi wisata yang patut dikunjungi. Festival ini menarik perhatian media dan wisatawan, sehingga membantu meningkatkan kunjungan ke kawasan ini.',
            text10: 'Kehadiran festival ini memberikan dampak positif bagi ekonomi lokal. Selama acara berlangsung, berbagai usaha kecil dan menengah mendapatkan kesempatan untuk menjajakan produk mereka. Dengan meningkatnya jumlah pengunjung, sektor pariwisata dan perhotelan juga mengalami pertumbuhan yang signifikan.',

            pfp: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/sweet-home-season-one-eun-hyeok-headphones.jpg',
            nama: 'Lee Eun-hyuk',
            dibuat: '5 Oktober 2024',
            jam: '02:21 WIB',

            card1: 
            `
            <a href="/src/html/detail.html?id=16" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/736x/2d/4a/35/2d4a35a0a95ff4d632d69be7728cf2fb.jpg" alt="">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://awsimages.detik.net.id/community/media/visual/2024/02/06/sweet-home-3-2026_11.jpeg?w=500&q=90" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Cha Hyun So</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Festival Budaya Nusantara: Merayakan Keberagaman Melalui Seni dan Tradisi
</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                   Festival budaya di Indonesia adalah cara yang luar biasa untuk merayakan keberagaman suku, adat, dan tradisi di Nusantara. Artikel ini mengulas beberapa festival budaya terkenal, seperti Festival Danau Toba, Festival Lembah Baliem, dan Jember Fashion Carnaval. Setiap festival menampilkan keindahan seni tari, musik, serta kerajinan khas daerah, sekaligus menjadi ajang pelestarian budaya yang mendekatkan masyarakat pada akar tradisi mereka.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Acara & Festival</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card2: `
             <a href="/src/html/detail.html?id=17" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/ae/cc/74/aecc744a94b5f5af736b97376970827a.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/sweet-home-season-one-eun-hyeok-headphones.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Lee Eun-hyuk</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1jam yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Karnaval Nusantara: Pesta Rakyat yang Menghidupkan Warna-warni Tradisi</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                   Indonesia kaya akan karnaval-karnaval yang memamerkan seni dan budaya lokal, mulai dari Karnaval Batik Solo hingga Karnaval Karawo di Gorontalo. Artikel ini membahas bagaimana acara-acara karnaval menjadi platform untuk menampilkan kreativitas dalam busana, tarian, dan seni rupa, serta menjadi daya tarik wisata yang menarik perhatian internasional. Karnaval ini tidak hanya hiburan, tetapi juga cerminan identitas budaya yang penuh warna dan semangat kebersamaan.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Acara & Festival</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `,
             card3: `
             <a href="/src/html/detail.html?id=18" class="">
                            <div class="sm:w-[440px] w-auto sm:h-[320px] h-[250px] overflow-hidden rounded-xl">
                                <img class="object-cover w-full h-full"
                                    src="https://i.pinimg.com/564x/f2/e9/f0/f2e9f0efff2dfd584644ef61b9b0abbe.jpg" alt="img">
                            </div>
                            <div class="mt-[12px]">
                                <div class="flex items-center pjs-m w-full">
                                    <div class="w-[40px] h-[40px]  overflow-hidden rounded-full mr-[12px]">
                                        <img class="object-cover  w-full h-full" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/sweet-home-season-one-eun-hyeok-headphones.jpg" alt="img">
                                    </div>
                                    <h1 class=" sm:text-[24px] text-[20px] pjs-r text-black">Lee Eun-hyuk</h1>
                                    <p class="pjs-l text-[16px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[16px] text-black/40 pjs-l">1bulan yang lalu</p>
                                </div>
                                <h1 class="my-[8px] sm:text-[28px] text-[24px] pjs-m line-clamp-2 leading-[36px] text-black/80">Festival Indonesia: Festival di Danau Toba bersama seluruh rakyat yang menghadiri acara</h1>
                                <p class="sm:mb-[12px] mb-[5px] sm:text-[16px] text-[14px] pjs-l text-black/60 line-clamp-3  leading-[23px]">
                                 Festival Danau Toba adalah festival tahunan yang diadakan di sekitar Danau Toba, Sumatera Utara. Festival ini merayakan keindahan alam dan budaya Batak, menampilkan pertunjukan seni, perlombaan, dan pameran kuliner lokal. Acara ini menarik banyak wisatawan, baik domestik maupun internasional.
                                </p>
                                <div class="flex items-center">
                                    <h1 class="pjs-r text-[14px] textRed">Acara & Festival</h1>
                                    <p class="pjs-l text-[12px] text-black/10 px-[12px] ">|</p>
                                    <p class="textGray  text-[14px]  textBlack pjs-r">belum membaca</p>
                                </div>
                            </div>
            </a>
             `


        },
    ];

    // Temukan data yang sesuai dengan id dari URL
    const card = cardsData.find(card => card.id === id); // Langsung akses cardsData

    if (card) {
        // Tampilkan data hanya jika elemennya ada di halaman
        const setTextContent = (selector, text) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = text;
            }
        };

        const setImageSrc = (selector, src) => {
            const image = document.querySelector(selector);
            if (image) {
                image.src = src;
            }
        };

        const setContentHTML = (selector, htmlContent) => {
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = htmlContent;
            }
        };

        setTextContent('#title', card.title);
        setTextContent('#title2', card.title);

        setTextContent('#desc', card.desc);
        setTextContent('#type', card.type);
        setTextContent('#type2', card.type);
        setTextContent('#membaca', card.membaca);
        setImageSrc('#imgBesar', card.imgBesar);
        setImageSrc('#img1', card.img1);
        setImageSrc('#img2', card.img2);

        setContentHTML('#card1', card.card1);
        setContentHTML('#card2', card.card2);
        setContentHTML('#card3', card.card3);

        setTextContent('#textS1P1', card.text1);
        setTextContent('#textS1P2', card.text2);
        setTextContent('#textS1P3', card.text3);
        setTextContent('#textS2P1', card.text4);
        setTextContent('#textS2P2', card.text5);
        setTextContent('#textS2P3', card.text6);
        setTextContent('#textS2P4', card.text7);
        setTextContent('#textS2P5', card.text8);
        setTextContent('#textS2P6', card.text9);
        setTextContent('#textS2P7', card.text10);

        setImageSrc('#pfp', card.pfp);
        setTextContent('#nama', card.nama);

        setTextContent('#dibuat', card.dibuat);
        setTextContent('#jam', card.jam);

    } else {
        // Tangani jika id tidak ditemukan
        console.error('oh no error!!');
        setTextContent('#title', 'Data tidak ditemukan');
    }
});



// navbar animate ===============================================
let lastScrollTop = 0;
let scrollTimeout;
const navbar2 = document.querySelector('.navbar-news');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar2.style.transform = 'translateY(-100%)';
    } else {
        navbar2.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
        navbar2.style.transform = 'translateY(0)';
    }, 100);
});