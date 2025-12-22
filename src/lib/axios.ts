import axios from 'axios'
import { ApiError, NetworkError, UnauthorizedError } from './errors'

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // Sin respuesta => red / CORS / timeout, etc.
    if (!err.response) {
      return Promise.reject(new NetworkError())
    }

    const status: number = err.response.status

    if (status === 401) {
      return Promise.reject(new UnauthorizedError())
    }

    // Puedes mapear mensajes por status si quieres
    const message =
      status >= 500 ? 'Error del servidor' : 'Error al procesar la solicitud'

    return Promise.reject(new ApiError(message, { status }))
  },
)
