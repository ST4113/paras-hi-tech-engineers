import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';

(async () => {
  await imagemin(['public/images/*.{jpg,png}'], {
    destination: 'public/images',
    plugins: [
      mozjpeg({ quality: 80 }),
      pngquant({ quality: [0.8, 0.9] })
    ]
  });

  console.log('✅ Images compressed successfully');
})();
