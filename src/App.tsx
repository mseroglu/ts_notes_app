import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Home"
import Create from "./pages/Create"
import Detail from "./pages/Detail"
import Edit from "./pages/Edit"
import { useLocalStorage } from "@uidotdev/usehooks"
import { Note, NoteData, Tag } from "./types_"
import { v4 } from "uuid"
import Layout from "./components/Layout"


const App = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  // etiket oluşturma
  const createTag = (tag: Tag): void => {
    setTags([...tags, tag])
  }

  // note oluşturma
  const createNote = (noteData: NoteData): void => {
    // formdan gelen veriye id ekleme
    const newNote = {
      id: v4(),
      ...noteData
    }
    setNotes([...notes, newNote])
  }
  // note silme
  const delNote = (id: string): void => {
    setNotes(notes.filter(note => note.id !== id))
  }
  // note güncelleme
  const updateNote = (id:string, updatedData: NoteData): void => {
    const updatedNote ={...updatedData, id} 
    setNotes(notes.map(note => note.id === id ? updatedNote : note))
  }


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main notes={notes} availableTags={tags} />} />
          <Route path="/new"
            element={<Create handleSubmit={createNote} createTag={createTag} availableTags={tags} />} />


          <Route path="/note/:id" element={<Layout notes={notes} />} >
            <Route index element={<Detail delNote={delNote} />} />
            <Route path="edit" element={
              <Edit 
              handleSubmit={updateNote}
              createTag={createTag}
              availableTags={tags} />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
