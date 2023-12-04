/* eslint-disable testing-library/no-container */
import React from "react";
import {render, cleanup, changeEvent, fireEvent} from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' 
import { UserSignupPage } from './UserSignupPage'

beforeEach(cleanup);

describe (`UserSignupPage`, () => {

    describe ('Layout', () => {
        // testing to check for a tag H1 with content as Sign Up (checking for html component)
        it('has header of sign up', () => {
            //inside this function we will rednor component
            const { container } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/no-node-access
            const header = container.querySelector('h1');
            // using Jest expect API for running assertion
            expect(header).toHaveTextContent('Sign Up');
        });

        // testing text as Your display name, on the screen (check for value, not html component)
        it('has input for display name', () => {
            const { queryByPlaceholderText } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const displayNameInput = queryByPlaceholderText('Your display name');
            expect(displayNameInput).toBeInTheDocument();
        });

        // testing text as Your username, on the screen
        it('has input for username', () => {
            const { queryByPlaceholderText } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const userameInput = queryByPlaceholderText('Your username');
            expect(userameInput).toBeInTheDocument();
        });

        // testing text as Your password, on the screen
        it('has input for password', () => {
            const { queryByPlaceholderText } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput).toBeInTheDocument();
        });

        // testing text as Your password, with type as password on the screen
        it('has password type for password input', () => {
            const { queryByPlaceholderText } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput.type).toBe('password');
        });

        // testing text as Repeat your password, on the screen
        it('has input for password repeat', () => {
            const { queryByPlaceholderText } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const passwordRepeat = queryByPlaceholderText('Repeat your password');
            expect(passwordRepeat).toBeInTheDocument();
        });

        // testing text as Repeat your password, with type as password on the screen
        it('has password type for password repeat input', () => {
            const { queryByPlaceholderText } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const passwordInput = queryByPlaceholderText('Repeat your password');
            expect(passwordInput.type).toBe('password');
        });

        // testing for submit button
        it('has submit button', () => {
            const { container } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/no-node-access
            const button = container.querySelector('button');
            expect(button).toBeInTheDocument();
        });
    })

    // 2nd set of test for user interactions
    describe ('Interactions', () => {

        // creating a change event function for dyanmic value
        const changeEvent = (content) => {
            return {
                target: {
                    value: content
                }
            }
        };

        // test for change in display user display name state (input value)
        it("sets the displayName value into state", () => {
            const { queryByPlaceholderText } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const displayNameInput = queryByPlaceholderText('Your display name');

            fireEvent.change(displayNameInput, changeEvent('my-display-name'))
            expect(displayNameInput).toHaveValue('my-display-name');
        });

        // test for user name state change
        it("sets the userName value into state", () => {
            const { queryByPlaceholderText } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const usernameInput = queryByPlaceholderText('Your username');

            fireEvent.change(usernameInput, changeEvent('my-user-name'))
            expect(usernameInput).toHaveValue('my-user-name');
        });

        // test for password state change
        it("sets the password value into state", () => {
            const { queryByPlaceholderText } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const passwordInput = queryByPlaceholderText('Your password');

            fireEvent.change(passwordInput, changeEvent('P4ssword'))
            expect(passwordInput).toHaveValue('P4ssword');
        });

        // test for password repeat state change
        it("sets the password repeat value into state", () => {
            const { queryByPlaceholderText } = render (<UserSignupPage />);
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const passwordRepeat = queryByPlaceholderText('Repeat your password');

            fireEvent.change(passwordRepeat, changeEvent('P4ssword'))
            expect(passwordRepeat).toHaveValue('P4ssword');
        });
    })
})