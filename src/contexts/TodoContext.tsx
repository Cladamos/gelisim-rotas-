import { ReactNode, createContext, useContext } from "react"
import { useLocalStorage } from "usehooks-ts"

export type Todo = {
  username: string
  title: string
  description: string
  isCompleated: boolean
  deadline: Date
  id: string
  category: string
}

function isSameDate(date: Date, target: Date) {
  if (date.getDate() !== target.getDate()) {
    return false
  }
  if (date.getMonth() !== target.getMonth()) {
    return false
  }
  if (date.getFullYear() !== target.getFullYear()) {
    return false
  }
  return true
}

export const TodoContext = createContext<{
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  getByDay: (date: Date) => Todo[]
} | null>(null)

export const TodoProvider = (props: { children: ReactNode }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", [], {
    deserializer: (v) => {
      const res = JSON.parse(v) as Todo[]
      res.forEach((r) => {
        r.deadline = new Date(r.deadline)
      })
      return res
    },
  })

  const getByDay = (date: Date) => todos.filter((t) => isSameDate(date, t.deadline))

  return <TodoContext.Provider value={{ todos, setTodos, getByDay }}>{props.children}</TodoContext.Provider>
}

export const useTodo = () => {
  const ctx = useContext(TodoContext)

  if (ctx === null) {
    throw new Error("TodoContext should be used within the TodoProvider")
  }

  return ctx
}
