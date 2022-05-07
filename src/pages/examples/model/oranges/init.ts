import { orange } from 'shared/constants';
import { addOranges, deleteOrange, reset } from './events';
import { $oranges } from './stores';

$oranges
    .on(addOranges, (oranges, amount) => oranges.concat(Array(amount || 1).fill(orange)))
    .on(deleteOrange, (oranges) => oranges.slice(1))
    .reset(reset);

// sample({
//     clock: addOrangeAsNowAmountApples,
//     source: applesModel.stores.$apples.map(({ length }) => length),
//     target: addOranges,
// });
