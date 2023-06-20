export const formatDate = (date: string | number | Date | undefined) => {
  if (date === undefined) return null

    const parsedDate = new Date(date)

  if (isNaN(parsedDate.getTime())) return null

  const formatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  return formatter.format(parsedDate)
}
