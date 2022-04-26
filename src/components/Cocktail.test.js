import React from "react"
import ReactDOM from "react-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Cocktail from "./Cocktail"



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
        render(<Cocktail image={{id: '5'}} name={{id: '5'}} id={{id: '5'}} info={{id: '5'}} glass={{id: '5'}}/>);    
    
        expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled()
    
        userEvent.type(screen.getByPlaceholderText(/amount/i), '50')
        userEvent.type(screen.getByPlaceholderText(/add a note/i), 'dinner')
    
        expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled()
    })

})
