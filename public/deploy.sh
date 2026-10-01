#!/bin/bash
set -e
echo "=================================================="
echo "🚀 Deploy CatatUang ke kelolakeuangan.web.id"
echo "=================================================="

WORKDIR="$HOME/catatuang-deploy"
rm -rf "$WORKDIR"
mkdir -p "$WORKDIR"
cd "$WORKDIR"

echo "📦 Mengunduh paket aplikasi..."
curl -sL https://ais-pre-j3vyzln25wulv7ekkb72rg-734293047314.asia-southeast1.run.app/dist.tar.gz -o dist.tar.gz

mkdir -p public
tar -xzf dist.tar.gz -C public

cat << 'EOF' > firebase.json
{
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
EOF

echo "🔑 Memeriksa otentikasi Firebase..."
if ! firebase projects:list >/dev/null 2>&1; then
  echo ""
  echo "👉 Silakan salin link yang muncul di bawah, buka di browser, lalu tempel kode verifikasinya ke sini:"
  firebase login --no-localhost
fi

echo ""
echo "🚀 Mengunggah ke Firebase Hosting (Project: catatankeuangan-c7a98)..."
firebase deploy --project catatankeuangan-c7a98 --only hosting

echo ""
echo "=================================================="
echo "🎉 BERHASIL! Aplikasi sudah aktif di:"
echo "👉 https://kelolakeuangan.web.id"
echo "=================================================="
