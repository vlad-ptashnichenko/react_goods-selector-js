import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const resetSelectedGood = () => {
    setSelectedGood('');
  };

  const onGoodClick = good => () => {
    setSelectedGood(prevSeleted => (prevSeleted === good ? '' : good));
  };

  return (
    <main className="section container">
      {selectedGood.length === 0 ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={resetSelectedGood}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn({
                'has-background-success-light': selectedGood === good,
              })}
              key={good}
            >
              <td>
                {selectedGood === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={onGoodClick(good)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={onGoodClick(good)}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};