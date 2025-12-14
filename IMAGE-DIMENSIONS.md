# Image Dimensions Quick Reference

## 📐 Exact Sizes Needed

### Hero Images
| File | Dimensions | Location |
|------|-----------|----------|
| hero-construction.jpg | 1920 × 1080 px | `/public/images/hero/` |

### Service Images  
| File | Dimensions | Location |
|------|-----------|----------|
| construction.jpg | 400 × 400 px | `/public/images/services/` |
| landscaping.jpg | 400 × 400 px | `/public/images/services/` |
| swimming-pool.jpg | 400 × 400 px | `/public/images/services/` |

### Project Portfolio Images
| File | Dimensions | Location |
|------|-----------|----------|
| hotel-bentota.jpg | 800 × 600 px | `/public/images/projects/` |
| hotel-kandy.jpg | 800 × 600 px | `/public/images/projects/` |
| villa-colombo.jpg | 800 × 600 px | `/public/images/projects/` |
| home-galle.jpg | 800 × 600 px | `/public/images/projects/` |
| residence-negombo.jpg | 800 × 600 px | `/public/images/projects/` |
| office-colombo.jpg | 800 × 600 px | `/public/images/projects/` |
| plaza-kandy.jpg | 800 × 600 px | `/public/images/projects/` |
| pool-mount-lavinia.jpg | 800 × 600 px | `/public/images/projects/` |
| koi-pond-colombo.jpg | 800 × 600 px | `/public/images/projects/` |
| resort-pool-hikkaduwa.jpg | 800 × 600 px | `/public/images/projects/` |

## 🎯 Aspect Ratios

- **Hero:** 16:9 (widescreen)
- **Services:** 1:1 (square)
- **Projects:** 4:3 (standard)

## 📦 File Size Targets

- **Hero images:** < 500 KB
- **Project images:** < 300 KB each
- **Service icons:** < 200 KB each

## 🛠️ Batch Resize Commands

### Using ImageMagick:
```bash
# Resize hero image
convert input.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 hero-construction.jpg

# Resize project images
convert input.jpg -resize 800x600^ -gravity center -extent 800x600 output.jpg

# Resize service images
convert input.jpg -resize 400x400^ -gravity center -extent 400x400 output.jpg
```

### Using macOS Preview:
1. Open image in Preview
2. Tools → Adjust Size
3. Enter dimensions (check "Scale proportionally")
4. File → Export → Adjust quality to reduce file size

### Using Online Tools:
- **Squoosh:** https://squoosh.app/
- **TinyPNG:** https://tinypng.com/
- **BIRME:** https://www.birme.net/ (batch resize)

## ✅ Checklist

- [ ] Hero image (1920×1080) added
- [ ] 10 project images (800×600) added
- [ ] 3 service images (400×400) added
- [ ] All images compressed to target file sizes
- [ ] Image components uncommented in code
- [ ] Tested in browser (npm run dev)

## 📱 Mobile Optimization

Next.js automatically generates responsive versions, but ensure:
- Original images are high quality
- Images are properly cropped (important content centered)
- File sizes are optimized

## 🎨 Image Content Guidelines

### Hero Image Should Show:
- Modern construction site OR
- Completed residential project OR
- Beautiful landscaped property OR
- Professional construction team at work

### Project Images Should Show:
- Clear view of the completed project
- Good lighting and professional quality
- Actual work done by NM Constructions
- Before/after comparison (optional)

### Avoid:
- Low resolution or blurry photos
- Watermarked stock photos
- Cartoons or illustrations
- Dark or poorly lit images
