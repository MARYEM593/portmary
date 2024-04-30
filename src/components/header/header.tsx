import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'

export default function header(
//     props:{
//     header:{
//         id: number;
//         name: string;
//         url: string;
//     }[];
// }
) {
    const t = useTranslations('Navbar');

    // Récupérez les données du header à partir de 'Navbar'
    const header = t('header');

    console.log("rrr", header);
  return (
    <div>
        <div className='max-w-mwidth1 w-defaultwidth m-auto flex flex-wrap justify-between'>
            <div className='basis-[20%]'>
                <img src=""/>

            </div>
            {/* <div className='basis-[70%]'>
                <ul className='flex flex-wrap m-auto justify-between'>
                    {header?.map((item, index)=>(
                    <li className='basis-[10%]' key={index}>
                        <Link href={`#`}>
                        {item?.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div> */}
        </div>
    </div>
  )
}
