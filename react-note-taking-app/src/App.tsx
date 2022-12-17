import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { Container } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { NewNote } from "./NewNote";
import { NoteData, RawNote, Tag } from "./types";
import { NoteList } from "./NoteList";
import { NoteLayout } from "./NoteLayout";
import { Note } from "./Note";
import { EditNote } from "./EditNote";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES ", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWidthTags = useMemo(() => {
    return notes.map((note) => {
      return { ...note, tags: tags.filter((tag) => note.tagIds.includes(tag.id)) };
    });
  }, [notes, tags]);

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return [...prevNotes, { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) }];
    });
  }
  const onAddTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };

  const onUpdateNote = (id: string, { tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
        } else {
          return note;
        }
      });
    });
  };

  const onDeleteNote = (id: string) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  };

  const updateTag = (id: string, label: string) => {
    setTags((prevNotes) => {
      return prevNotes.map((tags) => {
        if (tags.id === id) {
          return { ...tags, label };
        } else {
          return tags;
        }
      });
    });
  };
  const deleteTag = (id: string) => {
    setTags((prevTags) => {
      return prevTags.filter((tag) => tag.id !== id);
    });
  };
  return (
    <Container className="my-4">
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              notes={notesWidthTags}
              availableTags={tags}
              onUpdateTag={updateTag}
              onDeleteTag={deleteTag}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote onSubmit={onCreateNote} onAddTag={onAddTag} availableTags={tags} />
          }
        />
        <Route path="/:id" element={<NoteLayout notes={notesWidthTags} />}>
          <Route index element={<Note onDelete={onDeleteNote} />} />
          <Route
            path="/:id/edit"
            element={
              <EditNote
                onSubmit={onUpdateNote}
                onAddTag={onAddTag}
                availableTags={tags}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/ " />} />
      </Routes>
    </Container>
  );
}

export default App;
