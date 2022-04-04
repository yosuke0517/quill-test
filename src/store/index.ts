import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import * as MutationTypes from "./mutationTypes";

// stateの型定義
type State = { components: unknown[] };

// storeをprovide/injectするためのキー
export const key: InjectionKey<Store<State>> = Symbol();

// store本体
export const store = createStore<State>({
  state: {
    components: [],
  },
  mutations: {
    [MutationTypes.ADD_COMPONENT](state, component: unknown) {
      state.components.push(component);
    },
  },
});

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = () => {
  return baseUseStore(key);
};
