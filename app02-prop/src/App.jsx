import React,{useEffect} from 'react'
import { useState } from 'react'

export default function App() {
const [count, setCount] = useState(0)
const [test, setTest] = useState(0)

 useEffect(() => {
   console.log("1.ถ้า state เปลี่ยนจะ render ใหม่เสมอ")
  })

   useEffect(() => {
   console.log("2.ทำครั้งเดียวตอนเริ่มต้น")
  },[])

  useEffect(() => {
   console.log("3.ทำเมื่อกำหนดเงื่อนไข")
  },[count,test])
  
  return (
    <div>
      <button onClick={()=>setTest(999)}>click test</button>
      {count} <button onClick={()=>setCount(count + 1)}>Add</button>
      </div>
  )
}
