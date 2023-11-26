"use client"
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { MdListAlt } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight,MdOutlineDashboardCustomize } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarItems = [
    {
        name: "Product list",
        href: "/gdiadmin",
        icon: MdListAlt,
    },
    {
        name: "Add product",
        href: "/gdiadmin/addproduct",
        icon: MdOutlineDashboardCustomize,
    },
    {
        name: "Home",
        href: "/",
        icon: AiOutlineHome ,
    },
    // {
    //     name: "Mails",
    //     href: "/mails",
    //     icon: FiMail,
    // },
    // {
    //     name: "Contact",
    //     href: "/contact",
    //     icon: TiContacts,
    // },
];

const Sidebar = () => {
    const pathname = usePathname();
    const [isCollapsed,useIscollapse]=useState(false)
    const toggleSidebarcollapse = () => {
        useIscollapse(!isCollapsed)
    }
    //   const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

    return (
        <div className="sidebar__wrapper">
            <button className="arrowbtn" onClick={toggleSidebarcollapse}>
                {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
            <aside className="sidebar" data-collapse={isCollapsed}>
                <div className="sidebar__top">
                    <Image
                        width={80}
                        height={80}
                        className="sidebar__logo"
                        src="/gdilogo.png"
                        alt="logo"
                    />
                    <p className="sidebar__logo-name text-neutral-700">Gdi Tiles</p>
                </div>
                <ul className="sidebar__list">
                    {sidebarItems.map(({ name, href, icon: Icon }) => {
                        return (
                            <li className="sidebar__item" key={name}>
                                <Link
                                    className={`sidebar__link ${pathname === href ? "sidebar__link--active" : ""
                                        }`}
                                    href={href}
                                >
                                    <span className="sidebar__icon">
                                        <Icon />
                                    </span>
                                    <span className="sidebar__name">{name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;