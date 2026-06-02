/* ==========================================================================
   GİZEMLİ LABORATUVAR: KAYIP BİLİM İNSANI - OYUN MANTIĞI & JAVASCRIPT
   ========================================================================== */

// ==========================================================================
// 1. İSTASYON ZİNCİRİ VERİ TABANI (18 Adımlı Linear Scavenger Hunt)
// ==============================================================const SUBJECTS_DATA = {
    kimya: {
        name: "KİMYA & FEN BİLİMLERİ",
        badge: "🧪 GİZEMLİ LABORATUVAR",
        iconClass: "fas fa-flask",
        themeClass: "theme-kimya",
        secretPhrase: "GALİLEO GALİLEİ",
        welcomeTitle: "<span>GİZEMLİ</span>LABORATUVAR",
        welcomeSubtitle: "🕵️‍♂️ Kayıp Bilim İnsanı Dedektifliği 🔬",
        welcomeIntro: "Laboratuvarda yüzyıllar önce yaşamış dâhi bir bilim insanının sır gibi saklanan kayıp parşömeni gizli! Sınıftaki istasyonları bul, QR kodları tarat, eğlenceli bilmeceleri çöz, harfleri toplayıp gizemli dâhiyi ortaya çıkar! 🧪✨",
        btnText: "LABORATUVARA SIZ! 🧪🚀",
        stations: [
            {
                id: 1,
                title: "Başlangıç Noktası",
                code: "START",
                backupCode: "1001",
                letter: null,
                riddle: "Cam bedenim ince uzun, üstüm de çizgiler dizili. Sıvıları ölçerim hassasça, bulun bakalım bu gizemli şekli?",
                hint: "Laboratuvarda sıvı hacmi ölçmek için kullanılan çizgili silindirik cam kap.",
                answers: ["dereceli silindir", "mezur", "mezura", "derecelisilindir"],
                nextStationName: "Dereceli Silindir"
            },
            {
                id: 2,
                title: "Dereceli Silindir",
                code: "DERECELI",
                backupCode: "1002",
                letter: "İ",
                riddle: "Söz uçar yazı kalır. Elektrik telleriyle haber taşırım yollara. Benimle mesaj çabucak alınır, bilin bakalım neyim?",
                hint: "Mors alfabesi kullanarak kablolar aracılığıyla yazılı mesaj gönderen eski iletişim aleti.",
                answers: ["telgraf", "telgrafci"],
                nextStationName: "Telgraf"
            },
            {
                id: 3,
                title: "Telgraf",
                code: "TELGRAF",
                backupCode: "1003",
                letter: "G",
                riddle: "Işığım masadan doğar, perdeye düşer yüzüm. Saydam kağıtlar üstünde büyür her bir sözüm. Ben kimim?",
                hint: "Asetat kağıdı üzerindeki şekilleri ışık yardımıyla duvara veya perdeye yansıtan eski projeksiyon cihazı.",
                answers: ["tepegoz", "tepe goz"],
                nextStationName: "Tepegöz"
            },
            {
                id: 4,
                title: "Tepegöz",
                code: "TEPEGOZ",
                backupCode: "1004",
                letter: "O",
                riddle: "Sayılar dostum benim, işlemlerle konuşurum. Toplar, çıkarır, çarparım; en zor hesabı hemen bulurum. Ben neyim?",
                hint: "Matematiksel işlemleri tuşlarına basarak saniyeler içinde yapan küçük elektronik alet.",
                answers: ["hesap makinesi", "hesapmakinesi"],
                nextStationName: "Hesap Makinesi"
            },
            {
                id: 5,
                title: "Hesap Makinesi",
                code: "HESAP",
                backupCode: "1005",
                letter: "L",
                riddle: "Kefede susar sözüm, dengeyle benim işim. Kütleleri ölçerken, pirinçten dökülmüş küçük kardeşlerimdir yoldaşım. Ben neyim?",
                hint: "Eşit kollu terazilerde ağırlığı dengelemek için kefeye konulan farklı gramajlardaki metal kütleler.",
                answers: ["agirlik takimi", "agirliktakimi", "agirliklar", "agirlik"],
                nextStationName: "Ağırlık Takımı"
            },
            {
                id: 6,
                title: "Ağırlık Takımı",
                code: "AGIRLIK",
                backupCode: "1006",
                letter: "L",
                riddle: "Yay gerilir içimde, kuvvetle sırdaş olurum. Newton'dur birimim benim, ağırlığı onunla bulurum. Ben neyim?",
                hint: "İçindeki sarmal yayın esnemesiyle kuvvet veya ağırlık ölçen alet.",
                answers: ["dinamometre", "kuvvetolcer", "kuvvet olcer"],
                nextStationName: "Dinamometre"
            },
            {
                id: 7,
                title: "Dinamometre",
                code: "DINAMO",
                backupCode: "1007",
                letter: "İ",
                riddle: "Küçük ateşimle ısıtırım her şeyi, içinde mavi sıvı parlar gizemli. Deney tüplerinin dostuyum ben, bilin bakalım kimim?",
                hint: "Mavi ispirto yakıtıyla çalışan, laboratuvarda ısıtma deneylerinde kullanılan küçük ocak.",
                answers: ["ispirto ocagi", "ispirtoocagi"],
                nextStationName: "İspirto Ocağı"
            },
            {
                id: 8,
                title: "İspirto Ocağı",
                code: "ISPIRTO",
                backupCode: "1008",
                letter: "L",
                riddle: "Cam gözümle bakarım, görünmeyeni görürüm. Hücrelerin dünyasına yolculuklar ettiririm. Ben neyim?",
                hint: "Gözle görülemeyecek kadar küçük canlıları veya yapıları mercekleriyle büyüterek gösteren optik cihaz.",
                answers: ["mikroskop", "isikmikroskobu"],
                nextStationName: "Mikroskop"
            },
            {
                id: 9,
                title: "Mikroskop",
                code: "MIKROSKOP",
                backupCode: "1009",
                letter: "A",
                riddle: "Işığı eğip büker, bazen odakta birleştirir. İnce ve kalın kenarlıyım, görüntüleri değiştiririm. Biz kimiz?",
                hint: "Gözlüklerde, büyüteçlerde kullanılan, ışığı kıran saydam cam takımı.",
                answers: ["mercek takimi", "mercekler", "mercektakimi", "mercek"],
                nextStationName: "Mercek Takımı"
            },
            {
                id: 10,
                title: "Mercek Takımı",
                code: "MERCEK",
                backupCode: "1010",
                letter: "A",
                riddle: "İki kap yan yana, içi dolu suyla. Tabanları birleşir, seviyeler eşitlenir aynı anda. Biz kimiz?",
                hint: "Tabanları bir boruyla birleştirilmiş, sıvı seviyelerinin her kolda eşit olmasını sağlayan kaplar düzeneği.",
                answers: ["bilesik kaplar", "bilesikkaplar", "bilesik kap"],
                nextStationName: "Bileşik Kaplar"
            },
            {
                id: 11,
                title: "Bileşik Kaplar",
                code: "BILESIK",
                backupCode: "1011",
                letter: "L",
                riddle: "Görüntüyü büyütürüm, bazen de ters çeviririm. Kaşığın iç yüzü gibiyim, ışığı odakta eritirim. Ben hangi aynayım?",
                hint: "Yansıtıcı yüzeyi küresel bir çukur olan, cisimleri dev ve ters gösterebilen ayna tipi.",
                answers: ["cukur ayna", "cukurayna", "konkav ayna"],
                nextStationName: "Çukur Ayna"
            },
            {
                id: 12,
                title: "Çukur Ayna",
                code: "AYNA",
                backupCode: "1012",
                letter: "E",
                riddle: "Küçük tüpler sıra olur içimde. Laboratuvarda dik dururlar, kırılmasınlar diye güvende tutarım. Ben neyim?",
                hint: "Deney tüplerinin dik durmasını sağlayan, ahşap, plastik veya metalden yapılmış tüp standı.",
                answers: ["tupluk", "tup rafi", "tuprafi", "tup standi", "tupstandi"],
                nextStationName: "Tüplük"
            },
            {
                id: 13,
                title: "Tüplük",
                code: "TUPLUK",
                backupCode: "1013",
                letter: "G",
                riddle: "Kaynar suyun nefesi, göğe çıkar incecik. Soğuk camda yoğunlaşır, damlar berrak ve temizce. Ben hangi düzeneğim?",
                hint: "Sıvı karışımları kaynatıp buharlaştırarak ve ardından yoğuşturarak saflaştıran laboratuvar düzeneği.",
                answers: ["damitma duzenegi", "damitmaduzenegi", "damitma imbigi", "damitma"],
                nextStationName: "Damıtma Düzeneği"
            },
            {
                id: 14,
                title: "Damıtma Düzeneği",
                code: "DAMITMA",
                backupCode: "1014",
                letter: null,
                riddle: "Akım bana uğrar, bazen hızlı bazen yavaş. Direnci ayarlarım sürgümle yavaş yavaş. Ben kimim?",
                hint: "Elektrik devrelerinde direnci el yardımıyla değiştirerek akım şiddetini ayarlayan ayarlı direnç.",
                answers: ["reosta", "ayarli direnc", "ayarlidirenc"],
                nextStationName: "Reosta"
            },
            {
                id: 15,
                title: "Reosta",
                code: "REOSTA",
                backupCode: "1015",
                letter: "İ",
                riddle: "Renklerim çeşit çeşit, sertliğim değişken. Yer kabuğunun süsüyüm, doğada saklanırken. Biz neyiz?",
                hint: "Taşları ve kayaçları oluşturan, doğada kristal yapıda bulunan kimyasal bileşikler serisi.",
                answers: ["mineral seti", "mineraller", "mineralseti", "mineral"],
                nextStationName: "Mineral Seti"
            },
            {
                id: 16,
                title: "Mineral Seti",
                code: "MINERAL",
                backupCode: "1016",
                letter: "L",
                riddle: "Enerjiyi ben veririm, hayat bulur devreler. Prizden gelen gücü, lambaya ulaştırırım güvenle. Ben neyim?",
                hint: "Elektrik devrelerine istenen voltajda akım sağlayan laboratuvar güç cihazı.",
                answers: ["guc kaynagi", "guckaynagi", "adaptor"],
                nextStationName: "Güç Kaynağı"
            },
            {
                id: 17,
                title: "Güç Kaynağı",
                code: "GUC",
                backupCode: "1017",
                letter: "E",
                riddle: "Laboratuvarda sessizim, ama elim iş tutar. Kıskaçları taşırım sırtımda, düzeneği ayakta tutarım. Ben neyim?",
                hint: "Deney tüplerini, balonları veya reaksiyon kaplarını kıskaçla sabitlediğimiz dikey demir çubuklu laboratuvar standı.",
                answers: ["destek cubugu", "destekcubugu", "laboratuvar destegi", "laboratuvardestegi"],
                nextStationName: "Destek Çubuğu"
            },
            {
                id: 18,
                title: "Destek Çubuğu (Final)",
                code: "DESTEK",
                backupCode: "1018",
                letter: null,
                riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK KAYIP BİLİM ADAMINI BULUNUZ",
                hint: "Elde ettiğin 15 harfi karıştırarak yüzyıllar önce yaşamış olan modern bilimin kurucusu dahi bilim insanının adını bulmalısın.",
                answers: ["galileo galilei", "galileogalilei"],
                nextStationName: "BİTTİ"
            }
        ]
    },
    matematik: {
        name: "MATEMATİK",
        badge: "📐 FORMÜLLERİN SIRRI",
        iconClass: "fas fa-calculator",
        themeClass: "theme-matematik",
        secretPhrase: "CAHİT ARF",
        welcomeTitle: "<span>GİZEMLİ</span>MATEMATİK",
        welcomeSubtitle: "🕵️‍♂️ Sayılar ve Şifre Dedektifliği 📐",
        welcomeIntro: "Matematik koridorlarında yüzyıllar önce yaşamış ünlü bir dâhi matematikçinin formülleri gizlendi! Sınıftaki matematik istasyonlarını bul, QR kodları tarat, zeka bilmecelerini çöz, harfleri toplayıp dâhiyi ortaya çıkar! 📐✨",
        btnText: "MATEMATİĞİ ÇÖZ! 📐🚀",
        stations: [
            {
                id: 1,
                title: "Matematik Başlangıç Noktası",
                code: "MATH_START",
                backupCode: "2001",
                letter: "C",
                riddle: "Benim adım sıfır, çarpmada yutarım herkesi, toplamadaki etkim yok denecek gibi. Şimdi bulun bakalım geometrinin ve dairenin kalbi, sonsuz basamaklı meşhur sayıyı?",
                hint: "Dairenin çevresinin çapına oranı olan, yaklaşık 3.14 olarak kabul edilen meşhur sayı.",
                answers: ["pi", "pi sayisi", "3.14"],
                nextStationName: "Pi Sayısı"
            },
            {
                id: 2,
                title: "Pi Sayısı",
                code: "PI_SAYISI",
                backupCode: "2002",
                letter: "A",
                riddle: "Üç kenarım, üç köşem var benim. İç açılarımın toplamı her zaman 180 derece eder. Geometrinin en temel üyesiyim, bilin bakalım kimim?",
                hint: "Üç kenarı ve üç köşesi olan geometrik şekil.",
                answers: ["ucgen"],
                nextStationName: "Üçgen"
            },
            {
                id: 3,
                title: "Üçgen",
                code: "UCGEN",
                backupCode: "2003",
                letter: "H",
                riddle: "Çizgi çizerim düzgünce, boyumu ölçerim santim santim. Matematik çantamızın olmazsa olmazıyım, her çizimde benimdir yerim. Ben neyim?",
                hint: "Düz çizgiler çizmeye ve uzunluk ölçmeye yarayan dereceli araç.",
                answers: ["cetvel"],
                nextStationName: "Cetvel"
            },
            {
                id: 4,
                title: "Cetvel",
                code: "CETVEL",
                backupCode: "2004",
                letter: "İ",
                riddle: "Renkli boncuklarım dizilidir tellere, hesap yaparım hızlıca kaydırarak ellerle. Eski zamanların hesap makinesiyim, bilin bakalım ben neyim?",
                hint: "Sayı boncukları kullanarak toplama ve çarpma yapmaya yarayan eski araç.",
                answers: ["abakus"],
                nextStationName: "Abaküs"
            },
            {
                id: 5,
                title: "Abaküs",
                code: "ABAKUS",
                backupCode: "2005",
                letter: "T",
                riddle: "Açıları ölçerim derece derece, yarım daire şeklindeyim genellikle. Gönyenin en yakın kardeşiyim bu dünyada. Ben kimim?",
                hint: "Açıları ölçmeye yarayan yarım daire biçimindeki araç, açıölçer.",
                answers: ["iletki", "aciolcer", "aci olcer"],
                nextStationName: "İletki"
            },
            {
                id: 6,
                title: "İletki",
                code: "ILETKI",
                backupCode: "2006",
                letter: "A",
                riddle: "Bir bütünü bölerim eşit parçalara, pay ve payda ile gösteririm kendimi her tarafta. Yarım ve çeyrek benimle anlam kazanır. Ben neyim?",
                hint: "Bir bütünün eşit parçalarından birini veya birkaçını gösteren sayı, pay/payda çizgisiyle yazılır.",
                answers: ["kesir", "kesirler"],
                nextStationName: "Kesir"
            },
            {
                id: 7,
                title: "Kesir",
                code: "KESIR",
                backupCode: "2007",
                letter: "R",
                riddle: "Ortadan ikiye katlarsan beni, iki tarafım da tam eşleşir. Kelebeğin kanatlarında, aynanın yansımasında gizliyim. Ben hangi geometrik özelliğim?",
                hint: "Bir şeklin bir doğruya göre katlandığında üst üste gelmesi durumu, eş ölçülülük.",
                answers: ["simetri", "yansima"],
                nextStationName: "Simetri Çubuğu"
            },
            {
                id: 8,
                title: "Simetri Çubuğu",
                code: "SIMETRI",
                backupCode: "2008",
                letter: "F",
                riddle: "Bölme işleminin kalanı sıfırsa, ben o sayının nesi olurum? Bir sayıyı tam bölen küçük sayılara verilen isimdir. Ben neyim?",
                hint: "Bir sayıyı kalansız bölebilen sayılar, çarpanlar.",
                answers: ["bolen", "carpan", "kat"],
                nextStationName: "Final Anagramı"
            },
            {
                id: 9,
                title: "Final İstasyonu",
                code: "MATH_FINAL",
                backupCode: "2009",
                letter: null,
                riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK GİZEMLİ MATEMATİKÇİYİ BULUNUZ",
                hint: "Topladığın 8 harfi (C-A-H-İ-T-A-R-F) birleştirerek ünlü Türk matematikçinin adını yazmalısın.",
                answers: ["cahit arf", "cahitarf"],
                nextStationName: "BİTTİ"
            }
        ]
    },
    fizik: {
        name: "FİZİK",
        badge: "⚛️ EVRENİN KODU",
        iconClass: "fas fa-atom",
        themeClass: "theme-fizik",
        secretPhrase: "EINSTEIN",
        welcomeTitle: "<span>GİZEMLİ</span>FİZİK",
        welcomeSubtitle: "🕵️‍♂️ Kütle Çekim ve Enerji Dedektifliği ⚛️",
        welcomeIntro: "Fizik dünyasının kalbinde, evrenin sırlarını çözen ünlü bir fizikçinin gizemli kuramı saklı! İstasyonları bul, bilmeceleri çöz, harfleri toplayıp dâhiyi açığa çıkar! ⚛️✨",
        btnText: "FİZİĞİ KEŞFET! ⚛️🚀",
        stations: [
            {
                id: 1,
                title: "Fizik Başlangıç Noktası",
                code: "PHYS_START",
                backupCode: "3001",
                letter: "E",
                riddle: "Ağaçtan düşen elma bana yol gösterdi, gezegenleri yörüngede tutan bu büyük kuvvetti. Yere bastırırım seni görünmez ellerimle, bilin bakalım neyim?",
                hint: "Kütlesi olan cisimlerin birbirini çekmesi kuvveti, Newton'ın bulduğu meşhur teori.",
                answers: ["yercekimi", "yer cekimi", "kutlecekimi", "kutle cekimi"],
                nextStationName: "Yer Çekimi"
            },
            {
                id: 2,
                title: "Yer Çekimi",
                code: "YER_CEKIMI",
                backupCode: "3002",
                letter: "İ",
                riddle: "Işığı kıran camdan bir gövdeyim, beyaz ışığı gökkuşağı renklerine bölerim. Optik laboratuvarının yıldızıyım, ben neyim?",
                hint: "Işığı kıran, üçgen kesitli saydam cam blok.",
                answers: ["prizma", "isik prizmasi", "isikprizmasi"],
                nextStationName: "Işık Prizması"
            },
            {
                id: 3,
                title: "Işık Prizması",
                code: "PRIZMA",
                backupCode: "3003",
                letter: "N",
                riddle: "İki kutbum var, çekerim metalleri kendime. Pusulanın içinde saklıyım, yön gösteririm denizcilere. Ben kimim?",
                hint: "Demir, nikel gibi maddeleri çeken, kuzey ve güney kutbu olan mıknatıslı taş.",
                answers: ["miknatis"],
                nextStationName: "Mıknatıs"
            },
            {
                id: 4,
                title: "Mıknatıs",
                code: "MIKNATIS",
                backupCode: "3004",
                letter: "S",
                riddle: "İnce kenarlı bir merceğim, cisimleri dev gibi gösteririm. Karıncaları incelerken çocukların elindeyim. Ben neyim?",
                hint: "Cisimleri büyütmeye yarayan mercek, büyüteç.",
                answers: ["buyutec"],
                nextStationName: "Büyüteç"
            },
            {
                id: 5,
                title: "Büyüteç",
                code: "BUYUTEC",
                backupCode: "3005",
                letter: "T",
                riddle: "Kimyasal enerjiyi elektriğe çeviririm, el fenerine hayat veririm. Artı ve eksi uçlarımla devreye akım veririm. Ben neyim?",
                hint: "Elektrik enerjisi depolayan küçük taşınabilir üreteç.",
                answers: ["pil", "batarya"],
                nextStationName: "Pil Yuvası"
            },
            {
                id: 6,
                title: "Pil Yuvası",
                code: "PIL",
                backupCode: "3006",
                letter: "E",
                riddle: "Sıcaklığı ölçerim derece derece, içimdeki sıvı (cıva) yükselir hava ısınınca. Hastalandığında ateşini de ölçerim. Ben neyim?",
                hint: "Sıcaklık derecesini gösteren laboratuvar ölçüm aleti.",
                answers: ["termometre"],
                nextStationName: "Termometre"
            },
            {
                id: 7,
                title: "Termometre",
                code: "TERMOMETRE",
                backupCode: "3007",
                letter: "İ",
                riddle: "Cisimlerin titreşmesiyle doğarım, dalgalar halinde havada yayılırım. Kulağına müzik olur akarım. Ben neyim?",
                hint: "Kulağın algılayabildiği fiziksel titreşim dalgaları.",
                answers: ["ses", "ses dalgasi", "ses dalgalari"],
                nextStationName: "Ses Dalgaları"
            },
            {
                id: 8,
                title: "Ses Dalgaları",
                code: "SES_DALGASI",
                backupCode: "3008",
                letter: "N",
                riddle: "Kanatlarımın altından alan hava basınç farkı yaratır, dev cüssemi gökyüzünde kuş gibi uçurur. Ben hangi aracım?",
                hint: "Havanın kaldırma kuvvetiyle uçan dev yolcu veya savaş hava aracı.",
                answers: ["ucak"],
                nextStationName: "Final Anagramı"
            },
            {
                id: 9,
                title: "Final İstasyonu",
                code: "PHYS_FINAL",
                backupCode: "3009",
                letter: null,
                riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK GİZEMLİ FİZİKÇİYİ BULUNUZ",
                hint: "Topladığın 8 harfi (E-İ-N-S-T-E-İ-N) karıştırarak modern fiziğin dâhisi olan bilim insanının adını yazmalısın.",
                answers: ["einstein", "albert einstein", "alberteinstein"],
                nextStationName: "BİTTİ"
            }
        ]
    },
    bilisim: {
        name: "BİLİŞİM & YAZILIM",
        badge: "💻 SİBER BULMACA",
        iconClass: "fas fa-microchip",
        themeClass: "theme-bilisim",
        secretPhrase: "ALAN TURING",
        welcomeTitle: "<span>SİBER</span>BULMACA",
        welcomeSubtitle: "🕵️‍♂️ Yapay Zeka ve Algoritma Dedektifliği 💻",
        welcomeIntro: "Bilgisayar ağlarının derinliklerinde, yapay zekanın babası kabul edilen gizemli bir matematikçinin şifreleri saklı! İstasyonları bul, kodları çöz, dâhiyi ortaya çıkar! 💻✨",
        btnText: "SİSTEME SIZ! 💻🚀",
        stations: [
            {
                id: 1,
                title: "Bilişim Başlangıç Noktası",
                code: "COMP_START",
                backupCode: "4001",
                letter: "A",
                riddle: "Bilgisayarlar sadece iki sayıyı tanır: 0 ve 1. Bu sayılarla yazılan gizemli kod diline ne ad verilir?",
                hint: "Bilgisayarların temel çalışma sistemi olan 0 ve 1'lerden oluşan ikili sayı sistemi.",
                answers: ["ikili kod", "binary", "ikili sayi sistemi", "binary kod"],
                nextStationName: "Binary İstasyonu"
            },
            {
                id: 2,
                title: "Binary İstasyonu",
                code: "BINARY",
                backupCode: "4002",
                letter: "L",
                riddle: "Bilgisayarın beyniyim ben, tüm aritmetik ve mantık hesaplarını saniyeler içinde yaparım. Benim adım kısaca nedir?",
                hint: "Merkezi İşlem Birimi olarak da bilinen, bilgisayarın beyni olan 3 harfli mikroçip.",
                answers: ["islemci", "cpu"],
                nextStationName: "İşlemci"
            },
            {
                id: 3,
                title: "İşlemci",
                code: "CPU",
                backupCode: "4003",
                letter: "A",
                riddle: "Görüntüleri aktarırım cam ekranıma, ekran kartından aldığım sinyallerle renk veririm dünyaya. Ben hangi donanımım?",
                hint: "Bilgisayarın görüntü çıkış birimi, ekran.",
                answers: ["monitor", "ekran"],
                nextStationName: "Monitör"
            },
            {
                id: 4,
                title: "Monitör",
                code: "MONITOR",
                backupCode: "4004",
                letter: "N",
                riddle: "Tuşlarım dizilidir yan yana, Q ve F diye ayrılırım sınıflara. Bilgisayara yazı yazmanı sağlarım. Ben neyim?",
                hint: "Üzerinde harfler, sayılar ve özel işaretler bulunan giriş birimi.",
                answers: ["klavye"],
                nextStationName: "Klavye"
            },
            {
                id: 5,
                title: "Klavye",
                code: "KLAVYE",
                backupCode: "4005",
                letter: "T",
                riddle: "Ekranda gezinirim bir ok şeklinde, tıklarım menülere. İsmim de benzer sevimli bir kemirgene. Ben neyim?",
                hint: "Ekrandaki imleci hareket ettirmeye yarayan avuç içi büyüklüğündeki araç.",
                answers: ["fare", "mouse"],
                nextStationName: "Fare Altlığı"
            },
            {
                id: 6,
                title: "Fare Altlığı",
                code: "MOUSE",
                backupCode: "4006",
                letter: "U",
                riddle: "Tüm dünyayı birbirine bağlayan devasa bir bilgisayar ağıyım ben. Web siteleri, oyunlar hep benim içimde yaşar. Ben kimim?",
                hint: "Küresel bilgisayar ağı, bilgi okyanusu.",
                answers: ["internet"],
                nextStationName: "Modem"
            },
            {
                id: 7,
                title: "Modem",
                code: "INTERNET",
                backupCode: "4007",
                letter: "R",
                riddle: "Hesaplarınızı korurum kötü niyetli kişilerden. Harfler, sayılar ve semboller içeririm gizlice. Kimseyle paylaşmaman gerekir beni. Ben neyim?",
                hint: "Bir hesaba girmek için kullanılan gizli güvenlik kelimesi, parola.",
                answers: ["sifre", "parola"],
                nextStationName: "Şifre Kilidi"
            },
            {
                id: 8,
                title: "Şifre Kilidi",
                code: "SIFRE",
                backupCode: "4008",
                letter: "İ",
                riddle: "Bir problemi çözmek için takip edilen adım adım yoldur adım. Bilgisayarlar benimle çalışır, Scratch'te blokları sırayla dizerek beni kurarsın. Ben neyim?",
                hint: "Programlamanın temel mantığı olan adım adım işlem akışı.",
                answers: ["algoritma"],
                nextStationName: "Algoritma Levhası"
            },
            {
                id: 9,
                title: "Algoritma Levhası",
                code: "ALGORITMA",
                backupCode: "4009",
                letter: "N",
                riddle: "Metal ve elektronik gövdem var, kodlarla canlanırım. Fabrikalarda çalışır, evleri süpürürüm. Geleceğin akıllı makinesiyim. Ben neyim?",
                hint: "Sensörler yardımıyla çevresini algılayıp kodlandığı şekilde hareket eden otonom makine.",
                answers: ["robot"],
                nextStationName: "Robot Standı"
            },
            {
                id: 10,
                title: "Robot Standı",
                code: "ROBOT",
                backupCode: "4010",
                letter: "G",
                riddle: "Bilgisayara ne yapacağını söyleyen satır satır komutlar bütünüdür adım. Python, C++, HTML benimle yazılır. Ben neyim?",
                hint: "Bilgisayar programlarını oluşturan kod dizeleri.",
                answers: ["kod", "yazilim", "program"],
                nextStationName: "Final Anagramı"
            },
            {
                id: 11,
                title: "Final İstasyonu",
                code: "COMP_FINAL",
                backupCode: "4011",
                letter: null,
                riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK GİZEMLİ BİLGİSAYAR DAHİSİNİ BULUNUZ",
                hint: "Topladığın 10 harfi (A-L-A-N-T-U-R-İ-N-G) birleştirerek bilgisayar biliminin babası olan ünlü dâhinin adını yazmalısın.",
                answers: ["alan turing", "alanturing"],
                nextStationName: "BİTTİ"
            }
        ]
    },
    sosyal: {
        name: "SOSYAL BİLGİLER",
        badge: "🗺️ DÜNYA KEŞFİ",
        iconClass: "fas fa-compass",
        themeClass: "theme-sosyal",
        secretPhrase: "PİRİ REİS",
        welcomeTitle: "<span>GİZEMLİ</span>KEŞİF",
        welcomeSubtitle: "🕵️‍♂️ Tarih, Coğrafya ve Harita Dedektifliği 🗺️",
        welcomeIntro: "Coğrafi keşiflerin gizemli dünyasında, yüzyıllar önce ceylan derisine çizdiği haritayla dünyayı hayrete düşüren dâhi denizcinin sırları saklı! Harfleri topla ve gizemi çöz! 🗺️✨",
        btnText: "KEŞFE BAŞLA! 🗺️🚀",
        stations: [
            {
                id: 1,
                title: "Sosyal Başlangıç Noktası",
                code: "SOC_START",
                backupCode: "5001",
                letter: "P",
                riddle: "Yeryüzünü kuşbakışı çizerim kağıda, ölçek kullanarak küçültürüm odalara. Dağları kahverengi, denizleri mavi boyarım. Ben neyim?",
                hint: "Yeryüzünün tamamının veya bir parçasının kuşbakışı görünümünün ölçekle küçültülerek düzleme aktarılması.",
                answers: ["harita"],
                nextStationName: "Harita Odası"
            },
            {
                id: 2,
                title: "Harita Odası",
                code: "HARITA",
                backupCode: "5002",
                letter: "İ",
                riddle: "Mıknatıslı iğnem hep kuzeyi gösterir, fırtınalı denizlerde gemilere yol gösterir. Çin'de icat edildim, yönlerin efendisiyim. Ben neyim?",
                hint: "Yön bulmaya yarayan, kadranı üzerinde kuzeyi gösteren mıknatıslı iğnesi olan alet.",
                answers: ["pusula"],
                nextStationName: "Pusula Standı"
            },
            {
                id: 3,
                title: "Pusula Standı",
                code: "PUSULA",
                backupCode: "5003",
                letter: "R",
                riddle: "Nil Nehri kıyısında yetişen bir sazlıktan üretildim, üzerine hiyeroglif yazılar yazdı eski Mısırlılar. Kağıdın atası sayılırım. Ben neyim?",
                hint: "Eski Mısır'da kullanılan sazlıktan elde edilen eski kağıt türü.",
                answers: ["papirus"],
                nextStationName: "Papirüs Rulosu"
            },
            {
                id: 4,
                title: "Papirüs Rulosu",
                code: "PAPIRUS",
                backupCode: "5004",
                letter: "İ",
                riddle: "Taştan dev üçgenlerim ben, Firavunların mezarlarını korurum çöllerde. Dünyanın yedi harikasından biriyim. Ben neyim?",
                hint: "Mısır'da bulunan dev taş anıt mezarlar.",
                answers: ["piramit", "misir piramitleri"],
                nextStationName: "Piramit Maketi"
            },
            {
                id: 5,
                title: "Piramit Maketi",
                code: "PIRAMIT",
                backupCode: "5005",
                letter: "R",
                riddle: "Dünyanın küçük bir modeliyim, eksenimde dönerim süzüle süzüle. Üzerimde okyanuslar, kıtalar çizilidir renk renk. Ben neyim?",
                hint: "Dünyanın küre şeklindeki küçük modeli.",
                answers: ["yerkure", "kure", "dunya kuresi"],
                nextStationName: "Dünya Küresi"
            },
            {
                id: 6,
                title: "Dünya Küresi",
                code: "YERKURE",
                backupCode: "5006",
                letter: "E",
                riddle: "Günleri, haftaları, ayları yazarım; zamanı yaprak yaprak duvarlardan atarım. Miladi ve Hicri türlerim vardır. Ben neyim?",
                hint: "Zamanı gün, ay, yıl olarak gösteren çizelge/yapraklı duvar aleti.",
                answers: ["takvim"],
                nextStationName: "Tarihi Takvim"
            },
            {
                id: 7,
                title: "Tarihi Takvim",
                code: "TAKVIM",
                backupCode: "5007",
                letter: "İ",
                riddle: "Toprağın altındaki tarihi uygarlıkları kazarım, çanak çömlekleri bulup geçmişi gün yüzüne çıkarırım. Ben hangi bilim dalıyım?",
                hint: "Kazı bilimi.",
                answers: ["arkeoloji", "arkeolog"],
                nextStationName: "Kazı Alanı"
            },
            {
                id: 8,
                title: "Kazı Alanı",
                code: "ARKEOLOJI",
                backupCode: "5008",
                letter: "S",
                riddle: "Lidyalılar icat etti beni ticarette kullanmak için, altın ve metalden döküldüm takas usulü bitsin diye. Ben neyim?",
                hint: "Değer ölçüsü olarak kullanılan madeni veya kağıt ödeme aracı.",
                answers: ["para", "sikke"],
                nextStationName: "Final Anagramı"
            },
            {
                id: 9,
                title: "Final İstasyonu",
                code: "SOC_FINAL",
                backupCode: "5009",
                letter: null,
                riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK ÜNLÜ OSMANLI DENİZCİSİNİ BULUNUZ",
                hint: "Topladığın 8 harfi (P-İ-R-İ-R-E-İ-S) birleştirerek Kitab-ı Bahriye'nin yazarı ünlü Osmanlı denizcisinin adını yazmalısın.",
                answers: ["piri reis", "pirireis"],
                nextStationName: "BİTTİ"
            }
        ]
    },
    edebiyat: {
        name: "EDEBİYAT & TÜRKÇE",
        badge: "✍️ KELİMELERİN SIRRI",
        iconClass: "fas fa-feather-pointed",
        themeClass: "theme-edebiyat",
        secretPhrase: "YUNUS EMRE",
        welcomeTitle: "<span>GİZEMLİ</span>KELİMELER",
        welcomeSubtitle: "🕵️‍♂️ Kelimeler, Şiirler ve Hikayeler Dedektifliği ✍️",
        welcomeIntro: "Türkçenin ve edebiyatın büyüleyici dünyasında, asırlar önce sevgi ve hoşgörüyle Türkçe şiirler söyleyen dâhi bir halk şairinin dizeleri gizli! Şifreleri çöz, harfleri toplayıp dâhiyi bul! ✍️✨",
        btnText: "YAZIMA BAŞLA! ✍️🚀",
        stations: [
            {
                id: 1,
                title: "Edebiyat Başlangıç Noktası",
                code: "LIT_START",
                backupCode: "6001",
                letter: "Y",
                riddle: "Harflerim dizilir yan yana A'dan Z'ye, kelimeler kurarsın beni öğrenerek keyifle. Türkçede 29 üyem var. Ben neyim?",
                hint: "Bir dilin seslerini gösteren harflerin belli bir sıraya göre dizilmiş bütünü, abece.",
                answers: ["alfabe", "abece"],
                nextStationName: "Alfabe Duvarı"
            },
            {
                id: 2,
                title: "Alfabe Duvarı",
                code: "ALFABE",
                backupCode: "6002",
                letter: "U",
                riddle: "Sayfalarca sürer hikayem, olaylar ve karakterler derinlemesine yaşar içimde. Kalın kapaklı kütüphane dostuyum. Hikayenin en uzun haliyim. Ben hangi tür kitabım?",
                hint: "Olmuş veya olması mümkün olayları yer, zaman ve kişi belirterek genişçe anlatan edebi tür.",
                answers: ["roman"],
                nextStationName: "Roman Kitaplığı"
            },
            {
                id: 3,
                title: "Roman Kitaplığı",
                code: "ROMAN",
                backupCode: "6003",
                letter: "N",
                riddle: "Mısralarım alt alta dizilir, duygularım kafiyelerle (uyak) bezenir. Şairlerin yüreğinden dökülen dörtlüklere ne ad verilir?",
                hint: "Zengin duygularla yazılan, mısralardan (dizelerden) oluşan edebi eser.",
                answers: ["siir"],
                nextStationName: "Şiir Kürsüsü"
            },
            {
                id: 4,
                title: "Şiir Kürsüsü",
                code: "SIIR",
                backupCode: "6004",
                letter: "U",
                riddle: "Atalarımızın derin tecrübelerinden süzülen, kimin söylediği belli olmayan, kalıplaşmış bilgece sözleriz. Biz kimiz?",
                hint: "Öğüt veren anonim eski bilge sözleri (Örn: Damlaya damlaya göl olur).",
                answers: ["atasozu", "atasozleri"],
                nextStationName: "Atasözü Panosu"
            },
            {
                id: 5,
                title: "Atasözü Panosu",
                code: "ATASOZU",
                backupCode: "6005",
                letter: "S",
                riddle: "Sorular sorarım eğlenceli ve kafiyeli, cevabımı bulmak için düşünmelisin derinli. 'Pazardan aldım bir tane, eve geldim bin tane' benim bir örneğimdir. Ben neyim?",
                hint: "Bir şeyin adını anmadan, bazı özelliklerini ipucu vererek buldurmayı amaçlayan oyunlu soru.",
                answers: ["bilmece"],
                nextStationName: "Bilmece Kartları"
            },
            {
                id: 6,
                title: "Bilmece Kartları",
                code: "BILMECE",
                backupCode: "6006",
                letter: "E",
                riddle: "Binlerce kitabın yuvasıyım ben, sessizce okunur sayfalarım içimde. Araştırma ödevlerinin en güvenli adresi, sessizlik mabediyim. Ben neresiyim?",
                hint: "Kitapların korunduğu, sınıflara ayrılıp okuyuculara sunulduğu bina veya oda.",
                answers: ["kutuphane"],
                nextStationName: "Kütüphane Rafı"
            },
            {
                id: 7,
                title: "Kütüphane Rafı",
                code: "KUTUPHANE",
                backupCode: "6007",
                letter: "M",
                riddle: "Sahnede canlanır karakterler, perde açılır alkışlar yükselir. Oyuncular rolünü oynar canlı canlı seyirci önünde. Ben hangi sanat dalıyım?",
                hint: "Sahnede, seyirciler önünde oyuncuların sergilemesi amacıyla yazılmış oyun sanatı.",
                answers: ["tiyatro"],
                nextStationName: "Tiyatro Sahnesi"
            },
            {
                id: 8,
                title: "Tiyatro Sahnesi",
                code: "TIYATRO",
                backupCode: "6008",
                letter: "R",
                riddle: "Kelimelerin anlamlarını saklarım içimde, A'dan Z'ye sıralarım onları düzenle. Anlamını bilmediğin kelimede ilk bana bakarsın. Ben neyim?",
                hint: "Bir dilin bütün veya bir kısım kelimelerini alfabe sırasıyla veren, anlamlarını açıklayan kitap.",
                answers: ["sozluk"],
                nextStationName: "Büyük Sözlük"
            },
            {
                id: 9,
                title: "Büyük Sözlük",
                code: "SOZLUK",
                backupCode: "6009",
                letter: "E",
                riddle: "İçimdeki sıvı mürekkeple yazarım kağıda, metal ucumla şekil veririm güzel yazılara. Mektupların ve imzaların yoldaşıyım. Ben hangi kalemim?",
                hint: "Mürekkebi içine doldurularak kullanılan hazneli metal uçlu kalem.",
                answers: ["dolmakalem", "dolma kalem"],
                nextStationName: "Final Anagramı"
            },
            {
                id: 10,
                title: "Final İstasyonu",
                code: "LIT_FINAL",
                backupCode: "6010",
                letter: null,
                riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK BÜYÜK HALK ŞAİRİNİ BULUNUZ",
                hint: "Topladığın 9 harfi (Y-U-N-U-S-E-M-R-E) birleştirerek 'Sevelim sevilelim, dünya kimseye kalmaz' diyen dâhi tasavvuf şairini bulmalısın.",
                answers: ["yunus emre", "yunusemre"],
                nextStationName: "BİTTİ"
            }
        ]
    }
};bilimin kurucusu dahi bilim insanının adını bulmalısın.",
        answers: ["galileo galilei", "galileogalilei"],
        nextStationName: "BİTTİ"
    }
];

