import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import getLocationDetails from "../../functions/getLocationDetails"
import getLocations from "../../functions/getLocations"
import { Location } from '../../types'
import ResidentCard from '../../components/ResidentCard'
import LocationStats from '../../components/LocationStats'


export async function getStaticPaths() {
    const data = await getLocations({ page: 1 })

    const paths = Array.from({ length: data?.locations?.info.count }, (_, i) => i + 1).map(id => `/location/${id}`)
    return { paths, fallback: true };
}

export async function getStaticProps(context: { params: { id: string } }) {
    const data = await getLocationDetails({ id: context.params.id });
    return {
        props: {
            location: data?.locationsByIds[0],
        },
    }
}

interface LocationDetailsProps {
    location: Location,
}

export default function LocationDetails({ location }: LocationDetailsProps) {
    if (!location) {
        return <div>Location is not found.</div>;
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>{location.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2>{location.name}</h2>
            <p><b>Dimension:</b>{location.dimension}</p>
            <p><b>Type:</b>{location.type}</p>
            <LocationStats location={location} />
            <br />
            <br />
            <h3>Residents:</h3>
            <div className={styles.grid}>
                {location?.residents?.map(resident => <ResidentCard key={resident.id} {...resident} />)}
            </div>
        </div>
    )
}
