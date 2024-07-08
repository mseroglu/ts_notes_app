import { Button, Col, Form, Row, Stack } from "react-bootstrap"
import { CreateProps } from "../../pages/Create"
import { FormEvent, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ReactSelect from "react-select/creatable"
import { Tag } from "../../types_"
import { v4 } from "uuid"
import styles from "./form.module.css"


const CustomForm = ({ handleSubmit, createTag, availableTags, markdown = "", title = "", tags = [] }: CreateProps) => {
    const navigate = useNavigate()

    const [selectedTags, setSelectedTags] = useState<Tag[]>(tags)

    // elemanlarınını referansını alma
    const titleRef = useRef<HTMLInputElement | null>(null)
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const handleSend = (e: FormEvent) => {
        e.preventDefault()
        // value leri e.target ile de alabiliriz
        // yeni notu state kaydet
        handleSubmit({
            title: titleRef.current?.value as string,
            markdown: textareaRef.current?.value as string,
            tags: selectedTags
        })

        // anasayfa yönlendir
        navigate("/")
    }

    return (
        <Form onSubmit={handleSend} className={"mt-4 " + styles.background} >
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Başlık</Form.Label>
                        <Form.Control defaultValue={title} ref={titleRef} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Etiketler</Form.Label>
                        <ReactSelect
                            options={availableTags}
                            onChange={(allTags) => setSelectedTags(allTags as Tag[])}
                            className="text-black "
                            isMulti
                            value={selectedTags}
                            onCreateOption={(text: string) => {
                                // etiket nesnesi oluştur + id
                                const newTag: Tag = {
                                    label: text,
                                    value: v4()
                                }
                                // local storage e kayıt
                                createTag(newTag)

                                // seçili etiketileri state e ekle
                                setSelectedTags([...selectedTags, newTag])
                            }} />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mt-4">
                <Form.Label>İçerik ~MarkDown Destekler~ </Form.Label>
                <Form.Control
                    defaultValue={markdown}
                    ref={textareaRef}
                    as="textarea"
                    style={{ minHeight: "200px", maxHeight: "500px" }} />
            </Form.Group>

            <Stack direction="horizontal" className="justify-content-end mt-4 gap-2">
                <Button type="submit">Kaydet</Button>
                <Link to={".."}>
                    <Button type="button" variant="secondary">Geri</Button>
                </Link>
            </Stack>
        </Form>
    )
}

export default CustomForm