// Kazanılan tüm harfler (Linear sırada):
// 2. İ, 3. G, 4. O, 5. L, 6. L, 7. İ, 8. L, 9. A, 10. A, 11. L, 12. E, 13. G, 15. İ, 16. L, 17. E
// Toplam 15 Harf Kartı: İ - G - O - L - L - İ - L - A - A - L - E - G - İ - L - E
// Bu harflerden "GALİLEO GALİLEİ" oluşturulur.

const SECRET_PHRASE = "GALİLEO GALİLEİ";

// ==========================================================================
// 2. SES SENTEZLEYİCİ ENGINE (Web Audio API - Asset Bağımsız)
// ==========================================================================
class SoundSynth {
    constructor() {
        this.ctx = null;
        this.muted = false;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        return this.muted;
    }

    playClick() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.15);
        
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.15);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.15);
    }

    playSuccess() {
        if (this.muted) return;
        this.init();
        const now = this.ctx.currentTime;
        const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        
        notes.forEach((freq, index) => {
            const time = now + index * 0.1;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, time);
            
            gain.gain.setValueAtTime(0.15, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.35);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.start(time);
            osc.stop(time + 0.4);
        });
    }

    playError() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(80, this.ctx.currentTime + 0.25);
        
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.25);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.25);
    }

    playVictory() {
        if (this.muted) return;
        this.init();
        const now = this.ctx.currentTime;
        
        const notes = [
            { f: 261.63, d: 0.15 }, // C4
            { f: 329.63, d: 0.15 }, // E4
            { f: 392.00, d: 0.15 }, // G4
            { f: 523.25, d: 0.3 },  // C5
            { f: 493.88, d: 0.15 }, // B4
            { f: 523.25, d: 0.6 }   // C5
        ];
        
        let accumulatedTime = 0;
        notes.forEach((note) => {
            const time = now + accumulatedTime;
            const osc = this.ctx.createOscillator();
            const osc2 = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(note.f, time);
            
            osc2.type = 'triangle';
            osc2.frequency.setValueAtTime(note.f * 1.005, time);
            
            gain.gain.setValueAtTime(0.12, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + note.d + 0.2);
            
            osc.connect(gain);
            osc2.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.start(time);
            osc2.start(time);
            osc.stop(time + note.d + 0.2);
            osc2.stop(time + note.d + 0.2);
            
            accumulatedTime += note.d;
        });
    }
}

