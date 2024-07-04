# React + Vite

To start this project
npm init
npm install
npm run dev

UI Components
 Integrate and render the asset-list component as shown in the storybook — which should display the asset list.
 Implement an "Add Asset" button that, when clicked, opens a modal or another UI element of your choice.
 The modal (or popover or other) should render the ComboBox component, allowing the user to select an asset to add. Reference for the ComboBox implementation can be found in the Cosmology Storybook.
 The state.selectedChain, e.g., osmosis should determine which set of assets can show up in the list of assets.
 Upon selecting an asset from the ComboBox, the asset list should update to include the chosen asset. Likely should have a submit button to confirm.
 When the deposit button is clicked, open a modal as follows(Static component. No need to add functionalities): deposit
 Not required, but if that was simple for you, consider adding the following: A layout, a menu, or some organization
