// etiket tipi
export interface Tag {
    label: string,
    value: string
}

// formdan akınacak olan note veri tipi
export interface NoteData {
    title: string,
    tags: Tag[],
    markdown: string,

}

// state e kayıt edilecek note veri tipi  
// burda type larda miras almayı görüyoruz
export type Note = { id: string } & NoteData


// bir kullanım örneği
const ornek: Note = {
    id: "123",
    title: "note-1",
    tags: [{
        label: "tag-1",
        value: "tag-1"
    }],
    markdown: ""
}