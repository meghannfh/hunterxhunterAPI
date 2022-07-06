const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8002

app.use(cors())
app.use(express.json())

const hunters = 
{
    "kurapika": {
        "birthName": "Kurapika Kurta",
        "birthDate": "April 4, 1982",
        "zodiac": ["Aries", "Dog"],
        "age": "17 years",
        "birthLocation": "Lukso Province",
        "nenType": "Conjuration",
        "charImage": "https://i.pinimg.com/474x/6f/0d/09/6f0d0995bfb1aef8ee52fc3889a16c84.jpg",
        "charDescription": "character description/last appearance here"
    },
    "kite": {
        "birthName": "Kite",
        "birthDate": "unknown",
        "zodiac": ["unknown", "unknown"],
        "age": "20\'s",
        "birthLocation": "unknown",
        "nenType": "Conjuration",
        "charImage": "https://cdn.myanimelist.net/images/characters/5/203429.jpg",
        "charDescription": "character description/last appearance here"
    },
    "shizuku": {
        "birthName": "Shizuku Murasaki",
        "birthDate": "February 14, 1984",
        "zodiac": ["Aquarius", "Dog"],
        "age": "19 years",
        "birthLocation": "Meteor City",
        "nenType": "Conjuration",
        "charImage": "https://img.wattpad.com/cover/311827194-256-k655495.jpg",
        "charDescription": "character description/last appearance here"
    },
    "leorio": {
        "birthName": "Leorio Paladinight",
        "birthDate": "March 3, 1980",
        "zodiac": ["Pisces", "Monkey"],
        "age": "19 years",
        "birthLocation": "unkonwn",
        "nenType": "Emission",
        "charImage": "https://i.pinimg.com/originals/de/e3/b3/dee3b35ca4fcc6b7a82e35dd3b09fcaf.jpg",
        "charDescription": "character description/last appearance here"
    },
    "razor": {
        "birthName": "Razor",
        "birthDate": "unknown",
        "zodiac": ["unknown", "unknown"],
        "age": "19 years",
        "birthLocation": "unkonwn",
        "nenType": "Emission",
        "charImage": "https://static.wikia.nocookie.net/hunterxhunter/images/5/5b/Razor_2011.png/revision/latest?cb=20141125154250&path-prefix=es",
        "charDescription": "character description/last appearance here"
    },
    "gon": {
        "birthName": "Gon Freecss",
        "birthDate": "May 5, 1987",
        "zodiac": ["Taurus", "Rabbit"],
        "age": "12 years",
        "birthLocation": "Whale Island",
        "nenType": "Enhancement",
        "charImage": "https://www.giantbomb.com/a/uploads/scale_small/2/27436/2722697-gon_freecss_2617.jpg",
        "charDescription": "character description/last appearance here"
    },
    "netero": {
        "birthName": "Isaac Netero",
        "birthDate": "1879",
        "zodiac": ["unknown", "Rabbit"],
        "age": "120 years",
        "birthLocation": "unknown",
        "nenType": "Enhancement",
        "charImage": "https://i.pinimg.com/originals/f0/c7/98/f0c798f1bd8d0e1eb894d3f7c214c987.jpg",
        "charDescription": "character description/last appearance here"
    },
    "nobunaga": {
        "birthName": "Nobunaga Hazama",
        "birthDate": "September 8, 1970",
        "zodiac": ["Virgo", "Dog"],
        "age": "29 years",
        "birthLocation": "Meteor City",
        "nenType": "Enhancement",
        "charImage": "http://demonewspaper.com/images/characters/nobunaga-hazama-38845.jpg",
        "charDescription": "character description/last appearance here"
    },
    "phinks": {
        "birthName": "Phinks Magcub",
        "birthDate": "April 4 (unverified)",
        "zodiac": ["Aries", "unknown"],
        "age": "roughly 20 years",
        "birthLocation": "Meteor City",
        "nenType": "Enhancement",
        "charImage": "https://gonerealwild.com/images/characters/phinks-magcub-41847.jpg",
        "charDescription": "character description/last appearance here"
    },
    "youpi": {
        "birthName": "Menthuthuyoupi",
        "birthDate": "March 28, 2000(roughly)",
        "zodiac": ["Aries", "Dragon"],
        "age": "46 days",
        "birthLocation": "NGL",
        "nenType": "Enhancement",
        "charImage": "https://static.wikia.nocookie.net/hunterxhunter/images/7/79/109_-_Menthuthuyoupi_portrait.png/revision/latest?cb=20131218033843",
        "charDescription": "character description/last appearance here"
    },
    "illumi": {
        "birthName": "Illumi Zoldyck",
        "birthDate": "1974 or 1975",
        "zodiac": ["unknown", "Tiger or Rabbit"],
        "age": "24 years",
        "birthLocation": "Kukuroo Mountain",
        "nenType": "Manipulator",
        "charImage": "https://cdn.anime-planet.com/characters/primary/illumi-zoldyck-1.jpg?t=1625786733",
        "charDescription": "character description/last appearance here"
    },
    "pouf": {
        "birthName": "Shaiapouf",
        "birthDate": "January 24, 2000(roughly)",
        "zodiac": ["Aquarius", "Dragon"],
        "age": "69 days",
        "birthLocation": "NGL",
        "nenType": "Manipulation",
        "charImage": "https://static.wikia.nocookie.net/hunterxhunter/images/a/a2/109_-_Shaiapouf_portrait.png/revision/latest?cb=20150902224149",
        "charDescription": "character description/last appearance here"
    },
    "chrollo": {
        "birthName": "Chrollo Lucifer",
        "birthDate": "September 6, 1973",
        "zodiac": ["unknown", "Ox"],
        "age": "26 years",
        "birthLocation": "Meteor City",
        "nenType": "Specialist",
        "charImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a63ab889-f2fc-4c5f-a9cf-7ab95c2ef5d7/dbt5ls0-e6d62918-d537-473a-9872-1943110c0823.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E2M2FiODg5LWYyZmMtNGM1Zi1hOWNmLTdhYjk1YzJlZjVkN1wvZGJ0NWxzMC1lNmQ2MjkxOC1kNTM3LTQ3M2EtOTg3Mi0xOTQzMTEwYzA4MjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r2KuBqIbNUAlJrR2idzLURmqlAwl7pcavGzrTV0m0NY",
        "charDescription": "character description/last appearance here"
    },
    "ging": {
        "birthName": "Ging Freecss",
        "birthDate": "1967",
        "zodiac": ["unknown", "Goat"],
        "age": "32 years",
        "birthLocation": "Whale Island",
        "nenType": "Transmuter, Manipulation, Emission",
        "charImage": "https://cdn.myanimelist.net/images/characters/2/231795.jpg",
        "charDescription": "character description/last appearance here"
    },
    "pakunoda": {
        "birthName": "Pakunoda",
        "birthDate": "1879",
        "zodiac": ["unknown", "Rabbit"],
        "age": "roughly 30 years",
        "birthLocation": "Meteor City",
        "nenType": "Enhancement",
        "charImage": "http://pm1.narvii.com/6754/7e126a72ff36013f4542447833cacd818aade9b5v2_00.jpg",
        "charDescription": "character description/last appearance here"
    },
    "meruem": {
        "birthName": "Meruem",
        "birthDate": "April 3, 2000(roughly)",
        "zodiac": ["Aries", "Dragon"],
        "age": "40 days",
        "birthLocation": "NGL",
        "nenType": "Specialist",
        "charImage": "https://i.pinimg.com/474x/5e/74/10/5e74102b457a460d049d7f02327f30d4.jpg",
        "charDescription": "character description/last appearance here"
    },
    "pitou": {
        "birthName": "Neferpitou",
        "birthDate": "January 22, 2000(roughly)",
        "zodiac": ["Aquarius", "Dragon"],
        "age": "71 days",
        "birthLocation": "NGL",
        "nenType": "Specialist",
        "charImage": "https://cdn.anime-planet.com/characters/primary/neferpitou-1.jpg?t=1625834912",
        "charDescription": "character description/last appearance here"
    },
    "killua": {
        "birthName": "Killua Zoldyck",
        "birthDate": "July 7, 1987",
        "zodiac": ["Cancer", "Rabbit"],
        "age": "12 years",
        "birthLocation": "Kukuroo Mountain",
        "nenType": "Transmutation",
        "charImage": "http://pm1.narvii.com/7660/f2b258c6a7b6341990d40ba77dbfaf7454514ff4r1-477-477v2_uhq.jpg",
        "charDescription": "character description/last appearance here"
    },
    "hisoka": {
        "birthName": "Hisoka Marrow",
        "birthDate": "June 6, 1971",
        "zodiac": ["Gemini", "Boar"],
        "age": "28 years",
        "birthLocation": "Meteor City",
        "nenType": "Transmuter",
        "charImage": "https://assets.mycast.io/characters/hisoka-morow-404939-normal.jpg?1576755755",
        "charDescription": "character description/last appearance here"
    },
    "bisky": {
        "birthName": "Biscuit Krueger",
        "birthDate": "February 28, 1942",
        "zodiac": ["unknown", "Horse"],
        "age": "57 years",
        "birthLocation": "unknown",
        "nenType": "Transmuter",
        "charImage": "https://i.pinimg.com/474x/3d/2a/c7/3d2ac7f156c3f3ea445ef59a8355c3da.jpg",
        "charDescription": "character description/last appearance here"
    },
    "feitan": {
        "birthName": "Feitan Porter",
        "birthDate": "December 17, 1971",
        "zodiac": ["Sagittarius", "Boar"],
        "age": "28 years",
        "birthLocation": "Meteor City",
        "nenType": "Transmuter",
        "charImage": "https://cdn.myanimelist.net/images/characters/10/174721.jpg",
        "charDescription": "character description/last appearance here"
    },
    "machi": {
        "birthName": "Machi Komacine",
        "birthDate": "1974 - 1975",
        "zodiac": ["unknown", "Boar or Rabbit"],
        "age": "24 years",
        "birthLocation": "Meteor City",
        "nenType": "Transmuter",
        "charImage": "https://cdn.anime-planet.com/characters/primary/machi-komacine-1.jpg?t=1625820424",
        "charDescription": "character description/last appearance here"
    },
    "pariston": {
        "birthName": "Pariston Hill",
        "birthDate": "unknown",
        "zodiac": ["unknown", "unknown"],
        "age": "unknown",
        "birthLocation": "unknown",
        "nenType": "unknown",
        "charImage": "https://i.pinimg.com/564x/b9/f9/d1/b9f9d1918b3154f734d62c90d606be0c.jpg",
        "charDescription": "character description/last appearance here"
    },
    "alluka": {
        "birthName": "Alluka Zoldyck",
        "birthDate": "1988",
        "zodiac": ["unknown", "Dragon"],
        "age": "11 years",
        "birthLocation": "Kukuroo Mountain",
        "nenType": "none",
        "charImage": "https://i.pinimg.com/originals/d6/a1/97/d6a197cbbd33fb8c35074ce1f3cc2fe3.jpg",
        "charDescription": "character description/last appearance here"
    },
    "canary": {
        "birthName": "Canary",
        "birthDate": "1986",
        "zodiac": ["unknown", "Tiger"],
        "age": "13 years",
        "birthLocation": "Kukuroo Mountain",
        "nenType": "unknown",
        "charImage": "https://cdn.anime-planet.com/characters/primary/canary-hunter-x-hunter-1.jpg?t=1625816922",
        "charDescription": "character description/last appearance here"
    },
    "notFound": "hunter not found"
}

//if we want our app to handle read requests then we need .get()

//the forward slash it is referring to the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//second get request is meant to tell the sever which url to send our json information back to the client
app.get('/api/:hunter', (req, res)=> {
    const hunterName = req.params.hunter.toLowerCase()
    if(hunters[hunterName]){
        res.json(hunters[hunterName])
    }else {
        res.json(hunters["not found"])
    }  
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}`)
})

