import * as React from 'react';
import { render,fireEvent, act } from '@testing-library/react';
import Editor from '../components/Editor';
import { ThemeProvider } from '../ThemeProvider';


let eventFactory = (value: string) => {
    return {
        target: { value }
    };
}
describe('Editor', () => {

    it('renders', () => {
        let onSave = jest.fn();
        const { container } = render(<ThemeProvider>
            <Editor onSave={onSave} />
        </ThemeProvider>);
        expect(container).toMatchSnapshot();
    });
    it.skip('calls onSave', () => {
        let onSave = jest.fn();
        const { getByLabelText, getByTitle } = render(<ThemeProvider>
                <Editor onSave={onSave} />
            </ThemeProvider>)
    
        act(() => {
            fireEvent.change(
                getByLabelText('Title'), eventFactory('title')
            );
        });

        act(() => {
            fireEvent.change(
                getByLabelText('File Name'), eventFactory('hi/roy.md')
            );
        });

        act(() => {
            fireEvent.change(
                getByLabelText('Content'), eventFactory('content')
            );
        });

        act(() => {
            fireEvent.click(
                getByTitle('Save')
            );
        });
            
        expect(onSave).toBeCalledTimes(1);
        expect(onSave).toBeCalledWith({title:'title', content:'content', filePath: 'hi/roy.md'});

            
    });
});