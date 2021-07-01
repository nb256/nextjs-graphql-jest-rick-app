import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getLocations from "../functions/getLocations"
import Link from 'next/link'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import { Location } from '../types'

export async function getServerSideProps(context: { query: { page: string, dimension: string, type: string } }) {
  const page = parseInt(context.query.page)
  const dimension = context.query.dimension
  const type = context.query.type
  const locationsData = await getLocations({ page, filter: { type, dimension } })

  // see https://vercel.com/docs/environment-variables for vercel environment variables
  const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_BASE_URL

  const dimensionsAndTypesData = await fetch(`${NEXT_PUBLIC_BASE_URL}/api/getDimensionsAndTypes`)
  const dimensionsAndTypesJsonData = await dimensionsAndTypesData.json()
  return {
    props: {
      locations: locationsData?.locations?.results,
      pages: locationsData?.locations?.info.pages,
      types: dimensionsAndTypesJsonData.types,
      dimensions: dimensionsAndTypesJsonData.dimensions,
    },
  };
}

interface HomeProps {
  locations: [Location],
  pages: number,
  types: [string],
  dimensions: [string],
}

export default function Home({ locations, pages, types, dimensions }: HomeProps) {
  const router = useRouter()
  const [selectedType, setSelectedType] = useState<string>(router.query.type as string || "");
  const [selectedDimension, setSelectedDimension] = useState<string>(router.query.dimension as string || "");
  const [selectedPage, setSelectedPage] = useState<number>(parseInt(router.query.page as string) || 0);

  useEffect(() => {
    router.push({
      pathname: '/',
      query: {
        page: selectedPage,
        type: selectedType,
        dimension: selectedDimension
      },
    })

  }, [selectedType, selectedDimension, selectedPage])

  return (
    <div className={styles.container}>
      <Head>
        <title>Locations of Rick and Morty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className={styles.main}>
        <h1 className={styles.title}>
          Rick and Morty Locations
        </h1>

        <div className={styles.inputContainer}>
          <FormControl style={{ width: "250px", margin: "20px" }}>
            <InputLabel id="types-selection-label">Filter by Types</InputLabel>
            <Select
              labelId="types-selection-label"
              id="types-selection"
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value as string)}
              input={<Input />}
            >
              {["", ...types].map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl style={{ width: "250px", margin: "20px" }}>
            <InputLabel id="dimensions-selection-label">Filter by Dimensions</InputLabel>
            <Select
              labelId="dimensions-selection-label"
              id="dimensions-selection"
              value={selectedDimension}
              onChange={(event) => setSelectedDimension(event.target.value as string)}
              input={<Input />}
            >
              {["", ...dimensions].map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>



        <div className={styles.grid}>
          {locations?.map(location =>
            <Link key={location.id} href={`/location/${location.id}`}>
              <a className={styles.card}>
                <h2>{location.name}</h2>
                <p><b>dimension: </b>{location.dimension}</p>
                <p><b>type: </b>{location.type}</p>
              </a></Link>)}
        </div>
        <div className={styles.paginationContainer}>
          {Array.from({ length: pages }, (_, i) => i + 1).map(page =>
            page === selectedPage ? <span key={page} className={styles.selectedPaginationItem} onClick={() => setSelectedPage(page)}>
              <a>{page}</a>
            </span> :
              <span key={page} className={styles.paginationItem} onClick={() => setSelectedPage(page)}>
                <a>{page}</a>
              </span>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div >
  )
}
