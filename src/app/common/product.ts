export class Product {
    constructor(
        public product_id:number,
        public product_name:String,
        public product_description:String,
        public price:number,
        public product_image:String,
        public product_quantity:String,
        public product_brand:String,
        public active:number,
        public category_id:number
    )
    {
        
    }
}
