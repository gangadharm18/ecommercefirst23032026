const fs=require('fs')
const path=require('path')


const readAllProducts=()=>{
    const filePath=path.join(__dirname,'../data/products.json')
    const data=fs.readFileSync(filePath,'utf-8')
    let products=JSON.parse(data);
    return products
}
const sortByParams=(req,products)=>{
    if(req.sortBy==='pname'){
        products.sort((a,b)=>a.pname.localeCompare(b.pname))
    }
    return products
}
const getProductById=(id)=>{
    const products=readAllProducts();
    return products.find(p=>p.id===id)
}

module.exports={
    readAllProducts,
    sortByParams,
    getProductById
}