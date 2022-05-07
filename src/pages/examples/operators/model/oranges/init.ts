import { orange } from 'shared/constants';
import { addOranges, deleteOrange, divideByTwo, reset } from './events';
import { $oranges } from './stores';

$oranges
    .on(addOranges, (oranges, amount) => oranges.concat(Array(amount || 1).fill(orange)))
    .on(deleteOrange, (oranges) => oranges.slice(1))
    .on(divideByTwo, (oranges) => oranges.slice(oranges.length / 2))
    .reset(reset);

// sample({
//     clock: addOrangeAsNowAmountApples,
//     source: applesModel.stores.$apples.map(({ length }) => length),
//     target: addOranges,
// });

// guard({
//     clock: $oranges,
//     filter: $oranges.map(({ length }) => length === 10),
//     target: divideByTwo,
// });
