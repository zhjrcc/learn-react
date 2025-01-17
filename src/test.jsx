import { useState } from "react"

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false)

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  })

  function handleClick(e) {
    e.preventDefault()
    setIsEditing(!isEditing)
  }

  function handleChange(e) {
    if (e.target.name === "firstname") {
      setFormData({
        ...formData,
        firstname: e.target.value,
      })
    } else {
      setFormData({
        ...formData,
        lastname: e.target.value,
      })
    }
  }

  return (
    <form>
      <label>
        First name: <b>{formData.firstname}</b>
        <input name="firstname" onChange={handleChange} />
      </label>
      <label>
        Last name: <b>{formData.lastname}</b>
        <input name="lastname" onChange={handleChange} />
      </label>
      <button type="submit" onClick={handleClick}>
        Edit Profile
      </button>
      <p>
        <i>Hello, Jane Jacobs!</i>
      </p>
    </form>
  )
}
