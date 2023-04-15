# Panduan Kontribusi

## _Branch_ Yang Mana ?

Selain perubahan yang merusak, kirim semua perubahan ke _branch_ **main**.  Kami melakukan yang terbaik untuk menjaga _branch_ **main** dalam kondisi yang baik, dengan semua tes lulus. Kode yang mendarat di _branch_ **main** harus kompatibel dengan rilis stabil terbaru. Boleh berisi fitur tambahan, tetapi tidak boleh ada perubahan yang merusak. Perubahan yang merusak harus dikirim ke _branch_ **experimental**.

## _Pull Request_

Jika anda bermaksud hanya memperbaiki bug, tidak apa-apa untuk segera mengirimkan _pull request_, tetapi kami tetap menyarankan untuk mengajukan terlebih dahulu rincian _issue_ apa yang sedang Anda perbaiki. Ini berguna jika kami tidak menerima perbaikan itu tetapi ingin melacak masalahnya.

Jika Anda memutuskan untuk memperbaiki suatu masalah, pastikan untuk memeriksa komentar barangkali seseorang sedang mengerjakan perbaikan tersebut. Jika tidak ada yang sedang mengerjakannya saat ini, silakan tinggalkan komentar yang menyatakan bahwa Anda berniat untuk mengerjakannya sehingga tidak ada orang lain yang sengaja sengaja meniru usaha Anda.

Jika seseorang mengklaim suatu masalah tetapi tidak menindaklanjutinya selama lebih dari dua minggu, tidak apa-apa untuk mengambilnya tetapi Anda tetap harus memberikan komentar.

Sebelum mengirimkan pull request, harap pastikan hal-hal berikut telah dilakukan:

1. Fork [repositori](https://github.com/fmukhlis/treelatives) dan buat cabang Anda dari `main`.
2. Jalankan `composer install` pada root repositori.
3. Jalankan `npm install` pada root repositori.
4. Jalankan `npm run dev` pada root repositori.
5. Jika Anda telah memperbaiki bug atau menambahkan kode yang harus diuji, tambahkan pengujian !
6. Pastikan semua pengujian lulus `php artisan test`.

Pelajari lebih lanjut tentang panduan berkontribusi pada [Treelatives Contribution Guide](https://github.com/fmukhlis/treelatives/blob/main/CONTRIBUTION.md)
