import React from 'react';
import CartItem from './CartItem'
class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
        products:[
            {
                price:99,
                title:'watch',
                qty:1,
                img:'',
                id:1
            },
            {
                price:109,
                title:'phone',
                qty:1,
                img:'',
                id:2
            },
            {
                price:99999,
                title:'bts album',
                qty:1,
                img:'',
                id:3
            }
        ]
    }
}
        handleIncreaseQuantity=(product)=>{
           const {products}=this.state;
           const index= products.indexOf(product);
           products[index].qty+=1;
           this.setState({
               products:products
           })
            console.log('increase quantity');
        }
        handleDecreaseQuantity=(product)=>{
            const {products}=this.state;
            const index=products.indexOf(product);
            const x=products[index].qty;
            if(x==0)
            return ;
            else{
                products[index].qty-=1;
                this.setState({
                    products:products
                })
            }
            console.log('Decrease Quantity')
        }
        handleDeleteProduct=(id)=>{
            const {products}=this.state;
            //returns another array whose id is not equal to this id
            const items=products.filter((item)=>item.id!=id);
           this.setState({
               products:items
           })
        }
    render () {
        const {products}=this.state;
      return (
        <div className="cart">
                {
                    products.map((product)=>{
                        return <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteQuantity={this.handleDeleteProduct}
                        />
                    })
                }
        </div>
      );
    }
  }
  
  export default Cart;