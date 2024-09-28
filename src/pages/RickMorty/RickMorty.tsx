import React, {useEffect, useState} from "react";
import {getCharacters} from "../../api/characters";
import CardRickMorty from "../../components/CardRickMorty/CardRickMorty";
import styles from "../../components/CardRickMorty/CardRickMorty.module.scss";

export interface RickMorty {
    id: number;
    name: string;
    image: string;
    status: string,
    species: string;
    gender: string;
}


const RickMorty: React.FC = () => {
    const [result, setResult] = useState<RickMorty[]>([]);

    const getAllCharacters = async () => {
        const res = await getCharacters()
        setResult(res ? res.results : [])
        return res

    }

    useEffect(() => {
        getAllCharacters()
    }, []);


    return (
        <div>
            <h1 className={styles.title}>Характеристики</h1>
            <ul className={styles.card}>
                {result?.map(({id, name, image, status, species, gender}) => (
                    <CardRickMorty
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        status={status}
                        species={species}
                        gender={gender}
                    />
                ))}
            </ul>
        </div>
    );
};
export default RickMorty