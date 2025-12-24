'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

type Locale = 'en' | 'ar';

interface LanguageSwitcherProps {
    currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    console.log('currentLocale', currentLocale)
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChange = (newLocale: Locale) => {
        if (newLocale === currentLocale) return;

        let newPath = pathname;



        if (newLocale === 'en') {
            newPath = pathname.replace(/^\/(en|ar)/, '/') || '/en';
        } else {
            if (!pathname.startsWith('/ar')) {
                newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`;
            }
        }
        console.log('newPath, currentLocale, pathname', { newPath, currentLocale, pathname })
        setOpen(false);
        router.push(newPath);
    };

    return (
        <div className="fixed top-10 right-20 z-50" ref={dropdownRef}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
                <Image src="/icons/world.png" alt="Language" width={24} height={24} />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                    <ul>
                        <li>
                            <button
                                onClick={() => handleChange('en')}
                                className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${currentLocale === 'en' ? 'text-(--color-primary) font-semibold' : ''
                                    }`}
                            >
                                English
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleChange('ar')}
                                className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${currentLocale === 'ar' ? 'text-(--color-primary) font-semibold' : ''
                                    }`}
                            >
                                العربية
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
