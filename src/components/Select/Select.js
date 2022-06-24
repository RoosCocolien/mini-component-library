import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children)

	return (
		<>
			<Wrapper>
				<NativeSelect id={label} value={value} onChange={onChange}>
					{children}
				</NativeSelect>
				<Presentation>
					{displayedValue}
					<ChevronDownIcon id='chevron-down' strokeWidth={2} size={24} />
				</Presentation>
			</Wrapper>
		</>
	)
}

const NativeSelect = styled.select`
	appearance: none;
	opacity: 0;
	border: none;
	position: absolute;
	cursor: pointer;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
`

const Presentation = styled.div`
	top: 0;
	left: 0;
	font-size: 16px;
	height: 100%;
	background-color: ${COLORS.transparentGray15};
	display: inline-flex;
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
`

const Wrapper = styled.p`
	position: relative;
	display: inline-flex;
`

const ChevronDownIcon = styled(Icon)`
	margin-left: 24px;
`

export default Select;
