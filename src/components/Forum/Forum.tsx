import { Table, Anchor, Container } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import ForumModal from "./ForumModal"
import { useState } from "react"
import { useLocalStorage } from "usehooks-ts"

export function Forum() {
  const [data, setData] = useState({ title: "", messages: [] })
  const [opened, { open, close }] = useDisclosure(false)
  const [mockdata, setMockData] = useLocalStorage("forum-data", [
    {
      title: "Foundation",
      author: "Isaac Asimov",
      date: 1951,
      messages: [
        { message: "hiqwew", username: "admin" },
        { message: "gokberk", username: "admin" },
      ],
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      date: 1818,
      messages: [
        { message: "hiqwew", username: "admin" },
        { message: "gokberk", username: "admin" },
      ],
    },
  ])

  function handleClick(title: string, messages) {
    setData({ title: title, messages: messages })
    open()
  }

  const rows = mockdata.map((row) => {
    return (
      <Table.Tr key={row.title}>
        <Table.Td>
          <Anchor component="button" fz="sm" onClick={() => handleClick(row.title, row.messages)}>
            {row.title}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.date}</Table.Td>
        <Table.Td>
          <Anchor fz="sm">{row.author}</Anchor>
        </Table.Td>
        <Table.Td></Table.Td>
      </Table.Tr>
    )
  })

  return (
    <>
      <ForumModal open={open} opened={opened} close={close} title={data.title} messages={data.messages} setMockData={setMockData} />
      <Container size="md" pt={100}>
        <Table.ScrollContainer minWidth={800}>
          <Table verticalSpacing="xs">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Book title</Table.Th>
                <Table.Th>Created At</Table.Th>
                <Table.Th>Author</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Container>
    </>
  )
}
