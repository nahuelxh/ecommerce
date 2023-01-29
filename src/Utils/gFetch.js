let productos = [
    {id: '1' ,categoría: 'Vinilo' ,nombre: 'Sui Generis' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1ftYL7hylZMKHFQbGgo0Tp1XI16Wpxsgi'},
    {id: '2' ,categoría: 'Vinilo' ,nombre: 'Los Gatos' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1z-eDdtJ1xLXV3X7I22wxVDvK7Ng5K0oF'},
    {id: '3' ,categoría: 'Vinilo' ,nombre: 'Vox Dei' ,precio: '700' ,foto: 'https://drive.google.com/uc?export=download&id=1AR1Jd8wpfhLu37aWfXWJ1KvGC4fnhnd5'},
    {id: '4' ,categoría: 'Vinilo' ,nombre: 'Almendra' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1foYe3iAXhLxds5gSw21UDp3-1y1V7NCg'},
    {id: '5' ,categoría: 'Vinilo' ,nombre: 'Los abuelos de la nada' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1aonQEs3aLnRehLEGYB2ayV4SOxHC-NzK'},
    {id: '6' ,categoría: 'Vinilo' ,nombre: 'Manal' ,precio: '700' ,foto: 'https://drive.google.com/uc?export=download&id=1UMF42daQrY-ikmQgUqkjMrOj3kTfurY8'},
    {id: '7' ,categoría: 'Vinilo' ,nombre: 'Pappos Blues' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1Tw0UMnv5iCDt5eZmyFojMKKrB58U-s2_'},
    {id: '8' ,categoría: 'Vinilo' ,nombre: 'Espiritu' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1ddVdaojdrquQPBzpyghx8syB6UfNWlth'},
    {id: '9' ,categoría: 'Vinilo' ,nombre: 'Pedro y Pablo' ,precio: '700' ,foto: 'https://drive.google.com/uc?export=download&id=19TiM_eF99GgpYlBIZSNlaqQ-dijnZ8r-'},
    {id: '10' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id='},
    {id: '11' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,foto: ''},
    {id: '12' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '700' ,foto: ''},
    {id: '13' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '900' ,foto: ''},
    {id: '14' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,foto: ''},
    {id: '15' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '700' ,foto: ''},
    {id: '16' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '900' ,foto: ''},
    {id: '17' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,foto: ''}
  ];
  
  export const gFetch = () => {
    return new Promise ((res, rej) => {
      setTimeout (() => {
        res (productos)
      }, 3000)
    })
  }