const sound = new SoundSynth();

// ==========================================================================
// 3. ARKA PLAN PARTICLES SİSTEMİ (Canvas Particle Background)
// ==========================================================================
class ParticleBg {
    constructor() {
        this.canvas = document.getElementById('particles-bg');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
        
        for (let i = 0; i < 30; i++) {
            this.particles.push(this.createParticle(true));
        }
        
        this.animate();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width || window.innerWidth;
        this.canvas.height = rect.height || window.innerHeight;
    }

    createParticle(randomY = false) {
        return {
            x: Math.random() * this.canvas.width,
            y: randomY ? Math.random() * this.canvas.height : this.canvas.height + 15,
            size: Math.random() * 7 + 4, // Larger chemistry bubble size!
            speedY: -(Math.random() * 0.45 + 0.15),
            speedX: (Math.random() - 0.5) * 0.1,
            alpha: Math.random() * 0.45 + 0.15,
            color: Math.random() > 0.5 ? '0, 240, 255' : '189, 0, 255',
            wobble: Math.random() * Math.PI * 2,
            wobbleSpeed: Math.random() * 0.04 + 0.015,
            wobbleAmount: Math.random() * 3 + 1.5
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawGrid();
        
        this.particles.forEach((p, index) => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.wobble += p.wobbleSpeed;
            
            // Calculate wobble offset for a cute bubbling floating effect
            const xOffset = Math.sin(p.wobble) * p.wobbleAmount;
            
            if (p.y < -20 || p.x + xOffset < -20 || p.x + xOffset > this.canvas.width + 20) {
                this.particles[index] = this.createParticle(false);
            }
            
            this.ctx.save();
            
            // 3D bubble radial gradient
            const grad = this.ctx.createRadialGradient(
                p.x + xOffset - p.size * 0.25, 
                p.y - p.size * 0.25, 
                p.size * 0.05, 
                p.x + xOffset, 
                p.y, 
                p.size
            );
            grad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
            grad.addColorStop(0.3, `rgba(${p.color}, ${p.alpha * 0.3})`);
            grad.addColorStop(0.85, `rgba(${p.color}, ${p.alpha})`);
            grad.addColorStop(1, `rgba(${p.color}, 0.05)`);
            
            // Draw bubble base
            this.ctx.beginPath();
            this.ctx.arc(p.x + xOffset, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = grad;
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            this.ctx.lineWidth = 1;
            this.ctx.fill();
            this.ctx.stroke();
            
            // Draw specular glass reflection highlight
            this.ctx.beginPath();
            this.ctx.arc(p.x + xOffset - p.size * 0.3, p.y - p.size * 0.3, p.size * 0.18, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
            this.ctx.fill();
            
            this.ctx.restore();
        });
        
        requestAnimationFrame(() => this.animate());
    }

    drawGrid() {
        const gridSpacing = 40;
        this.ctx.strokeStyle = 'rgba(0, 240, 255, 0.02)';
        this.ctx.lineWidth = 1;
        
        for (let x = 0; x < this.canvas.width; x += gridSpacing) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }
        
        for (let y = 0; y < this.canvas.height; y += gridSpacing) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
    }
}

// ==========================================================================
// 4. KONFETİ KUTLAMA SİSTEMİ (Canvas Confetti Engine)
// ==========================================================================
class ConfettiEngine {
    constructor() {
        this.canvas = document.getElementById('confetti-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.active = false;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width || window.innerWidth;
        this.canvas.height = rect.height || window.innerHeight;
    }

    spawn() {
        this.particles = [];
        this.active = true;
        const colors = ['#00f0ff', '#bd00ff', '#39ff14', '#ffd700', '#ff0055'];
        
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: this.canvas.width / 2 + (Math.random() - 0.5) * 40,
                y: this.canvas.height / 3 + (Math.random() - 0.5) * 40,
                size: Math.random() * 6 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                speedX: (Math.random() - 0.5) * 8,
                speedY: -(Math.random() * 6 + 4),
                gravity: 0.18,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10
     class ScavengerEscapeGame {
    constructor() {
        this.state = {
            teamName: '',
            activeSubject: null,
            subjects: {
                kimya: { currentStep: 1, solvedStations: [], activeRiddleId: null, startTime: null, endTime: null },
                matematik: { currentStep: 1, solvedStations: [], activeRiddleId: null, startTime: null, endTime: null },
                fizik: { currentStep: 1, solvedStations: [], activeRiddleId: null, startTime: null, endTime: null },
                bilisim: { currentStep: 1, solvedStations: [], activeRiddleId: null, startTime: null, endTime: null },
                sosyal: { currentStep: 1, solvedStations: [], activeRiddleId: null, startTime: null, endTime: null },
                edebiyat: { currentStep: 1, solvedStations: [], activeRiddleId: null, startTime: null, endTime: null }
            },
            soundMuted: false
        };
        
        this.html5Qrcode = null;
        this.init();
    }

    init() {
        this.loadState();
        this.bindEvents();
        new ParticleBg();
        this.checkQueryParameters(); // URL direct parameters
        this.updateSoundButtonUI();
    }

    // Dyn getters for current stations and secret word based on active subject
    get activeStations() {
        const sub = this.state.activeSubject || 'kimya';
        return SUBJECTS_DATA[sub].stations;
    }

    get activeSecretPhrase() {
        const sub = this.state.activeSubject || 'kimya';
        return SUBJECTS_DATA[sub].secretPhrase;
    }

    get activeSubState() {
        const sub = this.state.activeSubject || 'kimya';
        if (!this.state.subjects) {
            this.state.subjects = {};
        }
        if (!this.state.subjects[sub]) {
            this.state.subjects[sub] = { currentStep: 1, solvedStations: [], activeRiddleId: null, startTime: null, endTime: null };
        }
        return this.state.subjects[sub];
    }

    // LocalStorage İlerlemeyi Yükle
    loadState() {
        const saved = localStorage.getItem('escape_scavenger_state_v2');
        if (saved) {
            try {
                this.state = JSON.parse(saved);
                sound.muted = this.state.soundMuted;
            } catch (e) {
                console.error("State load failed, resetting...", e);
            }
        }
        
        // Dynamic routing based on active subject
        if (this.state.activeSubject) {
            this.applySubjectTheme(this.state.activeSubject);
            const subState = this.activeSubState;
            const STATIONS = this.activeStations;
            
            if (subState.endTime && subState.solvedStations.length === STATIONS.length) {
                this.showScreen('victory-screen');
                this.renderVictoryScreen();
            } else if (this.state.teamName) {
                this.showScreen('game-screen');
                this.setupGameUI();
            } else {
                this.showScreen('welcome-screen');
                this.setupWelcomeScreenUI();
            }
        } else {
            this.showScreen('category-selection-screen');
        }
    }

    saveState() {
        localStorage.setItem('escape_scavenger_state_v2', JSON.stringify(this.state));
    }

    resetGame() {
        const sub = this.state.activeSubject || 'kimya';
        if (this.state.subjects && this.state.subjects[sub]) {
            this.state.subjects[sub] = {
                currentStep: 1,
                solvedStations: [],
                activeRiddleId: null,
                startTime: null,
                endTime: null
            };
        }
        this.saveState();
        
        document.getElementById('riddle-answer-input').value = '';
        document.getElementById('manual-code-input').value = '';
        
        this.stopScanner();
        document.getElementById('teacher-modal').classList.remove('active');
        
        if (this.state.teamName) {
            this.showScreen('game-screen');
            this.setupGameUI();
        } else {
            this.showScreen('welcome-screen');
            this.setupWelcomeScreenUI();
        }
    }

    applySubjectTheme(subject) {
        const mockup = document.querySelector('.phone-mockup');
        if (mockup) {
            mockup.classList.remove('theme-kimya', 'theme-matematik', 'theme-fizik', 'theme-bilisim', 'theme-sosyal', 'theme-edebiyat');
            const themeClass = SUBJECTS_DATA[subject]?.themeClass || 'theme-kimya';
            mockup.classList.add(themeClass);
        }
        
        // Sync teacher dropdown select to active subject if user is teacher
        const select = document.getElementById('teacher-subject-select');
        if (select) {
            select.value = subject;
        }
    }

    setupWelcomeScreenUI() {
        const sub = this.state.activeSubject || 'kimya';
        const data = SUBJECTS_DATA[sub];
        if (!data) return;

        document.getElementById('welcome-badge').innerText = `🕵️‍♂️ ${data.badge}`;
        const portalIcon = document.getElementById('welcome-portal-icon');
        if (portalIcon) {
            portalIcon.className = `${data.iconClass} portal-icon`;
        }
        
        document.getElementById('welcome-game-title').innerHTML = data.welcomeTitle;
        document.getElementById('welcome-game-subtitle').innerText = data.welcomeSubtitle;
        document.getElementById('welcome-game-intro').innerText = data.welcomeIntro;
        document.getElementById('welcome-btn-text').innerText = data.btnText;
        document.getElementById('team-name-input').value = this.state.teamName || '';
    }

    showScreen(screenId) {
        document.querySelectorAll('.app-screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
        
        if (screenId !== 'game-screen') {
            this.stopScanner();
        }
    }

    showHudView(viewId) {
        document.querySelectorAll('.hud-view').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(viewId).classList.add('active');
        
        if (viewId !== 'scanner-view') {
            this.stopScanner();
        }
    }

    // URL parametresinden doğrudan QR okutma desteği
    checkQueryParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const subjectParam = urlParams.get('subject');
        const stationParam = urlParams.get('station');
        
        if (subjectParam && stationParam) {
            window.history.replaceState({}, document.title, window.location.pathname);
            
            if (SUBJECTS_DATA[subjectParam]) {
                this.state.activeSubject = subjectParam;
                this.applySubjectTheme(subjectParam);
                this.saveState();
            }
            
            if (this.state.teamName) {
                const sNum = parseInt(stationParam);
                const stations = this.activeStations;
                if (sNum >= 1 && sNum <= stations.length) {
                    this.handleScannedStation(sNum);
                }
            } else {
                this.showScreen('welcome-screen');
                this.setupWelcomeScreenUI();
            }
        }
    }

    // ==========================================================================
    // ETKİNLİK DİNLEYİCİLERİ
    // ==========================================================================
    bindEvents() {
        // Ana Sayfa / Branş Seçimine Dönme
        document.getElementById('home-btn').addEventListener('click', () => {
            sound.playClick();
            this.stopScanner();
            this.state.activeSubject = null;
            this.saveState();
            this.showScreen('category-selection-screen');
        });

        document.getElementById('back-to-categories-btn').addEventListener('click', () => {
            sound.playClick();
            this.state.activeSubject = null;
            this.saveState();
            this.showScreen('category-selection-screen');
        });

        // Branş Seçim Kartı Tıklamaları
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                sound.playClick();
                const subject = e.currentTarget.getAttribute('data-subject');
                if (subject && SUBJECTS_DATA[subject]) {
                    this.state.activeSubject = subject;
                    this.applySubjectTheme(subject);
                    this.saveState();
                    
                    const subState = this.activeSubState;
                    const STATIONS = this.activeStations;
                    
                    if (subState.endTime && subState.solvedStations.length === STATIONS.length) {
                        this.showScreen('victory-screen');
                        this.renderVictoryScreen();
                    } else if (this.state.teamName) {
                        this.showScreen('game-screen');
                        this.setupGameUI();
                    } else {
                        this.showScreen('welcome-screen');
                        this.setupWelcomeScreenUI();
                    }
                }
            });
        });

