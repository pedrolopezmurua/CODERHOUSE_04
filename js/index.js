class products { // clase
    constructor(id, sku, name, price, description, thumbnail,image, category,create_data, stock) { //funcion contructora producto
        this.id = id //atributos
        this.sku = sku //atributos
        this.name = name //atributos
        this.price = price //atributos
        this.description = description //atributos
        this.thumbnail = thumbnail //atributos
        this.image = image //atributos
        this.category = category //atributos
        this.create_data = create_data //atributos
        this.stock = stock //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getSku() { //funciones o metodos
        return this.sku
    }
    getName() { //funciones o metodos
        return this.name
    }
    getPrice() { //funciones o metodos
        return this.price
    }
    getDescription() { //funciones o metodos
        return this.description
    }
    getThumbnail() { //funciones o metodos
        return this.thumbnail
    }
    getImage() { //funciones o metodos
        return this.image
    }
    getCategory() { //funciones o metodos
        return this.category
    }
    getCreateData() { //funciones o metodos
        return this.create_data
    }
    getStock() { //funciones o metodos
        return this.stock
    }
}


class categories { // clase
    constructor(id,name,description,thumbnail) { //funcion contructora producto
        this.id = id //atributos
        this.name = name //atributos
        this.description = description //atributos
        this.thumbnail = thumbnail //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getName() { //funciones o metodos
        return this.name
    }
    getDescription() { //funciones o metodos
        return this.description
    }
    getThumbnail() { //funciones o metodos
        return this.thumbnail
    }
}

class order_details { // clase
    constructor(id,order_id,product_id,price, sku, quantity) { //funcion contructora producto
        this.id = id //atributos
        this.order_id = order_id //atributos
        this.product_id = product_id //atributos
        this.price = price //atributos
        this.sku = sku //atributos
        this.quantity = quantity //atributos
    }
    getId() { //funciones o metodos 
        return this.id
    }
    getOrderId() { //funciones o metodos
        return this.order_id
    }
    getProductId() { //funciones o metodos
        return this.product_id
    }
    getPrice() { //funciones o metodos
        return this.price
    }
    getSku() { //funciones o metodos
        return this.sku
    }
    getQuantity() { //funciones o metodos
        return this.quantity
    }
}

class orders { // clase
    constructor(id,customer_id, ammount,shipping_address,order_address,order_email,order_date,order_status) { //funcion contructora producto
        this.id = id //atributos    
        this.customer_id = customer_id //atributos
        this.ammount = ammount //atributos
        this.shipping_address = shipping_address //atributos
        this.order_address = order_address //atributos
        this.order_email = order_email //atributos
        this.order_date = order_date //atributos
        this.order_status = order_status //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getCustomerId() { //funciones o metodos
        return this.customer_id
    }
    getAmmount() { //funciones o metodos
        return this.ammount
    }
    getShippingAddress() { //funciones o metodos
        return this.shipping_address
    }
    getOrderAddress() { //funciones o metodos
        return this.order_address
    }
    getOrderEmail() { //funciones o metodos
        return this.order_email
    }
    getOrderDate() { //funciones o metodos
        return this.order_date
    }
    getOrderStatus() { //funciones o metodos
        return this.order_status
    }
}

class customers { // clase
    constructor(id,email,password,full_name, billing_address, default_shipping_address, country,phone) { //funcion contructora producto
        this.id = id //atributos
        this.email = email //atributos
        this.password = password //atributos
        this.full_name = full_name //atributos
        this.billing_address = billing_address //atributos
        this.default_shipping_address = default_shipping_address //atributos
        this.country = country //atributos
        this.phone = phone //atributos
    }
    getId() { //funciones o metodos
        return this.id
    }
    getEmail() { //funciones o metodos
        return this.email
    }
    getPassword() { //funciones o metodos
        return this.password
    }
    getFullName() { //funciones o metodos
        return this.full_name
    }
    getBillingAddress() { //funciones o metodos
        return this.billing_address
    }
    getDefaultShippingAddress() { //funciones o metodos
        return this.default_shipping_address
    }
    getCountry() { //funciones o metodos
        return this.country
    }
    getPhone() { //funciones o metodos
        return this.phone
    }
}

//crear lista de productos en arreglo

