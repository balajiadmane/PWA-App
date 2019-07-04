

const cacheName ="v1";
const fileName = [
    "/index.html",
    "/css/style.css"
];


self.addEventListener("install",  function(e){
        console.log("Service worker install");

        e.waitUntil(
                    caches.open(cacheName).then(function(cache){
                        return cache.addAll(fileName)
                    })
        );  
});

//---- get offline files

self.addEventListener('fetch' ,  function(e){
    console.log(e.request);
    e.respondWith(
        caches.match(e.request).then(function(r){
           
            return r || fetch(e.request);
        })
    );
})