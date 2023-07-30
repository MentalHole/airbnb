'use client';
import { IoEarthOutline, IoMenu, IoPersonCircleSharp } from 'react-icons/io5';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';

const UserMenu = () => {
    const registerModal = useRegisterModal()
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])
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
                    p-2
                    font-semibold
                    rounded-full
                    border-[1px]
                    border-transparent
                    text-center
                    transition
                    hover:bg-gray-200
                    max-sm:hidden
                "
            >
                Airbnb your home
            </div>
            <div
                className='
                    p-2
                    md:p-2
                    gap-3
                    rounded-full
                    text-lg
                    hover:bg-gray-200
                '
            >
                <IoEarthOutline />
            </div>
            <div
                onClick={toggleOpen}
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
                <Avatar />
            </div>
            {isOpen && (
                <div 
                    className='
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-3/4
                        bg-white
                        overflow-hidden
                        top-12
                        text-sm
                    '
                >
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem 
                                onClick={() => {}}
                                label="Login"
                            />
                            <MenuItem 
                                onClick={registerModal.onOpen}
                                label="Sign up"
                            />
                        </>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default UserMenu;