        // Ses Aç/Kapat
        document.getElementById('sound-btn').addEventListener('click', () => {
            const isMuted = sound.toggleMute();
            this.state.soundMuted = isMuted;
            this.saveState();
            this.updateSoundButtonUI();
            sound.playClick();
        });

        // Öğretmen Paneli
        document.getElementById('teacher-btn').addEventListener('click', () => {
            sound.playClick();
            
            // Set selection in dropdown to current active subject if available
            if (this.state.activeSubject) {
                document.getElementById('teacher-subject-select').value = this.state.activeSubject;
            }
            
            this.openTeacherPanel();
        });
        
        document.getElementById('close-teacher-btn').addEventListener('click', () => {
            sound.playClick();
            document.getElementById('teacher-modal').classList.remove('active');
        });

        // Öğretmen Branş Seçim Filtresi
        document.getElementById('teacher-subject-select').addEventListener('change', () => {
            sound.playClick();
            this.openTeacherPanel();
        });

        // Oyunu Başlat (Giriş)
        document.getElementById('start-game-btn').addEventListener('click', () => {
            const input = document.getElementById('team-name-input');
            const name = input.value.trim();
            
            if (!name) {
                sound.playError();
                input.parentElement.classList.add('shake-element');
                setTimeout(() => {
                    input.parentElement.classList.remove('shake-element');
                }, 400);
                return;
            }
            
            sound.playSuccess();
            this.state.teamName = name;
            
            const subState = this.activeSubState;
            subState.startTime = Date.now();
            subState.currentStep = 1;
            this.saveState();
            
            this.showScreen('game-screen');
            this.setupGameUI();
        });

