import express from "express"
import cors from "cors"

const app = express()
const PORT = 5000
let counter = 16
app.use(express.json())
app.use(cors())


let arr = [
    {
        id: 1,
        name: "Brown paperbag waist pencil skirt",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-4.jpg",
        category: "Women",
        price: "$60,00",
        color: "Brown",
        size: "S",
        brand: "RiverIsland",
      },
      {
        id: 2,
        name: "Dark yellow lace cut out swing dress",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-5.jpg",
        category: "Dresses",
        price: "$84,00",
        color: "Yellow",
        size: "M",
        brand: "Geox",
      },
      {
        id: 3,
        name: "Khaki utility boiler jumpsuit",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-6.jpg",
        category: "Jackets",
        price: "$120.00",
        color: "Khaki",
        size: "L",
        brand: "Next",
      },
      {
        id: 4,
        name: "Blue utility pinafore denim dress",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-7.jpg",
        category: "Jeans",
        price: "$76.00",
        color: "Blue",
        size: "XL",
        brand: "Newbalance",
      },
      {
        id: 5,
        name: "Beige knitted elastic runner shoes",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-8.jpg",
        category: "Shoes",
        price: "$84.00",
        color: "Beige",
        size: "XXL",
        brand: "Next",
      },
      {
        id: 6,
        name: "Orange saddle lock front chain cross body bag",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-9.jpg",
        category: "Bags",
        price: "$84.00",
        color: "Orange",
        size: "Xs",
        brand: "Ugg",
      },
      {
        id: 7,
        name: "Light brown studded Wide fit wedges",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-11.jpg",
        category: "Shoes",
        price: "$110.00",
        color: "Brown",
        size: "S",
        brand: "F&F",
      },
      {
        id: 8,
        name: "Yellow button front tea top",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-10.jpg",
        category: "Jumpers",
        price: "$56.00",
        color: "Yellow",
        size: "M",
        brand: "F&F",
      },
      {
        id: 9,
        name: "Black soft RI weekend travel bag",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-12.jpg",
        category: "Bags",
        price: "$68.00",
        color: "Black",
        size: "L",
        brand: "Ugg",
      },
      {
        id: 10,
        name: "Beige metal hoop tote bag",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-13.jpg",
        category: "Bags",
        price: "$76.00",
        color: "Beige",
        size: "XL",
        brand: "Newbalance",
      },
      {
        id: 11,
        name: "Brown zebra print dungaree dress",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-14.jpg",
        category: "Dresses",
        price: "$80.00",
        color: "Brown",
        size: "XXL",
        brand: "Geox",
      },
      {
        id: 12,
        name: "Beige ring handle circle cross body bag",
        image:
          "https://portotheme.com/html/molla/assets/images/products/product-15.jpg",
        category: "Bags",
        price: "$56.00",
        color: "Beige",
        size: "Xs",
        brand: "RiverIsland",
      }
]

app.get("/",(req,res)=>{
    res.send(arr)
})

app.get("/:id",(req,res)=>{
    const {id} = req.params
    const getItem = arr.find((i)=>i.id === +id)
    res.send(getItem)
})
app.delete('/:id',(req,res)=>{
    const {id} = req.params
    arr = arr.filter((i)=>i.id !== +id)
    res.send(arr)
})
app.post("/",(req,res)=>{
    let newItem = {
        "id":counter++,
        "name":req.body.name,
        "category":req.body.category,
        "image":req.body.image,
        "price":req.body.price
    }
    arr.push(newItem)
    res.send(arr)
})
app.put("/:id",(req,res)=>{
    const {id} = req.params

    let newItem = {
        "id":+id,
        "name":req.body.name,
        "category":req.body.category,
        "image":req.body.image,
        "price":req.body.price
    }

    arr = arr.filter((i)=>i.id !== +id)
    arr.push(newItem)
    arr.sort((a,b)=>a.id-b.id)
    res.send(arr)
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log("There is not such an error");
    }
})