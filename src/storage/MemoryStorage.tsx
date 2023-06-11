import { proxy } from "valtio";

type MemoryStorageType = {
  entrance: {
    isLoading: boolean;
  };
};

export const MemoryStorage = proxy<MemoryStorageType>({
  entrance: {
    isLoading: true,
  },
});