        // QR Tarayıcıyı Aç
        document.getElementById('open-scanner-btn').addEventListener('click', () => {
            sound.playClick();
            this.showHudView('scanner-view');
            this.startScanner();
        });

        // Şifreyi Elle Gir
        document.getElementById('manual-mode-btn').addEventListener('click', () => {
            sound.playClick();
            this.showHudView('manual-entry-view');
        });

        document.getElementById('scanner-manual-fallback').addEventListener('click', () => {
            sound.playClick();
            this.showHudView('manual-entry-view');
        });

        // Tarayıcı Kapat
        document.getElementById('close-scanner-btn').addEventListener('click', () => {
            sound.playClick();
            this.showHudView('dashboard-view');
        });

        // İpucu Akordiyon
        document.getElementById('hint-toggle-btn').addEventListener('click', (e) => {
            sound.playClick();
            e.currentTarget.classList.toggle('open');
        });

        // Bilmeceden Vazgeç / Geri Dön
        document.getElementById('cancel-riddle-btn').addEventListener('click', () => {
            sound.playClick();
            const subState = this.activeSubState;
            subState.activeRiddleId = null;
            this.saveState();
            this.showHudView('dashboard-view');
            this.setupGameUI();
        });

        // Şifre Cevabı Doğrula
        document.getElementById('submit-answer-btn').addEventListener('click', () => {
            this.verifyRiddleAnswer();
        });

