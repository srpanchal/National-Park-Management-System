const url = 'http://50.18.241.42/';

export const APIConstants = {
    getCampingDetails: `${url}activity?camping=true`,
    getTours: `${url}activity?tour=true`,
    getHikes: `${url}activity?hiking=true`,
    bookActivity: `${url}booking`,
    getTouristBookingDetails: `${url}booking`,
    getSpaciesDetails: `${url}animals`,
    deleteSpecies: `${url}animals`
};