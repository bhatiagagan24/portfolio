'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "070e2cf4e7502631bf8ff7e480d4f78c",
".git/config": "b6d0aa4cea8380c80e915aaf89690268",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a38ab5745ab485bd6c6441f25c0a703e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f09760fb609eec5de8366900c0eb5516",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "92a3be4b14de24441cc5efe38e2ffee1",
".git/logs/refs/heads/main": "92a3be4b14de24441cc5efe38e2ffee1",
".git/logs/refs/remotes/origin/main": "0c0ce2a319edc5777fdaf055725edbf6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/17/383088a7cf3def82cb35a69b885ba6d2c6dc03": "9a2e4671a5448b26bb43c43b04dfe651",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/da510fd8b1da0f2ad6997af513e6b4f3dc7593": "4ed532cc2dca41974590a44d6ba9b3fb",
".git/objects/24/6758f1d7987faa43b956f192492441228e6e8b": "1d70c41330a6f79e08f3efca2fcc7bf5",
".git/objects/27/d8044a7a6b4c04f5645c762c2d3190d7db5b04": "950812ea26ce56c78e3d60df273c332c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/10dc3629d67448d3aa0a8da2294a36e60235c9": "49adbb18f7cb4e96edd3a5f4d14a3d0c",
".git/objects/38/240708140d905eaae4167bfba6babc83a50dcd": "63d50fa58c7b751686e2d74450050885",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/563f9a04df115238ea8f2d17d9f47b3b3ed041": "a94b426d24c2b5ae14c270c3ee3d217b",
".git/objects/47/6baca68ad85d74a070d649b5683124fb3b6bd7": "cafa5ce5dc53338c3cda8132c104075d",
".git/objects/4a/e5ce6de8495c70d2f735343b762eaeedc09021": "d29bdf95f1220d230f04c8ae71335ccb",
".git/objects/5b/6603c6bf3b17463c5e93c8cbbe6b76ed41bd4f": "31b01d5203db02925c3f464a91b40307",
".git/objects/6b/2881ed7c3fd13595a7060c6d0ae22dda9d727b": "00b54a9b905179b9e1225994b2f2bef8",
".git/objects/6d/a9a4dc2f3b6e09e068f49444d0e495d7b36ede": "bed2faab0ac17e0a0a395b3c2073cbbd",
".git/objects/6d/caf98ba95cee58dde70926720eb18b0d96cd21": "3ef4739e2f2a108fe2c4d923eeca322e",
".git/objects/70/a322ef400affa04ccee6ddb54f3b09d31fdd79": "6d0f1e1a515d45b2e101f527683d5e2d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/a292a36fe3f9c9e6ee1590a9c0452178017386": "7f4104226c8cfe432c9dab8fdd71a579",
".git/objects/7e/40b1e180a3d71d019bd390d33e36354b7ec7bf": "b8ccf0e06b20957a383489918109bac7",
".git/objects/7f/8dc34a72b1be7e000f823c4be82fe9af0caf6a": "4a40a9f39da6191f9f8ae329d62a49fe",
".git/objects/82/3cbabd6d44c560b64f2157cac8eca473463f8f": "cc8a6cab768571590d4e90d563ad1f3a",
".git/objects/83/50876ccdaa18f46b676246d7bb36b37c7cdf75": "446751986a8b82b0326f1cf11ab085fe",
".git/objects/84/8a7ef196174c8d710428447b6825f0ef03ad5e": "4f416618df1a0a0bfa5be00c4f190abb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/5625afd0c20159116f0f1ec93dae68d2368478": "781132593fee568332b2eee9a1317d98",
".git/objects/93/6741a2945a2d56196e53059cc8a95fb4b9adb8": "26e80eab6f5fca8759b19139657fad1d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/7deddf09178b49c7e78e737fbe88264027e881": "50e97837e2636c0f4429953be2165366",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/7f8257ef8baf93b2b3eec6b5ba08625e06a9bd": "c301ebb7c5fd71eee836e8482e61df70",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/715e2e35d79e84bab46dd8a7fcff8cffc328d2": "3fcad060c99e7cf343dc0a17ed817221",
".git/objects/b6/f34865d340bf562a49ad06308c0308d691104d": "b9ffe2722b6998670645c8e9ba37d3e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c9/9282eeffe2129954567207c15700a47b823634": "8ab07180081a369506797768f2f6c831",
".git/objects/d0/244f8c0feaca2903a54329578f5357761149e4": "cd92cf2e2b25c06476324cc1f58190f8",
".git/objects/d6/717ea3b3241befca71846852d02d698650a0f1": "07b7d85da7165864565c07aec1da8ece",
".git/objects/dd/5368f647f2fafb856e9c20e60c02772513d6db": "dd48c09ffeaa26eb0088221503ca178c",
".git/objects/e3/8a2724694df391bd6a2e04616d4189a46497c8": "3798b391926a335cdfce9b702e392af6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f7/941491a1eb2171bd5fd6dec93605ec464d9a06": "a8cf6daf1ab6392e7394f353de48ca65",
".git/ORIG_HEAD": "58817eb1790cfb2126c47ebfcbf3e112",
".git/refs/heads/main": "e6b76cec5cd06addca7700cd633de912",
".git/refs/remotes/origin/main": "e6b76cec5cd06addca7700cd633de912",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/assets/cpp.png": "f278be7973516129af9e64d45a0c6f4d",
"assets/assets/dart.png": "3520016718a6b2a613d1480ec4d82cef",
"assets/assets/golang.png": "21fa5dfc7b4388af6eea1ebc49980db8",
"assets/assets/pyproglogo.png": "b9bbb1d722d3ef6ebf7d573703b5925e",
"assets/cpp.png": "f278be7973516129af9e64d45a0c6f4d",
"assets/dart.png": "3520016718a6b2a613d1480ec4d82cef",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/golang.png": "21fa5dfc7b4388af6eea1ebc49980db8",
"assets/NOTICES": "c445e56ba4de8312b42833518d33aa78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/pyproglogo.png": "b9bbb1d722d3ef6ebf7d573703b5925e",
"cors.json": "72a0a758a5a9fee3897ea1d62a003055",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "45209f7cfac98445a7631bb73f5db332",
"/": "45209f7cfac98445a7631bb73f5db332",
"main.dart.js": "d77cb11acefee229fb3fca43531a954a",
"manifest.json": "ffa6ddd0f98d0d5d5c8f0d704c6fe8da",
"README.md": "c16b1e4ba14561697cd7d2dc550016fd",
"version.json": "92a047e12e6cc776051d519221dfb5a1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
