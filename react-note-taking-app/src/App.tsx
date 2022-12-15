import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { Container } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { NewNote } from "./NewNote";
import { NoteData, RawNote, Tag } from "./types";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES ", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  
  const notesWidthTags = useMemo(() => {
    return notes.map((note) => {
      return { ...note, tags: tags.filter((tag) => note.tagIds.includes(tag.id)) };
    });
  }, [notes, tags]);

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) },
      ]
    })
  }
  const onAddTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={onAddTag} availableTags={tags}/>} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="/:id/edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/ " />} />
      </Routes>
    </Container>
  );
}

export default App;
