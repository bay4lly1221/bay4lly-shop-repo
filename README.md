# Bay4lly Shop Plugin Repository

Bu repository, **Bay4lly Shop** eklenti mağazası için eklentileri barındırır.

## 📋 İçindekiler

- [Hakkında](#hakkında)
- [Repository Yapısı](#repository-yapısı)
- [Eklenti Ekleme](#eklenti-ekleme)
- [plugins.json Formatı](#pluginsjson-formatı)

## 🎯 Hakkında

Bay4lly Shop, Blockbench için üçüncü taraf eklentilerin merkezi bir mağazasıdır. Bu repository, tüm eklentilerin meta verilerini ve dosyalarını içerir.

## 📂 Repository Yapısı

```text
bay4lly-shop-repo/
├── README.md                    # Bu dosya
├── plugins.json                 # Tüm eklentilerin listesi
└── plugins/                     # Eklenti dosyaları
    ├── example_plugin/
    │   ├── plugin.js            # Eklentinin asıl kodu
    │   ├── icon.png             # Mağaza ikonu (256x256)
    │   ├── banner.png           # Detay sayfası görseli (800x400)
    │   ├── README.md            # Eklenti açıklaması
    │   ├── changelog.json       # Sürüm geçmişi
    │   └── screenshots/         # Eklenti ekran görüntüleri
    │       ├── 1.png
    │       ├── 2.png
    │       └── 3.png
    └── another_plugin/
        └── ...
```

## 🚀 Eklenti Ekleme

### 1. Eklenti Klasörü Oluştur

`plugins/` klasörü altında eklentinin ID'si ile aynı isimde bir klasör aç:

```bash
mkdir plugins/my_awesome_plugin
```

### 2. Gerekli Dosyaları Ekle

Eklenti klasörüne şu dosyaları koy:

- **plugin.js** (Zorunlu): Blockbench eklentisinin asıl kodu
- **icon.png** (Zorunlu): 256x256 PNG formatında ikon
- **banner.png** (Önerilir): 800x400 PNG formatında banner
- **README.md** (Önerilir): Eklentinin açıklaması (Markdown)
- **changelog.json** (Opsiyonel): Sürüm geçmişi

### 3. plugins.json'a Ekle

`plugins.json` dosyasını aç ve eklentini listeye ekle:

```json
{
  "id": "my_awesome_plugin",
  "title": "My Awesome Plugin",
  "author": "Your Name",
  "version": "1.0.0",
  "description": "A brief description of what your plugin does.",
  "category": "Tools",
  "folder": "my_awesome_plugin",
  "featured": false,
  "verified": false,
  "beta": false,
  "tags": ["Tag1", "Tag2"],
  "min_version": "4.0.0"
}
```

### 4. GitHub'a Push Et

```bash
git add .
git commit -m "Add my_awesome_plugin"
git push origin main
```

## 📝 plugins.json Formatı

Her eklenti için aşağıdaki alanları doldur:

| Alan | Tip | Açıklama |
| :--- | :--- | :--- |
| `id` | string | Eklentinin benzersiz kimliği (klasör adı ile aynı olmalı) |
| `title` | string | Eklentinin adı |
| `author` | string | Geliştirici adı |
| `version` | string | Mevcut sürüm (Semantic Versioning: 1.0.0) |
| `description` | string | Kısa açıklama (mağazada görünür) |
| `category` | string | Kategori (Models, Textures, Tools, Animations, Shaders, Other) |
| `folder` | string | `plugins/` altındaki klasör adı |
| `featured` | boolean | `true` ise "Öne Çıkanlar" listesinde görünür |
| `verified` | boolean | `true` ise yeşil tik işareti gösterilir |
| `beta` | boolean | `true` ise Beta rozeti gösterilir |
| `tags` | array | Eklentiyi tanımlayan etiketler |
| `min_version` | string | Minimum Blockbench sürümü |

## 📦 Örnek Eklenti Yapısı

```text
plugins/model_exporter/
├── plugin.js
├── icon.png
├── banner.png
├── README.md
├── changelog.json
└── screenshots/
    ├── 1.png
    ├── 2.png
    └── 3.png
```

### plugin.js Örneği

```javascript
Plugin.register('model_exporter', {
  title: 'Model Exporter',
  author: 'Developer Name',
  description: 'Export your models in various formats.',
  icon: 'icon',
  version: '1.0.0',
  min_version: '4.0.0',
  
  onload() {
    // Eklenti kodu buraya
  },
  
  onunload() {
    // Temizleme kodu
  }
});
```

### README.md Örneği

```markdown
# Model Exporter

Advanced model export plugin for Blockbench.

## Features

- Export to OBJ format
- Export to GLB format
- Batch export

## Installation

Install through Bay4lly Shop.

## Usage

1. Open your model
2. Go to File → Export
3. Choose your format
```

### changelog.json Örneği

```json
{
  "1.0.0": {
    "date": "2026-01-15",
    "changes": [
      "Initial release",
      "Support for OBJ export",
      "Support for GLB export"
    ]
  },
  "1.1.0": {
    "date": "2026-02-01",
    "changes": [
      "Added batch export feature",
      "Fixed export dialog bug"
    ]
  }
}
```

## 🔗 Bağlantılar

- **Bay4lly Shop Portalı**: https://bay4lly-dev.example.com
- **Blockbench**: https://www.blockbench.net

## 📄 Lisans

Bu repository'deki eklentiler kendi lisanslarıyla yönetilir.

---

*Bay4lly Shop ile Blockbench topluluğuna katkı sağla!*
