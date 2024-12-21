const loadScripts = (scripts, async = true) => {
    scripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = async;
      script.onload = () => console.log(`${src} loaded successfully`);
      script.onerror = () => console.error(`Failed to load script: ${src}`);
      document.head.appendChild(script);
    });
  };
  
  const localScripts = [
    './carousel.js',
    './sharedots.js',
    './topbuttons.js',
    './shop.js',
    './donate.js',
  ];
  
  const externalScripts = [
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/web3/1.5.2/web3.min.js',
    'https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js',
  ];
  
  // Load local scripts (preserve execution order)
  loadScripts(localScripts, false);
  
  // Load external scripts (allow parallel loading)
  loadScripts(externalScripts, true);
  