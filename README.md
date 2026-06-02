# 🌌 Gizemli Laboratuvar: Galileo'nun Sırrı

**"Gizemli Laboratuvar: Galileo'nun Sırrı"**, mobil cihazlar (akıllı telefonlar ve tabletler) için dikey (9:16) ekran formatında tasarlanmış, linear (çizgisel) akışlı interaktif bir **Eğitsel Kaçış Oyunu (Scavenger Hunt / Escape Room)** web uygulamasıdır.

Öğrenciler rastgele QR kod taratarak ilerleyemezler! Oyun, bir ipucunun diğer istasyonu gösterdiği doğrusal ve heyecan verici bir laboratuvar keşif zinciridir. Oyunun başında şifreli kelime gizlidir; öğrenciler harfleri topladıkça çantaları dolacak ve en son **Destek Çubuğu** istasyonunda harfleri birleştirerek **"GALİLEO GALİLEİ"** ismini bulmaya çalışacaklardır.

---

## 🚀 Öne Çıkan Özellikler

*   🔒 **Tam Gizlilik**: Eski sürümün aksine, "GALİLEO GALİLEİ" ismi başlangıçta öğrencilere gösterilmez. Üst HUD panelinde sadece 15 boş yuva (`?`) yer alır ve her çözülen istasyon çantaya gizemli bir harf ekler.
*   🧭 **Doğrusal Macera Akışı (Linear Path)**: Öğrenciler sıradaki hedef dışındaki bir QR kodu taratırlarsa, sistem bunu tespit eder ve *"Yanlış İstasyon! Şu an 'X' istasyonunu arıyor olmalısın."* uyarısı verir. Bu, hile yapılmasını önler.
*   📷 **Hızlı QR Kamera Entegrasyonu**: Cihazın arka kamerasından düşük gecikmeli, otomatik odaklamalı tarama yapan `html5-qrcode` modülü.
*   ⚡ **Çevrimdışı / Bağımsız Çalışma**: İlerlemeyi cihazın kendi hafızasında tutan **LocalStorage** mimarisi.
*   🎹 **Sentezlenmiş Ses Motoru**: Fütüristik ses efektlerini (tıklama, hata, başarı, zafer melodileri) anlık üreten yerleşik **Web Audio API** teknolojisi.
*   📐 **Entegre Öğretmen Paneli & QR Üretici**: Öğretmenlerin oyunu sınıfta kolayca uygulaması için tasarlanmış panel. Panel, **QRious** kütüphanesi kullanarak **çevrimdışı (offline)** QR kartlar üretir ve doğrudan tarayıcı üzerinden yazdırılmaya (A4) hazırlar.
*   🛡️ **Akıllı Yazım Toleransı (Turkish Normalizer)**: Öğrencilerin klavye hatalarını (büyük/küçük harf, Türkçe/İngilizce karakter uyumsuzlukları, boşluklar) tolere eden akıllı metin eşleştirme sistemi. (Örn: "dereceli silindir", "Dereceli Silindir" doğru kabul edilir).

---

## 🧭 Macera İstasyonları Zinciri & Cevap Anahtarı

Oyun sırasıyla aşağıdaki 18 adımdan oluşur:

