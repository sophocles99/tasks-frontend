const getOrdinalSuffix = (day: string) => {
    const dayInt = parseInt(day);
    if (dayInt > 3 && dayInt < 21) return "th";
    switch (dayInt % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};

const dateToday = (): string => {
    const now = new Date();
    const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    const nowFormattedParts = new Intl.DateTimeFormat(
        "en-GB",
        dateTimeFormatOptions
    ).formatToParts(now);

    const nowFormatted = nowFormattedParts
        .map((part) => {
            if (part.type === "weekday") return part.value + ",";
            if (part.type === "day")
                return part.value + getOrdinalSuffix(part.value);
            return part.value;
        })
        .join("");

    return nowFormatted;
};

export default dateToday;
