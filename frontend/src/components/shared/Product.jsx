import React from 'react'
import {Card} from 'react-bootstrap'
import Raating from '../Raating'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} />

        </a>
        <Card.Body>
            <a href={`/product/${product._id}`}>
                <Card.Title as="div" className='non-line'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </a>
            <Raating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                <Card.Text as="h3">
                <div className="my-3">
                    {product.price} DH
                </div>
            </Card.Text>
        </Card.Body>

    </Card>
  )
}

export default Product