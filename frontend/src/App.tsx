import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState("Conectando con el backend...")

  useEffect(() => {
    // Vite redirigirá '/api/projects/' a 'http://127.0.0.1:8000/api/projects/'
    fetch('/api/portfolio/')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('La respuesta de red no fue satisfactoria')
      })
      .then(data => {
        console.log("Datos recibidos:", data)
        setMessage("✅ ¡Conexión exitosa! Datos recibidos en la consola.")
      })
      .catch(error => {
        console.error("Error al conectar:", error)
        setMessage("❌ Error de conexión. Revisa la terminal de Django.")
      })
  }, [])

  return (
    <div>
      <h1>Prueba de Conexión</h1>
      <p>{message}</p>
    </div>
  )
}

export default App