import moment from 'moment'
import config from './config'

const shouldFetchData = lastFetchMoment => {
  if (!lastFetchMoment || !moment.isMoment(lastFetchMoment) || !lastFetchMoment.isValid()) {
    return true
  }
  const secondsPassed = (moment().valueOf() - lastFetchMoment.valueOf()) / 1000;
  if (secondsPassed > config.SECONDS_UNTIL_NEW_AUTOMATIC_FETCH) {
    return true;
  }
  return false;
}

export {
  shouldFetchData
}
