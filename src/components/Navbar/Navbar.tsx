import {
  AppShell,
  Burger,
  Group,
  Text,
  useMantineColorScheme,
  Button,
  Container,
  em,
  HoverCard,
  Box,
  Center,
  Divider,
  UnstyledButton,
  ThemeIcon,
  SimpleGrid,
  Avatar,
} from "@mantine/core"
import { useDisclosure, useMediaQuery, useHeadroom } from "@mantine/hooks"
import { IconSun, IconMoon, IconHome, IconLogout, IconMessages, IconMail, IconList } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import classes from "./Navbar.module.css"
import LoginModal from "../LoginModal"
import SignInModal from "../SignInModal"
import { useUser } from "../../contexts/UserContext"
import { notifications } from "@mantine/notifications"

type MenuItems = {
  label: string
  route: string
}

const menuItems: MenuItems[] = [
  { label: "Hedefler", route: "/todos" },
  { label: "Destek Al", route: "/get-support" },
  { label: "Takvim", route: "/calendar" },
]

function Navbar() {
  const userCtx = useUser()
  const [opened, { toggle }] = useDisclosure()
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  const [openedLoginModal, { open: openLoginModal, close: closeLoginModal }] = useDisclosure(false)
  const [openedSignInModal, { open: openSignInModal, close: closeSignInModal }] = useDisclosure(false)

  const pinned = useHeadroom({ fixedAt: 120 })

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark")
  }
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  const mockdata = [
    {
      icon: IconHome,
      title: "Tanıtım",
      description: "Biz kimiz, ne yapıyoruz?",
      id: "/#header",
    },

    {
      icon: IconList,
      title: "Özellikler",
      description: "Hizmetlerimizi keşfedin!",
      id: "/#features",
    },
    {
      icon: IconMail,
      title: "İletişim",
      description: "Bize ulaşın",
      id: "/#get-in-touch",
    },
    {
      icon: IconMessages,
      title: "Sık Sorulan Sorular",
      description: "",
      id: "/#faq",
    },
  ]

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title} component="a" href={item.id}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon color="#228BE6" />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  function handleLogOut() {
    notifications.show({
      title: <Text size="sm"> Görüşürüz {userCtx.currUser!.username} 👋 </Text>,
      message: <Text size="sm"> Hesabınızdan başarı ile çıkış yapılmıştır </Text>,
    })
    userCtx.setCurrUser(null)
  }

  return (
    <>
      <LoginModal open={openLoginModal} opened={openedLoginModal} close={closeLoginModal} />
      <SignInModal open={openSignInModal} opened={openedSignInModal} close={closeSignInModal} />
      <AppShell
        header={isMobile ? { height: 60 } : { height: 60, collapsed: !pinned, offset: false }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Container size="lg" h="100%">
            <Group h="100%" justify="space-between">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <Text size="xl" w={isMobile ? 150 : 280} fw={900}>
                Gelişim Rotası
              </Text>
              <Group gap="sm" visibleFrom="sm" justify="center">
                <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                  <HoverCard.Target>
                    <Button variant="subtle" radius="md" component={Link} to="/">
                      <Center inline>
                        <Box component="span" mr={5}>
                          Ana Sayfa
                        </Box>
                      </Center>
                    </Button>
                  </HoverCard.Target>

                  <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                    <Group justify="space-between" px="md">
                      <Text fw={500}>Ana Sayfa</Text>
                    </Group>

                    <Divider my="sm" />

                    <SimpleGrid cols={2} spacing={0}>
                      {links}
                    </SimpleGrid>
                  </HoverCard.Dropdown>
                </HoverCard>
                {userCtx.currUser ? (
                  menuItems.map((menuItem) => (
                    <Button key={menuItem.label} variant="subtle" radius="md" component={Link} to={menuItem.route}>
                      {menuItem.label}
                    </Button>
                  ))
                ) : (
                  <Button variant="subtle" radius="md" component={Link} to="/todos">
                    Hedefler
                  </Button>
                )}
              </Group>
              <Group justify="flex-end" w={isMobile ? 40 : 280}>
                <Group visibleFrom="sm" gap="lg">
                  {userCtx.currUser ? (
                    <>
                      <Avatar alt={userCtx.currUser!.username} color="blue">
                        {userCtx.currUser!.username.slice(0, 2).toUpperCase()}
                      </Avatar>
                      <Text size="sm" mr="sm">
                        {userCtx.currUser!.username}
                      </Text>
                      <Button onClick={handleLogOut} variant="outline" px={6} radius={8} component={Link} to="/">
                        <IconLogout />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" onClick={openLoginModal}>
                        Giriş yap
                      </Button>
                      <Button onClick={openSignInModal}>Kayıt ol</Button>
                    </>
                  )}
                </Group>
                <Button onClick={toggleColorScheme} px={6} radius={8}>
                  {colorScheme === "dark" ? <IconSun /> : <IconMoon />}
                </Button>
              </Group>
            </Group>
          </Container>
        </AppShell.Header>
        <AppShell.Navbar py="md" px="sm">
          <Group gap="xl">
            <Group>
              <Button w="100%" variant="subtle" justify="start" size="lg" radius="md" component={Link} to="/" onClick={toggle}>
                Ana Sayfa
              </Button>
              {userCtx.currUser ? (
                menuItems.map((menuItem) => (
                  <Button
                    key={menuItem.label}
                    w="100%"
                    variant="subtle"
                    justify="start"
                    size="lg"
                    radius="lg"
                    component={Link}
                    to={menuItem.route}
                    onClick={toggle}
                  >
                    {menuItem.label}
                  </Button>
                ))
              ) : (
                <Button w="100%" variant="subtle" justify="start" size="lg" radius="md" component={Link} onClick={toggle} to="/todos">
                  Hedefler
                </Button>
              )}
            </Group>
            <Group px="lg" gap="md" w="100%" grow>
              {userCtx.currUser ? (
                <>
                  <Group justify="space-between">
                    <Group>
                      <Avatar size="md" alt={userCtx.currUser!.username} color="blue">
                        {userCtx.currUser!.username.slice(0, 2).toUpperCase()}
                      </Avatar>
                      <Text size="lg" mr="xl">
                        {userCtx.currUser!.username}
                      </Text>
                    </Group>
                    <Button size="md" onClick={handleLogOut} component={Link} to="/">
                      Çıkış yap
                    </Button>
                  </Group>
                </>
              ) : (
                <>
                  <Button size="md" variant="outline" onClick={openLoginModal}>
                    Giriş Yap
                  </Button>
                  <Button size="md" onClick={openSignInModal}>
                    Kayıt Ol
                  </Button>
                </>
              )}
            </Group>
          </Group>
        </AppShell.Navbar>
      </AppShell>
    </>
  )
}

export default Navbar
