export const buy = (cd: { stockCount: number }, quantity: number) => {
  return {...cd, stockCount: cd.stockCount - quantity};
}
