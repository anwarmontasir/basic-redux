import { notes, NOTE_ADD, NOTE_REMOVE, NOTE_UPDATE } from './reducers';

it('Has a default of empty array', () => {
  const state = notes(undefined, {});
  expect(state).toEqual([]);
});

const noteToAdd = {
  id: 123,
  timestamp: new Date(),
  text: 'I am a note'
};

it('Adds a note', () => {
  const state = notes([], { type: NOTE_ADD, payload: noteToAdd });
  expect(state).toEqual([noteToAdd]);
});

it('Removes a note', () => {
  const state = notes([noteToAdd], { type: NOTE_REMOVE, payload: 123 });
  expect(state).toEqual([]);
});

it('Updates a note', () => {
  const updated = {
    id: 123,
    text: 'I am an updated note'
  };

  const state = notes([noteToAdd], { type: NOTE_UPDATE, payload: updated });
  expect(state).toEqual([{ ...noteToAdd, ...updated }]);
});