export const groupLokomotifStatusandTotal = (lokomotifs) => {
    const totalStatus = 10;
    let grouppedLokomotif = [];

    for(var i = 0; i < totalStatus; i++) {
        let totalLokomotif = lokomotifs.filter(lokomotif => lokomotif.status === i.toString()).length;
        let temp = {
            status: i,
            total: totalLokomotif
        }

        grouppedLokomotif.push(temp);
    }

    return grouppedLokomotif;
}