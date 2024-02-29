import { Text, Box, Stack, rem } from "@mantine/core"
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react"
import classes from "./ContactIcons.module.css"

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun
  title: React.ReactNode
  description: React.ReactNode
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  )
}

const mockdata = [
  { title: "Email", description: "matiriciejr@gmail.com", icon: IconAt },
  { title: "Telefon Numarası", description: "+90 (553) 065 7091", icon: IconPhone },
  { title: "Adres", description: "Gençlik Spor Merkezi Edirne/Merkez", icon: IconMapPin },
]

export function ContactIconsList() {
  const items = mockdata.map((item, index) => <ContactIcon key={index} {...item} />)
  return <Stack>{items}</Stack>
}
