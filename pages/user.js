import React from 'react'

export default function User({users}) {
  return (
    <div style={{width:'400px',height:'auto',margin:"auto",display:'flex',flexDirection:'column',padding:'10px',gap:'10px'}}>
        {
            users.map((user)=>{
                return <>
                <div style={{display:'flex',flexDirection:'column',height:'auto',gap:'5px',justifyContent:'center',textAlign:'center',
                backgroundColor:'skyblue'
                }}
                >
                <h2>userId: {user.userId}</h2>
                <h2>id:{user.id}</h2>
                <span>{user.title}</span>
                </div>
                </>
            })
        }
    </div>
  )
}


export async function  getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await response.json()
    console.log(data);
    return{
        props:{
                  users:data
        }  
      }
} 