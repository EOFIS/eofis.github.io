import React from "react";
import { Linkedin } from "./LinkedIn";
import style from "./PersonList.module.sass";

export const PersonList: React.FC<{
    people: Array<{
        imageSrc: string;
        name: string;
        position: string;
        description: string;
        linkedInURL?: string;
    }>;
}> = ({ people }) => {
    return <div className={style.personList}>
        {people.map((p, pi) => <div className={style.personListItem} key={pi}>
            <img src={p.imageSrc} />
            <div className={style.textContainer}>
            <h2>{p.name}</h2>
                <h4>{p.position}</h4>
                <div className={style.description}>
                    {p.description.split('\n').map((d, di) => <p key={di}>{d}</p>)}
                </div>
                {
                    p.linkedInURL &&
                    <div className={style.socials}>
                    </div>
                }
                <span className={style.socialBanner}>
                    {p.linkedInURL && <Linkedin url={p.linkedInURL} name={p.name} />}
                </span>
            </div>
        </div>
        )}
    </div>
}