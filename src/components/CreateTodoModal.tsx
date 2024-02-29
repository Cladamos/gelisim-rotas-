import { Modal, Stack, Input, Group, Button } from "@mantine/core"
import { DatePickerInput, DatesProvider } from "@mantine/dates"
import { Todo } from "../contexts/TodoContext"
import { useUser } from "../contexts/UserContext"
type CreateTodoModalProps = {
  opened: boolean
  open: () => void
  close: () => void
  setTodoInput: React.Dispatch<React.SetStateAction<Todo>>
  todoInput: Todo
  setDateInput: React.Dispatch<React.SetStateAction<Date>>
  dateInput: Date
  handleCreateTodo: () => void
}

function CreateTodoModal(props: CreateTodoModalProps) {
  const userCtx = useUser()
  return (
    <Modal opened={props.opened} onClose={props.close} title="Hedef Oluştur" size="lg" padding="lg" radius="md" centered>
      <Stack gap="md" justify="center">
        <Input.Wrapper label="Başlık">
          <Input
            size="md"
            radius="md"
            placeholder="Hedef Başlığı"
            onChange={(event) => props.setTodoInput((todo) => ({ ...todo, title: event.target.value }))}
          />
        </Input.Wrapper>
        <Input.Wrapper size="md" label="Açıklama">
          <Input
            size="md"
            radius="md"
            placeholder="Hedef Açıklaması"
            onChange={(event) => props.setTodoInput((i) => ({ ...i, description: event.target.value }))}
          />
        </Input.Wrapper>
        <Input.Wrapper
          size="md"
          label="Kategori"
          error={userCtx.currUser?.username === undefined ? "Bu özelliği kullanmak için giriş yapmalısınız" : ""}
        >
          <Input
            disabled={userCtx.currUser?.username === undefined}
            size="md"
            radius="md"
            placeholder="Kategori ismi"
            onChange={(event) => props.setTodoInput((i) => ({ ...i, category: event.target.value }))}
          />
        </Input.Wrapper>
        <DatesProvider settings={{ locale: "tr" }}>
          <DatePickerInput
            label="Bitiş Tarihi"
            placeholder="Tarih Şeçiniz"
            value={props.dateInput}
            onChange={(d) => props.setDateInput(d!)}
            radius="md"
          />
        </DatesProvider>
        <Group justify="flex-end" py="md">
          <Button size="md" variant="outline" color="red" onClick={props.close}>
            İptal Et
          </Button>
          <Button size="md" onClick={props.handleCreateTodo} disabled={props.todoInput.title === ""}>
            Oluştur
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}

export default CreateTodoModal
