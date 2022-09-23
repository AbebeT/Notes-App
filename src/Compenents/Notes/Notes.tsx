import { ChangeEvent, useState } from "react";
import { Box, Fab, TextField, Button } from "@mui/material";
import Note, { propType } from "../Note/Note";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';

const notesList = [
    {
        id: 1,
        title: "Daily Standup",
        content: "Everyone should be ready for tomorrow's standup",
    },
    {
        id: 2,
        title: "Retro",
        content: "Reflect your opinions freely",
    },
];

const initialFormInput = {
    id: 1,
    title: "null",
    content: "null"
}

const Notes = (props: any) => {

    const [notes, setNotes] = useState(notesList);
    const [toggleAddFrom, setToggleAddForm] = useState(false);


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const listTemp = notes;
    const handleToogle = () => {
        setToggleAddForm(toggleAddFrom ? false : true);
    };
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const stateObj = {
            id: Math.random() * 10,
            title: title,
            content: content
        }
        setNotes([...notes, stateObj]);
        console.log("notes length: ", notes.length);

        props.onCounterChange(listTemp.length + 1);

        setTitle("");
        setContent("");

    };

    const handleOnDelete = (id: number) => {
        console.log("NoteId", id);
        const filteredNotes = notes.filter(note => note.id !== id);
        console.log("Notes length", filteredNotes.length);
        setNotes(filteredNotes);
        props.onCounterChange(filteredNotes.length);

    }


    const handleTitle = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);


    }
    const handleContent = (event: ChangeEvent<HTMLInputElement>): void => {
        setContent(event.target.value);

    }

    return (
        <div>

            {toggleAddFrom ? (


                <Box
                    component="form"
                    autoComplete="off"
                    onSubmit={handleFormSubmit}
                    sx={{
                        minWidth: "500px",
                        backgroundColor: "white",
                        padding: "16px",
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                    }}
                >
                    <Box>
                        <Fab color="secondary" data-testid="add-icon" onClick={handleToogle}>
                            <CloseIcon />
                        </Fab>
                    </Box>
                    <TextField
                        id="note-title"
                        name="title"
                        label="Title"
                        type="string"
                        value={title}
                        inputProps={{ "data-testid": "item-name" }}
                        onChange={handleTitle}
                        sx={{
                            mb: 3,
                        }}
                    />
                    <TextField
                        id="content"
                        name="content"
                        label="Content"
                        value={content}
                        type="string"
                        inputProps={{ "data-testid": "ledgerType" }}
                        onChange={handleContent}
                        sx={{
                            mb: 3,
                        }}
                    />
                    {/* {alertMessage} */}

                    <Button
                        variant="contained"
                        type="submit"
                        data-testid="submit-btn"
                        // onClick={handleOnAdd}
                        sx={{ mb: 3 }}
                    >
                        Submit
                    </Button>
                </Box>
            ) : (
                <Box>
                    <Fab color="primary" data-testid="add-icon" onClick={handleToogle}>
                        <AddIcon />
                    </Fab>
                </Box>
            )}

            <Box>
                {listTemp?.map((note: any) => (
                    <Note key={note.id} id={note.id} content={note.content} title={note.title} onDelete={handleOnDelete} />
                ))}
            </Box>
        </div>
    );
};

export default Notes;
