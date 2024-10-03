import React from "react";
import styles from './CardRickMorty.module.scss'


interface CardRickMortyProps {
    name: string;
    image: string;
    status: string,
    species: string;
    gender: string;
}

const CardRickMorty: React.FC<CardRickMortyProps> = ({
      name,
      image,
      status,
      species,
      gender
}) => {
    return (
        <li className={styles.list}>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>Пол: {gender}</p>
            <p>Статус: {status}</p>
            <p>Разновидность: {species}</p>
        </li>
    )
};
export default CardRickMorty