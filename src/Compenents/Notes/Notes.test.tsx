import { screen, render, RenderResult, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import Notes from "./Notes";

const notesList = [
    {
        id: 1,
        title: "Sample Note 1",
        content: "This a sample note",
    },
    {
        id: 2,
        title: "Sample Note 2",
        content: "This a sample note 2",
    },
];


describe("Notes", () => {

    
    test("should render notes", async () => {
        await act(async () => {
            render(<Notes />);

        });
        expect(screen.getByTestId(/add-icon/)).toBeInTheDocument();
        const items = screen.queryAllByTestId(/note-item/);
        
        expect(items.length).toEqual(2);
        console.log(items[0]);
       
        
    });
});