import { useRouter } from 'next/router'
import styles from '../styles/Unity.module.css'
import Image from 'next/image'
import MegaIcon from '../public/images/mega.svg'
import AnyDeskIcon from '../public/images/anydesk.svg'
import CopyIcon from '../public/images/copy-icon.png'


export default function Unity(){

    const router = useRouter()
    const {id, unityName} = router.query
    const fileList = [{name: 'file1.backup', date: '22/06/2022 16:00'}, {name: 'file2.backup', date: '21/06/2022 16:00'},
    {name: 'file2.backup', date: '21/06/2022 16:00'},{name: 'file2.backup', date: '21/06/2022 16:00'},{name: 'file2.backup', date: '21/06/2022 16:00'},
    {name: 'file2.backup', date: '21/06/2022 16:00'},{name: 'file2.backup', date: '21/06/2022 16:00'},{name: 'file2.backup', date: '21/06/2022 16:00'}]
    const anydeskList = [{name: 'RECEPÇÃO', id: '252645879'}, {name: 'SALA ENF', id: '965347542'}]

    return(
        <div className={styles.container}>
            <main>
                <h1>Detalhes: {unityName}</h1>
                <div className={styles.cards}>
                    <div className={styles.infoCard}>
                        <div className={styles.tableTittle}>
                            <Image width={20} src={MegaIcon}  alt="Mega Icon"/>
                            <p>Lista de arquivos enviados para o Mega.io</p>
                        </div>
                        <table>
                            <tr>
                                <th>Nome</th>
                                <th>Data</th>
                            </tr>
                            {fileList.map( (item) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                        </table>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.tableTittle}>
                            <Image width={20} src={AnyDeskIcon}  alt="Mega Icon"/>
                            <p>Anydesks cadastrados</p>
                        </div>
                        <table>
                            <tr>
                                <th>Computador</th>
                                <th>ID</th>
                            </tr>
                        {anydeskList.map( (item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td className={styles.anydeskNumber}>
                                    {item.id}
                                    <Image 
                                      className={styles.copyIcon}
                                      width={14} 
                                      src={CopyIcon} 
                                      alt="Copy icon" 
                                    />
                                </td>
                            </tr>
                        ))}
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}