import styles  from "./Card.module.css"
import Icon from "../../public/images/server.svg"
import MegaIcon from "../../public/images/mega.svg"
import AnyDeskIcon from "../../public/images/anydesk.svg"
import Image from "next/image"
import Link from "next/link"


export interface Props {
    unityName: string;
    sync: boolean;
    anydeskCount: number;
    cnes: string;
}

export default function Card(props: Props){

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.anydesk}>
                    <Image width={20} src={AnyDeskIcon}  alt="Anydesk Icon"/>
                    <span>{props.anydeskCount}</span>
                </div>
                <h2>{props.unityName}</h2>
                <div className={styles.mega}>
                    <Image width={20} src={MegaIcon} alt="Mega icon"/>
                    {props.sync ? <p>A unidade enviou backup ontem.</p> : 
                                <p>A unidade não enviou arquivos na última noite.</p>}
                </div>
                <p>CNES: {props.cnes}</p>
                <div className={styles.wrapButton}>
                    <Image
                        src={Icon} 
                        alt="Icon" 
                    />
                    <Link href={{pathname: "/unity", query: {cnes: props.cnes, unityName: props.unityName} }}>
                        <button className={styles.btn}>Detalhes</button>
                    </Link>
                </div>
            </div>
        </div>
    )
 
}