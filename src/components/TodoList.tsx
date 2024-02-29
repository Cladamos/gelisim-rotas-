import { Group, Container, Paper, Text, Button, Stack, ScrollArea, Select, em } from "@mantine/core"
import { useState } from "react"
import { IconPlus } from "@tabler/icons-react"
import { useDisclosure } from "@mantine/hooks"
import { v4 as uuid4 } from "uuid"
import { DndContext, useSensor, MouseSensor, TouchSensor, useSensors, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { restrictToVerticalAxis, restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers"
import Task from "./Todo"
import { notifications } from "@mantine/notifications"
import "dayjs/locale/tr"
import { Todo, useTodo } from "../contexts/TodoContext"
import CreateTodoModal from "./CreateTodoModal"
import ShowTodoModal from "./ShowTodoModal"
import { useUser } from "../contexts/UserContext"
import { useMediaQuery } from "@mantine/hooks"

function TodoList() {
  const todoCtx = useTodo()
  const userCtx = useUser()
  const [openedCreateTodo, { open: openCreateTodo, close: closeCreateTodo }] = useDisclosure(false)
  const [openedShowTodo, { open: openShowTodo, close: closeShowTodo }] = useDisclosure(false)
  const [dateInput, setDateInput] = useState<Date>(new Date())
  const [category, setCategory] = useState<string>("Hepsi")
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  const [selectedTodo, setSelectedTodo] = useState<Todo>({
    username: userCtx.currUser?.username ?? "debug",
    title: "",
    description: "",
    isCompleated: false,
    deadline: new Date(),
    id: "",
    category: "",
  })
  const [todoInput, setTodoInput] = useState<Todo>({
    username: userCtx.currUser?.username ?? "debug",
    title: "",
    description: "",
    isCompleated: false,
    deadline: new Date(),
    id: "",
    category: "",
  })

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  })
  const sensors = useSensors(mouseSensor, touchSensor)

  function handleSelectedTodo(todo: Todo) {
    setSelectedTodo(todo)
    openShowTodo()
  }

  const username = userCtx.currUser?.username ?? "debug"
  function handleCreateTodo() {
    const category = todoInput.category === "" ? "Hepsi" : todoInput.category
    setCategory(category)
    todoCtx.setTodos((t) => [...t, { ...todoInput, id: uuid4(), deadline: dateInput, category: category, username: username }])
    setTodoInput({ username: username, title: "", description: "", isCompleated: false, deadline: new Date(), id: "", category: "" })
    closeCreateTodo()
  }

  function handleDragEnd(event: any) {
    const { active, over } = event

    if (active.id !== over.id) {
      todoCtx.setTodos((t) => {
        const activeIndex = t.findIndex((v) => v.id === active.id)
        const overIndex = t.findIndex((v) => v.id === over.id)

        const newTodos = arrayMove(t, activeIndex, overIndex)
        return newTodos
      })
    }
  }

  function handleDeleteTodo(todo: Todo) {
    todoCtx.setTodos((t) => {
      const index = t.findIndex((v) => v.id === todo.id)
      const newTodos = [...t]
      newTodos.splice(index, 1)
      setCategory("Hepsi")
      return newTodos
    })
  }
  function handleCompleteTodo(todo: Todo) {
    todoCtx.setTodos((t) => {
      const index = t.findIndex((v) => v.id === todo.id)
      const newTodos = [...t]
      newTodos[index].isCompleated = !newTodos[index].isCompleated

      if (newTodos[index].isCompleated === true) {
        notifications.show({
          title: "Hedef Tamamlandı",
          message: <Text size="sm"> Tebrikler {todo.title} adlı hedefinize ulaştınız 🎉🎉🎉</Text>,
        })
      }

      return newTodos
    })
  }
  function categoryFilter(value: Todo, index: number, self: Todo[]) {
    const currIndex = self.findIndex((t) => t.category === value.category)
    return currIndex === index
  }

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
    >
      <Container size="lg" p={{ sm: "xs", md: "xl" }} pt={100} maw={700}>
        <CreateTodoModal
          opened={openedCreateTodo}
          close={closeCreateTodo}
          open={openCreateTodo}
          dateInput={dateInput}
          todoInput={todoInput}
          handleCreateTodo={handleCreateTodo}
          setDateInput={setDateInput}
          setTodoInput={setTodoInput}
        />
        <ShowTodoModal opened={openedShowTodo} close={closeShowTodo} open={openShowTodo} selectedTodo={selectedTodo} />

        <Stack>
          <Paper shadow={!isMobile ? "md" : undefined} withBorder={!isMobile} p={{ sm: "xs", md: "lg" }} radius="md">
            <Stack p="md" gap="xl">
              <Group justify={isMobile ? "center" : "space-between"} gap="xl">
                <Text size="25px" fw={700}>
                  Yapılacaklar
                </Text>
                <Select
                  size={isMobile ? "md" : "xs"}
                  radius="md"
                  label="Kategori Seç"
                  value={category === "" ? "Hepsi" : category}
                  onChange={(c) => setCategory(c!)}
                  data={todoCtx.todos
                    .filter((t) => t.username === userCtx.currUser?.username ?? "debug")
                    .filter(categoryFilter)
                    .map((t) => t.category)}
                />
              </Group>
              <Group grow justify="center">
                <ScrollArea h={500} scrollbars="y">
                  <SortableContext items={todoCtx.todos} strategy={verticalListSortingStrategy}>
                    <Stack gap={10}>
                      {todoCtx.todos
                        .filter(
                          (todo) =>
                            todo.username === (userCtx.currUser?.username ?? "debug") && (category === "Hepsi" ? true : todo.category === category),
                        )
                        .map((todo) => (
                          <Group justify="center" grow>
                            <Task
                              todo={todo}
                              isMobile={isMobile}
                              handleSelectedTodo={handleSelectedTodo}
                              handleDeleteTodo={handleDeleteTodo}
                              handleCompleteTodo={handleCompleteTodo}
                              key={todo.id}
                            />
                          </Group>
                        ))}
                    </Stack>
                  </SortableContext>
                </ScrollArea>
              </Group>
            </Stack>
          </Paper>
          <Button leftSection={<IconPlus size={30} />} variant="outline" size="md" radius="md" onClick={openCreateTodo}>
            Yeni hedef ekle
          </Button>
        </Stack>
      </Container>
    </DndContext>
  )
}

export default TodoList
