// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../App'
import TeamPage from '../components/TeamPage'
import TeamTable from '../components/TeamTable'
import TeamRow from '../components/TeamRow'

test('loads and displays greeting', async () => {
  render(<TeamTable/>);

  fireEvent.click(screen.getByText('Load Greeting'))

  await screen.findByRole('heading')

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})

test('verify team page load', async () => {
  render(<TeamPage/>);

  await screen.findByRole('gridcell')
})

test('verify team table load', async () => {
  render(<TeamTable/>);

  expect(screen.getByText('Hawks').textContent).toBe('Hawks');
});

test('verify team row load', async () => {
  render(<TeamRow/>);

  await screen.findByRole('gridcell')
})

test('check for valid team row data', async () => {
  render(<TeamRow/>);

  const teamrowcell = await screen.findByRole('gridcell')

  expect(teamrowcell.textContent).toBe('Hawks')
})

test('check for team table change on pagination click', async () => {
  render(<TeamPage/>);

  const paginationNextButton = screen.getByText('Next');

  fireEvent.click(paginationNextButton);
  fireEvent.click(paginationNextButton);
  expect(paginationNextButton).toBeDisabled()
})

test('check search debounce and filter', async () => {
  render(<App/>);
  const input = await screen.findByPlaceholderText('Search teams');
  fireEvent.change(input, {target: {value: 'Celtics'}});
  
  expect(screen.getByText('Celtics').textContent).toEqual('Celtics');
})

test('check sidebar pop out on team row click', async () => {
  render(<App/>);
  fireEvent.click(screen.getByText('Thunder'));
  await screen.findByRole('dialog');
})