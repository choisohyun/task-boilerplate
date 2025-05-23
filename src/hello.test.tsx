import { render, screen } from '@testing-library/react';
import { Hello } from "./hello.tsx";

describe('Hello component', () => {
    it('renders greeting message', () => {
        render(<Hello name="춘식이" />);
        expect(screen.getByText('Hello, 춘식이!')).toBeInTheDocument();
    });
});
