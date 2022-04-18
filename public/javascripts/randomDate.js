// generate a random Date object between start and end time

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = randomDate;
