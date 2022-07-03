import React from 'react'
import { useRouter } from 'next/router'
import { userAgent } from 'next/server'

export default function ProductId() {
   const router = useRouter();
   const productId = router.query.productId;


  return (
    <div>productId is : {productId}</div>
    // productId can be string as well
  // next js first searches for the file name same as productId in the current folder and then does the dynamic routing 
  )
}
