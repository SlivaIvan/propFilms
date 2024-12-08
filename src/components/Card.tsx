import { IFilms } from "../models";
import { Button } from "./button";
import { ButtonLink } from "./buttonLink";
import { Like } from "./Like";
import { Share } from "./share";
import { Stars } from "./Stars";

export function Card ({ film }: filmsProps){
    return (
        <div className="card__wrap">
            <div className="wrap1" >
                <div className="img__wrp">
                    <img className="img" src={film.link} alt={film.title} />
                    <div className="labels">{film.labels}</div>
                </div>
            </div>
            <div className="wrap2 content__wrp">
                <h1 className="title">{film.title}</h1>
                <div className="stars">{<Stars count={4}/>}</div>
                <div className="btn__group">
                <Button price={film.price}/>
                <ButtonLink link="#" text="Подробнее→"/>
                </div>
                
            </div>
            <div className="wrap3 wrp__ctx">
                <div className="wraps">
                    <div className="like">{<Like/>}</div>
                    <div className="share">{<Share/>}</div>
                </div>
            </div>
        </div>
    )

}

interface filmsProps {
    film: IFilms
}