#!/bin/bash

# NM Constructions - Sample Images Download Script
# This script downloads sample construction/landscaping images from Unsplash

echo "🎨 Downloading sample images for NM Constructions website..."
echo "This will download free stock photos from Unsplash as placeholders"
echo ""

# Create directories if they don't exist
mkdir -p public/images/hero
mkdir -p public/images/services
mkdir -p public/images/projects
mkdir -p public/images/about

# Function to download image
download_image() {
    local url=$1
    local output=$2
    echo "⬇️  Downloading: $output"
    curl -L "$url" -o "$output"
}

echo "📥 Downloading hero images..."
# Hero images - construction/landscaping backgrounds
download_image "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=1080&fit=crop" "public/images/hero/hero-construction.jpg"

echo ""
echo "📥 Downloading service images..."
# Service images
download_image "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop" "public/images/services/construction.jpg"
download_image "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop" "public/images/services/landscaping.jpg"
download_image "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop" "public/images/services/swimming-pool.jpg"

echo ""
echo "📥 Downloading project images..."
# Hotel projects
download_image "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop" "public/images/projects/hotel-bentota.jpg"
download_image "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop" "public/images/projects/hotel-kandy.jpg"

# Residential projects
download_image "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop" "public/images/projects/villa-colombo.jpg"
download_image "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop" "public/images/projects/home-galle.jpg"
download_image "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop" "public/images/projects/residence-negombo.jpg"

# Commercial projects
download_image "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" "public/images/projects/office-colombo.jpg"
download_image "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop" "public/images/projects/plaza-kandy.jpg"

# Pool and water features
download_image "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop" "public/images/projects/pool-mount-lavinia.jpg"
download_image "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&h=600&fit=crop" "public/images/projects/koi-pond-colombo.jpg"
download_image "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop" "public/images/projects/resort-pool-hikkaduwa.jpg"

echo ""
echo "✅ All sample images downloaded!"
echo ""
echo "Next steps:"
echo "1. Review the downloaded images in public/images/"
echo "2. Replace with your own images as needed"
echo "3. Uncomment the Image components in the code"
echo "4. Run 'npm run dev' to see the results"
echo ""
echo "Note: These are placeholder images from Unsplash."
echo "Replace them with your actual project photos for production use."