| Adım | Bulunduğun İstasyon | Çözülecek Bilmece Şifresi | Doğru Cevap | Kazanılan Harf | Gidilecek Hedef İstasyon | Yedek Kod |
| :---: | :--- | :--- | :--- | :---: | :--- | :---: |
| **1** | **Başlangıç Noktası** | "Cam bedenim ince uzun, üstüm de çizgiler..." | **Dereceli Silindir** | - (Yok) | Dereceli Silindir | `1001` |
| **2** | **Dereceli Silindir** | "Söz uçar yazı kalır. Elektrik telleriyle..." | **Telgraf** | **İ** | Telgraf | `1002` |
| **3** | **Telgraf** | "Işığım masadan doğar, perdeye düşer..." | **Tepegöz** | **G** | Tepegöz | `1003` |
| **4** | **Tepegöz** | "Sayılar dostum benim, işlemlerle konuşurum..." | **Hesap Makinesi** | **O** | Hesap Makinesi | `1004` |
| **5** | **Hesap Makinesi** | "Kefede susar sözüm, dengeyle benim işim..." | **Ağırlık Takımı** | **L** | Ağırlık Takımı | `1005` |
| **6** | **Ağırlık Takımı** | "Yay gerilir içimde, kuvvetle sırdaş..." | **Dinamometre** | **L** | Dinamometre | `1006` |
| **7** | **Dinamometre** | "Küçük ateşimle ısıtırım her şeyi..." | **İspirto Ocağı** | **İ** | İspirto Ocağı | `1007` |
| **8** | **İspirto Ocağı** | "Cam gözümle bakarım, görünmeyeni..." | **Mikroskop** | **L** | Mikroskop | `1008` |
| **9** | **Mikroskop** | "Işığı eğip büker, bazen odakta..." | **Mercek Takımı** | **A** | Mercek Takımı | `1009` |
| **10**| **Mercek Takımı** | "İki kap yan yana, içi dolu suyla..." | **Bileşik Kaplar** | **A** | Bileşik Kaplar | `1010` |
| **11**| **Bileşik Kaplar** | "Görüntüyü büyütürüm, bazen de ters..." | **Çukur Ayna** | **L** | Çukur Ayna | `1011` |
| **12**| **Çukur Ayna** | "Küçük tüpler sıra olur içimde..." | **Tüplük** | **E** | Tüplük | `1012` |
| **13**| **Tüplük** | "Kaynar suyun nefesi, göğe çıkar incecik..." | **Damıtma Düzeneği**| **G** | Damıtma Düzeneği | `1013` |
| **14**| **Damıtma Düzeneği**| "Akım bana uğrar, bazen hızlı bazen..." | **Reosta** | - (Yok) | Reosta | `1014` |
| **15**| **Reosta** | "Renklerim çeşit çeşit, sertliğim değişken..." | **Mineral Seti** | **İ** | Mineral Seti | `1015` |
| **16**| **Mineral Seti** | "Enerjiyi ben veririm, hayat bulur devreler..."| **Güç Kaynağı** | **L** | Güç Kaynağı | `1016` |
| **17**| **Güç Kaynağı** | "Laboratuvarda sessizim, ama elim iş tutar..."| **Destek Çubuğu** | **E** | Destek Çubuğu | `1017` |
| **18**| **Destek Çubuğu** | **"TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ..."** | **Galileo Galilei** | - (Final) | **KAÇIŞ BAŞARILI** | `1018` |

---

## 🛠️ Sınıfta Uygulama Kılavuzu

### 1. Sınıf Öncesi Hazırlık (Öğretmenler İçin)
1.  Uygulamayı açın ve sağ üst köşedeki **Öğretmen Paneli (Çark/Ayarlar)** simgesine dokunun.
2.  **"QR Kod Kartları"** sekmesine geçin.
3.  **"KARTLARI YAZDIR (PDF)"** butonuna tıklayarak bilgisayarınızdan 18 adet istasyon QR kartını yazdırın.
4.  Yazdırdığınız kartları makasla keserek sınıfınızın farklı köşelerine (duvarlar, dolaplar, sıralar altına vb.) istasyon adlarına göre yerleştirin.

### 2. Oyunu Başlatma
1.  Öğrenciler kendi cep telefonlarından oyun web adresine giriş yaparlar.
2.  Giriş ekranında **Ekip/Grup isimlerini** yazarak laboratuvara giriş yaparlar.
3.  **Başlangıç Bilmecesi** otomatik olarak ekrana gelir. Öğrenciler cevabı (*Dereceli Silindir*) yazıp doğruladığında ilk hedefleri belirlenir.
4.  **"QR TARAYICIYI AÇ"** butonuna basarak sınıftaki doğru istasyon kodunu arayıp taratırlar.
5.  Öğrenciler sırayla 17 istasyonu gezer ve harfleri toplayarak çantalarını doldururlar (Toplamda 15 gizemli harf birikir).
6.  **Destek Çubuğu** istasyonunu taratan öğrenciler, final ekranında topladıkları harfleri kullanarak anagramı çözer ve gizli bilim insanının adını (**GALİLEO GALİLEİ**) yazarak laboratuvardan kaçarlar!
