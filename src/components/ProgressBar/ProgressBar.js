/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
	let Component

	if (size === 'small') {
		Component = SmallProgressBar
	} else if (size === 'medium') {
		Component = MediumProgressBar
	} else {
		Component = LargeProgressBar
	}
	return (
		<Component value={value}>
			<VisuallyHidden>{value}%</VisuallyHidden>
			<BarWrapper>
				<Bar value={value} size={size} />
			</BarWrapper>
		</Component>
	)
}

const Base = styled.div.attrs((props) => ({
	role: 'progressbar',
	'aria-valuenow': props.value,
	'aria-valuemin': '0',
	'aria-valuemax': '100',
}))`
	background-color: ${COLORS.gray50};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray15};
	border-radius: 4px;
`

const BarWrapper = styled.div`
	/* Trim off corners when progress bar is near full */
	overflow: hidden;
	width: 100%;
	height: 100%;
	border-radius: 4px;
`

const Bar = styled.div`
	height: 100%;
	width: ${(props) => props.value + '%'};
	background-color: ${COLORS.primary};
`

const SmallProgressBar = styled(Base)`
	height: 8px;
`

const MediumProgressBar = styled(Base)`
	height: 12px;
`

const LargeProgressBar = styled(Base)`
	height: 24px;
	padding: 4px;
	border-radius: 8px;
`

export default ProgressBar;
