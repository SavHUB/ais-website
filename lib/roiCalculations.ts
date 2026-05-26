export interface ROIInput {
  monthlyVisitors: number;
  currentConversionRate: number;
  averageDealValue: number;
}

export interface ROIOutput {
  currentMonthlyRevenue: number;
  projectedMonthlyRevenue: number;
  monthlyLift: number;
  percentageLift: number;
  roiMultiplier: number;
  annualLifted: number;
}

export function calculateROI(input: ROIInput): ROIOutput {
  const { monthlyVisitors, currentConversionRate, averageDealValue } = input;

  // Current state
  const currentLeadsPerMonth = (monthlyVisitors * currentConversionRate) / 100;
  const currentMonthlyRevenue = currentLeadsPerMonth * averageDealValue;

  // Projected state with AIS
  // Conservative estimates based on case studies:
  // - Lead capture improvement: 2.5-5x (we'll use 3.5x average)
  // - Conversion rate improvement: 1.4x (better qualified leads)
  // - Deal velocity: 30% faster (not directly revenue, but reduces cycle time impact)

  const improvementMultiplier = 3.5; // Average lead volume improvement
  const projectedLeadsPerMonth = currentLeadsPerMonth * improvementMultiplier;
  const projectedMonthlyRevenue = projectedLeadsPerMonth * averageDealValue;

  const monthlyLift = projectedMonthlyRevenue - currentMonthlyRevenue;
  const percentageLift = ((monthlyLift / currentMonthlyRevenue) * 100) || 0;
  const roiMultiplier = projectedMonthlyRevenue / currentMonthlyRevenue || 0;
  const annualLifted = monthlyLift * 12;

  return {
    currentMonthlyRevenue: Math.round(currentMonthlyRevenue),
    projectedMonthlyRevenue: Math.round(projectedMonthlyRevenue),
    monthlyLift: Math.round(monthlyLift),
    percentageLift: Math.round(percentageLift),
    roiMultiplier: parseFloat(roiMultiplier.toFixed(1)),
    annualLifted: Math.round(annualLifted),
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
