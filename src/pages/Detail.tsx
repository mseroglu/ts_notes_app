import { Link, useOutletContext } from "react-router-dom"
import { Note } from "../types_"
import { Badge, Button, Col, Row, Stack } from "react-bootstrap"
import ReactMarkdown from "react-markdown"

interface Props {
  delNote: (id: string) => void
}

const Detail = ({ delNote }:Props) => {
  // Outletten gelen props bu şekilde alınıyor
  const note = useOutletContext<Note>()


  return (
    <div className="container py-5 mx-auto">
      <Row>
        <Col>
          <h1>{note.title}</h1>

          <Stack direction="horizontal" className="gap-2 flex-wrap">
            {
              note.tags.map(tag => <Badge>{tag.label}</Badge>)
            }
          </Stack>
        </Col>

        <Col>
          <Stack direction="horizontal" gap={2}>

            <Link to="/">
              <Button variant="secondary">Geri</Button>
            </Link>

            <Link to="edit">
              <Button>Düzenle</Button>
            </Link>

            <Button onClick={()=> delNote(note.id)} variant="danger">Sil</Button>

          </Stack>
        </Col>

        {/* MarkDown Alanı */}
        <ReactMarkdown className="my-5">{note.markdown}</ReactMarkdown>


      </Row>
    </div>
  )
}

export default Detail
