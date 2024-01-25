const ytdl = require('ytdl-core');

const videoUrl = 'https://www.youtube.com/watch?v=6xKWiCMKKJg';

// Sử dụng ytdl-core để lấy thông tin về video
ytdl.getInfo(videoUrl, (err, info) => {
  if (err) {
    console.error('Lỗi khi lấy thông tin:', err);
    return;
  }

  // Tìm định dạng audio MP3
  const mp3Format = ytdl.chooseFormat(info.formats, { filter: 'audioonly' });

  if (!mp3Format) {
    console.error('Không tìm thấy định dạng audio MP3.');
    return;
  }

  // Lấy đường dẫn đến định dạng MP3
  const mp3Url = mp3Format.url;
  console.log('Link stream MP3:', mp3Url);
});
