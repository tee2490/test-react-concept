import React from 'react'

export default function Item(props) {
    const {item,deleteStudent} = props
    const {id,name,gender} = item
  return (
   
         <li>
              <p>
                {id} {name} {gender} {" "}
                <button
                  className="delete"
                  onClick={() => deleteStudent(id)}
                >
                  Delete
                </button>
              </p>
            </li>
   
  )
}
