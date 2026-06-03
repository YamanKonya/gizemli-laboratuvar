/* ==========================================================================
   GİZEMLİ LABORATUVAR: KAYIP BİLİM İNSANI - OYUN MANTIĞI & JAVASCRIPT
   ========================================================================== */

// ==========================================================================
// 1. İSTASYON ZİNCİRİ VERİ TABANI (18 Adımlı Linear Scavenger Hunt)
// ==========================================================================
const SUBJECTS_DATA = {
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
                title: "Kimya Başlangıç Noktası",
                code: "CHEM_START",
                backupCode: "1001",
                letter: null,
                riddle: "Cam bedenim ince uzun, üstümde çizgiler dizili. Sıvıları ölçerim hassasça, bulun bakalım bu gizemli şekli?",
                hint: "Laboratuvarda sıvı hacmi ölçmek için kullanılan çizgili silindirik cam kap.",
                answers: ["dereceli silindir", "mezur", "mezura", "derecelisilindir"],
                nextStationName: "Dereceli Silindir"
            },
            {
                id: 2,
                title: "Dereceli Silindir",
                code: "DERECELI",
                backupCode: "1002",
                letter: "G",
                riddle: "Yay gerilir içimde, kuvvetle sırdaş olurum. Newton'dur birimim benim, ağırlığı onunla bulurum. Ben neyim?",
                hint: "İçindeki sarmal yayın esnemesiyle kuvvet veya ağırlık ölçen alet.",
                answers: ["dinamometre", "kuvvetolcer", "kuvvet olcer"],
                nextStationName: "Dinamometre"
            },
            {
                id: 3,
                title: "Dinamometre",
                code: "DINAMOMETRE",
                backupCode: "1003",
                letter: "A",
                riddle: "Küçük ateşimle ısıtırım her şeyi, içinde mavi sıvı parlar gizemli. Deney tüplerinin dostuyum ben, bilin bakalım kimim?",
                hint: "Mavi ispirto yakıtıyla çalışan, laboratuvarda ısıtma deneylerinde kullanılan küçük ocak.",
                answers: ["ispirto ocagi", "ispirtoocagi"],
                nextStationName: "İspirto Ocağı"
            },
            {
                id: 4,
                title: "İspirto Ocağı",
                code: "ISPIRTO",
                backupCode: "1004",
                letter: "L",
                riddle: "Cam gözümle bakarım, görünmeyeni görürüm. Hücrelerin dünyasına yolculuklar ettiririm. Ben neyim?",
                hint: "Gözle görülemeyecek kadar küçük canlıları veya yapıları mercekleriyle büyüterek gösteren optik cihaz.",
                answers: ["mikroskop", "isikmikroskobu"],
                nextStationName: "Mikroskop"
            },
            {
                id: 5,
                title: "Mikroskop",
                code: "MIKROSKOP",
                backupCode: "1005",
                letter: "İ",
                riddle: "Işığı eğip büker, bazen odakta birleştirir. İnce ve kalın kenarlıyım, görüntüleri değiştiririm. Biz kimiz?",
                hint: "Gözlüklerde, büyüteçlerde kullanılan, ışığı kıran saydam cam takımı.",
                answers: ["mercek takimi", "mercekler", "mercektakimi", "mercek"],
                nextStationName: "Mercek Takımı"
            },
            {
                id: 6,
                title: "Mercek Takımı",
                code: "MERCEK",
                backupCode: "1006",
                letter: "L",
                riddle: "İki kap yan yana, içi dolu suyla. Tabanları birleşir, seviyeler eşitlenir aynı anda. Biz kimiz?",
                hint: "Tabanları bir boruyla birleştirilmiş, sıvı seviyelerinin her kolda eşit olmasını sağlayan kaplar düzeneği.",
                answers: ["bilesik kaplar", "bilesikkaplar", "bilesik kap"],
                nextStationName: "Bileşik Kaplar"
            },
            {
                id: 7,
                title: "Bileşik Kaplar",
                code: "BILESIK",
                backupCode: "1007",
                letter: "E",
                riddle: "Görüntüyü büyütürüm, bazen de ters çeviririm. Kaşığın iç yüzü gibiyim, ışığı odakta eritirim. Ben hangi aynayım?",
                hint: "Yansıtıcı yüzeyi küresel bir çukur olan, cisimleri dev ve ters gösterebilen ayna tipi.",
                answers: ["cukur ayna", "cukurayna", "konkav ayna"],
                nextStationName: "Çukur Ayna"
            },
            {
                id: 8,
                title: "Çukur Ayna",
                code: "CUKUR_AYNA",
                backupCode: "1008",
                letter: "O",
                riddle: "Küçük tüpler sıra olur içimde. Laboratuvarda dik dururlar, kırılmasınlar diye güvende tutarım. Ben neyim?",
                hint: "Deney tüplerinin dik durmasını sağlayan, ahşap, plastik veya metalden yapılmış tüp standı.",
                answers: ["tupluk", "tup rafi", "tuprafi", "tup standi", "tupstandi"],
                nextStationName: "Tüplük"
            },
            {
                id: 9,
                title: "Tüplük",
                code: "TUPLUK",
                backupCode: "1009",
                letter: "G",
                riddle: "Kaynar suyun nefesi, göğe çıkar incecik. Soğuk camda yoğunlaşır, damlar berrak ve temizce. Ben hangi düzeneğim?",
                hint: "Sıvı karışımları kaynatıp buharlaştırarak ve ardından yoğuşturarak saflaştıran laboratuvar düzeneği.",
                answers: ["damitma duzenegi", "damitmaduzenegi", "damitma imbigi", "damitma"],
                nextStationName: "Damıtma Düzeneği"
            },
            {
                id: 10,
                title: "Damıtma Düzeneği",
                code: "DAMITMA",
                backupCode: "1010",
                letter: "A",
                riddle: "Akım bana uğrar, bazen hızlı bazen yavaş. Direnci ayarlarım sürgümle yavaş yavaş. Ben kimim?",
                hint: "Elektrik devrelerinde direnci el yardımıyla değiştirerek akım şiddetini ayarlayan ayarlı direnç.",
                answers: ["reosta", "ayarli direnc", "ayarlidirenc"],
                nextStationName: "Reosta"
            },
            {
                id: 11,
                title: "Reosta",
                code: "REOSTA",
                backupCode: "1011",
                letter: "L",
                riddle: "Renklerim çeşit çeşit, sertliğim değişken. Yer kabuğunun süsüyüm, doğada saklanırken. Biz neyiz?",
                hint: "Taşları ve kayaçları oluşturan, doğada kristal yapıda bulunan kimyasal bileşikler serisi.",
                answers: ["mineral seti", "mineraller", "mineralseti", "mineral"],
                nextStationName: "Mineral Seti"
            },
            {
                id: 12,
                title: "Mineral Seti",
                code: "MINERAL",
                backupCode: "1012",
                letter: "İ",
                riddle: "Enerjiyi ben veririm, hayat bulur devreler. Prizden gelen gücü, lambaya ulaştırırım güvenle. Ben neyim?",
                hint: "Elektrik devrelerine istenen voltajda akım sağlayan laboratuvar güç cihazı.",
                answers: ["guc kaynagi", "guckaynagi", "adaptor"],
                nextStationName: "Güç Kaynağı"
            },
            {
                id: 13,
                title: "Güç Kaynağı",
                code: "GUC_KAYNAGI",
                backupCode: "1013",
                letter: "L",
                riddle: "Laboratuvarda sessizim, ama elim iş tutar. Kıskaçları taşırım sırtımda, düzeneği ayakta tutarım. Ben neyim?",
                hint: "Deney tüplerini sabitlediğimiz dikey demir çubuklu laboratuvar standı.",
                answers: ["destek cubugu", "destekcubugu", "laboratuvar destegi", "laboratuvardestegi"],
                nextStationName: "Destek Çubuğu"
            },
            {
                id: 14,
                title: "Destek Çubuğu",
                code: "DESTEK",
                backupCode: "1014",
                letter: "E",
                riddle: "Boynum dar, altım geniştir benim. Kimyasal sıvıları karıştırır, saklarım güvenle. Adım bir Alman kimyagerden yadigardır.",
                hint: "Laboratuvarda titrasyon işlemlerinde kullanılan konik biçimli cam kap.",
                answers: ["erlenmayer", "erlen"],
                nextStationName: "Erlenmayer"
            },
            {
                id: 15,
                title: "Erlenmayer",
                code: "ERLENMAYER",
                backupCode: "1015",
                letter: "İ",
                riddle: "Geniş ağızlı, silindir gibi bedenim. İçimde sıvıları kaynatır, karıştırırım. Laboratuvarın en temel bardağıyım.",
                hint: "Sıvıları doldurmak, ısıtmak ve karıştırmak için kullanılan silindirik, tabanı düz cam kap.",
                answers: ["beherglas", "beher"],
                nextStationName: "Beherglas"
            },
            {
                id: 16,
                title: "Beherglas",
                code: "BEHERGLAS",
                backupCode: "1099",
                letter: null,
                riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK KAYIP BİLİM ADAMINI BULUNUZ",
                hint: "Elde ettiğin 14 harfi karıştırarak modern bilimin kurucusu dahi bilim insanının adını bulmalısın.",
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
                letter: null,
                riddle: "Dairenin çevresinin çapına olan meşhur oranıyım. Virgülden sonra sonsuza uzanır basamaklarım. Yaklaşık 3.14 olarak bilinirim. Ben kimim?",
                hint: "Dairenin çevresinin çapına oranı olan, yaklaşık 3.14 kabul edilen meşhur sabit sayı.",
                answers: ["pi", "pi sayisi", "3.14"],
                nextStationName: "Pi Sayısı"
            },
            {
                id: 2,
                title: "Pi Sayısı",
                code: "PI_SAYISI",
                backupCode: "2002",
                letter: "C",
                riddle: "Üç köşem var, bir açım tam 90 derece. Dik çizgiler çizmek için kullanılırım her yerde. Çantanın dik üyesiyim.",
                hint: "Dik üçgen biçimindeki çizim aracı.",
                answers: ["gonye"],
                nextStationName: "Gönye"
            },
            {
                id: 3,
                title: "Gönye",
                code: "GONYE",
                backupCode: "2003",
                letter: null,
                riddle: "Üç kenarım, üç köşem var benim. İç açılarımın toplamı her zaman 180 derece eder. Geometrinin en temel üyesiyim, bilin bakalım kimim?",
                hint: "Üç kenarı ve üç köşesi olan geometrik şekil.",
                answers: ["ucgen"],
                nextStationName: "Üçgen"
            },
            {
                id: 4,
                title: "Üçgen",
                code: "UCGEN",
                backupCode: "2004",
                letter: "A",
                riddle: "İki doğrunun birleştiği köşede doğarım, derece ile ölçülürüm. Darım, dikim, genişim ben.",
                hint: "Başlangıç noktaları aynı olan iki ışının oluşturduğu açıklık.",
                answers: ["aci"],
                nextStationName: "Açı"
            },
            {
                id: 5,
                title: "Açı",
                code: "ACI",
                backupCode: "2005",
                letter: null,
                riddle: "Çizgi çizerim düzgünce, boyumu ölçerim santim santim. Matematik çantamızın olmazsa olmazıyım, her çizimde benimdir yerim. Ben neyim?",
                hint: "Düz çizgiler çizmeye ve uzunluk ölçmeye yarayan dereceli araç.",
                answers: ["cetvel"],
                nextStationName: "Cetvel"
            },
            {
                id: 6,
                title: "Cetvel",
                code: "CETVEL",
                backupCode: "2006",
                letter: "H",
                riddle: "Dışımdır yuvarlak, içim ise bomboş. Benim içim dolarsa adı daire olur, ne hoş!",
                hint: "Düzlemde sabit bir noktaya eşit uzaklıktaki noktaların oluşturduğu kapalı eğri.",
                answers: ["cember", "halka"],
                nextStationName: "Çember"
            },
            {
                id: 7,
                title: "Çember",
                code: "CEMBER",
                backupCode: "2007",
                letter: null,
                riddle: "Renkli boncuklarım dizilidir tellere, hesap yaparım hızlıca kaydırarak ellerle. Eski zamanların hesap makinesiyim, bilin bakalım ben neyim?",
                hint: "Sayı boncukları kullanarak toplama ve çarpma yapmaya yarayan eski araç.",
                answers: ["abakus"],
                nextStationName: "Abaküs"
            },
            {
                id: 8,
                title: "Abaküs",
                code: "ABAKUS",
                backupCode: "2008",
                letter: "İ",
                riddle: "Sadece bire ve kendime bölünürüm, iki en küçük üye ve tek çift benim. Sayıların asil üyeleriyim.",
                hint: "1'den ve kendisinden başka böleni olmayan 1'den büyük doğal sayılar.",
                answers: ["asal sayi", "asal", "asal sayilar"],
                nextStationName: "Asal Sayılar"
            },
            {
                id: 9,
                title: "Asal Sayılar",
                code: "ASAL",
                backupCode: "2009",
                letter: null,
                riddle: "Açıları ölçerim derece derece, yarım daire şeklindeyim genellikle. Gönyenin en yakın kardeşiyim bu dünyada. Ben kimim?",
                hint: "Açıları ölçmeye yarayan yarım daire biçimindeki araç, açıölçer.",
                answers: ["iletki", "aciolcer", "aci olcer"],
                nextStationName: "İletki"
            },
            {
                id: 10,
                title: "İletki",
                code: "ILETKI",
                backupCode: "2010",
                letter: "T",
                riddle: "Artı (+) işaretidir simgem benim. Sayıları bir araya getirir, büyütürüm. Çarpmanın da temeliyim.",
                hint: "Sayıları birbirine ekleme işlemi.",
                answers: ["toplama", "toplama islemi"],
                nextStationName: "Toplama"
            },
            {
                id: 11,
                title: "Toplama",
                code: "TOPLAMA",
                backupCode: "2011",
                letter: null,
                riddle: "Bir bütünü bölerim eşit parçalara, pay ve payda ile gösteririm kendimi her tarafta. Yarım ve çeyrek benimle anlam kazanır. Ben neyim?",
                hint: "Bir bütünün eşit parçalarından birini veya birkaçını gösteren sayı, pay/payda çizgisiyle yazılır.",
                answers: ["kesir", "kesirler"],
                nextStationName: "Kesir"
            },
            {
                id: 12,
                title: "Kesir",
                code: "KESIR",
                backupCode: "2012",
                letter: "A",
                riddle: "Eksi (-) işaretidir simgem benim. Farkı bulurum, eksiltirim sayıları. Azaltmak benim işim.",
                hint: "Bir sayıdan başka bir sayıyı çıkarma işlemi.",
                answers: ["cikarma", "cikarma islemi"],
                nextStationName: "Çıkarma"
            },
            {
                id: 13,
                title: "Çıkarma",
                code: "CIKARMA",
                backupCode: "2013",
                letter: null,
                riddle: "Ortadan ikiye katlarsan beni, iki tarafım da tam eşleşir. Kelebeğin kanatlarında, aynanın yansımasında gizliyim. Ben hangi geometrik özelliğim?",
                hint: "Bir şeklin bir doğruya göre katlandığında üst üste gelmesi durumu, eş ölçülülük.",
                answers: ["simetri", "yansima"],
                nextStationName: "Simetri"
            },
            {
                id: 14,
                title: "Simetri",
                code: "SIMETRI",
                backupCode: "2014",
                letter: "R",
                riddle: "Şekillerin bilimi, alanları, hacimleri ölçerim. Üçgenler, kareler, daireler benimle yaşar.",
                hint: "Nokta, çizgi, açı, yüzey and cisimlerin özelliklerini inceleyen matematik dalı.",
                answers: ["geometri"],
                nextStationName: "Geometri"
            },
            {
                id: 15,
                title: "Geometri",
                code: "GEOMETRI",
                backupCode: "2015",
                letter: "F",
                riddle: "Bölme işleminin kalanı sıfırsa, ben o sayının nesi olurum? Bir sayıyı tam bölen küçük sayılara verilen isimdir. Ben neyim?",
                hint: "Bir sayıyı kalansız bölebilen sayılar, çarpanlar.",
                answers: ["bolen", "carpan", "kat"],
                nextStationName: "Çarpan"
            },
            {
                id: 16,
                title: "Çarpan",
                code: "CARPAN",
                backupCode: "2099",
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
        secretPhrase: "ALBERT EINSTEIN",
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
                letter: null,
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
                letter: "A",
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
                letter: "L",
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
                letter: "B",
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
                letter: "E",
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
                letter: "R",
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
                letter: "T",
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
                letter: "E",
                riddle: "Gemileri yüzerim tonlarca ağırlıkta, Arşimet buldu beni banyoda 'Evreka' diye bağırarak! Suda kaybolur ağırlığın benimle. Ben neyim?",
                hint: "Sıvıların cisimleri yukarı doğru itme gücü.",
                answers: ["kaldirma kuvveti", "suyun kaldirma kuvveti"],
                nextStationName: "Kaldırma Kuvveti"
            },
            {
                id: 9,
                title: "Kaldırma Kuvveti",
                code: "KALDIRMA",
                backupCode: "3009",
                letter: "İ",
                riddle: "Birim yüzeye dik etki eden kuvvetim ben, dağlara çıktıkça azalır, derinlere indikçe artarım. Rüzgarı da ben başlatırım.",
                hint: "Kuvvetin yüzey üzerine yaptığı etki şiddeti.",
                answers: ["basinc"],
                nextStationName: "Basınç"
            },
            {
                id: 10,
                title: "Basınç",
                code: "BASINC",
                backupCode: "3010",
                letter: "N",
                riddle: "Işığı kırarak cisimleri büyütür ya da küçültürüm. Gözlüklerin ve mikroskopların can damarıyım, saydam camdan yapılıyım.",
                hint: "Işığı kırarak görüntü oluşturan saydam optik araç.",
                answers: ["mercek"],
                nextStationName: "Mercek"
            },
            {
                id: 11,
                title: "Mercek",
                code: "MERCEK_FIZIK",
                backupCode: "3011",
                letter: "S",
                riddle: "Hareket enerjisini elektrik enerjisine çeviririm. Bisiklet tekerine değerim, farını yakarım. Dönerek üretirim gücü.",
                hint: "Hareket enerjisinden elektrik üreten küçük jeneratör.",
                answers: ["dinamo"],
                nextStationName: "Dinamo"
            },
            {
                id: 12,
                title: "Dinamo",
                code: "DINAMO_FIZIK",
                backupCode: "3012",
                letter: "T",
                riddle: "Asla yok olmam, sadece biçim değiştiririm. Potansiyelim var, kinetiğim var. İş yapabilme yeteneğiyim.",
                hint: "Fizikte iş yapabilme kapasitesi, kalori veya Joule ile ölçülür.",
                answers: ["enerji"],
                nextStationName: "Enerji"
            },
            {
                id: 13,
                title: "Enerji",
                code: "ENERJI",
                backupCode: "3013",
                letter: "E",
                riddle: "Cisimlerin hareketini zorlaştırırım, tekerleklerin kaymasını engellerim. Ellerini birbirine sürtsen ısıtırım.",
                hint: "Temas halindeki iki yüzey arasında harekete karşı oluşan kuvvet.",
                answers: ["surtunme", "surtunme kuvveti"],
                nextStationName: "Sürtünme"
            },
            {
                id: 14,
                title: "Sürtünme",
                code: "SURTUNME",
                backupCode: "3014",
                letter: "İ",
                riddle: "Saniyede 300 bin kilometre hızla koşarım, karanlıkları aydınlatırım. En hızlı şey benim evrende.",
                hint: "Görebilmemizi sağlayan elektromanyetik dalga radyasyonu.",
                answers: ["isik", "foton"],
                nextStationName: "Işık"
            },
            {
                id: 15,
                title: "Işık",
                code: "ISIK",
                backupCode: "3015",
                letter: "N",
                riddle: "Gökyüzüne çeviririm gözümü, yıldızları ve gezegenleri yakın ederim. Galileo da benimle baktı uzaya. Ben neyim?",
                hint: "Uzaktaki gök cisimlerini incelemek için kullanılan mercekli optik cihaz.",
                answers: ["teleskop"],
                nextStationName: "Teleskop"
            },
            {
                id: 16,
                title: "Teleskop",
                code: "TELESKOP",
                backupCode: "3099",
                letter: null,
                riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK GİZEMLİ FİZİKÇİYİ BULUNUZ",
                hint: "Topladığın 14 harfi (A-L-B-E-R-T-E-İ-N-S-T-E-İ-N) karıştırarak modern fiziğin dâhisi olan bilim insanının adını yazmalısın.",
                answers: ["albert einstein", "alberteinstein", "einstein"],
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
                letter: null,
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
                letter: "A",
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
                letter: "L",
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
                letter: "A",
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
                letter: "N",
                riddle: "Bilgisayarın geçici hafızasıyım, elektrik kesilince her şeyi unuturum. Hız katarım aktif çalışan uygulamalara. Ben neyim?",
                hint: "Geçici depolama yapan, bilgisayarın çalışma hızını belirleyen donanım parçası.",
                answers: ["ram", "ram bellek", "gecici bellek"],
                nextStationName: "RAM Bellek"
            },
            {
                id: 6,
                title: "RAM Bellek",
                code: "RAM",
                backupCode: "4006",
                letter: null,
                riddle: "Ekrandaki oku hareket ettiririm, tık tık ederim her şeye. Kedinin sevmediği tek fareyim ben.",
                hint: "Ekrandaki imleci kontrol eden, tuşlu ve tekerlekli giriş donanımı.",
                answers: ["fare", "mouse"],
                nextStationName: "Fare / Mouse"
            },
            {
                id: 7,
                title: "Fare / Mouse",
                code: "MOUSE",
                backupCode: "4007",
                letter: "T",
                riddle: "İnternet dünyasının kapısını açarım, telefon hattını veriye çeviririm. Işıklarım yanıp söner kutumun üstünde.",
                hint: "Ağ bağlantısı sağlayan, telefon sinyalini dijital veriye dönüştüren cihaz.",
                answers: ["modem", "router"],
                nextStationName: "Modem"
            },
            {
                id: 8,
                title: "Modem",
                code: "MODEM",
                backupCode: "4008",
                letter: "U",
                riddle: "Verileri kimse okumasın diye gizlerim, anahtarım olmadan çözülmem. Bilgi güvenliğinin kalkanıyım.",
                hint: "Mesajları veya dosyaları gizli kodlara dönüştürme işlemi, kriptografi.",
                answers: ["sifre", "sifreleme", "kripto", "sifreleme sistemi"],
                nextStationName: "Şifreleme"
            },
            {
                id: 9,
                title: "Şifreleme",
                code: "SIFRELEME",
                backupCode: "4009",
                letter: "R",
                riddle: "Dosyalarını, oyunlarını kalıcı olarak saklarım. Dönen disklerim veya çiplerim vardır (SSD). Elektrik gitse de veriler bende kalır.",
                hint: "Bilgisayarın kalıcı depolama birimi, harddisk.",
                answers: ["sabit disk", "harddisk", "ssd", "hard disk"],
                nextStationName: "Sabit Disk"
            },
            {
                id: 10,
                title: "Sabit Disk",
                code: "SABIT_DISK",
                backupCode: "4010",
                letter: null,
                riddle: "Bir problemi çözmek için adım adım izlenen yolum ben. Akış şemasıyla gösterilirim, başlangıcı ve bitişi bellidir.",
                hint: "Yazılım geliştirmede mantıksal sıralı adımlar dizisi.",
                answers: ["algoritma"],
                nextStationName: "Algoritma"
            },
            {
                id: 11,
                title: "Algoritma",
                code: "ALGORITMA",
                backupCode: "4011",
                letter: "İ",
                riddle: "Yazılımla canlanırım, sensörlerle algılarım. Fabrikalarda çalışır, verilen görevleri yaparım physically. Ben neyim?",
                hint: "Sensörler ve motorlarla donatılmış programlanabilir makine.",
                answers: ["robot", "robotik"],
                nextStationName: "Robotik"
            },
            {
                id: 12,
                title: "Robotik",
                code: "ROBOTIK",
                backupCode: "4012",
                letter: "N",
                riddle: "Tüm parçaları üzerimde taşırım, aralarındaki iletişimi sağlarım. Bilgisayarın ana omurgasıyım. Ben kimim?",
                hint: "Bilgisayar kasası içindeki en büyük elektronik devre kartı.",
                answers: ["anakart"],
                nextStationName: "Anakart"
            },
            {
                id: 13,
                title: "Anakart",
                code: "ANAKART",
                backupCode: "4013",
                letter: "G",
                riddle: "Elle tutulamayan, gözle görülemeyen bilgisayar komutlarıyım. Kodlarla yazılır, donanımı yönetirim.",
                hint: "Bilgisayarda çalışan programların ve kodların genel adı.",
                answers: ["yazilim", "program", "kod"],
                nextStationName: "Yazılım"
            },
            {
                id: 14,
                title: "Yazılım",
                code: "YAZILIM",
                backupCode: "4014",
                letter: null,
                riddle: "Tüm dünyadaki bilgisayarları birbirine bağlayan dev ağım ben. Bilgiye ulaşmanın en hızlı yolu, 'www' ile başlarım.",
                hint: "Küresel bilgisayar ağ sistemi.",
                answers: ["internet", "web"],
                nextStationName: "İnternet"
            },
            {
                id: 15,
                title: "İnternet",
                code: "INTERNET",
                backupCode: "4015",
                letter: null,
                riddle: "Mektubun dijital haliyim, saniyeler içinde giderim alıcıya. Et işareti (@) bulunur adresimde. Ben neyim?",
                hint: "İnternet üzerinden gönderilen dijital mektup.",
                answers: ["e-posta", "eposta", "mail", "e post"],
                nextStationName: "E-posta"
            },
            {
                id: 16,
                title: "E-posta",
                code: "EPOSTA",
                backupCode: "4099",
                letter: null,
                riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK BİLİŞİMİN BABASINI BULUNUZ",
                hint: "Topladığın 10 harfi (A-L-A-N-T-U-R-İ-N-G) karıştırarak yapay zekanın mucidi kabul edilen matematikçinin adını yazmalısın.",
                answers: ["alan turing", "alanturing", "turing"],
                nextStationName: "BİTTİ"
            }
        ]
    },
    sosyal: {
        name: "SOSYAL BİLGİLER",
        badge: "🧭 EŞSİZ HARİTA",
        iconClass: "fas fa-compass",
        themeClass: "theme-sosyal",
        secretPhrase: "PİRİ REİS",
        welcomeTitle: "<span>EŞSİZ</span>HARİTA",
        welcomeSubtitle: "🕵️‍♂️ Tarih ve Coğrafya Dedektifliği 🧭",
        welcomeIntro: "Sınıfın gizemli köşelerinde ünlü bir denizcinin çizdiği dünya haritasının kayıp parçası gizli! İstasyonları bul, bilmeceleri çöz, harfleri toplayıp büyük denizciyi ortaya çıkar! 🧭✨",
        btnText: "HARİTAYI ÇÖZ! 🧭🚀",
        stations: [
            {
                id: 1,
                title: "Sosyal Bilgiler Başlangıç Noktası",
                code: "SOS_START",
                backupCode: "5001",
                letter: null,
                riddle: "İğnem her zaman kuzeyi gösterir, yönümü kaybetmem onun sayesinde. Denizcilerin ve kaşiflerin can yoldaşıyım. Ben neyim?",
                hint: "Üzerinde kuzey, güney, doğu, batı yönleri bulunan mıknatıslı yön bulma aracı.",
                answers: ["pusula"],
                nextStationName: "Pusula"
            },
            {
                id: 2,
                title: "Pusula",
                code: "PUSULA",
                backupCode: "5002",
                letter: "P",
                riddle: "Toprak altındaki eski uygarlıkları kazar, buluntuları gün yüzüne çıkarırım. Kazı bilimiyim, geçmişin tozunu yutarım.",
                hint: "Eski kültürleri kalıntılarından inceleyen kazı bilimi.",
                answers: ["arkeoloji", "kazi bilimi"],
                nextStationName: "Arkeoloji"
            },
            {
                id: 3,
                title: "Arkeoloji",
                code: "ARKEOLOJI",
                backupCode: "5003",
                letter: null,
                riddle: "Yeryüzünü kuş bakışı gösteririm, küçültürüm kağıt üzerine. Kuşlar gibi bakarım dünyaya, dağları nehirleri çizerim.",
                hint: "Yeryüzünün tamamının veya bir parçasının belli oranda küçültülerek düzleme çizilmiş taslağı.",
                answers: ["harita"],
                nextStationName: "Harita"
            },
            {
                id: 4,
                title: "Harita",
                code: "HARITA",
                backupCode: "5004",
                letter: "İ",
                riddle: "Bir yerde uzun yıllar boyunca gözlenen hava olaylarının ortalamasıyım. Akdeniz, Karadeniz gibi çeşitlerim var. Ben neyim?",
                hint: "Hava durumunun 30-40 yıllık ortalaması.",
                answers: ["iklim"],
                nextStationName: "İklim"
            },
            {
                id: 5,
                title: "İklim",
                code: "IKLIM",
                backupCode: "5005",
                letter: null,
                riddle: "Haritadaki küçültme oranıyım ben, pay ve paydadan oluşurum. Gerçek uzunluğu benimle böler, kağıda sığdırırsın.",
                hint: "Haritadaki uzunluğun gerçek uzunluğa oranı.",
                answers: ["olcek"],
                nextStationName: "Ölçek"
            },
            {
                id: 6,
                title: "Ölçek",
                code: "OLCEK",
                backupCode: "5006",
                letter: "R",
                riddle: "Bir sınır içinde yaşayan insan sayısıyım ben. Sayım yapılarak belirlenirim. Şehirlerde yoğun, köylerde azım.",
                hint: "Belirli bir zamanda, sınırları belli bir alanda yaşayan insan sayısı.",
                answers: ["nufus"],
                nextStationName: "Nüfus"
            },
            {
                id: 7,
                title: "Nüfus",
                code: "NUFUS",
                backupCode: "5007",
                letter: null,
                riddle: "Dünyayı tam ortasından ikiye bölen hayali çizgiyim ben. En uzun paralel daireyim, sıfır dereceyle başlarım.",
                hint: "Kuzey ve Güney kutup noktalarına eşit uzaklıkta bulunan hayali daire.",
                answers: ["ekvator"],
                nextStationName: "Ekvator"
            },
            {
                id: 8,
                title: "Ekvator",
                code: "EKVATOR",
                backupCode: "5008",
                letter: "İ",
                riddle: "Toprağı ekip biçme, besin üretme işiyim. Buğday, arpa, mısır benimle büyür, çiftçidir benim en yakın dostum.",
                hint: "Toprağı işleyerek ekmek ve bitkisel ürünler elde etme faaliyeti.",
                answers: ["tarim", "ciftcilik"],
                nextStationName: "Tarım"
            },
            {
                id: 9,
                title: "Tarım",
                code: "TARIM",
                backupCode: "5009",
                letter: null,
                riddle: "Geçmişte yaşayan insanları, savaşları ve barışları incelerim. Belgelerle konuşurum, yer ve zaman gösteririm.",
                hint: "İnsanlığın geçmişini yer ve zaman göstererek, neden-sonuç ilişkisiyle inceleyen bilim.",
                answers: ["tarih"],
                nextStationName: "Tarih"
            },
            {
                id: 10,
                title: "Tarih",
                code: "TARIH",
                backupCode: "5010",
                letter: "R",
                riddle: "Çin'den başlayıp Avrupa'ya uzanan, ipek ve baharat taşıyan eski ticaret yoluyum. Kervanlar yürürdü üzerimde.",
                hint: "Tarihi doğu-batı ticaret kervan yolu.",
                answers: ["ipek yolu", "ipekyolu"],
                nextStationName: "İpek Yolu"
            },
            {
                id: 11,
                title: "İpek Yolu",
                code: "IPEKYOLU",
                backupCode: "5011",
                letter: null,
                riddle: "Bir toplumun örf, adet, dil, yemek ve sanat gibi değerlerinin tümüyüm. Kuşaktan kuşağa aktarılırım.",
                hint: "Bir milletin tarih boyunca oluşturduğu maddi ve manevi değerler bütünü.",
                answers: ["kultur"],
                nextStationName: "Kültür"
            },
            {
                id: 12,
                title: "Kültür",
                code: "KULTUR",
                backupCode: "5012",
                letter: "E",
                riddle: "Tarihi eserlerin sergilendiği, geçmişin korunduğu binalarım ben. Girişte bilet alır, sessizce dolaşırsın.",
                hint: "Sanat ve tarih yapıtlarının sergilendiği yer.",
                answers: ["muze"],
                nextStationName: "Müze"
            },
            {
                id: 13,
                title: "Müze",
                code: "MUZE",
                backupCode: "5013",
                letter: "İ",
                riddle: "Halkın kendi kendini yönettiği, eşitlik ve özgürlük temelli yönetim şekliyim. Sandıklar kurulur, oy verilir benim için.",
                hint: "Milli egemenliğe dayanan halk yönetimi.",
                answers: ["demokrasi"],
                nextStationName: "Demokrasi"
            },
            {
                id: 14,
                title: "Demokrasi",
                code: "DEMOKRASI",
                backupCode: "5014",
                letter: null,
                riddle: "Devletin temel kanunuyum ben, vatandaşın haklarını ve devletin görevlerini belirlerim. En üstün yasayım.",
                hint: "Bir devletin yönetim biçimini ve vatandaş haklarını belirleyen ana kanun kitabı.",
                answers: ["anayasa"],
                nextStationName: "Anayasa"
            },
            {
                id: 15,
                title: "Anayasa",
                code: "ANAYASA",
                backupCode: "5015",
                letter: null,
                riddle: "Yeryüzünü, dağları, nehirleri ve insanların doğa ile ilişkisini inceleyen bilimim. Atlaslar benimle doludur.",
                hint: "Yeryüzünü fiziksel ve beşeri yönleriyle inceleyen bilim dalı.",
                answers: ["cografya"],
                nextStationName: "Coğrafya"
            },
            {
                id: 16,
                title: "Coğrafya",
                code: "COGRAFYA",
                backupCode: "5099",
                letter: "S",
                riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK BÜYÜK OSMANLI DENİZCİSİNİ BULUNUZ",
                hint: "Topladığın 8 harfi (P-İ-R-İ-R-E-İ-S) birleştirerek Kitab-ı Bahriye'yi yazan dünya haritası çizeri denizcinin adını yazmalısın.",
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
        welcomeTitle: "<span>GİZEMLİ</span>EDEBİYAT",
        welcomeSubtitle: "🕵️‍♂️ Kelimeler ve Deyimler Dedektifliği ✍️",
        welcomeIntro: "Kelimelerin gizemli dünyasında, asırlar öncesinden gelen bilge bir halk şairinin dizeleri gizli! İstasyonları bul, bilmeceleri çöz, harfleri toplayıp şairi açığa çıkar! ✍️✨",
        btnText: "KELİMELERİ ÇÖZ! ✍️🚀",
        stations: [
            {
                id: 1,
                title: "Edebiyat Başlangıç Noktası",
                code: "LIT_START",
                backupCode: "6001",
                letter: null,
                riddle: "Dizelerle yazılırım, kafiyelerle süslenirim. Duyguları coşturur, yüreğe dokunurum. Kıtalardan oluşurum.",
                hint: "Zengin sembollerle, ritimli sözlerle yazılan edebi tür.",
                answers: ["siir"],
                nextStationName: "Şiir"
            },
            {
                id: 2,
                title: "Şiir",
                code: "SIIR",
                backupCode: "6002",
                letter: "Y",
                riddle: "Yaşanmış ya da yaşanabilecek olayları anlatan kısa edebi türüm. Diğer adım öyküdür, karakterlerim sınırlıdır.",
                hint: "Gerçek veya tasarlanmış olayları anlatan kısa yazı türü, öykü.",
                answers: ["hikaye", "oyku"],
                nextStationName: "Hikaye"
            },
            {
                id: 3,
                title: "Hikaye",
                code: "HIKAYE",
                backupCode: "6003",
                letter: null,
                riddle: "Uzun soluklu hikayeler anlatırım, karakterlerim boldur, olaylar karmaşıktır. Kalın cilt cilt kitaplarda yaşarım.",
                hint: "İnsanların serüvenlerini, ilişkilerini ayrıntılı anlatan uzun edebi tür.",
                answers: ["roman"],
                nextStationName: "Roman"
            },
            {
                id: 4,
                title: "Roman",
                code: "ROMAN",
                backupCode: "6004",
                letter: "U",
                riddle: "Dize sonlarındaki ses benzerliğiyim ben, kulağa hoş gelir ahengim. Uyak da derler bana. Şiirin ritmiyim.",
                hint: "Şiirde dize sonlarındaki ses uyumu, uyak.",
                answers: ["kafiye", "uyak"],
                nextStationName: "Kafiye"
            },
            {
                id: 5,
                title: "Kafiye",
                code: "KAFIYE",
                backupCode: "6005",
                letter: null,
                riddle: "En az iki kelimeden oluşurum, mecaz anlam taşırım. Kalıplaşmış söz gruplarıyım. Örn: 'Göz boyamak', 'Göze girmek'.",
                hint: "Genellikle gerçek anlamından az çok sıyrılmış, kalıplaşmış söz öbeği.",
                answers: ["deyim"],
                nextStationName: "Deyim"
            },
            {
                id: 6,
                title: "Deyim",
                code: "DEYIM",
                backupCode: "6006",
                letter: "N",
                riddle: "Sahnede oynanırım, oyuncular canlandırır beni. Perde açılır, replikler söylenir, alkışlarla biterim. Ben neyim?",
                hint: "Sahnede oynanmak üzere yazılmış oyun türü.",
                answers: ["tiyatro", "oyun"],
                nextStationName: "Tiyatro"
            },
            {
                id: 7,
                title: "Tiyatro",
                code: "TIYATRO",
                backupCode: "6007",
                letter: null,
                riddle: "Geçmişten gelen öğütlerim, söyleyeni belli değildir. 'Damlaya damlaya göl olur' derim, tecrübe taşırım.",
                hint: "Atalarımızın uzun denemelere dayanan yargılarını bildiren kalıplaşmış özlü söz.",
                answers: ["atasozu"],
                nextStationName: "Atasözü"
            },
            {
                id: 8,
                title: "Atasözü",
                code: "ATASOZU",
                backupCode: "6008",
                letter: "U",
                riddle: "Binlerce kitap raflarımda dizilidir, sessizlik isterim okurlarımdan. Araştırma yapanların sığınağıyım.",
                hint: "Kitapların korunduğu, okunduğu and ödünç verildiği sessiz kurum.",
                answers: ["kutuphane", "kitaplik"],
                nextStationName: "Kütüphane"
            },
            {
                id: 9,
                title: "Kütüphane",
                code: "KUTUPHANE",
                backupCode: "6009",
                letter: null,
                riddle: "Cümlenin sonuna konurum, biten sözü gösteririm. Kısaltmalarda da yer bulurum. En küçük noktalama işaretiyim.",
                hint: "Tamamlanmış cümlelerin sonuna konulan küçük yuvarlak işaret.",
                answers: ["nokta"],
                nextStationName: "Nokta"
            },
            {
                id: 10,
                title: "Nokta",
                code: "NOKTA",
                backupCode: "6010",
                letter: "S",
                riddle: "Kitapları yazan, hikayeleri uyduran kişiyim ben. Kalemim ve hayal gücüm en büyük dostumdur. Müellif de derler bana.",
                hint: "Eser yazan sanatçı, müellif.",
                answers: ["yazar", "edebiyatci", "muellif"],
                nextStationName: "Yazar"
            },
            {
                id: 11,
                title: "Yazar",
                code: "YAZAR",
                backupCode: "6011",
                letter: "E",
                riddle: "Soru soran cümlelerin sonunda yer alırım, boynum büküktür merakımdan. Bilin bakalım kimim?",
                hint: "Soru bildiren söz veya cümlelerin sonuna konulan kıvrık işaret.",
                answers: ["soru isareti"],
                nextStationName: "Soru İşareti"
            },
            {
                id: 12,
                title: "Soru İşareti",
                code: "SORU_ISARETI",
                backupCode: "6012",
                letter: null,
                riddle: "Eş görevli kelimeleri ayırırım, cümle içinde nefes aldırırım okura. Kuyrukluyumdur biraz, cümlenin ortasındayım.",
                hint: "Cümle içinde sıralanan eş görevli sözcükler arasına konulan işaret.",
                answers: ["virgul"],
                nextStationName: "Virgül"
            },
            {
                id: 13,
                title: "Virgül",
                code: "VIRGUL",
                backupCode: "6013",
                letter: "M",
                riddle: "Yazılışları farklı olsa da anlamları aynı olan kelimeleriz. Örn: 'Al' ve 'Kırmızı', 'Siyah' ve 'Kara'. Biz kimiz?",
                hint: "Aynı anlamı taşıyan farklı kelimeler, anlamdaş.",
                answers: ["es anlamli", "anlamdas"],
                nextStationName: "Eş Anlamlı"
            },
            {
                id: 14,
                title: "Eş Anlamlı",
                code: "ES_ANLAMLI",
                backupCode: "6014",
                letter: "R",
                riddle: "Anlamca birbirinin karşıtı olan kelimeleriz. Örn: 'Gece' ve 'Gündüz', 'Siyah' ve 'Beyaz', 'Zengin' ve 'Fakir'.",
                hint: "Karşıt anlamı ifade eden sözcükler.",
                answers: ["zit anlamli", "karsit anlamli"],
                nextStationName: "Zıt Anlamlı"
            },
            {
                id: 15,
                title: "Zıt Anlamlı",
                code: "ZIT_ANLAMLI",
                backupCode: "6015",
                letter: "E",
                riddle: "Tekerlemeyle başlarım (Bir varmış bir yokmuş), devler ve periler yaşar içimde. Mutlu sonla biter, ders veririm.",
                hint: "Olağanüstü olayları ve kahramanları konu alan halk anlatısı.",
                answers: ["masal"],
                nextStationName: "Masal"
            },
            {
                id: 16,
                title: "Masal",
                code: "MASAL",
                backupCode: "6099",
                letter: null,
                riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK BÜYÜK TASAVVUF ŞAİRİNİ BULUNUZ",
                hint: "Topladığın 9 harfi (Y-U-N-U-S-E-M-R-E) birleştirerek 'Sevelim sevilelim' diyen meşhur Türk halk şairini yazmalısın.",
                answers: ["yunus emre", "yunusemre"],
                nextStationName: "BİTTİ"
            }
        ]
    }
};

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
        
        for (let i = 0; i < 45; i++) {
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
        const spyChars = ['0', '1', '?', '#', '*', 'sys', 'spy', 'key', 'code', 'data', '🕵️‍♂️', '🔍', '🔑', '🔒'];
        const chosenChar = spyChars[Math.floor(Math.random() * spyChars.length)];
        const isSpecial = chosenChar.length > 1;

        return {
            x: Math.random() * this.canvas.width,
            y: randomY ? Math.random() * this.canvas.height : -20,
            size: isSpecial ? (Math.random() * 5 + 10) : (Math.random() * 8 + 10),
            speedY: Math.random() * 0.7 + 0.35,
            speedX: (Math.random() - 0.5) * 0.1,
            alpha: isSpecial ? (Math.random() * 0.15 + 0.05) : (Math.random() * 0.35 + 0.1),
            color: Math.random() > 0.5 ? '0, 240, 255' : '189, 0, 255',
            wobble: Math.random() * Math.PI * 2,
            wobbleSpeed: Math.random() * 0.015 + 0.005,
            wobbleAmount: Math.random() * 2 + 0.5,
            char: chosenChar
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawGrid();
        
        this.particles.forEach((p, index) => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.wobble += p.wobbleSpeed;
            
            const xOffset = Math.sin(p.wobble) * p.wobbleAmount;
            
            if (p.y > this.canvas.height + 20 || p.x + xOffset < -30 || p.x + xOffset > this.canvas.width + 30) {
                this.particles[index] = this.createParticle(false);
            }
            
            this.ctx.save();
            
            this.ctx.font = `${p.size}px 'Share Tech Mono', monospace`;
            this.ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
            this.ctx.shadowColor = `rgba(${p.color}, 0.5)`;
            this.ctx.shadowBlur = 6;
            this.ctx.fillText(p.char, p.x + xOffset, p.y);
            
            this.ctx.restore();
        });
        
        requestAnimationFrame(() => this.animate());
    }

    drawGrid() {
        const gridSpacing = 40;
        this.ctx.strokeStyle = 'rgba(0, 240, 255, 0.015)';
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
            });
        }
        
        this.animate();
    }

    animate() {
        if (!this.active) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let alive = false;
        
        this.particles.forEach((p) => {
            p.speedY += p.gravity;
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotationSpeed;
            
            if (p.y < this.canvas.height) {
                alive = true;
            }
            
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate((p.rotation * Math.PI) / 180);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            this.ctx.restore();
        });
        
        if (alive) {
            requestAnimationFrame(() => this.animate());
        } else {
            this.active = false;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

const confetti = new ConfettiEngine();

// ==========================================================================
// 5. METİN NORMALİZE ETME MOTORU (Typo & Accent Tolerant Matcher)
// ==========================================================================
function normalizeTurkish(str) {
    if (!str) return "";
    
    let text = str.trim();
    text = text.replace(/I/g, 'ı').replace(/İ/g, 'i').toLowerCase();
    text = text.replace(/\s+/g, '');
    
    const map = {
        'ç': 'c',
        'ğ': 'g',
        'ı': 'i',
        'ö': 'o',
        'ş': 's',
        'ü': 'u'
    };
    
    return text.split('').map(c => map[c] || c).join('');
}

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
        
        const subState = this.state.subjects[sub];
        if (!subState.stationOrder) {
            const STATIONS = SUBJECTS_DATA[sub].stations;
            subState.stationOrder = STATIONS.map(s => s.id);
        }
        
        return subState;
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
            this.initializeStationOrder();
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
    
    initializeStationOrder() {
        const sub = this.state.activeSubject || 'kimya';
        const STATIONS = SUBJECTS_DATA[sub].stations;
        const subState = this.activeSubState;
        
        const physicalIds = [];
        for (let i = 2; i <= STATIONS.length; i++) {
            physicalIds.push(i);
        }
        
        for (let i = physicalIds.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = physicalIds[i];
            physicalIds[i] = physicalIds[j];
            physicalIds[j] = temp;
        }
        
        subState.stationOrder = [1, ...physicalIds];
    }

    getRiddleStation(stepIndex) {
        const STATIONS = this.activeStations;
        const subState = this.activeSubState;
        const order = subState.stationOrder;
        
        if (stepIndex === STATIONS.length) {
            return STATIONS.find(s => s.id === STATIONS.length);
        } else {
            const nextStationId = order[stepIndex];
            return STATIONS.find(s => s.id === nextStationId - 1);
        }
    }

    getNextStationName(stepIndex) {
        const STATIONS = this.activeStations;
        const subState = this.activeSubState;
        const order = subState.stationOrder;
        
        if (stepIndex === STATIONS.length) {
            return "BİTTİ";
        } else {
            const nextStationId = order[stepIndex];
            const nextStation = STATIONS.find(s => s.id === nextStationId);
            return nextStation ? nextStation.title : "";
        }
    }

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
        
        if (currentActiveStep === 1) {
            targetTitle.innerText = "Başlangıç İstasyonu";
            targetInstruction.innerText = "Oyunu başlatmak için aşağıdaki ilk bilmeceyi çözmelisiniz. (Bilmece kartı otomatik yüklendi).";
        } else {
            const expectedStationId = subState.stationOrder[currentActiveStep - 1];
            const expectedStation = STATIONS.find(s => s.id === expectedStationId);
            if (expectedStation) {
                targetTitle.innerText = expectedStation.title;
                targetInstruction.innerText = `Sınıf içerisinde '${expectedStation.title}' istasyonunu bulun, üzerindeki QR kodu okutun.`;
            }
        }
    }

    // QR Kod Okutulunca veya Kod Girilince Akış Kontrolü
    handleScannedStation(stationId) {
        const STATIONS = this.activeStations;
        const subState = this.activeSubState;
        const currentActiveStep = subState.currentStep;
        
        let expectedStationId = null;
        if (currentActiveStep > 1) {
            expectedStationId = subState.stationOrder[currentActiveStep - 1];
        }
        
        if (stationId === expectedStationId) {
            this.loadRiddleIntoView(currentActiveStep);
        } else {
            sound.playError();
            const expectedStation = STATIONS.find(s => s.id === expectedStationId);
            
            if (subState.solvedStations.includes(stationId)) {
                alert(`⚠️ Zaten Çözüldü!\n\nBu istasyonu (${STATIONS.find(s=>s.id===stationId).title}) daha önce başarıyla çözmüştün.\n\nŞu an araman gereken hedef istasyon: "${expectedStation ? expectedStation.title : ''}"`);
            } else {
                alert(`❌ Yanlış İstasyon!\n\nSırayla ilerlemelisin dedektif. Şu an "${expectedStation ? expectedStation.title : ''}" istasyonunu arıyor olmalısın. Doğru istasyonu bulup tekrar tarat!`);
            }
            this.showHudView('dashboard-view');
        }
    }

    // Bilmeceyi Ekrana Doldurma
    loadRiddleIntoView(stepIndex) {
        const STATIONS = this.activeStations;
        const subState = this.activeSubState;
        subState.activeRiddleId = stepIndex;
        this.saveState();
        
        if (stepIndex === STATIONS.length) {
            // FİNAL ADIMI - Anagram Solver
            document.getElementById('riddle-station-num').innerText = "FİNAL GÖREVİ";
            document.getElementById('riddle-title').innerText = "Gizemli Kişi / Kavram";
            
            const earnedLetters = [];
            STATIONS.forEach(s => {
                if (subState.solvedStations.includes(s.id) && s.letter) {
                    earnedLetters.push(s.letter);
                }
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
            const riddleStation = this.getRiddleStation(stepIndex);
            if (!riddleStation) return;
            
            document.getElementById('riddle-station-num').innerText = stepIndex === 1 ? "BAŞLANGIÇ ADIMI" : `İSTASYON #${stepIndex - 1}`;
            
            let cardTitle = "Başlangıç Noktası";
            if (stepIndex > 1) {
                const scannedStationId = subState.stationOrder[stepIndex - 1];
                const scannedStation = STATIONS.find(s => s.id === scannedStationId);
                if (scannedStation) cardTitle = scannedStation.title;
            }
            
            document.getElementById('riddle-title').innerText = cardTitle;
            document.getElementById('riddle-text').innerText = riddleStation.riddle;
            document.getElementById('riddle-hint').innerText = riddleStation.hint;
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
        
        const stepIndex = subState.activeRiddleId;
        const riddleStation = this.getRiddleStation(stepIndex);
        if (!riddleStation) return;
        
        const normalizedInput = normalizeTurkish(answer);
        const isCorrect = riddleStation.answers.some(ans => normalizeTurkish(ans) === normalizedInput);
        
        feedback.classList.remove('active');
        
        if (isCorrect) {
            sound.playSuccess();
            confetti.spawn();
            
            feedback.className = 'feedback-msg success active';
            
            if (stepIndex === STATIONS.length) {
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
                let earnedLetter = null;
                if (stepIndex > 1) {
                    const scannedStationId = subState.stationOrder[stepIndex - 1];
                    const scannedStation = STATIONS.find(s => s.id === scannedStationId);
                    if (scannedStation) earnedLetter = scannedStation.letter;
                }
                const earnedLetterText = earnedLetter ? `\nKazanılan Harf: [ ${earnedLetter} ]` : "";
                const nextStationName = this.getNextStationName(stepIndex);
                feedback.innerText = `DOĞRU CEVAP! \nBir sonraki hedef: "${nextStationName}" ${earnedLetterText}`;
                
                const solvedStationId = stepIndex === 1 ? 1 : subState.stationOrder[stepIndex - 1];
                if (!subState.solvedStations.includes(solvedStationId)) {
                    subState.solvedStations.push(solvedStationId);
                }
                
                subState.currentStep = stepIndex + 1;
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
            if (s.id === 1) return; // Başlangıç adımı için QR kod basılması gerekmez (Öğrenci oyuna cihazından doğrudan başlar)
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
