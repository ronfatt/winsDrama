export interface Shot {
  shotNo: string;
  cameraAngle: string;
  visualType: 'Hook' | 'Conflict' | 'Lesson' | 'Action' | 'Climax' | 'Cliffhanger';
  shotCategory: 'Main' | 'BRoll' | 'Establishing'; // 主线画面 / B-roll 细节 / 空景画面
  scene: string;
  action: string;
  character: string;
  dialogue: string;
  audio: string;
  lighting: string;
  props?: string;
  directorNote?: string;
}

export interface Episode {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  hook: string;
  businessIssue: string;
  cliffhanger: string;
  locations: string[];
  characters: string[];
  propsList: string[];
  brandingFocus: string;
  keyTakeaway: string;
  fullScript: {
    section: string;
    speaker?: string;
    text: string;
    type?: 'dialogue' | 'action' | 'vo' | 'scene_heading';
  }[];
  shots: Shot[];
}

export interface Character {
  id: string;
  name: string;
  age: string;
  role: string;
  actorOutfit: string;
  personality: string;
  problemsOrSkills: string[];
  iconicQuote: string;
  avatarBg: string;
}

export const DRAMA_SERIES_INFO = {
  title: "NASI LEMAK NAIK KELAS",
  genre: "Inspirasi / Keusahawanan / Komedi ringan / Kehidupan / Makanan",
  language: "Bahasa Melayu dengan sedikit gaya percakapan Sabah",
  totalEpisodes: 10,
  durationPerEp: "Lebih kurang 3 minit",
  mainLocation: "Wins Garden Cafe, Semporna, Sabah",
  brand: "Perfect Success Capital Sdn Bhd",
  goldenQuote: "Modal boleh bantu kita bermula. Tetapi ilmu yang bantu kita bertahan.",
  taglines: [
    "Dari Gerai Kecil, Bina Impian Besar.",
    "Bukan Sekadar Modal. Bina Bisnes Dengan Arah.",
    "Modal Buka Peluang. Ilmu Bina Masa Depan.",
    "Dulu Jual Nasi Lemak. Hari Ini Bina Perniagaan."
  ]
};

export const CHARACTERS: Character[] = [
  {
    id: "azlan",
    name: "AZLAN",
    age: "29 Tahun",
    role: "Peniaga Nasi Lemak (Protagonis)",
    actorOutfit: "Apron kain terpakai, t-shirt kasual berbilang warna, topi besbol cap cap.",
    personality: "Rajin, cepat panik, tiada asas pengurusan kewangan, tetapi bercita-cita tinggi dan fleksibel untuk belajar.",
    problemsOrSkills: [
      "Tidak tahu mengira kos sebenar.",
      "Tidak tahu beza jualan dan keuntungan.",
      "Terlalu banyak menu berabjad.",
      "Tidak menyimpan rekod kewangan.",
      "Menggabungkan duit bisnes dan duit peribadi."
    ],
    iconicQuote: "Aku bukan malas bah. Aku cuma tidak faham kenapa makin banyak aku jual, makin tidak ada duit.",
    avatarBg: "from-amber-500 to-red-600"
  },
  {
    id: "lina",
    name: "LINA",
    age: "28 Tahun",
    role: "Pegawai Pembiayaan Perfect Success Capital Sdn Bhd",
    actorOutfit: "Blazer korporat santai, kemeja kemas, membawa tablet/smart pad & beg portfolio.",
    personality: "Tenang, profesional, empati, tegas tetapi pembimbing usahawan.",
    problemsOrSkills: [
      "Pakar analisis pembiayaan perniagaan.",
      "Membimbing perancangan aliran tunai.",
      "Menilai struktur kos dan persediaan pasaran."
    ],
    iconicQuote: "Kalau saya bagi kau RM10,000 hari ini, tiga bulan lagi kau akan lebih maju atau hutang kau akan lebih banyak?",
    avatarBg: "from-cyan-500 to-blue-600"
  },
  {
    id: "pakdin",
    name: "PAK DIN",
    age: "45 Tahun",
    role: "Pengusaha Senior / Rakan Wins Garden Cafe",
    actorOutfit: "Kemeja batik Sabah santai, seluar slack, bercakap terus terang.",
    personality: "Berpengalaman, bercakap lurus pedas tetapi penuh nasihat praktikal tempatan.",
    problemsOrSkills: [
      "Memahami budaya perniagaan tempatan Semporna.",
      "Pakar peluang makanan laut dan ruang acara.",
      "Penaung Azlan di lokasi Wins Garden."
    ],
    iconicQuote: "Ramai orang pandai masak. Tapi orang pandai urus bisnes, tidak ramai.",
    avatarBg: "from-emerald-500 to-teal-700"
  }
];

