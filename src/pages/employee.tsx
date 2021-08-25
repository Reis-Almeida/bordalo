import { useEffect, useState } from "react";
import { teamMembers } from "lib/team";

import Footer from "src/components/Footer";
import Link from "next/link";

import { useRouter } from 'next/router';


import AnimatedLoadingScreen from "src/components/AnimatedLoadingScreen";
import Header from "src/components/Header";
import Head from "next/head";

const MissingImage = "/images/missingPhoto.jpg";

const filterEmployee = (code : number) => {
    const emp = teamMembers.filter(e => e.code === code);

    if(emp.length) return emp[0];

    return null;
}

interface IEmployee {
    code : number;
    name : string;
    position : string;
    comercial : string;
    celular : string;
    whatsapp : string;
    email : string;
    image? : string;
    Funcao? : string;
}

const removedKeys = ['code', 'name', 'position'];

const filterKeys = (emp : IEmployee) => {
    const filteredKeys = Object.entries(emp).filter((k) => {
        if(!removedKeys.includes(k[0])) {
            return k
        }
    });

    return filteredKeys;
}

function Employee() {

    const { query } = useRouter();

    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [employee, setEmployee] = useState<IEmployee>();
    const [filteredKeys, setFilteredKeys] = useState<Array<any>>([])

    useEffect(() => {
        const { code } = query;
        
        if(typeof code === 'string') {
            const emp = filterEmployee(parseInt(code, 10));

            if(emp) setEmployee(emp);
        }

    }, []);

    useEffect(() => {
        if(employee) {
            const fKeys = filterKeys(employee);
            setFilteredKeys(fKeys);
        }

        setIsLoadingPage(false);

    }, [employee]);

    if(isLoadingPage) {
        return <AnimatedLoadingScreen />;
    }

    return (
        <>
            <Head>
                <title>{employee?.name} - Bordalo Imob </title>
                <meta name="description" content="Profissionais capacitados, atendimento personalizado e a qualidade que você merece. Seja para vender, alugar ou avaliar seu imóvel, nossa equipe está pronta para atendê-lo!" />
            </Head>
            <Header />

            <section className="containerStatic">
                <div className="EmployeeContentFull">

                    <div className="lineLinksItem">
                        <Link href="/team">
                            <a>
                                Equipe 
                            </a>
                        </Link>
                        <span>{">"}</span> 
                        {employee?.name}
                    </div>

                    <div className="employeeContainer">
                        <div>
                            {employee?.image && <img src={employee.image} width="350" height="350" />}
                            {!employee?.image && <img src={MissingImage} width="350" height="350" />}
                        </div>
                        <div>
                            <p>
                                {employee?.name}
                            </p>
                            <p>
                                {employee?.position}
                            </p>

                            <ul className="employeeListInfo">
                                {filteredKeys.map(v => {
                                    if(v[1] !== '' && v[0] !== "image") {
                                        return (
                                            <li key={v[0]}>
                                                <span>{v[0]}</span>: <a> {v[1]} </a> 
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    );
}

export default Employee;