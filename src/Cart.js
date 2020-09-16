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
    render () {
        const {products}=this.state;
      return (
        <div className="cart">
                {
                    products.map((product)=>{
                        return <CartItem product={product} key={product.id}/>
                    })
                }
        </div>
      );
    }
  }
  
  export default Cart;