// ==========================================
// 1. DAFTAR VIDEO
// ==========================================

const daftarVideo = [
    "https://cdn2.aceimg.com/mGvJfZoZv.mov",
    "https://cdn.aceimg.com/rJVXa29A9.mp4",
    "https://cdn2.aceimg.com/LglIU9oSj.mov",
    "https://cdn2.aceimg.com/P0ok1ZiVE.mov",
    "https://cdn2.aceimg.com/Yany0Jihc.mp4",
    "https://cdn2.aceimg.com/8Np1kHTPf.mp4",
    "https://cdn.slicedrive.com/cLRJXusD1.mp4",
    "https://cdn2.aceimg.com/yOZO7vTvS.mp4",
    "https://cdn2.aceimg.com/U8S5yZAQL.mov",
    "https://cdn2.aceimg.com/RcgIV9v1F.mp4",
    "https://cdn.slicedrive.com/igApDbsm1.mp4",
    "https://cdn.slicedrive.com/AMU5fsHV1.mp4",
    "https://cdn2.videy.co/KQPf4Otj1.mp4",
    "https://cdn2.videy.co/TD8eGo2X1.mp4"
];


// ==========================================
// 2. PILIH VIDEO ACAK
// ==========================================

const videoAcak =
    daftarVideo[Math.floor(Math.random() * daftarVideo.length)];


// ==========================================
// 3. TAMPILKAN VIDEO
// ==========================================

const wadahVideo = document.getElementById("tempat-video");

if (wadahVideo) {

    wadahVideo.innerHTML = `
        <video id="video" controls playsinline>
            <source src="${videoAcak}" type="video/mp4">
            Browser kamu tidak mendukung video.
        </video>
    `;

}


// ==========================================
// 4. LINK DETIK 1 SETELAH PLAY
// ==========================================

const video = document.getElementById("video");

if (video) {

    let sudahMulai = false;

    video.addEventListener("play", () => {

        // Mencegah pengulangan
        // saat pause → play
        if (sudahMulai) return;

        sudahMulai = true;


        // --------------------------------------
        // DETIK 1 → SHOPEE
        // --------------------------------------

        setTimeout(() => {

            window.open(
                "https://s.shopee.co.id/7VHeXOiJoQ",
                "_blank"
            );

        }, 1000);

    });


// ==========================================
// 5. SETELAH VIDEO MENCAPAI DETIK 5
// ==========================================

    let sudah5Detik = false;
    let sudahKlik = false;


    video.addEventListener("timeupdate", () => {

        if (video.currentTime >= 5) {

            sudah5Detik = true;

        }

    });


// ==========================================
// 6. KLIK APA PUN SETELAH VIDEO 5 DETIK
// ==========================================

    window.addEventListener("pointerdown", () => {

        // Belum mencapai 5 detik
        if (!sudah5Detik) return;

        // Sudah pernah membuka Shopee
        if (sudahKlik) return;

        sudahKlik = true;

        // Klik / tap apa pun → Shopee
        window.open(
            "https://nthefeetofthea.org?tid=1489594",
            "_blank"
        );

    }, true);

}
