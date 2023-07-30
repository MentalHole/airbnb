'use client'
import Image from'next/image'

const Avatar = () => {
    return ( 
        <Image
            className='
                rounded-full
                md: my-1
                md: mx-2
                max-sm:hidden
            '
            height="30"
            width="30"
            alt="Avatar"
            src={'https://i.pravatar.cc/300'}
        />
     );
}
 
export default Avatar;