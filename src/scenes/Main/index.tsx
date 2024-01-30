import {useState} from "react"
import Auth from "scenes/Auth"
import Kanban from "scenes/Kanban"

export default function Main() {
  const [tab, setTab] = useState<"auth" | "kanban">("auth")

  return (
    <>
      {tab === "auth" && <Auth/>}
      {tab === "kanban" && <Kanban/>}
    </>
  )
}
