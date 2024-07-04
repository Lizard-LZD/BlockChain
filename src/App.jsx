import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  StyledButton,
  StyledDiv,
  StyledSelect,
  StyledTable,
} from "./StyledComponents";
import DepositModal from "./DepositModal";
import Combobox from "./Combobox";
import { lightTheme, darkTheme } from "./theme";
import useStore from "./store";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddAssetVisible, setIsAddAssetVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentAssetName, setCurrentAssetName] = useState(""); // Add this state

  // State selectors from zustand
  const assetsState = useStore((state) => state.assets);
  const chainsState = useStore((state) => state.chains);
  const selectedChain = useStore((state) => state.selectedChain);
  const setSelectedChain = useStore((state) => state.setSelectedChain);
  const addAsset = useStore((state) => state.addAsset);
  const assetsList = useStore((state) => state.assetsList);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAddAsset = (assetName) => {
    setIsAddAssetVisible(false);
    const existingAsset = assetsList.find((asset) => asset.name === assetName);
    if (existingAsset) {
      const confirmAdd = window.confirm(
        `${assetName} already exists. Do you want to add another?`
      );
      if (confirmAdd) {
        addAsset(assetName);
      }
    } else {
      addAsset(assetName);
    }
  };

  const handleDeposit = (assetName, amount) => {
    setIsModalVisible(false);
    console.log(`Deposit ${amount} ${assetName}`);
  };

  const openDepositModal = (assetName) => {
    setCurrentAssetName(assetName);
    setIsModalVisible(true);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StyledDiv>
        <StyledButton onClick={toggleTheme}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </StyledButton>
        <h1>Asset Manager</h1>
        <div>
          <label>
            Select Chain:
            <StyledSelect
              value={selectedChain}
              onChange={(e) => setSelectedChain(e.target.value)}
            >
              {chainsState.map((chain) => (
                <option key={chain.chain_name} value={chain.chain_name}>
                  {chain.chain_name}
                </option>
              ))}
            </StyledSelect>
          </label>
        </div>
        <StyledButton onClick={() => setIsAddAssetVisible(true)}>
          Add Asset
        </StyledButton>
        {isAddAssetVisible && (
          <div>
            <Combobox
              selectedChain={selectedChain}
              onChange={(value) => handleAddAsset(value)}
            />
          </div>
        )}
        <h2>Asset List</h2>
        <StyledTable>
          <thead>
            <tr>
              <th>Assets</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assetsList.map((asset, index) => (
              <tr key={index}>
                <td>{asset.name}</td>
                <td>{asset.balance}</td>
                <td>
                  <StyledButton onClick={() => openDepositModal(asset.name)}>
                    Deposit
                  </StyledButton>
                  {isModalVisible && currentAssetName === asset.name && (
                    <DepositModal
                      name={currentAssetName}
                      isVisible={isModalVisible}
                      onClose={() => setIsModalVisible(false)}
                      handleDeposit={handleDeposit}
                    />
                  )}
                  <StyledButton>Withdraw</StyledButton>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default App;
