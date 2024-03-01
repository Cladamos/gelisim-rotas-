import { Table, Anchor, Container } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import ForumModal from "./ForumModal"
import { useState } from "react"
import { useLocalStorage } from "usehooks-ts"

export function Forum() {
  const [data, setData] = useState({ title: "", messages: [{ message: "", username: "" }] })
  const [opened, { open, close }] = useDisclosure(false)
  const [mockdata, setMockData] = useLocalStorage("forum-data", [
    {
      title: "Nasıl istediğim üniversiteyi kazanırım?",
      author: "Zeynep",
      date: "13 / 11 / 22",
      messages: [
        {
          message:
            "Merhaba arkadaşlar ben Zeynep yks 2024 öğrencisiyim. Karabük Üniversitesi Tıp Fakültesi’ni istiyorum. Sınava bu kadar az zaman kalmışken kalan süreci nasıl yöneteceğim konusunda kaygılıyım. Bana destek olabilir misiniz?",
          username: "Zeynep",
        },
        {
          message:
            "Merhaba Zeynep; ben Ayşe, Karabük Üniversitesi’nde Tıp okuyorum sınava geçen sene girdim ve 24535. oldum. Sana son 4 ay varkenki çalışma düzendimden biraz bahsedeyim. Sabah erken kalkmak gerçekten çok önemli. Günü verimli kullanmak için uykumu da iyi almış olman gerekli akşamları erken yatıp sabahları erken kalkmak rutinimin başlangıcı. Günlük olarak hedef soru sayısı belirleyerek ilerledim sana da bunu tavsiye edebilirim. Ve bir önemli husus daha artık branş deneme çözmeli ve yanlışlarını kesinlikle atlamamalısın. Bunlar benim uyguladıklarımdı. Herkesin çalışma şekli farklıdır. Umarım senin için de yararlı olur.",
          username: "Ayşe",
        },
        {
          message: "Teşekkür ederim Ayşe umarım sonuçlarım açıklandığında sana güzel haberlerimi verebilirim.",
          username: "Zeynep",
        },
        {
          message: "Heyecanla bekliyorum :)",
          username: "Ayşe",
        },
        {
          message: "Ayşe selam, tavsiyelerini uyguladım ve tercihlerim açıklandı. Hedefime ulaştım çok mutluyum çok teşekkür ederim.",
          username: "Zeynep",
        },
      ],
    },
    {
      title: "Satış hedefime ulaşamıyorum",
      author: "Barlas",
      date: "27 / 05 / 23",
      messages: [
        {
          message:
            "Selam ben Barlas. Mesleğim çiftçlik aynı zamanda buğday fabrikam var. Yıllık olarak 1000 ton buğaday satmayı hedefliyorum. Fakat bu hedefime 2 yıldır ulaşamıyorum. Buğday ekimi ya da biçimi sırasında bir hata yapıyor olabilir miyim?",
          username: "Barlas",
        },
        {
          message:
            "Merhaba Barlas; ben Kayhan 3 yıl önce aynı sorunu ben de yaşadım. Sorun aslında yağmur yağma döneminin ne zaman olacağının tam saptanamaması olduğunu tespit ettim. Bunun için de Matirice Jr. takımının tasarladığı E-Farm uygulamasını kullandım. Özellikleri o kadar çok ki yağmur yağma döneminin ne zaman olduğunu belirlemek haricinde toprak türü için en uygun ürünü belirleyen aynı zamanda ürün ekim tarihini belirleyen bir uygulama. Kullanmanı tavsiye ederim.",
          username: "Kayhan",
        },
        {
          message:
            "Kayhan çok teşekkür ederim. Bu yıl sonunda hedefimizi tamamladık hatta üstüne bile çıktık. Uygulama gerçekten çok kullanışlıymış.",
          username: "",
        },
      ],
    },
  ])

  function handleClick(
    title: string,
    messages: {
      message: string
      username: string
    }[],
  ) {
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
      <Container size="lg" pt={100}>
        <ForumModal open={open} opened={opened} close={close} title={data.title} messages={data.messages} setMockData={setMockData} />
        <Table.ScrollContainer minWidth={800}>
          <Table verticalSpacing="xs">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Başlık</Table.Th>
                <Table.Th>Oluşturulma Tarihi</Table.Th>
                <Table.Th>Kullanıcı</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Container>
    </>
  )
}
