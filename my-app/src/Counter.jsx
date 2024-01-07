import { useState } from 'react'

function Counter() {
    
    let z = 10

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const [isEditing, setIsEditing] = useState(false)

    const [todos, setTodos] = useState(['todo 1', 'todo 2'])

    return (
        <>
            Count Z: {z}
            <button onClick={() => z+1}>Inc</button>
            <br />
            Count X: {x} is {(x%2===0) ? "Even" : "Odd"}
            <button onClick={() => setX(x+1)}>Inc</button>
            <button onClick={() => setX(x-1)}>Dec</button>
            <br />
            Count Y: {y}
            <button onClick={() => setY(y+1)}>Inc</button>
            <button onClick={() => setY(y-1)}>Dec</button>
            <br />

            {
                (isEditing) ? <input /> : <p>Some todo</p>
            }
            <br />
            <button onClick={() => setIsEditing(!isEditing)}>Click</button>
            <ul>
                {todos.map((todo) => <li>{todo}</li>)}
                <button onClick={() => setTodos([...todos, 'another one'])}>Click</button>
            </ul>
        </>
    )
}

export default Counter