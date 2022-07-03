import React from 'react'
import {useRouter} from 'next/router';
export default function () {
//    this file catches any url that contains docs segment
//   ex:localhost:3000/docs/anything/house etc.

  const router = useRouter();
  const {params = []} = router.query; // assign array so our code does not throw run time error
  console.log(params) // prints array

  if(params.length === 2)
  return <h1>
    viewing docs for feature {params[0]} and concept {params[1]}
  </h1>
  
  else if(params.length === 3)
  return <h1>
    viewing docs for feature {params[0]} and concept {params[1]}
  </h1>

  

  return (
    <h1>Docs Page</h1>
  )
}
