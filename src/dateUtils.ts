export const formatDate = (date: string | number | Date | undefined) => {
  if (date === undefined) return 'N/A'

    const parsedDate = new Date(date)

  if (isNaN(parsedDate.getTime())) return 'Invalid date'

  const formatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  return formatter.format(parsedDate)
}
