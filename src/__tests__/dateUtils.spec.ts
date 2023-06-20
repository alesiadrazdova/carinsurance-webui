import { describe, it, expect, vi } from 'vitest'
import { formatDate } from '../dateUtils'

describe('dateUtils', () => {
    it('should correctly format date', () => {
    const date = new Date(2023, 5, 17)
    expect(formatDate(date)).toBe('06/17/2023')
    })

    it('should return "N/A" for undefined date', () => {
        expect(formatDate(undefined)).toBeNull()
    })

    it('should return "Invalid date" for incorrect date', () => {
    expect(formatDate('incorrect date')).toBeNull()
    })
})
