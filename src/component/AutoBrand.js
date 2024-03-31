import React from 'react'

export default function AutoBrand(props) {
    const autoBrand = [
        {
            "name": "3 EV",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/3-ev.jpg",
            "link": "https://motorfloor.com/three-wheelers/3-ev"
        },
        {
            "name": "Adapt Motors",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/adapt-motors.jpg",
            "link": "https://motorfloor.com/three-wheelers/adapt-motors"
        },
        {
            "name": "ADM EV",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/adm-ev.jpg",
            "link": "https://motorfloor.com/three-wheelers/adm-ev"
        },
        {
            "name": "Allfine AFL",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/allfine-afl.jpg",
            "link": "https://motorfloor.com/three-wheelers/allfine-afl"
        },
        {
            "name": "Altigreen",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/altigreen.jpg",
            "link": "https://motorfloor.com/three-wheelers/altigreen"
        },
        {
            "name": "Arzoo Ev",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/arzooe-ev.jpg",
            "link": "https://motorfloor.com/three-wheelers/arzooe-ev"
        },
        {
            "name": "ATUL Auto",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/atul-auto.jpg",
            "link": "https://motorfloor.com/three-wheelers/atul-auto"
        },
        {
            "name": "Atut Sangam",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/atut-sangam.jpg",
            "link": "https://motorfloor.com/three-wheelers/atut-sangam"
        },
        {
            "name": "AVON EV",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/avon-ev.jpg",
            "link": "https://motorfloor.com/three-wheelers/avon-ev"
        },
        {
            "name": "BABA E-rickshaw",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/baba-e-rickshaw.jpg",
            "link": "https://motorfloor.com/three-wheelers/baba"
        },
        {
            "name": "Badshah E-rickshaw",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/badshah-e-rickshaw.jpg",
            "link": "https://motorfloor.com/three-wheelers/badshah"
        },
        {
            "name": "Bahubali E-rickshaw",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/bahubali-e-rickshaw.jpg",
            "link": "https://motorfloor.com/three-wheelers/bahubali"
        },
        {
            "name": "Bahuguna E-rickshaw",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/bahuguna-e-rickshaw.jpg",
            "link": "https://motorfloor.com/three-wheelers/bahuguna"
        },
        {
            "name": "Bajaj Auto",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/bajaj-auto.jpg",
            "link": "https://motorfloor.com/three-wheelers/bajaj-auto"
        },
        {
            "name": "Baxy Mobility",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/baxy-mobility.jpg",
            "link": "https://motorfloor.com/three-wheelers/baxy-mobility"
        },
        {
            "name": "Bhave EV",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/bhave-ev.jpg",
            "link": "https://motorfloor.com/three-wheelers/bhave-ev"
        },
        {
            "name": "BILITI Electric",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/biliti-electric.jpg",
            "link": "https://motorfloor.com/three-wheelers/biliti-electric"
        },
        {
            "name": "BYBY EV",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/byby-ev.jpg",
            "link": "https://motorfloor.com/three-wheelers/byby-ev"
        },
        {
            "name": "Celletron Motors",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/celletron-moters.jpg",
            "link": "https://motorfloor.com/three-wheelers/celletron-moters"
        },
        {
            "name": "City Life EV",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/city-life-ev.jpg",
            "link": "https://motorfloor.com/three-wheelers/city-life-ev"
        },
        {
            "name": "Dandera Electric",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/dandera-electric.jpg",
            "link": "https://motorfloor.com/three-wheelers/dandera-electric"
        },
        {
            "name": "Deltic Electric",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/deltic-electric.jpg",
            "link": "https://motorfloor.com/three-wheelers/deltic-electric"
        },
        {
            "name": "Diamond E-vehicle",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/diamond-e-vehicle.jpg",
            "link": "https://motorfloor.com/three-wheelers/diamond-e-vehicle"
        },
        {
            "name": "Divya Enterprises",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/divya-enterprises.jpg",
            "link": "https://motorfloor.com/three-wheelers/divya-enterprises"
        },
        {
            "name": "E Ashwa Automotive",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/e-ashwa-automotive.jpg",
            "link": "https://motorfloor.com/three-wheelers/e-ashwa-automotive"
        },
        {
            "name": "Greaves",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/greaves-electric-mobility.jpg",
            "link": "https://motorfloor.com/three-wheelers/greaves"
        },
        {
            "name": "Electeca",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/electeca.jpg",
            "link": "https://motorfloor.com/three-wheelers/electeca"
        },
        {
            "name": "E-Maggic",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/e-maggic.jpg",
            "link": "https://motorfloor.com/three-wheelers/e-maggic"
        },
        {
            "name": "E-Ranger",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/e-ranger.jpg",
            "link": "https://motorfloor.com/three-wheelers/e-ranger"
        },
        {
            "name": "Erisha",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/erisha.jpg",
            "link": "https://motorfloor.com/three-wheelers/erisha"
        },
        {
            "name": "ETO Motors",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/eto-motors.jpg",
            "link": "https://motorfloor.com/three-wheelers/eto-motors"
        },
        {
            "name": "E-Trio",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/e-trio.jpg",
            "link": "https://motorfloor.com/three-wheelers/e-trio"
        },
        {
            "name": "Etron EV",
            "imageUrl": "https://motorfloor.com/assets/img/hero/three-wheeler-brands/etron-ev.jpg",
            "link" : ""
        }    
    ]
    props.onArrayUpdate(autoBrand);
    
  return (
    <div>
      
    </div>
  )
}
