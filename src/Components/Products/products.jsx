import Card from '../card UI/Card';

const Products = ({products,cartCard, setCartCard}) => {
    return (
        <>
            <div className="max-mr px-3 grid sm:grid-cols-2 md:grid-cols-3 gap-5 items-center justify-center">
                {
                    products.map((product)=>{
                        return(
                        <Card product={product}
                        cartCard={cartCard} setCartCard={setCartCard} 
                        key={product.id}>
                        </Card>
                        )
                    })
                }
                
            </div>
        </>
    );
};

export default Products;