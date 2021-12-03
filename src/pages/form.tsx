import { useState } from 'react'

export default function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [users, setUsers] = useState([])

  let params: RequestInit = {
    method: 'POST',
    body: JSON.stringify({
      name,
      age
    })
  }

  async function sendForm() {
    await fetch('/api/form', params)
    setName('')
    setAge(0)
    const response = await fetch('/api/form')
    setUsers(await response.json())
  }

  return (
    <div>
      <h1>This is a form</h1>
      {users.map(e => (
        <span>{e.name}</span>
      ))}
      <hr />
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border-2 border-gray-500"
      />
      <input
        type="number"
        value={age}
        onChange={e => setAge(+e.target.value)}
        className="border-2 border-gray-500"
      />
      <button onClick={() => sendForm()} className="bg-blue-600 text-white">
        Enviar
      </button>
    </div>
  )
}
