import { apple } from 'shared/constants';
import { addApple, deleteApple, reset } from './events';
import { $apples } from './stores';

// const addGuardApple = guard({
//     clock: addApple,
//     source: addApple,
//     filter: orangesModel.stores.$oranges.map(({ length }) => length % 2 === 0),
// });

$apples
    .on(addApple, (apples) => apples.concat([apple]))
    .on(deleteApple, (apples) => apples.slice(1))
    .reset(reset);

// forward({
//     from: addAppleAndOrange,
//     to: [addApple, orangesModel.events.addOranges],
// });
