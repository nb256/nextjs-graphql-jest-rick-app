// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getLocations from "../../functions/getLocations"

type Dimensions = [string]

type Types = [string]

type DimensionsAndTypes = {
    dimensions: Dimensions,
    types: Types,
}


interface Location {
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

interface LocationsData {
    locations: {
        info: {
            pages: number
        }
        results: [Location]
    }
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<DimensionsAndTypes>
) {
    const dimensions = new Set();
    const types = new Set();
    const allLocations: Location[] = [];

    const data: LocationsData = await getLocations({ page: 1 });
    const pages = data?.locations?.info.pages;

    allLocations.push(...data?.locations?.results)

    for (let i = 2; i <= pages; i++) {
        const otherLocations: LocationsData = await getLocations({ page: i })
        allLocations.push(...otherLocations?.locations?.results)
    }

    allLocations.forEach(location => {
        dimensions.add(location.dimension)
    })
    allLocations.forEach(location => {
        types.add(location.type)
    })

    res.status(200).json({ types: <[string]>Array.from(types), dimensions: <[string]>Array.from(dimensions) })
}
