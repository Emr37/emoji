import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import emojiList from './emojiList.json'

describe("Emoji Tests", () => {
    let headerElement, emoItem, input, btn;


    beforeEach( () => {
        render(<App/>);
    });

    test('Render Header', () => {
        headerElement = screen.getByText(/emoji search/i)
        expect(headerElement).toBeInTheDocument();
    });

    test('Render Emoji List', () => {
        emoItem = emojiList.slice(0, 20);
        emoItem.map((item) => {expect(screen.getByText(item.title)).toBeInTheDocument();
        })
    });

    test('Filtered Render', () => {
        input = screen.queryByPlaceholderText('Write an emoji');
        let emo = 'hundred'
        userEvent.type(input, emo);

        let emoji = screen.getByText('100')

        expect(emoji).toBeInTheDocument()
        
    })

    test('Copy Emoji Test', () => {
        btn = screen.getByText(/100/i)
        userEvent.click(btn);
        expect(btn.parentElement.getAttribute('data-clipboard-text'))
    })



})
      
    








