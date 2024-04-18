const { render, screen, fireEvent } = require("@testing-library/react");
const { CounterApp } = require("../src/CounterApp");

describe("Pruebas en <CounterApp />", () => {
  const value = 0;

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot;
  });

  test('Debe mostrar el titulo en un h1 con el mensaje "CounterApp"', () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText("CounterApp")).toBeTruthy;
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "CounterApp"
    );
  });

  test('debe de mostrar el valor inicial de 0 <CounterApp value={0}>', () => {      
    render( <CounterApp value={ value } /> );
    expect( screen.getByText(0) ).toBeTruthy();
  });

  test('debe de incrementar con el botón +1', () => { 
    render(<CounterApp value={value}/>);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getAllByText('1')).toBeTruthy;
  });

  test('debe de decrementar con el botón -1', () => { 
    render(<CounterApp value={value}/>);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getAllByText('-1')).toBeTruthy;
  });

  test('debe de funcionar el botón de reset', () => {
        
    render( <CounterApp value={ value } /> );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    // fireEvent.click( screen.getByText('Reset') );
    fireEvent.click(screen.getByText('Reset'));

    expect( screen.getByText('0') ).toBeTruthy();

});

});
