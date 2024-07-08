import { useOutletContext } from "react-router-dom"
import CustomForm from "../components/Form"
import { Note, NoteData, Tag } from "../types_"

interface Props {
  handleSubmit: (id: string, updatedData: NoteData) => void,
  availableTags: Tag[],
  createTag: (tag: Tag) => void
}

const Edit = ({ handleSubmit, createTag, availableTags }: Props) => {
  // kapsayıcı bileşen Outlet ten gönderilen propsu alır
  const note = useOutletContext<Note>()

  return (
    <div className="container py-5">
      <h2>Notu Düzenle</h2>

      <CustomForm
        handleSubmit={(updatedData) => handleSubmit(note.id, updatedData)}
        createTag={createTag}
        availableTags={availableTags}
        markdown={note.markdown}
        title={note.title}
        tags={note.tags}
         />
    </div>
  )
}

export default Edit
