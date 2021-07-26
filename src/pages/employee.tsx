/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from "react";
import { teamMembers } from "lib/team";

import section from 'src/styles/Section.module.css';
import Footer from "src/components/Footer";
import Link from "next/link";

import { useRouter } from 'next/router';

import MissingImage from "../../public/images/missingPhoto.jpg";

import AnimatedLoadingScreen from "src/components/AnimatedLoadingScreen";
import Header from "src/components/header";
import Head from "next/head";

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

            <section className={section.containerStatic}>
                <div className={section.EmployeeContentFull}>

                    <div className={section.lineLinksItem}>
                        <Link href="/team">
                            <a sx={{ color: 'primary' }}>
                                Equipe 
                            </a>
                        </Link>
                        <span>{">"}</span> 
                        {employee?.name}
                    </div>

                    <div className={section.employeeContainer}>
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

                            <ul className={section.employeeListInfo}>
                                {filteredKeys.map(v => {
                                    if(v[1] !== '' && v[0] !== "image") {
                                        return (
                                            <li key={v[0]}>
                                                <span>{v[0]}</span>: <a sx={{ color: "primary" }}> {v[1]} </a> 
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