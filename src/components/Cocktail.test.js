import React from "react"
import ReactDOM from "react-dom"
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event"
import Cocktail from "./Cocktail"
import App from "../App";



// test('on initial render, the pay button is disabled', async () => {
//     render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>);    

//     // screen.debug();
//     // screen.getByRole('')

//     expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled()
// })

// test('if an amount and note is entered, the paid button becomes enabled', async () => {
//     render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>);    

//     userEvent.type(screen.getByPlaceholderText(/amount/i), '50')
//     userEvent.type(screen.getByPlaceholderText(/add a note/i), 'dinner')

//     expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled()
// })

describe('Home Page Drink Card', () => {

    it('renders image', async () => {
        const div = document.createElement("div")
        ReactDOM.render(
            <Router>
              <App />
            </Router>,
            div
              );
              ReactDOM.unmountComponentAtNode(div);    

    })

    it('renders button correctly', async () => {
        const div = document.createElement("div")
        render(<Cocktail/>, div);    

    })

})
