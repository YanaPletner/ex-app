export const utilService = {
    formatDate
}

function formatDate(createdAt) {
    const [year, month, day] = createdAt.split("T")[0].split("-");
    return `${day}.${month}.${year}`;
}