export const EPISODES: Episode[] = [
  {
    id: 1,
    title: "EPISOD 1",
    subtitle: "TINGGAL RM17",
    duration: "3:00",
    hook: "“RM17.40 saja tinggal...”",
    businessIssue: "Episod 1 — Tidak tahu kira keuntungan & Beza jualan vs keuntungan",
    cliffhanger: "“Saya belum cakap saya mau bagi kau duit. Esok bawa semua rekod bisnes kau!”",
    locations: ["Gerai Nasi Lemak Azlan (Wins Garden Cafe)"],
    characters: ["Azlan", "Lina", "Pembekal (Suara Telefon)"],
    propsList: ["Kotak duit kayu", "Wang kertas RM10, RM5, RM1 & syiling", "Telefon bimbit Azlan", "Kertas resit bersepah", "Kad nama Perfect Success Capital"],
    brandingFocus: "Memperkenalkan Perfect Success Capital sebagai rakan pembiayaan berwawasan yang mementingkan semakan kesihatan bisnes.",
    keyTakeaway: "Harga jualan bukan keuntungan. Untung bersih adalah jualan tolak semua kos bahan, gas, sewa, dan pengurusan.",
    fullScript: [
      { section: "PEMBUKAAN", type: "scene_heading", text: "INT. GERAI AZLAN - PAGI" },
      { section: "PEMBUKAAN", type: "action", text: "Close-up kotak wang. Azlan mengira duit dengan jari gemetar: RM10... RM5... RM1... beberapa syiling. Jumlah: RM17.40." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "PEMBEKAL (TELEFON)", text: "Lan, hutang telur minggu lepas bila mau bayar?" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "AZLAN", text: "Esok saya bayar..." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "PEMBEKAL (TELEFON)", text: "Kau cakap esok dari minggu lalu bah!" },
      { section: "PEMBUKAAN", type: "action", text: "Azlan mematikan telefon. Duduk lesu di gerainya. Gerai sepi tanpa pelanggan." },
      { section: "PERTEMUAN LINA", type: "action", text: "Lina datang melangkah kemas dan memesan nasi lemak. Mengambil satu suapan." },
      { section: "PERTEMUAN LINA", type: "dialogue", speaker: "LINA", text: "Sedap bah nasi lemak kau." },
      { section: "PERTEMUAN LINA", type: "dialogue", speaker: "AZLAN", text: "Sedap saja tidak cukup..." },
      { section: "ANALISIS KOS", type: "action", text: "Lina ternampak resit bersepah di kaunter." },
      { section: "ANALISIS KOS", type: "dialogue", speaker: "LINA", text: "Satu bungkus berapa?" },
      { section: "ANALISIS KOS", type: "dialogue", speaker: "AZLAN", text: "RM5." },
      { section: "ANALISIS KOS", type: "dialogue", speaker: "LINA", text: "Untung berapa?" },
      { section: "ANALISIS KOS", type: "dialogue", speaker: "AZLAN", text: "RM5 lah!" },
      { section: "ANALISIS KOS", type: "dialogue", speaker: "LINA", text: "RM5 itu harga jualan. Bukan untung." },
      { section: "ANALISIS KOS", type: "action", text: "Lina mengira beras, santan, telur, ikan bilis, kacang, sambal, gas, bekas makanan, dan sewa." },
      { section: "ANALISIS KOS", type: "dialogue", speaker: "LINA", text: "Kalau ikut kira-kira ini, keuntungan satu bungkus mungkin tidak sampai RM1." },
      { section: "ANALISIS KOS", type: "dialogue", speaker: "AZLAN", text: "Jadi selama ini saya kerja untuk apa?!" },
      { section: "ANALISIS KOS", type: "dialogue", speaker: "LINA", text: "Itulah yang kau kena cari tahu." },
      { section: "PENUTUP & CLIFFHANGER", type: "action", text: "Lina menyerahkan kad nama Perfect Success Capital Sdn Bhd." },
      { section: "PENUTUP & CLIFFHANGER", type: "dialogue", speaker: "AZLAN", text: "Kamu syarikat pinjaman? Kalau macam tu bagus, saya memang perlukan duit!" },
      { section: "PENUTUP & CLIFFHANGER", type: "dialogue", speaker: "LINA", text: "Saya belum cakap saya mau bagi kau duit. Esok bawa semua rekod bisnes kau. Kita tengok dulu apa masalah sebenar." }
    ],
    shots: [
      {
        shotNo: "1.0",
        cameraAngle: "Extreme Wide Angle (EWA) - Drone / High Tilt",
        visualType: "Hook",
        shotCategory: "Establishing",
        scene: "Pemandangan pantai Semporna waktu pagi sunyi.",
        action: "Kamera perlahan-lahan bergerak dari laut biru menghala ke Wins Garden Cafe.",
        character: "Tiada (Pemandangan)",
        dialogue: "",
        audio: "BGM: Melodi gitar akustik lembut bermula. | SFX: Bunyi ombak laut tenang dan deruan angin pagi.",
        lighting: "Cahaya terbit matahari ambar kebiruan.",
        directorNote: "Establishing shot 3 saat untuk menetapkan lokasi Semporna Sabah."
      },
      {
        shotNo: "1.1",
        cameraAngle: "Extreme Close-Up (ECU) - High Angle",
        visualType: "Hook",
        shotCategory: "BRoll",
        scene: "Kotak wang kayu lusuh terbuka.",
        action: "Jari-jemari Azlan mengira duit kertas RM10, RM5, RM1 dan syiling 20 sen satu per satu.",
        character: "Azlan (Tangan)",
        dialogue: "AZLAN (VO): “RM17.40 saja tinggal...”",
        audio: "SFX: Bunyi dentingan syiling berat atas kayu.",
        lighting: "Fokus tajam pada permukaan duit kertas kusam.",
        props: "Kotak kayu, RM17.40",
        directorNote: "Kanta macro 50mm, emosi panik kewangan 5 saat pertama."
      },
      {
        shotNo: "1.2",
        cameraAngle: "Medium Close-Up (MCU) - Eye Level",
        visualType: "Conflict",
        shotCategory: "Main",
        scene: "Azlan duduk di kerusi plastik gerai.",
        action: "Telefon bimbit capcai Azlan berbunyi nyaring. Azlan memandang skrin dengan muka serabut lalu menjawab.",
        character: "Azlan & Suara Pembekal",
        dialogue: "PEMBEKAL: “Lan, hutang telur minggu lepas bila mau bayar?”\nAZLAN: “Esok saya bayar...”",
        audio: "SFX: Nada dering retro nyaring.",
        lighting: "Side lighting menonjolkan garis risau di dahi Azlan.",
        props: "Telefon kapcai",
        directorNote: "Cut pantas reaksi Azlan apabila dipotong oleh pembekal."
      },
      {
        shotNo: "1.2b",
        cameraAngle: "Close-Up (CU) - Static Detail",
        visualType: "Conflict",
        shotCategory: "BRoll",
        scene: "Kaunter gerai nasi lemak sepi.",
        action: "Pengukus nasi mengeluaran sedikit stim nipis, papan tanda gerai azlan kelihatan sedikit senget.",
        character: "Tiada",
        dialogue: "AZLAN (VO): “Sedap saja tidak cukup...”",
        audio: "SFX: Desiran pengukus lembut.",
        lighting: "Warm morning sun shadow.",
        directorNote: "B-roll gerai kosong tanpa pelanggan."
      },
      {
        shotNo: "1.3",
        cameraAngle: "Medium Shot (MS) - Tracking Shot",
        visualType: "Action",
        shotCategory: "Main",
        scene: "Kaunter gerai nasi lemak.",
        action: "Lina melangkah kemas memakai suit korporat santai, duduk di meja kayu dan memesan nasi lemak.",
        character: "Lina & Azlan",
        dialogue: "LINA: “Sedap bah nasi lemak kau.”\nAZLAN: “Sedap saja tidak cukup.”",
        audio: "SFX: Bunyi suapan sudu pada pinggan.",
        lighting: "Natural daylight bright.",
        props: "Pinggan nasi lemak biasa",
        directorNote: "Kontras jelas pakaian Lina (biru profesional) dan Azlan (apron kusam)."
      },
      {
        shotNo: "1.4",
        cameraAngle: "Over-The-Shoulder (OTS) - Focus Pull",
        visualType: "Lesson",
        shotCategory: "Main",
        scene: "Meja makan gerai.",
        action: "Lina mengambil resit comot dan pen, mula melakar pengiraan kos bahan di atas kertas.",
        character: "Lina",
        dialogue: "LINA: “RM5 itu harga jualan. Bukan untung... Keuntungan satu bungkus mungkin tidak sampai RM1.”",
        audio: "SFX: Bunyi goresan pen di atas kertas resit kasar.",
        lighting: "Focus pada kertas pengiraan Lina.",
        props: "Pen & Kertas Resit",
        directorNote: "Pengiraan kos asas yang visual dan jelas."
      },
      {
        shotNo: "1.4b",
        cameraAngle: "Extreme Close-Up (ECU) - Pen Goresan",
        visualType: "Lesson",
        shotCategory: "BRoll",
        scene: "Resit kedai bersepah.",
        action: "Tangan Lina memotong angka RM5 dan bulatkan angka RM0.80 untung bersih.",
        character: "Lina (Tangan)",
        dialogue: "AZLAN (VO): “Jadi selama ini saya kerja untuk apa?!”",
        audio: "SFX: Scratch pen sound.",
        lighting: "Direct top down light.",
        props: "Kertas resit",
        directorNote: "Insert Shot pengiraan matematik ringkas."
      },
      {
        shotNo: "1.5",
        cameraAngle: "Close-Up (CU) - Dynamic Push-In",
        visualType: "Cliffhanger",
        shotCategory: "Main",
        scene: "Lina berdiri meletakkan kad nama Perfect Success Capital.",
        action: "Azlan memegang kad nama ingat terus dapat pinjaman, Lina tersenyum menepis andaian tersebut.",
        character: "Azlan & Lina",
        dialogue: "AZLAN: “Saya memang perlukan duit!”\nLINA: “Saya belum cakap saya mau bagi kau duit. Esok bawa semua rekod bisnes kau!”",
        audio: "BGM: Dramatic hit crescendo ke Cut To Black.",
        lighting: "Key light atas logo Perfect Success Capital Sdn Bhd.",
        props: "Kad nama PSC",
        directorNote: "Tamat episod dengan cliffhanger penutup."
      }
    ]
  },
  {
    id: 2,
    title: "EPISOD 2",
    subtitle: "BUKAN SEMUA ORANG PERLU PINJAM DUIT",
    duration: "3:00",
    hook: "“Kalau bisnes kau bocor, tambah duit cuma buat lubang semakin besar!”",
    businessIssue: "Episod 2 — Tidak semua masalah selesai dengan pembiayaan / disiplin rekod",
    cliffhanger: "“Buktikan dulu kau boleh urus RM100. Lepas itu baru kita bincang RM10,000.”",
    locations: ["Wins Garden Cafe (Meja Perbincangan Outdoors)"],
    characters: ["Azlan", "Lina", "Pak Din"],
    propsList: ["Beg plastik lutsinar penuh resit berlipat", "Resit kedai kasut peribadi", "Papan cabaran 14 Hari bertulis marker pen"],
    brandingFocus: "Menunjukkan etika pembiayaan bertanggungjawab Perfect Success Capital (bukan pemberi pinjam meluru).",
    keyTakeaway: "Jangan tambah dana dalam perniagaan yang mengalami kebocoran tunai tanpa rekod asas.",
    fullScript: [
      { section: "PEMBUKAAN", type: "scene_heading", text: "EXT. WINGS GARDEN CAFE - HARI" },
      { section: "PEMBUKAAN", type: "action", text: "Azlan meletakkan beg plastik merah penuh dengan kertas resit terenyuk di atas meja Lina." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "AZLAN", text: "Semua ada sini!" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "LINA", text: "Ini rekod?" },
      { section: "PEMBUKAAN", type: "action", text: "Lina menarik satu kertas comot." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "LINA", text: "Ini resit kedai kasut..." },
      { section: "UJIAN PEMBIAYAAN", type: "dialogue", speaker: "AZLAN", text: "Berapa banyak saya boleh pinjam?" },
      { section: "UJIAN PEMBIAYAAN", type: "dialogue", speaker: "LINA", text: "Saya belum pasti kau patut pinjam atau tidak." },
      { section: "UJIAN PEMBIAYAAN", type: "dialogue", speaker: "AZLAN", text: "Kamu kerja syarikat pembiayaan tapi tidak mahu bagi orang pembiayaan?!" },
      { section: "UJIAN PEMBIAYAAN", type: "dialogue", speaker: "LINA", text: "Kalau bisnes kau sedang bocor, tambah duit cuma buat lubang itu semakin besar." },
      { section: "NASIHAT PAK DIN", type: "action", text: "Pak Din menyampuk dari meja sebelah sambil menghirup kopi." },
      { section: "NASIHAT PAK DIN", type: "dialogue", speaker: "PAK DIN", text: "Betul! Kalau baldi berlubang, kau tambah air sampai esok pun tetap kosong." },
      { section: "CABARAN 14 HARI", type: "dialogue", speaker: "LINA", text: "1. Catat semua jualan. 2. Catat semua perbelanjaan. 3. Kurangkan menu yang tidak laku." },
      { section: "CABARAN 14 HARI", type: "dialogue", speaker: "AZLAN", text: "Jadi saya tidak dapat duit?!" },
      { section: "CABARAN 14 HARI", type: "dialogue", speaker: "LINA", text: "Buktikan dulu kau boleh urus RM100. Lepas itu baru kita bincang tentang RM10,000." },
      { section: "PENUTUP", type: "action", text: "Pak Din menepuk bahu Azlan yang mengeluh." },
      { section: "PENUTUP", type: "dialogue", speaker: "PAK DIN", text: "Selamat datang ke dunia bisnes sebenar!" }
    ],
    shots: [
      {
        shotNo: "2.0",
        cameraAngle: "Wide Angle (WA) - Static Sunlight",
        visualType: "Hook",
        shotCategory: "Establishing",
        scene: "Ruang legar outdoor Wins Garden Cafe Semporna.",
        action: "Bayang-bayang pokok kelapa bergoyang ditiup angin laut waktu tengah hari.",
        character: "Tiada",
        dialogue: "",
        audio: "SFX: Bunyi angin pantai dan cawan kopi berdenting.",
        lighting: "Bright tropical sun.",
        directorNote: "Establishing shot suasana santai kedai kopi."
      },
      {
        shotNo: "2.1",
        cameraAngle: "Medium Shot (MS) - Slam Angle",
        visualType: "Hook",
        shotCategory: "Main",
        scene: "Meja kayu Wins Garden Cafe.",
        action: "Azlan meletakkan beg plastik bertimbun resit dengan megah.",
        character: "Azlan & Lina",
        dialogue: "AZLAN: “Semua ada sini!”\nLINA: “Ini resit kedai kasut...”",
        audio: "SFX: Bunyi plastik berkeronyok berat.",
        lighting: "Cahaya petang Semporna terang.",
        props: "Beg plastik resit",
        directorNote: "Komedi fizikal ekspresi wajah Lina apabila melihat resit kasut."
      },
      {
        shotNo: "2.1b",
        cameraAngle: "Extreme Close-Up (ECU) - Resit Kasut",
        visualType: "Hook",
        shotCategory: "BRoll",
        scene: "Di atas meja kayu.",
        action: "Resit bertulis 'Kasut Sukan RM120' diangkat oleh pen pembiayaan Lina.",
        character: "Lina (Tangan)",
        dialogue: "LINA: “Ini bukan belanja bisnes...”",
        audio: "SFX: Rustling paper detail.",
        lighting: "Top light sharp focus.",
        props: "Resit kasut",
        directorNote: "Detail insert resit peribadi."
      },
      {
        shotNo: "2.2",
        cameraAngle: "Two Shot - Medium Close Up",
        visualType: "Conflict",
        shotCategory: "Main",
        scene: "Lina memandang tepat mata Azlan.",
        action: "Lina menerangkan falsafah pembiayaan dengan nada tenang tetapi berwibawa.",
        character: "Lina & Azlan",
        dialogue: "LINA: “Kalau bisnes kau sedang bocor, tambah duit cuma buat lubang itu semakin besar.”",
        audio: "BGM: Rentak bass mendalam membina kefahaman.",
        lighting: "Soft fill light pada muka Lina.",
        directorNote: "Fokus pada mesej teras Perfect Success Capital."
      },
      {
        shotNo: "2.3",
        cameraAngle: "Low Angle - Medium Shot",
        visualType: "Lesson",
        shotCategory: "Main",
        scene: "Pak Din berdiri memegang cawan kopi.",
        action: "Pak Din memberi kiasan baldi berlubang dengan bahasa Sabah lembut.",
        character: "Pak Din",
        dialogue: "PAK DIN: “Kalau baldi berlubang, kau tambah air sampai esok pun tetap kosong.”",
        audio: "SFX: Bunyi hirupan kopi.",
        lighting: "Warm golden hour.",
        directorNote: "Karakter Pak Din sebagai mentor veteran berwibawa."
      },
      {
        shotNo: "2.3b",
        cameraAngle: "Close-Up (CU) - Cawan Kopi",
        visualType: "Lesson",
        shotCategory: "BRoll",
        scene: "Meja kayu Pak Din.",
        action: "Asap nipis naik dari cawan kopi Hainan tradisional Pak Din.",
        character: "Tiada",
        dialogue: "PAK DIN (VO): “Ramai pandai masak, tapi pandai urus tidak ramai.”",
        audio: "SFX: Steam sizzle soft.",
        lighting: "Warm coffee shop ambient.",
        props: "Cawan kopi seramik",
        directorNote: "B-roll suasana minum kopi Sabah."
      },
      {
        shotNo: "2.4",
        cameraAngle: "Close-Up (CU) - Papan Nota Cabaran",
        visualType: "Cliffhanger",
        shotCategory: "Main",
        scene: "Kertas catatan Cabaran 14 Hari di tangan Azlan.",
        action: "Azlan mengeluh panjang, Pak Din menepuk bahunya rapat.",
        character: "Azlan & Pak Din",
        dialogue: "LINA: “Buktikan dulu kau boleh urus RM100. Lepas itu baru kita bincang tentang RM10,000.”\nPAK DIN: “Selamat datang ke dunia bisnes sebenar.”",
        audio: "BGM: Drum sting transition.",
        lighting: "Shadowing dramatic.",
        props: "Kertas Cabaran 14 Hari",
        directorNote: "Freeze frame saat Pak Din menepuk bahu Azlan."
      }
    ]
  },
  {
    id: 3,
    title: "EPISOD 3",
    subtitle: "NASI LEMAK RM5 ATAU RM8?",
    duration: "3:00",
    hook: "“Kau buka gerai atau buka pasar malam? Terlalu banyak menu pembaziran stok!”",
    businessIssue: "Episod 3 — Mengurangkan menu bertindih & Inovasi produk tempatan (Menu Engineering)",
    cliffhanger: "Lina meletakkan lobster segar di atas meja: “Nasi Lemak Lobster!”",
    locations: ["Gerai Azlan / Dapur Wins Garden Cafe"],
    characters: ["Azlan", "Lina", "Pak Din"],
    propsList: ["Papan menu berterabur (10+ menu)", "Stok bahan mentah rosak", "Seekor Lobster segar merah besar"],
    brandingFocus: "PSC membantu usahawan berfikir kreatif memanfaatkan keunikan lokasi dan produk unggul.",
    keyTakeaway: "Menu yang terlalu banyak memenjarakan modal pusingan dalam stok berlebihan.",
    fullScript: [
      { section: "PEMBUKAAN", type: "scene_heading", text: "INT. GERAI AZLAN - HARI" },
      { section: "PEMBUKAAN", type: "action", text: "Pak Din dan Lina melihat papan menu Azlan bertulis: Nasi Lemak, Mee Goreng, Burger, Ayam Goreng, Mi Sup, Kopi, Teh..." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "PAK DIN", text: "Kau buka gerai atau buka pasar malam?" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "AZLAN", text: "Kalau banyak menu, banyak customer lah!" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "LINA", text: "Tidak. Banyak menu buat kau simpan lebih banyak stok. Lebih banyak stok, lebih banyak pembaziran." },
      { section: "STRATEGI MENU", type: "action", text: "Lina menunjukkan pembahagian 3 kategori asas: Nasi Lemak Biasa (RM5), Nasi Lemak Ayam (RM8), Nasi Lemak Premium." },
      { section: "STRATEGI MENU", type: "dialogue", speaker: "AZLAN", text: "Premium mau letak apa?" },
      { section: "STRATEGI MENU", type: "dialogue", speaker: "PAK DIN", text: "Ini Semporna bah. Depan mata kau semua seafood!" },
      { section: "GILA TAPI GENIUS", type: "action", text: "Lina masuk membawa seekor lobster segar dan meletakkannya di atas meja." },
      { section: "GILA TAPI GENIUS", type: "dialogue", speaker: "AZLAN", text: "Jangan cakap..." },
      { section: "GILA TAPI GENIUS", type: "dialogue", speaker: "LINA", text: "Nasi Lemak Lobster!" },
      { section: "GILA TAPI GENIUS", type: "dialogue", speaker: "AZLAN", text: "Gila!" },
      { section: "GILA TAPI GENIUS", type: "dialogue", speaker: "LINA", text: "Kadang-kadang bisnes perlukan idea gila." }
    ],
    shots: [
      {
        shotNo: "3.0",
        cameraAngle: "Medium Wide (MW) - Pasar Laut Semporna",
        visualType: "Hook",
        shotCategory: "Establishing",
        scene: "Jeti nelayan makanan laut Semporna.",
        action: "Bot nelayan kayu berlabuh membawa tangkapan segar waktu pagi.",
        character: "Tiada",
        dialogue: "",
        audio: "SFX: Bunyi enjin bot nelayan & hiruk-pikuk jeti.",
        lighting: "Bright morning sun sea glare.",
        directorNote: "Establishing shot kekayaan laut Semporna."
      },
      {
        shotNo: "3.1",
        cameraAngle: "Wide Shot (WS) - Pan Left",
        visualType: "Hook",
        shotCategory: "Main",
        scene: "Papan menu berserabut dengan pelbagai makanan.",
        action: "Pak Din menggelengkan kepala melihat papan menu Azlan.",
        character: "Pak Din & Azlan",
        dialogue: "PAK DIN: “Kau buka gerai atau buka pasar malam?”",
        audio: "SFX: Suara hiruk-pikuk kedai.",
        lighting: "Bright overhead light.",
        props: "Papan menu kapur serabut",
        directorNote: "Tunjukkan kekeliruan menu yang banyak."
      },
      {
        shotNo: "3.1b",
        cameraAngle: "Close-Up (CU) - Bahan Mentah Terbuang",
        visualType: "Conflict",
        shotCategory: "BRoll",
        scene: "Baki roti burger dan mee layu.",
        action: "Azlan membuang plastik mee goreng yang mula berbau ke dalam tong sampah.",
        character: "Azlan (Tangan)",
        dialogue: "LINA (VO): “Lebih banyak stok, lebih banyak pembaziran.”",
        audio: "SFX: Plastic bin thud.",
        lighting: "Dim store corner.",
        props: "Stok rosak",
        directorNote: "B-roll bukti pembaziran bahan."
      },
      {
        shotNo: "3.2",
        cameraAngle: "Medium Close-Up (MCU)",
        visualType: "Lesson",
        shotCategory: "Main",
        scene: "Lina memegang buku rekod stok.",
        action: "Lina menerangkan pembaziran simpanan stok.",
        character: "Lina",
        dialogue: "LINA: “Lebih banyak stok, lebih banyak pembaziran!”",
        audio: "BGM: Upbeat energetic jazz synth.",
        lighting: "Clean corporate lighting.",
        directorNote: "Grafik tajuk RM5 vs RM8 keluar di skrin."
      },
      {
        shotNo: "3.3",
        cameraAngle: "Extreme Close-Up (ECU) - Hero Shot",
        visualType: "Climax",
        shotCategory: "Main",
        scene: "Lobster merah besar dihempas perlahan atas meja kayu.",
        action: "Mata Azlan terbeliak memandang lobster tersebut.",
        character: "Azlan, Lina, Pak Din",
        dialogue: "LINA: “Nasi Lemak Lobster!”\nAZLAN: “Gila!”",
        audio: "SFX: Bunyi tamparan meja & thud heavy. BGM: Epic reveal boom.",
        lighting: "Spotlight ambar pada lobster.",
        props: "Lobster merah segar",
        directorNote: "Hero shot lobster dengan kesan glamor makanan."
      }
    ]
  },
  {
    id: 4,
    title: "EPISOD 4",
    subtitle: "NASI LEMAK LOBSTER",
    duration: "3:00",
    hook: "“Semporna sudah ada Nasi Lemak Lobster! Sales cecah RM1,480!”",
    businessIssue: "Episod 4 — Produk Wira (Hero Product) & Pemasaran Media Sosial Ringkas",
    cliffhanger: "“Kaya sudah Pak Din! Jualan RM1,480!” — Lina menyampuk: “Untung berapa?”",
    locations: ["Dapur Panggang & Ruang Depan Gerai"],
    characters: ["Azlan", "Pak Din", "Lina", "Pelanggan Ramai"],
    propsList: ["Panggang lobster bersiri", "Mentega cair & serbuk sambal", "Telefon bimbit Lina (Video TikTok/Reels)", "Wang jualan tunaiRM1,480"],
    brandingFocus: "Memperkasakan pemasaran kandungan organik (Content Marketing) berimpak tinggi.",
    keyTakeaway: "Jualan yang melonjak mendadak memerlukan kesediaan pengiraan untung rugi serta-merta.",
    fullScript: [
      { section: "MEMASAK HERO", type: "scene_heading", text: "INT. DAPUR GERAI - PETANG" },
      { section: "MEMASAK HERO", type: "action", text: "Montaj memasak: Nasi lemak panas berkepul asap, sambal merah berkilat, lobster dipanggang atas arang dengan mentega cair meletup-letup." },
      { section: "RASAN PERTAMA", type: "action", text: "Azlan menghidangkan pinggan pertama Nasi Lemak Lobster kepada Pak Din." },
      { section: "RASAN PERTAMA", type: "dialogue", speaker: "AZLAN", text: "Macam mana?" },
      { section: "RASAN PERTAMA", type: "dialogue", speaker: "PAK DIN", text: "Tambah sambal..." },
      { section: "RASAN PERTAMA", type: "action", text: "Azlan hampa, tetapi Pak Din menyambung:" },
      { section: "RASAN PERTAMA", type: "dialogue", speaker: "PAK DIN", text: "Sebab saya mau tambah satu lagi!" },
      { section: "VIRAL VIDEO", type: "action", text: "Lina merakam video pendek 15 saat menunjukkan close-up lobster panas bersambal dan memuat naik ke media sosial." },
      { section: "VIRAL VIDEO", type: "dialogue", speaker: "LINA (VIDEO)", text: "Semporna sudah ada Nasi Lemak Lobster!" },
      { section: "SERBUAN PELANGGAN", type: "action", text: "Keesokan harinya, barisan pelanggan beratur panjang. Azlan kelam-kabut, nasi dan lobster licin habis." },
      { section: "KIRAAN JUALAN", type: "action", text: "Azlan mengira wang di kaunter." },
      { section: "KIRAAN JUALAN", type: "dialogue", speaker: "AZLAN", text: "RM1,480! Pak Din! Kaya sudah!" },
      { section: "KIRAAN JUALAN", type: "dialogue", speaker: "LINA", text: "Untung berapa?" }
    ],
    shots: [
      {
        shotNo: "4.0",
        cameraAngle: "Macro Extreme Close-Up (ECU)",
        visualType: "Hook",
        shotCategory: "BRoll",
        scene: "Nasi lemak santan panas berkepul asap.",
        action: "Senduk kayu mengeduk nasi santan wangi berkilat berdaun pandan.",
        character: "Azlan (Tangan)",
        dialogue: "",
        audio: "SFX: Steam hiss & popping oil.",
        lighting: "Warm golden backlighting.",
        props: "Nasi santan & daun pandan",
        directorNote: "B-roll pengenalan keindahan nasi lemak santan."
      },
      {
        shotNo: "4.1",
        cameraAngle: "Slo-Mo Close-Up (120fps)",
        visualType: "Hook",
        shotCategory: "BRoll",
        scene: "Lobster atas panggangan arang.",
        action: "Mentega cair dituang ke atas isi lobster panggang, asap dan percikan sambal meluncur.",
        character: "Azlan (Tangan)",
        dialogue: "SFX MONTAGE: Bunyi desiran panggangan mendesis.",
        audio: "SFX: Sizzling butter, crackling arang. BGM: High energy cinematic cooking beat.",
        lighting: "Warm firelight orange glow.",
        props: "Lobster, Panggangan, Mentega",
        directorNote: "Montaj ASMR makanan berkualiti sinematik premium."
      },
      {
        shotNo: "4.2",
        cameraAngle: "Vertical Smartphone Framing (9:16 In-Screen)",
        visualType: "Action",
        shotCategory: "Main",
        scene: "Sudut pandang telefon Lina.",
        action: "Lina merakam tayangan keindahan Nasi Lemak Lobster.",
        character: "Lina",
        dialogue: "LINA: “Semporna sudah ada Nasi Lemak Lobster!”",
        audio: "SFX: Notification ding & viral pop chime.",
        lighting: "Natural daylight bright.",
        props: "Smartphone",
        directorNote: "Kesan UI TikTok/Reels bertindih pada skrin."
      },
      {
        shotNo: "4.3",
        cameraAngle: "Wide Dynamic Tracking Shot",
        visualType: "Climax",
        shotCategory: "Main",
        scene: "Barisan pelanggan memanjang di luar gerai.",
        action: "Azlan berpeluh melayan pesanan tanpa henti.",
        character: "Azlan & Pelanggan",
        dialogue: "PELANGGAN: “Mana Nasi Lemak Lobster? Nak 3 set!”",
        audio: "SFX: Riuh sorakan dan perbualan pelanggan.",
        lighting: "Sunny outdoor.",
        directorNote: "Pergerakan kamera pantas menggambarkan suasana serbuan viral."
      },
      {
        shotNo: "4.4",
        cameraAngle: "Medium Close-Up (MCU)",
        visualType: "Cliffhanger",
        shotCategory: "Main",
        scene: "Azlan memegang duit kertas berseri-seri.",
        action: "Lina melangkah dari belakang dengan wajah berfikir.",
        character: "Azlan & Lina",
        dialogue: "AZLAN: “Pak Din! Kaya sudah!”\nLINA: “Untung berapa?”",
        audio: "BGM: Music stops abruptly (Vinyl scratch).",
        lighting: "Dimming light background.",
        directorNote: "Hentikan muzik serta-merta pada soalan Lina."
      }
    ]
  },
  {
    id: 5,
    title: "EPISOD 5",
    subtitle: "SALES BANYAK, DUIT MANA?",
    duration: "3:00",
    hook: "“Duit masuk RM10,000 tapi keluar RM11,000, kau tetap rugi!”",
    businessIssue: "Episod 5 — Aliran tunai (Cashflow), Pengurusan Stok & Memisahkan Akaun Peribadi",
    cliffhanger: "“Sekarang baru kita boleh bincang pasal pembiayaan kewangan!”",
    locations: ["Peti Sejuk & Kaunter Kewangan Gerai"],
    characters: ["Azlan", "Pak Din", "Lina"],
    propsList: ["Lobster rosak/busuk 4 ekor", "Telefon bimbit jenama baharu Azlan", "Buku 5 Poket Akaun (Operasi, Stok, Simpanan, Gaji, Kecemasan)"],
    brandingFocus: "Pendidikan Aliran Tunai PSC untuk memastikan modal yang disuntik tidak terlebur.",
    keyTakeaway: "Jualan tinggi tidak bermakna bisnes sihat jika aliran tunai bocor pada perbelanjaan peribadi dan pembaziran stok.",
    fullScript: [
      { section: "PEMBUKAAN", type: "scene_heading", text: "INT. GERAI AZLAN - PAGI" },
      { section: "PEMBUKAAN", type: "action", text: "Azlan kehairanan melihat baki akaun bank masih nipis walaupun jualan kencang." },
      { section: "PEMBUKAAN", type: "action", text: "Pak Din membuka peti sejuk gerai dan mengeluarkan 4 ekor lobster yang telah rosak." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "PAK DIN", text: "Empat lobster rosak!" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "AZLAN", text: "Sayang bah..." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "PAK DIN", text: "Ini bukan empat lobster. Ini duit kau!" },
      { section: "ANALISIS ALIRAN TUNAI", type: "action", text: "Lina membocorkan kesalahan Azlan: Beli lobster berlebihan tanpa chilled storage, belanja kawan-kawan makan percuma, dan beli telefon pintar baru guna duit gerai." },
      { section: "ANALISIS ALIRAN TUNAI", type: "dialogue", speaker: "LINA", text: "Sales tinggi tidak semestinya bisnes sihat. Kalau duit masuk RM10,000 tapi duit keluar RM11,000, kau tetap rugi!" },
      { section: "SISTEM 5 TABUNG", type: "action", text: "Lina mengajar memisahkan wang kepada 5 komponen: 1. Operasi, 2. Stok, 3. Simpanan, 4. Gaji Pemilik, 5. Kecemasan." },
      { section: "PENUTUP", type: "dialogue", speaker: "LINA", text: "Sekarang baru kita boleh bincang pasal pembiayaan!" },
      { section: "PENUTUP", type: "action", text: "Azlan tersenyum gembira bersemangat." }
    ],
    shots: [
      {
        shotNo: "5.0",
        cameraAngle: "Low Angle Close-Up",
        visualType: "Hook",
        shotCategory: "Establishing",
        scene: "Luar gerai Azlan sebelum dibuka.",
        action: "Lantai kayu basah dibersihkan, gerai belum beroperasi.",
        character: "Tiada",
        dialogue: "",
        audio: "SFX: Bunyi kicauan burung pagi dan sapu kayu.",
        lighting: "Early morning cool light.",
        directorNote: "Establishing shot persediaan kedai."
      },
      {
        shotNo: "5.1",
        cameraAngle: "Medium Shot - Inside Fridge Camera Angle",
        visualType: "Hook",
        shotCategory: "Main",
        scene: "Sudut pandangan dari dalam peti sejuk.",
        action: "Pak Din membuka pintu peti sejuk, memegang lobster tidak segar dengan muka berkerut.",
        character: "Pak Din & Azlan",
        dialogue: "PAK DIN: “Empat lobster rosak! Ini bukan empat lobster, ini duit kau!”",
        audio: "SFX: Bunyi dengungan peti ais & engsel besi.",
        lighting: "Cold blue light dari dalam peti ais.",
        props: "Lobster rosak",
        directorNote: "POV shot unik dari dalam peti sejuk."
      },
      {
        shotNo: "5.1b",
        cameraAngle: "Extreme Close-Up (ECU) - Smartphone Box",
        visualType: "Conflict",
        shotCategory: "BRoll",
        scene: "Di bawah meja kaunter.",
        action: "Kotak pembungkusan telefon pintar baru yang disorokkan oleh Azlan.",
        character: "Tiada",
        dialogue: "LINA (VO): “Belanja kawan makan, beli telefon baru guna duit gerai...”",
        audio: "SFX: Cardboard rustle.",
        lighting: "Shadowed floor corner.",
        props: "Kotak phone baru",
        directorNote: "B-roll bukti kebocoran duit peribadi."
      },
      {
        shotNo: "5.2",
        cameraAngle: "Over-The-Shoulder (OTS)",
        visualType: "Conflict",
        shotCategory: "Main",
        scene: "Lina menunjuk ke telefon pintar baharu di poket Azlan.",
        action: "Azlan cuba menyorokkan telefon pintar barunya dengan rasa bersalah.",
        character: "Azlan & Lina",
        dialogue: "LINA: “Kalau duit masuk RM10,000 tapi keluar RM11,000, kau tetap rugi!”",
        audio: "BGM: Dramatic piano chord structure.",
        lighting: "Direct contrast lighting.",
        props: "New smartphone",
        directorNote: "Penekanan pada tabiat usahawan baharu yang tersilap langkah."
      },
      {
        shotNo: "5.3",
        cameraAngle: "High Angle (Top Down) - Diagram Shot",
        visualType: "Lesson",
        shotCategory: "BRoll",
        scene: "Meja kayu dengan 5 sampul surat bertanda.",
        action: "Tangan Lina menyusun duit mengikut keutamaan perniagaan.",
        character: "Lina",
        dialogue: "LINA: “Wang operasi, wang stok, wang simpanan, wang pemilik, dana kecemasan.”",
        audio: "SFX: Bunyi sampul surat & kertas.",
        lighting: "Warm top-down softlight.",
        props: "5 Sampul Surat Kewangan",
        directorNote: "Shot pendidikan grafik visually appealing."
      }
    ]
  },
  {
    id: 6,
    title: "EPISOD 6",
    subtitle: "MODAL BUKAN DUIT PERCUMA",
    duration: "3:00",
    hook: "“Kenapa mau pinjam RM30,000? Cantik kedai tidak semestinya buat sales naik!”",
    businessIssue: "Episod 6 — Permohonan & Penilaian Pembiayaan Perniagaan PSC secara Berhemah",
    cliffhanger: "Permohonan lulus! Lina: “Jangan gembira sangat dulu. Sekarang baru ujian sebenar bermula!”",
    locations: ["Pejabat / Ruang Mesyuarat Perfect Success Capital"],
    characters: ["Azlan", "Lina"],
    propsList: ["Borang Permohonan Pembiayaan PSC", "Dokumen Rancangan Kelayakan Asset/Equipment", "Surat Kelulusan Rasmi PSC"],
    brandingFocus: "Memperlihatkan proses penilaian pembiayaan profesional dan ketat Perfect Success Capital Sdn Bhd.",
    keyTakeaway: "Pinjaman modal mesti disalurkan kepada aset produktif yang menjana pulangan (ROI), bukannya kos kosmetik.",
    fullScript: [
      { section: "PEMBUKAAN", type: "scene_heading", text: "INT. PEJABAT PSC / MEJA PERBINCANGAN - HARI" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "AZLAN", text: "Saya rasa saya perlukan RM30,000!" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "LINA", text: "Untuk apa?" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "AZLAN", text: "Renovate..." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "LINA", text: "Kenapa renovate?" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "AZLAN", text: "Biar cantik..." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "LINA", text: "Cantik tidak semestinya buat sales naik!" },
      { section: "SENARAI ASET PRODUKTIF", type: "action", text: "Lina membimbing Azlan menyenaraikan keperluan sebenar: 1. Peti sejuk komersial, 2. Peralatan dapur panggangan, 3. Papan tanda jelas, 4. Modal pusingan stok, 5. Pembungkusan mesra alam, 6. Sistem POS pesanan." },
      { section: "PROSES PSC", type: "dialogue", speaker: "LINA", text: "Jangan ambil lebih daripada apa yang kau perlukan. Pembiayaan mesti ikut kemampuan bisnes." },
      { section: "PROSES PSC", type: "action", text: "Lina menerangkan tempoh, komitmen bulanan, tujuan kewangan, dan pengurusan risiko dengan Perfect Success Capital Sdn Bhd." },
      { section: "KELULUSAN", type: "action", text: "Beberapa hari kemudian, Lina menyerahkan dokumen kelulusan." },
      { section: "KELULUSAN", type: "dialogue", speaker: "AZLAN", text: "Kita berjaya!" },
      { section: "KELULUSAN", type: "dialogue", speaker: "LINA", text: "Jangan gembira sangat dulu. Sekarang baru ujian sebenar bermula." }
    ],
    shots: [
      {
        shotNo: "6.0",
        cameraAngle: "Medium Wide - Office Entrance",
        visualType: "Hook",
        shotCategory: "Establishing",
        scene: "Bangunan perkhidmatan kewangan moden Perfect Success Capital.",
        action: "Cahaya mentari berkaca refleks di cermin pejabat.",
        character: "Tiada",
        dialogue: "",
        audio: "SFX: Suara langkah kaki berkeyakinan.",
        lighting: "Bright executive sunlight.",
        directorNote: "Establishing shot keunggulan korporat PSC."
      },
      {
        shotNo: "6.1",
        cameraAngle: "Medium Shot (MS)",
        visualType: "Hook",
        shotCategory: "Main",
        scene: "Azlan duduk di hadapan meja perbincangan Lina.",
        action: "Azlan menyebut angka RM30k dengan gaya berani.",
        character: "Azlan & Lina",
        dialogue: "AZLAN: “Saya perlukan RM30,000!”\nLINA: “Cantik tidak semestinya buat sales naik.”",
        audio: "SFX: Bunyi halaman borang diselak.",
        lighting: "Professional daylight.",
        props: "Borang PSC",
        directorNote: "Penegasan konsep kewangan berhemah."
      },
      {
        shotNo: "6.2",
        cameraAngle: "Close-Up (CU) - Checklist",
        visualType: "Lesson",
        shotCategory: "BRoll",
        scene: "Senarai aset peralatan perniagaan.",
        action: "Pen memotong perkataan 'Renovasi Kosmetik' dan menambah 'Peti Sejuk Komersial & POS'.",
        character: "Lina",
        dialogue: "LINA: “Jangan ambil lebih daripada apa yang kau perlukan.”",
        audio: "SFX: Goresan pen tegas.",
        lighting: "Clean desk illumination.",
        directorNote: "Text overlay senarai peralatan ROI tinggi."
      },
      {
        shotNo: "6.3",
        cameraAngle: "Medium Close-Up (MCU) - Slow Zoom In",
        visualType: "Cliffhanger",
        shotCategory: "Main",
        scene: "Surat kelulusan bertulis Perfect Success Capital Sdn Bhd.",
        action: "Azlan melompat gembira, Lina tersenyum matang memberi amaran lembut.",
        character: "Azlan & Lina",
        dialogue: "AZLAN: “Kita berjaya!”\nLINA: “Sekarang baru ujian sebenar bermula.”",
        audio: "BGM: Inspiring corporate strings swell.",
        lighting: "Bright optimistic lighting.",
        props: "Surat Kelulusan PSC",
        directorNote: "Tunjukkan logo PSC dengan jelas pada dokumen."
      }
    ]
  },
  {
    id: 7,
    title: "EPISOD 7",
    subtitle: "BILA BISNES SUDAH VIRAL",
    duration: "3:00",
    hook: "“Komen negatif! Pelanggan tunggu 40 minit, pesanan salah!”",
    businessIssue: "Episod 7 — Pengurusan Standard Operasi (SOP), Khidmat Pelanggan & Kualiti Berulang",
    cliffhanger: "Pelanggan berpuas hati berkata: “Esok kita datang lagi!”",
    locations: ["Wins Garden Cafe (Kesesakan Waktu Puncak)"],
    characters: ["Azlan", "Pak Din", "Lina", "Content Creators / Pelanggan"],
    propsList: ["Kasut mahal baharu Azlan", "Kertas pesanan bertimbun celam-celam", "Telefon bimbit membaca komen negatif TikTok"],
    brandingFocus: "Kelangsungan perniagaan pasca-pembiayaan melalui kawalan kualiti dan SOP.",
    keyTakeaway: "Viral hanya membawa pelanggan kali pertama. SOP dan perkhidmatan cemerlang yang memastikan pelanggan kembali.",
    fullScript: [
      { section: "PEMBUKAAN", type: "scene_heading", text: "EXT. WINGS GARDEN CAFE - PETANG" },
      { section: "PEMBUKAAN", type: "action", text: "Orang ramai ambil gambar TikTok dengan Nasi Lemak Lobster. Azlan mula sombong, memakai kasut jenama baharu dan bercakap besar." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "AZLAN", text: "Sekarang orang datang Semporna cari nasi lemak aku bah!" },
      { section: "KRISIS KUALITI", type: "action", text: "Kelemahan berlaku: Pelanggan menunggu 40 minit, pesanan tersilap, pekerja bingung, sambal licin." },
      { section: "KRISIS KUALITI", type: "action", text: "Pak Din membaca komen negatif di media sosial." },
      { section: "KRISIS KUALITI", type: "dialogue", speaker: "PAK DIN", text: "“Makanan sedap tapi service lambat. Dulu owner friendly...”" },
      { section: "KRISIS KUALITI", type: "dialogue", speaker: "PAK DIN", text: "Viral boleh buat orang datang sekali. Service yang buat orang datang kali kedua!" },
      { section: "SISTEM SOP", type: "action", text: "Lina masuk membantu Azlan menyusun SOP: 1. Kad Nombor Pesanan, 2. Masa Penyediaan 10 Minit, 3. Pembahagian Stesen Dapur, 4. Layanan Mesra Pelanggan." },
      { section: "PENUTUP", type: "action", text: "Pelanggan menikmati hidangan dan berkata kepada rakannya." },
      { section: "PENUTUP", type: "dialogue", speaker: "PELANGGAN", text: "Esok kita datang lagi!" },
      { section: "PENUTUP", type: "action", text: "Azlan mendengar dan tersenyum insaf." }
    ],
    shots: [
      {
        shotNo: "7.0",
        cameraAngle: "Extreme Wide Angle - Crowd Noise",
        visualType: "Hook",
        shotCategory: "Establishing",
        scene: "Luar Wins Garden Cafe waktu puncak petang.",
        action: "Kereta dan motosikal banyak meletak di luar gerai.",
        character: "Tiada",
        dialogue: "",
        audio: "SFX: Bunyi hon dan hiruk-pikuk pengunjung.",
        lighting: "Afternoon sun flare.",
        directorNote: "Establishing shot serbuan viral."
      },
      {
        shotNo: "7.1",
        cameraAngle: "Dutch Angle (Tilted) - Fast Paced",
        visualType: "Hook",
        shotCategory: "Main",
        scene: "Kesesakan di kaunter gerai Azlan.",
        action: "Pelanggan mengetuk kaunter bising menuntut makanan lambat.",
        character: "Pelanggan & Azlan",
        dialogue: "PELANGGAN: “Dah 40 minit ni! Pesanan saya mana?!”",
        audio: "SFX: Klaxon cawan & bising bising crowd.",
        lighting: "Harsh stress lighting.",
        directorNote: "Kamera senget menggambarkan krisis dan kecelaruan."
      },
      {
        shotNo: "7.1b",
        cameraAngle: "Extreme Close-Up (ECU) - Skrin Komen Negatif",
        visualType: "Conflict",
        shotCategory: "BRoll",
        scene: "Telefon bimbit di tangan Pak Din.",
        action: "Komen TikTok bertulis 1 bintang: 'Sambal habis, lambat nak mampus'.",
        character: "Pak Din (Tangan)",
        dialogue: "PAK DIN (VO): “Dulu owner friendly...”",
        audio: "SFX: Screen scroll chime.",
        lighting: "Screen blue light on face.",
        props: "Smartphone comment section",
        directorNote: "B-roll komen negatif tular."
      },
      {
        shotNo: "7.2",
        cameraAngle: "Medium Shot (MS)",
        visualType: "Lesson",
        shotCategory: "Main",
        scene: "Pak Din memegang telefon pintar menunjukkan komen.",
        action: "Azlan menunduk malu mendengar teguran Pak Din.",
        character: "Pak Din & Azlan",
        dialogue: "PAK DIN: “Viral buat orang datang sekali. Service buat orang datang kali kedua!”",
        audio: "BGM: Low serious tone.",
        lighting: "Shadowed background.",
        directorNote: "Pengajaran penting dalam perniagaan."
      },
      {
        shotNo: "7.3",
        cameraAngle: "Tracking Shot - Kitchen Line",
        visualType: "Action",
        shotCategory: "Main",
        scene: "Aliran kerja SOP baharu di dapur.",
        action: "Pekerja dapur bergerak teratur dengan pemasa (timer) dan nombor pesanan.",
        character: "Azlan & Pekerja Dapur",
        dialogue: "AZLAN: “Nombor 14 siap! 8 minit sahaja!”",
        audio: "SFX: Timer bell ding!",
        lighting: "Bright warm clean lighting.",
        directorNote: "Tunjukkan perubahan positif selepas SOP dilaksanakan."
      }
    ]
  },
  {
    id: 8,
    title: "EPISOD 8",
    subtitle: "JANGAN JUAL NASI LEMAK SAJA",
    duration: "3:00",
    hook: "“Hujan seminggu, jualan jatuh 70%! Kau jual nasi lemak saja?!”",
    businessIssue: "Episod 8 — Diversifikasi Aliran Pendapatan & Mengenal Pasti Aset Terbiar",
    cliffhanger: "Azlan pandang ruang dewan separa terbuka: “Kalau tempat ini kita sewakan...”",
    locations: ["Wins Garden Cafe (Ruang Separa Terbuka / Hall Berhampiran Pantai)"],
    characters: ["Azlan", "Lina", "Pak Din"],
    propsList: ["Hujan lebat di luar window frame", "Papan putih cadangan pakej catering & acara", "Kunci dewan separa terbuka"],
    brandingFocus: "PSC mendorong usahawan mengembangkan potensi perniagaan ke skala lebih besar.",
    keyTakeaway: "Jangan bergantung kepada satu sumber jualan harian; pelbagaikan ke tempahan katering dan acara.",
    fullScript: [
      { section: "PEMBUKAAN", type: "scene_heading", text: "EXT. WINGS GARDEN CAFE - HUJAN LEBAT" },
      { section: "PEMBUKAAN", type: "action", text: "Hujan lebat mencurah-curah. Cafe sepi. Jualan terhempas 70%." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "AZLAN", text: "Kalau hujan seminggu macam mana?!" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "LINA", text: "Kau jual nasi lemak saja?" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "AZLAN", text: "Ya..." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "LINA", text: "Itulah masalahnya!" },
      { section: "DIVERSIFIKASI PENDAPATAN", type: "action", text: "Lina membukakan minda Azlan tentang cabang pendapatan baharu: 1. Catering Pejabat, 2. Birthday Party, 3. Gathering Keluarga, 4. Tempahan Berkumpulan." },
      { section: "PENEMUAN RUANG EVENT", type: "action", text: "Pak Din membawa mereka ke ruang dewan separa terbuka berhampiran Wins Garden Cafe yang tidak dimanfaatkan." },
      { section: "PENEMUAN RUANG EVENT", type: "dialogue", speaker: "PAK DIN", text: "Tempat ini lama sudah saya fikir mau buat sesuatu..." },
      { section: "PENEMUAN RUANG EVENT", type: "action", text: "Azlan mula membayangkan majlis perkahwinan kecil, makan malam syarikat, dan persembahan muzikal." },
      { section: "PENUTUP", type: "dialogue", speaker: "AZLAN", text: "Kalau tempat me ini kita sewakan..." },
      { section: "PENUTUP", type: "action", text: "Lina tersenyum puas." }
    ],
    shots: [
      {
        shotNo: "8.0",
        cameraAngle: "Extreme Wide Angle (EWA) - Moody Rain",
        visualType: "Hook",
        shotCategory: "Establishing",
        scene: "Luar bumbung Wins Garden Cafe ditimpa hujan lebat.",
        action: "Titisan air hujan mencurah ke atas pokok pisang dan permukaan laut bersatu.",
        character: "Tiada",
        dialogue: "",
        audio: "SFX: Guruhan petir dan titisan hujan lebat.",
        lighting: "Moody stormy grey light.",
        directorNote: "Establishing mood kejatuhan jualan waktu hujan."
      },
      {
        shotNo: "8.1",
        cameraAngle: "Wide Shot (WS) - Atmospheric Rain Shot",
        visualType: "Hook",
        shotCategory: "Main",
        scene: "Wins Garden Cafe ditimpa hujan lebat.",
        action: "Azlan duduk termenung melihat kerusi kosong di hadapannya.",
        character: "Azlan",
        dialogue: "AZLAN: “Kalau hujan seminggu macam mana?”",
        audio: "SFX: Bunyi curahan hujan lebat & guruh dari jauh.",
        lighting: "Moody blue rainy light.",
        directorNote: "Kesan emosi kejatuhan jualan sementara."
      },
      {
        shotNo: "8.1b",
        cameraAngle: "Close-Up (CU) - Titisan Hujan Atas Daun",
        visualType: "Conflict",
        shotCategory: "BRoll",
        scene: "Pinggir bumbung gerai.",
        action: "Air hujan menitis perlahan dari bumbung zink ke atas meja kayu kosong.",
        character: "Tiada",
        dialogue: "AZLAN (VO): “Sales jatuh 70%...”",
        audio: "SFX: Heavy rain drops dripping.",
        lighting: "Cold ambient glow.",
        directorNote: "B-roll keheningan waktu hujan."
      },
      {
        shotNo: "8.2",
        cameraAngle: "Medium Shot (MS)",
        visualType: "Lesson",
        shotCategory: "Main",
        scene: "Lina dan Azlan di meja.",
        action: "Lina melakar carta aliran pendapatan baharu.",
        character: "Lina & Azlan",
        dialogue: "LINA: “Satu produk boleh melahirkan beberapa sumber pendapatan!”",
        audio: "BGM: Uplifting acoustic rhythm build.",
        lighting: "Soft interior warm light.",
        directorNote: "Kesan visual melakar ideation."
      },
      {
        shotNo: "8.3",
        cameraAngle: "Slow Pan (Right to Left) - Reveal Shot",
        visualType: "Cliffhanger",
        shotCategory: "Main",
        scene: "Ruang dewan separa terbuka mengadap laut.",
        action: "Lampu gantung dinyalakan perlahan, menunjukkan keindahan ruang majlis.",
        character: "Pak Din, Azlan, Lina",
        dialogue: "PAK DIN: “Tempat ini lama sudah saya fikir mau buat sesuatu...”\nAZLAN: “Kalau tempat ini kita sewakan...”",
        audio: "SFX: Bunyi ombak laut & angin sepoi-sepoi.",
        lighting: "Golden hour sunset glowing over ocean.",
        props: "Lampu fairy lights hiasan",
        directorNote: "Cinematic magic hour reveal shot."
      }
    ]
  },
  {
    id: 9,
    title: "EPISOD 9",
    subtitle: "DARIPADA NASI LEMAK KE EVENT BUSINESS",
    duration: "3:00",
    hook: "“Cari customer dulu, buktikan ada demand baru melabur besar!”",
    businessIssue: "Episod 9 — Ujian Pasaran Berperingkat (MVP / Lean Expansion)",
    cliffhanger: "Pak Din: “Ada orang tanya... kalau mau booking satu hall berapa harga?”",
    locations: ["Dewan Separa Terbuka Wins Garden Cafe"],
    characters: ["Azlan", "Lina", "Pak Din", "Pelanggan Hari Jadi"],
    propsList: ["Meja susunan majlis hari jadi", "Lampu fairy lights", "Set catering Nasi Lemak Lobster", "RM5 lama dalam dompet Azlan"],
    brandingFocus: "Bimbingan perancangan berstrategi PSC mengelakkan risiko hutang tidak terkawal.",
    keyTakeaway: "Uji pasaran dengan konsep paling ringkas sebelum membuat pelaburan pengubahsuaian berskala besar.",
    fullScript: [
      { section: "PEMBUKAAN", type: "scene_heading", text: "INT. DEWAN SEPARA TERBUKA - HARI" },
      { section: "PEMBUKAAN", type: "action", text: "Azlan ghairah mahu merancang lampu mahal, stage besar, perabot baru import." },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "LINA", text: "Jangan renovate besar-besar dulu!" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "AZLAN", text: "Kalau tidak cantik, siapa mau sewa?" },
      { section: "PEMBUKAAN", type: "dialogue", speaker: "LINA", text: "Cari customer dulu! Buktikan ada demand!" },
      { section: "MAJLIS PERTAMA", type: "action", text: "Mereka memulakan versi Lean: Meja makan kemas, lampu sederhana, PA system asas, dan Nasi Lemak Lobster sebagai hidangan utama." },
      { section: "MAJLIS PERTAMA", type: "action", text: "Sambutan hari jadi pertama berjalan lancar. Pelanggan sangat berpuas hati." },
      { section: "REFLEKSI AZLAN", type: "action", text: "Setelah tetamu pulang, Azlan duduk bersendirian. Dia mengeluarkan sekeping wang RM5 lama daripada dompetnya, teringat detik permulaannya yang hanya tinggal RM17.40." },
      { section: "PENUTUP", type: "action", text: "Pak Din berjalan mendekati Azlan." },
      { section: "PENUTUP", type: "dialogue", speaker: "PAK DIN", text: "Lan... ada orang tanya. Kalau mau booking satu hall, berapa harga?" },
      { section: "PENUTUP", type: "action", text: "Azlan tersenyum lebar." }
    ],
    shots: [
      {
        shotNo: "9.0",
        cameraAngle: "Wide Sunset Bay Angle",
        visualType: "Hook",
        shotCategory: "Establishing",
        scene: "Dewan separa terbuka berlatarbelakangkan matahari terbenam Semporna.",
        action: "Lampu fairy lights jingga dinyalakan satu demi satu.",
        character: "Tiada",
        dialogue: "",
        audio: "SFX: Soft acoustic string melody.",
        lighting: "Warm sunset magic hour glow.",
        directorNote: "Establishing shot keindahan ruang dewan."
      },
      {
        shotNo: "9.1",
        cameraAngle: "Medium Shot (MS)",
        visualType: "Hook",
        shotCategory: "Main",
        scene: "Azlan memegang katalog perabot mahal.",
        action: "Lina menutup katalog tersebut dengan tegas.",
        character: "Lina & Azlan",
        dialogue: "LINA: “Cari customer dulu! Buktikan ada demand baru melabur!”",
        audio: "SFX: Bunyi buku ditutup snap.",
        lighting: "Bright day light.",
        props: "Katalog perabot",
        directorNote: "Prinsip perniagaan berhemah Lean Startup."
      },
      {
        shotNo: "9.2",
        cameraAngle: "Montage Tracking Shots",
        visualType: "Action",
        shotCategory: "Main",
        scene: "Persediaan majlis sambutan hari jadi.",
        action: "Azlan menyusun pinggan Nasi Lemak Lobster, tetamu ketawa gembira berlatarbelakangkan sunset.",
        character: "Azlan, Tetamu Majlis",
        dialogue: "TETAMU: “Wah, makanan sedap, tempat sangat cantik!”",
        audio: "BGM: Joyful festive party music.",
        lighting: "Warm evening celebration lights.",
        props: "Hiasan majlis hari jadi",
        directorNote: "Montaj kejayaan majlis pertama."
      },
      {
        shotNo: "9.2b",
        cameraAngle: "Close-Up (CU) - Fairy Lights & Flower Table",
        visualType: "Action",
        shotCategory: "BRoll",
        scene: "Meja santapan majlis.",
        action: "Lampu fairy lights bercahaya lembut menyingkap susunan bunga tropika segar atas kain linen putih.",
        character: "Tiada",
        dialogue: "",
        audio: "SFX: Clinking glasses & laughing ambient.",
        lighting: "Cozy warm ambient lights.",
        props: "Bunga & Fairy lights",
        directorNote: "B-roll dekorasi majlis ringkas tapi elegan."
      },
      {
        shotNo: "9.3",
        cameraAngle: "Extreme Close-Up (ECU) - Emotional Moment",
        visualType: "Climax",
        shotCategory: "BRoll",
        scene: "Azlan memegang wang RM5 kumal lama.",
        action: "Azlan tersenyum sebak mengenangkan perjalanan hidupnya.",
        character: "Azlan",
        dialogue: "AZLAN (VO): “Daripada RM17.40...”",
        audio: "SFX: Bunyi angin malam yang tenang.",
        lighting: "Dim warm spotlight on note.",
        props: "RM5 note",
        directorNote: "Puncak emosi kejayaan watak Azlan."
      },
      {
        shotNo: "9.4",
        cameraAngle: "Medium Shot - Low Angle",
        visualType: "Cliffhanger",
        shotCategory: "Main",
        scene: "Pak Din berdiri di pintu dewan.",
        action: "Pak Din menyampaikan berita tempahan hall baharu.",
        character: "Pak Din & Azlan",
        dialogue: "PAK DIN: “Ada orang tanya... kalau mau booking satu hall berapa harga?”",
        audio: "BGM: Inspiring crescendo chord.",
        lighting: "Night ambient fairy lights.",
        directorNote: "Senyuman yakin Azlan sebagai usahawan berjaya."
      }
    ]
  },
  {
    id: 10,
    title: "EPISOD 10",
    subtitle: "BUKAN SEBAB DUIT",
    duration: "3:30",
    hook: "“Dulu saya fikir masalah saya sebab tidak cukup duit. Rupa-rupanya sebab saya tidak tahu urus bisnes!”",
    businessIssue: "Episod 10 — Kelangsungan Perniagaan, Mentorship & Mesej Utama Perfect Success Capital",
    cliffhanger: "Mesej Penutup Siri PSC: Pembiayaan Hanyalah Satu Alat. Perancangan & Pengurusan Menentukan Perjalanan.",
    locations: ["Wins Garden Cafe & Dewan Acara (Meriah & Berkembang)"],
    characters: ["Azlan (Telah Matang)", "Lina", "Pak Din", "Peniaga Muda (Bakal Azlan Baharu)", "Pekerja-pekerja Azlan"],
    propsList: ["Hidangan premium Nasi Lemak Lobster", "Buku simpanan akaun perniagaan teratur", "Plak ucapan/Penulis PSC"],
    brandingFocus: "Kemuncak penjelmaan imej brand Perfect Success Capital Sdn Bhd sebagai rakan pertumbuhan jangka panjang usahawan.",
    keyTakeaway: "Modal membuka pintu, tetapi disiplin, ilmu pengurusan dan perancangan yang membina masa depan perniagaan.",
    fullScript: [
      { section: "PEMBUKAAN (SETAHUN KEMUDIAN)", type: "scene_heading", text: "EXT. WINGS GARDEN CAFE - PETANG" },
      { section: "PEMBUKAAN (SETAHUN KEMUDIAN)", type: "action", text: "Setahun kemudian. Wins Garden Cafe meriah dengan pelanggan. Dewan acara dipenuhi majlis. Azlan berpakaian kemas memantau pekerja-pekerjanya." },
      { section: "PERTEMUAN PENIAGA MUDA", type: "action", text: "Azlan ternampak seorang peniaga muda duduk seorang diri memandang resit tertekan di meja." },
      { section: "PERTEMUAN PENIAGA MUDA", type: "dialogue", speaker: "PENIAGA MUDA", text: "Abang... bisnes saya macam mau tutup sudah..." },
      { section: "PERTEMUAN PENIAGA MUDA", type: "action", text: "Azlan melihat bayangan dirinya sendiri pada pemuda itu." },
      { section: "PERTEMUAN PENIAGA MUDA", type: "dialogue", speaker: "PENIAGA MUDA", text: "Macam mana abang boleh sampai macam sekarang?" },
      { section: "KEMUNCAK ILMU", type: "action", text: "Azlan tersenyum, memandang Lina dan Pak Din di belakangnya." },
      { section: "KEMUNCAK ILMU", type: "dialogue", speaker: "AZLAN", text: "Dulu saya fikir masalah saya sebab tidak cukup duit." },
      { section: "KEMUNCAK ILMU", type: "dialogue", speaker: "PENIAGA MUDA", text: "Bukan?" },
      { section: "KEMUNCAK ILMU", type: "dialogue", speaker: "AZLAN", text: "Masalah saya sebab saya tidak tahu urus bisnes." },
      { section: "KEMUNCAK ILMU", type: "dialogue", speaker: "LINA", text: "Modal boleh buka pintu." },
      { section: "KEMUNCAK ILMU", type: "dialogue", speaker: "PAK DIN", text: "Tapi kau sendiri kena tahu jalan!" },
      { section: "PENUTUP SIRI", type: "action", text: "Semua ketawa. Azlan menghidangkan pinggan Nasi Lemak Lobster kepada pemuda tersebut." },
      { section: "PENUTUP SIRI", type: "action", text: "Kamera berundur perlahan (Crane shot / Drone zoom out) memperlihatkan suasana indah Wins Garden Cafe, hall yang bercahaya dan kehidupan yang makmur." },
      { section: "TEXT BRANDING PSC", type: "action", text: "Paparan Teks Rasmi: DARIPADA GERAI KECIL, MENUJU PELUANG YANG LEBIH BESAR." },
      { section: "TEXT BRANDING PSC", type: "action", text: "PERFECT SUCCESS CAPITAL SDN BHD\n“Pembiayaan hanyalah satu alat. Perancangan, disiplin dan pengurusan menentukan perjalanan sesebuah perniagaan.”" }
    ],
    shots: [
      {
        shotNo: "10.0",
        cameraAngle: "Extreme Wide Angle (EWA) - Majestic Drone Panorama",
        visualType: "Hook",
        shotCategory: "Establishing",
        scene: "Teluk Semporna dan lokasi kemerComponents Wins Garden Cafe.",
        action: "Kamera drone meluncur di atas laut bercahaya keemasan petang.",
        character: "Tiada",
        dialogue: "",
        audio: "BGM: Grand inspiring orchestral melody.",
        lighting: "Golden sunset horizon.",
        directorNote: "Establishing shot kemuncak siri drama."
      },
      {
        shotNo: "10.1",
        cameraAngle: "Wide Crane Shot - Moving Backward",
        visualType: "Hook",
        shotCategory: "Main",
        scene: "Keseluruhan Wins Garden Cafe setahun kemudian.",
        action: "Suasana gembira, lampu dewan menyala, pekerja bertugas pantas.",
        character: "Azlan, Pekerja, Pelanggan",
        dialogue: "AZLAN (VO): “Dulu saya fikir masalah saya sebab tidak cukup duit...”",
        audio: "BGM: Uplifting orchestral theme song.",
        lighting: "Warm sunset magic hour glow.",
        directorNote: "Shot sinematik menunjukkan kejayaan dan transformasi."
      },
      {
        shotNo: "10.1b",
        cameraAngle: "Close-Up (CU) - Plak Jenama PSC & Resit Teratur",
        visualType: "Lesson",
        shotCategory: "BRoll",
        scene: "Kaunter pengurusan Azlan yang kemas.",
        action: "Buku akaun berbalut kemas dan sistem POS digital bercahaya hijau.",
        character: "Tiada",
        dialogue: "AZLAN (VO): “Sekarang akaun teratur, perniagaan berkembang...”",
        audio: "SFX: Cash register chime & digital beep.",
        lighting: "Warm indoor spotlight.",
        props: "Sistem POS & Buku Akaun",
        directorNote: "B-roll bukti kerapian perniagaan baharu Azlan."
      },
      {
        shotNo: "10.2",
        cameraAngle: "Medium Close-Up (MCU) - Mirroring Shot",
        visualType: "Lesson",
        shotCategory: "Main",
        scene: "Meja peniaga muda tertekan.",
        action: "Azlan duduk di sebelah pemuda itu, menyerupai babak Lina bertemu Azlan di Episod 1.",
        character: "Azlan & Peniaga Muda",
        dialogue: "PENIAGA MUDA: “Macam mana abang boleh berjaya?”\nAZLAN: “Masalah saya sebab saya tidak tahu urus bisnes.”",
        audio: "SFX: Bunyi bayu laut lembut.",
        lighting: "Soft natural light.",
        directorNote: "Penulisan simetri (Full circle storytelling)."
      },
      {
        shotNo: "10.3",
        cameraAngle: "Three Shot - Medium Shot",
        visualType: "Climax",
        shotCategory: "Main",
        scene: "Lina, Pak Din dan Azlan berdiri bersama.",
        action: "Lina dan Pak Din menyampaikan kata-kata azmat siri ini.",
        character: "Lina, Pak Din, Azlan",
        dialogue: "LINA: “Modal boleh buka pintu.”\nPAK DIN: “Tapi kau sendiri kena tahu jalan!”",
        audio: "BGM: Main motivational soundtrack climax.",
        lighting: "Golden sunlight behind characters.",
        directorNote: "Trifecta pelakon utama penuh wibawa."
      },
      {
        shotNo: "10.4",
        cameraAngle: "Extreme Wide Drone / Crane Pull Back & Fade Out",
        visualType: "Cliffhanger",
        shotCategory: "Establishing",
        scene: "Wins Garden Cafe & Semporna Bay.",
        action: "Kamera naik tinggi ke udara memperlihatkan laut Semporna. Paparan teks jenama Perfect Success Capital Sdn Bhd.",
        character: "Semua Watak & Pemandangan",
        dialogue: "TEXT: “PERFECT SUCCESS CAPITAL SDN BHD - Pembiayaan hanyalah satu alat. Perancangan, disiplin dan pengurusan menentukan perjalanan sesebuah perniagaan.”",
        audio: "BGM: Grand finale resolution melody fading out.",
        lighting: "Cinematic sunset into dusk.",
        props: "Text overlay PSC",
        directorNote: "Fade Out sinematik rasmi siri drama."
      }
    ]
  }
];
