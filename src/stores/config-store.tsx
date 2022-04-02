import create, {SetState, StateCreator, StoreApi} from 'zustand';
import {devtools} from 'zustand/middleware';

interface ConfigStoreData {
	userType: 'chef' | 'user';
	setUserType: (x: 'chef' | 'user') => void;
}

let store:
	| StateCreator<ConfigStoreData, SetState<ConfigStoreData>>
	| StoreApi<ConfigStoreData> = (set: SetState<ConfigStoreData>) => ({
	userType: 'chef',
	setUserType: (x) => {
		set(() => ({userType: x}));
	}
});

store = devtools(store);

export const ConfigStore = create(store);
