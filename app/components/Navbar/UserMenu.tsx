'use client';
import { IoEarthOutline, IoMenu, IoPersonCircleSharp } from 'react-icons/io5';

const UserMenu = () => {
    return ( 
        <div
            className='
                flex
                flex-row
                items-center
                cursor-pointer
            '
        >
            <div
                className="
                    font-semibold
                    p-2.5
                    rounded-full
                    border-[1px]
                    border-transparent
                    transition
                    hover:bg-gray-200
                "
            >
                Airbnb your home
            </div>
            <div
                className='
                    p-2.5
                    rounded-full
                    text-lg
                    hover:bg-gray-200
                '
            >
                <IoEarthOutline />
            </div>
            <div
                className='
                    rounded-full
                    border-[1px]
                    flex
                    flex-row
                    items-center
                    shadow-sm
                    hover:shadow-md
                '
            >
                <div className="text-lg px-2">
                    <IoMenu />
                </div>
                <div className="text-4xl text-gray-400">
                    <IoPersonCircleSharp />
                </div>
            </div>
        </div>
     );
}
 
export default UserMenu;