        document.getElementById('riddle-answer-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.verifyRiddleAnswer();
            }
        });

        // Manuel Kod Giriş İptal
        document.getElementById('cancel-manual-btn').addEventListener('click', () => {
            sound.playClick();
            document.getElementById('manual-code-input').value = '';
            document.getElementById('manual-feedback').classList.remove('active');
            this.showHudView('dashboard-view');
        });

        // Manuel Kod Giriş Doğrula
        document.getElementById('submit-manual-code-btn').addEventListener('click', () => {
            this.verifyManualCode();
        });

        document.getElementById('manual-code-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.verifyManualCode();
            }
        });

        // Yeniden Oyna
        document.getElementById('restart-game-btn').addEventListener('click', () => {
            if (confirm("Macerayı sıfırlamak ve en baştan başlamak istediğinizden emin misiniz?")) {
                this.resetGame();
            }
        });

        // Öğretmen İlerleme Sıfırla
        document.getElementById('reset-class-progress-btn').addEventListener('click', () => {
            const selectedSub = document.getElementById('teacher-subject-select').value || 'kimya';
            if (confirm(`${SUBJECTS_DATA[selectedSub].name} dersine ait tüm ilerlemeler sıfırlanacaktır. Emin misiniz?`)) {
                if (this.state.subjects && this.state.subjects[selectedSub]) {
                    this.state.subjects[selectedSub] = {
                        currentStep: 1,
                        solvedStations: [],
                        activeRiddleId: null,
                        startTime: null,
                        endTime: null
                    };
                }
                this.saveState();
                
                if (this.state.activeSubject === selectedSub) {
                    this.resetGame();
                } else {
                    this.openTeacherPanel();
                }
            }
        });

        // Öğretmen Tabları
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                sound.playClick();
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                const targetTab = e.currentTarget.getAttribute('data-tab');
                e.currentTarget.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });

        // Yazdır
        document.getElementById('print-qrs-btn').addEventListener('click', () => {
            sound.playClick();
            window.print();
        });
    }

    updateSoundButtonUI() {
        const btn = document.getElementById('sound-btn');
        if (sound.muted) {
            btn.innerHTML = '<i class="fas fa-volume-xmark text-muted"></i>';
        } else {
            btn.innerHTML = '<i class="fas fa-volume-up text-cyan"></i>';
        }
    }

    // ==========================================================================
    // MACERA AKIŞ KONTROLÜ
    // ==========================================================================
    
    // Oyun HUD Ekranını Güncelleme
    setupGameUI() {
        this.renderInventoryHUD();
        this.updateProgressBar();
        this.updateDashboardTarget();
        
        const STATIONS = this.activeStations;
        const subState = this.activeSubState;
        
        // Eğer aktif taranmış bir bilmece varsa ona yönlendir
        if (subState.activeRiddleId) {
            this.loadRiddleIntoView(subState.activeRiddleId);
        } else if (subState.currentStep === 1 && !subState.solvedStations.includes(1)) {
            // Oyunun en başı: QR kod taratmak zorunda değil, doğrudan ilk bilmece yüklenebilir!
            this.loadRiddleIntoView(1);
        }
    }

    // Toplanan Harfleri Arayüzde Çantada Göster (Inventory Rendering)
    renderInventoryHUD() {
        const STATIONS = this.activeStations;
        const subState = this.activeSubState;
        const container = document.getElementById('collected-letters-container');
        container.innerHTML = '';
        
        let letterSlots = [];
        
        // Çözülen adımlardaki harfleri sırayla topla
        STATIONS.forEach(s => {
            if (subState.solvedStations.includes(s.id) && s.letter) {
                letterSlots.push(s.letter);
            }
        });

        // Çanta alanını doldur
        const totalPossibleSlots = 15;
        for (let i = 0; i < totalPossibleSlots; i++) {
            const chip = document.createElement('div');
            if (i < letterSlots.length) {
                chip.className = 'letter-chip';
                chip.innerText = letterSlots[i];
            } else {
                chip.className = 'letter-chip empty-chip';
                chip.innerText = '?';
            }
            container.appendChild(chip);
        }

        const solvedCount = subState.solvedStations.length;
        document.getElementById('unlocked-counter').innerText = `İstasyonlar: ${solvedCount} / ${STATIONS.length - 1}`;
    }

    // İlerleme Çubuğunu Güncelle
    updateProgressBar() {
        const STATIONS = this.activeStations;
        const subState = this.activeSubState;
        const bar = document.getElementById('game-progress-bar');
        if (bar) {
            const totalSteps = STATIONS.length - 1;
            const solvedCount = subState.solvedStations.length;
            const percentage = Math.min((solvedCount / totalSteps) * 100, 100);
            bar.style.width = `${percentage}%`;
        }
    }

    // Dashboard'daki Aktif Hedef İstasyon Kartını Güncelle
    updateDashboardTarget() {
        const STATIONS = this.activeStations;
        const subState = this.activeSubState;
        const targetTitle = document.getElementById('target-station-display');
        const targetInstruction = document.getElementById('target-instruction-text');
        
        const currentActiveStep = subState.currentStep;
        const currentStation = STATIONS.find(s => s.id === currentActiveStep);
        
        if (currentStation) {
            if (currentActiveStep === 1) {
                targetTitle.innerText = "Başlangıç İstasyonu";
                targetInstruction.innerText = "Oyunu başlatmak için aşağıdaki ilk bilmeceyi çözmelisiniz. (Bilmece kartı otomatik yüklendi).";
            } else {
                targetTitle.innerText = currentStation.title;
                targetInstruction.innerText = `Sınıf içerisinde '${currentStation.title}' istasyonunu bulun, üzerindeki QR kodu okutun.`;
            }
        }
    }

    // QR Kod Okutulunca veya Kod Girilince Akış Kontrolü
    handleScannedStation(stationId) {
        const STATIONS = this.activeStations;
        const subState = this.activeSubState;
        const currentActiveStep = subState.currentStep;
        
        // Doğru istasyon mu taranıyor kontrolü (Çözme sırasını zorunlu kılar)
        if (stationId === currentActiveStep) {
            this.loadRiddleIntoView(stationId);
        } else {
            // Yanlış istasyon uyarısı
            sound.playError();
            const expectedStation = STATIONS.find(s => s.id === currentActiveStep);
            
            if (stationId < currentActiveStep) {
                alert(`⚠️ Zaten Çözüldü!\n\nBu istasyonu (${STATIONS.find(s=>s.id===stationId).title}) daha önce başarıyla çözmüştün.\n\nŞu an araman gereken hedef istasyon: "${expectedStation.title}"`);
            } else {
                alert(`❌ Yanlış İstasyon!\n\nSırayla ilerlemelisin dedektif. Şu an "${expectedStation.title}" istasyonunu arıyor olmalısın. Doğru istasyonu bulup tekrar tarat!`);
            }
            this.showHudView('dashboard-view');
        }
    }

    // Bilmeceyi Ekrana Doldurma
    loadRiddleIntoView(stationId) {
        const STATIONS = this.activeStations;
        const subState = this.activeSubState;
        subState.activeRiddleId = stationId;
        this.saveState();
        
        const station = STATIONS.find(s => s.id === stationId);
        if (!station) return;
 
        // Ekrana bilgileri yaz
        if (stationId === STATIONS.length) {
            // FİNAL ADIMI - Anagram Solver
            document.getElementById('riddle-station-num').innerText = "FİNAL GÖREVİ";
            document.getElementById('riddle-title').innerText = "Gizemli Kişi / Kavram";
            
            const earnedLetters = [];
            STATIONS.forEach(s => {
                if (s.letter) earnedLetters.push(s.letter);
            });
            
            const lettersHTML = earnedLetters.map(l => `<span class="anagram-letter-chip">${l}</span>`).join('');
            
            const terminal = document.getElementById('riddle-text');
            terminal.innerHTML = `
                <p style="margin-bottom:12px;"><strong>SYS_OVERRIDE ></strong> TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ!</p>
                <p style="color:#bd00ff; margin-bottom:8px;">Topladığınız gizemli harf kutuları aşağıdadır. Harfleri birleştirerek <strong>Kayıp Dâhiyi / Kavramı</strong> bulunuz:</p>
                <div class="anagram-letters-holder">
                    ${lettersHTML}
                </div>
            `;
            document.getElementById('riddle-hint').innerText = `Topladığın harfleri anlamlı bir isim/kelime grubu olacak şekilde karıştırarak dâhiyi bulmalısın.`;
        } else {
            // Normal İstasyon Bilmecesi
            document.getElementById('riddle-station-num').innerText = stationId === 1 ? "BAŞLANGIÇ ADIMI" : `İSTASYON #${stationId - 1}`;
            document.getElementById('riddle-title').innerText = station.title;
            document.getElementById('riddle-text').innerText = station.riddle;
            document.getElementById('riddle-hint').innerText = station.hint;
        }

        // Reset accordion
        document.getElementById('hint-toggle-btn').classList.remove('open');
        
        // Reset input and feedbacks
        document.getElementById('riddle-answer-input').value = '';
        const fb = document.getElementById('riddle-feedback');
        fb.className = 'feedback-msg';
        fb.innerText = '';
        
        // Riddle panelini aç
        this.showHudView('riddle-view');
        
        // Inputa odaklan
        setTimeout(() => {
            document.getElementById('riddle-answer-input').focus();
        }, 300);
    }

    // Bilmece Cevap Doğrulama
    verifyRiddleAnswer() {
        const STATIONS = this.activeStations;
        const SECRET_PHRASE = this.activeSecretPhrase;
        const subState = this.activeSubState;
        
        const inputElement = document.getElementById('riddle-answer-input');
        const answer = inputElement.value.trim();
        const feedback = document.getElementById('riddle-feedback');
        
        if (!answer) {
            sound.playError();
            inputElement.focus();
            return;
        }
        
        const station = STATIONS.find(s => s.id === subState.activeRiddleId);
        if (!station) return;
        
        const normalizedInput = normalizeTurkish(answer);
        const isCorrect = station.answers.some(ans => normalizeTurkish(ans) === normalizedInput);
        
        feedback.classList.remove('active');
        
        if (isCorrect) {
            sound.playSuccess();
            confetti.spawn();
            
            feedback.className = 'feedback-msg success active';
            
            if (subState.activeRiddleId === STATIONS.length) {
                // ZAFER! Final şifre çözüldü!
                feedback.innerText = "GİZEMLİ KİŞİ/KAVRAM BULUNDU! Tebrikler dedektif.";
                subState.solvedStations.push(STATIONS.length);
                subState.endTime = Date.now();
                subState.activeRiddleId = null;
                this.saveState();
                
                setTimeout(() => {
                    this.checkCompletion();
                }, 1800);
            } else {
                const earnedLetterText = station.letter ? `\nKazanılan Harf: [ ${station.letter} ]` : "";
                feedback.innerText = `DOĞRU CEVAP! \nBir sonraki hedef: "${station.nextStationName}" ${earnedLetterText}`;
                
                subState.solvedStations.push(subState.activeRiddleId);
                subState.currentStep = subState.activeRiddleId + 1;
                subState.activeRiddleId = null;
                this.saveState();
                
                setTimeout(() => {
                    this.showHudView('dashboard-view');
                    this.setupGameUI();
                }, 2200);
            }
            
        } else {
            sound.playError();
            feedback.innerText = "Hatalı şifre! Bilmeceyi tekrar okuyun veya ipucu alın.";
            feedback.className = 'feedback-msg error active';
            
            inputElement.parentElement.classList.add('shake-element');
            setTimeout(() => {
                inputElement.parentElement.classList.remove('shake-element');
                inputElement.focus();
            }, 400);
        }
    }

    // Manuel 4 Haneli Yedek Kod Giriş Kontrolü
    verifyManualCode() {
        const STATIONS = this.activeStations;
        const inputElement = document.getElementById('manual-code-input');
        const enteredCode = inputElement.value.trim();
        const feedback = document.getElementById('manual-feedback');
        
        if (!enteredCode) {
            sound.playError();
            inputElement.focus();
            return;
        }
        
        const matchedStation = STATIONS.find(s => s.backupCode === enteredCode);
        feedback.classList.remove('active');
        
        if (matchedStation) {
            sound.playSuccess();
            feedback.innerText = `KOD KABUL EDİLDİ: ${matchedStation.title} Yükleniyor...`;
            feedback.className = 'feedback-msg success active';
            
            inputElement.value = '';
            
            setTimeout(() => {
                feedback.classList.remove('active');
                this.handleScannedStation(matchedStation.id);
            }, 1200);
        } else {
            sound.playError();
            feedback.innerText = "Geçersiz yedek kod! Kod kartını kontrol edin.";
            feedback.className = 'feedback-msg error active';
            
            inputElement.parentElement.classList.add('shake-element');
            setTimeout(() => {
                inputElement.parentElement.classList.remove('shake-element');
                inputElement.focus();
            }, 400);
        }
    }

    // Oyun Bitim Kontrolü
    checkCompletion() {
        const STATIONS = this.activeStations;
        const subState = this.activeSubState;
        if (subState.solvedStations.includes(STATIONS.length)) {
            sound.playVictory();
            confetti.spawn();
            setTimeout(() => confetti.spawn(), 1500);
            
            this.showScreen('victory-screen');
            this.renderVictoryScreen();
        }
    }

    renderVictoryScreen() {
        const STATIONS = this.activeStations;
        const SECRET_PHRASE = this.activeSecretPhrase;
        const subState = this.activeSubState;
        const data = SUBJECTS_DATA[this.state.activeSubject || 'kimya'];
        
        document.getElementById('victory-team-name').innerText = this.state.teamName;
        document.getElementById('victory-solved-count').innerText = `${STATIONS.length} / ${STATIONS.length}`;
        
        // Reveal text
        const revealContainer = document.querySelector('.completed-phrase');
        if (revealContainer) {
            revealContainer.innerHTML = `<span class="unlocked-reveal">${SECRET_PHRASE}</span>`;
        }

        const durationMs = subState.endTime - subState.startTime;
        const minutes = Math.floor(durationMs / 60000);
        const seconds = Math.floor((durationMs % 60000) / 1000);
        
        document.getElementById('victory-duration').innerText = `${minutes} dakika ${seconds} saniye`;
        
        // Custom victory description lore
        const loreElement = document.querySelector('.victory-lore');
        if (loreElement && data) {
            loreElement.innerText = `Tebrikler! ${data.name} branşındaki tüm şifreleri çözerek ${SECRET_PHRASE} sırrını başarıyla aydınlattın. Gerçek bir bilim insanı gibi merakının peşinden gittin ve görevi tamamladın!`;
        }
    }

    // ==========================================================================
    // KAMERA VE DOKÜMAN QR OKUYUCU ENTEGRASYONU (jsQR - Ultra Uyumlu iOS/Android Motoru)
    // ==========================================================================
    startScanner() {
        const video = document.getElementById('scanner-video');
        this.scannerStream = null;
        this.scannerActive = true;
        
        video.style.display = 'block';

        const self = this;

        // iOS Safari ve modern cihazlar için ideal video ve rear-camera kısıtlamaları
        const constraints = {
            video: {
                facingMode: "environment",
                width: { ideal: 1280 },
                height: { ideal: 720 }
            }
        };

        navigator.mediaDevices.getUserMedia(constraints).then(stream => {
            self.scannerStream = stream;
            video.srcObject = stream;
            video.setAttribute("playsinline", "true");
            video.playsInline = true;
            video.muted = true;
            video.play().catch(e => console.error("Video oynatılamadı:", e));
            
            // Tarama döngüsünü başlat
            requestAnimationFrame(() => self.scanFrame());
        }).catch(err => {
            console.error("Kamera başlatma hatası:", err);
            self.handleCameraError(err);
        });
    }

    scanFrame() {
        if (!this.scannerActive) return;
        
        const video = document.getElementById('scanner-video');
        
        if (video && video.videoWidth > 0 && video.videoHeight > 0) {
            // jsQR kütüphanesinin yüklenip yüklenmediğini kontrol et
            if (typeof jsQR === 'undefined') {
                console.error("jsQR kütüphanesi bulunamadı, CDN yüklemesi bekleniyor...");
                if (this.scannerActive) {
                    requestAnimationFrame(() => this.scanFrame());
                }
                return;
            }

            let width = video.videoWidth;
            let height = video.videoHeight;
            
            // Tarama hızını ve performansını artırmak için yüksek çözünürlüğü maks 640px'e ölçeklendir
            const maxDimension = 640;
            if (width > maxDimension || height > maxDimension) {
                const ratio = width / height;
                if (width > height) {
                    width = maxDimension;
                    height = Math.round(maxDimension / ratio);
                } else {
                    height = maxDimension;
                    width = Math.round(maxDimension * ratio);
                }
            }

            // Arka planda piksel analizi için gizli canvas oluştur
            if (!this.scanCanvas) {
                this.scanCanvas = document.createElement('canvas');
                this.scanCtx = this.scanCanvas.getContext('2d', { willReadFrequently: true });
            }
            
            this.scanCanvas.width = width;
            this.scanCanvas.height = height;
            
            this.scanCtx.drawImage(video, 0, 0, width, height);
            
            const imageData = this.scanCtx.getImageData(0, 0, width, height);
            
            // jsQR kütüphanesi ile çözümle (inversionAttempts: attemptBoth ile gölgeli kodları da oku)
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: "attemptBoth"
            });
            
            if (code && code.data) {
                console.log("jsQR başarıyla çözümledi:", code.data);
                this.onQrScanSuccess(code.data);
                return; // Başarılı olunca döngüyü kes!
            }
        }
        
        // Döngüye devam et
        if (this.scannerActive) {
            requestAnimationFrame(() => this.scanFrame());
        }
    }

    onQrScanSuccess(decodedText) {
        sound.playSuccess();
        this.stopScanner();
        
        console.log("QR decoded:", decodedText);
        
        let stationId = null;
        
        // 1. URL Parametresi Çözümleme
        try {
            if (decodedText.startsWith('http://') || decodedText.startsWith('https://')) {
                const url = new URL(decodedText);
                const subParam = url.searchParams.get('subject');
                const statParam = url.searchParams.get('station');
                
                // Başka branşa ait QR okutulursa ikaz et
                if (subParam && subParam !== this.state.activeSubject) {
                    sound.playError();
                    alert(`❌ Yanlış Ders İstasyonu!\n\nŞu an "${SUBJECTS_DATA[this.state.activeSubject].name}" oyununu oynamaktasın. Taramış olduğun QR kod ise "${SUBJECTS_DATA[subParam].name}" dersine ait!\n\nLütfen mevcut oyununa ait doğru istasyonu bulup tekrar tara!`);
                    this.showHudView('dashboard-view');
                    return;
                }
                
                if (statParam) {
                    stationId = parseInt(statParam);
                }
            }
        } catch (e) {}

        // 2. Düz Metin Çözümleme
        if (!stationId) {
            const cleanText = decodedText.trim().toUpperCase();
            const STATIONS = this.activeStations;
            const matchedByCode = STATIONS.find(s => s.code === cleanText);
            if (matchedByCode) {
                stationId = matchedByCode.id;
            } else {
                const numMatch = cleanText.match(/\d+/);
                if (numMatch) {
                    const parsedNum = parseInt(numMatch[0]);
                    if (parsedNum >= 1 && parsedNum <= STATIONS.length) {
                        stationId = parsedNum;
                    }
                }
            }
        }

        // İstasyonu işle
        const STATIONS = this.activeStations;
        if (stationId && stationId >= 1 && stationId <= STATIONS.length) {
            this.handleScannedStation(stationId);
        } else {
            sound.playError();
            alert("❌ Hatalı veya Geçersiz QR Kod!\n\nOkunan QR kod bu oyuna ait geçerli bir istasyon içermiyor. Lütfen doğru istasyon kağıdını okuttuğunuzdan emin olun!");
            this.showHudView('dashboard-view');
        }
    }

    handleCameraError(error) {
        this.stopScanner();
        alert("Kameranıza erişilemedi! İzinleri engellemiş olabilirsiniz veya tarayıcınız uyumlu olmayabilir. \n\nSorun değil! İstasyon kartlarındaki 4 haneli yedek kodları manuel girerek maceraya devam edebilirsiniz.");
        this.showHudView('manual-entry-view');
    }

    stopScanner() {
        this.scannerActive = false;
        
        const video = document.getElementById('scanner-video');
        if (video) {
            video.pause();
            video.srcObject = null;
        }
        
        if (this.scannerStream) {
            try {
                this.scannerStream.getTracks().forEach(track => track.stop());
            } catch (e) {
                console.error("Track stop error:", e);
            }
            this.scannerStream = null;
        }
    }

    // ==========================================================================
    // ÖĞRETMEN PANELİ BİLGİ DOLDURMA & QR ÜRETİCİ
    // ==========================================================================
    openTeacherPanel() {
        const modal = document.getElementById('teacher-modal');
        modal.classList.add('active');
        
        const selectedSub = document.getElementById('teacher-subject-select').value || 'kimya';
        const data = SUBJECTS_DATA[selectedSub];
        const subState = this.state.subjects[selectedSub] || { currentStep: 1, solvedStations: [] };
        
        // 1. Genel Bakış Tablosunu Doldur
        const listContainer = document.querySelector('.stations-list');
        listContainer.innerHTML = '';
        
        data.stations.forEach(s => {
            const isSolved = subState.solvedStations.includes(s.id);
            const statusText = isSolved ? '<span class="text-emerald">[ÇÖZÜLDÜ]</span>' : '<span class="text-muted">[KİLİTLİ]</span>';
            const letterText = s.letter ? `<span class="text-cyan">${s.letter}</span>` : '<span class="text-muted">- (Yok)</span>';
            
            const card = document.createElement('div');
            card.className = 'teacher-station-card';
            card.innerHTML = `
                <div class="t-station-header">
                    <span>Adım #${s.id}: ${s.title}</span>
                    <span>${statusText}</span>
                </div>
                <p class="t-station-riddle"><strong>Şifre (Soru):</strong> "${s.riddle}"</p>
                <div class="t-station-meta">
                    <span>Cevap: <strong class="text-emerald">${s.answers[0].toUpperCase()}</strong></span>
                    <span>Kazanılan Harf: <strong>${letterText}</strong></span>
                    <span>Sonraki İstasyon: <strong class="text-purple">${s.nextStationName}</strong></span>
                    <span>Yedek Kod: <strong class="text-yellow">${s.backupCode}</strong></span>
                </div>
            `;
            listContainer.appendChild(card);
        });

        // 2. QR Kod Kartlarını offline-friendly üret (QRious)
        const qrContainer = document.getElementById('qr-cards-printout');
        qrContainer.innerHTML = '';
        
        const baseUrl = window.location.href.split('?')[0];

        data.stations.forEach(s => {
            const cardItem = document.createElement('div');
            cardItem.className = 'qr-card-item';
            
            const canvasHolder = document.createElement('div');
            canvasHolder.className = 'qr-canvas-holder';
            const canvas = document.createElement('canvas');
            canvasHolder.appendChild(canvas);
            
            cardItem.appendChild(canvasHolder);
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'qr-card-info';
            
            const letterText = s.letter ? `Kazanılan Harf: [ <strong>${s.letter}</strong> ]` : "Kazanılan Harf: (Yok)";
            
            infoDiv.innerHTML = `
                <div class="qr-card-num">${data.name}</div>
                <div class="qr-card-title">İSTASYON #${s.id}</div>
                <div class="qr-card-hint"><strong>Bulunduğu Yer:</strong> ${s.title}</div>
                <div style="font-size:0.7rem; color:#444; margin-top:2px;">${letterText}</div>
                <div style="font-size:0.7rem; color:#666;">Hedef İstasyon: ${s.nextStationName}</div>
                <div class="qr-card-backup">Yedek Kod: ${s.backupCode}</div>
            `;
            cardItem.appendChild(infoDiv);
            qrContainer.appendChild(cardItem);
            
            // QR Kod Oluştur (Kamera ile taratılacak URL, branş parametresiyle!)
            const targetUrl = `${baseUrl}?subject=${selectedSub}&station=${s.id}`;
            
            new QRious({
                element: canvas,
                value: targetUrl,
                size: 200,
                background: '#ffffff',
                foreground: '#000000',
                level: 'M',
                padding: 15
            });

            // Convert canvas to base64 image tag so browsers render it 100% reliably in print dialogs
            try {
                const img = document.createElement('img');
                img.src = canvas.toDataURL('image/png');
                canvasHolder.innerHTML = '';
                canvasHolder.appendChild(img);
            } catch (err) {
                console.error("Canvas to dataURL conversion failed, keeping canvas element:", err);
            }
        });
    }
}

// Oyunu Başlat
window.addEventListener('DOMContentLoaded', () => {
    window.game = new ScavengerEscapeGame();
});
