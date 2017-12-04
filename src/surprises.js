import React from 'react';

const surpriseLinks = {
  1: 'https://media.mnn.com/assets/images/2012/12/Tommy.jpg',
  2: 'https://londoncats.files.wordpress.com/2011/12/xmas-cat.jpg',
  3: 'http://www.vitamin-ha.com/wp-content/uploads/2013/11/Funny-Christmas-Lights-04.jpg',
  4: 'https://4.bp.blogspot.com/-Jk-OqnIDHWA/ULhzZhyKWnI/AAAAAAAAGOA/1tainK8R1EM/s640/1024x1024+christmas+ipad+wallpaper+0007.jpg',
  5: 'https://4.bp.blogspot.com/-DM7Lq2H_DKk/ULhzYGjTOjI/AAAAAAAAGN4/sFTu_y5nDu8/s1600/1024x1024+christmas+ipad+wallpaper+0006.jpg',
  6: 'https://2.bp.blogspot.com/-t50bx9wDRas/ULhzR0XUZTI/AAAAAAAAGNY/-mHwYwnqVD0/s640/1024x1024+christmas+ipad+wallpaper+0002.jpg',
  7: 'https://i.pinimg.com/736x/84/fd/56/84fd56602bb1956138673a2c1885e1fe.jpg',
  8: 'http://images.fineartamerica.com/images-medium-large/orange-persian-cat-sitting-on-pink-pillow-with-christmas-decoration-gk-hartvikki-hart.jpg',
  9: 'http://www.pipii.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/h/christmas-cat-garland.jpg',
  10: 'https://3.bp.blogspot.com/-AP9eHS8kgxE/UrS5_9rnFxI/AAAAAAAAAqk/MXL7j2LXllc/s1600/christmas+blog+9.jpg',
  11: 'http://www.lifewithcats.tv/wp-content/uploads/2015/12/kittn-in-tree.jpg',
  12: 'http://cute-n-tiny.com/wp-content/uploads/2009/11/santa-cat2-400x476.jpg',
  13: 'https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1892/1892788-bigthumbnail.jpg',
  14: 'http://erinhunter.katecary.co.uk/wp-content/uploads/2013/11/Featherpaw.jpg',
  15: 'https://i.pinimg.com/736x/70/74/c7/7074c71cfed3f3825576c41513d31d70.jpg',
  16: 'https://3.bp.blogspot.com/-6LccUhAStVU/WF1Yb02TIvI/AAAAAAAA0Bo/bHieUH-uOjEthEzeTvDUn6lrjPVhpqPiACLcB/s320/christmascatglitteringlights.gif',
  17: 'http://www.ymbnews.com/wp-content/uploads/2015/12/christmas-cats-9.jpg',
  18: 'http://www.outfittrends.com/wp-content/uploads/2015/11/63.jpg',
  19: 'https://mymodernmet.com/wp/wp-content/uploads/2016/12/christmas-cats-of-instagram-1.jpg',
  20: 'http://www.funnycatsite.com/pictures/Christmas_Cat613.jpg',
  21: 'http://madein.co/magazine/wp-content/uploads/2015/12/XmasLilBub.jpg',
  22: 'https://mymodernmet.com/wp/wp-content/uploads/2016/12/christmas-cats-of-instagram-7.jpg',
  23: 'https://i.pinimg.com/736x/6b/b7/2e/6bb72ea97122b4072fe2463735c4bd1d--christmas-animals-christmas-cats.jpg',
  24: 'https://mymodernmet.com/wp/wp-content/uploads/2016/12/christmas-cats-of-instagram-small.jpeg',
  25: 'http://www.catster.com/wp-content/uploads/2015/06/christmas-safety-cats-06.jpg'
};

const surpriseForDay = (i) => (
  <img src={ surpriseLinks[i] } />
);

export default surpriseForDay;
