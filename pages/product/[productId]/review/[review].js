import React from 'react'
import { useRouter } from 'next/router';

export default function Review() {
  const router = useRouter()
  const {productId , review} = router.query
  return (
    // nested dynamic routes 
    <h1> Review {review} for product {productId}</h1>
  )
}
