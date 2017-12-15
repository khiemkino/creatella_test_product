export const formatCentToDolar = (cent) => {
  let num = cent / 100
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
