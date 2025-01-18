import { useState } from "react"
import Contact from "./Contact.js"

export default function ContactList() {
  const [reverse, setReverse] = useState(false)
  const [expandedIds, setExpandedIds] = useState(new Set())
  const displayedContacts = [...contacts]
  if (reverse) {
    displayedContacts.reverse()
  }

  function onExpanded(contactId) {
    const nextExpandedIds = new Set(expandedIds)
    if (nextExpandedIds.has(contactId)) {
      nextExpandedIds.delete(contactId)
    } else {
      nextExpandedIds.add(contactId)
    }
    setExpandedIds(nextExpandedIds)
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          value={reverse}
          onChange={(e) => {
            setReverse(e.target.checked)
          }}
        />{" "}
        以相反的顺序显示
      </label>
      <ul>
        {displayedContacts.map((contact, i) => (
          <li key={i}>
            <Contact
              contact={contact}
              expandedIds={expandedIds}
              onExpanded={onExpanded}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

const contacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
]
