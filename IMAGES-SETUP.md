# Adding Images - Quick Reference

## ✅ What's Been Set Up

1. **Folder Structure** - All image directories created in `/public/images/`
2. **Next.js Image Components** - Code ready to use images (currently commented out)
3. **Placeholder System** - Visual indicators showing where each image goes
4. **Download Script** - Optional script to download sample images from Unsplash

## 🚀 Quick Start Options

### Option 1: Use Your Own Images (Recommended)

1. **Add images to the folders** (follow the naming in IMAGE-GUIDE.md)
2. **Uncomment the Image components** in:
   - `/app/page.tsx` (line ~11 for hero image)
   - `/app/projects/page.tsx` (line ~118 for project images)
3. **Restart dev server**
   ```bash
   npm run dev
   ```

### Option 2: Download Sample Images (For Testing)

Run the provided script to download free placeholder images:

```bash
./download-sample-images.sh
```

Then uncomment the Image components as described above.

### Option 3: Keep Placeholders (For Now)

The website works perfectly with the current gradient placeholders and emojis! Add real images later when ready.

## 📋 Required Image Files

### Critical (High Priority)
- `public/images/hero/hero-construction.jpg` - Homepage hero background

### Important (Medium Priority)
- `public/images/projects/villa-colombo.jpg`
- `public/images/projects/pool-mount-lavinia.jpg`
- `public/images/projects/hotel-bentota.jpg`

### Optional (Low Priority)
- All other project images
- Service icons
- About page images

## 🎨 Image Specifications

| Type | Size | Format | Max File Size |
|------|------|--------|---------------|
| Hero | 1920x1080px | JPG | 500KB |
| Projects | 800x600px | JPG | 300KB |
| Services | 400x400px | JPG/PNG | 200KB |
| Logo | 300x100px | PNG | 50KB |

## 🔧 After Adding Images

### Uncomment in `/app/page.tsx` (Hero Section):
```tsx
{/* Remove this line: {/* */}
<Image
  src="/images/hero/hero-construction.jpg"
  alt="NM Constructions"
  fill
  className="object-cover"
  priority
/>
{/* And this line: */}
```

### Uncomment in `/app/projects/page.tsx` (Project Cards):
```tsx
{/* Remove this line: {/* */}
<Image
  src={project.image}
  alt={project.title}
  fill
  className="object-cover"
/>
{/* And this line: */}
```

## 📍 Current Status

✅ Image folders created
✅ Image paths configured in code
✅ Next.js Image optimization ready
✅ Placeholder system working
⏳ Waiting for actual images to be added

## 💡 Pro Tips

1. **Start small** - Add hero image first, see immediate impact
2. **Optimize before adding** - Use TinyPNG or similar tools
3. **Use WebP when possible** - Smaller file sizes, better performance
4. **Keep original names** - Or update the code to match your filenames
5. **Test locally first** - Run `npm run dev` and check console for errors

## 🆘 Troubleshooting

**Image not showing?**
- Check the file exists in the correct folder
- Verify the filename matches exactly (case-sensitive)
- Make sure you uncommented the Image component
- Check browser console for errors

**Image looks distorted?**
- Use recommended dimensions
- Ensure aspect ratio is correct
- Try `object-cover` or `object-contain` in className

**Slow loading?**
- Compress images (target <500KB)
- Use JPG for photos, PNG only for logos/transparency needs

## 📚 More Info

- Full guide: `IMAGE-GUIDE.md`
- Image structure: `public/images/README.md`
- Next.js Image docs: https://nextjs.org/docs/api-reference/next/image
