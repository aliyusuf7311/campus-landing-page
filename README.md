# campus-landing-page
# 🎓 Platform Digital Kampus - Landing Page

Responsive landing page untuk platform digital kampus dengan fitur lengkap, termasuk meta tags untuk social media sharing dan WhatsApp integration.

## ✨ Fitur Utama

- ✅ **Responsif** - Desain mobile-first yang sempurna di semua ukuran layar
- ✅ **ES6+ Modules** - Kode terorganisir dengan sistem modular
- ✅ **Social Media Meta Tags** - Open Graph dan Twitter Card untuk sharing
- ✅ **WhatsApp Sharing** - Tombol share WhatsApp dengan preview gambar
- ✅ **Smooth Animations** - Animasi elegan dengan CSS dan JS
- ✅ **Accessible** - Memenuhi standar aksesibilitas WCAG
- ✅ **SEO Optimized** - Meta tags dan semantic HTML

## 🚀 Mulai Cepat

### Prasyarat
- Browser modern (Chrome, Firefox, Safari, Edge)
- Text editor atau IDE
- Live server (untuk development)

### Instalasi

```bash
# Clone repository
git clone https://github.com/aliyusuf7311/campus-landing-page.git

# Masuk ke direktori
cd campus-landing-page

# Jalankan dengan live server
# Opsi 1: Menggunakan Python
python -m http.server 8000

# Opsi 2: Menggunakan Node.js + http-server
npm install -g http-server
http-server

# Opsi 3: VSCode Live Server Extension
# Klik "Go Live" di bottom right
```

Buka browser ke `http://localhost:8000`

## 📁 Struktur Proyek

```
campus-landing-page/
├── index.html              # File HTML utama
├── styles/
│   └── main.css           # Styling responsif
├── js/
│   ├── app.js             # Entry point utama
│   └── modules/
│       ├── navbar.js      # Komponen navigasi
│       ├── header.js      # Meta tags & sharing
│       ├── hero.js        # Hero section
│       ├── features.js    # Features section
│       └── contact.js     # Contact form
├── assets/
│   └── images/            # Folder untuk gambar
└── README.md              # Dokumentasi ini
```

## 🎨 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## 🔗 Social Media Sharing

### Meta Tags yang Digunakan

#### Open Graph (untuk Facebook, WhatsApp, LinkedIn)
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">
<meta property="og:type" content="website">
```

#### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

### WhatsApp Sharing

Gunakan link format:
```
https://wa.me/?text=Pesan%20Anda%20Di%20Sini
```

Dengan template yang sudah disiapkan, Anda bisa menggunakan:
```javascript
window.shareOnWhatsApp()
```

## 📱 Panduan Penggunaan

### 1. Mengubah Konten

Edit file `index.html` untuk mengubah teks dan struktur halaman.

### 2. Mengubah Styling

Edit file `styles/main.css` untuk customize warna, font, dan layout.

### 3. Menambah Fitur

Buat file baru di folder `js/modules/` dan import di `js/app.js`.

### 4. Menambah Gambar

1. Taruh gambar di folder `assets/images/`
2. Perbarui path di HTML atau CSS

## 🎯 Tips Optimization

### Social Media Preview
Untuk test social sharing preview:
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **WhatsApp**: Langsung share di chat, preview akan muncul

### Performance
- Optimize gambar sebelum upload
- Gunakan WebP format untuk gambar modern
- Lazy load images dengan `loading="lazy"`

### SEO
- Update meta description untuk setiap halaman
- Gunakan semantic HTML (header, nav, section, footer)
- Tambahkan structured data jika perlu

## 🐛 Troubleshooting

### Sharing tidak menampilkan gambar
- Pastikan URL gambar accessible dan bukan localhost
- Pastikan gambar minimal 1200x630px
- Gunakan format jpg/png

### Mobile menu tidak bekerja
- Check console untuk error
- Pastikan JavaScript enabled
- Clear browser cache

### Styling tidak terload
- Verify file path di HTML
- Clear browser cache
- Check CORS jika di server berbeda

## 📚 Referensi

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [WhatsApp Business API](https://www.whatsapp.com/business/api)
- [MDN Web Docs - ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [CSS Grid & Flexbox](https://css-tricks.com/)

## 📄 Lisensi

MIT License - Bebas digunakan untuk proyek personal maupun komersial

## 👨‍💻 Author

Created by [aliyusuf7311](https://github.com/aliyusuf7311)

## 📞 Dukungan

Punya pertanyaan? Silakan buka issue di repository ini atau hubungi:
- Email: support@campusdigital.com
- WhatsApp: [Hubungi Kami](https://wa.me/628xxx)

---

**Happy Coding! 🚀**