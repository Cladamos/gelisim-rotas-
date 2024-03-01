import { MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import { theme } from "./theme"
import Navbar from "./components/Navbar/Navbar"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import HomeView from "./views/HomeView"
import GetSupportView from "./views/GetSupportView"
import CalendarView from "./views/CalendarView"
import { TodoProvider } from "./contexts/TodoContext"
import TodoView from "./views/TodoView"
import { UserProvider } from "./contexts/UserContext"
import ForumView from "./views/ForumView"

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <MantineProvider theme={theme}>
        <Notifications />
        <Navbar />
        <Outlet />
      </MantineProvider>
    ),
    children: [
      { path: "/", index: true, element: <HomeView /> },
      { path: "/todos", index: true, element: <TodoView /> },
      { path: "/get-support", element: <GetSupportView /> },
      { path: "/calendar", element: <CalendarView /> },
      { path: "/forum", element: <ForumView /> },
    ],
  },
])

export default function App() {
  return (
    <UserProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </UserProvider>
  )
}
