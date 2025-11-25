import SendLink from '../Components/Cards/SendLink'
import { FiSend } from 'react-icons/fi'
import { FaUserTie } from 'react-icons/fa'
function MembersPage() {
   const totalBox = [
    {
      icon: <FiSend />,
      title: "Send Link",
      smallDesc: "App share via Email or SMS",
      message: "Share the application link with your clients. They can open it directly on their device.",
      btnTitel: "Send Link",
      action: "modal",
    },
    {
      icon: <FaUserTie />,
      title: "Trainer",
      smallDesc: "Manage your members",
      message: "Add new members details easily.",
      btnTitel: 'Add members',
      action: "route",     // 🔥 navigate to page
      route: "/admin/members/add",
    }
  ]
  return (
    <>
      <div className="flex  gap-6">

        {totalBox.map((box, index) => (
          <SendLink key={index} data={box} />
        ))}

      </div>
    </>
  )
}

export default MembersPage