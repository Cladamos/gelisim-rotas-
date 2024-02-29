import { ReactNode, createContext, useContext, useState } from "react"
import { useLocalStorage } from "usehooks-ts"

export type User = {
  username: string
  email: string
  password: string
}

export const UserContext = createContext<{
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  currUser: User | null
  setCurrUser: React.Dispatch<React.SetStateAction<User | null>>
} | null>(null)

export const UserProvider = (props: { children: ReactNode }) => {
  const [users, setUsers] = useLocalStorage<User[]>("users", [])
  const [currUser, setCurrUser] = useState<User | null>(null)

  return <UserContext.Provider value={{ users, setUsers, currUser, setCurrUser }}>{props.children}</UserContext.Provider>
}

export const useUser = () => {
  const ctx = useContext(UserContext)

  if (ctx === null) {
    throw new Error("UserContext should be used within the UserProvider")
  }

  return ctx
}
