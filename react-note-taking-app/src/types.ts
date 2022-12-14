export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

export type RawNotes = {
  id: string;
};
export type RawNotesData = {
  title: string;
  markdown: string;
  tagIds: string;
};
