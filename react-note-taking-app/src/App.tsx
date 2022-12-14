import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { NewNote } from "./NewNote";
import { RawNotes, Tag } from "./types";
  
function App() {
  const [notes, setNotes] = useLocalStorage<RawNotes[]>('NOTES ', [])
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', [])
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
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
