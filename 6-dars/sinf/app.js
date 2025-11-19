import express from 'express'

let kitoblar = [
  { id: 1, nomi: "O'tkan kunlar", muallif: "Abdulla Qodiriy", narxi: 45000, soni: 10 },
  { id: 2, nomi: "Mehrobdan chayon", muallif: "Abdulla Qodiriy", narxi: 38000, soni: 15 },
  { id: 3, nomi: "Kecha va kunduz", muallif: "Cho'lpon", narxi: 42000, soni: 8 }
];

const app = express();
app.use(express.json());

app.get('/', (req, res)=>{
    res.json(kitoblar)
})

app.get('/api/kitoblar',(req,res)=>{
    let a = []
    kitoblar.find(index =>{
        a.push(index.nomi)
    })
    res.json(a)
})

app.get('/api/kitoblar/:id',(req,res)=>{
    let id = +req.params.id
    kitoblar.find(index =>{
        if(index.id === id){
            res.json(index.nomi,index.id)
        }
    })
})

app.post('/api/kitoblar',(req,res)=>{
    let a = {
        id: kitoblar.length ? kitoblar.at(-1).id + 1 : 1,
        nomi: req.body.nomi, 
        muallif: req.body.muallif, 
        narxi: req.body.narxi, 
        soni: req.body.soni
    }
    kitoblar.push(a)
    res.json(kitoblar)
})

app.put('/api/kitoblar/:id', (req, res) => {
    let id = +req.params.id;
    let book = kitoblar.find(item => item.id === id);

    if (!book) {
        return res.json("topilmadi");
    }
    book.nomi = req.body.nomi || book.nomi;
    book.muallif = req.body.muallif || book.muallif;
    book.narxi = req.body.narxi || book.narxi;
    book.soni = req.body.soni || book.soni;

    res.json(book);
});

app.delete('/api/kitoblar/:id', (req, res) => {
    let id = +req.params.id;
    let index = kitoblar.findIndex(item => item.id === id);

    if (index === -1) {
        return res.json("topilmadi");
    }
    kitoblar.splice(index, 1);

    res.json(kitoblar);
});



app.listen(5000, () => console.log("Server running on 5000"));