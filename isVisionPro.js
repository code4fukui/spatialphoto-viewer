//alert(navigator.userAgent)
// Chrome
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36
// Safari
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15
// Quest 3
// Mozilla/5.0 (X11; Linux x86_64; Quest 3) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/* Chrome/120.* VR Safari/537.36
// Vision Pro Safari
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1.4 Safari/605.1.15
const supportsWebXR = "xr" in navigator;
export const isVisionPro = supportsWebXR && navigator.userAgent.indexOf("Macintosh") >= 0 && navigator.userAgent.indexOf("Chrome") == -1;
