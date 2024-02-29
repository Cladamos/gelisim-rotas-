import { Modal, Text, Group } from "@mantine/core"
import { Todo } from "../contexts/TodoContext"

type ShowTodoModalProps = {
  opened: boolean
  open: () => void
  close: () => void
  selectedTodo: Todo
}

function ShowTodoModal(props: ShowTodoModalProps) {
  return (
    <Modal opened={props.opened} onClose={props.close} title={<Text size="lg">{props.selectedTodo.title}</Text>} size="lg" padding="lg" radius="md" centered>
      <Text size="sm" c="dimmed">
        {props.selectedTodo.description === "" ? "Herhangi bir açıklama bulunmamaktadır" : props.selectedTodo.description}
      </Text>
      <Group pt="md" justify="flex-end">
        <Text size="md" c="dimmed">
          {"Bitiş Tarihi:  " +
            props.selectedTodo.deadline.getDate().toString() +
            " / " +
            props.selectedTodo.deadline.getMonth().toString() +
            " / " +
            props.selectedTodo.deadline.getFullYear().toString()}
        </Text>
      </Group>
    </Modal>
  )
}

export default ShowTodoModal
