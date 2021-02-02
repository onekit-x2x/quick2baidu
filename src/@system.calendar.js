/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {


  insert(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_title = quick_object.title
    const quick_startDate = quick_object.startDate
    const quick_endDate = quick_object.endDate
    const quick_remindMinutes = quick_object.remindMinutes || [10]
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.addEventOnCalendar({
        title: quick_title,
        startTime: quick_startDate,
        endTime: quick_endDate,
        remindMinutesBefore: quick_remindMinutes[0],
        success: (swan_res) => {
          const quick_res = {
            eventId: swan_res.eventId,
            errMsg: 'addEventOnCalendar: ok'
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },


}
