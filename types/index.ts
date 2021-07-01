export interface Location {
    id: string,
    name: string,
    type: string,
    dimension: string,
    residents: {
        id: string,
        name: string,
        status: string,
        species: string,
        type: string,
        gender: string,
        origin: {
            id: string,
            name: string,
        },
        image: string,
    }
}