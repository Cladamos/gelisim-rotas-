import { Text, Container, ActionIcon, Group, rem } from "@mantine/core"
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react"
import classes from "./Footer.module.css"

const data = [
  {
    title: "Hakkımızda",
    links: [{ label: "İletişim Bilgilerimiz", link: "#get-in-touch" }],
  },
  {
    title: "Projemiz",
    links: [
      { label: "Tanıtım", link: "#header" },
      { label: "Özellikler", link: "#features" },
      { label: "Sık Sorulan Sorular", link: "#faq" },
    ],
  },
  {
    title: "Topluluk",
    links: [{ label: "Forum", link: "/forum" }],
  },
]

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a"> key={index} className={classes.link} component="a" href={link.link}>
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="xl" className={classes.description}>
            Gelişim Rotası
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Gelişim Rotası tüm hakları saklıdır.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          {/*   <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon> */}
          <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="https://www.instagram.com/matiriciejr/" target="_blank">
            <IconBrandInstagram style={{ width: rem(25), height: rem(25) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  )
}
