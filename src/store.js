import create from "zustand";
import { devtools } from "zustand/middleware";
import { chains, assets } from "chain-registry";

const useStore = create(
  devtools((set) => ({
    selectedChain: "osmosis",
    setSelectedChain: (chain) => set({ selectedChain: chain }),
    chains: chains,
    assets: assets.filter((asset) => asset.chain_name === "osmosis"), // Initial filtering by chain
    assetsList: [], // Initialize empty assets list
    addAsset: (assetName) =>
      set((state) => {
        const existingAsset = state.assetsList.find(
          (asset) => asset.name === assetName
        );
        if (existingAsset) {
          return {
            assetsList: state.assetsList.map((asset) =>
              asset.name === assetName
                ? { ...asset, balance: asset.balance + 1 }
                : asset
            ),
          };
        } else {
          return {
            assetsList: [...state.assetsList, { name: assetName, balance: 1 }],
          };
        }
      }),
    updateAssets: (chainName) =>
      set((state) => ({
        assets: assets.filter((asset) => asset.chain_name === chainName),
      })),
  }))
);

export default useStore;
