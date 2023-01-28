let productos = [
    {id: '1' ,categoría: 'Vinilo' ,nombre: 'Sui Generis' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1ftYL7hylZMKHFQbGgo0Tp1XI16Wpxsgi'},
    {id: '2' ,categoría: 'Vinilo' ,nombre: 'Los Gatos' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1z-eDdtJ1xLXV3X7I22wxVDvK7Ng5K0oF'},
    {id: '3' ,categoría: 'Vinilo' ,nombre: 'Vox Dei' ,precio: '700' ,foto: 'https://drive.google.com/uc?export=download&id=1AR1Jd8wpfhLu37aWfXWJ1KvGC4fnhnd5'},
    {id: '4' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '900' ,foto: ''},
    {id: '5' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,foto: ''},
    {id: '6' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '700' ,foto: ''},
    {id: '7' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '900' ,foto: ''},
    {id: '8' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,foto: ''},
    {id: '9' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '700' ,foto: ''},
    {id: '10' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '900' ,foto: ''},
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