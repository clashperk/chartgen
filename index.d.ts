declare module '@clashperk/quickchart' {
	export function render(
		width: number,
		height: number,
		backgroundColor: string,
		devicePixelRatio: number,
		chart: any,
		branding: boolean
	): Promise<Buffer>
}
