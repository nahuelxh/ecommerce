let productos = [
    {id: '1' ,categoría: 'vinilo' ,nombre: 'Soda Stereo' ,precio: '800' ,img: ''},
    {id: '2' ,categoría: 'vinilo' ,nombre: 'Soda Stereo' ,precio: '800' ,img: ''},
    {id: '3' ,categoría: 'vinilo' ,nombre: 'Soda Stereo' ,precio: '800' ,img: ''},
    {id: '4' ,categoría: 'vinilo' ,nombre: 'Soda Stereo' ,precio: '800' ,img: ''},
    {id: '5' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,img: ''},
    {id: '6' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,img: ''},
    {id: '7' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,img: ''},
    {id: '8' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,img: ''},
    {id: '9' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,img: ''},
    {id: '10' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,img: ''},
    {id: '11' ,categoría: 'disco' ,nombre: 'Soda Stereo' ,precio: '800' ,img: ''}
  ]
  
  export const gFetch = () => {
    return new Promise ((res, rej) => {
      setTimeout (() => {
        res (productos)
      }, 2000)
    })
  }