const CreateProducts =[]
CreateProducts.push(new products(1,10000001,"aro",41,"descripcion de aro","thumbnail","path_imagen", "category_aros",Date(), 50)) // objetos
CreateProducts.push(new products(2,10000002,"cinturon",50,"descripcion de cinturon","thumbnail","path_imagen", "category_cinturones",Date(), 1000)) // objetos
CreateProducts.push(new products(3,10000003,"bufanda",30,"descripcion de bufanda","thumbnail","path_imagen", "category_bufanda",Date(), 500)) // objetos
CreateProducts.push(new products(4,10000004,"gorros",70,"descripcion de gorros","thumbnail","path_imagen", "category_gorros",Date(), 100)) // objetos
CreateProducts.push(new products(5,10000005,"pulseras",100,"descripcion de pulseras","thumbnail","path_imagen", "category_pulseras",Date(), 20)) // objetos
CreateProducts.push(new products(6,10000006,"ponchos",150,"descripcion de ponchos","thumbnail","path_imagen", "category_ponchos",Date(), 200)) // objetos
CreateProducts.push(new products(7,10000007,"zapatos",200,"descripcion de zapatos","thumbnail","path_imagen", "category_zapatos",Date(), 70)) // objetos
CreateProducts.push(new products(8,10000008,"sandalias",200,"descripcion de sandalias","thumbnail","path_imagen", "category_sandalias",Date(), 100)) // objetos
CreateProducts.push(new products(9,10000009,"pantalones",200,"descripcion de pantalones","thumbnail","path_imagen", "category_pantalones",Date(), 100)) // objetos
CreateProducts.push(new products(10,10000010,"camisas",200,"descripcion de camisas","thumbnail","path_imagen", "category_camisas",Date(), 100)) // objetos

//mostrar products en consola con funcion flecha 
CreateProducts.forEach(product => {
    console.log(product.getId(),product.getSku(),product.getName(),product.getPrice(),product.getPrice(),product.getDescription(),product.getThumbnail(),product.getImage(),product.getCategory(),product.getCreateData(),product.getStock()) 
}
)
//crear nuevas categorias de productos 
const CreateNewCategories =[]
CreateNewCategories.push(new categories(1,"category_aros")) // objetos
CreateNewCategories.push(new categories(2,"category_cinturones")) // objetos
CreateNewCategories.push(new categories(3,"category_bufanda")) // objetos
CreateNewCategories.push(new categories(4,"category_gorros")) // objetos
CreateNewCategories.push(new categories(5,"category_pulseras")) // objetos
CreateNewCategories.push(new categories(6,"category_ponchos")) // objetos
CreateNewCategories.push(new categories(7,"category_zapatos")) // objetos
CreateNewCategories.push(new categories(8,"category_sandalias")) // objetos
CreateNewCategories.push(new categories(9,"category_pantalones")) // objetos
CreateNewCategories.push(new categories(10,"category_camisas")) // objetos

//mostrar categoria en consola con funcion flecha
CreateNewCategories.forEach(categories => {
    console.log(categories.getId(),categories.getName())
 }
)

//crear una orders en arreglo y mostrar en consola con funcion flecha
const CreateOrders =[]
CreateOrders.push(new orders(1,1,10000001,"descripcion de aro","thumbnail","path_imagen", "category_aros",Date(), 5)) // objetos
CreateOrders.push(new orders(2,2,10000002,"descripcion de cinturon","thumbnail","path_imagen", "category_cinturones",Date(), 10)) // objetos
console.log(CreateOrders);

//crear un order_details en arreglo y mostrar en consola con funcion flecha
const CreateOrderDetails =[]
CreateOrderDetails.push(new order_details(1,1,10000001,"descripcion de aro","thumbnail","path_imagen", "category_aros",Date(), 5)) // objetos
CreateOrderDetails.push(new order_details(2,2,10000002,"descripcion de cinturon","thumbnail","path_imagen", "category_cinturones",Date(), 10)) // objetos
console.log(CreateOrderDetails);




//FUNCIONES DE ORDEN SUPERIOR

//resultado de la consulta de productos por categoria con filtro menor a 100
const result = CreateProducts.filter((el) => el.getPrice() < 100)
console.log(result);


//resultado de la consulta de productos por categoria con filtro mayor a 100 
const result2 = CreateProducts.filter((el) => el.getPrice() > 100)
console.log(result2);


//variable de orden superior de products por nombre
const result3 = CreateProducts.map((el) => el.name) //solo nombres de productos
console.log(result3);


//variable de orden superior de reduce de products por precio 
const result4 = CreateProducts.reduce((acumulador, el) => acumulador + el.getPrice(), 0) //solo precio de productos
console.log("EL TOTAL DEL PRECIOS DE CADA PRODUCTO: " + result4);



//variable de orden superior de SORT de products por NOMBRE DESCENDENTE
console.log("----------------------------------------------------");
console.log("inicio funcion NOMBRE DESCENDENTE");
const result5 = CreateProducts.sort((a, b) => a.getName() < b.getName() ? 1 : -1) //solo nombres de productos
console.log(result5);
console.log("----------------------------------------------------");

//variable de orden superior de SORT de products por NOMBRE ASCENDENTE
console.log("----------------------------------------------------");
console.log("inicio funcion NOMBRE ASCENDENTE");
const result6 = CreateProducts.sort((a, b) => a.getName() > b.getName() ? 1 : -1) //solo nombres de productos
console.log(result6);
console.log("----------------------------------------------------");