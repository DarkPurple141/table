/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { css } from '@emotion/react';

const padding = css({ padding: '4px 8px'})

const Cell: FC = props => <td css={padding} {...props}/>

export default Cell