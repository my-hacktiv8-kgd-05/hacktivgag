class Helper {
    static convertPublished(date) {
        // * Get Current Date
        const currentDate = new Date()
        const currHour = currentDate.getHours()
        const currMinute = currentDate.getMinutes()

        // * Get Date from data
        const dataHour = date.getHours()
        const dataMinute = date.getMinutes()
        
        // * Under 1 hour
        const minutes = currMinute - dataMinute // currMinute = 35, dataMinute = 20 (35, 20) || 15 Minutes ago

        // * 1 hour or more
        const hours = currHour - dataHour // currHour = 11, datahour = 10 (11, 10) || 1 Hours ago
        
        if (hours > 0) {
            return `${hours} hours ago` // Get hours in same day
        } else {
            return `${minutes} minutes ago` // Get minutes in same hour
        }
    }
}

module.exports = Helper