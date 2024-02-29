import "dayjs/locale/tr"
import { DatesProvider, Calendar } from "@mantine/dates"
import { IconCurrentLocation, IconCheck } from "@tabler/icons-react"
import { Container, Group, Indicator, Paper, Stack, Tooltip, Text, SimpleGrid } from "@mantine/core"
import { useTodo } from "../contexts/TodoContext"
import { useUser } from "../contexts/UserContext"

function TodoCalendar() {
  const todoCtx = useTodo()
  const userCtx = useUser()
  const activeTodoCount = todoCtx.todos.filter((t) => t.isCompleated === false && t.username === userCtx.currUser!.username).length
  const finishedTodoCount = todoCtx.todos.filter((t) => t.isCompleated === true && t.username === userCtx.currUser!.username).length

  return (
    <Container size="xs" p="xl" pt={100}>
      <Stack gap="xl">
        <Group justify="center">
          <DatesProvider settings={{ locale: "tr" }}>
            <Calendar
              size="xl"
              renderDay={(date) => {
                const day = date.getDate()
                const todos = todoCtx.getByDay(date).filter((t) => t.isCompleated === false && t.username === userCtx.currUser!.username)
                console.log(todos)

                if (todos.length === 0) {
                  return <div>{day}</div>
                }

                return (
                  <Tooltip label={todos.map((t) => t.title).join(", ")}>
                    <Indicator size={6} color="red" offset={-2}>
                      <div>{day}</div>
                    </Indicator>
                  </Tooltip>
                )
              }}
            />
          </DatesProvider>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 2 }} p="xl">
          <Paper withBorder p="md" radius="md">
            <Group justify="space-between">
              <Text size="md">Aktif Hedefler</Text>
              <IconCurrentLocation />
            </Group>
            <Group align="flex-end" gap="xs" mt={10}>
              <Text size="xl" fw={700}>
                {activeTodoCount}
              </Text>
            </Group>
          </Paper>
          <Paper withBorder p="md" radius="md">
            <Group justify="space-between">
              <Text size="md">Ulaşılan Hedefler</Text>
              <IconCheck />
            </Group>
            <Group align="flex-end" gap="xs" mt={10}>
              <Text size="xl" fw={700}>
                {finishedTodoCount}
              </Text>
            </Group>
          </Paper>
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

export default TodoCalendar
