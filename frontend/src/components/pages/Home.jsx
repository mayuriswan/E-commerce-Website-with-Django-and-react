import React from 'react'
import {Row,Col} from 'react-bootstrap'
import products from '../../Products'
import Product from '../shared/Product'

function Home() {
    
  return (
    <div>
        <h1>Lastest Products</h1>
        <Row>
            {products.map(product =>(
                <Col sm={12} md={6} lg={4}  xl={3} key={product._id} >
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default Home