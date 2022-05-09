import { useEffect } from 'react';
import { useRecoilSnapshot } from 'recoil';

export const DebugObserver = () => {
    const snapshot = useRecoilSnapshot();

    useEffect(() => {
        console.log("%cThe following atoms were modified:", "color:#ff9900");
        for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
            console.debug(node.key, snapshot.getLoadable(node));
        }
    }, [snapshot]);

    return null;
};
