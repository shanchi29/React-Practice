import React, {useEffect} from "react";
import CardRickMorty from "../../components/CardRickMorty/CardRickMorty";
import styles from "../../components/CardRickMorty/CardRickMorty.module.scss";
import {useAppDispatch, useAppSelector,} from "../../store/hook/reduxHooks";
import {getCharacters} from "../../store/slices/charactersSlice/actions";
import {
    selectCharacters, selectCharactersError,
    selectCharactersLoading
} from "../../store/selectors/selectors";

const RickMorty: React.FC = () => {
    const dispatch = useAppDispatch();
    const characters = useAppSelector(selectCharacters);
    const loading = useAppSelector(selectCharactersLoading);
    const error = useAppSelector(selectCharactersError);

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);

    if (loading) {
        return <div>Загрузка...</div>;
    }
    if (error) {
        return <div>Ошибка загрузки</div>;
    }

    return (
        <div>
            <h1 className={styles.title}>Характеристики</h1>
            <ul className={styles.card}>
                {characters?.map(({id, name, image, status, species, gender}) => (
                    <CardRickMorty
                        key={id}
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