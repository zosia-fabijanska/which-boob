export const FINISH_FEED = 'FINISH_FEED';

export function finishFeed(date, leftTime, rightTime) {
    return {
        type: FINISH_FEED,
        payload: {
            date: date,
            leftTime: leftTime,
            rightTime: rightTime,
        }
    };
}