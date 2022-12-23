const exoplanetsTable = [
    { uniqueName: 'TRAPPIST-1-d', hClass: 'Mésoplanète', discoveryYear: 2016 },
    { uniqueName: 'KOI-1686.01', hClass: 'Mésoplanète', discoveryYear: 2011 },
    { uniqueName: 'LHS 1723 b', hClass: 'Mésoplanète', discoveryYear: 2017 },
]

module.exports.list = () => exoplanetsTable

module.exports.save = (data) => {
    if(/^[A-Z . \- 0-9]+$/.test(data.uniqueName)){
        exoplanetsTable.push(data);
        return true;
    }
    return false;
}

module.exports.search = (uniqueName) => {
    const exoplanetList = []
    for (let exoplanet of exoplanetsTable) {
        if (
            exoplanet.uniqueName
                .toUpperCase()
                .startsWith(uniqueName.toUpperCase())
        ) {
            console.log('found ' + JSON.stringify(exoplanet))
            exoplanetList.push(exoplanet)
        }
    }
    return exoplanetList
}
