import { apple } from 'shared/constants';
import { addApple, deleteApple, reset } from './events';
import { $apples } from './stores';

$apples
    .on(addApple, (apples) => apples.concat([apple]))
    .on(deleteApple, (apples) => apples.slice(1))
    .reset(reset);

// const addGuardApple = guard({
//     clock: addApple,
//     source: addApple,
//     filter: orangesModel.stores.$oranges.map(({ length }) => length % 2 === 0),
// });

// forward({
//     from: addAppleAndOrange,
//     to: [addApple, orangesModel.events.addOranges],
// });
