# Quick Guide: Adding Images to NM Constructions Website

## 📁 Image Structure Created

I've set up the following folder structure in `/public/images/`:

```
public/images/
├── hero/              # Hero section backgrounds
├── services/          # Service icons/images  
├── projects/          # Project portfolio images
└── about/            # About page images
```

## 🖼️ Where to Add Your Images

### 1. **Hero Section** (Homepage)
- **File:** `/public/images/hero/hero-construction.jpg`
- **Recommended Size:** 1920x1080px
- **Content:** Modern construction site, completed house, or landscaped property
- **Once added:** Uncomment lines 11-18 in `/app/page.tsx`

### 2. **Service Icons** (Homepage)
Add these three images to `/public/images/services/`:
- `construction.jpg` (building/construction work)
- `landscaping.jpg` (garden/landscape)
- `swimming-pool.jpg` (pool construction)

### 3. **Project Portfolio** (Projects Page)
Add these images to `/public/images/projects/`:

**Hotels & Resorts:**
- `hotel-bentota.jpg`
- `hotel-kandy.jpg`

**Residential:**
- `villa-colombo.jpg`
- `home-galle.jpg`
- `residence-negombo.jpg`

**Commercial:**
- `office-colombo.jpg`
- `plaza-kandy.jpg`

**Pools & Water Features:**
- `pool-mount-lavinia.jpg`
- `koi-pond-colombo.jpg`
- `resort-pool-hikkaduwa.jpg`

**Once added:** Uncomment lines 118-124 in `/app/projects/page.tsx`

## ⚡ Quick Start (3 Steps)

### Step 1: Add Your First Image
```bash
# Copy your hero image to:
cp your-image.jpg public/images/hero/hero-construction.jpg
```

### Step 2: Uncomment the Code
Open `/app/page.tsx` and find this section (around line 11):
```tsx
{/* Uncomment when you add the image:
<Image
  src="/images/hero/hero-construction.jpg"
  alt="NM Constructions"
  fill
  className="object-cover"
  priority
/>
*/}
```

Remove the `{/*` and `*/}` to uncomment it.

### Step 3: Test
```bash
npm run dev
```
Visit http://localhost:3000 to see your image!

## 📝 Image Best Practices

### File Formats
- **Photos:** Use `.jpg` (smaller file size)
- **Logos:** Use `.png` (supports transparency)
- **Icons:** Use `.svg` when possible

### Optimization
- Compress images before adding (use tools like TinyPNG, Squoosh, or ImageOptim)
- Target file size: **<500KB per image**
- Next.js will automatically optimize images further

### Dimensions
- **Hero images:** 1920x1080px (16:9 ratio)
- **Project thumbnails:** 800x600px (4:3 ratio)
- **Service images:** 400x400px (1:1 ratio)

## 🔍 Finding Placeholder Hints

The website shows you exactly where images should go! Look for:
- 📸 camera emoji placeholders
- White tooltip badges showing file paths (e.g., "Add: /images/projects/hotel-bentota.jpg")

## 🎨 Using Unsplash for Temporary Images

If you don't have images yet, you can use Unsplash:

1. Go to https://unsplash.com/
2. Search for "construction site", "landscaping", "swimming pool", etc.
3. Download high-quality free images
4. Rename them to match the required filenames
5. Add them to the appropriate folders

### Recommended Search Terms:
- "modern house exterior"
- "construction site"
- "landscaping design"
- "swimming pool"
- "commercial building"
- "tropical garden"
- "hotel landscape"

## 🚀 Next.js Image Component Benefits

The `<Image>` component automatically:
- ✅ Optimizes images for different screen sizes
- ✅ Lazy loads images (better performance)
- ✅ Prevents layout shift
- ✅ Serves modern formats (WebP) when supported
- ✅ Generates responsive image sizes

## 📞 Need Help?

Check the console when running `npm run dev` - it will show any image-related errors with helpful messages.

## ✨ Quick Wins

Start with just these 3 images for immediate impact:
1. **Hero image** - `/images/hero/hero-construction.jpg`
2. **One project image** - `/images/projects/villa-colombo.jpg`  
3. **Pool image** - `/images/projects/pool-mount-lavinia.jpg`

The rest can be added progressively!
