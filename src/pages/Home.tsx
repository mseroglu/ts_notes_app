import { Button, Col, Form, Row, Stack } from "react-bootstrap"
import { Note, Tag } from "../types_"
import { Link } from "react-router-dom"
import NoteCard from "../components/NoteCard"
import { useState } from "react"
import ReactSelect from "react-select"

interface Props {
  notes: Note[],
  availableTags: Tag[]
}


// note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())  

const Home = ({ notes, availableTags }: Props) => {
  const [title, setTitle] = useState<string>("")
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])

    // 1. başlık ve 2. etiket filtresi uygulandı
  const filteredNotes = notes.filter(note => 
    note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) &&
    selectedTags.every((s_tag) => 
      note.tags.some((noteTag) => noteTag.value === s_tag.value)
    )
  )


  return (
    <div className="container mx-auto py-5">
      <Stack direction="horizontal" className="justify-content-between">
        <h1>Notlar</h1>

        <Link to={"/new"}>
          <Button>Oluştur</Button>
        </Link>

      </Stack>

      {/* form alanı */}
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Etikete Göre Ara</Form.Label>
              <ReactSelect
                onChange={(all_tags) => setSelectedTags(all_tags as Tag[])}
                className="text-black"
                isMulti
                options={availableTags}

              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Not Listesi */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-3 mt-4">
        {filteredNotes.map(note => (
          <Col key={note.id}>
            <NoteCard note={note} />
          </Col>
        ))}
      </Row>



    </div>
  )
}

export default Home
