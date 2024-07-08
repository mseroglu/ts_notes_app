import { Badge, Card, Stack } from "react-bootstrap"
import { Note } from "../../types_"
import styles from "./card.module.css"
import { useNavigate } from "react-router-dom"

interface Props {
    note: Note,
}

const NoteCard = ({ note }: Props) => {
    const navigate = useNavigate()

    return (
        <Card onClick={()=> navigate("/note/"+note.id)} className={styles.note_card}>
            <Card.Body className={styles.background}>
                <Stack className="align-items-center gap-2 h-100 justify-content-between " >
                    
                    <span className="fw-bold text-nowrap">{note.title}</span>

                    <Stack direction="horizontal" className="justify-content-center gap-2">
                        {note.tags.map(tag => (
                            <Badge key={tag.value} className="fw-bold">{tag.label}</Badge>
                        ))
                        }
                    </Stack>

                </Stack>
            </Card.Body>
        </Card>
    )
}

export default NoteCard
