import { FC, Fragment, ReactNode } from "react";
import {
	Box,
	Grid,
	Stack,
	SvgIcon,
	SvgIconProps,
	Typography,
	useTheme,
} from "@mui/material";
import Latex from "react-latex-next";

import { ASTNode, ASTNodeKind } from "ast/parser";
import { TokenKind } from "ast/lexer";

const ArrowBottomLeftTopRight: FC<
	SvgIconProps
> = (props) => {
	return (
		<SvgIcon
			sx={{
				position: "absolute",
				width: "100%",
				height: "100%",
			}}
			{...props}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				fill="none"
				viewBox="0 0 5 5"
				strokeWidth="0.1"
			>
				<line
					x1="0"
					y1="5"
					x2="5"
					y2="0"
					stroke="currentColor"
					strokeLinecap="round"
				/>
			</svg>
		</SvgIcon>
	);
};

const ArrowTopLeftBottomRight: FC<
	SvgIconProps
> = (props) => {
	return (
		<SvgIcon
			sx={{
				position: "absolute",
				width: "100%",
				height: "100%",
				...props.sx,
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				fill="none"
				viewBox="0 0 5 5"
				strokeWidth="0.1"
			>
				<line
					x1="0"
					y1="0"
					x2="5"
					y2="5"
					stroke="currentColor"
					strokeLinecap="round"
				/>
			</svg>
		</SvgIcon>
	);
};

const MOCK_NODE: ASTNode = {
	kind: ASTNodeKind.PROCESS,
	body: [
		{
			kind: TokenKind.SYMBOL,
			text: "...",
		},
	],
};

type StructogramComponentTextProps = {
	text: string;
};
const StructogramComponentText: FC<
	StructogramComponentTextProps
> = (props) => {
	const { text } = props;
	return (
		<Typography
			component="p"
			padding={1}
			paddingLeft={2}
		>
			<Latex
				delimiters={[
					{
						left: "$",
						right: "$",
						display: false,
					},
				]}
			>
				{text}
			</Latex>
		</Typography>
	);
};

type StructogramComponentProps = {
	node: ASTNode;

	borderTop?: boolean;
	borderBottom?: boolean;
	borderRight?: boolean;
	borderLeft?: boolean;
};
export const StructogramComponent: FC<
	StructogramComponentProps
> = (props) => {
	const theme = useTheme();

	const {
		node,
		borderTop,
		borderBottom,
		borderRight,
		borderLeft,
	} = props;

	const paddingSize = 1;

	const borderWidth = 3;
	const backgroundColor =
		theme.palette.background.paper;
	const borderColor = theme.palette.text.primary;

	const sx = {
		backgroundColor,
		borderColor,
		borderStyle: "solid",
		borderLeftWidth: borderLeft ? borderWidth : 0,
		borderTopWidth: borderTop ? borderWidth : 0,
		borderBottomWidth: borderBottom
			? borderWidth
			: 0,
		borderRightWidth: borderRight
			? borderWidth
			: 0,
	};

	let preparedNode: ReactNode = <Fragment />;

	if (node.kind === ASTNodeKind.LOOP_FIRST) {
		let nodeText: string = "...";
		if (node.control.length > 0) {
			nodeText = node.control
				.map((t) => t.text)
				.join(" ");
		}

		let bodyNode: ReactNode = (
			<StructogramComponent
				node={MOCK_NODE}
				borderTop
				borderLeft
			/>
		);
		if (node.body.length > 0) {
			bodyNode = (
				<Fragment>
					{node.body.map((n, index) => (
						<StructogramComponent
							key={index}
							node={n}
							borderTop
							borderLeft
						/>
					))}
				</Fragment>
			);
		}

		preparedNode = (
			<Fragment>
				<StructogramComponentText
					text={nodeText}
				/>
				<Box paddingLeft={2}>{bodyNode}</Box>
			</Fragment>
		);
	}

	if (node.kind === ASTNodeKind.LOOP_LAST) {
		let nodeText: string = "...";
		if (node.control.length > 0) {
			nodeText = node.control
				.map((t) => t.text)
				.join(" ");
		}

		let bodyNode: ReactNode = (
			<StructogramComponent
				node={MOCK_NODE}
				borderBottom
				borderLeft
			/>
		);
		if (node.body.length > 0) {
			bodyNode = (
				<Fragment>
					{node.body.map((n, index) => (
						<StructogramComponent
							key={index}
							node={n}
							borderBottom
							borderLeft
						/>
					))}
				</Fragment>
			);
		}

		preparedNode = (
			<Fragment>
				<Box paddingLeft={2}>{bodyNode}</Box>
				<StructogramComponentText
					text={nodeText}
				/>
			</Fragment>
		);
	}

	if (node.kind === ASTNodeKind.IF_ELSE) {
		let nodeText: string = "...";
		if (node.control.length > 0) {
			nodeText = node.control
				.map((t) => t.text)
				.join(" ");
		}

		let bodyIfNode: ReactNode = (
			<StructogramComponent
				node={MOCK_NODE}
				borderTop
			/>
		);
		if (node.bodyIf.length > 0) {
			bodyIfNode = node.bodyIf.map(
				(node, index) => (
					<StructogramComponent
						key={index}
						node={node}
						borderTop
					/>
				),
			);
		}
		let bodyElseNode: ReactNode = (
			<StructogramComponent
				node={MOCK_NODE}
				borderTop
			/>
		);
		if (node.bodyElse.length > 0) {
			bodyElseNode = node.bodyElse.map(
				(node, index) => (
					<StructogramComponent
						key={index}
						node={node}
						borderTop
					/>
				),
			);
		}

		preparedNode = (
			<Grid
				container
				height="100%"
				// alignItems="baseline"
			>
				<Grid
					item
					xs={12}
				>
					<StructogramComponentText
						text={nodeText}
					/>
				</Grid>
				<Grid
					item
					xs={6}
				>
					<Box
						height="100%"
						display="flex"
						alignItems="center"
						justifyContent="center"
						position="relative"
						padding={paddingSize}
					>
						<ArrowTopLeftBottomRight color="inherit" />
						<Typography
							component="p"
							sx={{
								zIndex: 1,
								backgroundColor,
							}}
						>
							True
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={6}
				>
					<Box
						height="100%"
						display="flex"
						alignItems="center"
						justifyContent="center"
						position="relative"
						padding={paddingSize}
					>
						<ArrowBottomLeftTopRight color="inherit" />
						<Typography
							component="p"
							sx={{
								zIndex: 1,
								backgroundColor,
							}}
						>
							False
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={6}
				>
					<Stack
						height="100%"
						sx={{
							borderRightWidth: borderWidth,
							borderRightStyle: "solid",
							borderRightColor: borderColor,
						}}
					>
						{bodyIfNode}
					</Stack>
				</Grid>
				<Grid
					item
					xs={6}
				>
					<Stack height="100%">
						{bodyElseNode}
					</Stack>
				</Grid>
			</Grid>
		);
	}

	if (node.kind === ASTNodeKind.PROCESS) {
		let nodeText: string = "...";
		if (node.body.length > 0) {
			nodeText = node.body
				.map((t) => t.text)
				.join(" ");
		}

		preparedNode = (
			<StructogramComponentText text={nodeText} />
		);
	}
	return (
		<Box
			height="100%"
			sx={{ ...sx }}
		>
			{preparedNode}
		</Box>
	);
};