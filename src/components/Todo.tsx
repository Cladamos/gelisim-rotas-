import { Group, Text, Button, Card, Tooltip } from "@mantine/core"
import { IconTrash, IconListDetails } from "@tabler/icons-react"
import { Todo } from "../contexts/TodoContext"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

type TaskProps = {
  todo: Todo
  isMobile: boolean | undefined
  handleSelectedTodo: (todo: Todo) => void
  handleDeleteTodo: (todo: Todo) => void
  handleCompleteTodo: (todo: Todo) => void
}

function Task(props: TaskProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: props.todo.id })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  if (isDragging) {
    return (
      <Card
        radius="md"
        withBorder
        p="lg"
        shadow="no"
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        maw={props.isMobile ? 250 : 560}
        mih={100}
        opacity={props.todo.isCompleated === true ? "20%" : "70%"}
      >
        <Card.Section inheritPadding pt="xs">
          <Group justify="space-between">
            <Text size="md" truncate="end" w={props.isMobile ? "50%" : "70%"}>
              {props.todo.title}
            </Text>
            <Group gap={5}>
              <Button size="xs" radius="md" px={4}>
                <IconListDetails />
              </Button>
              <Button size="xs" radius="md" color="red" px={4}>
                <IconTrash />
              </Button>
            </Group>
          </Group>
        </Card.Section>
        <Group justify="space-between" pt="xs">
          <Text size="xs" c="dimmed" truncate="end" w={props.isMobile ? "50%" : "70%"}>
            {props.todo.description}
          </Text>
          <Text size="sm" c="dimmed">
            {props.todo.deadline.getDate().toString() +
              " / " +
              props.todo.deadline.getMonth().toString() +
              " / " +
              props.todo.deadline.getFullYear().toString()}
          </Text>
        </Group>
      </Card>
    )
  }
  return (
    <Card
      radius="md"
      withBorder
      p="lg"
      shadow="no"
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      maw={props.isMobile ? 250 : 560}
      mih={100}
      opacity={props.todo.isCompleated === true ? "40%" : "100%"}
      onClick={() => props.handleCompleteTodo(props.todo)}
    >
      <Card.Section inheritPadding pt="xs">
        <Group justify="space-between">
          <Text size="md" truncate="end" w={props.isMobile ? "50%" : "70%"}>
            {props.todo.title}
          </Text>
          <Group gap={5}>
            <Tooltip label="Detayları Görüntüle">
              <Button
                size="xs"
                radius="md"
                onClick={(e) => {
                  props.handleSelectedTodo(props.todo)
                  e.stopPropagation()
                }}
                px={4}
              >
                <IconListDetails />
              </Button>
            </Tooltip>
            <Tooltip label="Sil">
              <Button
                size="xs"
                radius="md"
                color="red"
                onClick={(e) => {
                  e.stopPropagation()
                  props.handleDeleteTodo(props.todo)
                }}
                px={4}
              >
                <IconTrash />
              </Button>
            </Tooltip>
          </Group>
        </Group>
      </Card.Section>
      <Group justify="space-between" pt="xs">
        <Text size="xs" c="dimmed" truncate="end" w={props.isMobile ? "50%" : "70%"}>
          {props.todo.description}
        </Text>
        <Text size="sm" c="dimmed">
          {props.todo.deadline.getDate().toString() +
            " / " +
            props.todo.deadline.getMonth().toString() +
            " / " +
            props.todo.deadline.getFullYear().toString()}
        </Text>
      </Group>
    </Card>
  )
}

export default Task
