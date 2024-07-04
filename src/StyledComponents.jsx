import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonColor};
  border: none;
  border-radius: 5px;
`;

export const StyledDiv = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
`;

export const StyledSelect = styled.select`
  background: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.inputColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px;
  border-radius: 5px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 10px;
  }
`;

//ModalStyles

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 20px;
  border-radius: 10px;
  width: 450px;
  max-width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.color};
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const ReadOnlyInput = styled.div`
  background: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.inputColor};
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.inputColor};
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const AssetIcon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("path-to-atom-icon.png") no-repeat center center;
  background-size: cover;
  margin-right: 10px;
`;

export const TransferButton = styled.button`
  width: 100%;
  padding: 10px;
  background: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 10px;
  background: none;
  border: 1px solid ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonBackground};
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
`;
