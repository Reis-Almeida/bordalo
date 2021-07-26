/** @jsx jsx */
import { jsx } from 'theme-ui';

import { FC } from 'react';
import { ITeamCard } from "interfaces";

import MissingImage from "../../public/images/missing-image.png"; 

import Link from "next/link"
import Section from "src/styles/Section.module.css";

const TeamCard : FC<ITeamCard> = ({ image, name, description, code }) => {

    return (
        <Link href={{
            pathname: "/employee",
            query: { code }
        }}>
            <a className={Section.teamCardOpacity}>
                <div className={Section.teamCard}>
                    {image && (
                        <div className={Section.teamImage}>
                            <img
                                src={image}
                                height="300"
                                alt="Funcionário"
                            />
                        </div>
                    )}
                    {!image && (
                        <div className={Section.noImage}>
                            <img
                                src={MissingImage}
                                height="300"
                                alt="Vazio"
                            />
                        </div>
                    )}
                    <div className={Section.teamCardInfo}>
                        <p>
                            <span sx={{ color: "primary" }}>
                                {name}
                            </span>
                            <span>
                                {description}
                            </span>
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default TeamCard;