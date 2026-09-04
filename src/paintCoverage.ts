export function calculatePaintCoverage(
  width: number,
  height: number,
): number {
  return width * height
}

export function estimatePaintCans(area: number, coveragePerCan: number): number {
  return Math.ceil(area / coveragePerCan)
}
