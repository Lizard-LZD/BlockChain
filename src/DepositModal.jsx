// DepositModal.js
import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  FormGroup,
  Label,
  ReadOnlyInput,
  Input,
  AmountContainer,
  AssetIcon,
  TransferButton,
  CancelButton,
  StyledSelect,
} from "./StyledComponents";
import useStore from "./store";

const DepositModal = ({ name, isVisible, onClose, handleDeposit }) => {
  const [amount, setAmount] = useState("");
  const chainsState = useStore((state) => state.chains);
  const selectedChain = useStore((state) => state.selectedChain);

  const handleTransfer = () => {
    onClose();
    handleDeposit(name, amount);
  };

  if (!isVisible) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Deposit {name}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <FormGroup>
          <Label>From {selectedChain}</Label>
          <ReadOnlyInput>atom1xy5y...m6wwz9a</ReadOnlyInput>
        </FormGroup>
        <FormGroup>
          <Label>
            To
            <StyledSelect>
              <option value="">Select chain</option>
              {chainsState.map((chain, index) => (
                <option key={index} value={chain.chain_name}>
                  {chain.chain_name}
                </option>
              ))}
            </StyledSelect>
          </Label>
          <ReadOnlyInput>osmo1xy5y...w9a</ReadOnlyInput>
        </FormGroup>
        <FormGroup>
          <Label>Select amount</Label>
          <AmountContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
              <AssetIcon />
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <span>≈ ${amount * 506.5}</span>
          </AmountContainer>
        </FormGroup>
        <FormGroup>
          <Label>Estimated time: 20 seconds</Label>
        </FormGroup>
        <TransferButton onClick={handleTransfer}>Transfer</TransferButton>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DepositModal;
