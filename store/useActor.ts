import client from '@graphql/client';
import { GET_ACTOR } from '@graphql/queries/actor.query';
import { Actor } from '@graphql/types';
import create from 'zustand';

type UseActor = {
  actors: Actor[];
  loading: boolean;
  setActor: () => void;
  addActor: (actor: Actor) => void;
};

const useActor = create<UseActor>((set, get) => ({
  actors: [],
  loading: false,
  setActor: async (): Promise<void> => {
    set(() => ({ loading: true }));

    try {
      const { data } = await client.query<{
        actors: Actor[];
      }>({
        query: GET_ACTOR,
        fetchPolicy: 'network-only',
      });

      set(() => ({
        actors: data.actors,
        loading: false,
      }));
    } finally {
      set(() => ({ loading: false }));
    }
  },
  addActor: (actor: Actor): void =>
    set(() => ({
      actors: [...get().actors, actor],
    })),
}));

export default useActor;
