import imagemin from 'imagemin';
import webp from 'imagemin-webp';

await imagemin(['public/images/*.{jpg,png}'], {
  destination: 'public/images',
  plugins: [
    webp({ quality: 80 })
  ]
});

console.log('Images converted to WebP!');
