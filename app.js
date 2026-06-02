/* ==========================================================================
   GİZEMLİ LABORATUVAR: KAYIP BİLİM İNSANI - OYUN MANTIĞI & JAVASCRIPT
   ========================================================================== */

// ==========================================================================
// 1. İSTASYON ZİNCİRİ VERİ TABANI (18 Adımlı Linear Scavenger Hunt)
// ==========================================================================
const STATIONS = [
    {
        id: 1,
        title: "Başlangıç Noktası",
        code: "START",
        backupCode: "1001",
        letter: null, // İlk adımda harf yok, sadece Dereceli Silindir'e yönlendirir
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
        letter: null, // Bu adımda da harf yok
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
        letter: null, // Final istasyonu kendisi
        riddle: "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK KAYIP BİLİM ADAMINI BULUNUZ",
        hint: "Elde ettiğin 15 harfi karıştırarak yüzyıllar önce yaşamış olan modern bilimin kurucusu dahi bilim insanının adını bulmalısın.",
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
    // I/İ uyumsuzluklarını ve küçük harf karmaşasını çöz
    text = text.replace(/I/g, 'ı').replace(/İ/g, 'i').toLowerCase();
    
    // Boşlukları temizle
    text = text.replace(/\s+/g, '');
    
    // Türkçe karakterleri Latin karakterlerine haritala
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

// ==========================================================================
// 6. ANA MACERA KONTROL MOTORU (Linear Game Controller & Storage)
// ==========================================================================
class ScavengerEscapeGame {
    constructor() {
        this.state = {
            teamName: '',
            currentStep: 1, // Hangi istasyonda olduğumuz (1 - 18 arası)
            solvedStations: [], // Çözülen istasyonların ID'leri
            activeRiddleId: null, // Kamerayla taranıp açılmış, çözülmeyi bekleyen istasyon
            startTime: null,
            endTime: null,
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

    // LocalStorage İlerlemeyi Yükle
    loadState() {
        const saved = localStorage.getItem('escape_scavenger_state');
        if (saved) {
            try {
                this.state = JSON.parse(saved);
                sound.muted = this.state.soundMuted;
            } catch (e) {
                console.error("State load failed, resetting...", e);
            }
        }
        
        // Oyun tamamen bitmişse tebrik ekranı
        if (this.state.endTime && this.state.solvedStations.length === STATIONS.length) {
            this.showScreen('victory-screen');
            this.renderVictoryScreen();
        } else if (this.state.teamName) {
            this.showScreen('game-screen');
            this.setupGameUI();
        } else {
            this.showScreen('welcome-screen');
        }
    }

    saveState() {
        localStorage.setItem('escape_scavenger_state', JSON.stringify(this.state));
    }

    resetGame() {
        localStorage.removeItem('escape_scavenger_state');
        this.state = {
            teamName: '',
            currentStep: 1,
            solvedStations: [],
            activeRiddleId: null,
            startTime: null,
            endTime: null,
            soundMuted: sound.muted
        };
        this.saveState();
        
        document.getElementById('team-name-input').value = '';
        document.getElementById('riddle-answer-input').value = '';
        document.getElementById('manual-code-input').value = '';
        
        this.stopScanner();
        document.getElementById('teacher-modal').classList.remove('active');
        this.showScreen('welcome-screen');
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
        const stationParam = urlParams.get('station');
        if (stationParam) {
            window.history.replaceState({}, document.title, window.location.pathname);
            
            if (this.state.teamName) {
                const sNum = parseInt(stationParam);
                if (sNum >= 1 && sNum <= STATIONS.length) {
                    this.handleScannedStation(sNum);
                }
            }
        }
    }

    // ==========================================================================
    // ETKİNLİK DİNLEYİCİLERİ
    // ==========================================================================
    bindEvents() {
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
            this.openTeacherPanel();
        });
        
        document.getElementById('close-teacher-btn').addEventListener('click', () => {
            sound.playClick();
            document.getElementById('teacher-modal').classList.remove('active');
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
            this.state.startTime = Date.now();
            
            // İlk adımdaki bilmeceyi başlatmak için 1. adımı aktifleştir
            this.state.currentStep = 1;
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
            this.state.activeRiddleId = null;
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
            if (confirm("Tüm oyun ilerlemesi silinecektir. Emin misiniz?")) {
                this.resetGame();
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
        
        // Eğer aktif taranmış bir bilmece varsa ona yönlendir
        if (this.state.activeRiddleId) {
            this.loadRiddleIntoView(this.state.activeRiddleId);
        } else if (this.state.currentStep === 1 && !this.state.solvedStations.includes(1)) {
            // Oyunun en başı: QR kod taratmak zorunda değil, doğrudan ilk bilmece yüklenebilir!
            this.loadRiddleIntoView(1);
        }
    }

    // Toplanan Harfleri Arayüzde Çantada Göster (Inventory Rendering)
    renderInventoryHUD() {
        const container = document.getElementById('collected-letters-container');
        container.innerHTML = '';
        
        // 15 Harf Yuvası var
        let letterSlots = [];
        
        // Çözülen adımlardaki harfleri sırayla topla
        STATIONS.forEach(s => {
            if (this.state.solvedStations.includes(s.id) && s.letter) {
                letterSlots.push(s.letter);
            }
        });

        // Çanta alanını doldur
        // En fazla 15 yuva gösterelim
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

        // İlerleme sayacını güncelle (Dereceli silindirden Destek çubuğuna kadar şifre adımları)
        // Toplam 18 istasyon var, 18. adım Destek Çubuğundaki final anagramı çözmektir.
        const solvedCount = this.state.solvedStations.length;
        document.getElementById('unlocked-counter').innerText = `İstasyonlar: ${solvedCount} / 17`;
    }

    // İlerleme Çubuğunu Güncelle
    updateProgressBar() {
        const bar = document.getElementById('game-progress-bar');
        if (bar) {
            const totalSteps = STATIONS.length - 1; // 17 İstasyon yolculuğu
            const solvedCount = this.state.solvedStations.length;
            const percentage = Math.min((solvedCount / totalSteps) * 100, 100);
            bar.style.width = `${percentage}%`;
        }
    }

    // Dashboard'daki Aktif Hedef İstasyon Kartını Güncelle
    updateDashboardTarget() {
        const targetTitle = document.getElementById('target-station-display');
        const targetInstruction = document.getElementById('target-instruction-text');
        
        const currentActiveStep = this.state.currentStep;
        const currentStation = STATIONS.find(s => s.id === currentActiveStep);
        
        if (currentStation) {
            // Eğer ilk adımdaysak ve henüz çözmemişsek
            if (currentActiveStep === 1) {
                targetTitle.innerText = "Sıvı Ölçüm İstasyonu";
                targetInstruction.innerText = "Oyunu başlatmak için aşağıdaki ilk bilmeceyi çözmelisiniz. (Bilmece kartı otomatik yüklendi).";
            } else {
                targetTitle.innerText = currentStation.title;
                targetInstruction.innerText = `Sınıf içerisinde '${currentStation.title}' istasyonunu bulun, üzerindeki QR kodu kameranızla okutun.`;
            }
        }
    }

    // QR Kod Okutulunca veya Kod Girilince Akış Kontrolü
    handleScannedStation(stationId) {
        const currentActiveStep = this.state.currentStep;
        
        // Doğru istasyon mu taranıyor kontrolü (Çözme sırasını zorunlu kılar)
        if (stationId === currentActiveStep) {
            this.loadRiddleIntoView(stationId);
        } else {
            // Yanlış istasyon uyarısı
            sound.playError();
            const expectedStation = STATIONS.find(s => s.id === currentActiveStep);
            
            if (stationId < currentActiveStep) {
                alert(`İpucu: Bu istasyonu (${STATIONS.find(s=>s.id===stationId).title}) zaten çözmüştün! \n\nŞu an araman gereken hedef: "${expectedStation.title}"`);
            } else {
                alert(`Yanlış İstasyon! 🚫 \n\nSırayla ilerlemelisin. Şu an "${expectedStation.title}" istasyonunu arıyor olmalısın. Doğru istasyonu bulup tekrar tarat!`);
            }
            this.showHudView('dashboard-view');
        }
    }

    // Bilmeceyi Ekrana Doldurma
    loadRiddleIntoView(stationId) {
        this.state.activeRiddleId = stationId;
        this.saveState();
        
        const station = STATIONS.find(s => s.id === stationId);
        if (!station) return;

        // Ekrana bilgileri yaz
        if (stationId === 18) {
            // FİNAL ADIMI - Destek Çubuğu Anagram Solver
            document.getElementById('riddle-station-num').innerText = "FİNAL GÖREVİ";
            document.getElementById('riddle-title').innerText = "Kayıp Bilim İnsanı";
            document.getElementById('riddle-text').innerText = "TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ, ŞİMDİ TOPLADIĞINIZ HARFLERİ BİRLEŞTİREREK KAYIP BİLİM ADAMINI BULUNUZ";
            document.getElementById('riddle-hint').innerText = "Topladığın 15 harf: İ - G - O - L - L - İ - L - A - A - L - E - G - İ - L - E. Bu harfleri anlamlı iki kelime olacak şekilde karıştırarak dahi bilim insanının adını yaz.";
            
            // Ekstra: Bilmece kutusunun içine harfleri görsel gösteren çipler ekleyelim
            const terminal = document.getElementById('riddle-text');
            terminal.innerHTML = `
                <p style="margin-bottom:12px;"><strong>SYS_OVERRIDE ></strong> TÜM ŞİFRELERİ BAŞARI İLE ÇÖZDÜNÜZ!</p>
                <p style="color:#bd00ff; margin-bottom:8px;">Topladığınız 15 gizemli harf kutusu aşağıdadır. Harfleri birleştirerek <strong>Kayıp Bilim İnsanını</strong> bulunuz:</p>
                <div class="anagram-letters-holder">
                    <span class="anagram-letter-chip">İ</span>
                    <span class="anagram-letter-chip">G</span>
                    <span class="anagram-letter-chip">O</span>
                    <span class="anagram-letter-chip">L</span>
                    <span class="anagram-letter-chip">L</span>
                    <span class="anagram-letter-chip">İ</span>
                    <span class="anagram-letter-chip">L</span>
                    <span class="anagram-letter-chip">A</span>
                    <span class="anagram-letter-chip">A</span>
                    <span class="anagram-letter-chip">L</span>
                    <span class="anagram-letter-chip">E</span>
                    <span class="anagram-letter-chip">G</span>
                    <span class="anagram-letter-chip">İ</span>
                    <span class="anagram-letter-chip">L</span>
                    <span class="anagram-letter-chip">E</span>
                </div>
            `;
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
        const inputElement = document.getElementById('riddle-answer-input');
        const answer = inputElement.value.trim();
        const feedback = document.getElementById('riddle-feedback');
        
        if (!answer) {
            sound.playError();
            inputElement.focus();
            return;
        }
        
        const station = STATIONS.find(s => s.id === this.state.activeRiddleId);
        if (!station) return;
        
        const normalizedInput = normalizeTurkish(answer);
        
        // Cevap dizisindeki normalize edilmiş herhangi bir cevapla eşleşme var mı?
        const isCorrect = station.answers.some(ans => normalizeTurkish(ans) === normalizedInput);
        
        feedback.classList.remove('active');
        
        if (isCorrect) {
            sound.playSuccess();
            confetti.spawn(); // Konfeti şenliği!
            
            feedback.className = 'feedback-msg success active';
            
            if (this.state.activeRiddleId === 18) {
                // ZAFER! Final şifre çözüldü!
                feedback.innerText = "KAYIP BİLİM İNSANI BULUNDU! Laboratuvar aşımı başarılı.";
                this.state.solvedStations.push(18);
                this.state.endTime = Date.now();
                this.state.activeRiddleId = null;
                this.saveState();
                
                setTimeout(() => {
                    this.checkCompletion();
                }, 1800);
            } else {
                // Bir normal istasyon çözüldü
                const earnedLetterText = station.letter ? `\nKazanılan Harf: [ ${station.letter} ]` : "";
                feedback.innerText = `DOĞRU CEVAP! \nBir sonraki hedef: "${station.nextStationName}" ${earnedLetterText}`;
                
                // Çözülenlere ekle ve sırayı 1 artır
                this.state.solvedStations.push(this.state.activeRiddleId);
                this.state.currentStep = this.state.activeRiddleId + 1;
                this.state.activeRiddleId = null;
                this.saveState();
                
                // 2.2 saniye sonra arayüze geri dön (Mesajın okunabilmesi için)
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
        const inputElement = document.getElementById('manual-code-input');
        const enteredCode = inputElement.value.trim();
        const feedback = document.getElementById('manual-feedback');
        
        if (!enteredCode) {
            sound.playError();
            inputElement.focus();
            return;
        }
        
        // Eşleşen istasyonu bul
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
        if (this.state.solvedStations.includes(18)) {
            sound.playVictory();
            confetti.spawn();
            setTimeout(() => confetti.spawn(), 1500);
            
            this.showScreen('victory-screen');
            this.renderVictoryScreen();
        }
    }

    renderVictoryScreen() {
        document.getElementById('victory-team-name').innerText = this.state.teamName;
        document.getElementById('victory-solved-count').innerText = "18 / 18";
        
        const durationMs = this.state.endTime - this.state.startTime;
        const minutes = Math.floor(durationMs / 60000);
        const seconds = Math.floor((durationMs % 60000) / 1000);
        
        document.getElementById('victory-duration').innerText = `${minutes} dakika ${seconds} saniye`;
    }

    // ==========================================================================
    // KAMERA VE DOKÜMAN QR OKUYUCU ENTEGRASYONU
    // ==========================================================================
    startScanner() {
        const width = document.getElementById('reader').clientWidth;
        
        const config = {
            fps: 10,
            qrbox: {
                width: Math.min(width * 0.7, 220),
                height: Math.min(width * 0.7, 220)
            },
            aspectRatio: 1.0
        };

        this.html5Qrcode = new Html5Qrcode("reader");
        
        this.html5Qrcode.start(
            { facingMode: "environment" },
            config,
            (decodedText) => this.onQrScanSuccess(decodedText),
            () => {}
        ).catch(err => {
            console.error("Kamera başlatma hatası:", err);
            this.handleCameraError(err);
        });
    }

    onQrScanSuccess(decodedText) {
        sound.playSuccess();
        this.stopScanner();
        
        let stationId = null;
        
        // 1. URL Parametresi Çözümleme
        try {
            if (decodedText.startsWith('http://') || decodedText.startsWith('https://')) {
                const url = new URL(decodedText);
                const statParam = url.searchParams.get('station');
                if (statParam) {
                    stationId = parseInt(statParam);
                }
            }
        } catch (e) {}

        // 2. Düz Metin Çözümleme
        if (!stationId) {
            const cleanText = decodedText.trim().toUpperCase();
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
        if (stationId && stationId >= 1 && stationId <= STATIONS.length) {
            this.handleScannedStation(stationId);
        } else {
            sound.playError();
            alert("Okunan QR Kod bu oyuna ait geçerli bir istasyon içermiyor! (" + decodedText + ")");
            this.showHudView('dashboard-view');
        }
    }

    handleCameraError(error) {
        this.stopScanner();
        alert("Kameranıza erişilemedi! İzinleri engellemiş olabilirsiniz. \n\nSorun değil! Şifre çözmek için istasyon kağıtlarındaki 4 haneli yedek kodları elinizle girerek devam edebilirsiniz.");
        this.showHudView('manual-entry-view');
    }

    stopScanner() {
        if (this.html5Qrcode) {
            try {
                if (this.html5Qrcode.isScanning) {
                    this.html5Qrcode.stop().then(() => {
                        this.html5Qrcode.clear();
                    }).catch(err => console.error("Scanner stop error:", err));
                }
            } catch (e) {
                console.error("Scanner stop exception:", e);
            }
            this.html5Qrcode = null;
        }
    }

    // ==========================================================================
    // ÖĞRETMEN PANELİ BİLGİ DOLDURMA & QR ÜRETİCİ
    // ==========================================================================
    openTeacherPanel() {
        const modal = document.getElementById('teacher-modal');
        modal.classList.add('active');
        
        // 1. Genel Bakış Tablosunu Doldur
        const listContainer = document.querySelector('.stations-list');
        listContainer.innerHTML = '';
        
        STATIONS.forEach(s => {
            const isSolved = this.state.solvedStations.includes(s.id);
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

        // Kartlar oluşturuluyor (Adım 1'in kartı basılmayabilir ama öğretmen isterse diye tüm 18 adımı da basılabilir yapıyoruz)
        STATIONS.forEach(s => {
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
                <div class="qr-card-num">İSTASYON #${s.id}</div>
                <div class="qr-card-hint"><strong>Bulunduğu Yer:</strong> ${s.title}</div>
                <div style="font-size:0.7rem; color:#444; margin-top:2px;">${letterText}</div>
                <div style="font-size:0.7rem; color:#666;">Hedef İstasyon: ${s.nextStationName}</div>
                <div class="qr-card-backup">Yedek Kod: ${s.backupCode}</div>
            `;
            cardItem.appendChild(infoDiv);
            qrContainer.appendChild(cardItem);
            
            // QR Kod Oluştur (Kamera ile taratılacak URL)
            const targetUrl = `${baseUrl}?station=${s.id}`;
            
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
