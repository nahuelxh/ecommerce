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
    {id: '10' ,categoria: '60y70s' ,nombre: 'Arco Iris' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1g5bvEqrhKQwOVJW2Dp-e2g4JtTNKmVCC'},
    {id: '11' ,categoria: '80s' ,nombre: 'Los Violadores' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1TTA3y_Rp2rspVhHWAxpyW8HWIV0-NeDO'},
    {id: '12' ,categoria: '80s' ,nombre: 'Los Fabulosos Cadillacs' ,precio: '1100' ,foto: 'https://drive.google.com/uc?export=download&id=1O5Gs1cbmuHIBi2JkQYgfuiy0-GOYHlKY'},
    {id: '13' ,categoria: '80s' ,nombre: 'Sumo' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1oGsp3htz02pH-GW0iTDp0HTCXGC-XG_L'},
    {id: '14' ,categoria: '80s' ,nombre: 'Rata Blanca' ,precio: '700' ,foto: 'https://drive.google.com/uc?export=download&id=1yPtBiKfTM3vZekypUYM5kn2htr7k8-t_'},
    {id: '15' ,categoria: '80s' ,nombre: 'Soda Stereo' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1bpMvvGi-_WFF41UtMH6LPEMjb8bkL3R3'},
    {id: '16' ,categoria: '80s' ,nombre: 'Los Redondos' ,precio: '1000' ,foto: 'https://drive.google.com/uc?export=download&id=1MnGsJ0kV5Dq7Bl0QGQMcc-wJZBPmJuSZ'},
    {id: '17' ,categoria: '80s' ,nombre: 'Los Twist' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1fkGqR5UFT-rzX1PYhyDvG2h5fBpYsTIY'},
    {id: '18' ,categoria: '80s' ,nombre: 'Virus' ,precio: '700' ,foto: 'https://drive.google.com/uc?export=download&id=1NfhDLziR_hURihpeR4coE5TNggIX40iI'},
    {id: '19' ,categoria: '80s' ,nombre: 'Viudas e Hijas de Roque Enroll' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1FJdAP--vXVdoybbqzq4CKmuojzug0Gtu'},
    {id: '20' ,categoria: '80s' ,nombre: 'Ratones Paranoicos' ,precio: '1200' ,foto: 'https://drive.google.com/uc?export=download&id=1EwFfV7Bu05nNPBJY6O9KR7ee_F_R5blC'},
    {id: '21' ,categoria: '80s' ,nombre: 'V8' ,precio: '1200' ,foto: 'https://drive.google.com/uc?export=download&id=1hrxVY6bwiyIU0gga1W98xS-_5q6aA8Ja'},
    {id: '22' ,categoria: '90s' ,nombre: '2 Minutos' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1dcthULiX2hRlUPOq1QZgN3_WbJYeW2fU'},
    {id: '23' ,categoria: '90s' ,nombre: 'Caballeros de la Quema' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1Tbp90zs4ahk47qEsacgk7GiiTeJMv_I4'},
    {id: '24' ,categoria: '90s' ,nombre: 'Viejas Locas' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=14vWsp1xELLuen0kPF8VdFQeTl-s32SKs'},
    {id: '25' ,categoria: '90s' ,nombre: 'Massacre' ,precio: '1000' ,foto: 'https://drive.google.com/uc?export=download&id=1kzRfeHd33AhU2rw4G77s-xHwgQYcZbEa'},
    {id: '26' ,categoria: '90s' ,nombre: 'Los Piojos' ,precio: '1100' ,foto: 'https://drive.google.com/uc?export=download&id=1FtEa4OQF22d7bOYJoa8tadUYlrh-ir-z'},
    {id: '27' ,categoria: '90s' ,nombre: 'Divididos' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1Ph5WLiTUelWtZYZIRL8xdSXAl470JZnE'},
    {id: '28' ,categoria: '90s' ,nombre: 'Man Ray' ,precio: '700' ,foto: 'https://drive.google.com/uc?export=download&id=1m_isshlZcrZwk-5WmOhAmi2Px1Xto5Uj'},
    {id: '29' ,categoria: '90s' ,nombre: 'ANIMAL' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1DcOg3N0vaDCJ3NC7UciLxmsYvYUk-n88'},
    {id: '30' ,categoria: '90s' ,nombre: 'La Renga' ,precio: '1200' ,foto: 'https://drive.google.com/uc?export=download&id=1aJi5nvXRE9yddxec07sVfvSmRMTICgU7'},
    {id: '31' ,categoria: '90s' ,nombre: 'Babasonicos' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1ZRgPS6dGYfJCHjVSCPa28gNH465MlLgx'},
    {id: '32' ,categoria: '90s' ,nombre: 'Illya Kuryaki and the Valderramas' ,precio: '700' ,foto: 'https://drive.google.com/uc?export=download&id=13ZapiOWn2n6P9J6B5FJxFsHmB3g5VZv8'},
    {id: '33' ,categoria: '90s' ,nombre: 'Almafuerte' ,precio: '1100' ,foto: 'https://drive.google.com/uc?export=download&id=1PtbC5DIFEvS2oyM-naBG6w__YwoLBVlS'},
    {id: '34' ,categoria: '90s' ,nombre: 'Hermetica' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1--27fpeHiCgjPSlE4QzpxGSphXVqj6mO'},
    {id: '35' ,categoria: 'actualidad' ,nombre: 'Wos' ,precio: '1100' ,foto: 'https://drive.google.com/uc?export=download&id=11tIUnRyGscDPD86pHeLp20DOdEstY4lI'},
    {id: '36' ,categoria: 'actualidad' ,nombre: 'Conociendo Rusia' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1ENCerxhyfEHhgE2s89D-2nyC4Vt_8oUB'},
    {id: '37' ,categoria: 'actualidad' ,nombre: 'Bandalos Chinos' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1kB5fgE_YxK5EQMt79DrVVweeDtLg3NXL'},
    {id: '35' ,categoria: 'actualidad' ,nombre: 'Las Pastillas del Abuelo' ,precio: '1100' ,foto: 'https://drive.google.com/uc?export=download&id=1GShC_ooOkfd1V4UNpPvGr81tSEyZ6EMM'},
    {id: '36' ,categoria: 'actualidad' ,nombre: 'Guasones' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1DAVuLtyI_1sOOQcmqo6SsbKRVu4fciGR'},
    {id: '37' ,categoria: 'actualidad' ,nombre: 'La Vela Puerca' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1l2lnaB16MoGZw1LFwztCThWq5eGtnYJR'},
    {id: '35' ,categoria: 'actualidad' ,nombre: 'No Te Va Gustar' ,precio: '1100' ,foto: 'https://drive.google.com/uc?export=download&id=1sYBHhmPOASBymb-oWJapyl5dwHU0JMhy'},
    {id: '36' ,categoria: 'actualidad' ,nombre: 'La Bersuit' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=1vBXCqkp81-7T0BjOhQIRWPpnct10l27b'},
    {id: '37' ,categoria: 'actualidad' ,nombre: 'Airbag' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1wHvJiYxck8kxJv4ar0KHhK_gBR8zuRj3'},
    {id: '35' ,categoria: 'actualidad' ,nombre: 'Los Gardelitos' ,precio: '1100' ,foto: 'https://drive.google.com/uc?export=download&id=1j0j3ilj8wZur6xT9XE_FiI5XCzLtnqCh'},
    {id: '36' ,categoria: 'actualidad' ,nombre: 'La 25' ,precio: '900' ,foto: 'https://drive.google.com/uc?export=download&id=190Ltjeo_K-_Q8AlWJ8K_mzh4AtoL5-iI'},
    {id: '37' ,categoria: 'actualidad' ,nombre: 'Callejeros' ,precio: '800' ,foto: 'https://drive.google.com/uc?export=download&id=1wfbAtmfOMXM0Pp9hDPvAY11_GPYW-5pz'}
  ];
  
  export const gFetch = () => {
    return new Promise ((res, rej) => {
      setTimeout (() => {
        res (productos)
      }, 2000)
    })
  }