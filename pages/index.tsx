import type { NextPage } from 'next'
import Head from 'next/head'
import { Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sanity Amazona</title>
        <meta
          name="description"
          content="The ecommerce website by next and sanity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        Sanity Amazona
      </Typography>
    </div>
  )
}

export default Home
