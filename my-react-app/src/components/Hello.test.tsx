import { render, screen } from '@testing-library/react';
import Hello from './Hello';


test('affiche le nom passé en props', () => {
    render(<Hello name="Arnaud" />);
    expect(screen.getByText(/Hello Arnaud/i)).toBeInTheDocument();
});


function add(a: number, b: number): number {
    return a + b
}

// Bloc de tests
describe('fonction add()', () => {

    it('additionne correctement deux nombres positifs', () => {
        expect(add(2, 3)).toBe(5)
    })

    it('additionne un nombre négatif et un positif', () => {
        expect(add(-4, 7)).toBe(3)
    })

    it('additionne deux zéros', () => {
        expect(add(0, 0)).toBe(0)
    })


})
