export class ApiError extends Error {
  status?: number
  code?: string
  constructor(message: string, opts?: { status?: number; code?: string }) {
    super(message)
    this.name = 'ApiError'
    this.status = opts?.status
    this.code = opts?.code
  }
}

export class ValidationError extends Error {
  constructor(message = 'Datos inválidos recibidos del servidor') {
    super(message)
    this.name = 'ValidationError'
  }
}

export class NetworkError extends Error {
  constructor(message = 'Error de red. Revisa tu conexión') {
    super(message)
    this.name = 'NetworkError'
  }
}

export class UnauthorizedError extends Error {
  constructor(message = 'Sesión caducada. Vuelve a iniciar sesión') {
    super(message)
    this.name = 'UnauthorizedError'
  }
}
