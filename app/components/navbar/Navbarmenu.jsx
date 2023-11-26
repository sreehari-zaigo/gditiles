"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Spinner } from "@nextui-org/react";
import { BiMailSend } from "react-icons/bi";
import GdiLogo from "../logo/GdiLogo";
import { useState } from "react";
import Sendenquerybtn from "../Sendenquerybtn";
import useSWR from "swr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedElement from "../AnimatedElement";
import { navbarMenuItem } from "@/utils/motions";
const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};

const Navbarmenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data, isLoading, isError } = useSWR(
        `/api/categories`,
        fetcher
    );
    const pathname = usePathname()
    const menuItems = [
        { title: "Home", path: "/" },
        { title: "Products", path: "/products/All" },
        { title: "Contact us", path: "/contact" },
        { title: "About us", path: "/about" },
    ];
    const variants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
                delay: 0.2,
                duration: 0.5,
            }
        },
        hidden: {
            y: 50,
            opacity: 0,
        }
    };
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="bg-slate-50">
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-danger"
                />
            </NavbarContent>
            <NavbarContent className="sm:hidden pr-3" justify="end">
                <NavbarBrand>
                    <GdiLogo />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-8" justify="start">
                <NavbarBrand>
                    <GdiLogo />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {/* <NavbarBrand>
                    <GdiLogo />
                    <p className="font-bold text-danger">abcc</p>
                </NavbarBrand> */}
                <NavbarItem isActive={pathname === '/'} >
                    <Link href="/" aria-current="page" className="text_orange" >
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text_orange font-medium"
                                radius="sm"
                                variant="light"
                            >
                                Products
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new" className="text-danger"><Link href={`/products/All`} className="text_orange">All Products</Link></DropdownItem>
                            {isLoading && <Spinner color='warning' size='md' />}
                            {isError && <p>Error loading data</p>}
                            {data && (
                                data.map((cat, index) => (
                                    <DropdownItem key="index" className="text-danger"><Link href={`/products/${cat.category_name}`} className="text_orange">{cat.category_name}</Link></DropdownItem>
                                ))
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/about'}>
                    <Link className="text_orange" href="/about" aria-current="about">
                        About us
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === '/contact'}>
                    <Link className="text_orange" href="/contact">
                        Contact us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Sendenquerybtn />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.title}-${index}`}>
                        <AnimatedElement animationProperties={navbarMenuItem(0.2 * index)}>
                            <Link
                                color="text_orange"
                                className="w-full text_orange"
                                href={item.path}
                                size="lg"
                            >
                                {item.title}
                            </Link>
                        </AnimatedElement>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    );
}

export default Navbarmenu