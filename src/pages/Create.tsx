import CustomForm from "../components/Form"
import { NoteData, Tag } from "../types_"

export type CreateProps = {
  createTag: (tag: Tag) => void,
  handleSubmit: (noteData: NoteData) => void,
  availableTags: Tag[]
} & Partial<NoteData>
// NoteData nkın verlerini opsiyonel olarak miraz lamka için Partial kullanırız

const Create = ({ createTag, handleSubmit, availableTags }: CreateProps) => {
  return (
    <div className="container py-5">
      <h2>Yeni Not Oluştur</h2>

      <CustomForm
        handleSubmit={handleSubmit}
        createTag={createTag}
        availableTags={availableTags} />
    </div>
  )
}

export default Create
