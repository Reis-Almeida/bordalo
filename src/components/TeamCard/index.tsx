import { FC } from 'react';
import { ITeamCard } from "interfaces";

import Link from "next/link"
import { TeamCardOpacity } from './style';

const TeamCard : FC<ITeamCard> = ({ image, name, description, code }) => {

    return (
        <Link href={{
            pathname: "/employee",
            query: { code }
        }}>
            <TeamCardOpacity>
                <div className="teamCard">
                    {image && (
                        <div className="teamImage">
                            <img
                                src={image}
                                height="300"
                                alt="Funcionário"
                            />
                        </div>
                    )}
                    {!image && (
                        <div className="noImage">
                            <img
                                src={"/images/missing-image.png"}
                                height="300"
                                alt="Vazio"
                            />
                        </div>
                    )}
                    <div className="teamCardInfo">
                        <p>
                            <span>
                                {name}
                            </span>
                            <span>
                                {description}
                            </span>
                        </p>
                    </div>
                </div>
            </TeamCardOpacity>
        </Link>
    );
}

export default TeamCard;