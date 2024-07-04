import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useStore from "./store";
import { assets } from "chain-registry";
import { StyledSelect } from "./StyledComponents";

const ComboboxContainer = styled.div`
  margin-bottom: 20px;
`;

const Combobox = ({ selectedChain, onChange }) => {
  //test if assets match selected chain
  // const assetList = assets.find(
  //   ({ chain_name }) => chain_name === selectedChain
  // );
  // console.log(assetList);

  const [assetOptions, setAssetOptions] = useState([]);
  const updateAssets = useStore((state) => state.updateAssets);

  useEffect(() => {
    updateAssets(selectedChain); // Update assets based on selected chain
  }, [selectedChain, updateAssets]);

  const assetsState = useStore((state) => state.assets);

  useEffect(() => {
    // Filter assets based on selected chain
    const filteredAssets = assetsState.filter(
      (asset) => asset.chain_name === selectedChain
    );
    if (filteredAssets.length > 0) {
      // console.log(filteredAssets);
      setAssetOptions(filteredAssets[0].assets); // Assuming only one filtered result
    } else {
      setAssetOptions([]); // Handle case when no assets found for the chain
    }
  }, [selectedChain, assetsState]);

  return (
    <ComboboxContainer>
      <label>
        Select Asset:
        <StyledSelect
          onChange={(e) => onChange(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Select an asset
          </option>
          {console.log(assetOptions)}
          {assetOptions.map((asset, index) => (
            <option key={index} value={asset.name}>
              {asset.display}
            </option>
          ))}
        </StyledSelect>
      </label>
    </ComboboxContainer>
  );
};

export default Combobox;
