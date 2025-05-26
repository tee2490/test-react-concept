import React from 'react'

export default function Item(props) {
    const {id,name,deleteStudent} = props
  return (
    <div>
         <li key={id}>
              <p>
                {id} {name}{" "}
                <button
                  className="delete"
                  onClick={() => deleteStudent(id)}
                >
                  Delete
                </button>
              </p>
            </li>
    </div>
  )
}
