import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <Wrapper>
        <NativeSelect id={label} value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <Presentation>
          {displayedValue}
          <ChevronDownIcon id="chevron-down" strokeWidth={2} size={24} />
        </Presentation>
      </Wrapper>
    </>
  );
};

/**
 * The select element will have appearance none but it will sit
 * front of the Wrapper which contains the Presentational div with the styling
 * The wrapper should have position relative and this select should have
 * position absolute. With its width and height set to 100%.
 * This element will grow the size of its container.
 **/
const NativeSelect = styled.select`
  appearance: none; // or opacity zero?
  opacity: 0;
  border: none;
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Presentation = styled.div`
  top: 0;
  left: 0;
  font-size: 16px;
  height: 100%;
  background-color: ${COLORS.transparentGray15};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px 12px 16px;
  border-radius: 8px;
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 2px solid ${COLORS.primary};
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content; // this insures that also the select has a max-width
`;

const ChevronDownIcon = styled(Icon)`
  margin-left: 24px;
`;

export default Select;
