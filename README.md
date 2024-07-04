# React + Vite

# To start this project
```
npm init
npm install
npm run dev
```

# UI Components
- Integrate and render the asset-list component as shown in the storybook — which should display the asset list.
- Implement an "Add Asset" button that, when clicked, opens a modal or another UI element of your choice.
- The modal (or popover or other) should render the ComboBox component, allowing the user to select an asset to add.
- The state.selectedChain, e.g., osmosis should determine which set of assets can show up in the list of assets.
- Upon selecting an asset from the ComboBox, the asset list should update to include the chosen asset. Likely should have a submit button to confirm.
- When the deposit button is clicked, open a modal as follows(Static component. 
- No need to add functionalities): deposit
- Not required, but if that was simple for you, consider adding the following: A layout, a menu, or some organization

# Business Logic
- Add a state management library of your choice (e.g., Zustand, MobX).
- Create a store that can addAssetList. Use Chain and AssetList types from the @chain-registry/types, and data from chain-registry
- Add a small set, 2-5 random assets from chain-registry. Choose a default chain, such as "osmosis", and store it as something like state.selectedChain.
- Implement a configurable data source adapter to support multiple data sources. Implement two data source providers as follows, and then config to use one of these potential data sources when starting the demo:
 - chain-registry
 - @chain-registry/client
