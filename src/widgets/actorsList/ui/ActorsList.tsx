import {useFetching} from "@/shared/hooks";
import {ActorCard, getMovieCredits, IActor, IMovieCredits} from "@/entities/credits";
import {SliderWithButtons} from "@/shared/ui";
import styles from './ActorsList.module.css'
interface ActorsListProps{
    id:string | undefined
}
export const ActorsList = ({id}:ActorsListProps) => {
    const {data} = useFetching<IMovieCredits>(async () =>
        await getMovieCredits(id)
    )
    return (
        <div className={styles.actors__list__wrapper}>
            <h3>Lead Roles</h3>
            {data && data.cast &&  <SliderWithButtons slides={data.cast.map((actor : IActor) =>
                <ActorCard image_path={actor.profile_path} original_name={actor.original_name} character_name={actor.character}/>
            )} slidesToShow={6} slidesToScroll={5}/>}
        </div>
    );
};

