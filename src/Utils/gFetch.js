let productos = [
    {id: '1' ,categoria: '60y70s' ,nombre: 'Sui Generis' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1ftYL7hylZMKHFQbGgo0Tp1XI16Wpxsgi'},
    {id: '2' ,categoria: '60y70s' ,nombre: 'Los Gatos' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1z-eDdtJ1xLXV3X7I22wxVDvK7Ng5K0oF'},
    {id: '3' ,categoria: '60y70s' ,nombre: 'Vox Dei' ,precio: '700' ,foto: 'https://drive.google.com/uc?export=download&id=1AR1Jd8wpfhLu37aWfXWJ1KvGC4fnhnd5'},
    {id: '4' ,categoria: '60y70s' ,nombre: 'Almendra' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1foYe3iAXhLxds5gSw21UDp3-1y1V7NCg'},
    {id: '5' ,categoria: '60y70s' ,nombre: 'Los abuelos de la nada' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1aonQEs3aLnRehLEGYB2ayV4SOxHC-NzK'},
    {id: '6' ,categoria: '60y70s' ,nombre: 'Manal' ,precio: '700' ,foto: 'https://drive.google.com/uc?export=download&id=1UMF42daQrY-ikmQgUqkjMrOj3kTfurY8'},
    {id: '7' ,categoria: '60y70s' ,nombre: 'Pappos Blues' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1Tw0UMnv5iCDt5eZmyFojMKKrB58U-s2_'},
    {id: '8' ,categoria: '60y70s' ,nombre: 'Espiritu' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1ddVdaojdrquQPBzpyghx8syB6UfNWlth'},
    {id: '9' ,categoria: '60y70s' ,nombre: 'Pedro y Pablo' ,precio: '700' ,foto: 'https://drive.google.com/uc?export=download&id=19TiM_eF99GgpYlBIZSNlaqQ-dijnZ8r-'},
    {id: '10' ,categoria: '80s' ,nombre: 'Soda Stereo' ,precio: '900' ,foto: ''},
    {id: '11' ,categoria: '80s' ,nombre: 'Soda Stereo1' ,precio: '800' ,foto: ''},
    {id: '12' ,categoria: '80s' ,nombre: 'Soda Stereo2' ,precio: '700' ,foto: ''},
    {id: '13' ,categoria: '80s' ,nombre: 'Soda Stereo3' ,precio: '900' ,foto: ''},
    {id: '14' ,categoria: '80s' ,nombre: 'Soda Stereo4' ,precio: '800' ,foto: ''},
    {id: '15' ,categoria: '80s' ,nombre: 'Soda Stereo5' ,precio: '700' ,foto: ''},
    {id: '16' ,categoria: '80s' ,nombre: 'Soda Stereo6' ,precio: '900' ,foto: ''},
    {id: '17' ,categoria: '80s' ,nombre: 'Soda Stereo7' ,precio: '800' ,foto: ''}
  ];
  
  export const gFetch = () => {
    return new Promise ((res, rej) => {
      setTimeout (() => {
        res (productos)
      }, 2000)
    })
  }