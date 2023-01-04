import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import flowersData from 'data/flowers.json';

import styles from './styles.module.css';

interface Flower {
    id: string;
    name: string;
    description: string;
    image: string;
}

interface Props {
    flowers: Flower[];
}

function Home(props: Props) {
    const {
        flowers,
    } = props;

    return (
        <div className={styles.page}>
            <Head>
                <title>
                    Home
                </title>
            </Head>
            <div className={styles.navbar}>
                <h2>
                    Flowers
                </h2>
            </div>
            <div className={styles.mainContent}>
                {flowers.map((flower) => (
                    <div
                        key={flower.id}
                        className={styles.card}
                    >
                        <div className={styles.imageContainer}>
                            <Image
                                className={styles.flowerImage}
                                alt={flower.name}
                                src={flower.image}
                                fill
                            />
                        </div>
                        <h2>
                            {flower.name}
                        </h2>
                        <div>
                            {flower.description}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.footer}>
                Made with 💜 and ☕
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const flowers = flowersData as Flower[];
    return {
        props: {
            flowers,
        },
    };
};

export default Home;
