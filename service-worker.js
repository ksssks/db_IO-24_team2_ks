/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "f51cb028d7108d798fec09a7a1a23481"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "06b04c3f38fe4e5dfda2d8399fc43ff7"
  },
  {
    "url": "assets/css/0.styles.cfefe5df.css",
    "revision": "130ca4ad47df0a7f199b39f3c5c845c3"
  },
  {
    "url": "assets/img/img_1.209a1f8e.png",
    "revision": "209a1f8e1d1ec7590f615ec64997467f"
  },
  {
    "url": "assets/img/img_10.be2d98f4.png",
    "revision": "be2d98f49b420fdb2efa4e0e88e10a48"
  },
  {
    "url": "assets/img/img_11.7d93ddf9.png",
    "revision": "7d93ddf99470c1a1463e965cf4f4cd2f"
  },
  {
    "url": "assets/img/img_12.6678eba9.png",
    "revision": "6678eba945354cab9b43dbba1cf3bf38"
  },
  {
    "url": "assets/img/img_13.7cce1236.png",
    "revision": "7cce123616a7ab19a588128e29c7971b"
  },
  {
    "url": "assets/img/img_14.fd49c37f.png",
    "revision": "fd49c37f0e47910b554456bcd0a82af1"
  },
  {
    "url": "assets/img/img_15.785461f6.png",
    "revision": "785461f6060420b84a802cc03cebd182"
  },
  {
    "url": "assets/img/img_16.3a9b05c9.png",
    "revision": "3a9b05c91b7356226a9563f42bef477e"
  },
  {
    "url": "assets/img/img_17.19a410e3.png",
    "revision": "19a410e394c7937b928f50e1b1b7438e"
  },
  {
    "url": "assets/img/img_18.dd6791ca.png",
    "revision": "dd6791ca22b0371116590f25f6e57285"
  },
  {
    "url": "assets/img/img_19.0130198f.png",
    "revision": "0130198f2044292da4ab7f68e1e3e036"
  },
  {
    "url": "assets/img/img_2.111dac7f.png",
    "revision": "111dac7f79ee47917ea16b95c579de49"
  },
  {
    "url": "assets/img/img_20.5934b865.png",
    "revision": "5934b865e6f68956791001264f0ef272"
  },
  {
    "url": "assets/img/img_21.d816d33d.png",
    "revision": "d816d33d4e55be272e295c8b54f593ae"
  },
  {
    "url": "assets/img/img_22.42a5c526.png",
    "revision": "42a5c526d6cba5d139dea3ba1dc061ea"
  },
  {
    "url": "assets/img/img_23.7bfdd86c.png",
    "revision": "7bfdd86ca303325b78338136c178217b"
  },
  {
    "url": "assets/img/img_24.dc34a53b.png",
    "revision": "dc34a53bc1c8629ad47aca6b9275b0b2"
  },
  {
    "url": "assets/img/img_25.b45c09c2.png",
    "revision": "b45c09c2e71bc8d2a414c24bb3a72b92"
  },
  {
    "url": "assets/img/img_3.83c41b9b.png",
    "revision": "83c41b9bf5ad6c21798de9e84d067cc2"
  },
  {
    "url": "assets/img/img_4.d9c7161e.png",
    "revision": "d9c7161e695b2d6ecf8c15c31cf19ddd"
  },
  {
    "url": "assets/img/img_5.5792b428.png",
    "revision": "5792b42831751ae5de31ad1871fad4a8"
  },
  {
    "url": "assets/img/img_6.7a12c300.png",
    "revision": "7a12c30078c35ad22b198250e854b695"
  },
  {
    "url": "assets/img/img_7.056905f5.png",
    "revision": "056905f5171f045a93aa60c2e2b4d61e"
  },
  {
    "url": "assets/img/img_8.6b0816de.png",
    "revision": "6b0816de13ee8b4d08a56038ac5d050f"
  },
  {
    "url": "assets/img/img_9.9654413a.png",
    "revision": "9654413a75452ea0878241a926c7a576"
  },
  {
    "url": "assets/img/img.db9ffff1.png",
    "revision": "db9ffff1087a64a8b0e802c7beaa69eb"
  },
  {
    "url": "assets/img/relation_scheme.94590443.png",
    "revision": "9459044361aadcdd25fe8aa59afec3ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f14543c8.js",
    "revision": "b7f44862f10747a7b553924ddcd34a23"
  },
  {
    "url": "assets/js/11.ac7beec4.js",
    "revision": "066447c382ccea222bfc8ce9da8141eb"
  },
  {
    "url": "assets/js/12.b1c41097.js",
    "revision": "cb1830970a4d6ea573e097eded18f4f0"
  },
  {
    "url": "assets/js/13.e17ece98.js",
    "revision": "f5e2e17ae5d4b24d396b2b43d0ade11d"
  },
  {
    "url": "assets/js/14.9bd058fc.js",
    "revision": "b2e513d352dc93bb325f1438affbe148"
  },
  {
    "url": "assets/js/15.0d7e05fc.js",
    "revision": "7b3c7a5498a002ce09ad706a0413c63c"
  },
  {
    "url": "assets/js/16.f0db55a1.js",
    "revision": "45ce8dd1ea534be27c1ee7de9793bf86"
  },
  {
    "url": "assets/js/17.2dbda529.js",
    "revision": "94b4defccccd1ffe106e4e470fb11389"
  },
  {
    "url": "assets/js/18.d1843132.js",
    "revision": "9d4cd952301accbd396be1bd33a23dfc"
  },
  {
    "url": "assets/js/19.be105caf.js",
    "revision": "f593b38f83f5f23c1de56c4fd0f48f77"
  },
  {
    "url": "assets/js/2.576efe11.js",
    "revision": "2232ff725cf769118456c1710678dd68"
  },
  {
    "url": "assets/js/20.9433ab76.js",
    "revision": "e7556850c1402a10f374e98586b36ee3"
  },
  {
    "url": "assets/js/21.d0587d98.js",
    "revision": "178cae7bf1ca0c37279f410993bb9dca"
  },
  {
    "url": "assets/js/22.98f154df.js",
    "revision": "c9e1bb4bbcae1496c59eb4d5bdbbcbc2"
  },
  {
    "url": "assets/js/24.74f1aa8d.js",
    "revision": "4465c797cefe5ca3d910774f7024b6e8"
  },
  {
    "url": "assets/js/3.f4170f3b.js",
    "revision": "119f433281a92487a0994d69d8c9337d"
  },
  {
    "url": "assets/js/4.1b115286.js",
    "revision": "7099139f1fe23254f03292686ae88369"
  },
  {
    "url": "assets/js/5.981ea1b5.js",
    "revision": "9dac58e0f0d8c1dd4a415c5fe586ff34"
  },
  {
    "url": "assets/js/6.7243c508.js",
    "revision": "e3b172fede32c5f904a4ff77fa88bc0f"
  },
  {
    "url": "assets/js/7.4f06ae95.js",
    "revision": "71625797c7e737413fc0cf934408695f"
  },
  {
    "url": "assets/js/8.12011dd7.js",
    "revision": "081f3808d1ec72953c49b2c0c67f3011"
  },
  {
    "url": "assets/js/9.1851f6ae.js",
    "revision": "98bdbf025a2878749597a63d8fccaa32"
  },
  {
    "url": "assets/js/app.2aff7cc6.js",
    "revision": "ad2d4fc7849ad37c0364755f678c70aa"
  },
  {
    "url": "conclusion/index.html",
    "revision": "1a0455d9ca18eb12c5c76be0719fbe1c"
  },
  {
    "url": "design/index.html",
    "revision": "a9065360c57bb42d7525f0c8462dacf1"
  },
  {
    "url": "index.html",
    "revision": "aa2542a8e8eef5a32785588d65a3aba4"
  },
  {
    "url": "intro/index.html",
    "revision": "94ec52ca145ea528820f161a408a1680"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8b203c603ea04b1efb1771f599632742"
  },
  {
    "url": "software/index.html",
    "revision": "cc5990e1af7b0d600be3d402472344f3"
  },
  {
    "url": "test/index.html",
    "revision": "c4100f2a688d86fcdd459702758c90b9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
