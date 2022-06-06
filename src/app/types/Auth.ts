export type TypeLoginRequest = {
  email: string,
  password: string
}
export type TypeLoginResponse = {
  accessToken : String,
  user: {
    id: number,
    email: string
  }
}
